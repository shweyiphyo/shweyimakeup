if (self.CavalryLogger) { CavalryLogger.start_js(["RJ8ez"]); }

__d("CometPagePostsRootHoistedStoryQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3364419463675087",metadata:{},name:"CometPagePostsRootHoistedStoryQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPagePostsRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3493266830764070",metadata:{},name:"CometPagePostsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometVideosRootQueryVariables",[],(function(a,b,c,d,e,f){"use strict";a=8;f.count=a}),null);
__d("CometPagePostsRoot.entrypoint",["CometPagePostsRootHoistedStoryQuery$Parameters","CometPagePostsRootQuery$Parameters","CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.routeProps,d=c.pageID;c=c.storyIDs;a=a.routeParams;var e=a.comment_id;a=a.reply_comment_id;a=(a=a)!=null?a:e;e={cometPagePostsRootHoistedStoryQueryReference:{parameters:b("CometPagePostsRootHoistedStoryQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometPagePostsRootHoistedStoryQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE_PERMALINK",feedbackSource:2,focusCommentID:a!=null?String(a):null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:b("WebPixelRatio").get(),storyIDs:c,useDefaultActor:!1}},cometPagePostsRootQueryReference:{parameters:b("CometPagePostsRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometPagePostsRootPostsQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PAGE_TIMELINE",feedbackSource:22,focusCommentID:a!=null?String(a):null,pageID:d,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:b("WebPixelRatio").get(),useDefaultActor:!1}}};if(b("gkx")("1692176"))return{queries:babelHelpers["extends"]({loggedOutCTAfooterDataQueryReference:{parameters:b("CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{pageID:d,scale:b("WebPixelRatio").get()}}},e)};else return{queries:e}},root:b("JSResourceForInteraction")("CometPagePostsRoot.react").__setRef("CometPagePostsRoot.entrypoint")};e.exports=a}),null);