if (self.CavalryLogger) { CavalryLogger.start_js(["5K0BE"]); }

__d("CometEntityActorSelectorButton_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometEntityActorSelectorButton_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"profile_image",args:[{kind:"Literal",name:"height",value:36},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometEntityActorSelectorMenuQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3110838319005053",metadata:{},name:"CometEntityActorSelectorMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometEntityActorSelector_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityActorSelector_entity",selections:[{alias:null,args:null,concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Node",abstractKey:"__isNode"}],type:"SupportsScopedActors",abstractKey:"__isSupportsScopedActors"};e.exports=a}),null);
__d("CometEntityActorSelector_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityActorSelector_viewer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometEntityActorSelectorButton_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("CometEntityHeaderActorSelector_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityHeaderActorSelector_entity",selections:[{alias:null,args:null,concreteType:"AvailableActorsConnection",kind:"LinkedField",name:"available_actors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CometEntityActorSelector_entity"}],type:"SupportsScopedActors",abstractKey:"__isSupportsScopedActors"};e.exports=a}),null);
__d("CometEntityHeaderActorSelector_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometEntityHeaderActorSelector_viewer",selections:[{args:null,kind:"FragmentSpread",name:"CometEntityActorSelector_viewer"}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("useIsCreationPreview",["CometCreationContext","React"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("React");function a(){var a=g.useContext(b("CometCreationContext"));return a.isDraft}}),null);
__d("CometCreationPreviewPlaceholder.react",["React","useIsCreationPreview"],(function(a,b,c,d,e,f){"use strict";e.exports=a;b("React");function a(a){var c=a.children,d=a.placeholder,e=a.shouldShowPlaceholder;e=e===void 0?!1:e;var f=b("useIsCreationPreview")();a=Object.prototype.hasOwnProperty.call(a,"stringValueToCheck")&&(a.stringValueToCheck==null||a.stringValueToCheck==="");return f&&(a||e)?d:c}}),null);
__d("CometEntityActorSelectorButton.react",["ix","fbt","CometRelay","React","TetraButton.react","TetraIcon.react","TetraProfilePhoto.react","TetraText.react","fbicon","recoverableViolation","CometEntityActorSelectorButton_viewer.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React");function k(a,c){if(c)return j.jsx(b("TetraText.react"),{color:"primary",type:"body4",children:h._("Interacting as {=your profile}",[h._param("=your profile",j.jsx(b("TetraText.react"),{type:"bodyLink4",children:h._("\u101e\u1004\u1037\u103a\u1000\u102d\u102f\u101a\u103a\u101b\u1031\u1038\u1019\u103e\u1010\u103a\u1010\u1019\u103a\u1038")}))])});else return j.jsx(b("TetraText.react"),{color:"primary",type:"body4",children:h._("Interacting as {actor}",[h._param("actor",j.jsx(b("TetraText.react"),{type:"bodyLink4",children:a}))])})}function a(a,c){var d,e,f,l=a.viewer$key;a=babelHelpers.objectWithoutPropertiesLoose(a,["viewer$key"]);l=b("CometRelay").useFragment(i!==void 0?i:i=b("CometEntityActorSelectorButton_viewer.graphql"),l);d=l==null?void 0:(d=l.actor)==null?void 0:d.id;e=l==null?void 0:(e=l.actor)==null?void 0:e.name;f=l==null?void 0:(f=l.actor)==null?void 0:(f=f.profile_image)==null?void 0:f.uri;l=(l==null?void 0:(l=l.actor)==null?void 0:l.__typename)==="User";return d==null||e==null||f==null?b("recoverableViolation")("Actor ID, actor name, or profile picture URI are null in actor button","comet_ui"):j.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a,{addOnPrimary:j.jsx(b("TetraProfilePhoto.react"),{shape:"circle",size:36,source:{uri:f}}),addOnSecondary:j.jsx(b("TetraIcon.react"),{icon:b("fbicon")._(g("481882"),16),size:16}),label:h._("Actor Selector"),labelIsHidden:!0,reduceEmphasis:!0,ref:c,size:"large",tooltip:k(e,l),type:"secondary"}))}c=j.forwardRef(a);e.exports=c}),null);
__d("CometEntityActorSelectorMenu.entrypoint",["JSResourceForInteraction","WebPixelRatio","CometEntityActorSelectorMenuQuery$Parameters"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.actorID;a=a.entityID;return{queries:{menuQueryReference:{environmentProviderOptions:{actorID:c},parameters:b("CometEntityActorSelectorMenuQuery$Parameters"),variables:{entityID:a,scale:b("WebPixelRatio").get()}}}}},root:b("JSResourceForInteraction")("CometEntityActorSelectorMenu.react").__setRef("CometEntityActorSelectorMenu.entrypoint")};e.exports=a}),null);
__d("CometEntityActorSelectorPlaceholder.react",["ix","CometProgressIndicator.react","React","TetraIcon.react","fbicon","stylex"],(function(a,b,c,d,e,f,g){"use strict";e.exports=a;var h=b("React");function a(){return h.jsxs("div",{className:"t7sz67dt l9j0dhe7 qypqp5cg",children:[h.jsxs("div",{className:"jwdofwj8 tw6a2znq d1544ag0 r8blr3vg j83agx80 bp9cbjyn",children:[h.jsx("div",{className:"thwo4zme fv0vnmcu tv7at329 spb7xbtv bkmhp75w emlxlaya s45kfl79 pgeiv1et"}),h.jsx(b("TetraIcon.react"),{icon:b("fbicon")._(g("481882"),16),size:16})]}),h.jsx("div",{className:"fgv6swy9 p8hbile0 pmk7jnqg",children:h.jsx(b("CometProgressIndicator.react"),{overrideBGColorContext:"media",size:"small"})})]})}}),null);
__d("CometEntityActorSelector.react",["CometEntityActorSelectorButton.react","CometEntityActorSelectorMenu.entrypoint","CometEntityActorSelectorPlaceholder.react","CometEntryPointPopoverTrigger.react","CometRelay","React","recoverableViolation","useSuspenseTransition","CometEntityActorSelector_entity.graphql","CometEntityActorSelector_viewer.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React"),j={timeoutMs:1e4};function a(a){var c=a.entity$key,d=a.onChangeActor;a=a.viewer$key;c=b("CometRelay").useFragment(g!==void 0?g:g=b("CometEntityActorSelector_entity.graphql"),c);var e=b("CometRelay").useFragment(h!==void 0?h:h=b("CometEntityActorSelector_viewer.graphql"),a);a=b("useSuspenseTransition")(j);var f=a[0],k=a[1];a=e==null?void 0:(a=e.actor)==null?void 0:a.id;var l=c==null?void 0:c.id;if(a==null||l==null)return b("recoverableViolation")("Actor ID or entity ID is null in actor selector","comet_ui");c=(c=c==null?void 0:(c=c.available_actors)==null?void 0:c.count)!=null?c:0;if(c===0)return b("recoverableViolation")("No available actors in actor selector for entity "+l,"comet_ui");c=function(a){f(function(){return d(a)})};return i.jsx(b("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{actorID:a,entityID:l},otherProps:{onChangeActor:c},popoverEntryPoint:b("CometEntityActorSelectorMenu.entrypoint"),position:"below",preloadTrigger:"button",children:function(a,c,d,f,g,h){return k?i.jsx(b("CometEntityActorSelectorPlaceholder.react"),{}):i.jsx(b("CometEntityActorSelectorButton.react"),{onHoverIn:f,onHoverOut:g,onPress:c,onPressIn:h,ref:a,testid:void 0,viewer$key:e})}})}}),null);
__d("CometEntityHeaderActorSelector.react",["CometEntityActorSelector.react","CometRelay","React","stylex","CometEntityHeaderActorSelector_entity.graphql","CometEntityHeaderActorSelector_viewer.graphql"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h,i=b("React");function a(a){var c,d=a.entity$key,e=a.onChangeActor;a=a.viewer$key;d=b("CometRelay").useFragment(g!==void 0?g:g=b("CometEntityHeaderActorSelector_entity.graphql"),d);a=b("CometRelay").useFragment(h!==void 0?h:h=b("CometEntityHeaderActorSelector_viewer.graphql"),a);c=(c=d.available_actors)==null?void 0:c.count;return c==null||c<2?null:i.jsx("div",{className:"b3onmgus dhix69tm aypy0576",children:i.jsx(b("CometEntityActorSelector.react"),{entity$key:d,onChangeActor:e,viewer$key:a})})}}),null);