/* v0.5 story layer: gossip chains, wishlists, treasures, and the "chill" between the couple.
   Everything here is deterministic from shared state (meters, ledger, both players' picks), so two phones stay in sync.
   Drafts for play-testing: family-law, safety and faith content still needs named reviewers before paid launch. */
function X(o,p){for(var k in p)o[k]=p[k];return o}

/* ---------- wishlists ---------- */
var WISHES={
mil:[["W_mil1","Be taken for the knee check-up she keeps postponing","گھٹنوں کے معائنے کے لیے لے جایا جانا"],["W_mil2","Have you learn her family biryani, side by side, one slow Sunday","اپنی خاندانی بریانی آپ کو سکھانا"]],
fil:[["W_fil1","Have someone sit with him and sort his pension papers and bank app","پنشن کے کاغذات اور بینک ایپ میں مدد"]],
bmom:[["W_bm1","A birthday lunch where she is the guest of honour","سالگرہ کا لنچ جس میں وہ مہمانِ خصوصی ہوں"]],
bdad:[["W_bd1","To be asked for his advice on the flat decision","فلیٹ کے فیصلے پر ان سے مشورہ لیا جانا"]],
sana:[["W_sa1","Help preparing for her job interview","نوکری کے انٹرویو کی تیاری میں مدد"]],
hamza:[["W_ha1","An introduction to someone at your office for his CV","اپنے دفتر میں کسی سے تعارف"]],
aunty:[["W_au1","To be asked to host the next family dinner","اگلے خاندانی کھانے کی میزبانی کی دعوت"]]};
function wtxt(w){return LG=="ur"&&w[2]?w[2]:w[1]}

/* ---------- treasures: who holds them, who competes, what it is worth ---------- */
var TREAS={
gold:{h:"mil",A:"B",comp:"sana",base:12,n:["Dadi's gold set","دادی کا سونے کا سیٹ"],adv:function(){return((S.cdone.G1!=null&&S.q.G1<2)?5:0)-((S.F.sana.B+S.F.sana.G>0)?4:0)},
 res:{A:{e:[2,1,6,6,8,-4],l:{mil:[8,6],sana:[-5,-3]},t:"Ammi-ji presses the old gold set into the bride's hands: 'You came when I needed someone.' Sana smiles with her mouth only."},
  C:{e:[0,-2,-3,-3,0,3],l:{mil:[-2,0],sana:[3,2]},t:"Ammi-ji gives the set to Sana. 'She is my daughter.' It isn't cruel, it just isn't you, and everyone in the room knows why."},
  N:{e:[0,0,-1,0,0,1],l:{},t:"Ammi-ji folds the dupatta back over the gold. 'Not yet. I'll know when I know.' The set stays in the trunk, and so does the question."}}},
seed:{h:"fil",A:"G",comp:"hamza",base:16,n:["Abbu-ji's seed money","ابو جی کی بنیادی رقم"],adv:function(){return S.F.hamza.G+S.F.hamza.B>0?-3:0},
 res:{A:{e:[2,3,3,3,10,-3],l:{fil:[8,8],hamza:[-4,-6]},t:"Abbu-ji slides the envelope across the table to the groom: 'Do it properly.' Hamza says 'mubarak' a beat too late."},
  C:{e:[-1,-3,0,-2,0,3],l:{hamza:[3,3],fil:[-1,-2]},t:"Abbu-ji backs Hamza's plan. Your own plan gets a polite nod. Money you hoped for goes elsewhere."},
  N:{e:[0,0,-1,0,0,1],l:{},t:"Abbu-ji says he will 'think a bit more'. Both brothers go on waiting, and watching each other."}}},
bangles:{h:"bmom",A:"B",comp:"cousin Hira",base:14,n:["Ammi's heirloom bangles","امی کی وراثتی چوڑیاں"],adv:function(){return 0},
 res:{A:{e:[2,2,5,3,4,-3],l:{bmom:[8,8],bdad:[4,4]},t:"Ammi slides her own mother's bangles onto the bride's wrists: 'Because you kept your mother close.' Nobody is quite dry-eyed."},
  C:{e:[0,-1,-2,-1,0,2],l:{bmom:[-2,-1]},t:"Ammi gives the bangles to cousin Hira, who 'calls every Sunday'. You realise you haven't."},
  N:{e:[0,0,-1,0,0,1],l:{},t:"Ammi puts the bangles back in the cupboard: 'Let's see.' She will keep watching who calls."}}}};
function trScore(k){var T=TREAS[k],h=T.h,A=T.A,O2=A=="B"?"G":"B",R=S.R[h];return{a:R[A]+5*(S.F[h][A]+.5*S.F[h][O2]),c:T.base+(T.adv?T.adv():0),fav:S.F[h][A],reg:R[A]}}

