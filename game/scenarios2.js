/* 28 more situations (S02-S40 minus the 12 already in scenarios.js).
   Drafts for play-testing. Legal (S36), safety (S40) and faith (S06) content needs named reviewers before paid launch. */
function O(s,t,e,c,tb,tg){var o={t:t,s:s,e:e,c:c};if(tb)o.tb=tb;if(tg)o.tg=tg;return o}
function A(id,mo,r,w,t,u,x,say,b,g,o,n,f){var c={id:id,mo:mo,r:r,w:w,t:t,u:u,x:x,say:say,b:b,g:g,o:o,n:n};if(f)for(var k in f)c[k]=f[k];SC.push(c)}

A("S02",1,"bed","Week 3","Clothes on the chair","کرسی پر کپڑے",[],null,
"His clothes live on the chair. Your cupboard is colour-coded. It's week three, and at night you've started re-folding his shirts while sighing quietly.",
"You've always dropped things where they land. Lately your wife goes silent in the bedroom and you can't tell why. You feel watched in your own room.",
[O("p","Silently tidy up after him every night.",[-1,-2,0,0,0,2],"The room is neat and you are tired. He has no idea there was ever a problem."),
O("r","Snap about the mess.",[-3,0,0,0,0,3],"A small thing becomes a big one. Now it's about who 'is' messy, not what to do.","Snap: 'Can't you see how messy you are?'","Snap: 'It's my room too. Stop nagging.'"),
O("a","Spend as little time in the bedroom as possible.",[-1,-1,0,0,0,2],"The room stays tense and so do you."),
O("k","Agree zones: 'This side is yours, this side is mine, and shared spaces get a ten-minute reset before bed.'",[3,1,0,0,0,-2],"A silly little rule that works. Nobody is the villain, and the chair is now on his side.")],
"Standards are invisible until they are said aloud. Split the space into zones and agree one tiny shared routine.");

A("S03",2,"bed","Month 2","The phone","فون",[],null,
"His phone lights up on the bed: a message from a girl named Hira. You've never heard the name. Your hand is already reaching for it.",
"You walk in and see your wife holding your phone. It's a colleague, nothing more. You feel exposed, and a little angry she didn't ask.",
[O("r","Go through the phone and demand answers.",[-3,0,0,0,0,3],"Whether or not there's anything there, trust has just been damaged on both sides.","Unlock it and scroll through everything.","Grab the phone: 'You have no right!'"),
O("a","Put it down, say nothing, and watch more closely from now on.",[-2,-1,0,0,0,2],"Silent suspicion grows faster than any answer would."),
O("p","Apologise for looking and promise never to ask again.",[-1,-3,0,0,0,1],"Peace, with a hidden cost: now one of you doesn't feel safe asking."),
O("k","Say: 'I felt scared when I saw that name. Can we agree what is private and what is shared, for both of us?'",[3,2,0,0,0,-2],"You agree on equal rules. Some phones get passcodes, some don't, and neither of you feels watched.")],
"Privacy and secrecy are different things. Agree the rules together, equal for both, before suspicion writes them for you.");

A("S05",1,"kit","Week 2","Who cooks?","کھانا کون پکائے؟",["mil","sana"],["mil","Beta, raat ka khana tum bana lena."],
"You work a full day. Ammi-ji says, gently, 'The bahu cooks dinner; that's how it's always been.' Sana smiles into her phone. Your husband says nothing.",
"Your mother has always said the bahu cooks. Your wife has just come home from work, still in her office clothes. You see her face, but the kitchen is crowded with expectations.",
[O("p","Cook every night after work, exhausted, and say nothing.",[-1,-3,1,1,0,3],"Dinner is on time and you are running on empty."),
O("r","Refuse flatly: you won't cook at all.",[-1,0,-3,-2,0,3],"The kitchen goes cold and everyone has a version of the story."),
O("a","Order food most nights and let the arguments happen in whispers.",[-1,0,-1,0,-2,1],"The money drains and the real conversation never starts."),
O("k","Sit down together, make a weekly rota (who cooks, who shops, who helps), and present it to Ammi-ji as 'our plan'.",[3,2,1,0,0,-2],"A rota on the fridge door beats an argument. Ammi-ji even claims Fridays as hers.")],
"Roles decided by default become roles imposed. Decide them explicitly as a couple before they harden into tradition.");

