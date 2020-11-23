if (self.CavalryLogger) { CavalryLogger.start_js(["K\/3IK"]); }

__d("CometMarketplaceC2CShippingLinkBankAccountButton_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMarketplaceC2CShippingLinkBankAccountButton_viewer",selections:[{args:null,kind:"FragmentSpread",name:"useMerchantPaymentAccountInfo"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometUFIFeedbackReactMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"detection_analytics_enabled",storageKey:null},d=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],e={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:"i18n_reaction_count",args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometUFIFeedbackReactMutation",selections:[{alias:null,args:b,concreteType:"FeedbackReactResponsePayload",kind:"LinkedField",name:"feedback_react",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UFI2ReactionActionLink_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2ReactionsCount_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2CommentTopReactions_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2CommentTopReactionsWrapper_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2TopReactions_feedback"},{args:null,kind:"FragmentSpread",name:"CometUFIFeedbackReactMutation_feedback"}],storageKey:null},c],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometUFIFeedbackReactMutation",selections:[{alias:null,args:b,concreteType:"FeedbackReactResponsePayload",kind:"LinkedField",name:"feedback_react",plural:!1,selections:[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:d,kind:"ScalarField",name:"can_viewer_react",storageKey:null},{alias:null,args:d,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[e,f,g],storageKey:null},f,{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[g,f,h],storageKey:null},{alias:null,args:null,concreteType:"FeedbackReaction",kind:"LinkedField",name:"supported_reactions",plural:!0,selections:[e],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[f],storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[e,f,{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null}],storageKey:null},i],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[j,{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"count_reduced",storageKey:null}],storageKey:null},i,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"ImportantReactorsConnection",kind:"LinkedField",name:"important_reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[g,h,f],storageKey:null}],storageKey:"important_reactors(first:2)"},{alias:"reaction_count",args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[j],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show_top_reactions",storageKey:null}],storageKey:null},c],storageKey:null}]},params:{id:"4136721883019636",metadata:{},name:"CometUFIFeedbackReactMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometUFIFeedbackReactMutation_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{mask:!1},name:"CometUFIFeedbackReactMutation_feedback",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:a,storageKey:null}],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:a,storageKey:null}],type:"Feedback",abstractKey:null}}();e.exports=a}),null);
__d("CometUFIFeedbackReactSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"},{defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[c],e=[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"CometUFIFeedbackReactMutation_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2ReactionsCount_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2TopReactions_feedback"}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"liker",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:d,storageKey:null}],storageKey:null}],f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null},h={alias:"i18n_reaction_count",args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},j=[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],k={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};d=[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[c,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:d,storageKey:null},{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[g,c,{alias:null,args:null,kind:"ScalarField",name:"localized_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null}],storageKey:null},h],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'},{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[i,{alias:null,args:null,kind:"ScalarField",name:"is_empty",storageKey:null}],storageKey:null},{alias:null,args:j,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[g,c,f],storageKey:null},h,{alias:null,args:[{kind:"Literal",name:"first",value:2}],concreteType:"ImportantReactorsConnection",kind:"LinkedField",name:"important_reactors",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"nodes",plural:!0,selections:[f,k,c],storageKey:null}],storageKey:"important_reactors(first:2)"},{alias:"reaction_count",args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[i],storageKey:null},{alias:null,args:j,concreteType:null,kind:"LinkedField",name:"viewer_actor",plural:!1,selections:[f,c,k],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"liker",plural:!1,selections:[f,{kind:"TypeDiscriminator",abstractKey:"__isActor"},c],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[f,c],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometUFIFeedbackReactSubscription",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"feedback_like_subscribe",plural:!1,selections:[{kind:"InlineFragment",selections:e,type:"FeedbackLikeResponsePayload",abstractKey:null},{kind:"InlineFragment",selections:e,type:"FeedbackUnlikeResponsePayload",abstractKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometUFIFeedbackReactSubscription",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"feedback_like_subscribe",plural:!1,selections:[f,{kind:"InlineFragment",selections:d,type:"FeedbackLikeResponsePayload",abstractKey:null},{kind:"InlineFragment",selections:d,type:"FeedbackUnlikeResponsePayload",abstractKey:null}],storageKey:null}]},params:{id:"2981224878623730",metadata:{subscriptionName:"feedback_like_subscribe"},name:"CometUFIFeedbackReactSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("CometUFIFeedbackReactSubscription_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIFeedbackReactSubscription_feedback",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"CometUFIFeedbackReactMutation_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2ReactionsCount_feedback"},{args:null,kind:"FragmentSpread",name:"UFI2TopReactions_feedback"}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("CometUFIFeedbackReactSubscription_liker.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIFeedbackReactSubscription_liker",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometUFIFeedbackReactSubscription_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIFeedbackReactSubscription_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometUFITypingSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c=[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"UFI2TypingIndicatorImpl_feedback"}],storageKey:null}],d=[{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"FeedbackTypersConnection",kind:"LinkedField",name:"feedback_typers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"other_count",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"subscription_target_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometUFITypingSubscription",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"feedback_typing_subscribe",plural:!1,selections:[{kind:"InlineFragment",selections:c,type:"FeedbackStartTypingResponsePayload",abstractKey:null},{kind:"InlineFragment",selections:c,type:"FeedbackStopTypingResponsePayload",abstractKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometUFITypingSubscription",selections:[{alias:null,args:b,concreteType:null,kind:"LinkedField",name:"feedback_typing_subscribe",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:d,type:"FeedbackStartTypingResponsePayload",abstractKey:null},{kind:"InlineFragment",selections:d,type:"FeedbackStopTypingResponsePayload",abstractKey:null}],storageKey:null}]},params:{id:"2548564581912271",metadata:{subscriptionName:"feedback_typing_subscribe"},name:"CometUFITypingSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("CometUFIUnhideCommentMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},b={defaultValue:null,kind:"LocalArgument",name:"input"},c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"spam_display_mode",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"is_hidden_by_viewer",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"is_hidden_by_content_owner",storageKey:null};return{fragment:{argumentDefinitions:[a,b],kind:"Fragment",metadata:null,name:"CometUFIUnhideCommentMutation",selections:[{alias:null,args:c,concreteType:"CommentUnhideResponsePayload",kind:"LinkedField",name:"comment_unhide",plural:!1,selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[d,e,f,g,{args:null,kind:"FragmentSpread",name:"CometUFICommentMenu_comment"}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[b,a],kind:"Operation",name:"CometUFIUnhideCommentMutation",selections:[{alias:null,args:c,concreteType:"CommentUnhideResponsePayload",kind:"LinkedField",name:"comment_unhide",plural:!1,selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[d,e,f,g,{alias:"items",args:[{kind:"Variable",name:"feed_location",variableName:"feedLocation"}],concreteType:null,kind:"LinkedField",name:"comment_menu_items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemRemoveTag_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemRemoveTag",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDelete_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemDelete",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDeleteAndRemoveMember_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemDeleteAndRemoveMember",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemDivider_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemDivider",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemEdit_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemEdit",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemReportToAdmins_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemReportToAdmins",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemGiveFeedbackOrReport_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemGiveFeedbackOrReport",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemCreateDetailedReport_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemCreateDetailedReport",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemHide_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemHide",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemUnhide_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemUnhide",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenter_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemBanCommenter",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteMember_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemMuteMember",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemRemoveWithFeedback_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemRemoveWithFeedback",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemPublishVidwallaOverlay_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemPublishVidwallaOverlay",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemVidwallaSaveGraphic_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemVidwallaSaveGraphic",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemBanCommenterFromLiveVideoStream",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemBanCommenterFromPage_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemBanCommenterFromPage",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteCommenterForFifteenMinutes_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemMuteCommenterForFifteenMinutes",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteCommenterForThirtyMinutes_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemMuteCommenterForThirtyMinutes",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"CometUFICommentMenuItemMuteCommenterForSixtyMinutes_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemMuteCommenterForSixtyMinutes",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemBanFromPage_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemBanCommenterFromPageWithCommunityRules",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemDelete_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemGFIDelete",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemBanCommenterFromLiveVideoStream_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemBanCommenterFromLiveVideoStreamWithCommunityRules",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemMuteCommenter_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemMuteCommenterWithCommunityRules",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemReportToModerator_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemReportToModerator",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemAddAsModerator_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemAddAsModerator",abstractKey:null},{kind:"InlineFragment",selections:[{documentName:"CometUFICommentMenu_comment",fragmentName:"GFICommentMenuItemPinComment_commentMenuItem",fragmentPropName:"commentMenuItem",kind:"ModuleImport"}],type:"CommentMenuItemPinComment",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"3534514423251192",metadata:{},name:"CometUFIUnhideCommentMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("CometVideoHomeLiveHeroUFI_story.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeLiveHeroUFI_story",selections:[{args:null,kind:"FragmentSpread",name:"CometVideoHomeBlueDesignFeedUnitUFI_story"}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("useLeafletLayerContext",["BaseLeafletLayerContext","React","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("BaseLeafletLayerContext"));if(!a)throw b("unrecoverableViolation")("Leaflet Context must be set for Leaflet Layers","maps");return a}}),null);
__d("BaseLeafletPopup.react",["CometGeoCoordinates","CometLeafletUtils","React","ReactDOMComet","leaflet-v1_5","useLeafletLayerContext","usePrevious"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={};function a(a){var c=a.children,d=a.coordinates;a=a.options;var e=a===void 0?h:a;a=b("useLeafletLayerContext")();var f=a.layer,i=b("usePrevious")(d),j=g.useMemo(function(){return document.createElement("div")},[]),k=g.useRef(null);g.useEffect(function(){if(f)if(f instanceof b("leaflet-v1_5").Layer){var a=b("leaflet-v1_5").popup(e,f).setContent(j);d!=null&&a.setLatLng(b("CometLeafletUtils").toLatLng(d));a.update();k.current=a;f.bindPopup(a);return function(){f.unbindPopup()}}else if(f instanceof b("leaflet-v1_5").Map){var c=b("leaflet-v1_5").popup(e).setContent(j);d!=null&&c.setLatLng(b("CometLeafletUtils").toLatLng(d));c.update();c.openOn(f);k.current=c;f.openPopup(c);return function(){f.closePopup(c)}}},[j,d,f,e]);g.useEffect(function(){var a=k.current;a!=null&&d!=null&&i!=null&&!b("CometGeoCoordinates").nearlyEquals(i,d)&&a.setLatLng(b("CometLeafletUtils").toLatLng(d))},[i,d]);return b("ReactDOMComet").createPortal(g.Children.only(c),j)}}),null);
__d("CometMapPopup.react",["BaseLeafletPopup.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h={autoPan:!1,closeButton:!1};function a(a){var c=a.children,d=a.coordinates,e=a.minWidth,f=a.offset;a=a.removeDefaultStyles;var i=a===void 0?!1:a;a=g.useMemo(function(){var a={};Object.assign(a,h);i&&(a.className="CometMapPopup_noStyle");f!=null&&(a.offset=f);e!=null&&(a.minWidth=e);return a},[e,f,i]);return g.jsx(b("BaseLeafletPopup.react"),{coordinates:d,options:a,children:c})}}),null);
__d("CometMarketplaceFeedCardHoverContext.react",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isMouseHovered:!1,isPopoverShown:!1,popoverVisibilityTrigger:function(){},shouldShowHoverState:!1,showHoverStateForLoggedInUsers:!1});e.exports=c}),null);
__d("CometMarketplaceFeedCardHoverContextProvider.react",["CometMarketplaceFeedCardHoverContext.react","CurrentUser","React","gkx"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React"),h=b("gkx")("1489406");function a(a){var c=a.children;a=a.showHoverState;a=a===void 0?!0:a;var d=g.useState(!1),e=d[0],f=d[1];d=g.useState(!1);var i=d[0],j=d[1];d=function(){f(!0)};var k=function(){f(!1)},l=function(a){j(a)},m=b("CurrentUser").isLoggedIn()&&a&&!h,n=m&&e;a=g.useMemo(function(){return{isMouseHovered:e,isPopoverShown:i,popoverVisibilityTrigger:l,shouldShowHoverState:n,showHoverStateForLoggedInUsers:m}},[e,i,n,m]);return g.jsx(b("CometMarketplaceFeedCardHoverContext.react").Provider,{value:a,children:g.jsx("div",{onMouseEnter:d,onMouseLeave:k,children:c})})}}),null);
__d("CometMarketplaceC2CShippingLinkBankAccountButton.react",["fbt","CometLazyDialogTrigger.react","CometMarketplaceUIComponent.react","CometRelay","JSResource","React","TetraButton.react","useMerchantPaymentAccountInfo","CometMarketplaceC2CShippingLinkBankAccountButton_viewer.graphql"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h,i=b("React"),j=b("JSResource")("MarketplaceCometShippingBankAccountUpdateDialog.react").__setRef("CometMarketplaceC2CShippingLinkBankAccountButton.react");function a(a){var c=b("CometRelay").useFragment(h!==void 0?h:h=b("CometMarketplaceC2CShippingLinkBankAccountButton_viewer.graphql"),a.viewer);c=b("useMerchantPaymentAccountInfo")(c);var d=c.cmsID,e=c.hasBankAccountInfo;return i.jsx(b("CometLazyDialogTrigger.react"),{dialogProps:{cmsID:d,hasBankAccountInfo:e},dialogResource:j,onHide:a.onClose,children:function(c,d){var f;f=i.jsx(b("TetraButton.react"),{label:(f=a.label)!=null?f:e?g._("\u1018\u100f\u103a\u1005\u102c\u101b\u1004\u103a\u1038\u1000\u102d\u102f \u1015\u103c\u1004\u103a\u1006\u1004\u103a\u101b\u1014\u103a"):g._("\u1018\u100f\u103a\u1021\u1000\u1031\u102c\u1004\u1037\u103a\u1014\u103e\u1004\u1037\u103a \u101c\u1004\u1037\u103a\u1001\u103a\u1001\u103b\u102d\u1010\u103a\u1015\u102b"),onPress:c,reduceEmphasis:a.reduceEmphasis,ref:d,size:a.size,type:a.type});return a.loggingComponent!=null?i.jsx(b("CometMarketplaceUIComponent.react"),{component:a.loggingComponent,logClick:!0,children:f}):f}})}}),null);
__d("MarketplaceRealEstateContentDeferred.react",["deferredLoadComponent","requireDeferredForDisplay"],(function(a,b,c,d,e,f){"use strict";a=b("deferredLoadComponent")(b("requireDeferredForDisplay")("MarketplaceRealEstateContent.react"));e.exports=a}),null);
__d("convertGraphQLFeedStoryType",["MarketplaceFeedStoryTypeEnum","getJSEnumSafe"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return b("getJSEnumSafe")(b("MarketplaceFeedStoryTypeEnum"),a)}}),null);
__d("CometUFIFeedbackReactMutation",["ChannelClientID","CometRelay","FBLogger","FeedbackSourceType","JSEnumValueToGraphQLKey","UFIODSLogger","UFIReactionTypes","arrayStableSort","requireCond","setTimeout","unrecoverableViolation","cr:1088250","CometUFIFeedbackReactMutation_feedback.graphql","CometUFIFeedbackReactMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h,i=b("UFIReactionTypes").ordering,j=2,k=3e3,l=b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),1);g!==void 0?g:g=b("CometUFIFeedbackReactMutation_feedback.graphql");var m=h!==void 0?h:h=b("CometUFIFeedbackReactMutation.graphql");function a(a){var c=a.environment,d=a.input,e=a.useDefaultActor,f=d.feedback_source,g=d.feedback_reaction;f={input:babelHelpers["extends"]({},d,{feedback_source:f!=null?b("JSEnumValueToGraphQLKey")(b("FeedbackSourceType"),f):void 0,session_id:b("ChannelClientID").getID()}),useDefaultActor:e};var h=function(a){var c=a.get(d.feedback_id);if(c==null){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",d.feedback_id).warn("CometUFIFeedbackReactMutation: Could not find feedback in Relay store.");return}c.setValue(!0,"should_show_top_reactions");var f=o(a,d.feedback_id,c),h=c.getLinkedRecord("viewer_feedback_reaction_info",{use_default_actor:e}),i=h?h.getValue("key")||0:0;if(typeof i!=="number")throw b("unrecoverableViolation")("Type Error: currentReactionKey must not be of type 'number'. ","ufi2");var j=c.getLinkedRecord("top_reactions",{orderby:["COUNT_DESC","REACTION_TYPE"]});if(!j){var k="client:top_reactions:"+d.feedback_id;j=a.create(k,"TopReactionsConnection")}q(a,j,g,i);var l;if(g===0){if(h!==null){k=f.getValue("count");j=typeof k==="number"?k:1;l=j-1}c.setValue(null,"viewer_feedback_reaction_info",{use_default_actor:e})}else{if(h===null){i=f.getValue("count");k=typeof i==="number"?i:0;l=k+1}h=p(a,g);c.setLinkedRecord(h,"viewer_feedback_reaction_info",{use_default_actor:e})}l!=null&&(f.setValue(l,"count"),f.setValue(l===0,"is_empty"));j=f.getValue("count_reduced");if(parseInt(j,10).toString()===j){i=f.getValue("count");typeof i==="number"&&!Number.isNaN(i)&&f.setValue(i.toString(),"count_reduced")}};f={mutation:m,optimisticUpdater:h,variables:f};return n(c,f,h,0,d,a.onError)}function n(a,c,d,e,f,g){var h=b("CometRelay").commitMutation(a,babelHelpers["extends"]({},c,{onCompleted:function(a){a=c==null?void 0:(a=c.variables)==null?void 0:(a=a.input)==null?void 0:a.feedback_source;var d=Math.min(e+1,3);d=""+d+(e>=d?"+":"");a===l&&b("UFIODSLogger").bump("reaction.newsfeed.mutation.attempt."+d,"relay");b("UFIODSLogger").bump("reaction.mutation.attempt."+d,"relay");b("cr:1088250")&&b("cr:1088250")(f)},onError:function(i){if(i.name==="GraphQLError")return g(i);h=b("CometRelay").applyOptimisticMutation(a,babelHelpers["extends"]({},c,{optimisticUpdater:d}));if(e>=j)return g(i);b("setTimeout")(function(){h&&h.dispose(),h=n(a,c,d,e+1,f,g)},k)}}));return{dispose:function(){h&&h.dispose(),h=null}}}function o(a,c,d){var e=d.getLinkedRecord("reactors");if(!e){b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",c).warn("Expected Feedback record proxy to have a reactors connection");c="client:reactors:"+c;e=a.get(c)||a.create(c,"ReactorsOfContentConnection");e.setValue(0,"count");e.setValue("0","count_reduced");e.setValue(!0,"is_empty");d.setLinkedRecord(e,"reactors")}return e}function p(a,c){if(c===0)throw b("unrecoverableViolation")("ReactionInfo cannot be created for NONE","ufi2");var d="client:reaction_info:"+c,e=a.get(d);if(!e){e=a.create(d,"FeedbackReactionInfo");e.setValue(c,"key");a=b("UFIReactionTypes").reactions[c];if(!a)throw b("unrecoverableViolation")("No reaction for reaction key: "+c,"ufi2");e.setValue(a.display_name,"localized_name");e.setValue(a.name.toUpperCase(),"reaction_type")}return e}function q(a,c,d,e){var f=(c.getLinkedRecords("edges")||[]).map(function(a){if(!a)return null;var c=a.getLinkedRecord("node"),d=a.getValue("reaction_count")||0,e=c&&c.getValue("key")||0;if(typeof d==="number"&&typeof e==="number")return c&&d!==0&&e!==0?{count:d,edge:a,key:e}:null;else throw b("unrecoverableViolation")("Type Error: LinkedRecord (node) and reaction_count (count) must be of type 'number'. ","ufi2")}).filter(Boolean);if(e){var g=f.find(function(a){a=a.key;return a===e});g&&g.count--}if(d){g=f.find(function(a){return a.key===d});if(!g){var h=p(a,d);a=b("CometRelay").ConnectionHandler.createEdge(a,c,h,"TopReactionsEdge");g={count:0,edge:a,key:d};f.push(g)}g.count++}h=b("arrayStableSort")(f,function(a,b){return b.count-a.count||i.indexOf(a.key)-i.indexOf(b.key)}).filter(function(a){a=a.count;return a!==0}).map(function(a){var b=a.edge;a=a.count;b.setValue(a,"reaction_count");b.setValue((a=b.getValue("reaction_count_reduced"))!=null?a:"","reaction_count_reduced");return b});c.setLinkedRecords(h,"edges")}}),null);
__d("CometUFIFeedbackReactSubscription",["CometRelay","UFI2FeedbackSubscriptionTopicProvider","emptyFunction","gkx","CometUFIFeedbackReactSubscription_feedback.graphql","CometUFIFeedbackReactSubscription_liker.graphql","CometUFIFeedbackReactSubscription_viewer.graphql","CometUFIFeedbackReactSubscription.graphql"],(function(a,b,c,d,e,f){"use strict";f.subscribe=a;var g,h,i,j;g!==void 0?g:g=b("CometUFIFeedbackReactSubscription_feedback.graphql");h!==void 0?h:h=b("CometUFIFeedbackReactSubscription_liker.graphql");i!==void 0?i:i=b("CometUFIFeedbackReactSubscription_viewer.graphql");var k=j!==void 0?j:j=b("CometUFIFeedbackReactSubscription.graphql");b("UFI2FeedbackSubscriptionTopicProvider").registerProvider(k,"gqls/feedback_like_subscribe/feedback_id_");function a(a,c,d,e){if(b("gkx")("1352845"))return{dispose:b("emptyFunction")};b("UFI2FeedbackSubscriptionTopicProvider").addSubscriptionTargetIDForFeedbackID(c.feedback_id,e);return b("CometRelay").requestSubscription(a,{subscription:k,updater:function(a,b){var c,d;c=(c=b.feedback_like_subscribe)==null?void 0:(c=c.liker)==null?void 0:c.id;d=(d=b.feedback_like_subscribe)==null?void 0:(d=d.viewer)==null?void 0:(d=d.actor)==null?void 0:d.id;if(c!==d){b=(c=b.feedback_like_subscribe)==null?void 0:(d=c.feedback)==null?void 0:d.id;if(b!==void 0&&b!==null){c=a.get(b);c&&c.setValue(!0,"is_unseen")}}},variables:{input:c,useDefaultActor:d}})}}),null);
__d("CometUFITypingSubscription",["CometRelay","UFI2FeedbackSubscriptionTopicProvider","CometUFITypingSubscription.graphql"],(function(a,b,c,d,e,f){"use strict";f.subscribe=a;var g,h=g!==void 0?g:g=b("CometUFITypingSubscription.graphql");b("UFI2FeedbackSubscriptionTopicProvider").registerProvider(h,"gqls/feedback_typing_subscribe/feedback_id_");function a(a,c,d,e){b("UFI2FeedbackSubscriptionTopicProvider").addSubscriptionTargetIDForFeedbackID(c,e);return b("CometRelay").requestSubscription(a,{onNext:d&&d.onNext,subscription:h,variables:{input:{feedback_id:c}}})}}),null);
__d("CometUFIUnhideCommentMutation",["CometRelay","FBLogger","CometUFIUnhideCommentMutation.graphql"],(function(a,b,c,d,e,f){"use strict";f.commit=a;var g,h=g!==void 0?g:g=b("CometUFIUnhideCommentMutation.graphql");function a(a,c){return b("CometRelay").commitMutation(a,{mutation:h,optimisticUpdater:function(a){a=a.get(c.commentId);if(a==null){b("FBLogger")("ufi2").mustfix("When trying to unhide a comment, the comment could not be found.");return}a.setValue(!1,"is_hidden_by_content_owner");a.setValue(!1,"is_hidden_by_viewer");a.setValue("none","spam_display_mode")},variables:{feedLocation:c.feedLocation,input:{comment_id:c.commentId,feedback_source:c.feedbackSource,site:"comet"}}})}}),null);
__d("CometUFIViewOptionsSelectorMenu.react",["CometMenu.react","CometMenuItem.react","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(a){var c=a.onChange;a=a.viewOptions;a=a.filter(Boolean);return g.jsx(b("CometMenu.react"),{withArrow:!0,children:a.map(function(a){return g.jsx(b("CometMenuItem.react"),{onClick:function(){a.value!=null&&c(a.value)},primaryText:a.title||"",secondaryText:a.description},a.value)})})}}),null);
__d("CometVideoHomeLiveHeroUFI.react",["CometRelay","CometVideoHomeBlueDesignFeedUnitUFI.react","CometVideoHomeLiveUFIContext","React","gkx","stylex","CometVideoHomeLiveHeroUFI_story.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React");function a(a){var c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometVideoHomeLiveHeroUFI_story.graphql"),a.story);return h.jsx("div",{className:"l9j0dhe7 d2edcug0 f9o22wc5 ad2k81qe cwj9ozl2"+(b("gkx")("708253")?" bglkmn5o":""),"data-testid":void 0,children:h.jsx(b("CometVideoHomeLiveUFIContext").Provider,{value:{renderConfig:"www_live_tab_hero"},children:h.jsx(b("CometVideoHomeBlueDesignFeedUnitUFI.react"),{autoExpandComments:a.expandComments,story:c})})})}}),null);
__d("CometVideoHomeGetLiveInjectionURI",["XCometVideoHomeLiveControllerRouteBuilder"],(function(a,b,c,d,e,f){"use strict";f.getCometInjectionURI=a;function a(a,c){var d={};a!=null&&(d.v=a);c!=null&&(d.ref=c);return b("XCometVideoHomeLiveControllerRouteBuilder").buildURL(d)}}),null);