/* ---------- engine ---------- */
var SCI=null;function sci(id){if(!SCI){SCI={};SC.forEach(function(c,i){SCI[c.id]=i})}return SCI[id]}
function initF(){var F={};NPC.forEach(function(c){F[c]={B:0,G:0}});return F}
function pickSpecial(){var L=S.list.length,big=L>=40,cap=big?14:6;if(S.nsp>=cap||S.pos-S.lastC<2)return null;
for(var e=0;e<S.echo.length;e++)if(S.pos>=S.echo[e].at){var id=S.echo.splice(e,1)[0].id;return{i:sci(id),k:"e"}}
var caps={t:big?3:2,c:2,g:big?4:2,w:big?6:3},order=["t","c","g","w"];
for(var o=0;o<order.length;o++){var k=order[o],n=k=="c"?S.cc:S.cnt[k];if(n>=caps[k])continue;
for(var i=0;i<SC.length;i++){var c=SC[i];if(!c.cr||(c.ev||"c")!=k||S.cdone[c.id]!=null)continue;
var ok=false;try{ok=k=="w"?(S.pos>=1&&avgR(c.wc)>=-1):(k=="t"?S.pos>=Math.ceil(L*c.at):c.trig())}catch(x){}
if(ok)return{i:i,k:k}}}
return null}

/* runs once per round inside reveal(), before meters change. Returns extra lines for the result card. */
function storyHook(c,oB,oG,eff,led){var ex=[],R=S.R;
function L(id){return led[id]||(led[id]={B:0,G:0,fB:0,fG:0})}
[["B",oB],["G",oG]].forEach(function(pp){var p=pp[0],o=pp[1];
if(o.rl)for(var id in o.rl){var d=o.rl[id],x=R[id],dd=L(id);x[p]=clampR(x[p]+d[0]);x["f"+p]=clampR(x["f"+p]+(d[1]||0));dd[p]+=d[0];dd["f"+p]+=(d[1]||0)}
if(o.wf&&c.wc){S.F[c.wc][p]+=o.s=="k"?2:1;S.W[c.wid]=(S.W[c.wid]||"")+p}});
var q=(oB.s=="k")+(oG.s=="k");S.q[c.id]=q;if(!c.cr){var tc=treeCls(q);S.path.push({id:c.id,cls:tc,pos:S.pos});treeLink(c.id,tc)}S.hist.push({id:c.id,sB:oB.s,sG:oG.s});
if(c.wc){var who=S.W[c.wid]||"";if(who)ex.push("🎁 "+t("wishDone",{n:nm(c.wc),w:who.indexOf("B")>-1&&who.indexOf("G")>-1?t("bothOf"):(who==S.role?t("you"):t("partner"))}));else ex.push("🎁 "+t("wishMissed",{n:nm(c.wc)}))}
if(c.rep){var was=S.chill;S.chill=Math.max(0,S.chill-q*2);if(was>0&&S.chill==0)ex.push("☀️ "+t("chillClear"));else if(was>0)ex.push("🌤️ "+t("chillLess"))}
else if(S.chill>0){eff[0]-=3;eff[5]+=3;S.chill--;ex.push("😶 "+t("chillHit"))}
if(c.chill&&q<2){S.chill=Math.max(S.chill,q==0?3:2);ex.push("😶 "+t("chillSet",{n:S.chill}))}
if(c.echo&&q<2)S.echo.push({id:c.echo,at:S.pos+2});
if(c.ev=="g"&&q==2)ex.push("🕊️ "+t("gosHealed"));
if(c.ev=="t"){var T=TREAS[c.tr],sc=trScore(c.tr),M=(oB.tm||0)+(oG.tm||0),diff=sc.a-sc.c+M,A=T.A,w=(diff>=3&&sc.reg>=2&&sc.fav>=2)?"A":(diff<=-3?"C":"N"),rs=T.res[w];S.T[c.tr]=w;
for(var z=0;z<6;z++)eff[z]+=rs.e[z];for(var id2 in rs.l){var d2=rs.l[id2],x2=R[id2],dd2=L(id2);x2.B=clampR(x2.B+d2[0]);x2.G=clampR(x2.G+d2[1]);dd2.B+=d2[0];dd2.G+=d2[1]}
ex.push((w=="A"?"🏆 ":(w=="C"?"💔 ":"⏳ "))+rs.t);
ex.push(t("trWhy",{r:Math.round(sc.reg),f:sc.fav,c:Math.round(sc.c),m:(M>0?"+":"")+M}))}
return ex}

/* option-level advice: how this choice moves you toward (or away from) each treasure */
function tAdvice(c,o){var out=[];
Object.keys(TREAS).forEach(function(k){var T=TREAS[k];if(S.T[k])return;
if(c.tr==k){var m=o.tm||0;if(m>0)out.push({k:k,x:"up"});else if(m<0)out.push({k:k,x:"down"});return}
if(o.wf&&c.wc==T.h){out.push({k:k,x:"fav"});return}
if(o.wf&&c.wc==T.comp){out.push({k:k,x:"rival"});return}
if((c.x||[]).indexOf(T.h)>-1){var I=lensI(T.h,o);if(I>=2)out.push({k:k,x:"up"});else if(I<=-2)out.push({k:k,x:"down"})}});return out}

