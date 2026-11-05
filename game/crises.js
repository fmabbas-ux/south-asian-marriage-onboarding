/* Turning points: story twists that fire when meters hit extremes. They are not in the normal pool (cr:1).
   Order = priority. Negative crises: breakdown, separation talk, packed bag, elders' meeting, rumour storm, money crash, collapse.
   Positive twists (pos:1): a flat of your own, everyone loves you, a windfall, too independent.
   Guardrails (docs/10): no shaming or praising divorce, no "adjust more" for control. Legal and health text needs named reviewers before launch. */

A("C1",99,"bed","Turning point","The breaking point","ٹوٹنے کا مقام",[],null,
"It's 3 a.m. You haven't slept properly in weeks. You hear yourself say, 'I can't do this any more,' and for the first time you mean all of it.",
"It's 3 a.m. Your partner is sitting on the edge of the bed, shaking, saying they can't do this any more. You've never seen them like this, and you realise you may not have been looking.",
[O("p","Promise anything to calm things down: 'I'll change, I'll fix everything.'",[-1,-3,0,0,0,2],"A truce at dawn, built on promises nobody can keep."),
O("r","Throw it back: 'Then go, if it's so terrible.'",[-4,0,-1,-2,0,4],"Words that can't be unsaid. By morning the whole house has heard the tone, if not the words."),
O("a","Say nothing, turn over, and deal with it 'tomorrow'.",[-2,-1,0,0,0,3],"Tomorrow arrives with the same weight and one more silence on top."),
O("k","Stop everything. Say: 'We are both exhausted. Let's take 48 hours: sleep, no big decisions, then talk with a counsellor or a trusted elder we both agree on.'",[4,3,0,0,0,-5],"Nothing is solved, but the free-fall stops. Sleep does what arguing couldn't.")],
"Chronic overload feels like a relationship problem but is often exhaustion. A pause with a return time and an outside helper is a safe first step.",
{cr:1,trig:function(){return S.m[5]>=85&&S.m[1]>35}});

A("C2",99,"bed","Turning point","The word nobody wanted to hear","وہ لفظ جو کوئی سننا نہیں چاہتا",[],null,
"After another cold week, he says it quietly: maybe this marriage was a mistake, maybe separation is the honest option. Your heart goes cold. Part of you is relieved, part terrified.",
"After another cold week, you hear yourself say that maybe separation is the honest option. The silence afterwards is enormous. You don't know whether you meant it or wanted to be contradicted.",
[O("r","Escalate: 'Fine, let's call both families and end it tonight.'",[-4,0,-3,-3,0,4],"By midnight two families are awake and taking sides. Nobody asked what either of you actually wanted."),
O("a","Pretend it was never said and carry on as before.",[-2,-1,0,0,0,2],"Life resumes politely. The sentence is still in the room, unanswered."),
O("p","Agree to anything, so they don't leave.",[-1,-4,0,0,0,3],"They stay. You've traded your own voice for a few quiet weeks."),
O("k","Neither agree nor dismiss: 'This is serious and I hear you. Let's pause the big decision for a fixed period, see a counsellor, learn our legal options (nikahnama, khula, mediation) and agree one mediator we both trust.'",[3,3,-1,-1,0,-3],"No decision is made, which is a relief of its own. Each of you gets information, and a date to come back to.")],
"Separation talk is a signal, not a verdict. Neutral steps: a fixed pause, counselling, one mediator both accept, and legal information for both (this lesson needs lawyer review). Staying or leaving is a decision for the two of you, made with facts, not on a bad night.",
{cr:1,trig:function(){return S.m[0]<=20}});

