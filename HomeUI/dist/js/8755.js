"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[8755],{34547:(t,e,s)=>{s.d(e,{Z:()=>u});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${t.variant}`,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},r=[],i=s(47389);const n={components:{BAvatar:i.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},l=n;var o=s(1001),c=(0,o.Z)(l,a,r,!1,null,"22d964ca",null);const u=c.exports},68755:(t,e,s)=>{s.r(e),s.d(e,{default:()=>Z});var a=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"text-center"},[e("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[e("b-card",{attrs:{title:"Cumulus Rewards"}},[e("b-card-text",[t._v(t._s(t.cumulusCollateral.toLocaleString())+" FLUX Collateral")]),e("app-timeline",{staticClass:"mt-2"},[e("app-timeline-item",[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek/7))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(.1*t.cumulusWeek*t.activeParallelAssets/7))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Day")])])]),e("app-timeline-item",[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(.1*t.cumulusWeek*t.activeParallelAssets))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Week")])])]),e("app-timeline-item",[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek*t.weeksInAMonth))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.cumulusWeek*t.weeksInAMonth*.1*t.activeParallelAssets))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Month")])])])],1)],1)],1),e("b-col",{attrs:{sm:"12",md:"6",lg:"4"}},[e("b-card",{attrs:{title:"Nimbus Rewards"}},[e("b-card-text",[t._v(t._s(t.nimbusCollateral.toLocaleString())+" FLUX Collateral")]),e("app-timeline",{staticClass:"mt-2"},[e("app-timeline-item",{attrs:{variant:"warning"}},[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek/7))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(.1*t.nimbusWeek*t.activeParallelAssets/7))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Day")])])]),e("app-timeline-item",{attrs:{variant:"warning"}},[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(.1*t.nimbusWeek*t.activeParallelAssets))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Week")])])]),e("app-timeline-item",{attrs:{variant:"warning"}},[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek*t.weeksInAMonth))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.nimbusWeek*t.weeksInAMonth*.1*t.activeParallelAssets))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Month")])])])],1)],1)],1),e("b-col",{attrs:{sm:"12",md:"12",lg:"4"}},[e("b-card",{attrs:{title:"Stratus Rewards"}},[e("b-card-text",[t._v(t._s(t.stratusCollateral.toLocaleString())+" FLUX Collateral")]),e("app-timeline",{staticClass:"mt-2"},[e("app-timeline-item",{attrs:{variant:"danger"}},[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek/7))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(.1*t.stratusWeek*t.activeParallelAssets/7))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Day")])])]),e("app-timeline-item",{attrs:{variant:"danger"}},[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(.1*t.stratusWeek*t.activeParallelAssets))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Week")])])]),e("app-timeline-item",{attrs:{variant:"danger"}},[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("div",[e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek*t.weeksInAMonth))+" FLUX ")]),e("small",{staticClass:"mt-0"},[t._v("+")]),e("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.beautifyValue(t.stratusWeek*t.weeksInAMonth*.1*t.activeParallelAssets))+" FLUX Tokens ")])]),e("small",{staticClass:"text-muted"},[t._v("Per Month")])])])],1)],1)],1)],1),e("b-overlay",{attrs:{show:t.loadingPrice,variant:"transparent",blur:"5px"}},[e("b-card",{attrs:{"no-body":""}},[e("b-card-body",[e("h4",[t._v(" Historical Price Chart ")])]),e("vue-apex-charts",{attrs:{type:"area",height:"250",width:"100%",options:t.lineChart.chartOptions,series:t.lineChart.series}})],1)],1)],1)},r=[],i=(s(70560),s(23215)),n=s(64206),l=s(19279),o=s(26253),c=s(50725),u=s(66126),m=function(){var t=this,e=t._self._c;return e("ul",t._g(t._b({staticClass:"app-timeline"},"ul",t.$attrs,!1),t.$listeners),[t._t("default")],2)},d=[];const f={},b=f;var p=s(1001),h=(0,p.Z)(b,m,d,!1,null,"1fc4912e",null);const y=h.exports;var x=function(){var t=this,e=t._self._c;return e("li",t._g(t._b({staticClass:"timeline-item",class:[`timeline-variant-${t.variant}`,t.fillBorder?`timeline-item-fill-border-${t.variant}`:null]},"li",t.$attrs,!1),t.$listeners),[t.icon?e("div",{staticClass:"timeline-item-icon d-flex align-items-center justify-content-center rounded-circle"},[e("feather-icon",{attrs:{icon:t.icon}})],1):e("div",{staticClass:"timeline-item-point"}),t._t("default",(function(){return[e("div",{staticClass:"d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0"},[e("h6",{domProps:{textContent:t._s(t.title)}}),e("small",{staticClass:"timeline-item-time text-nowrap text-muted",domProps:{textContent:t._s(t.time)}})]),e("p",{staticClass:"mb-0",domProps:{textContent:t._s(t.subtitle)}})]}))],2)},v=[];const g={props:{variant:{type:String,default:"primary"},title:{type:String,default:null},subtitle:{type:String,default:null},time:{type:String,default:null},icon:{type:String,default:null},fillBorder:{type:Boolean,default:!1}}},C=g;var _=(0,p.Z)(C,x,v,!1,null,"384df2b1",null);const k=_.exports;var w=s(34547),R=s(20266),A=s(67166),P=s.n(A),F=s(68934),U=s(51136),T=s(20702);const W=s(38181),D=s(9669),L={components:{BCard:i._,BCardText:n.j,BCardBody:l.O,BRow:o.T,BCol:c.l,BOverlay:u.X,AppTimeline:y,AppTimelineItem:k,VueApexCharts:P(),ToastificationContent:w.Z},directives:{Ripple:R.Z},data(){return{interceptorID:0,cumulusHostingCost:11,nimbusHostingCost:25,stratusHostingCost:52,weeksInAMonth:4.34812141,loadingPrice:!0,historicalPrices:[],cumulusWeek:0,nimbusWeek:0,stratusWeek:0,cumulusUSDRewardWeek:0,nimbusUSDRewardWeek:0,stratusUSDRewardWeek:0,cumulusCollateral:0,nimbusCollateral:0,stratusCollateral:0,latestPrice:0,lineChart:{series:[],chartOptions:{colors:[F.j.primary],labels:["Price"],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0},stacked:!0},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:0}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:t=>new Date(t).toLocaleString("en-GB",this.timeoptions)},y:{formatter:t=>`$${this.beautifyValue(t,2)} USD`}}}},retryOptions:{raxConfig:{onRetryAttempt:t=>{const e=W.getConfig(t);console.log(`Retry attempt #${e.currentRetryAttempt}`)}}},activeParallelAssets:7}},mounted(){this.interceptorID=W.attach(),this.getData(),setInterval((()=>{this.getData()}),6e5)},unmounted(){W.detach(this.interceptorID)},methods:{async getData(){T.Z.getScannedHeight().then((t=>{if("success"===t.data.status){const e=t.data.data.generalScannedHeight;this.cumulusCollateral=e<1076532?1e4:1e3,this.nimbusCollateral=e<1081572?25e3:12500,this.stratusCollateral=e<1087332?1e5:4e4}this.getRates()})),this.getPriceData(),this.getActiveParallelAssets()},async getActiveParallelAssets(){D.get("https://fusion.runonflux.io/fees",this.retryOptions).then((t=>{const{data:e}=t;if("success"===e.status){delete e.data.snapshot.percentage;const t=Object.keys(e.data.snapshot).length;this.activeParallelAssets=t}}))},async getRates(){D.get("https://vipdrates.zelcore.io/rates",this.retryOptions).then((t=>{this.rates=t.data,this.getFluxNodeCount()}))},async getPriceData(){const t=this;this.loadingPrice=!0,D.get("https://api.coingecko.com/api/v3/coins/zelcash/market_chart?vs_currency=USD&days=30",this.retryOptions).then((e=>{t.historicalPrices=e.data.prices.filter((t=>t[0]>14832324e5));const s=[];for(let a=0;a<t.historicalPrices.length;a+=3){const e=t.historicalPrices[a];s.push(e),this.latestPrice=e[1]}t.lineChart.series=[{name:"Price",data:s}],this.loadingPrice=!1}))},async getFluxNodeCount(){const t=await U.Z.fluxnodeCount();if("error"===t.data.status)this.$toast({component:w.Z,props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}});else{const e=t.data.data,s={};s["stratus-enabled"]=e["stratus-enabled"],s["bamf-enabled"]=e["stratus-enabled"],e["cumulus-enabled"]>e["nimbus-enabled"]?(s["nimbus-enabled"]=e["nimbus-enabled"],s["super-enabled"]=e["nimbus-enabled"],s["cumulus-enabled"]=e["cumulus-enabled"],s["basic-enabled"]=e["cumulus-enabled"]):(s["nimbus-enabled"]=e["cumulus-enabled"],s["super-enabled"]=e["cumulus-enabled"],s["cumulus-enabled"]=e["nimbus-enabled"],s["basic-enabled"]=e["nimbus-enabled"]),this.generateEconomics(s)}},async generateEconomics(t){let e=2.8125,s=4.6875,a=11.25;const r=await U.Z.blockReward();"error"===r.data.status?this.$toast({component:w.Z,props:{title:r.data.data.message||r.data.data,icon:"InfoIcon",variant:"danger"}}):(e=(.075*r.data.data.miner).toFixed(4),s=(.125*r.data.data.miner).toFixed(4),a=(.3*r.data.data.miner).toFixed(4));const i=t["stratus-enabled"],n=t["nimbus-enabled"],l=t["cumulus-enabled"],o=720*e*7/l,c=720*s*7/n,u=720*a*7/i,m=this.getFiatRate("FLUX")*e,d=this.getFiatRate("FLUX")*s,f=this.getFiatRate("FLUX")*a,b=5040*m/l,p=5040*d/n,h=5040*f/i;this.cumulusWeek=o,this.nimbusWeek=c,this.stratusWeek=u,this.cumulusUSDRewardWeek=b,this.nimbusUSDRewardWeek=p,this.stratusUSDRewardWeek=h},getFiatRate(t){const e="USD";let s=this.rates[0].find((t=>t.code===e));void 0===s&&(s={rate:0});let a=this.rates[1][t];void 0===a&&(a=0);const r=s.rate*a;return r},beautifyValue(t){const e=t.toFixed(2);return e.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},S=L;var X=(0,p.Z)(S,a,r,!1,null,null,null);const Z=X.exports},51136:(t,e,s)=>{s.d(e,{Z:()=>r});var a=s(80914);const r={listFluxNodes(){return(0,a.Z)().get("/daemon/listzelnodes")},fluxnodeCount(){return(0,a.Z)().get("/daemon/getzelnodecount")},blockReward(){return(0,a.Z)().get("/daemon/getblocksubsidy")}}},20702:(t,e,s)=>{s.d(e,{Z:()=>r});var a=s(80914);const r={getAddressBalance(t){return(0,a.Z)().get(`/explorer/balance/${t}`)},getAddressTransactions(t){return(0,a.Z)().get(`/explorer/transactions/${t}`)},getFluxTransactions(t){return(0,a.Z)().get(`/explorer/fluxtxs/${t}`)},getScannedHeight(){return(0,a.Z)().get("/explorer/scannedheight")},reindexExplorer(t){return(0,a.Z)().get("/explorer/reindex/false",{headers:{zelidauth:t}})},reindexFlux(t){return(0,a.Z)().get("/explorer/reindex/true",{headers:{zelidauth:t}})},rescanExplorer(t,e){return(0,a.Z)().get(`/explorer/rescan/${e}/false`,{headers:{zelidauth:t}})},rescanFlux(t,e){return(0,a.Z)().get(`/explorer/rescan/${e}/true`,{headers:{zelidauth:t}})},restartBlockProcessing(t){return(0,a.Z)().get("/explorer/restart",{headers:{zelidauth:t}})},stopBlockProcessing(t){return(0,a.Z)().get("/explorer/stop",{headers:{zelidauth:t}})}}},38181:(t,e,s)=>{s.r(e),s.d(e,{attach:()=>r,detach:()=>i,getConfig:()=>m,shouldRetryRequest:()=>u});var a=s(9669);function r(t){return t=t||a,t.interceptors.response.use(n,(async e=>c(t,e)))}function i(t,e){e=e||a,e.interceptors.response.eject(t)}function n(t){return t}function l(t){const e=[];if(t){if(Array.isArray(t))return t;if("object"===typeof t)for(const s of Object.keys(t)){const a=Number.parseInt(s,10);Number.isNaN(a)||(e[a]=t[s])}return e}}function o(t){const e=Number(t);if(!Number.isNaN(e))return 1e3*e;const s=Date.parse(t);return Number.isNaN(s)?void 0:s-Date.now()}async function c(t,e){if((0,a.isCancel)(e))throw e;const s=m(e)||{};s.currentRetryAttempt=s.currentRetryAttempt||0,s.retry="number"===typeof s.retry?s.retry:3,s.retryDelay="number"===typeof s.retryDelay?s.retryDelay:100,s.instance=s.instance||t,s.backoffType=s.backoffType||"exponential",s.httpMethodsToRetry=l(s.httpMethodsToRetry)||["GET","HEAD","PUT","OPTIONS","DELETE"],s.noResponseRetries="number"===typeof s.noResponseRetries?s.noResponseRetries:2,s.checkRetryAfter="boolean"!==typeof s.checkRetryAfter||s.checkRetryAfter,s.maxRetryAfter="number"===typeof s.maxRetryAfter?s.maxRetryAfter:3e5;const r=[[100,199],[429,429],[500,599]];s.statusCodesToRetry=l(s.statusCodesToRetry)||r;const i=e;i.config=i.config||{},i.config.raxConfig={...s};const n=s.shouldRetry||u;if(!n(i))throw i;const c=new Promise(((t,e)=>{let a=0;if(s.checkRetryAfter&&i.response?.headers["retry-after"]){const t=o(i.response.headers["retry-after"]);if(!(t&&t>0&&t<=s.maxRetryAfter))return void e(i);a=t}i.config.raxConfig.currentRetryAttempt+=1;const r=i.config.raxConfig.currentRetryAttempt;0===a&&(a="linear"===s.backoffType?1e3*r:"static"===s.backoffType?s.retryDelay:(2**r-1)/2*1e3,"number"===typeof s.maxRetryDelay&&(a=Math.min(a,s.maxRetryDelay))),setTimeout(t,a)}));s.onRetryAttempt&&s.onRetryAttempt(i);const d=Promise.resolve();return Promise.resolve().then((async()=>c)).then((async()=>d)).then((async()=>s.instance.request(i.config)))}function u(t){const e=t.config.raxConfig;if(!e||0===e.retry)return!1;if(!t.response&&(e.currentRetryAttempt||0)>=e.noResponseRetries)return!1;if(!t.config?.method||!e.httpMethodsToRetry.includes(t.config.method.toUpperCase()))return!1;if(t.response?.status){let s=!1;for(const[a,r]of e.statusCodesToRetry){const{status:e}=t.response;if(e>=a&&e<=r){s=!0;break}}if(!s)return!1}return e.currentRetryAttempt=e.currentRetryAttempt||0,!(e.currentRetryAttempt>=e.retry)}function m(t){if(t?.config)return t.config.raxConfig}}}]);