/* ---------- panels ---------- */
function storyPanel(){var me=S.role,ot=me=="B"?"G":"B",h=treeHTML()+'<h2 style="margin-top:12px">🎁 '+t("wishT")+'</h2><p class="mute" style="margin:0 0 4px">'+t("wishS")+"</p>";
Object.keys(WISHES).forEach(function(id){WISHES[id].forEach(function(w){var st,who=S.W[w[0]]||"";
if(who)st="✅ "+(who.indexOf(me)>-1&&who.indexOf(ot)>-1?t("bothOf"):(who.indexOf(me)>-1?t("you"):t("partner")));
else if(S.cdone[w[0]]!=null)st="⌛ "+t("wishOpen");else if(avgR(id)>=-1)st="💬 "+t("wishSoon");else st="🧊 "+t("wishCold");
h+='<div class="wl"><b>'+nm(id)+":</b> "+wtxt(w)+' <span class="mute">'+st+"</span></div>"})});
h+='<h2 style="margin-top:12px">🏺 '+t("trT")+'</h2><p class="mute" style="margin:0 0 4px">'+t("trS")+"</p>";
Object.keys(TREAS).forEach(function(k){var T=TREAS[k],r=S.T[k],sc=trScore(k),nmT=LG=="ur"?T.n[1]:T.n[0],st;
if(r=="A")st="🏆 "+t("trGot");else if(r=="C")st="💔 "+t("trLost");else if(r=="N")st="⏳ "+t("trLater");else st="🔒 "+t("trWait",{n:nm(T.h)});
var bar=r?"":' <span class="mute">('+t("trProg",{r:Math.round(sc.reg),f:sc.fav})+")</span>";
h+='<div class="wl"><b>'+nmT+"</b> · "+nm(T.h)+" · "+st+bar+"</div>"});return h}
function treasuresHTML(){var g=[];Object.keys(TREAS).forEach(function(k){var r=S.T[k];if(!r)return;var T=TREAS[k];g.push((r=="A"?"🏆 ":(r=="C"?"💔 ":"⏳ "))+(LG=="ur"?T.n[1]:T.n[0])+" · "+(r=="A"?t("trGot"):(r=="C"?t("trLost"):t("trLater"))))});
return g.length?'<div class="card"><b>🏺 '+t("trT")+"</b><p style='margin:2px 0'>"+g.join("<br>")+"</p></div>":""}
function chillHTML(){return S.chill>0?'<div class="warn">😶 '+t("chillBan",{n:S.chill})+"</div>":""}

/* =====================================================================
   GOSSIP: chains of who-told-whom. Each can echo into a later scene and leave the couple "chilly".
   Triggers read the ledger, so what you did earlier decides whether the whispers start.
   ===================================================================== */
A("G1",99,"kit","Gossip","What Aunty heard","آنٹی نے کیا سنا",["aunty","mil","sana"],["aunty","Beta, tumhari saas aur nand kuch keh rahi thin..."],
"Aunty lowers her voice in the kitchen: 'I'm telling you for your own good. Ammi-ji and Sana were saying you think you're 'too modern', and that they should have chosen differently.' Your ears burn. Your hands keep chopping. Aunty watches your face to decide how much more to repeat.",
"Your wife is silent at dinner, jaw tight, answering in single words. Later she says: 'Do you know what your mother and sister say about me?' You have heard nothing, and you're being asked to answer for it.",
[X(O("r","Confront Ammi-ji and Sana at dinner: 'I know what you've been saying.'",[-4,0,-3,-3,0,4],"The table goes silent. Aunty, the source, quietly leaves with her tea. By morning there are three versions of what was said, and the bride now has a reputation.","Confront Ammi-ji and Sana at dinner in front of everyone: 'I know what you've been saying.'","Defend your mother and sister at once: 'Aunty loves drama, you can't believe her.'"),{rl:{mil:[-5,-2],sana:[-4,-2]}}),
X(O("p","Smile, say nothing, and become extra helpful to prove them wrong.",[-1,-4,1,0,0,3],"Ammi-ji accepts the extra tea without a word. Nothing is proven, and you are more tired than yesterday.","Smile and say nothing. Become extra helpful to prove them wrong.","Tell your wife it's probably nothing and she should smile more at your mother."),{rl:{mil:[1,0]}}),
X(O("a","Keep away from Ammi-ji and Sana. Say nothing to anyone.",[-2,-1,-1,0,0,2],"Distance grows in the house like damp. Everyone senses it, nobody names it.","Keep away from Ammi-ji and Sana. Say nothing to anyone.","Stay out of it: 'I'm sure it's a misunderstanding.' Change the subject."),{rl:{mil:[-1,0]}}),
X(O("k","Thank Aunty, don't pass it on. Tell your partner calmly what hurt, ask them not to pick a side, and check with Ammi-ji privately.",[3,3,1,0,0,-3],"Nothing explodes. Ammi-ji, asked gently, is embarrassed: she was venting about something else. It's not full peace, but it's honest ground.","Thank Aunty and don't carry it further. Tell your husband: 'I heard something that hurt. I'm not sure it's true. I don't want you to pick a side, I want us to check kindly.' Then raise it with Ammi-ji privately.","Listen first, don't defend: 'That sounds painful. Let's find out what was said, privately and together. I'm on your side and I won't be rude to my mother.'"),{rl:{mil:[2,1]}})],
"Gossip comes through a messenger who profits from your reaction. Verify first, never retaliate in public, and don't make your partner choose sides.",
{cr:1,ev:"g",chill:1,echo:"G1e",trig:function(){return S.pos>=2&&(S.R.mil.B<=-3||S.R.sana.B<=-3)}});

