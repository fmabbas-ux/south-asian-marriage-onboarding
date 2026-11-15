/* v0.13 learning and safety layer (from the Nov 2026 research report):
   1. explained feedback: why each choice landed, the skilled version, a talk-about-it prompt
   2. safety: Help panel with helplines, quick exit, abuse scene feedback, private answers in couple play
   3. save and resume on this device
   4. guess-your-partner step (online and same-phone play)
   5. same-phone "duo" mode (pass the phone)
   Urdu drafted by Claude: needs native review. */
var _L={
whyT:["Why it landed this way","یہ ایسا کیوں ہوا"],
why_k:["This works because you said what you felt without blaming, and kept it between the two of you. Calm, specific words lower the other person's guard, so they can actually hear you.","یہ اس لیے کام کرتا ہے کہ آپ نے الزام لگائے بغیر اپنی بات کہی اور معاملہ آپ دونوں کے بیچ رکھا۔ پُرسکون اور واضح الفاظ سامنے والے کو دفاع کی بجائے سننے دیتے ہیں۔"],
why_r:["Blame or a sharp tone makes the other person defend themselves instead of listening. Counsellors call this a harsh start-up: the real issue gets lost in a fight about tone.","الزام یا تیز لہجہ سامنے والے کو سننے کی بجائے اپنا دفاع کرنے پر مجبور کرتا ہے۔ اصل بات لہجے کی لڑائی میں گم ہو جاتی ہے۔"],
why_a:["Avoiding it keeps today quiet, but the issue doesn't go away. It comes back bigger, and the other person may read your silence as not caring.","ٹالنے سے آج تو خاموشی رہتی ہے مگر مسئلہ ختم نہیں ہوتا۔ یہ بڑا ہو کر لوٹتا ہے، اور سامنے والا آپ کی خاموشی کو بے پروائی سمجھ سکتا ہے۔"],
why_p:["Keeping the peace can be a wise move early on, especially when you have little say in the house. The risk is when it becomes a habit: unspoken needs turn into quiet resentment. Choose it on purpose, and come back to the issue later.","شروع میں صلح رکھنا سمجھداری ہو سکتی ہے، خاص طور پر جب گھر میں آپ کی بات کم چلتی ہو۔ خطرہ تب ہے جب یہ عادت بن جائے: اَن کہی ضرورتیں خاموش ناراضگی بن جاتی ہیں۔ اسے سوچ کر چُنیں اور بعد میں بات دوبارہ اٹھائیں۔"],
skillT:["What the skilled option sounds like:","سمجھداری والا جواب کچھ یوں ہے:"],
talkT1:["Think about it:","سوچیے:"],talkT2:["Talk about it together:","مل کر بات کریں:"],
tk0:["When did something like this last happen to you, or to someone you know?","ایسا آخری بار آپ کے ساتھ، یا کسی جاننے والے کے ساتھ کب ہوا؟"],
tk1:["What would you each need to hear in a moment like this?","ایسے لمحے میں آپ دونوں کو کیا سننے کی ضرورت ہوگی؟"],
tk2:["Say the skilled line in your own words, out loud.","سمجھداری والی بات اپنے الفاظ میں بلند آواز سے کہیں۔"],
tk3:["What made the other options tempting?","باقی جواب کیوں پُرکشش لگے؟"],
tk4:["Who in your real family would react like the characters here?","آپ کے اصل خاندان میں کون یہاں کے کرداروں جیسا ردِعمل دے گا؟"],
tk5:["What's one small agreement you could make now, before this happens for real?","اصل میں ایسا ہونے سے پہلے آپ ابھی کون سا چھوٹا سا عہد کر سکتے ہیں؟"],
serT:["This is abuse, not a communication problem","یہ زیادتی ہے، بات چیت کا مسئلہ نہیں"],
serD:["Checking someone's phone, controlling who they call or their money, and threats are coercive control. It is not the target's fault, and better wording won't fix it. Couple tips are not the answer here: talk to someone you trust and a helpline.","کسی کا فون چیک کرنا، یہ طے کرنا کہ وہ کس سے بات کرے، اس کے پیسے پر قبضہ اور دھمکیاں جبری کنٹرول ہیں۔ یہ متاثرہ شخص کا قصور نہیں، اور بہتر الفاظ سے یہ ٹھیک نہیں ہوتا۔ کسی قابلِ اعتماد شخص اور ہیلپ لائن سے بات کریں۔"],
helpB:["Help","مدد"],helpT:["Help and helplines","مدد اور ہیلپ لائنز"],
helpI:["This game is for learning, not counselling. For ongoing conflict, a counsellor can help. If you feel afraid, are being threatened or hurt, or are forced into intimacy, contact a helpline. If you are in danger now, call your local emergency number.","یہ گیم سیکھنے کے لیے ہے، کاؤنسلنگ نہیں۔ مسلسل جھگڑوں میں کاؤنسلر مدد کر سکتا ہے۔ اگر آپ کو ڈر لگتا ہے، دھمکی یا تکلیف دی جاتی ہے، یا زبردستی کی جاتی ہے تو ہیلپ لائن سے رابطہ کریں۔ فوری خطرے میں اپنا مقامی ایمرجنسی نمبر ملائیں۔"],
helpV:["Numbers last checked: November 2026.","نمبر آخری بار جانچے گئے: نومبر 2026۔"],
helpD:["This phone may be seen by others. The game saves your progress on this device; Exit quickly clears it and leaves the game.","یہ فون دوسرے بھی دیکھ سکتے ہیں۔ گیم آپ کی پیش رفت اسی فون پر محفوظ کرتا ہے؛ فوراً نکلیں اسے مٹا کر گیم بند کر دیتا ہے۔"],
exitQ:["Exit quickly","فوراً نکلیں"],close:["Close","بند کریں"],
contT:["Continue: round {n} of {m}","جاری رکھیں: راؤنڈ {n} از {m}"],newG:["Start a new game","نیا گیم شروع کریں"],
resumedAI:["Your partner isn't connected, so the AI partner continues with you.","آپ کا ساتھی منسلک نہیں، اس لیے کمپیوٹر ساتھی آپ کے ساتھ جاری رکھے گا۔"],
duo:["Play together on one phone","ایک ہی فون پر مل کر کھیلیں"],
passT:["{n}'s turn","{n} کی باری"],passS:["Hand the phone to the {n}. Partner, no peeking!","فون {n} کو دیں۔ ساتھی، جھانکنا منع ہے!"],passB:["I'm ready","میں تیار ہوں"],
guessT:["Now guess: what did your partner choose?","اب اندازہ لگائیں: آپ کے ساتھی نے کیا چُنا؟"],
guessS:["Partners usually expect to guess right far more often than they do.","ساتھی عموماً جتنا سوچتے ہیں اس سے کہیں کم صحیح اندازہ لگاتے ہیں۔"],
gHit:["You guessed right: you know them on this one.","آپ کا اندازہ درست تھا: اس معاملے میں آپ انہیں جانتے ہیں۔"],
gMiss:["You guessed {g}. They chose differently. Ask them why.","آپ نے {g} کا اندازہ لگایا۔ انہوں نے کچھ اور چُنا۔ ان سے وجہ پوچھیں۔"],
tHit:["Your partner guessed your answer correctly.","آپ کے ساتھی نے آپ کا جواب صحیح بھانپا۔"],
tMiss:["Your partner guessed you'd pick {g}. Tell them what you were thinking.","آپ کے ساتھی کا اندازہ تھا کہ آپ {g} چُنیں گے۔ انہیں بتائیں آپ کیا سوچ رہے تھے۔"],
knowT:["How well you know each other","آپ ایک دوسرے کو کتنا جانتے ہیں"],
knowL:["{a} guessed {x} of {y} right.","{a} نے {y} میں سے {x} صحیح بھانپے۔"],
knowS:["Different answers aren't wrong answers. They are the conversations worth having.","مختلف جواب غلط جواب نہیں ہوتے۔ یہی وہ باتیں ہیں جن پر بات کرنا ضروری ہے۔"],
privAns:["Answered privately","نجی جواب"],privN:["Answers stay private on this scene. The house still reacts to both of you.","اس منظر میں جواب نجی رہتے ہیں۔ گھر پھر بھی آپ دونوں کے ردِعمل پر چلتا ہے۔"]
};for(var _l in _L)T[_l]=_L[_l];