A("C3",99,"bed","Turning point","The packed bag","تیار سوٹ کیس",["bmom"],null,
"You've stopped recognising yourself. Tonight you packed a small bag and put it behind the door, not sure whether you're leaving or only need to know you could.",
"You find a packed bag behind the door. They aren't in the room. For a moment you can't breathe.",
[O("r","Block the door: 'You're not going anywhere.'",[-4,-2,0,-1,0,4],"Blocking someone is control, not love. It confirms exactly what made the bag necessary."),
O("p","Unpack the bag and promise to stop making a fuss.",[-1,-4,0,0,0,2],"The bag goes back in the cupboard. The feeling that put it there stays."),
O("a","Leave without a word for a relative's house, and let the silence speak.",[-3,1,-2,-2,0,3],"Everyone is now worried, and nobody knows why."),
O("k","Say what you need.",[3,4,0,0,0,-3],"A few days apart with a clear return date and regular contact. It feels like breathing, not like leaving.","Say: 'I need a few days of space and I'm not leaving you. I'll stay with my parents, here's when I'll call, and when I'm back we start counselling.'","Sit down and ask what they need. Agree that they may stay with their parents for a few days with regular contact, then talk, and don't follow or pressure.")],
"Needing space is not the same as ending the marriage. Say which it is, give a return date and keep contact. Never block, follow or pressure.",
{cr:1,trig:function(){return S.m[1]<=18}});

A("C4",99,"liv","Turning point","The elders gather","بزرگوں کی بیٹھک",["mil","fil","bmom","bdad","aunty"],["bdad","Beta, ab hum sab ko baithna padega."],
"Both sets of parents have called a meeting about 'the two of you'. You walk into the living room and realise there are more chairs than there should be.",
"Both sets of parents have called a meeting about 'the two of you'. You walk in and realise it feels less like a talk and more like a hearing.",
[O("r","Defend your own side loudly and list the other family's faults.",[-2,0,-4,-3,0,4],"Old grievances come out in order of age. Two families leave not speaking."),
O("p","Apologise to everyone for everything.",[-1,-4,2,1,0,2],"The room relaxes. You have just agreed to a version of events that isn't true."),
O("a","Stay silent, look at the floor and let the elders decide.",[-2,-1,-1,0,0,2],"They decide, kindly and firmly, and none of it fits your life."),
O("k","Ask for ground rules: one speaker at a time, no old grievances, each of you speaks for yourself. Say what you need from each family, and thank them for caring.",[3,3,3,1,0,-3],"Rules steady the room. For once the parents listen to the couple, not about them.")],
"A family meeting works when it has rules and when the couple speak for themselves. Otherwise it becomes a trial.",
{cr:1,trig:function(){return S.m[2]<=18}});

A("C5",99,"yard","Turning point","The biradari is talking","برادری باتیں کر رہی ہے",["aunty","sana","mil"],["aunty","Maine suna hai kuch aur hi baat hai..."],
"A story about the two of you has travelled through three WhatsApp groups and a wedding. By the time it reaches you, it's worse than the truth.",
"A story about the two of you has travelled through three WhatsApp groups and a wedding. By the time it reaches you, it is worse than the truth, and your partner is staring at you.",
[O("r","Hit back publicly with your own version of events.",[-2,0,-1,-4,0,4],"Now there are two stories, and everyone enjoys comparing them."),
O("a","Disappear from every gathering until it blows over.",[-1,-1,-1,-3,0,2],"The story fills the silence. By the time you return, it has grown."),
O("p","Apologise to everyone for things that never happened.",[-1,-4,1,-1,0,2],"An apology makes the rumour sound true."),
O("k","Agree one short, calm line together, say it once to the two or three people who matter, and stop explaining to everyone else.",[3,2,1,3,0,-2],"One calm sentence, said once, closes more doors than ten defences.")],
"You can't win a rumour by chasing it. A short shared line to a few people ends more than a hundred explanations.",
{cr:1,trig:function(){return S.m[3]<=18}});

A("C6",99,"liv","Turning point","The empty account","خالی کھاتہ",["fil","hamza"],["fil","Yeh bill kis ne bhara tha?"],
"A bill you didn't know about arrives with a deadline. The savings you thought existed don't. For the first time you're scared about money, not just irritated.",
"A bill you didn't know about arrives with a deadline. The savings your partner believed in aren't there, and you have to explain why.",
[O("r","Blame each other for every past expense.",[-4,0,0,-1,0,4],"A list of everything either of you ever bought. The bill is still unpaid."),
O("a","Quietly borrow from a relative and don't mention it.",[-3,0,-2,-3,1,2],"The bill is paid. The secret becomes a second, bigger debt."),
O("p","Hand over your own savings and jewellery without discussion.",[-1,-4,1,0,-2,2],"The crisis ends. You've given up your safety net without being asked to."),
O("k","Put all numbers on one page together: income, debts, must-pay items. Agree a three-month plan and who to ask for help, openly.",[3,2,0,0,5,-3],"The fear shrinks once it has numbers. The plan is boring, and it works.")],
"Money panic ends when numbers go on one page. Work out income, debts and must-pay items together, then ask for help openly.",
{cr:1,trig:function(){return S.m[4]<=18}});