A("G1e",99,"bed","Two days later","The chill","ٹھنڈک",[],null,
"Since the kitchen, you and your husband haven't really talked. You keep replaying what Aunty said. Tonight he asks what's wrong, and you can't tell whether to speak or whether he already knew.",
"Since that night your wife has gone distant. At dinner she barely looked at you. You suspect it's about something your mother or Sana said, and part of you feels she should have come to you first.",
[O("r","Challenge them: 'You knew and said nothing. Whose side are you on?'",[-4,0,0,0,0,4],"Now it's a fight about loyalty instead of a misunderstanding about a sentence. The distance doubles.","Say: 'You knew and said nothing. Whose side are you on?'","Say: 'You're making a big thing out of nothing and punishing me for it.'"),
O("a","Say 'it's nothing' and keep the distance.",[-2,-1,0,0,0,2],"Both of you lie politely. The bed feels wider."),
O("p","Apologise for something that isn't your fault, just to end the silence.",[-1,-4,0,0,0,2],"The silence ends. The hurt goes underground, where it grows."),
X(O("k","Name the distance, not the blame: 'I've felt far from you since last week and I miss you. Can we talk without defending?'",[4,2,0,0,0,-4],"Saying 'I miss you' does what no argument could. You start from the same side of the bed.","Say: 'I've felt far from you since that day in the kitchen and I miss you. Can I tell you what I heard, and can we talk without defending?'","Say: 'I've felt you pulling away and I miss you. I'm not defending anyone. Tell me what happened, I'll listen.'"),{})],
"A rumour does its second damage between the couple. Name the distance first, then the facts.",
{cr:1,ev:"e",rep:1});

A("G2","99","liv","Gossip","Hamza's awkward grin","ہمزہ کی عجیب مسکراہٹ",["hamza","bmom"],["hamza","Bhai, ek baat hai... mat poochna."],
"Your husband is tight-lipped all evening. When you ask, he says: 'Hamza told me what your mother said at the dinner, that I'm not providing enough. Is that what your family thinks?' You never said it. You did, once, to your mother, in tears, after a long day.",
"Hamza grins awkwardly and says: 'Bhai, do you know what your wife's mother is telling people? That you can't provide for her daughter.' Your face burns. At home your wife waits with dinner and has no idea you know.",
[X(O("r","Snap back: 'Your brother-in-law is a gossip. Don't blame me because your mother talks.'",[-4,0,-2,-2,0,4],"Everyone is now defending someone who wasn't even there. The dinner goes cold.","Snap back: 'Hamza's a gossip. Don't blame me because my mother talks.'","Say: 'Your family thinks I'm a failure and you told them!'"),{rl:{bmom:[-3,-1],hamza:[-2,0]}}),
X(O("p","Promise to earn more, take on extra work and not mention it again.",[-1,-4,0,1,1,3],"Extra hours start the next week. Resentment starts the same day.","Promise it won't happen again and agree not to confide in your mother.","Promise to earn more and never complain about money."),{rl:{bmom:[0,-1]}}),
X(O("a","Say nothing. Avoid Hamza and your in-laws for a while.",[-2,-1,-1,-1,0,2],"The avoidance is noticed. The story fills the silence."),{rl:{hamza:[-1,0]}}),
X(O("k","Ask what's worrying them. Agree a joint money plan, then tell the in-laws as a couple: 'If you're worried, speak to us, not about us.'",[3,2,0,1,2,-3],"A plan answers a rumour better than anger. Your mother, told directly, is embarrassed and relieved.","Own it honestly: 'I did confide in Ammi after a hard day. I'm sorry it travelled. Let's agree a money plan, and I'll ask her to stop discussing us.'","Ask without accusing: 'I heard something about money. I'd rather hear it from you. What's worrying you?' Agree a plan, then speak to her family together."),{rl:{bmom:[2,1],hamza:[1,0]}})],
"Money worry travels fastest. Take the worry directly to your partner, write a shared plan, and ask the family to speak to you, not about you.",
{cr:1,ev:"g",chill:1,echo:"G2e",trig:function(){return S.pos>=2&&(S.R.bmom.G<=-3||S.R.bdad.G<=-3||S.R.hamza.G<=-3)}});