A("S06",3,"liv","Month 3","Different faith habits","عبادت کا فرق",["fil"],null,
"You pray five times a day. Your husband prays mostly on Fridays and Eid. Last night you left the room to pray alone and felt a distance bigger than the room.",
"You believe in your own way. Your wife prays regularly and has begun to look disappointed when you don't join. You feel judged in your own home.",
[O("r","Press the point, or push back.",[-3,-1,0,0,0,3],"Faith turns into a scoreboard, and nobody grows closer to anything.","Press: 'A real believer would pray.'","Say: 'Stop preaching to me.'"),
O("p","Quietly change your own practice to match what the other wants.",[-1,-3,0,1,0,1],"Peace outside, but the practice doesn't feel like yours any more."),
O("a","Avoid the subject and pray (or not) separately, never discussing it.",[-1,0,0,0,0,1],"You live next to each other's faith and never inside it."),
O("k","Talk about what faith means to each of you, agree a shared minimum (for example one prayer or Friday together), and no policing.",[3,2,0,0,0,-2],"Each of you owns your own practice, and you share one small ritual.")],
"Respect is not agreement. Agree a shared minimum and let each person own their practice without policing. For religious rulings, ask a scholar both of you trust.");

A("S09",2,"liv","Month 2","The hourly phone call","روز کی فون کالز",["bmom","bdad"],["bdad","Beti theek hai na? Koi tang to nahi karta?"],
"Your father has called three times today. He heard you sounded low yesterday and now every call starts with 'Koi tang to nahi karta?'. You love him, and you feel your in-laws can hear every word.",
"Your father-in-law's calls to your wife are on speaker. You feel watched, as if you're under suspicion for something you haven't done.",
[O("r","Snap at the calls.",[-2,0,-3,-1,0,3],"Her father hears: 'Stay away.' The calls become worry calls.","Snap at your father: 'Stop checking on me, I'm fine!'","Tell your wife to make her father stop calling."),
O("a","Let calls ring out and answer with short texts.",[-1,0,-2,0,0,1],"His worry grows in the silence, and so do the calls."),
O("p","Take every call and pretend everything is perfect.",[-1,-2,1,0,0,2],"Your parents relax. You haven't told anyone how you really feel."),
O("k","Agree one regular daily call, share a few specific good things each time, and say something warm to the worried parent.",[3,1,2,0,0,-2],"One steady call and some specific good news calm the rest.","Call your parents yourself: share something good, ask for one daily check-in time, and thank them for caring.","Tell your wife you're not upset, and suggest she and her father agree on one regular call. Say something warm to him yourself.")],
"Anxious parents need a rhythm, not a rejection. One reliable call and specific good news settle most of the worry.");

A("S13",4,"liv","Month 4","What to wear outside","باہر کیا پہنیں",["mil","fil"],["mil","Beta, bahar jeans nahi. Log baatein karte hain."],
"You're going to the market and Ammi-ji looks at your jeans: 'Not outside, beta. People talk.' This was never discussed before the wedding. Your husband looks at his shoes.",
"Your mother has opinions about what your wife wears outside. You hadn't thought about it, but now sleeves and jeans are a household topic and you're expected to settle it.",
[O("r","Declare you'll wear whatever you want, and walk out.",[-2,1,-3,-2,0,3],"The door slams and the story travels. Nobody wins."),
O("p","Change your wardrobe completely to avoid the comments.",[0,-3,2,1,0,2],"Fewer remarks. You catch yourself disliking the mirror."),
O("a","Dress their way at home and your way elsewhere, hiding the difference.",[-2,-1,0,0,0,2],"It works until someone sees a photo."),
O("k","Share what matters to you and why, then propose a middle ground (modest in the neighbourhood, your style elsewhere). The spouse speaks to their own parent.",[3,2,1,0,0,-2],"A middle ground, said warmly by the right person, lets everyone keep face.","Tell your husband what matters to you and why, propose a middle ground, and ask him to share it with his mother.","Ask your wife what matters to her, agree a middle ground, then tell your mother yourself with warmth: 'we've sorted it'.")],
"Dress is both identity and respect. Negotiate a middle ground as a couple, and let each spouse speak to their own parent.");

A("S14",3,"liv","Month 3","Hide some money, beta","کچھ پیسے چھپا کر رکھو",["bmom"],["bmom","Kuch paise apne paas chupa ke rakho, safety ke liye."],
"Your mother whispers on the phone: 'Always keep some money hidden from him, for safety.' She means well; her own life taught her that. You love her and you also love your husband.",
"You discover your wife has an envelope of cash you didn't know about. You're hurt, and curious why she needed to hide it.",
[O("p","Follow your mother's advice and keep money hidden.",[-2,0,1,0,0,2],"A secret grows, and so does the distance.","Follow your mother's advice and hide some money.","Say nothing, and start keeping an envelope of your own."),
O("r","Make it an accusation.",[-3,0,-2,0,0,3],"Now it's about a theft that never happened. Both mothers hear about it.","Tell your mother off, and tell your husband to stop asking.","Demand she hand over the envelope."),
O("a","Pretend it never happened.",[-2,0,0,0,0,1],"The envelope stays. So does the mistrust.","Keep it hidden and avoid the topic.","Pretend you didn't see it."),
O("k","Honour the worry behind it and agree openly: a joint emergency fund, plus a small personal fund each.",[3,2,1,0,2,-2],"Security without secrecy. Her mother gets a thank-you, and the envelope goes into the open.","Honour your mother's worry, and tell your husband openly: 'Let's have a joint emergency fund and each a small personal fund.'","Ask without accusing: 'Let's set up an emergency fund together, and each have a little personal money.'")],
"Secret money is born from fear. Replace it with an agreed emergency fund and a small personal allowance for each partner.");

