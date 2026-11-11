/* v0.8 story tree (from player suggestion FB-20261111-6XAI): the next chapter depends on how the last one went,
   and each chapter opens with a "Previously" recap. Outcome class of a chapter (both players' picks):
   g = both chose the skilled option, m = mixed, b = neither did. Deterministic from shared picks, so two phones stay in sync.
   TREE[parent] = {g:[child, recap], m:[child, recap], b:[child, recap]}. A child is only used if not already played
   and never replaces the final chapter. */
var TREE={
S01:{g:["S02","Because you talked before and after the wedding night, small habits now feel safe to raise."],
     m:["S02","The wedding night was awkward but survivable. Now small habits feel like proof you don't quite know each other."],
     b:["S37","The wedding night left a hurt neither of you named. Weeks later, one of you is quietly low."]},
S02:{g:["S03","You can talk about habits, so when a message lights up a phone it arrives as a question, not an accusation."],
     m:["S03","The chair question got half-settled. A phone lighting up now feels like another thing left unsaid."],
     b:["S04","Small resentments piled up like laundry. One tiff about nothing becomes two days of silence."]},
S03:{g:["S34","Trust held over the phone. Then an old like on a screen tests how much of it is real."],
     m:["S34","The phone was settled but not forgotten. An old like on a screen reopens it."],
     b:["S04","The phone fight left a bruise. The next small argument ends in silence."]},
S04:{g:["S09","You found your way back after the silence. Your parents, sensing something, now call a little more."],
     m:["S09","The silence ended without a real talk. Your parents sensed something and now call every hour."],
     b:["S14","The silence left you lonely and your mother noticed. She has some advice, and it isn't kind."]},
S05:{g:["S10","You settled who cooks like a team. Now Ammi-ji's comments turn from who cooks to how."],
     m:["S10","Roles are half-agreed. Ammi-ji's comments move from who cooks to how you cook."],
     b:["S27","Roles were never settled, and now the real question surfaces: why do you work at all?"]},
S08:{g:["S10","Ammi-ji now knocks. She still watches closely, and her gaze has moved to what you cook."],
     m:["S10","The knock got half-sorted. Ammi-ji stays close, and her comments move to the kitchen."],
     b:["S16","Ammi-ji felt shut out after the knock. Sana noticed, and now whatever you say reaches Ammi-ji."]},
S09:{g:["S11","Your parents calmed down, and the family relaxed. Now both sides want you for Eid."],
     m:["S11","The calls eased but didn't stop. Now both families want you for the first Eid."],
     b:["S14","The hourly calls became a worry. Your mother now suggests what to keep from your husband."]},
S10:{g:["S22","Ammi-ji now defends your cooking at home. At the next dinner, Aunty takes her turn."],
     m:["S16","The kitchen comments cooled but didn't stop. What you say in the kitchen now travels."],
     b:["S23","The comments about your cooking spread. Phupho, who sets the family's opinion, now weighs in."]},
S11:{g:["S24","Eid was shared fairly, and both families noticed. Now invitations pour in for every function."],
     m:["S24","Eid was patched together. Now every function wants you, and you're running on empty."],
     b:["S18","Eid left someone offended. Now Sana's rishta becomes the family's reason to delay your plans."]},
S12:{g:["S17","You agreed how the household money works. Then a younger brother's fees arrive."],
     m:["S17","The salary question was half-answered. Then a younger brother's fees test it."],
     b:["S20","Money tension with his parents hardened. Now an inheritance argument breaks out in front of you."]},
S13:{g:["S28","You settled what you wear as a team. Now money and status become the next question."],
     m:["S28","The clothing question softened. Now money and status come up."],
     b:["S38","The clothing dispute left everyone defensive. Tempers now fray in public."]},
S14:{g:["S07","You kept money open with your partner. Then a surprise from his side tests it."],
     m:["S07","Money talk is half-open. A surprise from his side tests it."],
     b:["S12","Hidden money bred suspicion. Now his parents ask about his whole salary."]},
S16:{g:["S25","You kept information tight, and it worked. Then a private quarrel leaks into a family group."],
     m:["S25","Some of what you said still travelled. Now a private quarrel shows up in the family group."],
     b:["S38","Everything you said reached Ammi-ji. Tempers now fray in front of everyone."]},
S17:{g:["S29","You set a support limit together. Now a big business idea needs a shared decision."],
     m:["S29","The fees were paid with some grumbling. Now a big business idea puts the savings at risk."],
     b:["S20","The fees fight spilled onto the family. Now an inheritance argument erupts."]},
S18:{g:["S21","You refused the family's timeline kindly. Now every relative asks about good news."],
     m:["S21","The timeline pressure eased a little. Every relative still asks about good news."],
     b:["S30","The timeline fight left you rattled. Now your study plans collide with the baby pressure."]},
S20:{g:["S39","You stayed out of the inheritance fight. When it grows, a trusted uncle is suggested."],
     m:["S39","The inheritance fight cooled but didn't end. A trusted uncle is now suggested."],
     b:["S38","The inheritance fight left everyone raw. Tempers now flare at dinner."]},
S21:{g:["S22","You had your three standard answers ready. Now an Aunty at dinner tries a new angle."],
     m:["S22","You fumbled one or two answers. At dinner, Aunty tries a new angle."],
     b:["S30","The good-news questions got to you. Now your plans collide with family pressure."]},
S22:{g:["S35","You and your partner stood together at the dinner. A friend now tells you to 'keep him under control'."],
     m:["S35","The dinner left a sour taste. A friend now offers advice you didn't ask for."],
     b:["S38","The dinner comments stung, and your reply stung back. Tempers fray at the next one."]},
S25:{g:["S39","You handled the leak with grace. When the quarrel grows, a trusted uncle is asked to help."],
     m:["S38","The family group made it worse. A sharp word at dinner now follows."],
     b:["S38","The family group blew it up. A sharp word at dinner now follows."]},
S26:{g:["S30","You decided the offer together, with a review date. Now your study plan meets family pressure."],
     m:["S30","The offer was decided under pressure. Now your study plan meets family pressure."],
     b:["S39","The offer divided the two families. Now an uncle is asked to mediate."]},
S27:{g:["S28","You held your ground on work, kindly. Now the question is what happens if you earn more."],
     m:["S28","Work was allowed with conditions. Now the question is what happens if you earn more."],
     b:["S13","You lost the work argument, and control spread. Now they have views on what you wear."]},
S28:{g:["S26","You shared pride in her income. A big offer abroad now tests that partnership."],
     m:["S26","Pride was dented but survived. A big offer abroad now tests it."],
     b:["S38","His pride got hurt. A sharp word at dinner follows."]},
S29:{g:["S30","You set risk limits on the business together. Now your own plan meets the baby question."],
     m:["S30","The business plan was half-agreed. Now your own plan meets the baby question."],
     b:["S20","The business idea fuelled a family fight. Now an inheritance argument erupts."]},
S30:{g:["S39","You sequenced your plans together. When tension returns, an uncle's help is considered."],
     m:["S38","The plan was agreed under pressure. A sharp word at dinner follows."],
     b:["S38","The plan became a battle. A sharp word at dinner follows."]},
S37:{g:["S09","You named the sadness and sought help. Your parents now call to check on you, gently."],
     m:["S09","The sadness lingers. Your parents have noticed, and now call every hour."],
     b:["S14","The sadness went unspoken. Your mother notices, and gives advice you shouldn't follow."]},
S38:{g:["S39","You repaired the sharp word in private. Now an uncle is suggested to help with the bigger knots."],
     m:["S39","The sharp word was half-repaired. An uncle is now suggested."],
     b:["S39","The sharp word was never repaired. Someone suggests calling a trusted uncle."]}};