A("G2e","99","liv","The next morning","'Clearing the air'","ہوا صاف کرنے کی کال",["bmom"],["bmom","Beta, maine to bas ek maa ki fikr kahi thi."],
"Your mother phones, bright and breezy, 'to clear the air'. Your husband listens on speaker with arms crossed. She says, 'I only said what any mother worries about.'",
"Your mother-in-law phones 'to clear the air' while your wife watches your face. You hear yourself about to say something you can't take back.",
[O("r","Take the phone and tell her sharply she has no right to judge.",[-3,0,-2,-1,0,4],"The call ends in a click. Two families are now offended instead of one."),
O("p","Apologise on everyone's behalf and promise it won't happen again.",[-1,-3,1,0,0,2],"Peace on the phone. Inside the marriage you've promised something that isn't yours to promise."),
O("a","Pass the phone back and leave the room.",[-2,-1,-1,0,0,2],"The call goes on without you. So does the problem."),
O("k","Thank her for calling. Say: 'We'd like our money and marriage decisions to stay between us two. If you're worried, speak to us, not about us.'",[3,2,1,0,0,-3],"Polite, firm, warm. Your mother-in-law has heard the boundary and the love in the same breath.")],
"Boundaries land best when they come with thanks. Say them together, once, kindly.",
{cr:1,ev:"e",rep:1});

A("G3","99","kit","Gossip","The vent that travelled","جو بات پھیل گئی",["mil","aunty","bmom"],["mil","Suna hai is ghar mein dum ghutta hai..."],
"At breakfast Ammi-ji says lightly, 'I hear this house is suffocating.' That was your exact word, to your mother, two nights ago. Somebody carried it. Everyone is watching your face.",
"At breakfast your mother quotes something your wife said in confidence to her own mother, word for word. Your wife goes white. Nobody explains how it got here.",
[X(O("r","Hit back: 'Who told you? Was it Aunty? Or my mother?'",[-3,0,-2,-2,0,4],"The hunt for the leak becomes the story. Nobody remembers the original feeling.","Hit back: 'Who told you? Was it Aunty?'","Snap at your mother: 'Do you have to repeat everything?'"),{rl:{mil:[-3,-2],aunty:[-3,-1]}}),
X(O("p","Apologise to everyone and swear you love the house.",[-1,-4,1,1,0,3],"Everyone relaxes. You've denied something true to keep them comfortable."),{rl:{mil:[1,0]}}),
O("a","Laugh it off and change the subject.",[-2,-1,0,0,0,2],"The laugh is thin. The question stays under the table."),
X(O("k","Own it kindly: 'Yes, I said it on a bad night. The house isn't the problem. I was overwhelmed. I'd rather say it to you than to anyone else.'",[3,3,2,1,0,-3],"Honesty takes the air out of gossip. Ammi-ji softens: she'd felt unsure how to ask.","Own it kindly: 'Yes, I said it on a bad night. I was overwhelmed, not unhappy with you. I'd rather say it to you than to anyone else.'","Back her up: 'We all have bad nights. Let's talk about what's making things heavy, together.'"),{rl:{mil:[2,1]}})],
"What you tell a third person first, you'll hear from them later. Say hard things to your partner first, then kindly to the person involved.",
{cr:1,ev:"g",chill:1,trig:function(){return S.pos>=4&&S.hist.filter(function(h){return h.sB=="a"||h.sB=="p"}).length>=3}});

A("G4","99","yard","Gossip","One sentence, two stories","ایک جملہ، دو کہانیاں",["mil","bmom"],null,
"Ammi-ji tells you: 'Your mother said we're too traditional. I was only offering her tea!' The next morning your own mother says: 'Your mother-in-law said we're too fancy.' Each swears the other started it. You suspect one sentence became two.",
"Your mother says: 'Your mother-in-law called us too fancy.' Later your mother-in-law says: 'Your wife's mother called us old-fashioned.' Each has told you the other started it.",
[X(O("r","Phone the other side and demand to know what was said.",[-3,0,-3,-2,0,4],"Now it's a phone war between two mothers, with the couple as the post office.","Phone your mother and demand to know what she said about Ammi-ji.","Tell your mother she's being unfair to your family."),{rl:{mil:[-3,-1],bmom:[-3,-1]}}),
X(O("p","Tell each side what they want to hear.",[-1,-3,2,1,0,3],"Two mothers feel heard. Both have been told the opposite, and sooner or later they'll compare."),{rl:{mil:[1,-1],bmom:[1,-1]}}),
O("a","Say nothing to either of them.",[-2,-1,-1,0,0,2],"Both mothers conclude you agree with the other."),
X(O("k","Refuse to be the post office: 'I wasn't there, I won't repeat it. If something was said, I'd rather you two talk, with tea.'",[3,3,3,2,0,-3],"Two mothers, one pot of chai, one awkward laugh. The sentence turns out to have been a joke that was never funny."),{rl:{mil:[2,1],bmom:[2,1]}})],
"Messengers edit sentences. Decline the job, wish both sides well, and invite them to talk directly.",
{cr:1,ev:"g",chill:1,trig:function(){return S.pos>=5&&(S.m[2]<=50||S.m[3]<=50)}});