/* scenes where answers are not shown to the partner in couple play */
var PRIV={S01:1,S37:1,S40:1,C1:1,C3:1,C7:1};
var HELPL=[["🇵🇰 Pakistan","Ministry of Human Rights helpline (free)","1099"],["🇵🇰 Pakistan","Police emergency","15"],["🇮🇳 India","Women Helpline","181"],["🇮🇳 India","Emergency","112"],["🇦🇪 UAE","Dubai Foundation for Women and Children","800111"],["🇦🇪 UAE","Emergency","999"],["🇬🇧 UK","National Domestic Abuse Helpline (24/7, free)","0808 2000 247"],["🇺🇸 US","National Domestic Violence Hotline","1-800-799-7233"],["🇦🇺 Australia","1800RESPECT","1800 737 732"],["🇨🇦 Canada","Emergency","911"]];

function isDuo(){return S&&S.mode=="duo"}
function couple(){return S&&(S.online||S.mode=="duo"||S.mode=="host"||S.mode=="guest")}
function vr(){return isDuo()?(S.turn||"B"):S.role}
function privScene(c){return c&&PRIV[c.id]&&S.mode!="solo"}

/* ---------- 1. explained feedback ---------- */
function whyHTML(c,a){if(!c)return"";if(c.ser)return'<div class="why ser"><b>⚠️ '+t("serT")+"</b><p>"+t("serD")+'</p><button class="btn main sm" onclick="openHelp()">🛟 '+t("helpT")+"</button></div>";
var o=c.o[a.o],me=isDuo()?"B":S.role,h='<div class="why"><b>💡 '+t("whyT")+"</b><p>"+t("why_"+o.s)+"</p>";
if(o.s!="k"){var k=c.o.filter(function(x){return x.s=="k"})[0];if(k)h+="<b>"+t("skillT")+'</b><p class="sk">'+en(otext(k,me))+"</p>"}
return h+"</div>"}
function talkHTML(c,rid){var n=0,s=String(rid||"")+(c?c.id:"k");for(var i=0;i<s.length;i++)n=(n*31+s.charCodeAt(i))%9973;
return'<div class="talk"><b>🗣️ '+t(couple()?"talkT2":"talkT1")+"</b> "+t("tk"+(n%6))+"</div>"}

