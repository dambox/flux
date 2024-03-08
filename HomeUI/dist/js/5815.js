"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[5815],{34547:(t,e,a)=>{a.d(e,{Z:()=>p});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},o=[],r=a(47389);const i={components:{BAvatar:r.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},l=i;var n=a(1001),c=(0,n.Z)(l,s,o,!1,null,"22d964ca",null);const p=c.exports},5815:(t,e,a)=>{a.r(e),a.d(e,{default:()=>ht});var s=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"inherit"}},[e("div",{staticClass:"body-content-overlay",class:{show:t.showDetailSidebar},on:{click:function(e){t.showDetailSidebar=!1}}}),e("div",{staticClass:"xdao-proposal-list"},[e("div",{staticClass:"app-fixed-search d-flex align-items-center"},[e("div",{staticClass:"sidebar-toggle d-block d-lg-none ml-1"},[e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MenuIcon",size:"21"},on:{click:function(e){t.showDetailSidebar=!0}}})],1),e("div",{staticClass:"d-flex align-content-center justify-content-between w-100"},[e("b-input-group",{staticClass:"input-group-merge"},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("feather-icon",{staticClass:"text-muted",attrs:{icon:"SearchIcon"}})],1),e("b-form-input",{attrs:{value:t.searchQuery,placeholder:"Search proposals"},on:{input:t.updateRouteQuery}})],1)],1),e("div",{staticClass:"dropdown"},[e("b-dropdown",{attrs:{variant:"link","no-caret":"","toggle-class":"p-0 mr-1",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}])},[e("b-dropdown-item",{on:{click:t.resetSortAndNavigate}},[t._v(" Reset Sort ")]),e("b-dropdown-item",{attrs:{to:{name:t.$route.name,query:{...t.$route.query,sort:"title-asc"}}}},[t._v(" Sort A-Z ")]),e("b-dropdown-item",{attrs:{to:{name:t.$route.name,query:{...t.$route.query,sort:"title-desc"}}}},[t._v(" Sort Z-A ")]),e("b-dropdown-item",{attrs:{to:{name:t.$route.name,query:{...t.$route.query,sort:"end-date"}}}},[t._v(" Sort End Date ")])],1)],1)]),e("vue-perfect-scrollbar",{ref:"proposalListRef",staticClass:"xdao-proposal-list scroll-area",attrs:{settings:t.perfectScrollbarSettings}},[e("ul",{staticClass:"xdao-media-list"},t._l(t.filteredProposals,(function(a){return e("b-media",{key:a.hash,staticClass:"proposal-item",attrs:{tag:"li","no-body":""},on:{click:function(e){return t.handleProposalClick(a)}}},[e("b-media-body",[e("div",{staticClass:"proposal-title-wrapper"},[e("div",{staticClass:"proposal-title-area"},[e("div",{staticClass:"title-wrapper"},[e("span",{staticClass:"proposal-title"},[e("h4",[t._v(t._s(a.topic))])])])]),e("div",{staticClass:"proposal-item-action"},[e("div",{staticClass:"badge-wrapper mr-1"},[e("b-badge",{staticClass:"text-capitalize",attrs:{pill:"",variant:`light-${t.resolveTagVariant(a.status)}`}},[t._v(" "+t._s(a.status)+" ")])],1),a.nickName?e("b-avatar",{attrs:{size:"32",variant:`light-${t.resolveAvatarVariant(a.status)}`,text:t.avatarText(a.nickName)}}):e("b-avatar",{attrs:{size:"32",variant:"light-secondary"}},[e("feather-icon",{attrs:{icon:"UserIcon",size:"16"}})],1)],1)]),e("div",{staticClass:"proposal-title-area"},[e("div",{staticClass:"title-wrapper"},[e("h6",{staticClass:"text-nowrap text-muted mr-1"},[t._v(" Submitted: "+t._s(new Date(a.submitDate).toLocaleString("en-GB",t.timeoptions.shortDate))+" ")]),e("h6",{staticClass:"text-nowrap text-muted mr-1"},[t._v(" End Date: "+t._s(new Date(a.voteEndDate).toLocaleString("en-GB",t.timeoptions.shortDate))+" ")])])]),e("div",{staticClass:"proposal-progress-area"},[e("h6",{staticClass:"text-nowrap text-muted mr-1"},[t._v(" Required Votes: "+t._s(Number(a.votesRequired).toLocaleString())+" ")]),e("b-progress",{staticClass:"proposal-progress",attrs:{max:a.votesRequired,striped:"",animated:""}},[e("b-progress-bar",{attrs:{id:`progressbar-no-${a.hash}`,variant:"danger",value:a.votesNo,"show-progress":""}},[t._v(" No: "+t._s(Number(a.votesNo).toLocaleString())+" ")]),e("b-tooltip",{ref:"tooltip",refInFor:!0,attrs:{target:`progressbar-no-${a.hash}`,disabled:a.votesNo/a.votesRequired>.25}},[e("span",[t._v("No: "+t._s(Number(a.votesNo).toLocaleString()))])]),e("b-progress-bar",{attrs:{id:`progressbar-yes-${a.hash}`,variant:"success",value:a.votesYes,"show-progress":""}},[t._v(" Yes: "+t._s(Number(a.votesYes).toLocaleString())+" ")]),e("b-tooltip",{ref:"tooltip",refInFor:!0,attrs:{target:`progressbar-yes-${a.hash}`,disabled:a.votesYes/a.votesRequired>.25}},[e("span",[t._v("Yes: "+t._s(Number(a.votesYes).toLocaleString()))])])],1)],1)])],1)})),1),e("div",{staticClass:"no-results",class:{show:0===t.filteredProposals.length}},[e("h5",[t._v("No Proposals Found")])])])],1),e("add-proposal-view",{class:{show:t.isAddProposalViewActive},attrs:{zelid:t.zelid},on:{"close-add-proposal-view":function(e){t.isAddProposalViewActive=!1}}}),e("proposal-view",{class:{show:t.isProposalViewActive},attrs:{"proposal-view-data":t.proposal,zelid:t.zelid,"has-next-proposal":!0,"has-previous-proposal":!0},on:{"close-proposal-view":function(e){t.isProposalViewActive=!1}}}),e("portal",{attrs:{to:"content-renderer-sidebar-left"}},[e("proposal-sidebar",{class:{show:t.showDetailSidebar},on:{"close-left-sidebar":function(e){t.showDetailSidebar=!1},"close-proposal-view":function(e){t.isProposalViewActive=!1,t.isAddProposalViewActive=!1},"open-add-proposal-view":function(e){t.isAddProposalViewActive=!0}}})],1)],1)},o=[],r=a(22183),i=a(4060),l=a(27754),n=a(31642),c=a(87379),p=a(72775),d=a(68361),u=a(26034),v=a(47389),m=a(45752),b=a(22981),g=a(18365),f=a(20144),h=a(1923),w=a(23646),x=a(6044),C=a(20266),y=a(41905),_=a(34547),S=a(91040),k=a.n(S),V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"proposal-details"},[e("div",{staticClass:"proposal-detail-header"},[e("div",{staticClass:"proposal-header-left d-flex align-items-center"},[e("span",{staticClass:"go-back mr-1"},[e("feather-icon",{staticClass:"align-bottom",attrs:{icon:t.$store.state.appConfig.isRTL?"ChevronRightIcon":"ChevronLeftIcon",size:"20"},on:{click:function(e){return t.$emit("close-add-proposal-view")}}})],1),e("h4",{staticClass:"proposal-topic mb-0"},[t._v(" Add Proposal ")])])]),e("vue-perfect-scrollbar",{staticClass:"proposal-scroll-area scroll-area mt-2",attrs:{settings:t.perfectScrollbarSettings}},[e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{xl:"6",md:"12"}},[e("b-card",{attrs:{title:"Topic"}},[e("b-form-input",{staticClass:"mt-4",attrs:{placeholder:"Proposal Topic"},model:{value:t.proposalTopic,callback:function(e){t.proposalTopic=e},expression:"proposalTopic"}})],1)],1),e("b-col",{attrs:{xl:"6",md:"12"}},[e("b-card",{attrs:{title:"Grant"}},[e("b-form-group",{attrs:{"label-cols":"4",label:"Grant Amount","label-for":"grantAmount"}},[e("b-form-input",{attrs:{id:"grantAmount",placeholder:""},model:{value:t.proposalGrantValue,callback:function(e){t.proposalGrantValue=e},expression:"proposalGrantValue"}})],1),e("b-form-group",{attrs:{"label-cols":"4",label:"Grant Pay to Address","label-for":"grantAddress"}},[e("b-form-input",{attrs:{id:"grantAddress",placeholder:"Flux Address to Receive Grant"},model:{value:t.proposalGrantAddress,callback:function(e){t.proposalGrantAddress=e},expression:"proposalGrantAddress"}})],1)],1)],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{cols:"12"}},[e("b-card",{attrs:{title:"Description"}},[e("b-form-textarea",{attrs:{placeholder:"Proposal Description",rows:"8"},model:{value:t.proposalDescription,callback:function(e){t.proposalDescription=e},expression:"proposalDescription"}})],1)],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{xl:"6",md:"12"}},[e("b-card",{attrs:{title:"Name/Nickname"}},[e("b-form-input",{staticClass:"mt-2",attrs:{placeholder:"Name/Nickname of Proposal Owner"},model:{value:t.proposalNickName,callback:function(e){t.proposalNickName=e},expression:"proposalNickName"}})],1)],1),e("b-col",{attrs:{xl:"6",md:"12"}},[e("b-card",{attrs:{title:"Validate"}},[e("div",{staticClass:"text-center"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary",pill:"",size:"lg",disabled:t.proposalValid},on:{click:t.validateProposal}},[t._v(" Validate Proposal ")])],1)])],1)],1),t.proposalValid?e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-card",{attrs:{title:"Register Proposal"}},[e("div",{staticClass:"text-center"},[e("h4",[t._v("Proposal Price: "+t._s(t.proposalPrice)+" FLUX")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary",pill:"",size:"lg"},on:{click:t.register}},[t._v(" Register Flux XDAO Proposal ")])],1)])],1)],1):t._e(),t.proposalValid&&t.registrationHash?e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-card",{attrs:{title:"Complete Transaction"}},[e("b-row",[e("b-col",{attrs:{xl:"6",md:"12"}},[e("div",{staticClass:"text-center"},[t._v(" To finish registration, please make a transaction of "+t._s(t.proposalPrice)+" Flux to address "),e("b-link",{attrs:{href:`https://explorer.runonflux.io/address/${t.foundationAddress}`,target:"_blank","active-class":"primary",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.foundationAddress)+" ")]),t._v(" with the following message: "),e("br"),e("br"),t._v(" "+t._s(t.registrationHash)+" "),e("br"),e("br"),t._v(" The transaction must be mined by "+t._s(new Date(t.validTill).toLocaleString("en-GB",t.timeoptions))+" ")],1)]),e("b-col",{attrs:{xl:"6",md:"12"}},[e("div",{staticClass:"text-center"},[e("p",[t._v(" Pay with Zelcore ")]),e("div",[e("a",{attrs:{href:`zel:?action=pay&coin=zelcash&address=${t.foundationAddress}&amount=${t.proposalPrice}&message=${t.registrationHash}&icon=https%3A%2F%2Fraw.githubusercontent.com%2Frunonflux%2Fflux%2Fmaster%2Fflux_banner.png`}},[e("img",{staticClass:"zelidLogin",attrs:{src:a(94452),alt:"Zel ID",height:"100%",width:"100%"}})])])])])],1)],1)],1)],1):t._e()],1)],1)},D=[],P=a(15193),B=a(86855),A=a(50725),N=a(46709),T=a(333),R=a(67347),$=a(26253);const I=a(9669),z=a(63005),F={components:{BButton:P.T,BCard:B._,BCol:A.l,BFormGroup:N.x,BFormInput:r.e,BFormTextarea:T.y,BLink:R.we,BRow:$.T,ToastificationContent:_.Z,VuePerfectScrollbar:k()},directives:{Ripple:C.Z},props:{zelid:{type:String,required:!1,default:""}},setup(){const t=(0,y.useToast)(),e=(0,f.ref)(""),a=(0,f.ref)(""),s=(0,f.ref)(0),o=(0,f.ref)(""),r=(0,f.ref)(""),i=(0,f.ref)(!1),l=(0,f.ref)(500),n=(0,f.ref)(null),c=(0,f.ref)(""),p=(0,f.ref)(0),d={maxScrollbarLength:150},u=(e,a,s="InfoIcon")=>{t({component:_.Z,props:{title:a,icon:s,variant:e}})},v=async()=>{const t=await I.get("https://stats.runonflux.io/proposals/price");console.log(t),"success"===t.data.status?l.value=t.data.data:u("danger",t.data.data.message||t.data.data)},m=()=>{if(""!==e.value)if(""!==a.value)if(a.value.length<50)u("danger","Proposal Description is too short");else if(e.value.length<3)u("danger","Proposal Topic is too short");else{if(s.value){const t=/^\d+$/.test(s.value);if(!0!==t)return void u("danger","Proposal Grant Amount needs to be an Integer Number");if(s.value>0&&!o.value)return void u("danger","Proposal Grant Pay to Address missing")}o.value&&/\s/.test(o.value)?u("danger","Proposal Grant Pay to Address Invalid, white space detected"):(v(),i.value=!0)}else u("danger","Proposal Description is Mandatory");else u("danger","Proposal Topic is Mandatory")},b=async()=>{const t={topic:e.value,description:a.value,grantValue:s.value,grantAddress:o.value,nickName:r.value},i=await I.post("https://stats.runonflux.io/proposals/submitproposal",JSON.stringify(t));console.log(i),"success"===i.data.status?(c.value=i.data.data.address,n.value=i.data.data.hash,l.value=i.data.data.amount,p.value=i.data.data.paidTillDate):u("danger",i.data.data.message||i.data.data)};return{perfectScrollbarSettings:d,timeoptions:z,validateProposal:m,proposalTopic:e,proposalDescription:a,proposalGrantValue:s,proposalGrantAddress:o,proposalNickName:r,proposalValid:i,proposalPrice:l,registrationHash:n,validTill:p,foundationAddress:c,register:b}}},L=F;var Z=a(1001),O=(0,Z.Z)(L,V,D,!1,null,"4ad16744",null);const q=O.exports;var j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"proposal-details"},[e("div",{staticClass:"proposal-detail-header"},[e("div",{staticClass:"proposal-header-left d-flex align-items-center"},[e("span",{staticClass:"go-back mr-1"},[e("feather-icon",{staticClass:"align-bottom",attrs:{icon:t.$store.state.appConfig.isRTL?"ChevronRightIcon":"ChevronLeftIcon",size:"20"},on:{click:function(e){return t.$emit("close-proposal-view")}}})],1),e("h4",{staticClass:"proposal-topic mb-0"},[t._v(" "+t._s(t.proposalViewData.topic)+" ")])])]),e("vue-perfect-scrollbar",{staticClass:"proposal-scroll-area scroll-area",attrs:{settings:t.perfectScrollbarSettings}},[e("b-card",{attrs:{title:`Proposed By ${t.proposalViewData.nickName}`}},[e("b-form-textarea",{staticClass:"description-text",attrs:{id:"textarea-rows",rows:"10",readonly:"",value:t.proposalViewData.description}})],1),e("b-row",{staticClass:"mt-1 match-height"},[e("b-col",{attrs:{xxl:"4",lg:"12"}},[e("b-card",{attrs:{title:"Status"}},[e("div",{staticClass:"text-center badge-wrapper mr-1"},[e("b-badge",{staticClass:"text-uppercase",attrs:{pill:"",variant:`light-${t.resolveTagVariant(t.proposalViewData.status)}`}},[t._v(" "+t._s(t.proposalViewData.status)+" ")])],1)])],1),e("b-col",{attrs:{xxl:"4",md:"6",sm:"12"}},[e("b-card",{attrs:{title:"Start Date"}},[e("p",{staticClass:"text-center date"},[t._v(" "+t._s(new Date(Number(t.proposalViewData.submitDate)).toLocaleString("en-GB",t.timeoptions.shortDate))+" ")])])],1),e("b-col",{attrs:{xxl:"4",md:"6",sm:"12"}},[e("b-card",{attrs:{title:"End Date"}},[e("p",{staticClass:"text-center date"},[t._v(" "+t._s(new Date(Number(t.proposalViewData.voteEndDate)).toLocaleString("en-GB",t.timeoptions.shortDate))+" ")])])],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6"}},[e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("h4",{staticClass:"mb-0"},[t._v(" Vote Overview ")])]),e("vue-apex-charts",{attrs:{type:"radialBar",height:"200",options:t.voteOverviewRadialBar,series:t.voteOverview.series}}),e("b-row",{staticClass:"text-center mx-0"},[e("b-col",{staticClass:"border-top border-right d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" Required ")]),e("h3",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(Number(t.proposalViewData.votesRequired).toLocaleString())+" ")])],1),e("b-col",{staticClass:"border-top d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" Received ")]),e("h3",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(Number(t.proposalViewData.votesTotal).toLocaleString())+" ")])],1)],1)],1)],1),e("b-col",{attrs:{lg:"6"}},[e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("h4",{staticClass:"mb-0"},[t._v(" Vote Breakdown ")])]),e("vue-apex-charts",{attrs:{type:"radialBar",height:"200",options:t.voteBreakdownRadialBar,series:t.voteBreakdown.series}}),e("b-row",{staticClass:"text-center mx-0"},[e("b-col",{staticClass:"border-top border-right d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" Yes ")]),e("h3",{staticClass:"font-weight-bolder mb-0 text-success"},[t._v(" "+t._s(Number(t.proposalViewData.votesYes).toLocaleString())+" ")])],1),e("b-col",{staticClass:"border-top d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" No ")]),e("h3",{staticClass:"font-weight-bolder mb-0 text-danger"},[t._v(" "+t._s(Number(t.proposalViewData.votesNo).toLocaleString())+" ")])],1)],1)],1)],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6"}},[e("b-card",{attrs:{title:"Grant Amount"}},[e("div",{staticClass:"text-center badge-wrapper mr-1"},[e("b-badge",{staticClass:"text-uppercase",attrs:{pill:"",variant:"light-primary"}},[t._v(" "+t._s(Number(t.proposalViewData.grantValue).toLocaleString())+" FLUX ")])],1)])],1),e("b-col",{attrs:{lg:"6"}},[e("b-card",{attrs:{title:"Grant Address"}},[e("div",{staticClass:"text-center badge-wrapper mr-1"},[e("h4",[e("b-link",{attrs:{href:`https://explorer.runonflux.io/address/${t.proposalViewData.grantAddress}`,target:"_blank","active-class":"primary",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.proposalViewData.grantAddress)+" ")])],1)])])],1)],1),"Open"===t.proposalViewData.status?e("div",[t.haveVoted?e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-card",{attrs:{title:"Your Vote"}},[e("div",{staticClass:"text-center badge-wrapper mr-1"},[e("b-badge",{staticClass:"vote-badge",attrs:{pill:"",variant:"light-"+("No"===t.myVote?"danger":"success")}},[t._v(" "+t._s(t.myVote.toUpperCase())+" x"+t._s(t.myNumberOfVotes)+" ")])],1)])],1)],1):e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{xl:"3",md:"5"}},[e("b-card",{attrs:{title:"Vote Now!"}},[e("p",[t._v("You haven't voted yet! You have a total of "+t._s(t.myNumberOfVotes)+" available.")]),e("div",[e("p",[t._v(" To vote you need to first sign a message with Zelcore with your ZelID corresponding to your Flux Nodes. ")]),e("div",[e("a",{on:{click:t.initiateSignWS}},[e("img",{staticClass:"zelidLogin",attrs:{src:a(94452),alt:"Zel ID",height:"100%",width:"100%"}})])])])])],1),e("b-col",{attrs:{xl:"5",md:"7"}},[e("b-card",[e("b-row",{staticClass:"mt-2"},[e("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Message","label-for":"h-message","label-cols-md":"3"}},[e("b-form-input",{attrs:{id:"h-message",readonly:"",placeholder:"Message to Sign"},model:{value:t.dataToSign,callback:function(e){t.dataToSign=e},expression:"dataToSign"}})],1)],1),e("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Address","label-for":"h-address","label-cols-md":"3"}},[e("b-form-input",{attrs:{id:"h-address",placeholder:"Insert ZelID"},model:{value:t.userZelid,callback:function(e){t.userZelid=e},expression:"userZelid"}})],1)],1),e("b-col",{staticClass:"mb-1",attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Signature","label-for":"h-signature","label-cols-md":"3"}},[e("b-form-input",{attrs:{id:"h-signature",placeholder:"Insert Signature"},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}})],1)],1)],1)],1)],1),e("b-col",{attrs:{xl:"4",md:"12"}},[e("b-card",{staticClass:"text-center"},[e("p",[t._v("Remember, you can't change your vote! After voting it could take around 5 minutes to see the number of votes updated with your vote.")]),e("div",{attrs:{id:"vote-yes-button"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"vote-button d-block mt-2",attrs:{variant:"success",size:"lg",pill:"",disabled:!t.signature},on:{click:function(e){return t.vote(!0)}}},[t._v(" YES ")])],1),e("b-tooltip",{ref:"tooltip",attrs:{disabled:!!t.signature,target:"vote-yes-button"}},[e("span",[t._v("Please enter a Signature")])]),e("div",{attrs:{id:"vote-no-button"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"vote-button d-block mt-2",attrs:{variant:"danger",size:"lg",pill:"",disabled:!t.signature},on:{click:function(e){return t.vote(!1)}}},[t._v(" NO ")])],1),e("b-tooltip",{ref:"tooltip",attrs:{disabled:!!t.signature,target:"vote-no-button"}},[e("span",[t._v("Please enter a Signature")])])],1)],1)],1)],1):t._e()],1)],1)},G=[],Y=a(87047),U=a(64206),M=a(37307),E=a(67166),W=a.n(E),H=a(68934);const J=a(9669),Q=a(80129),X=a(58971),K=a(63005),tt={components:{BBadge:u.k,BButton:P.T,BCard:B._,BCardHeader:Y.p,BCardText:U.j,BCol:A.l,BFormGroup:N.x,BFormInput:r.e,BFormTextarea:T.y,BLink:R.we,BRow:$.T,BTooltip:g.T,ToastificationContent:_.Z,VuePerfectScrollbar:k(),VueApexCharts:W()},directives:{Ripple:C.Z},props:{proposalViewData:{type:Object,required:!0},zelid:{type:String,required:!1,default:""},hasNextProposal:{type:Boolean,required:!0},hasPreviousProposal:{type:Boolean,required:!0}},setup(t){const e=(0,f.getCurrentInstance)().proxy,a=(0,f.computed)((()=>e.$store.state.flux.config)),s=(0,y.useToast)(),o=t=>"Open"===t?"warning":"Passed"===t?"success":"Unpaid"===t?"info":t&&t.startsWith("Rejected")?"danger":"primary",r=async()=>{const t=await J.get("https://stats.runonflux.io/general/messagephrase");return"success"===t.data.status&&t.data.data},{xdaoOpenProposals:i}=(0,M.Z)(),l=(0,f.ref)(0),n=(0,f.ref)(""),c=(0,f.ref)("No"),p=(0,f.ref)(!1),d=(0,f.ref)(null),u=(0,f.ref)("");u.value=t.zelid;const v=(0,f.computed)((()=>null!==d.value)),m=async()=>{let e=`https://stats.runonflux.io/proposals/votepower?zelid=${u.value}`;t.proposalViewData.hash&&(e=`https://stats.runonflux.io/proposals/votepower?zelid=${u.value}&hash=${t.proposalViewData.hash}`);const a=await J.get(e);console.log(a),"success"===a.data.status?l.value=a.data.data.power:l.value=0},b=async()=>{const e=await J.get(`https://stats.runonflux.io/proposals/voteInformation?hash=${t.proposalViewData.hash}&zelid=${u.value}`);return e.data},g=async()=>{if(u.value){l.value=0;const e=await b();if("success"===e.status){const a=e.data;"Open"===t.proposalViewData.status&&(null==a||0===a.length?(await m(),p.value=!1):(a.forEach((t=>{l.value+=t.numberOfVotes})),c.value="No",a[0].vote&&(c.value="Yes"),p.value=!0))}}},h=()=>{const{protocol:t,hostname:s,port:o}=window.location;let r="";r+=t,r+="//";const i=/[A-Za-z]/g;if(s.split("-")[4]){const t=s.split("-"),e=t[4].split("."),a=+e[0]+1;e[0]=a.toString(),e[2]="api",t[4]="",r+=t.join("-"),r+=e.join(".")}else if(s.match(i)){const t=s.split(".");t[0]="api",r+=t.join(".")}else{if("string"===typeof s&&e.$store.commit("flux/setUserIp",s),+o>16100){const t=+o+1;e.$store.commit("flux/setFluxPort",t)}r+=s,r+=":",r+=a.value.apiPort}const l=X.get("backendURL")||r,n=`${l}/id/providesign`;return encodeURI(n)},w=t=>{console.log(t)},x=t=>{console.log(t)},C=t=>{const e=Q.parse(t.data);"success"===e.status&&e.data&&(d.value=e.data.signature),console.log(e),console.log(t)},S=t=>{console.log(t)},k=async()=>{if(n.value.length>1800){const t=n.value,e={publicid:Math.floor(999999999999999*Math.random()).toString(),public:t};await J.post("https://storage.runonflux.io/v1/public",e);const a=`zel:?action=sign&message=FLUX_URL=https://storage.runonflux.io/v1/public/${e.publicid}&icon=https%3A%2F%2Fraw.githubusercontent.com%2Frunonflux%2Fflux%2Fmaster%2FzelID.svg&callback=${h()}`;window.location.href=a}else window.location.href=`zel:?action=sign&message=${n.value}&icon=https%3A%2F%2Fraw.githubusercontent.com%2Frunonflux%2Fflux%2Fmaster%2FzelID.svg&callback=${h()}`;const{protocol:t,hostname:s,port:o}=window.location;let r="";r+=t,r+="//";const i=/[A-Za-z]/g;if(s.split("-")[4]){const t=s.split("-"),e=t[4].split("."),a=+e[0]+1;e[0]=a.toString(),e[2]="api",t[4]="",r+=t.join("-"),r+=e.join(".")}else if(s.match(i)){const t=s.split(".");t[0]="api",r+=t.join(".")}else{if("string"===typeof s&&e.$store.commit("flux/setUserIp",s),+o>16100){const t=+o+1;e.$store.commit("flux/setFluxPort",t)}r+=s,r+=":",r+=a.value.apiPort}let l=X.get("backendURL")||r;l=l.replace("https://","wss://"),l=l.replace("http://","ws://");const c=u.value+n.value.slice(-13),p=`${l}/ws/sign/${c}`,d=new WebSocket(p);d.onopen=t=>{x(t)},d.onclose=t=>{S(t)},d.onmessage=t=>{C(t)},d.onerror=t=>{w(t)}},V=async()=>{n.value=await r(),g()},D={maxScrollbarLength:150},P=(0,f.ref)({series:[]}),B=(0,f.ref)({series:[]});(0,f.watch)((()=>t.proposalViewData),(()=>{console.log(t.proposalViewData),P.value={series:[(t.proposalViewData.votesTotal/t.proposalViewData.votesRequired*100).toFixed(1)]},0!==t.proposalViewData.votesTotal?B.value={series:[(t.proposalViewData.votesYes/t.proposalViewData.votesTotal*100).toFixed(0)]}:B.value={series:[0]},V()}));const A=(t,e,a="InfoIcon")=>{s({component:_.Z,props:{title:e,icon:a,variant:t}})},N=async e=>{const a={hash:t.proposalViewData.hash,zelid:u.value,message:n.value,signature:d.value,vote:e};console.log(a);const s=await J.post("https://stats.runonflux.io/proposals/voteproposal",JSON.stringify(a));console.log(s),"success"===s.data.status?(A("success","Vote registered successfully"),c.value=e?"Yes":"No",p.value=!0,i.value-=1):A("danger",s.data.data.message||s.data.data)},T={chart:{height:200,type:"radialBar",sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[H.j.primary],plotOptions:{radialBar:{offsetY:-10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:H.j.dark,strokeWidth:"70%"},dataLabels:{name:{show:!1},value:{color:H.j.light,fontSize:"2.3rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[H.j.success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}},R={chart:{height:200,type:"radialBar",sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[H.j.primary],labels:["Yes"],plotOptions:{radialBar:{offsetY:-10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:H.j.dark,strokeWidth:"50%"},dataLabels:{name:{offsetY:-15,color:H.j.light,fontSize:"1.5rem"},value:{offsetY:10,color:H.j.light,fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[H.j.success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}};return{perfectScrollbarSettings:D,voteOverviewRadialBar:T,voteBreakdownRadialBar:R,resolveTagVariant:o,timeoptions:K,voteOverview:P,voteBreakdown:B,vote:N,initiateSignWS:k,callbackValueSign:h,myVote:c,haveVoted:p,myNumberOfVotes:l,dataToSign:n,signature:d,hasSignature:v,onError:w,onOpen:x,onClose:S,onMessage:C,userZelid:u}}},et=tt;var at=(0,Z.Z)(et,j,G,!1,null,"0dd5cf0b",null);const st=at.exports;var ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-left"},[e("div",{staticClass:"sidebar"},[e("div",{staticClass:"sidebar-content xdao-sidebar"},[e("div",{staticClass:"xdao-app-menu"},[e("div",{staticClass:"add-task"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary",block:""},on:{click:function(e){t.$emit("close-proposal-view"),t.$emit("close-left-sidebar"),t.$emit("open-add-proposal-view")}}},[t._v(" Add Proposal ")])],1),e("vue-perfect-scrollbar",{staticClass:"sidebar-menu-list scroll-area",attrs:{settings:t.perfectScrollbarSettings}},[e("b-list-group",{staticClass:"list-group-filters"},t._l(t.taskFilters,(function(a){return e("b-list-group-item",{key:a.title+t.$route.path,attrs:{to:a.route,active:t.isDynamicRouteActive(a.route)},on:{click:function(e){t.$emit("close-proposal-view"),t.$emit("close-left-sidebar")}}},[e("feather-icon",{staticClass:"mr-75",attrs:{icon:a.icon,size:"18"}}),e("span",{staticClass:"align-text-bottom line-height-1"},[t._v(t._s(a.title))])],1)})),1)],1)],1)])])])},rt=[],it=a(70322),lt=a(88367);const nt={directives:{Ripple:C.Z},components:{BButton:P.T,BListGroup:it.N,BListGroupItem:lt.f,VuePerfectScrollbar:k()},props:{},setup(){const t={maxScrollbarLength:60},e=[{title:"All Proposals",icon:"MailIcon",route:{name:"xdao-app"}},{title:"Open",icon:"StarIcon",route:{name:"xdao-app-filter",params:{filter:"open"}}},{title:"Passed",icon:"CheckIcon",route:{name:"xdao-app-filter",params:{filter:"passed"}}},{title:"Unpaid",icon:"StarIcon",route:{name:"xdao-app-filter",params:{filter:"unpaid"}}},{title:"Rejected",icon:"TrashIcon",route:{name:"xdao-app-filter",params:{filter:"rejected"}}}];return{perfectScrollbarSettings:t,taskFilters:e,isDynamicRouteActive:w._d}}},ct=nt;var pt=(0,Z.Z)(ct,ot,rt,!1,null,null,null);const dt=pt.exports,ut=a(80129),vt=a(9669),mt=a(63005),bt={components:{BFormInput:r.e,BInputGroup:i.w,BInputGroupPrepend:l.P,BDropdown:n.R,BDropdownItem:c.E,BMedia:p.P,BMediaBody:d.D,BBadge:u.k,BAvatar:v.SH,BProgress:m.D,BProgressBar:b.Q,BTooltip:g.T,AddProposalView:q,ProposalView:st,ProposalSidebar:dt,VuePerfectScrollbar:k(),ToastificationContent:_.Z},directives:{Ripple:C.Z},setup(){const t=(0,f.ref)(null),e=(0,f.ref)(null),a=(0,y.useToast)();(0,f.onBeforeMount)((()=>{const t=localStorage.getItem("zelidauth"),a=ut.parse(t);e.value=a.zelid}));const{showDetailSidebar:s}=(0,x.w)(),{route:o,router:r}=(0,w.tv)(),i=(0,f.computed)((()=>o.value.query.sort)),l=(0,f.computed)((()=>o.value.query.q)),n=(0,f.computed)((()=>o.value.params));(0,f.watch)(n,(()=>{k()}));const c=(0,f.ref)([]),p=["latest","title-asc","title-desc","end-date"],d=(0,f.ref)(i.value);(0,f.watch)(i,(t=>{p.includes(t),d.value=t}));const u=()=>{const t=JSON.parse(JSON.stringify(o.value.query));delete t.sort,r.replace({name:o.name,query:t}).catch((()=>{}))},v=(0,f.ref)({}),m=(t,e,s="InfoIcon")=>{a({component:_.Z,props:{title:e,icon:s,variant:t}})},b=t=>"Open"===t?"warning":"Passed"===t?"success":"Unpaid"===t?"info":t.startsWith("Rejected")?"danger":"primary",g=t=>"Open"===t?"warning":"Passed"===t?"success":"Unpaid"===t?"info":t.startsWith("Rejected")?"danger":"primary",C=(0,f.ref)(l.value);(0,f.watch)(l,(t=>{C.value=t})),(0,f.watch)([C,d],(()=>k()));const S=t=>{const e=JSON.parse(JSON.stringify(o.value.query));t?e.q=t:delete e.q,r.replace({name:o.name,query:e})},k=async()=>{const t=await vt.get("https://stats.runonflux.io/proposals/listProposals");"success"===t.data.status?(c.value=t.data.data,r.currentRoute.params.filter&&("open"===r.currentRoute.params.filter&&(c.value=c.value.filter((t=>"Open"===t.status))),"passed"===r.currentRoute.params.filter&&(c.value=c.value.filter((t=>"Passed"===t.status))),"unpaid"===r.currentRoute.params.filter&&(c.value=c.value.filter((t=>"Unpaid"===t.status))),"rejected"===r.currentRoute.params.filter&&(c.value=c.value.filter((t=>"Rejected"===t.status||"Rejected Unpaid"===t.status||"Rejected Not Enough Votes"===t.status)))),C.value&&(c.value=c.value.filter((t=>!!t.topic.toLowerCase().includes(C.value)||(!!t.description.toLowerCase().includes(C.value)||!!t.nickName.toLowerCase().includes(C.value))))),d.value&&c.value.sort(((t,e)=>"title-asc"===d.value?t.topic.localeCompare(e.topic):"title-desc"===d.value?e.topic.localeCompare(t.topic):"end-date"===d.value?t.voteEndDate-e.voteEndDate:0))):m("danger",t.data.data.message||t.data.data)};k();const V=(0,f.ref)(!1),D=(0,f.ref)(!1),P=t=>{v.value=t,V.value=!0},B={maxScrollbarLength:150};return{zelid:e,proposalListRef:t,timeoptions:mt,proposal:v,handleProposalClick:P,updateRouteQuery:S,searchQuery:C,filteredProposals:c,sortOptions:p,resetSortAndNavigate:u,perfectScrollbarSettings:B,resolveTagVariant:b,resolveAvatarVariant:g,avatarText:h.k3,isProposalViewActive:V,isAddProposalViewActive:D,showDetailSidebar:s}}},gt=bt;var ft=(0,Z.Z)(gt,s,o,!1,null,null,null);const ht=ft.exports},6044:(t,e,a)=>{a.d(e,{w:()=>r});var s=a(20144),o=a(73507);const r=()=>{const t=(0,s.ref)(!1),e=(0,s.computed)((()=>o.Z.getters["app/currentBreakPoint"]));return(0,s.watch)(e,((e,a)=>{"md"===a&&"lg"===e&&(t.value=!1)})),{mqShallShowLeftSidebar:t}}},1923:(t,e,a)=>{a.d(e,{k3:()=>s});a(70560),a(23646);const s=t=>{if(!t)return"";const e=t.split(" ");return e.map((t=>t.charAt(0).toUpperCase())).join("")}},63005:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});const s={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},o={year:"numeric",month:"short",day:"numeric"},r={shortDate:s,date:o}},94452:(t,e,a)=>{t.exports=a.p+"img/zelID.svg"}}]);