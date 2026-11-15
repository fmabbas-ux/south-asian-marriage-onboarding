/* v0.14 privacy-respecting analytics (Umami Cloud: no cookies, no personal data, no answers, no free text).
   Only milestone events, so we can see how many people start, finish, replay and use two-player.
   Loaded after the main game script; it wraps existing functions without changing them. */
(function(){
function trk(name,data){try{if(window.umami&&umami.track)umami.track(name,data||{})}catch(e){}}
window.trk=trk;
var app=/[?&]src=app/.test(location.search)||matchMedia("(display-mode: standalone)").matches;
function wrap(fn,after){var o=window[fn];if(typeof o!="function")return;window[fn]=function(){var r=o.apply(this,arguments);try{after.apply(this,arguments)}catch(e){}return r}}
wrap("begin",function(){trk("game_start",{mode:S.mode||"solo",rounds:S.len,lang:LG,app:app?"yes":"no"})});
wrap("again",function(){trk("replay",{mode:S.mode})});
wrap("nextRound",function(){if(V=="round"&&S&&[3,6,12,20,30].indexOf(S.pos)>-1&&!(S._rr=S._rr||{})[S.pos]&&(S._rr[S.pos]=1))trk("round_reached",{n:S.pos,rounds:S.len,mode:S.mode})});
wrap("end",function(){trk("game_end",{ending:String(S.ei),rounds:S.len,mode:S.mode})});
wrap("resumeGame",function(){trk("resume")});
wrap("openHelp",function(){trk("help_open")});
wrap("openFB",function(){trk("feedback_open")});
wrap("chooseRole",function(){if(S&&S.mode=="host")trk("room_create")});
wrap("doJoin",function(){trk("room_join")});
wrap("toggleLang",function(){trk("language",{lang:LG})});
})();