A("S15",5,"liv","Month 5","The silent decider","خاموش فیصلہ ساز",["fil","mil"],null,
"Every rule in this house seems to come from Ammi-ji, but Abbu-ji nods slowly each time. You wonder who's really deciding, and whether to take your question to him.",
"You've always assumed your mother decided things at home. You've begun to notice Dad's small nods, and realise he's been the quiet decision-maker all along.",
[O("r","Challenge the rule at the dinner table.",[-2,0,-3,-2,0,3],"Everyone stops chewing. Ammi-ji and Abbu-ji now agree on one thing: you."),
O("a","Keep complying and resent the unspoken rules.",[-1,-1,0,0,0,2],"The rules stay invisible and so does your discomfort."),
O("p","Ask no one and obey everyone.",[-1,-3,1,1,0,2],"You are safe and slightly smaller."),
O("k","Find out who actually decides, then raise your question with them, privately and with respect.",[2,2,2,1,0,-2],"A private cup of chai with Abbu-ji clears up months of guessing.","Ask your husband who decides what, then respectfully raise your question with Abbu-ji privately.","Ask your father privately what he thinks, then bring the answer back to your wife and mother.")],
"In many homes the quiet person holds the real vote. Find the actual decision-maker and speak to them privately and respectfully.");

A("S16",3,"yard","Month 3","The nand who reports","بات پہنچانے والی نند",["sana","mil"],["sana","Maine Ammi ko bata diya!"],
"You mentioned to Sana, in confidence, that you missed home. By evening Ammi-ji says, 'Is this house not good enough, beta?' You realise that everything you say travels.",
"Your sister told Mum what your wife said in confidence. You see your wife's face change when Mum brings it up, and you're stuck between loyalty and fairness.",
[O("r","Call it out loudly in front of everyone.",[-2,0,-2,-2,0,3],"Sana cries, Ammi-ji defends her, and the original sadness is forgotten.","Confront Sana in front of everyone.","Tell your wife she shouldn't confide in your sister."),
O("p","Stop sharing anything real, with anyone in the house.",[-1,-3,0,0,0,2],"Safe, but lonelier."),
O("a","Pretend you didn't hear it and keep smiling.",[-1,-1,0,0,0,1],"It happens again."),
O("k","Decide what you share and with whom: real worries go to your partner first; keep a warm, light relationship with the household.",[3,1,0,0,0,-2],"You still laugh with Sana, and the real stuff goes where it's safe.","Take real worries to your husband first, and keep warm, light chat with Sana.","Tell Sana kindly that private things stay private, and tell your wife you'll keep your family's chat out of your marriage.")],
"Information discipline: share the important stuff with your partner first. Keep warm but light conversations with the wider household.");

A("S18",5,"yard","Month 5","Not before Sana's rishta","پہلے سانا کا رشتہ",["mil","sana"],["mil","Pehle Sana ka rishta ho jaye, phir tum log sochna."],
"Ammi-ji says, 'Don't plan a baby until Sana's rishta is settled.' Nobody asked what you and your husband want. It feels like your life has an outside schedule.",
"Mum has said the baby can wait until Sana's rishta is done. You see how it lands with your wife, and you also see Mum's worry for Sana.",
[O("p","Agree outwardly and postpone your plans indefinitely.",[-1,-3,1,1,0,2],"The family is pleased. You two aren't."),
O("r","Tell Ammi-ji it's none of her business.",[-1,1,-3,-2,0,3],"True or not, it lands as a slap. Sana overhears."),
O("a","Change the subject, and decide privately without ever saying it aloud.",[-1,0,-1,0,0,1],"The question returns every Eid."),
O("k","Agree your own timeline together, then share it warmly: 'We'll decide when it's right for us, and we'll pray for Sana's good rishta.'",[3,2,0,1,0,-2],"A kind blessing and a firm answer in one sentence.","Talk privately with your husband and agree your timeline, then share it kindly with Ammi-ji.","Agree your timeline with your wife first, then tell Mum warmly that you two will decide, and that you're praying for Sana.")],
"Refuse other people's timelines with warmth. Decide as a couple, then deliver it with a kind blessing for the other person's wish.");