/* =====================================================================
   WISHES: small asks from people in the house. Doing them costs you something. That is the point.
   Credit goes to whoever picks the helping option, and it earns treasures later.
   ===================================================================== */
function WS(id,wc,wid,room,t,u,x,say,b,g,k4,ke,pt,pc,n){
A(id,99,room,"A wish",t,u,x,say,b,g,
[X(O("k",k4[0],ke,k4[1],k4[2],k4[3]),{wf:1}),
X(O("p",pt,[0,-3,1,0,-2,2],pc),{wf:1}),
O("a","Say 'soon, inshaAllah' and let it slide.",[0,0,-1,0,0,1],"'Soon' is heard as 'never'. The wish is remembered."),
O("r","Brush it off: 'We simply don't have the time for this.'",[-1,0,-2,-1,0,2],"Said lightly, heard heavily. A small request becomes a small wall.")],
n,{cr:1,ev:"w",wc:wc,wid:wid});}

WS("W1","mil","W_mil1","liv","Ammi-ji's knees","امی جی کے گھٹنے",["mil"],["mil","Koi baat nahi beta, main theek hoon..."],
"Ammi-ji winces on the stairs again. 'It's nothing,' she says, the way people say it when they hope you'll insist. The appointment she keeps postponing has been postponed for a year.",
"Your mother winces on the stairs again and says it's nothing. Your wife sees it too, and looks at you.",
["Book the appointment and go with her yourself: 'Ammi-ji, Saturday, I'm taking you. No arguments.'","Her knees get looked at, and she tells three relatives who took her.","Book the appointment and go with her yourself. Don't ask, just arrange: 'Saturday, Ammi-ji. I'm taking you.'","Book it and go with her. Say: 'We're going Saturday, I'll drive. I'd like to be there.'"],[1,-1,2,1,-2,1],
"Insist, but pay for everything and cancel your own plans.","Her knee is booked. You are broke, and quietly resentful.",
"The small, specific, costly gesture is the one people remember. Do it in person, and do it without making it a favour.");
WS("W2","mil","W_mil2","kit","Ammi-ji's biryani","امی جی کی بریانی",["mil","sana"],["mil","Yeh masala meri maa se mila tha..."],
"Ammi-ji is stirring the pot when she says, to nobody, 'This biryani died with my mother-in-law's generation. Nobody learns it now.' She's looking at the stove, not at you.",
"Your mother is making her biryani and mutters that nobody learns it any more. Your wife hears it.",
["Ask her to teach you, properly: 'Ammi-ji, show me, from the first onion. I'll take notes.'","A slow, fragrant Sunday. She tells stories you've never heard.","Ask her to teach you, properly, from the first onion, notebook in hand.","Ask to learn it together and take a Sunday to cook with her."],[1,0,2,1,0,0],
"Learn it, but cook it for forty people before you're ready.","The biryani is a hit and your Sunday is gone.",
"Being taught is a gift you give the teacher. Ask for the family's craft, not just the family's approval.");
WS("W3","fil","W_fil1","liv","Abbu-ji's paperwork","ابو جی کے کاغذات",["fil"],["fil","Yeh app wagera meri samajh se bahar hai."],
"Abbu-ji squints at his phone in despair: the pension portal has logged him out again. He won't ask for help. He puts the phone down very carefully and pretends he's read the news.",
"Your father struggles with the pension portal and won't ask for help. Your wife notices before you do.",
["Sit with him for a whole afternoon, set it up and write the steps on paper: 'Abbu-ji, let's do this together.'","He shows the paper to his friends. He talks about it for a month.","Sit beside him, set it up, and write the steps in large letters.","Take an afternoon, get everything working, and write out the steps with him."],[1,0,2,1,-1,0],
"Do it all for him quickly, so he never has to learn it.","The portal works, and Abbu-ji feels a bit smaller.",
"Respect shows up as time. Teach, don't take over.");
WS("W4","bmom","W_bm1","liv","Ammi's birthday","امی کی سالگرہ",["bmom"],["bmom","Beta, koi baat nahi, main ne kabhi kuch nahi maanga."],
"Your mother's birthday is on Friday. 'I don't need anything, beta,' she says, in the voice that means she'd love a call, a visit and a cake, in that order.",
"Your wife's mother's birthday is on Friday. Your wife says she doesn't need anything. She absolutely does.",
["Take her out to lunch, make her the guest of honour, no phone for either of you: 'Ammi, today, you choose the restaurant.'","She tells the whole street about the lunch.","Take her to lunch of her choice and keep phones away.","Take her out, let her choose the place, and keep the whole afternoon free."],[1,-1,2,1,-2,0],
"Throw a big party instead, though she'd have loved something quiet.","Everyone loved it. She spent the day hosting her own birthday.",
"A birthday is a test of attention, not of budget. Show up, undistracted.");
WS("W5","bdad","W_bd1","liv","Abbu's advice","ابو کا مشورہ",["bdad"],["bdad","Mera kya hai, tum log jo theek samjho."],
"Abbu hovers while you discuss the flat. He knows property, he's seen three decades of rent agreements, and he'll never offer unless you ask.",
"Your wife's father hovers while you talk about the flat. He knows property, and he will never offer unless asked.",
["Ask for his advice, and listen: 'Abbu, we are deciding about the flat. What would you check first?'","He takes notes on the back of an envelope and phones every day after.","Ask for his advice, and take it seriously: 'Abbu, what would you check?'","Invite him to look at the papers with you and ask what he would check."],[1,0,1,1,-1,0],
"Do exactly what he says, and let him decide for you.","He's thrilled, and the flat is now his project.",
"Asking an elder's advice honours them. It doesn't mean you have to obey, only that you listened.");
WS("W6","sana","W_sa1","bed","Sana's interview","ثناء کا انٹرویو",["sana"],["sana","Bhabhi, bas thoda sa practise karwa do..."],
"Sana has a big interview on Monday. She asks, hesitantly, whether you'd run through a few questions with her. She's trying not to look nervous.",
"Your sister has a big interview on Monday and asks your wife for practice questions, trying not to seem nervous.",
["Spend a full evening drilling mock questions with her, and cheer her loudly on Monday.","She nails it. She tells everyone who helped.","Run mock questions for a whole evening, with honest feedback.","Spend an evening practising, and send her a good-luck message before the interview."],[1,-1,1,1,0,0],
"Redo her CV, buy her an outfit, and take her to the interview.","She gets the job and calls you her fairy godmother, and means 'obligated'.",
"Helping a rival becomes an alliance. A small, real investment changes how someone sees you.");
WS("W7","hamza","W_ha1","liv","Hamza's CV","ہمزہ کا سی وی",["hamza"],["hamza","Bhai, agar kisi ko jaan-te ho to..."],
"Hamza's been job-hunting for months and too proud to ask outright. Tonight he mentions an opening at your office, very casually, looking at the television.",
"Your brother mentions, looking at the TV, an opening at your wife's office. It's the first time he's asked anything of anyone.",
["Make an actual introduction, with a note: 'He's sharp, and I'll vouch for him.'","The interview is arranged. He doesn't say thank you; he does it for years.","Introduce him properly, and put your name behind it.","Send an introduction with your honest recommendation."],[1,0,1,1,0,0],
"Promise him the job, though it isn't yours to give.","He expects the job. You are now responsible for a promise.",
"Vouching has a price: your name. Spend it on people who will honour it.");
WS("W8","aunty","W_au1","yard","Aunty's dinner","آنٹی کا کھانا",["aunty"],["aunty","Hum to bas dekhte hi rehte hain, koi poochta kahan hai."],
"Aunty sighs that the family dinners always seem to be held elsewhere. She says it as a joke. It isn't one.",
"Aunty jokes that the family dinners are always held somewhere else. Your wife catches your eye.",
["Ask her, formally, to host the next family dinner: 'Aunty, we'd be so honoured if you'd do it.'","She is the happiest woman in the family. She will remember this.","Ask her to host and honour her with the head of the table.","Invite her properly, and ask what she'd like to cook."],[1,0,1,2,-1,0],
"Pay for her entire dinner, and let her take the credit.","She basks in the credit. You are quietly out of pocket.",
"Gossips are often just people who feel left out. Include them before they have to talk.");

