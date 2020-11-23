if (self.CavalryLogger) { CavalryLogger.start_js(["VcjoK"]); }

__d("TetraProfileVideo_profileVideo$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"representation_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mime_codec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"segment_type",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"TetraProfileVideo_profileVideo$normalization",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"original_width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcaster_origin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"broadcast_status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_streaming",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_live_trace_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_looping",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_video_broadcast",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"loop_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_spherical_enabled",storageKey:null},{alias:null,args:null,concreteType:"MusicVideoMetadata",kind:"LinkedField",name:"pmv_metadata",plural:!1,selections:[b,a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"captions_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dash_prefetch_experimental",storageKey:null},{alias:null,args:null,concreteType:"VideoCaptionLocale",kind:"LinkedField",name:"video_available_captions_locales",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"localized_creation_method",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResources",kind:"LinkedField",name:"dash_prefetch_resources",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"audio",plural:!0,selections:c,storageKey:null},{alias:null,args:null,concreteType:"VideoPrefetchResource",kind:"LinkedField",name:"video",plural:!0,selections:c,storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"context",value:"DEFAULT"},{kind:"Literal",name:"supported",value:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"]}],concreteType:null,kind:"LinkedField",name:"comet_video_player_implementations",plural:!0,selections:[b,{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DOzImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerOzImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DShakaImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerShakaImplementation",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"useRelay3DVideoImplementations_video",fragmentName:"useRelay3DProgressiveImplementation_implementation",fragmentPropName:"implementation",kind:"ModuleImport"}],type:"CometVideoPlayerProgressiveImplementation",abstractKey:null}],storageKey:'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])'},{alias:null,args:null,kind:"ScalarField",name:"can_use_oz",storageKey:null},{alias:"playable_url_dash",args:[{kind:"Literal",name:"scrubbing_preference",value:"MPEG_DASH"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(scrubbing_preference:"MPEG_DASH")'},{alias:null,args:null,kind:"ScalarField",name:"dash_manifest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"min_quality_preference",storageKey:null},{alias:null,args:null,concreteType:"VideoPlayerShakaLiveP2PInit",kind:"LinkedField",name:"video_player_shaka_live_p2p_init",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"json_encoded_video_data",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"playable_url",storageKey:null},{alias:"playable_url_quality_hd",args:[{kind:"Literal",name:"quality",value:"HD"}],kind:"ScalarField",name:"playable_url",storageKey:'playable_url(quality:"HD")'},{alias:null,args:null,concreteType:"SphericalVideoFallbackUrls",kind:"LinkedField",name:"spherical_video_fallback_urls",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sd",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_gaming_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_latency_menu_enabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comet_video_player_static_config",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comet_video_player_context_sensitive_config",storageKey:null},{alias:null,args:null,concreteType:"VideoPlayerShakaPerformanceLoggerInit",kind:"LinkedField",name:"video_player_shaka_performance_logger_init",plural:!1,selections:[{documentName:"useVideoPlayerShakaPerformanceLoggerRelay_video",fragmentName:"useVideoPlayerShakaPerformanceLoggerRelay_init",fragmentPropName:"init",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"autoplay_gating_result",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"viewer_autoplay_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_autoplay",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"drm_info",storageKey:null},{alias:null,args:null,concreteType:"VideoP2PSettings",kind:"LinkedField",name:"p2p_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ticket",storageKey:null},{alias:null,args:null,concreteType:"VideoP2PSettingsConfig",kind:"LinkedField",name:"config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"delay_p2p_until_play",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"disable_hivejava_for_livevc",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"VideoHiveInitializationOptions",kind:"LinkedField",name:"hive_initialization_options",plural:!1,selections:[{alias:null,args:null,concreteType:"VideoHiveInitializationOptionHiveJava",kind:"LinkedField",name:"hive_java",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"min_version",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hive_tech_order",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"debug_level",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AudioSettings",kind:"LinkedField",name:"audio_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"video_volume_setting",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"CaptionsSettings",kind:"LinkedField",name:"captions_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"always_show_captions",storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"VideoBroadcastLowLatencyConfig",kind:"LinkedField",name:"broadcast_low_latency_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ll_desired_latency_ms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ll_latency_tolerance_ms",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"audio_availability",storageKey:null},{alias:null,args:null,concreteType:"VideoMutedSegment",kind:"LinkedField",name:"muted_segments",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"mute_start_time_in_sec",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"mute_end_time_in_sec",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"SphericalVideoRenderer",kind:"LinkedField",name:"spherical_video_renderer",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_spherical_video_renderer",fragmentName:"VideoPlayerSphericalRelay_sphericalVideoRenderer",fragmentPropName:"sphericalVideoRenderer",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"InstreamVideoAdBreaks",kind:"LinkedField",name:"instream_video_ad_breaks_comet",plural:!1,selections:[{documentName:"VideoPlayerRelay_video_instream_video_ad_breaks_comet",fragmentName:"InstreamVideoAdBreaksPlayer_adBreaks",fragmentPropName:"adBreaks",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_premium_music_video",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_rotation",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_latency_setting",storageKey:null}]}],storageKey:null}]}}();e.exports=a}),null);
__d("TetraProfileVideo_profileVideo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TetraProfileVideo_profileVideo",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{args:null,kind:"FragmentSpread",name:"VideoPlayerRelay_video"},{args:null,kind:"FragmentSpread",name:"useVideoOriginalDimensionsRelay_video"}],storageKey:null}],type:"ProfileVideo",abstractKey:null};e.exports=a}),null);
__d("CometFeedStoryActorVideoStrategy_actorPhoto$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},d={alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[b,{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryActorVideoStrategy_actorPhoto$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[a,{kind:"TypeDiscriminator",abstractKey:"__isActor"},b,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:40},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},c],storageKey:null},{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"pages_story_bucket_v2",plural:!1,selections:[a,b,d],storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"first",value:1}],concreteType:"DirectInboxBroadcastBucketConnection",kind:"LinkedField",name:"story_bucket",plural:!1,selections:[{alias:null,args:null,concreteType:"DirectMessageThreadBucket",kind:"LinkedField",name:"nodes",plural:!0,selections:[b,d],storageKey:null}],storageKey:"story_bucket(first:1)"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null}]}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ProfileVideo",kind:"LinkedField",name:"profile_video",plural:!1,selections:[b,{documentName:"TetraProfileVideoSection_profileVideo",fragmentName:"TetraProfileVideo_profileVideo",fragmentPropName:"profileVideo",kind:"ModuleImport"}],storageKey:null}],type:"Profile",abstractKey:"__isProfile"}],storageKey:null},b],storageKey:null},{kind:"InlineFragment",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"}]}}();e.exports=a}),null);
__d("CometFeedStoryActorVideoStrategy_actorPhoto.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"height",value:40},b={kind:"Variable",name:"scale",variableName:"scale"},c={kind:"Literal",name:"width",value:40};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometFeedStoryActorVideoStrategy_actorPhoto",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actors",plural:!0,selections:[{alias:null,args:[a,b,c],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:[{kind:"Literal",name:"allowProfileVideo",value:!0},a,b,c],kind:"FragmentSpread",name:"TetraProfilePhotoForActor_actor"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"}],type:"CometFeedStoryActorVideoStrategy",abstractKey:null}}();e.exports=a}),null);
__d("TetraProfileVideo.react",["CometPressable.react","CometRelay","CometTrackingNodeProvider.react","React","VideoPlayerHooks","VideoPlayerRelay.react","VideoPlayerSurface.react","VideoPlayerWithThumbnail.react","computeAspectRatio","stylex","unrecoverableViolation","useVideoOriginalDimensionsRelay","TetraProfileVideo_profileVideo.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");function i(){var a=b("VideoPlayerHooks").useCanAutoplay()==="allow",c=b("VideoPlayerHooks").useVideoPlayerViewabilityInfo();c=c?c.visiblePercentage:null;var d=c===null||c>0,e=h.useRef(d),f=b("VideoPlayerHooks").useController(),g=b("VideoPlayerHooks").usePlaying();h.useEffect(function(){if(!a)return;d!==e.current&&(e.current=d,d&&!g?f.play("product_initiated"):!d&&g&&f.pause("product_initiated"))},[a,f,d,g])}function j(a){var c=b("VideoPlayerHooks").useCanAutoplay()==="allow",d=b("VideoPlayerHooks").useController(),e=b("VideoPlayerHooks").usePlaying();h.useEffect(function(){c&&a&&!e&&d.play("user_initiated")},[c,d,e,a])}function a(a,c){var d=a.linkProps,e=a.onHoverIn,f=a.onHoverOut,i=a.onPress,j=a.onPressIn,l=a.profileVideo,m=a.size,n=a.thumbnailUri;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onHoverIn","onHoverOut","onPress","onPressIn","profileVideo","size","thumbnailUri"]);l=b("CometRelay").useFragment(g!==void 0?g:g=b("TetraProfileVideo_profileVideo.graphql"),l);var o=l==null?void 0:l.associated_video;if(o==null)throw b("unrecoverableViolation")("video cannot be null in TetraProfileVideo","comet_feed");l=b("useVideoOriginalDimensionsRelay")(o);l=l.originalAspectRatio;var p=b("computeAspectRatio")(o.width,o.height),q=(l=l)!=null?l:p;if(q==null)throw b("unrecoverableViolation")("aspectRatio cannot be null in useVideoOriginalDimensionsRelay","comet_feed");return h.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:3,children:h.jsx(b("CometPressable.react"),babelHelpers["extends"]({},a,{linkProps:d,onHoverIn:e,onHoverOut:f,onPress:i,onPressIn:j,overlayDisabled:!0,ref:c,children:function(a){a=a.hovered;return h.jsx(b("VideoPlayerRelay.react"),{canAutoplay:"respect_user_settings",disableLoadingIndicator:!0,loopCount:2,playerFormat:"inline",portalingEnabled:!1,subOrigin:"profile_video",video:o,children:h.jsx(k,{aspectRatio:q,hovered:a,size:m,thumbnailUri:n})})}}))})}function k(a){var c=a.aspectRatio,d=a.hovered,e=a.size;a=a.thumbnailUri;j(d);i();d=c<1?{height:e/c,marginTop:-((e/c-e)/2),width:e}:{height:e,marginLeft:-((e*c-e)/2),width:e*c};return h.jsx(b("VideoPlayerSurface.react"),{children:h.jsx("div",{className:"l9j0dhe7",style:d,children:h.jsx(b("VideoPlayerWithThumbnail.react"),{src:a})})})}c=h.forwardRef(a);e.exports=c}),null);
__d("CometFeedStoryActorVideoStrategy.react",["CometRelay","React","TetraProfilePhotoForActor.react","unrecoverableViolation","useCometFeedStoryMatchDebugger","CometFeedStoryActorVideoStrategy_actorPhoto.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i=40;function a(a){var c;a=a.actorPhoto;a=b("CometRelay").useFragment(g!==void 0?g:g=b("CometFeedStoryActorVideoStrategy_actorPhoto.graphql"),a);b("useCometFeedStoryMatchDebugger")(a);a=a.story;a=a==null?void 0:(a=a.actors)==null?void 0:a[0];c=a==null?void 0:(c=a.profile_picture)==null?void 0:c.uri;if(a==null||c==null)throw b("unrecoverableViolation")("actor or actorProfilePhotoUrl cannot be null in CometFeedStoryActorVideoStrategy","comet_feed");return h.jsx("div",{"data-testid":void 0,children:h.jsx(b("TetraProfilePhotoForActor.react"),{actor:a,noHovercard:!0,shape:"circle",size:i})})}}),null);