A("C7",99,"bed","Turning point","The collapse","بے ہوشی",["bmom"],null,
"You faint at the stove. In the doctor's room the word is 'exhaustion', and the question is: how long since you rested properly?",
"Your partner faints at the stove. At the clinic the doctor asks how long they've been under strain. You realise you don't know.",
[O("r","Blame the family for causing it and storm out of the clinic.",[-3,0,-3,-2,0,3],"The anger feels righteous, and the doctor's advice goes unheard."),
O("a","Take the medicine, ignore the advice, and carry on.",[-1,-2,0,0,0,2],"The body will raise the issue again, louder."),
O("p","Apologise to everyone for being a burden.",[-1,-4,0,0,0,2],"You are sorry for needing rest. That is the actual problem."),
O("k","Take the doctor seriously: real rest, a shared workload, and one conversation with a counsellor about the pressure.",[3,4,1,0,-1,-6],"Rest and shared load are treatment, not luxury. The house reorganises around it.")],
"A body can say what a person can't. Treat overload as real. If low mood or anxiety persists, see a doctor or counsellor; this game doesn't diagnose.",
{cr:1,trig:function(){return S.m[5]>=80&&S.m[1]<=35}});

A("C2b",99,"liv","Turning point","A month later, nothing has changed","ایک ماہ بعد بھی کچھ نہیں بدلا",["bmom"],null,
"A month on, nothing has changed. He has spoken to a lawyer 'just to know his options', and you found out by accident. You feel watched and betrayed, and also scared.",
"A month on, nothing has changed. You saw a lawyer 'just to know your options', and your wife found out. She is furious, and underneath it, scared.",
[O("r","Call it betrayal and demand they stop.",[-3,0,-1,-2,0,4],"Information-gathering becomes a crime, and the secrecy gets the blame it half deserves."),
O("a","Avoid the topic and hope it fades.",[-2,-1,0,0,0,2],"It doesn't fade. The next conversation will be harder."),
O("p","Beg and promise anything.",[-1,-4,0,0,0,3],"Promises made in fear are rarely kept, and both of you know it."),
O("k","Name both things: 'Finding out your options is not the same as leaving, but doing it in secret hurt.' Agree to share what each of you has learned, and start counselling together this week.",[3,3,-1,-1,0,-3],"Openness replaces secrecy. The legal facts and the feelings go on the same table.")],
"Knowing your options is sensible; keeping it secret feeds fear. Share what you learn and put counselling first. This lesson needs lawyer review.",
{cr:1,trig:function(){return S.cdone.C2!=null&&S.pos-S.cdone.C2>=2&&S.m[0]<=25}});

A("C8",99,"liv","Turning point","A place of your own","اپنا ٹھکانا",["fil","mil","bdad"],["fil","Beta, ghar mein sab ke liye jagah hai."],
"Things are good between you. Then comes the question: a small flat nearby has become available. Moving out would be a first step to a life of your own, and everyone has an opinion.",
"Things are good between you. A small flat nearby has become available. You've dreamed of it quietly, and now both families have an opinion.",
[O("r","Announce you're moving out next month.",[-1,2,-4,-3,-2,3],"The announcement sounds like a rejection. The flat is lovely, and the relatives won't visit."),
O("p","Decline to keep everyone comfortable, though you both wanted it.",[-1,-3,2,1,0,2],"Everyone is relieved. You sit in the shared kitchen thinking about the flat."),
O("a","Say 'we'll see' and let the offer expire.",[-1,0,-1,0,0,1],"The flat goes to someone else. The question stays."),
O("k","Decide together with a trial plan: a flat nearby, Friday dinners at home, a shared review after six months. Tell both families as a package.",[3,3,0,1,-1,-2],"A plan that keeps both love and space. Each family gets something to hold on to.")],
"Space and closeness are not opposites. A trial plan with a review date lets families adapt without feeling abandoned.",
{cr:1,pos:1,trig:function(){return S.m[0]>=88&&S.m[1]>=60}});

