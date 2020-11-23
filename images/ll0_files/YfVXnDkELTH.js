if (self.CavalryLogger) { CavalryLogger.start_js(["ayl2P"]); }

__d("CoplayDiscoveryContentContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3392735330762016",metadata:{live:{config_id:"comet_coplay_discovery_rooms_query"}},name:"CoplayDiscoveryContentContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingCoplayRejoinRoomModalContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3545910805429051",metadata:{},name:"CometGamingCoplayRejoinRoomModalContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingGamesRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4177578535602735",metadata:{},name:"CometGamingGamesRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingLeftRailContainerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3729643310402362",metadata:{},name:"CometGamingLeftRailContainerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"2913295132107567",metadata:{},name:"CometGamingVideoRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoRootHeroBannerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3484025138346805",metadata:{},name:"CometGamingVideoRootHeroBannerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubHeaderQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4361814420557009",metadata:{},name:"CometGamingVideoGameHubHeaderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGamingVideoGameHubRootContentQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3708288509261595",metadata:{},name:"CometGamingVideoGameHubRootContentQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("buildCometGamingRoute.entrypoint",["JSResource","createContentAreaCompoundEntryPointBuilder","CometGamingCoplayRejoinRoomModalContainerQuery$Parameters","CometGamingLeftRailContainerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a=b("createContentAreaCompoundEntryPointBuilder")(b("JSResource")("CometGamingRoot.react").__setRef("buildCometGamingRoute.entrypoint"),function(a){return{coplayRejoinRoomModalQueryReference:{parameters:b("CometGamingCoplayRejoinRoomModalContainerQuery$Parameters"),variables:{}},leftRailQueryReference:{parameters:b("CometGamingLeftRailContainerQuery$Parameters"),variables:{}}}});e.exports=a}),null);
__d("CometGamingGamesRoot.entrypoint",["JSResource","WebPixelRatio","qex","buildCometGamingRoute.entrypoint","CoplayDiscoveryContentContainerQuery$Parameters","CometGamingGamesRootQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get(),h=(a=b("qex")._("1671478"))!=null?a:35;c=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingGamesRoot.react").__setRef("CometGamingGamesRoot.entrypoint"),function(a){return{extraProps:{category:a.routeProps.category,cloud_binary_id:a.routeProps.cloud_binary_id,context_source_id:a.routeProps.context_source_id,context_type:a.routeProps.context_type,game_session_id:a.routeProps.game_session_id,gameorlink:a.routeProps.gameorlink,launched_game_id:a.routeProps.launched_game_id,payload:a.routeProps.payload,source:a.routeProps.source},queries:{coplayDiscoveryQuery:{parameters:b("CoplayDiscoveryContentContainerQuery$Parameters"),variables:{}},gamesRootQuery:{parameters:b("CometGamingGamesRootQuery$Parameters"),variables:{app_id:a.routeProps.gameorlink,first:h,game_type:a.routeProps.category,hasAppID:!!a.routeProps.gameorlink,launched_game_id:(a=a.routeProps.launched_game_id)!=null?a:"0",scale:g}}}}});e.exports=c}),null);
__d("CometGamingWebGamesFullPageCompatRoot.entrypoint",["JSResource","buildCometGamingRoute.entrypoint"],(function(a,b,c,d,e,f){"use strict";a=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometFullPageEntryPointCompatRoot.react").__setRef("CometGamingWebGamesFullPageCompatRoot.entrypoint"),function(a){a=a.routeProps.maintainKey;return{extraProps:{routeProps:{maintainKey:a}}}});e.exports=a}),null);
__d("CometGamingVideoRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGamingRoute.entrypoint","qex","CometGamingVideoRootContentQuery$Parameters","CometGamingVideoRootHeroBannerQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get();a=b("qex")._("1815432");var h=a!=null&&a===!0?b("qex")._("1815435"):null,i=a!=null&&a===!0?b("qex")._("1815436"):null,j=a!=null&&a===!0?b("qex")._("1815433"):null,k=a!=null&&a===!0?b("qex")._("1815434"):null;c=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingVideoRoot.react").__setRef("CometGamingVideoRoot.entrypoint"),function(a){a=a.routeParams;return{queries:{contentQueryReference:{parameters:b("CometGamingVideoRootContentQuery$Parameters"),variables:{gv_game_card_height:i,gv_game_card_width:h,gv_video_thumbnail_image_height:k,gv_video_thumbnail_image_width:j,scale:g}},heroBannerQueryReference:{parameters:b("CometGamingVideoRootHeroBannerQuery$Parameters"),variables:{scale:g,videoID:a.video_id}}}}});e.exports=c}),null);
__d("CometGamingVideoGameHubRoot.entrypoint",["JSResource","WebPixelRatio","buildCometGamingRoute.entrypoint","CometGamingVideoGameHubRootContentQuery$Parameters","CometGamingVideoGameHubHeaderQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";var g=b("WebPixelRatio").get();a=b("buildCometGamingRoute.entrypoint")(b("JSResource")("CometGamingVideoGameHubRoot.react").__setRef("CometGamingVideoGameHubRoot.entrypoint"),function(a){return{queries:{contentQueryReference:{parameters:b("CometGamingVideoGameHubRootContentQuery$Parameters"),variables:{game_id:a.routeProps.game_id,scale:g}},headerQueryReference:{parameters:b("CometGamingVideoGameHubHeaderQuery$Parameters"),variables:{params:{game_id:a.routeProps.game_id}}}}}});e.exports=a}),null);