/* =====================================================================
   TREASURES: ceremonies where one thing goes to one person. Outcome comes from your relationship,
   favours you did, the rival's pull, and how you handle the moment (tm).
   ===================================================================== */
A("T1",99,"liv","The trunk","Dadi's gold set","دادی کا سونے کا سیٹ",["mil","sana"],["mil","Yeh kisi ko to milna hai..."],
"Ammi-ji lifts the old steel trunk onto the bed. Inside, wrapped in a faded dupatta, is the gold set that came from her own mother-in-law. 'This goes to someone,' she says, looking at you, then at Sana. 'I haven't decided who.'",
"Your mother opens the old steel trunk. Inside is the family's gold set. She looks at your wife, then your sister. 'This goes to someone. I haven't decided who.' Everyone goes very still.",
[X(O("r","Hint openly that, as the bahu, it should be yours.",[-1,1,-3,-2,0,3],"Said aloud, it sounds like a bill. Ammi-ji's face closes.","Hint that as the bahu, it should be yours.","Say: 'Ammi, it should go to my wife. She's the bahu.'"),{tm:-5}),
X(O("p","Say you don't need it: 'Sana should have it.'",[0,-3,1,1,0,1],"A gracious sentence that costs you the thing. You've told her you aren't asking."),{tm:-3}),
X(O("a","Say nothing and let her decide.",[0,0,0,0,0,1],"You neither claim it nor back away. Ammi-ji reads silence as she likes."),{tm:0}),
X(O("k","Thank her for trusting you with this moment. Say it belongs to the family's story, and ask her to tell you its story.",[2,1,2,2,0,-2],"Ammi-ji tells you who wore it first. For a moment you're not competing for it, you're listening to it.","Thank her for trusting you. Say the set belongs to the family's story, and ask her to tell you its story.","Say: 'Ammi, whoever gets it, let it stay in the family. Tell us its story.'"),{tm:3})],
"Treasures go to people who have built a relationship, not who ask for an inheritance. Show up before the ceremony, and be gracious during it.",
{cr:1,ev:"t",tr:"gold",at:.55});