A("S19",6,"yard","Month 6","The gift race","تحفوں کی دوڑ",["aunty","mil"],["aunty","Uski dulhan ko to bara set mila tha!"],
"At the Eid gifts, your jethani loudly compares sets: 'Mine was heavier, but yours is pretty too.' Ammi-ji's eyes drift between the two of you.",
"Your brother's wife has started comparing gifts and status with your wife. You hate being the referee, but your mother is quietly keeping score.",
[O("r","Compete: show off yours and comment on hers.",[-1,0,-2,-2,-1,3],"Now there's a race and a story, and everyone has a side."),
O("a","Avoid family gatherings so there's nothing to compare.",[0,0,-1,-2,0,1],"The invitations slow, and so does your place in the family."),
O("p","Downplay yourself and praise her to everyone to keep peace.",[0,-2,1,1,0,1],"The peace is real. So is the small hurt."),
O("k","Refuse to enter the race. Smile, say 'both are lovely', and agree with your partner you won't compare.",[2,2,1,1,0,-2],"A competition needs two players. Without you, it fades.","Smile, say 'she looks lovely', and tell your husband privately that comparisons make you uncomfortable.","Refuse to referee. Say 'both are lovely', and agree with your wife you won't compare.")],
"A competition needs two players. Stay out, stay kind, and keep your own measure of what matters.");

A("S20",8,"liv","Month 8","The inheritance argument","جائیداد کا جھگڑا",["fil","hamza"],["fil","Yeh ghar sab ka hai!"],
"Two brothers argue loudly about who gets which floor of the house, and you're standing right there with the chai tray. Someone mentions your husband's 'share' and every head turns.",
"Your brother and father are arguing about the house share, and part of it is about you. Your wife is standing there with the tray, and your family has forgotten she's a person.",
[O("r","Take sides loudly and defend your share.",[-1,0,-3,-2,-1,3],"The voices rise. You become 'the greedy one' in the family story.","Take sides loudly: 'He deserves his share!'","Take sides loudly: 'I deserve my share.'"),
O("a","Leave the room and avoid every conversation about it.",[0,0,-1,-1,0,1],"The decision gets made without you."),
O("p","Say 'whatever you decide, we won't mind', without asking each other.",[-2,-2,1,1,-3,2],"Peace for a day. Later you realise nobody asked either of you."),
O("k","Step out of the heat; agree privately what you want; then propose a calm family meeting with facts written down.",[3,1,0,0,2,-2],"A written list, a calm room, and a reasonable outcome.","Stay quiet in the moment. Later with your husband, agree what you want and suggest a calm meeting with written facts.","Step out of the shouting, speak with your wife, then propose a calm family meeting with facts written down.")],
"Property fights need facts in writing and a calm room. Leave the heat; return with documents and a plan.");

A("S22",4,"liv","Month 4","Dinner comments","کھانے پر تبصرے",["aunty","mil","sana"],["aunty","Hai, tum to bohat moti ho gayi ho... aur rang bhi dab gaya!"],
"At a dinner, an aunty says, 'You've gained weight' and 'You were fairer at the wedding.' Everyone laughs. You laugh too, and your stomach drops.",
"An aunty comments on your wife's weight and colour at dinner. People laugh. You feel your wife shrink beside you.",
[O("a","Laugh it off and change the subject.",[-1,-2,0,0,0,2],"Everyone moves on. You don't."),
O("r","Hit back with a rude comment about the aunty.",[0,0,-2,-3,0,3],"Silence. By evening the family is split over who was rude."),
O("p","Start a diet or a lightening routine to fix it.",[-1,-3,1,1,-1,2],"The comments change. Your relationship with the mirror does too."),
O("k","Use a light, warm line, and back each other: 'Thank you for caring, I'm very happy as I am', or 'She looks wonderful to me, aunty.'",[3,3,0,1,0,-3],"A smile, a line, and the topic closes. Afterward you thank each other.","Smile and say, 'Thank you for caring, I'm very happy as I am.' Tell your husband afterwards you'd like him to back you.","Back her in the moment with a light line: 'She looks wonderful to me, aunty.' Then thank her privately.")],
"Prepare a light, warm line and partner defence in advance. A husband's quick, kind 'I think she's lovely' closes most of these conversations.");

