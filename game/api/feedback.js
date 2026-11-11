/* POST /api/feedback  - receives suggestions, complaints, bugs, praise from the game.
   Sink: set env FEEDBACK_WEBHOOK to the Google Apps Script web-app URL from tracker/apps-script/Code.gs
   (it appends to the tracker sheet with SLA dates). Without a webhook we refuse, so nothing is silently lost. */
var CATS={
 suggestion:{ack:7,fix:60},bug:{ack:2,fix:14},content:{ack:3,fix:14},complaint:{ack:2,fix:14},
 safety:{ack:1,fix:3},privacy:{ack:3,fix:30},praise:{ack:14,fix:0},other:{ack:7,fix:30}};
var CT=["none","email","whatsapp","phone","instagram","x","facebook","other"];
var hits={};
function clip(s,n){return String(s==null?"":s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,"").slice(0,n)}
module.exports=async function(req,res){
 res.setHeader("Cache-Control","no-store");
 if(req.method!=="POST"){res.status(405).json({ok:false,error:"method"});return}
 var b=req.body;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){b=null}}
 if(!b||typeof b!=="object"){res.status(400).json({ok:false,error:"bad_request"});return}
 if(b.website){res.status(200).json({ok:true,id:"FB-0",ackDays:7});return} /* honeypot: pretend success */
 var ip=String((req.headers["x-forwarded-for"]||"").split(",")[0]||"x").trim(),now=Date.now();
 hits[ip]=(hits[ip]||[]).filter(function(t){return now-t<3600000});
 if(hits[ip].length>=6){res.status(429).json({ok:false,error:"rate"});return}
 var cat=CATS[b.cat]?b.cat:"other",msg=clip(b.msg,2000).trim();
 if(msg.length<5){res.status(400).json({ok:false,error:"short"});return}
 var ct=CT.indexOf(b.ct)>-1?b.ct:"none",cv=ct==="none"?"":clip(b.cv,120).trim();
 var d=new Date(),ymd=d.toISOString().slice(0,10).replace(/-/g,""),
  id="FB-"+ymd+"-"+Math.random().toString(36).slice(2,6).toUpperCase(),
  add=function(n){return n?new Date(now+n*864e5).toISOString().slice(0,10):""};
 var c=b.ctx&&typeof b.ctx==="object"?b.ctx:{};
 var rec={id:id,received:d.toISOString(),category:cat,message:msg,contactType:ct,contact:cv,
  okToContact:!!b.ok&&!!cv,ackDue:add(CATS[cat].ack),targetDue:add(CATS[cat].fix),
  ctx:{ver:clip(c.ver,12),lang:clip(c.lang,4),screen:clip(c.screen,12),mode:clip(c.mode,8),role:clip(c.role,2),round:+c.round||0,rounds:+c.rounds||0,ending:clip(c.ending,24)},
  status:"New"};
 var hook=process.env.FEEDBACK_WEBHOOK;
 if(!hook){res.status(503).json({ok:false,error:"not_configured"});return}
 try{var r=await fetch(hook,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(rec),redirect:"follow"});
  if(!r.ok)throw new Error("sink "+r.status)}catch(e){res.status(502).json({ok:false,error:"sink"});return}
 hits[ip].push(now);
 res.status(200).json({ok:true,id:id,ackDays:CATS[cat].ack});
};