A("T2",99,"liv","The envelope","Abbu-ji's seed money","ابو جی کی بنیادی رقم",["fil","hamza"],["fil","Do beton ke liye ek hi lifafa hai."],
"Abbu-ji clears his throat at the table: 'I've put some money aside for one of the boys to start something. Hamza has plans. So does your husband.' The whole table looks at its plate.",
"Abbu-ji says he's set aside money for one of his sons to start something. Hamza has a plan. You have a plan. He's looking at both of you.",
[X(O("r","Ask for it directly: 'Abbu-ji, we need it more than Hamza.'",[-1,1,-3,-2,0,3],"Money requests framed against a brother cost more than they get.","Whisper to your husband to ask for his share before Hamza does.","Say: 'Abbu-ji, we need it more than Hamza.'"),{tm:-5}),
X(O("p","Say Hamza should take it.",[0,-3,1,1,-2,1],"Generous, and you've waved away something you needed."),{tm:-4}),
X(O("a","Stay quiet and wait to see what Abbu-ji decides.",[0,0,0,0,0,1],"Waiting looks like not wanting."),{tm:0}),
X(O("k","Offer a short written plan: what you'd do with it, what you'd repay, and say you'd be glad to see Hamza supported too.",[2,1,2,2,1,-2],"A plan on one page makes an elder feel safe about the money. Hamza notices you said 'too'."),{tm:4})],
"Elders trust a plan more than a plea. Show the work, name your repayment, and support your sibling aloud.",
{cr:1,ev:"t",tr:"seed",at:.75});

A("T3",99,"liv","The cupboard","Ammi's heirloom bangles","امی کی وراثتی چوڑیاں",["bmom","bdad"],["bmom","Yeh meri maa ki hain. Kisko doon..."],
"Ammi opens her cupboard and takes out a small velvet box: the bangles that were her mother's. 'Cousin Hira is getting married too, and she keeps hinting.' She looks at you. 'I'm giving them to whoever keeps their mother close.'",
"Your mother-in-law shows your wife a small velvet box of bangles. She says she hasn't decided between your wife and a cousin.",
[X(O("r","Say it's rightfully yours as the daughter.",[-1,1,-3,-2,0,3],"Rights talk makes Ammi stiffen. She wanted to be chosen, not claimed.","Say it's your right as her daughter.","Say: 'They should go to my wife, she's the daughter.'"),{tm:-5}),
X(O("p","Say Hira should have them.",[0,-3,1,1,0,1],"You've stepped back so she doesn't have to choose. She hears it as indifference."),{tm:-3}),
X(O("a","Say nothing.",[0,0,0,0,0,1],"She waits for a word that doesn't come."),{tm:0}),
X(O("k","Hold her hands: 'Ammi, I'd love them, but what I'd love more is a Friday call every week. Tell me about your mother.'",[2,1,2,1,0,-2],"A promise of attention is worth more than the bangles. She starts telling the story right there.","Hold her hands: 'Ammi, I'd love them, but I'd love a weekly Friday call more. Tell me about your mother.'","Say: 'Whoever gets them, we'll call every Friday. Tell us about your mother.'"),{tm:3})],
"Heirlooms are given to the person who keeps the giver close. A habit beats a speech.",
{cr:1,ev:"t",tr:"bangles",at:.9});
