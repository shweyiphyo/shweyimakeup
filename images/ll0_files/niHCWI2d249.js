if (self.CavalryLogger) { CavalryLogger.start_js(["iIxmy"]); }

__d("BaseToasterView.react",["CometToasterStateManager","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("CometToasterStateManager").getInstance();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={visibleToasts:[]},b)||babelHelpers.assertThisInitialized(c)}b.getDerivedStateFromProps=function(a,b){b=b!=null?b.visibleToasts.slice(0,a.maxVisible):[];var c=0,d=a.filterToasts,e=a.toasterState,f={},g=d!=null?Object.keys(e).filter(function(a){var b,c=e[a];f[a]=c;var g=c==null?void 0:c.shown;b=c==null?void 0:(b=c.value)==null?void 0:(b=b.type)==null?void 0:b.name;if(c==null||b==null)return!0;if(d.has(b)&&!g){h.expire(a);return!1}}):Object.keys(e),i=b.reduce(function(a,b){b!=null&&a.add(b.id);return a},new Set()),j=0;while(c<a.maxVisible){var k=b[c],l=Object.keys(f).length>0?f:a.toasterState;if(k!=null){l=Object.prototype.hasOwnProperty.call(l,k.id);if(l){l=e[k.id];b[c]={expired:l.expired,id:l.id,toast:l.value};c++;continue}else b[c]=null}k=null;while(k==null&&j<g.length){l=g[j++];var m=i.has(l);m||(k=a.toasterState[l])}k!=null&&(b[c]={expired:k.expired,id:k.id,toast:k.value});c++}return{visibleToasts:b}};var c=b.prototype;c.render=function(){var a=this;return g.jsx("ul",{className:this.props.className,children:this.state.visibleToasts.map(function(b,c){return b!=null?a.props.children(b.toast,b.id,b.expired,c):null})})};return b}(g.PureComponent);e.exports=a;a.defaultProps={maxVisible:1}}),null);
__d("CometToastAnimationInternal.react",["React","stylex","useFadeEffect","useMergeRefs","useToasterStateManager","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=100,j={mount:{opacity:"pedkr2u6",transform:"g3zh7qmp",transitionDuration:"pc15xi3s",transitionTimingFunction:"ilcmz9jb"},root:{opacity:"b5wmifdl",transform:"f2tghaqp",transitionDuration:"s1992sns",transitionProperty:"r5qslco7",transitionTimingFunction:"nf1dmkjp"}};function a(a){var c=a.children,d=a.expired;d=d===void 0?!1:d;var e=a.id,f=a.position;a=a.xstyle;var k=b("useToasterStateManager")(),l=h.Children.only(c);c=h.useCallback(function(){k.resetTimer(e)},[e,k]);var m=h.useCallback(function(){k.stopTimer(e)},[e,k]),n=h.useCallback(function(){k.shown(e)},[e,k]),o=h.useCallback(function(){k.hidden(e)},[e,k]),p=h.useCallback(function(a){l.props.onActionPress!=null&&l.props.onActionPress(a),a.defaultPrevented||k.expire(e)},[l.props,e,k]);o=b("useVisibilityObserver")({onHidden:o,onVisible:n,options:{activityMonitorOverride:null}});n=b("useFadeEffect")(!d);d=n[0];var q=n[1];n=n[2];n=b("useMergeRefs")(n,o);return d?h.jsx("li",{className:(g||(g=b("stylex")))(j.root,q&&j.mount,a),onMouseEnter:m,onMouseLeave:c,ref:n,style:{bottom:i*f},children:h.cloneElement(l,{onActionPress:p})}):null}}),null);
__d("CometToasterView_DO_NOT_USE.react",["BasePortal.react","BaseToasterView.react","CometContextualLayerAnchorRoot.react","CometToastAnimationInternal.react","React","gkx","stylex","useToasterStateManager"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={root:{bottom:"lfi1tu6t",listStyle:"p7hjln8o",position:"poy2od1o",start:"re5koujm",zIndex:"kavbgo14"},rootBlue:{zIndex:"guygq49l"},rootWorkplaceLegacy:{zIndex:"lidd1b6n"},toastContainer:{display:"q9uorilb",position:"pmk7jnqg",start:"j9ispegn"}};function a(a){var c=a.filterToasts;a=a.maxVisible;a=a===void 0?1:a;var d=b("useToasterStateManager")(),e=h.useState(function(){return d.getEmptyState()}),f=e[0],j=e[1];h.useEffect(function(){var a=d.registerView(j,0);return function(){a.remove()}},[d]);return h.jsx(b("BasePortal.react"),{target:document.body,children:h.jsx(b("BaseToasterView.react"),{className:(g||(g=b("stylex")))([i.root,b("gkx")("708253")?null:b("gkx")("1341692")?i.rootWorkplaceLegacy:i.rootBlue]),filterToasts:c,maxVisible:a,toasterState:f,children:function(a,c,d,e){return h.jsx(b("CometContextualLayerAnchorRoot.react"),{children:h.jsx(b("CometToastAnimationInternal.react"),{expired:d,id:c,position:e,xstyle:i.toastContainer,children:a})},c)}})})}}),null);
__d("isAdsExcelAddinURI",[],(function(a,b,c,d,e,f){e.exports=a;var g=new RegExp("(^|\\.)fbaddins\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}}),null);
__d("isValidAsyncSignalURI",[],(function(a,b,c,d,e,f){e.exports=a;var g=new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.includes(a.getProtocol())&&g.test(a.getDomain())}}),null);
__d("AsyncSignal",["Promise","ErrorGuard","QueryString","Run","TimeSlice","TrackingConfig","URI","ZeroRewrites","getAsyncParams","isAdsExcelAddinURI","isFacebookURI","isMessengerDotComURI","isValidAsyncSignalURI","isWorkplaceDotComURI","memoize","promiseDone"],(function(a,b,c,d,e,f){var g,h,i;function a(a,c){this.data=c||{},this.uri=a.toString(),b("TrackingConfig").domain&&this.uri.charAt(0)=="/"&&(this.uri=b("TrackingConfig").domain+this.uri)}a.prototype.setHandler=function(a){this.handler=a;return this};a.prototype.setTimeout=function(a){this.timeout=a;return this};a.prototype.send=function(){b("TimeSlice").guard(this._send.bind(this),"AsyncSignal send",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype._send=function(){var a=this.handler,c=this.data;c.asyncSignal=(Math.random()*1e4|0)+1;var d=b("ZeroRewrites").rewriteURI(new(g||(g=b("URI")))(this.uri));d=b("isFacebookURI")(d)||b("isMessengerDotComURI")(d)||b("isAdsExcelAddinURI")(d)||b("isWorkplaceDotComURI")(d)||b("isValidAsyncSignalURI")(d);if(d)Object.assign(c,b("getAsyncParams")("POST"));else throw new Error("'"+this.uri+"' is an external URL, you should not send async signals to offsite links.");var e=b("QueryString").appendToUrl(this.uri,c);i||(i=new(b("Promise"))(function(a){b("Run").onAfterLoad(a)}));d=i.then(function(){return new(b("Promise"))(function(a,b){var c=new Image();c.onload=a;c.onerror=c.onabort=b;c.src=e})});if(a){var f=!1,j=b("memoize")(function(){(h||(h=b("ErrorGuard"))).applyWithGuard(a,null,[f])});b("promiseDone")(d.then(function(){f=!0,j()},j));this.timeout&&setTimeout(j,this.timeout)}return this};e.exports=a}),null);
__d("AsyncTypedRequest",["AsyncRequest"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;b.setReplaceTransportMarkers();return b}var c=b.prototype;c.promisePayload=function(b){return a.prototype.promisePayload.call(this,b)};c.setPayloadHandler=function(b){a.prototype.setPayloadHandler.call(this,b);return this};return b}(b("AsyncRequest"));e.exports=a}),null);
__d("StringTransformations",[],(function(a,b,c,d,e,f){"use strict";a={unicodeEscape:function(a){return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(a){a=a.charCodeAt(0).toString(16);return"\\u"+("0000"+a.toUpperCase()).slice(-4)})},unicodeUnescape:function(a){return a.replace(/(\\u[0-9A-Fa-f]{4})/g,function(a){return String.fromCharCode(parseInt(a.slice(2),16))})}};e.exports=a}),null);
__d("Chromedome",["fbt"],(function(a,b,c,d,e,f,g){f.start=a;function a(a){if(top!==window||document.domain==null||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;a=g._("\u101b\u1015\u103a\u1015\u102b\u104b");var b=g._("\u104e\u1004\u103a\u1038\u101e\u100a\u103a \u1006\u1031\u102c\u1037\u1016\u103a\u101d\u1032\u101b\u1031\u1038\u101e\u102c\u1038\u101e\u1030\u1019\u103b\u102c\u1038\u1021\u1010\u103d\u1000\u103a \u101b\u100a\u103a\u101b\u103d\u101a\u103a\u1011\u102c\u1038\u101e\u1031\u102c \u1018\u101b\u1031\u102c\u1004\u103a\u1007\u102c\u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1019\u103e\u102f\u1016\u103c\u1005\u103a\u101e\u100a\u103a\u104b \u1010\u1005\u103a\u1005\u102f\u1036\u1010\u1005\u103a\u1026\u1038\u1000 \u101e\u1004\u1037\u103a\u1021\u102c\u1038 Facebook \u101c\u102f\u1015\u103a\u1006\u1031\u102c\u1004\u103a\u1019\u103e\u102f\u1010\u1005\u103a\u1001\u102f\u1000\u102d\u102f \u1021\u101e\u102f\u1036\u1038\u1015\u103c\u102f\u101b\u1014\u103a\u1021\u1010\u103d\u1000\u103a \u1024\u1014\u1031\u101b\u102c\u1010\u103d\u1004\u103a \u1010\u1005\u103a\u1001\u102f\u1001\u102f\u1000\u102d\u102f \u1019\u102d\u1010\u1039\u1010\u1030\u1000\u1030\u1038\u1011\u100a\u1037\u103a\u101b\u1014\u103a \u1001\u102d\u102f\u1004\u103a\u1038\u1005\u1031\u1001\u1032\u1037\u1015\u102b\u1000 \u101e\u102d\u102f\u1037\u1019\u101f\u102f\u1010\u103a \u1010\u1005\u103a\u1005\u102f\u1036\u1010\u1005\u103a\u1026\u1038\u104f\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u1000\u102d\u102f \"\u1001\u102d\u102f\u1038\u101a\u1030\"\u1001\u1032\u1037\u1015\u102b\u1000 \u104e\u1004\u103a\u1038\u1019\u103e\u102c\u1021\u101c\u102d\u1019\u103a\u1021\u100a\u102c\u1019\u1031\u1038\u101c\u103a\u1016\u103c\u1005\u103a\u104d \u101e\u1004\u103a\u104f Facebook \u1021\u1000\u1031\u102c\u1004\u1037\u103a\u1000\u102d\u102f \u104e\u1004\u103a\u1038\u1010\u102d\u102f\u1037\u101d\u1004\u103a\u101b\u1031\u102c\u1000\u103a\u101e\u102f\u1036\u1038\u1014\u102d\u102f\u1004\u103a\u1001\u103d\u1004\u1037\u103a \u101b\u101b\u103e\u102d\u101e\u103d\u102c\u1038\u1015\u102b\u101c\u102d\u1019\u1037\u103a\u1019\u100a\u103a\u104b"),c=g._("\u1014\u1031\u102c\u1000\u103a\u1011\u1015\u103a\u1021\u1001\u103b\u1000\u103a\u1021\u101c\u1000\u103a\u1021\u1010\u103d\u1000\u103a {url} \u1000\u102d\u102f\u1000\u103c\u100a\u1037\u103a\u1015\u102b\u104b",[g._param("url","https://www.facebook.com/selfxss")]);if(window.chrome||window.safari){var d="font-family:helvetica; font-size:20px; ";[[a,d+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[b,d],[c,d],["",""]].map(function(a){window.setTimeout(console.log.bind(console,"\n%c"+a[0].toString(),a[1]))})}else{a=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];d=(""+b.toString()).match(/.{35}.+?\s+|.+$/g);if(d!=null){b=Math.floor(Math.max(0,(a.length-d.length)/2));for(var e=0;e<a.length||e<d.length;e++){var f=a[e];a[e]=f+new Array(45-f.length).join(" ")+(d[e-b]||"")}}console.log("\n\n\n"+a.join("\n")+"\n\n"+c.toString()+"\n");return}}}),null);
__d("WebStorageMonster",["AsyncRequest","CacheStorage","Event","NetworkStatus","StringTransformations","UserActivity","WebStorage","WebStorageMonsterLoggingURI","ifRequired","isEmpty","killswitch","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";var g,h,i=1e4,j=5,k=!1;function l(a){var c={};for(var d in a){var e=a.getItem(d),f=b("StringTransformations").unicodeEscape(d);typeof e==="string"&&(c[f]=e.length)}return c}function m(a){var c=(g||(g=b("WebStorage"))).getLocalStorage();if(!c||!a.keys)return;p._getLocalStorageKeys().forEach(function(b){a.keys.includes(b)&&c.removeItem(b)})}function n(a){var c=(g||(g=b("WebStorage"))).getLocalStorage();c&&p._getLocalStorageKeys().forEach(function(b){a.some(function(a){return new RegExp(a).test(b)})||c.removeItem(b)})}function o(a,c){a===void 0&&(a=!1);c===void 0&&(c=i);if(b("UserActivity").isActive(c)){var d=Math.max(i,Math.floor(c/j));b("setTimeoutAcrossTransitions")(function(){o(a,d)},d)}else{p.cleanNow(a);var e=!b("killswitch")("WEB_STORAGE_MONSTER_DONT_RESCHEDULE_ON_RUN");if(e){var f=c*j;b("setTimeoutAcrossTransitions")(function(){o(a,f)},f)}}}var p={registerLogoutForm:function(a,c){b("Event").listen(a,"submit",function(a){p.cleanOnLogout(c)})},schedule:function(a){a===void 0&&(a=!1);if(k)return;k=!0;o(a)},cleanNow:function(a){a===void 0&&(a=!1);var c=Date.now(),d={},e=(g||(g=b("WebStorage"))).getLocalStorage();e&&(d.local_storage=l(e));e=g.getSessionStorage();e&&(d.session_storage=l(e));e=!(h||(h=b("isEmpty")))(d);var f=Date.now();d.logtime=f-c;if(e){var i,j=b("WebStorageMonsterLoggingURI").uri;if(j===null)return null;var k=function(){new(b("AsyncRequest"))(j).setData(d).setHandler(function(c){c=c.getPayload();c.keys&&(c.keys=c.keys.map(b("StringTransformations").unicodeUnescape));a||m(c);b("NetworkStatus").reportSuccess()}).setErrorHandler(function(){b("NetworkStatus").reportError()}).setOption("retries",2).send()};if(b("NetworkStatus").isOnline())k();else{f=function(a){a=a.online;a&&(k(),i.remove())};i=b("NetworkStatus").onChange(f)}}},cleanOnLogout:function(a){b("CacheStorage").disablePersistentWrites();b("ifRequired")("AsyncStorage",function(a){a.disablePersistentWrites()});a?n(a):n([]);a=(g||(g=b("WebStorage"))).getSessionStorage();a&&a.clear();b("ifRequired")("AsyncStorage",function(a){a.clear(function(){})})},_getLocalStorageKeys:function(){var a=(g||(g=b("WebStorage"))).getLocalStorage();return a?Object.keys(a):[]}};a=p;e.exports=a}),null);
__d("BootloaderEventsPerf",["invariant","Bootloader","BootloaderEvents","objectEntries","objectValues"],(function(a,b,c,d,e,f,g){f.computeHRData=a;f.computeBLData=c;f.flattenData=d;var h={count:0,downloaded:0,duration:0};function i(a,b,c){return Math.max(0,((c=c)!=null?c:0)-Math.max(a,(c=b)!=null?c:0))}function j(){return{blocking:babelHelpers["extends"]({},h),nonblocking:babelHelpers["extends"]({},h),"default":babelHelpers["extends"]({},h)}}function k(a,b){a.count++,b&&(a.downloaded++,a.duration=Math.max(a.duration,b))}function l(a,c,d,e){var f=b("Bootloader").getResourceState(c);k(a,i(d,f.loadStart,f.loadEnd));f.loadError!=null&&e.add(c)}function m(a,c,d,e){var f=j();for(var a=b("objectEntries")(a),h=Array.isArray(a),i=0,a=h?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(h){if(i>=a.length)break;k=a[i++]}else{i=a.next();if(i.done)break;k=i.value}k=k;var m=k[0];k=k[1];for(var k=k,n=Array.isArray(k),o=0,k=n?k:k[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var p;if(n){if(o>=k.length)break;p=k[o++]}else{o=k.next();if(o.done)break;p=o.value}p=p;var q=p[0];p=p[1].type;var r=void 0;switch(p){case"async":r=d;break;case"js":case"css":r=f;break;default:p,g(0,3721)}l(r[m],q,c,e)}}return f}function a(a){var b,c=a.startTime,d=new Set();return{source:a.source,sourceDetail:a.sourceDetail,timeslice_context:(b=a.timesliceContext)==null?void 0:b.name,start_time:c,err_count:d.size,resources:{untiered:m(a.rsrcs,c,j(),d)},durations:{jsmods_wait:a.jsmodsStart-c,jsmods:a.jsmodsEnd-a.jsmodsStart,jsmods_done_wait:a.jsmodsEnd-c,download_done_wait:a.logTime-c}}}function c(a){var c=a.startTime,d=0,e=0,f=0,g=0;for(var h=a.components,l=Array.isArray(h),n=0,h=l?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(l){if(n>=h.length)break;o=h[n++]}else{n=h.next();if(n.done)break;o=n.value}o=o;o=b("Bootloader").getComponentTiming(o);d=Math.max(d,o.tierTwoEnd-o.tierTwoStart);e=Math.max(e,o.tierTwoEnd-c);f=Math.max(f,o.tierThreeEnd-o.tierThreeStart);g=Math.max(g,o.tierThreeEnd-c)}o=new Set();n=j();l=m(a.tierOne,c,n,o);h=m(a.tierTwo,c,n,o);var p=m(a.tierThree,c,n,o),q=n.blocking.downloaded!=0,r=j(),s=b("BootloaderEvents").newResourceMapSet(),t=new Set(),u=[a.tierOne,a.tierTwo,a.tierThree];for(var v=0;v<u.length;v++){var w=u[v];for(var w=b("objectValues")(w),x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var z;if(x){if(y>=w.length)break;z=w[y++]}else{y=w.next();if(y.done)break;z=y.value}z=z;for(var z=z.keys(),A=Array.isArray(z),B=0,z=A?z:z[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var C;if(A){if(B>=z.length)break;C=z[B++]}else{B=z.next();if(B.done)break;C=B.value}C=C;t.add(C)}}}C=0;B=0;A=0;for(var z=a.beRequests.values(),y=Array.isArray(z),x=0,z=y?z:z[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(y){if(x>=z.length)break;w=z[x++]}else{x=z.next();if(x.done)break;w=x.value}u=w;C+=i(c,c,u.requestStart);B+=u.serverGenTime;A+=u.jsmodsEnd-u.jsmodsStart;k(r[q?"blocking":"nonblocking"],u.responseStart-u.requestStart);for(var v=b("objectEntries")(u.rsrcs),w=Array.isArray(v),u=0,v=w?v:v[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var D;if(w){if(u>=v.length)break;D=v[u++]}else{u=v.next();if(u.done)break;D=u.value}D=D;var E=D[0];D=D[1];for(var D=D,F=Array.isArray(D),G=0,D=F?D:D[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var H;if(F){if(G>=D.length)break;H=D[G++]}else{G=D.next();if(G.done)break;H=G.value}H=H;var I=H[0];H=H[1];t.has(I)||s[E].set(I,H)}}}I=m(s,c,n,o);return{ref:a.ref,components:a.components,timeslice_context:(H=a.timesliceContext)==null?void 0:H.name,start_time:c,err_count:o.size,resources:{t1:l,t2:h,t3:p,be:r,unpredicted:I,async:n},durations:{be_start_wait:C,be_server_gen:B,be_jsmods:A,callback_wait:a.callbackStart-c,callback:a.callbackEnd-a.callbackStart,bootload_done_wait:a.callbackEnd-c,rdfd_requirelazy:d,rdfd_done_wait:e,rd_requirelazy:f,rd_done_wait:g}}}function d(a){a.start_time;var c=a.resources,d=a.durations;a=babelHelpers.objectWithoutPropertiesLoose(a,["start_time","resources","durations"]);for(var c=b("objectEntries")(c),e=Array.isArray(c),f=0,c=e?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=c.length)break;g=c[f++]}else{f=c.next();if(f.done)break;g=f.value}g=g;var h=g[0];g=g[1];for(var g=b("objectEntries")(g),i=Array.isArray(g),j=0,g=i?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(i){if(j>=g.length)break;k=g[j++]}else{j=g.next();if(j.done)break;k=j.value}k=k;var l=k[0];k=k[1];for(var k=b("objectEntries")(k),m=Array.isArray(k),n=0,k=m?k:k[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var o;if(m){if(n>=k.length)break;o=k[n++]}else{n=k.next();if(n.done)break;o=n.value}o=o;var p=o[0];o=o[1];a[h+"_"+l+"_resources_"+p]=Math.round(Number(o))}}}for(var p=b("objectEntries")(d),o=Array.isArray(p),n=0,p=o?p:p[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(o){if(n>=p.length)break;m=p[n++]}else{n=p.next();if(n.done)break;m=n.value}k=m;l=k[0];j=k[1];a[l+"_duration"]=Math.round(Number(j))}return a}}),null);
__d("JavascriptWebErrorFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1828905");c=b("FalcoLoggerInternal").create("javascript_web_error",a);e.exports=c}),null);
__d("ErrorTransport",["Banzai","JavascriptWebErrorFalcoEvent","gkx"],(function(a,b,c,d,e,f){"use strict";f.log=a;function a(a){b("gkx")("1830542")?b("JavascriptWebErrorFalcoEvent").log(function(){return a}):b("Banzai").post("js_error_logging",a)}}),null);
__d("CometTopnavItemClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743396");c=b("FalcoLoggerInternal").create("comet_topnav_item_click",a);e.exports=c}),null);
__d("CometTopnavItemImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743397");c=b("FalcoLoggerInternal").create("comet_topnav_item_impression",a);e.exports=c}),null);
__d("ErrorDynamicData",[],(function(a,b,c,d,e,f){"use strict";a={access_token:null};b=a;e.exports=b}),null);
__d("ErrorFilter",["performanceNow"],(function(a,b,c,d,e,f){"use strict";f.shouldLog=a;var g,h=6,i=6e4,j=10*i,k=new Map(),l=0;function m(){var a=(g||(g=b("performanceNow")))();if(a>l+i){var c=a-j;for(var d=k,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(e){if(f>=d.length)break;h=d[f++]}else{f=d.next();if(f.done)break;h=f.value}h=h;var m=h[0];h=h[1];h.lastAccessed<c&&k["delete"](m)}l=a}}function n(a){m();var c=(g||(g=b("performanceNow")))(),d=k.get(a);if(d==null){k.set(a,{dropped:0,logged:[c],lastAccessed:c});return 1}a=d.dropped;var e=d.logged;d.lastAccessed=c;while(e[0]<c-i)e.shift();if(e.length<h){d.dropped=0;e.push(c);return a+1}else{d.dropped++;return null}}function a(a){return n(a.hash)}}),null);
__d("ErrorPoster",["ErrorDynamicData","ErrorFilter","ErrorTransport"],(function(a,b,c,d,e,f){"use strict";f.createErrorPayload=o;f.postError=a;var g=1024,h=[],i=0;function j(a){return String(a)}function k(a){return a==null?null:String(a)}function l(a,b){var c={};b&&b.forEach(function(a){c[a]=!0});Object.keys(a).forEach(function(b){a[b]?c[b]=!0:c[b]&&delete c[b]});return Object.keys(c)}function m(a){return((a=a)!=null?a:[]).map(function(a){return{column:k(a.column),identifier:a.identifier,line:k(a.line),script:a.script}})}function n(a){a=String(a);return a.length>g?a.substring(0,g-3)+"...":a}function o(a,c){var d;d={appId:k(c.appId),cavalry_lid:c.cavalry_lid,access_token:b("ErrorDynamicData").access_token,ancestor_hash:a.hash,cerror:c.cerror,clientTime:j(a.clientTime),column:a.column,componentStackFrames:m(a.componentStackFrames),events:a.events,extra:l(a.extra,c.extra),forcedKey:a.forcedKey,guardList:a.guardList,line:a.line,loggingFramework:c.loggingFramework,messageFormat:n(a.messageFormat),messageParams:a.messageParams.map(n),name:a.name,sample_weight:k(c.sample_weight),script:a.script,site_category:c.site_category,stackFrames:m(a.stackFrames),type:a.type,page_time:k(a.page_time),project:a.project,push_phase:c.push_phase,report_source:c.report_source,report_source_ref:c.report_source_ref,script_path:c.script_path,server_revision:k(c.server_revision),spin:k(c.spin),svn_rev:String(c.client_revision),additional_client_revisions:Array.from((d=c.additional_client_revisions)!=null?d:[]).map(j),taalOpcodes:a.taalOpcodes==null?null:a.taalOpcodes.map(function(a){return a}),web_session_id:c.web_session_id,version:"3",xFBDebug:a.xFBDebug};c=a.blameModule;var e=a.deferredSource;c!=null&&(d.blameModule=String(c));e&&e.stackFrames&&(d.deferredSource={stackFrames:m(e.stackFrames)});a.metadata&&(d.metadata=a.metadata);a.loadingUrls&&(d.loadingUrls=a.loadingUrls);a.serverHash!=null&&(d.serverHash=a.serverHash);a.windowLocationURL!=null&&(d.windowLocationURL=a.windowLocationURL);a.loggingSource!=null&&(d.loggingSource=a.loggingSource);return d}function a(a,c){i++;var d=b("ErrorFilter").shouldLog(a);if(d==null)return!1;c=o(a,c);Object.assign(c,{ancestors:h.slice(),clientWeight:j(d),page_position:j(i)});h.length<15&&h.push(a.hash);b("ErrorTransport").log(c);return!0}}),null);