/* ---------- 3. save and resume ---------- */
var SAVEK="aat_save";
function saveKey(){return VER+"|"+SC.length}
function saveGame(){try{if(!S||!S.cur||V!="round")return;localStorage.setItem(SAVEK,JSON.stringify({k:saveKey(),ts:Date.now(),S:S}))}catch(e){}}
function loadSave(){try{var r=localStorage.getItem(SAVEK);if(!r)return null;var o=JSON.parse(r);if(!o||o.k!==saveKey()||!o.S||!o.S.cur||!o.S.list)return null;if(o.S.cur.type=="sc"&&!SC[o.S.cur.i])return null;return o}catch(e){return null}}
function clearSave(){try{localStorage.removeItem(SAVEK)}catch(e){}}
function continueHTML(){var o=loadSave();if(!o)return"";return'<button class="btn main" onclick="resumeGame()">▶ '+t("contT",{n:o.S.pos+1,m:o.S.list.length})+"</button>"}
function resumeGame(){var o=loadSave();if(!o)return;closeNet();S=o.S;var wasOnline=S.online||S.mode=="host"||S.mode=="guest";if(wasOnline){S.online=false;S.mode="solo"}
var r=S.cur,id=r.id;if(r.type=="sc"){var c=SC[r.i];stageSet(c.r,c.x,c.say,c.cat,false)}else stageSet("yard",["mil","fil","sana","hamza"],null,false,true);
V="round";if(S.phase=="result"&&S.done[id]){render()}
else if(S.mine[id]&&!S.done[id]&&!isDuo()){if(!S.theirs[id])S.theirs[id]=ai(r);reveal()}
else{if(!isDuo()&&!S.theirs[id])S.theirs[id]=ai(r);if(isDuo()&&S.phase!="intro"&&S.phase!="pass"){S.mine[id]=null;delete S.mine[id];S.theirs[id]=null;delete S.theirs[id];S.turn="B";S.phase="pass"}else if(!isDuo())S.phase="intro";render()}
if(wasOnline)setTimeout(function(){var w=document.createElement("div");w.className="warn";w.textContent=t("resumedAI");w.style.cssText="position:absolute;z-index:9;top:84px;left:8px;right:8px;text-align:center";document.getElementById("game").appendChild(w);setTimeout(function(){w.remove()},6000)},300)}
document.addEventListener("visibilitychange",function(){if(document.visibilityState=="hidden")saveGame()});