A("S23",6,"yard","Month 6","Phupho decides","پھوپھو کا فیصلہ",["aunty","mil"],["aunty","Meri raaye mein yeh sab theek nahi."],
"Phupho, whom everyone defers to, has decided you're 'too modern'. The whole family now looks at you through her opinion.",
"Your phupho shapes what the family thinks of your wife. Everyone waits for her verdict, including your mother.",
[O("r","Contradict her publicly: 'You don't know me.'",[-1,0,-3,-3,0,3],"A public contradiction ends the debate and your standing in it."),
O("a","Avoid her at every gathering.",[0,0,-1,-2,0,1],"She fills the silence with her own version of you."),
O("p","Agree with everything she says and run errands for her.",[-1,-3,1,2,0,2],"She approves of you. You aren't sure who 'you' is any more."),
O("k","Build a respectful relationship: small gifts, real questions, and speak well of each other in front of her. Give her a role in the next event.",[2,1,2,3,0,-2],"Over a few months she moves from judge to ally. Someone quotes her saying 'a good girl'.","Visit her with a small gift, ask her advice about something real, and be yourself respectfully. Ask your husband to speak well of you.","Invite her over, ask her advice, speak well of your wife in front of her, and give her a role in the next event.")],
"Influencers in the family can become allies. Respect, small gestures and real consultation change the room over time.");

A("S24",7,"yard","Month 7","Every function","ہر تقریب",["mil","aunty","sana"],["mil","Shaadi mein sab aa rahe hain, tum log bhi aana!"],
"This month there are eleven invitations. Ammi-ji expects the two of you at every one. Your husband has had six late nights and is exhausted.",
"Your mother expects you at every function. You're tired, and your wife has started getting dressed slowly with a sigh.",
[O("p","Go to everything and run on empty.",[-1,-3,2,2,0,3],"Everyone is pleased. You two haven't had a quiet evening in a month."),
O("r","Announce you're skipping all events from now on.",[-1,0,-3,-3,0,2],"Backlash, and a lot of phone calls."),
O("a","Say 'we'll try', then don't turn up, with excuses.",[-1,0,-2,-2,0,1],"Excuses run out before invitations do."),
O("k","Pick together: 'must go' (close family), 'try', 'skip'. Tell your parents the plan with warmth and attend your 'musts' fully.",[3,2,1,0,0,-3],"Fewer events, better presence. Your 'musts' feel like real celebrations again.")],
"Attending everything is a habit, not a duty. Sort events into must, try and skip, then show up fully for the 'musts'.");

A("S25",9,"liv","Month 9","The family group","فیملی گروپ",["sana","aunty"],["sana","Bhabhi, group mein dekha?"],
"Your private quarrel with your husband appears, reworded, in the family WhatsApp group as 'a story'. Someone replies with a heart. You feel exposed.",
"A private argument with your wife has become a story in the family group. You can't tell who leaked it, and your wife looks at you as if you did.",
[O("r","Post angrily in the group to correct the story.",[-2,0,-2,-3,0,3],"Now the argument is public, permanent and screenshot-able."),
O("a","Mute the group and ignore everything.",[-1,0,-1,-1,0,1],"The story keeps travelling without you."),
O("p","Reply with a laughing emoji and pretend it's funny.",[-1,-2,0,0,0,2],"Nobody notices how much it stung."),
O("k","Agree as a couple what stays between you. Talk privately and kindly to whoever shared it. Say nothing in the group.",[3,1,0,1,0,-2],"The leak stops, and your trust grows.")],
"Family groups are bulletin boards. What you want private stays between the two of you, and rumours are answered privately, not publicly.");

A("S27",3,"liv","Month 3","Why do you need to work?","آپ کو نوکری کیوں چاہیے؟",["fil","mil"],["fil","Beta, ghar ka kaam bhi to hai."],
"Your in-laws have started asking, 'Why do you need to work? He earns enough.' You love your job and you earned it. Your husband mumbles about 'adjusting'.",
"Your parents oppose your wife's job. You don't want conflict, but your wife's eyes flash whenever it's raised, and she is happier when she works.",
[O("p","Quit quietly to keep everyone comfortable.",[-1,-3,2,1,-2,2],"The pressure stops. So does your paycheque, and part of your confidence."),
O("r","Call them backward and slam the door.",[-1,1,-3,-2,0,3],"You've won the point and lost the house."),
O("a","Keep working and say nothing, hoping they'll stop asking.",[-1,0,-1,0,0,1],"They don't stop. Each dinner has a small test."),
O("k","Agree privately why it matters, then tell the family calmly, together: 'The job stays, and we'll manage the home together.'",[3,3,-1,0,2,-2],"A calm, united 'decided' ends the debate with less drama than expected.","Talk with your husband first: why it matters. Then both of you tell your in-laws calmly.","Stand with your wife and tell your parents calmly: 'She works, we manage the home together, and it's decided.'")],
"If it wasn't agreed before the wedding, agree it now. Calm firmness, delivered together, works better than defiance or silence.");

