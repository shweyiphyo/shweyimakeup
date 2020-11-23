if (self.CavalryLogger) { CavalryLogger.start_js(["9yROE"]); }

__d("CometGamingVideoThumbnail_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"gv_video_thumbnail_image_height"},{kind:"RootArgument",name:"gv_video_thumbnail_image_width"},{defaultValue:!1,kind:"LocalArgument",name:"showProgressBar"}],kind:"Fragment",metadata:null,name:"CometGamingVideoThumbnail_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"gv_video_thumbnail_image_height"},{kind:"Variable",name:"width",variableName:"gv_video_thumbnail_image_width"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnailPreview_video"},{args:null,kind:"FragmentSpread",name:"LiveVideoCometBadge_video"},{args:null,kind:"FragmentSpread",name:"VideoBlurBackgroundContainer_video"},{condition:"showProgressBar",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeProgressPreviewThumbnailOverlay_video"}]}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("LiveVideoCometAlertConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LiveVideoCometAlertConditionalLoader_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_video_cue_system_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"LiveVideoCometAlertConditionalLoader_video",fragmentName:"LiveVideoCometAlert_videoCueSystemRenderer",fragmentPropName:"videoCueSystemRenderer",kind:"ModuleImport"}],type:"CometLiveVideoCUESystemRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"caller"},b={defaultValue:null,kind:"LocalArgument",name:"entryPoint"},c={defaultValue:null,kind:"LocalArgument",name:"first"},d={defaultValue:null,kind:"LocalArgument",name:"gv_video_thumbnail_image_height"},e={defaultValue:null,kind:"LocalArgument",name:"gv_video_thumbnail_image_width"},f={defaultValue:null,kind:"LocalArgument",name:"videoID"},g=[{kind:"Variable",name:"id",variableName:"videoID"}],h=[{kind:"Variable",name:"entry_point",variableName:"entryPoint"}],i=[{kind:"Variable",name:"caller",variableName:"caller"},{kind:"Variable",name:"first",variableName:"first"}],j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},l=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},n=[j,m],o={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},w={alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},z={alias:null,args:null,kind:"ScalarField",name:"is_spherical_enabled",storageKey:null},A={alias:null,args:null,concreteType:"MusicVideoMetadata",kind:"LinkedField",name:"pmv_metadata",plural:!1,selections:n,storageKey:null},B={alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},C={alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},D={alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},E={alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null}],storageKey:null},F=[o,{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"representation_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mime_codec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"segment_type",storageKey:null}];F={alias:null,args:null,concreteType:"VideoPrefetchResources",kind:"LinkedField",name:"dash_prefetch_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"audio",plural:!0,selections:F,storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"video",plural:!0,selections:F,storageKey:null}],storageKey:null};var G={alias:null,args:[{kind:"Literal",name:"context",value:"DEFAULT"},{kind:"Literal",name:"supported",value:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"]}],concreteType:null,kind:"LinkedField",name:"comet_video_player_implementations",plural:!0,selections:[j,{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DOzImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerOzImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DShakaImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerShakaImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DProgressiveImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerProgressiveImplementation",abstractKey:null}],storageKey:'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])'},H={alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},I={alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},J={alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},K={alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},L={alias:null,args:null,concreteType:"VideoPlayerShakaLiveP2PInit",kind:"LinkedField",name:"video_player_shaka_live_p2p_init",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}],storageKey:null},M={alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},N={alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},O={alias:null,args:null,concreteType:"SphericalVideoFallbackUrls",kind:"LinkedField",name:"spherical_video_fallback_urls",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sd",storageKey:null}],storageKey:null},P={alias:null,args:null,kind:"ScalarField",name:"is_gaming_video",storageKey:null},Q={alias:null,args:null,kind:"ScalarField",name:"is_latency_menu_enabled",storageKey:null},R={alias:null,args:null,kind:"ScalarField",name:"comet_video_player_static_config",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"comet_video_player_context_sensitive_config",storageKey:null},T={alias:null,args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{documentName:"useVideoPlayerShakaPerformanceLoggerRelay_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerRelay_init",fragmentPropName:"init",kind:"ModuleImport"}],storageKey:null},U={alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},V={alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},W={alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},X={alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},Y={alias:null,args:null,concreteType:"VideoP2PSettings",kind:"LinkedField",name:"p2p_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ticket",storageKey:null},{alias:null,args:null,concreteType:"VideoP2PSettingsConfig",kind:"LinkedField",name:"config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"delay_p2p_until_play",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"disable_hivejava_for_livevc",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VideoHiveInitializationOptions",kind:"LinkedField",name:"hive_initialization_options",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHiveInitializationOptionHiveJava",kind:"LinkedField",name:"hive_java",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"min_version",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hive_tech_order",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"debug_level",storageKey:null}],storageKey:null}],storageKey:null},Z={alias:null,args:null,concreteType:"AudioSettings",kind:"LinkedField",name:"audio_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"video_volume_setting",storageKey:null},m],storageKey:null},aa={alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},m],storageKey:null},ba={alias:null,args:null,concreteType:"VideoBroadcastLowLatencyConfig",kind:"LinkedField",name:"broadcast_low_latency_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ll_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ll_latency_tolerance_ms",storageKey:null}],storageKey:null},ca={alias:null,args:null,kind:"ScalarField",name:"audio_availability",storageKey:null},da={alias:null,args:null,concreteType:"VideoMutedSegment",kind:"LinkedField",name:"muted_segments",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"mute_start_time_in_sec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mute_end_time_in_sec",storageKey:null}],storageKey:null},ea={alias:null,args:null,concreteType:"SphericalVideoRenderer",kind:"LinkedField",name:"spherical_video_renderer",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_spherical_video_renderer",fragmentName:"VideoPlayerSphericalRelay_sphericalVideoRenderer",fragmentPropName:"sphericalVideoRenderer",kind:"ModuleImport"}],storageKey:null},fa={alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_instream_video_ad_breaks_comet",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null},ga={alias:null,args:null,kind:"ScalarField",name:"is_premium_music_video",storageKey:null},ha={kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_latency_setting",storageKey:null}]},$=[m],ia={kind:"InlineFragment",selections:$,type:"Node",abstractKey:"__isNode"};return{fragment:{argumentDefinitions:[a,b,c,d,e,f],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",selections:[{alias:null,args:g,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:"live_video_endscreen_channel",args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoChannelFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"CometGamingVideoThumbnail_video"}],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,b,c,f,d,e],kind:"Operation",name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",selections:[{alias:null,args:g,concreteType:"Video",kind:"LinkedField",name:"video",plural:!1,selections:[{alias:"live_video_endscreen_channel",args:h,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:[j,{alias:null,args:i,concreteType:"VideoChannelFeedConnection",kind:"LinkedField",name:"video_channel_feed",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoChannelFeedEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[j,{kind:"InlineFragment",selections:[k,{alias:null,args:null,kind:"ScalarField",name:"title_with_fallback",storageKey:null},{alias:null,args:[{kind:"Variable",name:"height",variableName:"gv_video_thumbnail_image_height"},{kind:"Variable",name:"width",variableName:"gv_video_thumbnail_image_width"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:l,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"live_viewer_count_read_only",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"video_channel",plural:!1,selections:n,storageKey:null},o,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"smart_preview_video",plural:!1,selections:[m,p,q,r,s,k,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,ga,ha],storageKey:null},m,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,ga,{alias:null,args:null,kind:"ScalarField",name:"breaking_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premiere",storageKey:null},{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:l,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null},m],storageKey:null},ha],type:"Video",abstractKey:null},ia,{kind:"InlineFragment",selections:$,type:"ComposerMediaTemplatePreview",abstractKey:null},{kind:"InlineFragment",selections:$,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:$,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:$,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},ia,{kind:"InlineFragment",selections:$,type:"CommunityChatFeedObject",abstractKey:null},{kind:"InlineFragment",selections:$,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null},m],storageKey:null},m],storageKey:null}]},params:{id:"4125714660778773",metadata:{},name:"VideoPlayerWithLiveVideoEndscreenAndChainingQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoPlayerWithLiveVideoEndscreenAndChaining_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerWithLiveVideoEndscreen_video"}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_tahoe_up_next_overlay_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{documentName:"CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video",fragmentName:"CometTahoeUpNextOverlayAndEndScreenWrapper_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"CometTahoeVODUpNextOverlayRenderer",abstractKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeProgressPreviewThumbnailOverlay_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"has_viewer_watched_show_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_duration_in_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_last_play_position_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometGamingCvcBadge.react",["ix","BaseRow.react","BaseRowItem.react","React","TetraIcon.react","TetraText.react","fbicon","intlSummarizeNumber","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j={iconWithLabel:{marginEnd:"fv0vnmcu"},root:{alignItems:"bp9cbjyn",backgroundColor:"ora8z2hr",borderTop:"gcieejh5",borderEnd:"bn081pho",borderBottom:"humdl8nn",borderStart:"izx4hr6d",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",boxSizing:"rq0escxv",display:"j83agx80",flexDirection:"btwxx1t3",height:"datstx6m",justifyContent:"taijpn5t",marginTop:"rs0gx3tq",marginEnd:"kady6ibp",marginBottom:"dicw6rsg",marginStart:"dwxx2s2f",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"ipjc6fyt",paddingEnd:"p8fzw8mz",paddingBottom:"iuny7tx3",paddingStart:"pcp91wgn",position:"l9j0dhe7",textDecoration:"esuyzwwr"}};function a(a){a=a.initialViewerCount;return i.jsx("div",{className:(h||(h=b("stylex")))(j.root),children:i.jsxs(b("BaseRow.react"),{align:"center",verticalAlign:"center",children:[i.jsx(b("BaseRowItem.react"),{xstyle:j.iconWithLabel,children:i.jsx(b("TetraIcon.react"),{color:"white",icon:b("fbicon")._(g("491228"),20)})}),i.jsx(b("BaseRowItem.react"),{children:i.jsx(b("TetraText.react"),{color:"white",numberOfLines:1,type:"body4",children:b("intlSummarizeNumber")(a)})})]})})}}),null);
__d("CometVideoHomeProgressPreviewBar.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){a=a.percentageFilled;if(a<=0)return null;a=Math.max(5,a);a=Math.min(100,a);return g.jsx("div",{className:"tkr6xdv7 k4urcfbm pmk7jnqg hzruof5a mw227v9j i09qtzwb m8invena",children:g.jsx("div",{className:"mw227v9j is6700om",style:{width:a+"%"}})})}}),null);
__d("CometVideoHomeProgressPreviewThumbnailOverlay.react",["CometRelay","CometVideoHomeProgressPreviewBar.react","React","CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c;a=a.video;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeProgressPreviewThumbnailOverlay_video.graphql"),a);var d=a.viewer_last_play_position_ms,e=a.playable_duration_in_ms;c=(c=a.has_viewer_watched_show_video)!=null?c:!1;if(d==null||e==null||c||a.broadcast_status==="LIVE")return null;c=100*d/e;return h.jsx(b("CometVideoHomeProgressPreviewBar.react"),{percentageFilled:c})}}),null);
__d("CometGamingVideoThumbnail.react",["CometAspectRatioContainer.react","CometGamingCvcBadge.react","CometImage.react","CometPlaceholder.react","CometPressable.react","CometRelay","CometVideoHomeProgressPreviewThumbnailOverlay.react","LiveVideoCometBadge.react","React","VideoBlurBackgroundContainer.react","VideoBroadcastStatus","emptyFunction","getGamingCaller","requireCond","stylex","usePlayerOriginRouteTracePolicy","cr:1291368","cr:1677603","CometGamingVideoThumbnail_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=(c=b("cr:1291368"))!=null?c:b("emptyFunction"),k={centered:{alignItems:"bp9cbjyn",display:"j83agx80",height:"datstx6m",justifyContent:"taijpn5t",position:"l9j0dhe7"},cvc:{display:"j83agx80",height:"rgmg9uty",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"hnlv2pgd",top:"plgsh5y4",zIndex:"tkr6xdv7"},playIcon:{boxSizing:"rq0escxv",left:"pzli0o6b",position:"pmk7jnqg",top:"rk01pc8j",transform:"py2didcb"},root:{borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",width:"k4urcfbm"},thumbnailImg:{height:"datstx6m"}},l=1920/1080,m=g!==void 0?g:g=b("CometGamingVideoThumbnail_video.graphql");function a(a){var c=a.customUrl,d=a.onClick,e=a.playerOrigin,f=a.playerSubOrigin,g=a.routeTarget,n=a.showProgressBar;a=a.video;var o=b("CometRelay").useFragment(m,a);a=o.broadcast_status;var p=o.image,q=o.live_viewer_count_read_only,r=o.title_with_fallback,s=o.video_channel;c=(c=c)!=null?c:o.url;var t=i.useState(!1),u=t[0],v=t[1];t=i.useCallback(function(){v(!0)},[v]);var w=i.useCallback(function(){v(!1)},[v]),x=b("usePlayerOriginRouteTracePolicy")(),y=b("getGamingCaller")(),z=j({extraData:{caller:y,channelID:s==null?void 0:s.id,origin:e,suborigin:f},href:c}),A=a===b("VideoBroadcastStatus").LIVE,B=p==null?void 0:p.uri;return i.jsx(b("CometPressable.react"),{"aria-label":(e=r)!=null?e:void 0,expanding:!0,linkProps:{passthroughProps:{caller:y,channelEntryPoint:"FACEBOOK_GAMING",channelID:s==null?void 0:s.id,initialTracePolicy:x,playerSubOrigin:f},preventLocalNavigation:z!=null,routeTarget:g,url:c},onHoverIn:t,onHoverOut:w,onPress:function(a){d==null?void 0:d(),z==null?void 0:z(a)},xstyle:k.root,children:function(a){var c;a=a.hovered;c=i.jsxs(b("CometAspectRatioContainer.react"),{aspectRatio:l,children:[A&&i.jsxs("div",{className:(h||(h=b("stylex")))(k.cvc),children:[i.jsx(b("LiveVideoCometBadge.react"),{pulse:!0,size:"small",video:o}),i.jsx(b("CometGamingCvcBadge.react"),{initialViewerCount:(c=q)!=null?c:0})]}),n===!0&&i.jsx(b("CometVideoHomeProgressPreviewThumbnailOverlay.react"),{video:o}),B!=null&&i.jsx("div",{className:(h||(h=b("stylex")))(k.centered),children:i.jsx(b("CometImage.react"),{alt:(c=r)!=null?c:"",src:B,xstyle:k.thumbnailImg})}),i.jsx(b("CometPlaceholder.react"),{fallback:null,children:b("cr:1677603")!=null&&i.jsx(b("cr:1677603"),{hidePreview:w,isPreviewVisible:u,video:o})}),a&&i.jsx(b("CometImage.react"),{src:"/images/video/play_48dp.png",xstyle:k.playIcon})]});return i.jsx(b("VideoBlurBackgroundContainer.react"),{video:o,children:c})}})}}),null);
__d("LiveVideoCometAlertConditionalLoader.react",["CometPlaceholder.react","CometRelay","React","LiveVideoCometAlertConditionalLoader_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.video$key;a=a.videoID;c=b("CometRelay").useFragment(g!==void 0?g:g=b("LiveVideoCometAlertConditionalLoader_video.graphql"),c);return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:c==null?void 0:c.comet_video_cue_system_renderer,props:{videoID:a}})})}}),null);
__d("VideoPlayerWithLiveVideoEndscreenAndChaining.react",["BaseGlimmer.react","CometGamingVideoThumbnail.react","CometPlaceholder.react","CometRelay","CometRow.react","CometRowItem.react","React","VideoPlayerHooks","VideoPlayerWithLiveVideoEndscreen.react","gkx","recoverableViolation","stylex","VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql","VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j=g!==void 0?g:g=b("VideoPlayerWithLiveVideoEndscreenAndChainingQuery.graphql");function a(a){var c=a.routeTarget;a=a.video;var d=b("VideoPlayerHooks").useEnded(),e=b("VideoPlayerHooks").useIsLive();a=b("CometRelay").useFragment(h!==void 0?h:h=b("VideoPlayerWithLiveVideoEndscreenAndChaining_video.graphql"),a);var f=a==null?void 0:a.id;if(!d||!e||f==null)return null;f===""&&b("recoverableViolation")("Live Video Endscreen with Chaining has an empty string videoID","comet_live_video");return b("gkx")("1224637")?i.jsx(b("VideoPlayerWithLiveVideoEndscreen.react"),{video:a}):i.jsx(b("VideoPlayerWithLiveVideoEndscreen.react"),{video:a,children:i.jsx(b("CometPlaceholder.react"),{fallback:i.jsx(l,{}),children:i.jsx(k,{routeTarget:c,videoID:f})})})}function k(a){var c=b("CometRelay").useLazyLoadQuery(j,{caller:"LIVE_CHAINING",entryPoint:"LIVE_VIDEO_ENDSCREEN",first:3,videoID:a.videoID}),d=c==null?void 0:c.video;if(d==null)return null;c=(c==null?void 0:(d=c.video)==null?void 0:(c=d.live_video_endscreen_channel)==null?void 0:(d=c.video_channel_feed)==null?void 0:d.edges)||[];d=c.map(function(c,d){c=c==null?void 0:(c=c.node)==null?void 0:(c=c.attachments)==null?void 0:c[0].media;return c==null?null:i.jsx(b("CometRowItem.react"),{children:i.jsx(b("CometGamingVideoThumbnail.react"),{playerOrigin:"live_video_end_screen",playerSubOrigin:"tahoe",routeTarget:a.routeTarget,video:c},d)},d)}).filter(Boolean);return i.jsx(b("CometRow.react"),{align:"center",columns:3,paddingTop:16,children:d})}function l(){return i.jsxs(b("CometRow.react"),{align:"center",columns:3,paddingTop:16,children:[i.jsx(b("CometRowItem.react"),{children:i.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},0),i.jsx(b("CometRowItem.react"),{children:i.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},1),i.jsx(b("CometRowItem.react"),{children:i.jsx(b("BaseGlimmer.react"),{className:"oghtd16d kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})},2)]})}}),null);
__d("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader.react",["CometPlaceholder.react","CometRelay","React","CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=a.initialTracePolicy,d=a.logTahoeEvent,e=a.pressInteraction,f=a.reactionVideoChannelType,i=a.subOrigin,j=a.video$key;a=a.videoID;j=b("CometRelay").useFragment(g!==void 0?g:g=b("CometTahoeUpNextOverlayAndEndScreenWrapperConditionalLoader_video.graphql"),j);return h.jsx(b("CometPlaceholder.react"),{fallback:null,children:h.jsx(b("CometRelay").MatchContainer,{match:j==null?void 0:j.comet_tahoe_up_next_overlay_renderer,props:{initialTracePolicy:c,logTahoeEvent:d,pressInteraction:e,reactionVideoChannelType:f,subOrigin:i,videoID:a}})})}}),null);