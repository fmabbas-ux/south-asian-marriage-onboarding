/**
 * Dehleez feedback tracker (Google Apps Script, bound to a Google Sheet).
 * SETUP (about 3 minutes):
 *  1. Create a new Google Sheet named "Dehleez Feedback Tracker". Extensions > Apps Script. Paste this file.
 *  2. Run setup() once (authorise). It builds the Tracker, SLA and Dashboard tabs.
 *  3. Deploy > New deployment > type Web app > Execute as: Me > Who has access: Anyone > Deploy. Copy the /exec URL.
 *  4. Put that URL in the Vercel project env var FEEDBACK_WEBHOOK (or send it to Claude to set).
 * Each submission becomes one row. Statuses, owners and notes are edited by hand in the sheet.
 */
var HEAD=["Ref","Received (UTC)","Category","Message","Contact type","Contact","OK to contact","Game version","Language","Screen","Mode","Role","Round","Ending",
 "Status","Priority","Owner","Ack due","Target due","Acknowledged on","Resolved on","SLA state","Resolution / notes","Released in version"];
var CATS=[["suggestion","Suggestion",7,60,"P3"],["bug","Bug / something broken",2,14,"P2"],["content","Scenario feels wrong or offensive",3,14,"P2"],
 ["complaint","Complaint",2,14,"P2"],["safety","Safety concern",1,3,"P1"],["privacy","Privacy or data request",3,30,"P1"],["praise","Praise",14,0,"P4"],["other","Other",7,30,"P3"]];
function setup(){
 var ss=SpreadsheetApp.getActive(),t=ss.getSheetByName("Tracker")||ss.insertSheet("Tracker");
 t.clear();t.getRange(1,1,1,HEAD.length).setValues([HEAD]).setFontWeight("bold").setBackground("#7a1f2b").setFontColor("#ffffff");
 t.setFrozenRows(1);t.setColumnWidth(4,420);t.getRange("D:D").setWrap(true);t.getRange("W:W").setWrap(true);
 var st=["New","Acknowledged","In progress","Waiting on reviewer","Done","Won't do","Duplicate"];
 t.getRange("O2:O2000").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(st,true).build());
 t.getRange("P2:P2000").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(["P1","P2","P3","P4"],true).build());
 /* SLA state formula per row: Done > Overdue ack > Overdue target > On track */
 t.getRange("V2").setFormula('=ARRAYFORMULA(IF(A2:A="","",IF(OR(O2:O="Done",O2:O="Won\'t do",O2:O="Duplicate"),"Closed",IF(AND(T2:T="",R2:R<>"",TODAY()>R2:R),"ACK OVERDUE",IF(AND(S2:S<>"",TODAY()>S2:S),"TARGET OVERDUE","On track")))))');
 var r=t.getRange("V2:V2000"),rules=[SpreadsheetApp.newConditionalFormatRule().whenTextContains("OVERDUE").setBackground("#f4c7c3").setRanges([r]).build(),
  SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo("On track").setBackground("#d9ead3").setRanges([r]).build()];
 t.setConditionalFormatRules(rules);
 var s=ss.getSheetByName("SLA")||ss.insertSheet("SLA");s.clear();
 s.getRange(1,1,1,5).setValues([["Key","Category","First response (days)","Target resolution (days, 0 = none)","Default priority"]]).setFontWeight("bold");
 s.getRange(2,1,CATS.length,5).setValues(CATS);
 s.getRange(CATS.length+3,1).setValue("Rules: P1 (safety, privacy) is handled the same day it is seen. Safety reports are not monitored in real time; the form says so. Content concerns about a scenario pause that scenario if it is plainly harmful, then go to a named reviewer (lawyer, counsellor or scholar).");
 var d=ss.getSheetByName("Dashboard")||ss.insertSheet("Dashboard");d.clear();
 d.getRange("A1").setValue("Open items by category").setFontWeight("bold");
 d.getRange("A2:B2").setValues([["Category","Open"]]);
 for(var i=0;i<CATS.length;i++){d.getRange(3+i,1).setValue(CATS[i][0]);d.getRange(3+i,2).setFormula('=COUNTIFS(Tracker!C:C,A'+(3+i)+',Tracker!O:O,"<>Done",Tracker!O:O,"<>Won\'t do",Tracker!O:O,"<>Duplicate")')}
 d.getRange("D1").setValue("SLA breaches").setFontWeight("bold");d.getRange("D2").setFormula('=COUNTIF(Tracker!V:V,"*OVERDUE*")');
 d.getRange("D4").setValue("New this week").setFontWeight("bold");d.getRange("D5").setFormula('=COUNTIF(Tracker!B:B,">"&TEXT(TODAY()-7,"yyyy-mm-dd"))');
 d.getRange("D7").setValue("Done (all time)").setFontWeight("bold");d.getRange("D8").setFormula('=COUNTIF(Tracker!O:O,"Done")');
 var first=ss.getSheetByName("Sheet1");if(first&&ss.getSheets().length>1)ss.deleteSheet(first);
}
function doPost(e){
 var out=ContentService.createTextOutput();
 try{
  var r=JSON.parse(e.postData.contents),c=r.ctx||{},sh=SpreadsheetApp.getActive().getSheetByName("Tracker"),lock=LockService.getScriptLock();lock.waitLock(10000);
  var pr="P3";for(var i=0;i<CATS.length;i++)if(CATS[i][0]===r.category)pr=CATS[i][4];
  sh.appendRow([r.id,r.received,r.category,r.message,r.contactType,r.contact,r.okToContact?"Yes":"No",c.ver||"",c.lang||"",c.screen||"",c.mode||"",c.role||"",c.round||"",c.ending||"",
   "New",pr,"",r.ackDue,r.targetDue,"","","","",""]);
  lock.releaseLock();
  if(pr==="P1"){try{MailApp.sendEmail(Session.getEffectiveUser().getEmail(),"Dehleez P1 feedback "+r.id,"Category: "+r.category+"\n\n"+r.message)}catch(x){}}
  return out.setContent(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
 }catch(err){return out.setContent(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON)}
}
function doGet(){return ContentService.createTextOutput("Dehleez feedback webhook is live.")}