A("S28",8,"liv","Month 8","She earns more","وہ زیادہ کماتی ہے",["mil","fil"],["mil","Kamaane wali biwi hai, bas ghar ka khayal rakhna."],
"You got a promotion and now earn more than your husband. His relatives joke about 'role reversal'. He laughs along but he's been quiet all week.",
"Your wife earns more than you. Relatives joke about it and your pride stings, even though you know you're proud of her too.",
[O("r","Turn money into control or competition.",[-3,0,0,-1,-1,3],"Money becomes a scoreboard. Both lose.","Hide the raise and keep money talk vague.","Claim control: 'I decide where it goes.'"),
O("a","Avoid talking about money at all.",[-1,0,0,0,-1,1],"The numbers get fuzzy, and so do the plans."),
O("p","Shrink yourself so the other feels bigger.",[-1,-3,0,0,-1,3],"The scoreboard stays. Now one of you pretends it isn't there.","Downplay your career and defer on every money decision.","Take on extra work to prove you can match her."),
O("k","Agree that money is 'ours', share the numbers, ignore the jokes together, and celebrate each other's wins.",[3,2,0,1,2,-3],"The relatives' jokes bounce off a united front.")],
"Who earns more is a fact, not a ranking. Pooling and a partnership mindset beat any scoreboard.");

A("S29",9,"liv","Month 9","The business idea","کاروبار کا خیال",["fil","hamza"],["hamza","Bhai, yeh mauqa chhodna nahi!"],
"Your husband wants to put all your savings into a friend's business. He's excited and you're terrified. His father nods along. Nobody asks what you think.",
"You've found a business chance and your wife looks scared when you describe it. You're convinced it's your moment, and a bit hurt she isn't thrilled.",
[O("r","Push it through, or forbid it outright.",[-3,0,0,-1,-3,3],"Whichever way it goes, the argument is about who has the power.","Forbid it outright.","Go ahead: 'You'll see I was right.'"),
O("a","Neither commit nor reject; let it drift.",[-1,0,0,0,-1,2],"The chance passes or the decision is made by default."),
O("p","Agree to everything and lose sleep.",[-1,-3,0,0,-3,3],"The money goes in. The worry goes with it."),
O("k","Write it down together: how much you can afford to lose, start small, review after six months, and an exit plan. Then decide.",[3,2,0,0,2,-2],"A smaller, smarter version of the idea, with both names on it.")],
"Risk is a shared decision with limits. Decide the amount you can afford to lose, the milestones, and an exit before you start.");

A("S30",10,"yard","Month 10","MBA or baby?","ایم بی اے یا بچہ؟",["mil","aunty"],["mil","Pehle bacha, phir parhai!"],
"You've been accepted into an MBA programme. Ammi-ji says, 'Baby first, then study.' You and your husband have never discussed the order.",
"Your wife has an MBA offer. Your family is pushing for a baby first. You want both and don't know how to get both.",
[O("p","Defer the MBA and start a baby plan to please everyone.",[-1,-3,2,2,0,2],"Everyone is happy. You're still wondering what you gave up."),
O("r","Announce you're doing the MBA and won't discuss a baby for years.",[-2,1,-3,-2,0,3],"The family hears 'never', not 'later'."),
O("a","Avoid the topic and let time decide.",[-1,0,-1,0,0,2],"Time decides, and not in your favour."),
O("k","Map two or three sequences together (MBA then baby, part-time MBA, baby then MBA), choose one with dates, and share it with both families as one story.",[3,2,1,1,0,-2],"A shared timeline turns a clash into a plan, and the families get something concrete.")],
"Sequencing beats choosing. Map the options together, add dates, then give both families one shared story.");

A("S31",2,"liv","Month 2","The quiet child","خاموش بچہ",["kid"],["kid","Aap meri ammi nahi hain."],
"Eight-year-old Zain, your husband's son from his first marriage, hasn't spoken to you in two weeks. Last night he said, 'You're not my mother.' You are trying so hard.",
"Your son Zain refuses to talk to your new wife. You love them both and feel torn in two.",
[O("r","Insist on respect or discipline.",[-2,0,-1,-1,0,3],"Zain withdraws further. Now it's a contest of wills.","Insist he respects you as his mother.","Tell your son to be polite, or else."),
O("a","Keep your distance and let him come round in his own time, never initiating.",[-1,0,0,0,0,1],"Distance stays distance."),
O("p","Give him everything he wants and never say no.",[0,-3,0,0,-1,2],"He takes the gifts. The wall stays."),
O("k","Don't compete for the 'mother' title. Offer small steady kindness, keep his routines, and let the parent define roles clearly.",[3,2,0,0,0,-2],"One day he asks you to help with a drawing. It's a start.","Offer small steady kindness, a shared activity, and ask your husband to define your role clearly and keep Zain's routines.","Reassure Zain that nobody replaces his mother, keep his routines, let him set the pace, and agree with your wife how each of you handles discipline.")],
"A child can't be rushed into love. Be steady and kind, keep routines, replace no one, and let the biological parent define roles clearly.");

