(function(g){var window=this;var nta=function(a,b){var c=[];g.Jf(b,function(a){var b;try{b=g.aj.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.p(b)?g.$i(b)&&c.push(a):c.push(a)},a);
return c},ota=function(a,b){var c=nta(a,b);
(0,g.F)(c,function(a){g.aj.prototype.remove.call(this,a)},a)},pta=function(a){return a.H?a.F+((0,g.E)()-a.A)/1E3:a.F},qta=function(){var a=g.bj;
ota(a,a.g.ud(!0))},u9=function(a){g.tw.call(this,"ScreenServiceProxy");
this.Kc=a;this.o=[];this.o.push(this.Kc.$_s("screenChange",(0,g.z)(this.gL,this)));this.o.push(this.Kc.$_s("onlineScreenChange",(0,g.z)(this.PH,this)))},v9=function(a){g.ow("cloudview",a)},rta=function(a){v9("setApiReady_ "+a);
g.ka("yt.mdx.remote.cloudview.apiReady_",a,void 0)},w9=function(){return g.u("yt.mdx.remote.cloudview.instance_")},sta=function(a){g.Fi[a]&&(a=g.Fi[a],(0,g.F)(a,function(a){g.Di[a]&&delete g.Di[a]}),a.length=0)},x9=function(){return g.u("yt.mdx.remote.connection_")},y9=function(a){g.ka("yt.mdx.remote.connectData_",a,void 0)},tta=function(a){g.ka("yt.mdx.remote.currentScreenId_",a,void 0)},z9=function(){return g.u("yt.mdx.remote.currentScreenId_")},B9=function(){if(!A9){var a=g.u("yt.mdx.remote.screenService_");
A9=a?new u9(a):null}return A9},C9=function(a){g.ka("yt.mdx.remote.cloudview.initializing_",a,void 0)},D9=function(){return!!g.u("yt.mdx.remote.cloudview.apiReady_")},E9=function(a){v9("setCastInstalled_ "+a);
g.dj("yt-remote-cast-installed",a)},F9=function(a){g.ow("cloudview",a)},uta=function(a,b){w9().init(a,b)},G9=function(){return!!g.ej("yt-remote-cast-installed")},vta=function(){v9("dispose");
var a=w9();a&&a.dispose();g.ka("yt.mdx.remote.cloudview.instance_",null,void 0);rta(!1);g.Hi(H9);H9.length=0},wta=function(){var a=window.document.createElement("a");
g.we(a,"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Oa(a)},xta=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},yta=function(a){var b=g.Bi();
if(b)if(b.clear(a),a)sta(a);else for(var c in g.Fi)sta(c)},I9=function(){return g.u("yt.mdx.remote.channelParams_")||{}},K9=function(a){var b=x9();
y9(null);a||tta("");g.ka("yt.mdx.remote.connection_",a,void 0);J9&&((0,g.F)(J9,function(b){b(a)}),J9.length=0);
b&&!a?g.Ki("yt-remote-connection-change",!1):!b&&a&&g.Ki("yt-remote-connection-change",!0)},zta=function(){return g.u("yt.mdx.remote.connectData_")},L9=function(){var a=z9();
if(!a)return null;var b=B9().zd();return g.li(b,a)},Ata=function(a,b){E9(!0);
C9(!1);uta(a,function(a){a?(rta(!0),g.Ji("yt-remote-cast2-api-ready")):(F9("Failed to initialize cast API."),E9(!1),g.fj("yt-remote-cast-available"),g.fj("yt-remote-cast-receiver"),vta());b(a)})},Bta=function(){return G9()?w9()?w9().getCastSession():(F9("getCastSelector: Cast is not initialized."),null):(F9("getCastSelector: Cast API is not installed!"),null)},Cta=function(){if(g.noa){var a=2,b=g.dw(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.iw("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.fw,c)}},Dta=function(){var a=wta(),b=window.document.getElementById(a),c=b&&g.kh(b,"loaded");
c||b&&!c||(b=xta(a,function(){g.kh(b,"loaded")||(g.jh(b,"loaded","true"),g.Ji(a),g.Zg(g.va(yta,a),0))}))},Eta=function(a){return(0,g.Q)(a,function(a){return{key:a.id,
name:a.name}})},N9=function(a,b){z9();
L9()&&L9();tta(a.id);var c=new g.Gy(M9,a,I9());c.connect(b,zta());c.subscribe("beforeDisconnect",function(a){g.Ki("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){x9()&&(x9(),K9(null))});
K9(c)},O9=function(){var a=g.ij();
if(!a)return null;var b=B9().zd();return g.li(b,a)},P9=function(a){g.ow("remote",a)},Q9=function(){var a=x9();
return!!a&&3!=a.getProxyState()},R9=function(){D9()?w9().stopSession():F9("stopSession called before API ready.");
var a=x9();a&&(a.disconnect(1),K9(null))},Fta=function(){var a;
a=B9().Kc.$_gos();var b=L9();b&&x9()&&(g.ki(a,b)||a.push(b));return Eta(a)},T9=function(a,b){g.Wm.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.ty;this.A=this.o=null;this.H=(0,g.z)(this.gG,this);this.F=(0,g.z)(this.Mi,this);this.G=(0,g.z)(this.fG,this);this.J=(0,g.z)(this.qG,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Np,this),Gta(this))):c=3;0!=c&&(b?this.Np(c):g.Zg((0,g.z)(function(){this.Np(c)},this),0));
var d=Bta();d&&S9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},U9=function(a){return new g.zy(a.B.getPlayerContextData())},Hta=function(a,b,c,d,e){var f=U9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.Ey(f,b,d);g.p(c)&&(g.Cy(f,c),l.currentTime=c);g.p(k)&&(l.listId=k);V9(a,"setPlaylist",l);e||W9(a,f)},Gta=function(a){(0,g.F)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.va(this.iI,a),this))},a)},Ita=function(a){(0,g.F)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},X9=function(a,b){50>a.C.qc()&&g.vy(a.C,b)},Y9=function(a,b,c){var d=U9(a);
g.Cy(d,c);-1E3!=d.g&&(d.g=b);W9(a,d)},V9=function(a,b,c){a.B.sendMessage(b,c)},W9=function(a,b){Ita(a);
a.B.setPlayerContextData(g.Fy(b));Gta(a)},S9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Mi(null));
a.A=b;a.A&&(Z9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Mi(a.A.media[0]))},Jta=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=U9(a);b.contentId!=d.videoId&&Z9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.Cy(d,a.o.getEstimatedTime());W9(a,d)}else Z9("No cast media video. Ignoring state update.")},Z9=function(a){g.ow("CP",a)},Kta=function(a){var b=!1;
w9()||(a=new g.Uw(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.dj("yt-remote-cast-available",a);g.Ki("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){v9("onReceiverSelected: "+a.friendlyName);
g.dj("yt-remote-cast-receiver",a);g.Ki("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){v9("onReceiverResumed: "+a.friendlyName);
g.dj("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){v9("onSessionChange: "+g.hi(a));
a||g.fj("yt-remote-cast-receiver");g.Ki("yt-remote-cast2-session-change",a)}),g.ka("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
v9("cloudview.createSingleton_: "+b);return b},Lta=function(){var a=0<=g.fc.search(/\ (CrMo|Chrome|CriOS)\//);
return g.xi||a},$9=function(a,b){D9()?w9().setConnectedScreenStatus(a,b):F9("setConnectedScreenStatus called before ready.")},Mta=function(){v9("clearCurrentReceiver");
g.fj("yt-remote-cast-receiver")},Nta=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Cta();a({command:"cast.sender.init"});return}}if(window.chrome)if(Cta(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.bw();55<=b?a="55":50<=b&&(a="50");g.iw("//www.gstatic.com/eureka/clank"+a+g.gw,g.fw)}else g.jw(0);else g.fw()},Ota=function(a){a?(g.dj("yt-remote-session-app",a.app),g.dj("yt-remote-session-name",a.name)):(g.fj("yt-remote-session-app"),g.fj("yt-remote-session-name"));
g.ka("yt.mdx.remote.channelParams_",a,void 0)},Pta=function(){var a=I9();
if(g.Sb(a)){var a=g.hj(),b=g.ej("yt-remote-session-name")||"",c=g.ej("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ka("yt.mdx.remote.channelParams_",a,void 0)}},Qta=function(){var a=O9();
a?(P9("Resume connection to: "+g.hi(a)),N9(a,0)):(g.rj(),Mta(),P9("Skipping connecting because no session screen found."))},Rta=function(a){P9("remote.onCastSessionChange_: "+g.hi(a));
if(a){var b=L9();b&&b.id==a.id?$9(b.id,"YouTube TV"):(b&&R9(),N9(a,1))}else x9()&&R9()},Sta=function(){var a=Fta(),b=L9();
b||(b=O9());return g.Wa(a,function(a){return b&&g.ei(b,a.key)?!0:!1})},Tta=function(){var a=g.ej("yt-remote-cast-receiver");
return a?a.friendlyName:null},Uta=function(a,b,c,d){Lta()?Kta(b)&&(C9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Ata(a,c):(window.__onGCastApiAvailable=function(b,d){b?Ata(a,c):(F9("Failed to load cast API: "+d),E9(!1),C9(!1),g.fj("yt-remote-cast-available"),g.fj("yt-remote-cast-receiver"),vta(),c(!1))},d?window.spf?window.spf.script.load("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Dta():Nta())):v9("Cannot initialize because not running Chrome")},
Vta=function(a){this.B=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Vf(a)||"";b&&(this.B=":"+b);this.A=g.Uf(a)||"";a=g.fc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Na(a,"10.0")&&(this.o=!1))},a$=function(a,b,c){g.H.call(this);
this.H=a;this.Y=b;b.addEventListener("onVolumeChange",this.$k,this);b.addEventListener("onCaptionsTrackListChanged",this.zv,this);b.addEventListener("captionschanged",this.jv,this);b.addEventListener("captionssettingschanged",this.mp,this);b.addEventListener("videoplayerreset",this.Pi,this);b.addEventListener("mdxautoplaycancel",this.gs,this);this.A=!1;this.g=c;c.isDisposed();c.subscribe("proxyStateChange",this.Mv,this);c.subscribe("remotePlayerChange",this.Oi,this);c.subscribe("remoteQueueChange",
this.Pi,this);c.subscribe("autoplayUpNext",this.gv,this);c.subscribe("previousNextChange",this.Jv,this);c.subscribe("nowAutoplaying",this.Cv,this);c.subscribe("autoplayDismissed",this.fv,this);this.suggestion=null;this.D=new g.sl(64);this.C=this.B=window.NaN;this.o={};this.G=new g.Kd(this.gx,1E3,this);g.J(this,this.G);this.F=new g.Wv(this.mN,1E3,this);g.J(this,this.F);this.J=g.w;this.mp();this.Pi();this.Oi()},b$=function(a,b){var c=a.H,d=a.Y.getVideoData().lengthSeconds;
c.H=b||0;c.g.Ra("progresssync",b,d)},Wta=function(a){b$(a,0);
c$(a);d$(a,new g.sl(64))},g$=function(a,b){if(e$(a)&&!a.A){var c=null;
b&&(c={style:a.Y.nj()},g.$b(c,b));a.g.Mw(f$(a),c);a.o=U9(a.g).o}},h$=function(a,b){var c=a.Y.oe();
c?Hta(a.g,f$(a),b,c.g,c.listId.toString()):Hta(a.g,f$(a),b);d$(a,new g.sl(1))},Xta=function(a,b){if(b){var c=a.Y.Gc("captions","tracklist",{wu:1});
c&&c.length?(a.Y.af("captions","track",b),a.A=!1):(a.Y.Rp("captions"),a.A=!0)}else a.Y.af("captions","track",{})},e$=function(a){return U9(a.g).videoId==f$(a)},f$=function(a){return a.Y.getVideoData().videoId},Yta=function(a){c$(a);
if(!a.g.isDisposed()){var b=U9(a.g);b.ib()&&d$(a,new g.sl(8));b$(a,g.Dy(b));a.B=g.Zg((0,g.z)(function(){Yta(this)},a),500)}},c$=function(a){g.ah(a.B);
a.B=window.NaN},i$=function(a){g.ah(a.C);
a.C=window.NaN},d$=function(a,b){i$(a);
var c=a.D;if(b.o!=c.o||b.g!=c.g){var d=g.S(b,2);if(d!=g.S(a.D,2)){var e=a.Y;(e=g.Ol(e.app,e.playerType||1))&&g.yU(e,d)}a.D=b;Zta(a.H,c,b)}},j$=function(){var a=Sta();
!a&&G9()&&Tta()&&(a={key:"cast-selector-receiver",name:Tta()});return a},$ta=function(){var a=Fta();
G9()&&g.ej("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},aua=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.bj&&qta();g.kj();M9||(M9=new Vta,g.tj()&&(M9.g="/api/loungedev"));J9||(J9=g.u("yt.mdx.remote.deferredProxies_")||[],g.ka("yt.mdx.remote.deferredProxies_",J9,void 0));Pta();var c=B9();if(!c){var d=new g.Gw(M9);g.ka("yt.mdx.remote.screenService_",d,void 0);c=B9();Uta(a,d,function(a){a?z9()&&$9(z9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.Ki("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.u("yt.mdx.remote.initialized_")&&
(g.ka("yt.mdx.remote.initialized_",!0,void 0),P9("Initializing: "+g.tf(b)),k$.push(g.Gi("yt-remote-cast2-availability-change",function(){g.Ki("yt-remote-receiver-availability-change")})),k$.push(g.Gi("yt-remote-cast2-receiver-selected",function(){y9(null);
g.Ki("yt-remote-auto-connect","cast-selector-receiver")})),k$.push(g.Gi("yt-remote-cast2-receiver-resumed",function(){g.Ki("yt-remote-receiver-resumed","cast-selector-receiver")})),k$.push(g.Gi("yt-remote-cast2-session-change",Rta)),k$.push(g.Gi("yt-remote-connection-change",function(a){a?$9(z9(),"YouTube TV"):O9()||($9(null,null),Mta())})),a=I9(),b.isAuto&&(a.id+="#dial"),g.um("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,P9(" -- with channel params: "+g.tf(a)),
Ota(a),c.start(),z9()||Qta())},l$=function(){G9()?w9()?D9()?(v9("Requesting cast selector."),w9().requestSession()):(v9("Wait for cast API to be ready to request the session."),H9.push(g.Gi("yt-remote-cast2-api-ready",l$))):F9("requestCastSelector: Cast is not initialized."):F9("requestCastSelector: Cast API is not installed!")},m$=function(a){g.Ut.call(this,a);
this.A={key:g.ji(),name:g.N("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.sl(64);this.H=0},Zta=function(a,b,c){a.F=c;
a.g.Ra("presentingplayerstatechange",new g.Ry(c,b))},n$=function(a,b,c){if(b.key!=a.B.key)if(b.key==a.A.key)R9();
else{a.B=b;var d;if(!c){c=a.g.oe();d=a.g.getVideoData().videoId;var e;if(c){e=[];for(var f=0;f<c.B;f++)e[f]=c.Sb(f).videoId}else e=[a.g.getVideoData().videoId];d={videoIds:e,listId:a.g.Ze(),videoId:d,index:Math.max(a.g.Kx(),0),currentTime:a.g.getCurrentTime()}}a=d;P9("Connecting to: "+g.tf(b));"cast-selector-receiver"==b.key?(y9(a||null),b=a||null,D9()?w9().setLaunchParams(b):F9("setLaunchParams called before ready.")):!a&&Q9()&&z9()==b.key?g.Ki("yt-remote-connection-change",!0):(R9(),y9(a||null),
a=B9().zd(),(b=g.li(a,b.key))&&N9(b,1))}};
g.B(u9,g.tw);g.h=u9.prototype;g.h.zd=function(a){return this.Kc.$_gs(a)};
g.h.contains=function(a){return!!this.Kc.$_c(a)};
g.h.get=function(a){return this.Kc.$_g(a)};
g.h.start=function(){this.Kc.$_st()};
g.h.Sl=function(a,b,c){this.Kc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Kc.$_r(a,b,c)};
g.h.Hl=function(a,b,c,d){this.Kc.$_un(a,b,c,d)};
g.h.R=function(){for(var a=0,b=this.o.length;a<b;++a)this.Kc.$_ubk(this.o[a]);this.o.length=0;this.Kc=null;u9.M.R.call(this)};
g.h.gL=function(){this.aa("screenChange")};
g.h.PH=function(){this.aa("onlineScreenChange")};
var A9=null,H9=[],J9=null,M9=null;g.B(T9,g.Wm);g.h=T9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.w,(0,g.z)(function(){this.Mb("Failed to play video with cast v2 channel.");V9(this,"play")},this)):V9(this,"play"),Y9(this,1,g.Dy(U9(this))),this.aa("remotePlayerChange")):X9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.w,(0,g.z)(function(){this.Mb("Failed to pause video with cast v2 channel.");V9(this,"pause")},this)):V9(this,"pause"),Y9(this,2,g.Dy(U9(this))),this.aa("remotePlayerChange")):X9(this,this.pause)};
g.h.zx=function(a){if(1==this.g){if(this.o){var b=U9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.ib()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.w,(0,g.z)(function(){this.Mb("Failed to seek in video with cast v2 channel.");V9(this,"seekTo",{newTime:a})},this))}else V9(this,"seekTo",{newTime:a});
Y9(this,3,a);this.aa("remotePlayerChange")}else X9(this,g.va(this.zx,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.w,(0,g.z)(function(){this.Mb("Failed to stop video with cast v2 channel.");V9(this,"stopVideo")},this)):V9(this,"stopVideo");
var a=U9(this);g.By(a);W9(this,a);this.aa("remotePlayerChange")}else X9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=U9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){Z9("set receiver volume: "+d)},this),(0,g.z)(function(){this.Mb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){Z9("set receiver muted: "+b)},this),(0,g.z)(function(){this.Mb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);V9(this,"setVolume",e)}c.muted=b;c.volume=a;W9(this,c)}else X9(this,g.va(this.setVolume,a,b))};
g.h.Mw=function(a,b){if(1==this.g){var c=U9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.tf(b.style),g.$b(d,c.o));V9(this,"setSubtitlesTrack",d);W9(this,c)}else X9(this,g.va(this.Mw,a,b))};
g.h.Mp=function(a,b){if(1==this.g){V9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Bc.id});var c=U9(this);c.audioTrackId=b.Bc.id;W9(this,c)}else X9(this,g.va(this.Mp,a,b))};
g.h.prevVideo=function(a,b){if(1==this.g){if(a&&b){var c=U9(this);g.Ey(c,a,b);W9(this,c)}V9(this,"previous")}else X9(this,g.va(this.prevVideo,a,b))};
g.h.nextVideo=function(a,b){if(1==this.g){if(a&&b){var c=U9(this);g.Ey(c,a,b);W9(this,c)}V9(this,"next")}else X9(this,g.va(this.nextVideo,a,b))};
g.h.Ts=function(){1==this.g?V9(this,"dismissAutoplay"):X9(this,this.Ts)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.aa("proxyStateChange",a,this.g)}T9.M.dispose.call(this)};
g.h.R=function(){Ita(this);this.B=null;this.C.clear();S9(this,null);T9.M.R.call(this)};
g.h.Np=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.aa("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.wy(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.iI=function(a,b){this.aa(a,b)};
g.h.gG=function(a){if(!a)this.Mi(null),S9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=U9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)Z9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,W9(this,b)}};
g.h.Mi=function(a){Z9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Jta(this),this.aa("remotePlayerChange")};
g.h.fG=function(a){a?(Jta(this),this.aa("remotePlayerChange")):this.Mi(null)};
g.h.qG=function(){var a=Bta();a&&S9(this,a)};
g.h.Mb=function(a){g.ow("CP",a)};
var k$=[];g.h=Vta.prototype;g.h.mg=function(a,b,c){var d=this.g;if(g.p(c)?c:this.o)d="https://"+this.A+this.B+this.g;return g.cg(d+a,b||{})};
g.h.Lp=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Cb:g.va(this.bL,c,!0),onError:g.va(this.aL,d),Wc:g.va(this.cL,d)};b&&(c.Ub=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Oi(a,c)};
g.h.bL=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.aL=function(a,b){a(Error("Request error: "+b.status))};
g.h.cL=function(a){a(Error("request timed out"))};
g.B(a$,g.H);g.h=a$.prototype;
g.h.R=function(){a$.M.R.call(this);c$(this);i$(this);this.J();this.Y.removeEventListener("onVolumeChange",this.$k,this);this.Y.removeEventListener("onCaptionsTrackListChanged",this.zv,this);this.Y.removeEventListener("captionschanged",this.jv,this);this.Y.removeEventListener("videoplayerreset",this.Pi,this);this.Y.removeEventListener("captionssettingschanged",this.mp,this);this.Y.removeEventListener("mdxautoplaycancel",this.gs,this);this.g.Ka("proxyStateChange",this.Mv,this);this.g.Ka("remotePlayerChange",
this.Oi,this);this.g.Ka("remoteQueueChange",this.Pi,this);this.g.Ka("autoplayUpNext",this.gv,this);this.g.Ka("previousNextChange",this.Jv,this);this.g.Ka("nowAutoplaying",this.Cv,this);this.g.Ka("autoplayDismissed",this.fv,this);this.g=this.H=null};
g.h.zy=function(a,b){2==this.g.g||(e$(this)?this.tD.apply(this,arguments):this.pD.apply(this,arguments))};
g.h.jv=function(a){this.zy("control_subtitles_set_track",g.Sb(a)?null:a)};
g.h.mp=function(){var a=this.Y.Gc("captions","track");g.Sb(a)||g$(this,a)};
g.h.pD=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":h$(this,this.Y.getCurrentTime());break;case "control_seek":h$(this,c[0]);break;case "control_subtitles_set_track":g$(this,c[0]);break;case "control_set_audio_track":c=c[0],e$(this)&&this.g.Mp(f$(this),c)}};
g.h.tD=function(a,b){if(1081!=U9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":U9(this.g).ib()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.Yg(c[0],c[1]);break;case "control_subtitles_set_track":g$(this,c[0]);break;case "control_set_audio_track":c=c[0],e$(this)&&this.g.Mp(f$(this),c)}}};
g.h.$k=function(a){if(e$(this)){this.g.Ka("remotePlayerChange",this.Oi,this);var b=Math.round(a.volume);a=!!a.muted;var c=U9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Oi,this)}};
g.h.zv=function(){g.Sb(this.o)||Xta(this,this.o);this.A=!1};
g.h.Mv=function(a,b){i$(this);2==b&&this.Sw()};
g.h.Oi=function(){if(e$(this)){c$(this);var a=U9(this.g);switch(a.g){case 1081:d$(this,new g.sl(8));break;case 1:Yta(this);d$(this,new g.sl(8));break;case 1083:case 3:d$(this,new g.sl(9));break;case 0:d$(this,new g.sl(2));this.F.stop();b$(this,this.Y.getVideoData().lengthSeconds);break;case 1082:d$(this,new g.sl(4));break;case 2:d$(this,new g.sl(4));b$(this,g.Dy(a));break;case -1:d$(this,new g.sl(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.N("YTP_MDX_PLAYER_ERROR")},d$(this,new g.sl(128,
a))}var a=U9(this.g).o,b=this.o;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.o=a,Xta(this,a));a=U9(this.g);-1==a.volume||Math.round(this.Y.getVolume())==a.volume&&this.Y.Dd()==a.muted||this.G.isActive()||this.gx()}else Wta(this)};
g.h.Jv=function(){this.Y.Ra("mdxpreviousnextchange")};
g.h.Pi=function(){e$(this)||Wta(this)};
g.h.gs=function(){this.g.Ts()};
g.h.gv=function(a){a&&(a=g.Oi("/watch_queue_ajax",{method:"GET",Ec:{action_get_watch_queue_item:1,video_id:a},Cb:(0,g.z)(this.gJ,this)}))&&(this.J=(0,g.z)(a.abort,a))};
g.h.gJ=function(a,b){var c=new g.Ks({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Y.Ra("mdxautoplayupnext",c)};
g.h.Cv=function(a){(0,window.isNaN)(a)||this.Y.Ra("mdxnowautoplaying",a)};
g.h.fv=function(){this.Y.Ra("mdxautoplaycanceled")};
g.h.mN=function(a,b){-1==U9(this.g).g?h$(this,a):b&&this.g.zx(a)};
g.h.gx=function(){if(e$(this)){var a=U9(this.g);this.Y.removeEventListener("onVolumeChange",this.$k,this);a.muted?this.Y.mute():this.Y.Vf();this.Y.setVolume(a.volume);this.Y.addEventListener("onVolumeChange",this.$k,this)}};
g.h.Sw=function(){i$(this);c$(this);var a=this.g.B.getReconnectTimeout();2!=this.g.g||(0,window.isNaN)(a)||(this.C=g.Zg((0,g.z)(this.Sw,this),1E3))};
g.B(m$,g.Ut);g.h=m$.prototype;g.h.create=function(){aua("embedded"==g.U(this.g).g);this.D.push(g.Gi("yt-remote-before-disconnect",this.cG,this));this.D.push(g.Gi("yt-remote-connection-change",this.qI,this));this.D.push(g.Gi("yt-remote-receiver-availability-change",this.Kv,this));this.D.push(g.Gi("yt-remote-auto-connect",this.oI,this));this.D.push(g.Gi("yt-remote-receiver-resumed",this.nI,this));this.Kv()};
g.h.load=function(){this.g.bn();m$.M.load.call(this);this.C=new a$(this,this.g,this.o);var a;a=(a=zta())?a.currentTime:0;var b=Q9()?new T9(x9(),void 0):null;0==a&&b&&(a=g.Dy(U9(b)));0!=a&&(this.H=a||0,this.g.Ra("progresssync",a,void 0));Zta(this,this.F,this.F);g.V1(this.g.app,6)};
g.h.unload=function(){this.g.Ra("mdxautoplaycanceled");this.B=this.A;g.Eb(this.C,this.o);this.o=this.C=null;m$.M.unload.call(this);g.V1(this.g.app,5)};
g.h.R=function(){g.Hi(this.D);m$.M.R.call(this)};
g.h.qj=function(a,b){this.loaded&&this.C.zy.apply(this.C,arguments)};
g.h.WC=function(){return this.loaded?this.C.suggestion:null};
g.h.qy=function(){return this.o?U9(this.o).L:!1};
g.h.hasNext=function(){return this.o?U9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.PM=function(){var a=U9(this.o),b=this.g.getVideoData(),c=g.gm(this.g),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.E)()-a.A)/1E3:a.B;var l=1>=pta(a)-this.getCurrentTime(),m=a.J,n=pta(a),a=0<a.C?a.C+((0,g.E)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.prevVideo=function(){this.o&&this.o.prevVideo()};
g.h.cG=function(a){1==a&&(this.J=this.o?U9(this.o):null)};
g.h.qI=function(){var a=Q9()?new T9(x9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Db(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.Hc(g.Dy(a)));this.g.Ra("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.Kv=function(){this.G=[this.A].concat($ta());var a=j$()||this.A;n$(this,a,!this.loaded);this.g.ya("onMdxReceiversChange")};
g.h.oI=function(){var a=j$();n$(this,a)};
g.h.nI=function(){this.B=j$()};
g.h.OM=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?l$():n$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&l$(),!0):!1}};
g.h.QM=function(){V9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Rd=function(){return!1};
window._exportCheck==g.xa&&g.ka("ytmod.player.remote",m$,void 0);})(_yt_player);