A("C9",99,"liv","Turning point","Everyone loves you","سب کی آنکھ کے تارے",["mil","fil","sana","aunty"],["aunty","Beta, tum to hamari jaan ho! Zara ek kaam tha..."],
"You've become the family's favourite. It feels wonderful. Then the requests start: cook for forty, mediate between two aunts, help with every function.",
"Your partner has become the family's favourite. It's lovely to see. Then the requests start, and you notice they're saying yes to everything.",
[O("r","Snap that you are not everyone's servant.",[-2,1,-2,-3,0,3],"The warmth cools overnight."),
O("p","Say yes to everything.",[-1,-4,2,2,0,3],"Love turns into a rota. You're exhausted and adored."),
O("a","Go quiet and ignore the calls.",[-1,0,-1,-2,0,1],"The calls become worried, then pointed."),
O("k","Choose together what you will say yes to, and say no kindly to the rest, with an alternative: 'Not this week, but I'll bring something on Friday.'",[3,3,2,2,0,-2],"A kind no with an alternative keeps both love and boundaries.")],
"Being loved can become being used. Decide your yeses together, and say no kindly with an alternative.",
{cr:1,pos:1,trig:function(){return S.m[2]>=88&&S.m[3]>=70}});

A("C10",99,"liv","Turning point","A windfall","غیر متوقع رقم",["fil","hamza","mil"],["hamza","Bhai, sunne mein aaya hai bonus mila hai?"],
"A bonus lands. Within a day, three relatives have 'needs', and your partner has quietly started a list of their own.",
"A bonus lands. Within a day, three relatives have 'needs', and your partner has quietly started a list of their own.",
[O("r","Spend it on yourselves at once without telling anyone.",[-2,1,-2,-3,-1,2],"The purchases are lovely, and the family notices them in two days."),
O("p","Give most of it away.",[-1,-3,2,2,-3,2],"Gratitude lasts a week. The savings goal is delayed again."),
O("a","Put it in a drawer and tell no one.",[-2,0,-1,0,1,2],"Secrecy about good news is still secrecy."),
O("k","Decide shares as a couple: an emergency fund, support for family with a limit, and something for just the two of you. Tell the family the plan.",[3,2,1,1,4,-3],"A plan makes generosity sustainable. Everyone knows what to expect.")],
"Windfalls test decisions, not just wallets. Pre-agreeing shares (safety, family, joy) protects trust.",
{cr:1,pos:1,trig:function(){return S.m[4]>=88}});

A("C11",99,"yard","Turning point","Too independent?","بہت خود مختار؟",["mil","aunty","sana"],["aunty","Shaadi ke baad tum kaafi badal gayi ho..."],
"You've found your voice and the house has noticed: 'you've changed since the wedding.' It's half a compliment and half a warning.",
"Your partner has found their voice, and the family has noticed: 'they've changed since the wedding.' It's half a compliment and half a warning.",
[O("r","Prove them right and be sharper with everyone.",[-2,1,-3,-3,0,3],"Your voice is louder, not stronger."),
O("p","Shrink back so people like you again.",[-1,-4,2,1,0,2],"Approval returns. So does the feeling of having lost something."),
O("a","Withdraw into work and your own world.",[-1,1,-2,-1,0,1],"Independence turns into distance."),
O("k","Keep your voice and add warmth: explain your 'why' and invest time in the relationships you value.",[3,3,2,2,0,-2],"People can accept a firm voice when they feel included.")],
"Strength and warmth can live together. Explain your why, and keep investing in people who matter.",
{cr:1,pos:1,trig:function(){return S.m[1]>=88&&S.m[2]<=45}});