A("S32",4,"bed","Month 4","The midnight call","آدھی رات کی کال",[],null,
"At midnight your husband's phone rings. He steps outside. It's his ex, about Zain's custody schedule. He comes back and says only, 'Nothing.'",
"Your ex calls late about the custody schedule. You step out because you don't want a fight, but your wife's silence tells you she noticed.",
[O("r","Demand every detail of the call.",[-3,0,0,0,0,3],"A call about a child becomes an interrogation.","Demand to know exactly what the call said.","Snap: 'It's about my child. Don't question it.'"),
O("a","Pretend you didn't hear and don't ask.",[-2,-1,0,0,0,2],"Silence builds a story, and it's worse than the real one."),
O("p","Accept it and never ask, even though it burns.",[-1,-3,0,0,0,3],"You are 'understanding', and secretly eaten up."),
O("k","Agree contact rules: calls about the child at set times, a short summary after, and a calm check-in on how each of you feels.",[3,2,0,0,0,-3],"The calls continue and the secrecy stops. The ex becomes a schedule, not a shadow.")],
"Co-parenting contact is real and ongoing. Transparent rules (time, topic, a quick summary) stop imagination doing the damage.");

A("S33",5,"liv","Month 5","Zain's other family","زین کا دوسرا خاندان",["aunty"],["aunty","Zain humare ghar aata rahega, hamesha."],
"Zain's late mother's mother (his nani) visits every Friday, and her photo is on the wall. You feel like a guest in a story that was written before you.",
"Your late wife's mother remains close to Zain and to you. Your new wife wants to feel at home, but there is a photograph on the wall and a Friday ritual.",
[O("r","Ask for the photo and visits to stop.",[-3,-1,-2,-2,0,3],"You are now the cruel one in a story that was never about you.","Ask your husband to remove the photo and stop the visits.","Tell your wife not to be jealous of someone who has passed."),
O("a","Keep your distance and hide in the kitchen on Fridays.",[-1,0,0,0,0,1],"Fridays get quieter. So do you."),
O("p","Smile through every visit, hurting inside.",[-1,-3,1,1,0,2],"Everyone is happy but you."),
O("k","Honour the past and build the present: keep Zain's roots strong, agree visiting rhythms that include you, and add your own small traditions.",[3,2,2,1,0,-2],"The nani brings a dish for 'both mothers'. A small, real moment.")],
"Honouring the past doesn't mean competing with it. Keep the child's roots strong, and build rituals that include the new spouse.");

A("S34",6,"bed","Month 6","The old like","پرانا لائک",[],null,
"You notice your husband liked an old photo of a friend from before the wedding. It's probably nothing. It also feels like everything.",
"You liked an old photo from a friend. Your wife noticed. Now she's quiet and watches your phone when you scroll.",
[O("r","Confront, or turn it into 'you're controlling'.",[-3,0,0,0,0,3],"Same event, two lawyers, no verdict.","Confront him loudly and demand he blocks her.","Say: 'You check my phone? That's controlling.'"),
O("a","Say nothing and start watching his activity daily.",[-2,-1,0,0,0,3],"Surveillance is a full-time job with no salary."),
O("p","Pretend it doesn't matter and delete your own accounts to 'prove' loyalty.",[-1,-3,0,0,0,2],"You've proven nothing, and shrunk your own life."),
O("k","Talk about online rules together: what you like, follow and message, the same for both, and what to do when something feels off.",[3,2,0,0,0,-2],"A rule for both of you works better than a rule for one.")],
"Online conduct is a shared agreement, not surveillance. Agree equal rules and say 'this felt off' directly.");

A("S35",7,"yard","Month 7","Keep him under control","اسے قابو میں رکھو",["aunty"],["aunty","Mard ko shuru se qaboo mein rakho!"],
"A friend, unhappy in her own marriage, tells you, 'Keep him under control from the start or you'll regret it.' You laugh, but catch yourself testing it that evening.",
"A friend tells you, 'Don't let your wife control you.' You're tempted, and on the way home you practise being 'firm'.",
[O("r","Try it out: start ordering, checking and testing.",[-3,0,0,0,0,3],"Your partner doesn't understand why the temperature has dropped.","Try it: start checking, ordering and testing him.","Try it: start ordering her around and refusing her small requests."),
O("a","Nod, quietly avoid the friend, and tell no one.",[0,0,0,0,0,0],"Nothing changes, and you tell nobody what was said."),
O("p","Go along with the friend and stop sharing your own view.",[-1,-2,0,0,0,1],"You've borrowed someone else's marriage."),
O("k","Thank her, keep your own counsel, and choose confidants who want your marriage to work. Share what you learned with your partner.",[2,2,0,0,0,-2],"You keep the friendship and your own marriage.")],
"Choose confidants who want your marriage to succeed. Advice shaped by someone else's pain can quietly become your problem.");