/* ---------- 4. guess your partner ---------- */
function needGuess(){var r=S.cur;return r.type=="sc"&&(S.online||isDuo())&&!PRIV[SC[r.i].id]&&!SC[r.i].ser}
function guessV(){var r=S.cur,c=SC[r.i],pr=isDuo()?(S.turn=="B"?"G":"B"):other(),h='<p style="margin:0 0 2px"><b>🔮 '+t("guessT")+'</b></p><p class="mute" style="margin:0 0 6px;font-size:.85rem">'+t("guessS")+"</p>";
c.o.forEach(function(o,i){h+='<button class="btn opt" onclick="guessPick('+i+')"><span class="ob">'+"ABCD"[i]+'</span><span class="otx">'+en(optHTML(otext(o,pr)))+"</span></button>"});
$o.innerHTML='<div class="in">'+h+"</div>";$o.hidden=false}
function guessPick(i){var id=S.cur.id;if(isDuo()){if(S.turn=="B"){S.mine[id].g=i;S.turn="G";S.phase="pass";saveGame();render()}else{S.theirs[id].g=i;S.turn="B";reveal()}return}
S.mine[id].g=i;if(S.online&&NET)NET.send({t:"pick",id:id,o:S.mine[id].o,r:S.mine[id].r,g:i});check()}
function guessHTML(c,a,b){if(!c||(a.g==null&&b.g==null))return"";var h='<div class="talk">';
if(a.g!=null)h+=(a.g==b.o?"✅ "+t("gHit"):"🔮 "+t("gMiss",{g:"ABCD"[a.g]}))+"<br>";
if(b.g!=null)h+=(b.g==a.o?"💞 "+t("tHit"):"💬 "+t("tMiss",{g:"ABCD"[b.g]}));
return h+"</div>"}
function tallyGuess(a,b){if(!S.know)S.know={a:[0,0],b:[0,0]};if(a.g!=null){S.know.a[1]++;if(a.g==b.o)S.know.a[0]++}if(b.g!=null){S.know.b[1]++;if(b.g==a.o)S.know.b[0]++}}
function knowHTML(){var k=S.know;if(!k||(!k.a[1]&&!k.b[1]))return"";var me=isDuo()?rname("B"):t("you"),pa=isDuo()?rname("G"):t("partner");
return'<div class="card"><b>🔮 '+t("knowT")+"</b>"+(k.a[1]?"<p style='margin:2px 0'>"+t("knowL",{a:me,x:k.a[0],y:k.a[1]})+"</p>":"")+(k.b[1]?"<p style='margin:2px 0'>"+t("knowL",{a:pa,x:k.b[0],y:k.b[1]})+"</p>":"")+'<p class="mute" style="margin:2px 0">'+t("knowS")+"</p></div>"}

/* ---------- 5. same-phone duo ---------- */
function startDuo(){var l=S&&S.len||12;fresh();S.len=l;S.mode="duo";S.role="B";S.online=false;S.seed=1+Math.floor(Math.random()*1e9);begin()}
function passHTML(){var who=rname(S.turn||"B");return'<div style="text-align:center"><h2>'+(S.turn=="G"?"🤵 ":"👰 ")+t("passT",{n:who})+'</h2><p class="mute">'+t("passS",{n:who})+'</p><button class="btn main" onclick="S.phase=\'intro\';render()">'+t("passB")+"</button></div>"}

/* ---------- 2. help, helplines, quick exit ---------- */
function openHelp(){var d=document.getElementById("helpP");if(!d){d=document.createElement("div");d.id="helpP";d.setAttribute("role","dialog");d.setAttribute("aria-modal","true");document.body.appendChild(d)}
var h='<div class="hin"><h2>🛟 '+t("helpT")+"</h2><p>"+t("helpI")+'</p><div class="hl">';
HELPL.forEach(function(x){h+='<div class="hr"><span>'+x[0]+'</span><span class="hn">'+x[1]+'</span><a href="tel:'+x[2].replace(/[^0-9+]/g,"")+'">'+x[2]+"</a></div>"});
h+='</div><p class="mute" style="font-size:.8rem">'+t("helpV")+" "+t("helpD")+'</p><button class="btn main" onclick="quickExit()">🚪 '+t("exitQ")+'</button><button class="btn alt" onclick="closeHelp()">'+t("close")+"</button></div>";
d.innerHTML=h;d.className=LG=="ur"?"ur":"";d.hidden=false}
function closeHelp(){var d=document.getElementById("helpP");if(d)d.hidden=true}
function quickExit(){clearSave();try{sessionStorage.clear()}catch(e){}location.replace("https://www.google.com/search?q=weather+today")}
var _escT=0;document.addEventListener("keydown",function(e){if(e.key=="Escape"){var n=Date.now();if(n-_escT<600)quickExit();_escT=n}});