function treeCls(q){return q==2?"g":(q==0?"b":"m")}
function treeLink(parent,cls){var e=TREE[parent]&&TREE[parent][cls];if(!e)return;var ci=sci(e[0]);if(ci==null)return;
var nxt=S.pos+1;if(nxt>=S.list.length-1)return;
for(var p=0;p<S.path.length;p++)if(S.path[p].id==e[0])return;
if(S.list.indexOf(ci)>-1&&S.list.indexOf(ci)<=S.pos)return;
var idx=S.list.indexOf(ci);if(idx>nxt){var tmp=S.list[nxt];S.list[nxt]=ci;S.list[idx]=tmp}else if(idx==-1)S.list[nxt]=ci;
S.rc[e[0]]={t:e[1],from:parent,cls:cls}}
var CLSI={g:"🌱",m:"⚖️",b:"🔥"};
function recapHTML(c){var rc=S.rc[c.id];if(rc)return'<div class="rc">📖 <b>'+t("prevly")+"</b> "+en(rc.t)+"</div>";
if(!S.path.length)return"";var l=S.path[S.path.length-1],lc=SC[sci(l.id)];if(!lc)return"";
return'<div class="rc">📖 <b>'+t("prevly")+"</b> "+t("rc_"+l.cls,{t:"“"+(LG=="ur"&&lc.u?lc.u:lc.t)+"”"})+"</div>"}
function treeHTML(){if(!S.path.length)return"";var h="",pi={};S.path.forEach(function(p,i){pi[p.id]=i});
S.path.forEach(function(p,i){var c=SC[sci(p.id)],rc=S.rc[p.id],deep=rc&&pi[rc.from]!=null?1:0;
h+='<div class="tn" style="margin-left:'+(deep?14:0)+'px">'+(deep?"↳ ":"")+(i+1)+". "+(LG=="ur"&&c.u?c.u:c.t)+" "+CLSI[p.cls]+"</div>"});
return'<div class="card"><b>📖 '+t("treeT")+'</b><div class="mute" style="margin:2px 0 4px">'+t("treeS")+"</div>"+h+"</div>"}