A("S36",11,"liv","Month 11","A second proposal","دوسری شادی کی بات",["bmom","bdad"],null,
"A decent proposal comes from a man who is already married. He says it will be handled 'properly'. Your parents are weighing it. Nobody has mentioned his first wife.",
"You want to remarry. Your first wife and children would be hurt. You've been told the law requires specific steps, and you haven't followed them.",
[O("r","Move fast before anyone changes their mind.",[-3,-1,-2,-3,0,3],"Rushed, hidden and unlawful steps are a recipe for serious harm to everyone, including you.","Say yes quickly before anyone changes their mind.","Marry quietly without telling your first family or checking the law."),
O("a","Leave the questions to your elders and ask nothing yourself.",[-1,-1,0,0,0,1],"Decisions about your life get made by people who aren't living it."),
O("p","Say yes because the family wants this discussion to end.",[-1,-3,1,0,0,2],"The discussion ends. The consequences don't."),
O("k","Pause and ask the hard questions with a lawyer and a trusted elder: is the first wife informed, are the legal steps taken, how will every person be supported?",[2,2,1,0,-1,-1],"Slower and harder, but everyone knows where they stand.","Before saying anything, ask: is his first wife informed, have the legal steps been followed, and how will everyone be supported? Consult a lawyer and a trusted elder.","Pause. Talk to your first wife and a lawyer about legal steps and your duties to everyone, and don't proceed without them.")],
"Legal and ethical duties come before the nikah. Pakistan's family law has specific consent and procedure requirements; this lesson needs lawyer review before launch.");

A("S39",10,"liv","Month 10","Call the uncle","ماموں کو بلاؤ",["bdad","fil"],["bdad","Beta, hum baat kar lete hain."],
"After a long cold war, someone suggests asking Mamu to mediate. You worry he'll take your husband's side and you'll lose face.",
"Your wife's uncle offers to mediate, and your own father wants to join. You fear a trial with both families watching.",
[O("r","Bring your own side and a loud argument.",[-2,0,-2,-3,0,3],"The meeting becomes a hearing and no one leaves friends.","Refuse, and call your own relatives to take your side.","Bring your father and a loud argument to the meeting."),
O("a","Attend, and say nothing real.",[-1,0,0,-1,0,1],"The meeting ends with hugs and no change."),
O("p","Agree to whatever the elder suggests, to end it.",[-1,-3,1,1,0,1],"The elder is thanked. The problem is unresolved."),
O("k","Choose a trusted, neutral person; agree ground rules (listen, no interrupting, no old grievances); each bring one clear request.",[3,2,1,1,0,-2],"Two requests on the table and two people listening.")],
"A mediator is a safety net, not a judge. Choose someone both trust, set ground rules, and bring requests, not accusations.");

A("S40",11,"bed","Month 12","When it stops being conflict","جب یہ جھگڑا نہیں رہتا",[],null,
"It began with 'where were you?' and a phone checked daily. Now there are rules about who you may call, your wages go into his account, and last night he said, 'You'll regret leaving.' You are afraid.",
"You control where your wife goes, who she calls and her money. Last night you threatened her. You tell yourself it's love and fear of losing her, and part of you knows it isn't right.",
[O("p","Adjust more so he stays calm.",[-1,-3,0,0,0,3],"The rules multiply. Adjusting is not working, and it never will.","Adjust more, so he stays calm.","Promise to stop and carry on as before."),
O("r","Confront him alone at his angriest.",[-2,0,0,0,0,4],"It escalates. This is not a fight to have alone.","Confront him alone, when he's angriest.","Defend yourself: 'It's only because I care.'"),
O("a","Wait and hope it passes.",[-1,-2,0,0,0,3],"It doesn't pass; it grows.","Wait and hope it passes.","Blame stress and avoid the topic."),
O("k","Take it seriously: document what's happened, tell a trusted person, make a safety plan (documents, emergency contact, safe place) and contact a helpline or legal aid.",[1,3,0,0,0,-2],"A hard step with real help behind it. You are not alone.","Take it seriously: write down what has happened, tell a trusted person, make a safety plan, and contact a helpline or legal aid.","Acknowledge it plainly as harm. Give back her phone, money and freedom of movement, and get professional help for control and anger. Don't ask her to fix it.")],
"This is not conflict to manage with better communication. Control, threats and isolation call for documenting, telling someone you trust, a safety plan and expert help. 'Adjusting more' is not the answer.",
{ser:1});
