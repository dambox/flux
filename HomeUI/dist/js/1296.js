"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[1296],{43192:(e,t,a)=>{a.r(t),a.d(t,{default:()=>pa});var n={};a.r(n),a.d(n,{_:()=>qe,t:()=>We});var r=function(){var e=this,t=e._self._c;return t("layout-vertical",{scopedSlots:e._u([{key:"navbar",fn:function({toggleVerticalMenuActive:e}){return[t("navbar",{attrs:{"toggle-vertical-menu-active":e}})]}}])},[t("router-view")],1)},o=[],i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vertical-layout h-100",class:[e.layoutClasses],attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[t("b-navbar",{staticClass:"header-navbar navbar navbar-shadow align-items-center",class:[e.navbarTypeClass],attrs:{toggleable:!1,variant:e.navbarBackgroundColor}},[e._t("navbar",(function(){return[t("app-navbar-vertical-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,navbarBackgroundColor:e.navbarBackgroundColor,navbarTypeClass:[...e.navbarTypeClass,"header-navbar navbar navbar-shadow align-items-center"]})],2),e.isNavMenuHidden?e._e():t("vertical-nav-menu",{attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)}),t("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),t("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[t(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),t("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[t("app-footer")]}))],2),e._t("customizer")],2)},l=[],s=a(20144),c=function(){var e=this,t=e._self._c;return t("p",{staticClass:"clearfix mb-0"},[t("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[t("b-link",{staticClass:"ml-25",attrs:{href:"https://github.com/runonflux/flux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flux, Your Gateway to a Decentralized World")])],1),t("span",{staticClass:"float-md-right d-none d-md-block"},[e._v("FluxOS "+e._s(`v${e.fluxVersion}`)+" ")])])},u=[],d=a(20629),p=a(67347),m=a(9669),v=a.n(m),g=a(34547),h=a(39055);const f={components:{BLink:p.we,ToastificationContent:g.Z},computed:{...(0,d.rn)("flux",["fluxVersion"])},mounted(){const e=this;h.Z.getFluxVersion().then((t=>{const a=t.data.data;this.$store.commit("flux/setFluxVersion",a),e.getLatestFluxVersion()})).catch((e=>{console.log(e),console.log(e.code),this.showToast("danger",e.toString())}))},methods:{getLatestFluxVersion(){const e=this;v().get("https://raw.githubusercontent.com/runonflux/flux/master/package.json").then((t=>{t.data.version!==e.fluxVersion?this.showToast("danger","Flux needs to be updated!"):this.showToast("success","Flux is up to date")})).catch((e=>{console.log(e),this.showToast("danger","Error verifying recent version")}))},showToast(e,t){this.$toast({component:g.Z,props:{title:t,icon:"BellIcon",variant:e}})}}},b=f;var x=a(1001),k=(0,x.Z)(b,c,u,!1,null,null,null);const C=k.exports;var w=a(37307),y=a(71603),M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[t("div",{staticClass:"content-overlay"}),t("div",{staticClass:"header-navbar-shadow"}),t("div",{staticClass:"content-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[t("app-breadcrumb")]})),t("div",{staticClass:"content-body"},[t("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[e._t("default")],2)],1)],2)])},_=[],I=function(){var e=this,t=e._self._c;return e.$route.meta.breadcrumb||e.$route.meta.pageTitle?t("b-row",{staticClass:"content-header"},[t("b-col",{staticClass:"content-header-left mb-2",attrs:{cols:"12",md:"9"}},[t("b-row",{staticClass:"breadcrumbs-top"},[t("b-col",{attrs:{cols:"12"}},[t("h2",{staticClass:"content-header-title float-left pr-1 mb-0"},[e._v(" "+e._s(e.$route.meta.pageTitle)+" ")]),t("div",{staticClass:"breadcrumb-wrapper"},[t("b-breadcrumb",[t("b-breadcrumb-item",{attrs:{to:"/"}},[t("feather-icon",{staticClass:"align-text-top",attrs:{icon:"HomeIcon",size:"16"}})],1),e._l(e.$route.meta.breadcrumb,(function(a){return t("b-breadcrumb-item",{key:a.text,attrs:{active:a.active,to:a.to}},[e._v(" "+e._s(a.text)+" ")])}))],2)],1)])],1)],1)],1):e._e()},Z=[],B=a(74825),A=a(99729),T=a(26253),L=a(50725),V=a(20266);const S={directives:{Ripple:V.Z},components:{BBreadcrumb:B.P,BBreadcrumbItem:A.g,BRow:T.T,BCol:L.l}},O=S;var N=(0,x.Z)(O,I,Z,!1,null,null,null);const P=N.exports,$={components:{AppBreadcrumb:P},setup(){const{routerTransition:e,contentWidth:t}=(0,w.Z)();return{routerTransition:e,contentWidth:t}}},z=$;var D=(0,x.Z)(z,M,_,!1,null,null,null);const R=D.exports;var F=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[t("div",{staticClass:"content-overlay"}),t("div",{staticClass:"header-navbar-shadow"}),t("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[t("div",{staticClass:"content-area-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[t("app-breadcrumb")]})),t("portal-target",{attrs:{name:"content-renderer-sidebar-left",slim:""}}),t("div",{staticClass:"content-right"},[t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"content-body"},[e._t("default")],2)])])],2)])],1)},j=[];const G={components:{AppBreadcrumb:P},setup(){const{routerTransition:e,contentWidth:t}=(0,w.Z)();return{routerTransition:e,contentWidth:t}}},H=G;var E=(0,x.Z)(H,F,j,!1,null,null,null);const U=E.exports;var W=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[t("div",{staticClass:"content-overlay"}),t("div",{staticClass:"header-navbar-shadow"}),t("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[t("div",{staticClass:"content-wrapper clearfix",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[t("app-breadcrumb")]})),t("div",{staticClass:"content-detached content-right"},[t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"content-body"},[e._t("default")],2)])]),t("portal-target",{attrs:{name:"content-renderer-sidebar-detached-left",slim:""}})],2)])],1)},q=[];const X={components:{AppBreadcrumb:P},setup(){const{routerTransition:e,contentWidth:t}=(0,w.Z)();return{routerTransition:e,contentWidth:t}}},K=X;var J=(0,x.Z)(K,W,q,!1,null,null,null);const Y=J.exports;var Q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-menu menu-fixed menu-accordion menu-shadow",class:[{expanded:!e.isVerticalMenuCollapsed||e.isVerticalMenuCollapsed&&e.isMouseHovered},"semi-dark"===e.skin?"menu-dark":"menu-light"],on:{mouseenter:function(t){return e.updateMouseHovered(!0)},mouseleave:function(t){return e.updateMouseHovered(!1)},focus:function(t){return e.updateMouseHovered(!0)},blur:function(t){return e.updateMouseHovered(!1)}}},[t("div",{staticClass:"navbar-header expanded"},[e._t("header",(function(){return[t("ul",{staticClass:"nav navbar-nav flex-row"},[t("li",{staticClass:"nav-item mr-auto"},[t("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t("span",{staticClass:"brand-logo"},[t("b-img",{class:e.isVerticalMenuCollapsed?"collapsed-logo":"",attrs:{src:"dark"===e.skin?e.appLogoImageDark:e.appLogoImage,alt:"logo"}})],1)])],1),t("li",{staticClass:"nav-item nav-toggle"},[t("b-link",{staticClass:"nav-link modern-nav-toggle"},[t("feather-icon",{staticClass:"d-block d-xl-none",attrs:{icon:"XIcon",size:"20"},on:{click:e.toggleVerticalMenuActive}}),t("feather-icon",{staticClass:"d-none d-xl-block collapse-toggle-icon",attrs:{icon:e.collapseTogglerIconFeather,size:"20"},on:{click:e.toggleCollapsed}})],1)],1)])]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,toggleCollapsed:e.toggleCollapsed,collapseTogglerIcon:e.collapseTogglerIcon})],2),t("div",{staticClass:"shadow-bottom",class:{"d-block":e.shallShadowBottom}}),t("vue-perfect-scrollbar",{staticClass:"main-menu-content scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"ul"},on:{"ps-scroll-y":t=>{e.shallShadowBottom=t.srcElement.scrollTop>0}}},[t("vertical-nav-menu-items",{key:e.isNavMenuCollapsed,staticClass:"navigation navigation-main",attrs:{items:e.isNavMenuCollapsed?e.navMenuItemsCollapsed:e.navMenuItems}})],1)],1)},ee=[],te=a(91040),ae=a.n(te),ne=a(98156),re=a(68934);const oe=[{header:"Dashboard"},{title:"Overview",icon:"chart-pie",route:"dashboard-overview"},{title:"Resources",icon:"server",route:"dashboard-resources"},{title:"Map",icon:"map-marker-alt",route:"dashboard-map"},{title:"Rewards",icon:"coins",route:"dashboard-rewards"},{title:"List",icon:"list-ul",route:"dashboard-list"}],ie=[{title:"Control",icon:"tools",children:[{title:"Get Info",icon:"info",route:"daemon-control-getinfo"},{title:"Help",icon:"question",route:"daemon-control-help"},{title:"Rescan Blockchain",icon:"search-plus",route:"daemon-control-rescanblockchain",privilege:["admin"]},{title:"Reindex Blockchain",icon:"address-book",route:"daemon-control-reindexblockchain",privilege:["admin"]},{title:"Start",icon:"play",route:"daemon-control-start",privilege:["admin","fluxteam"]},{title:"Stop",icon:"power-off",route:"daemon-control-stop",privilege:["admin"]},{title:"Restart",icon:"redo",route:"daemon-control-restart",privilege:["admin","fluxteam"]}]}],le=[{title:"FluxNode",icon:"dice-d20",children:[{title:"Get FluxNode Status",icon:"info",route:"daemon-fluxnode-getstatus"},{title:"List FluxNodes",icon:"list-ul",route:"daemon-fluxnode-listfluxnodes"},{title:"View FluxNode List",icon:"regular/list-alt",route:"daemon-fluxnode-viewfluxnodelist"},{title:"Get FluxNode Count",icon:"layer-group",route:"daemon-fluxnode-getfluxnodecount"},{title:"Get Start List",icon:"play",route:"daemon-fluxnode-getstartlist"},{title:"Get DOS List",icon:"hammer",route:"daemon-fluxnode-getdoslist"},{title:"Current Winner",icon:"trophy",route:"daemon-fluxnode-currentwinner"}]}],se=[{title:"Benchmarks",icon:"microchip",id:"daemon-benchmarks",children:[{title:"Get Benchmarks",icon:"calculator",route:"daemon-benchmarks-getbenchmarks"},{title:"Get Bench Status",icon:"tachometer-alt",route:"daemon-benchmarks-getstatus"},{title:"Start Benchmark",icon:"play",route:"daemon-benchmarks-start",privilege:["admin","fluxteam"]},{title:"Stop Benchmark",icon:"power-off",route:"daemon-benchmarks-stop",privilege:["admin","fluxteam"]}]}],ce=[{title:"Get Blockchain Info",icon:"link",route:"daemon-blockchain-getchaininfo"}],ue=[{title:"Get Mining Info",icon:"gem",route:"daemon-mining-getmininginfo"}],de=[{title:"Get Network Info",icon:"network-wired",route:"daemon-network-getnetworkinfo"}],pe=[{title:"Get Raw Transaction",icon:"code",route:"daemon-transaction-getrawtransaction"}],me=[{title:"Validate Address",icon:"check-double",route:"daemon-util-validateaddress"}],ve=[{title:"Get Wallet Info",icon:"wallet",route:"daemon-wallet-getwalletinfo",privilege:["user","admin","fluxteam"]}],ge=[{header:"Daemon"},...ie,...le,...se,...ce,...ue,...de,...pe,...me,...ve,{title:"Debug",icon:"bug",route:"daemon-debug",id:"daemon-debug",privilege:["admin","fluxteam"]}],he=[{title:"Control",icon:"tools",id:"benchmark-control",children:[{title:"Help",icon:"question",route:"benchmark-control-help"},{title:"Start",icon:"play",route:"benchmark-control-start",privilege:["admin","fluxteam"]},{title:"Stop",icon:"power-off",route:"benchmark-control-stop",privilege:["admin"]},{title:"Restart",icon:"redo",route:"benchmark-control-restart",privilege:["admin","fluxteam"]}]}],fe=[{title:"FluxNode",icon:"dice-d20",id:"benchmark-fluxnode",children:[{title:"Get Benchmarks",icon:"calculator",route:"benchmark-fluxnode-getbenchmarks"},{title:"Get Info",icon:"info",route:"benchmark-fluxnode-getinfo"}]}],be=[{title:"Benchmarks",icon:"microchip",children:[{title:"Get Status",icon:"tachometer-alt",route:"benchmark-benchmarks-getstatus"},{title:"Restart Benchmarks",icon:"redo",route:"benchmark-benchmarks-restartbenchmarks",privilege:["admin","fluxteam"]},{title:"Sign Transaction",icon:"bolt",route:"benchmark-benchmarks-signtransaction",privilege:["admin"]}]}],xe=[{header:"Benchmark"},...he,...fe,...be,{title:"Debug",icon:"bug",route:"benchmark-debug",id:"benchmark-debug",privilege:["admin","fluxteam"]}],ke=[{header:"Flux"},{title:"Node Status",icon:"heartbeat",route:"flux-nodestatus"},{title:"Flux Network",icon:"network-wired",route:"flux-fluxnetwork"},{title:"Debug",icon:"bug",route:"flux-debug",privilege:["admin","fluxteam"]}],Ce=[{header:"Apps"},{title:"Local Apps",icon:"upload",route:"apps-localapps"},{title:"Global Apps",icon:"globe",route:"apps-globalapps"},{title:"Register Flux App",icon:"regular/plus-square",route:"apps-registerapp"},{title:"My FluxShare",icon:"regular/hdd",route:"apps-fluxsharestorage",privilege:["admin"]}],we=[{header:"Flux Admin",privilege:["user","admin","fluxteam"]},{title:"Logged Sessions",icon:"regular/id-badge",route:"fluxadmin-loggedsessions",privilege:["admin","fluxteam"]},{title:"Manage Flux",icon:"dice-d20",route:"fluxadmin-manageflux",privilege:["admin","fluxteam"]},{title:"Manage Daemon",icon:"cog",route:"fluxadmin-managedaemon",privilege:["admin","fluxteam"]},{title:"Manage Benchmark",icon:"microchip",route:"fluxadmin-managebenchmark",privilege:["admin","fluxteam"]},{title:"Manage Users",icon:"fingerprint",route:"fluxadmin-manageusers",privilege:["admin","fluxteam"]}],{xdaoOpenProposals:ye}=(0,w.Z)(),Me=[{header:"XDAO"},{title:"XDAO ",icon:"clipboard-list",tag:ye,route:"xdao-app"}],_e=[{header:"Marketplace"},{title:"Marketplace",icon:"shopping-basket",route:"apps-marketplace"}],Ie=[{title:"Home",route:"home",icon:"home"},{title:"Explorer",route:"explorer",icon:"search"},...oe,...ge,...xe,...ke,...Ce,..._e,...we,...Me],Ze=[{title:"Dashboard",icon:"desktop",spacing:!0,children:[{title:"Overview",icon:"chart-pie",route:"dashboard-overview"},{title:"Resources",icon:"server",route:"dashboard-resources"},{title:"Map",icon:"map-marker-alt",route:"dashboard-map"},{title:"Rewards",icon:"coins",route:"dashboard-rewards"},{title:"List",icon:"list-ul",route:"dashboard-list"}]}],Be=[{title:"Daemon",icon:"bolt",spacing:!0,children:[...ie,...le,...se,...ce,...ue,...de,...pe,...me,...ve,{title:"Debug",icon:"bug",route:"daemon-debug",id:"daemon-debug",privilege:["admin","fluxteam"]}]}],Ae=[{title:"Benchmark",icon:"wrench",spacing:!0,children:[...he,...fe,...be,{title:"Debug",icon:"bug",route:"benchmark-debug",id:"benchmark-debug",privilege:["admin","fluxteam"]}]}],Te=a(25448),Le=[{title:"Flux",image:Te,spacing:!0,children:[{title:"Node Status",icon:"heartbeat",route:"flux-nodestatus"},{title:"Flux Network",icon:"network-wired",route:"flux-fluxnetwork"},{title:"Debug",icon:"bug",route:"flux-debug",privilege:["admin","fluxteam"]}]}],Ve=[{title:"Apps",icon:"laptop-code",spacing:!0,children:[{title:"Local Apps",icon:"upload",route:"apps-localapps"},{title:"Global Apps",icon:"globe",route:"apps-globalapps"},{title:"Register Flux App",icon:"regular/plus-square",route:"apps-registerapp"},{title:"My FluxShare",icon:"regular/hdd",route:"apps-fluxsharestorage",privilege:["admin"]}]}],Se=[{title:"Marketplace",icon:"shopping-basket",spacing:!0,children:[{title:"Marketplace",icon:"shopping-basket",route:"apps-marketplace"}]}],Oe=[{title:"Flux Admin",icon:"clipboard-list",spacing:!0,privilege:["user","admin","fluxteam"],children:[{title:"Logged Sessions",icon:"regular/id-badge",route:"fluxadmin-loggedsessions",privilege:["admin","fluxteam"]},{title:"Manage Flux",icon:"dice-d20",route:"fluxadmin-manageflux",privilege:["admin","fluxteam"]},{title:"Manage Daemon",icon:"cog",route:"fluxadmin-managedaemon",privilege:["admin","fluxteam"]},{title:"Manage Benchmark",icon:"microchip",route:"fluxadmin-managebenchmark",privilege:["admin","fluxteam"]},{title:"Manage Users",icon:"fingerprint",route:"fluxadmin-manageusers",privilege:["admin","fluxteam"]}]}],{xdaoOpenProposals:Ne}=(0,w.Z)(),Pe=[{title:"XDAO",icon:"id-card",tag:Ne,spacing:!0,children:[{title:"XDAO ",icon:"clipboard-list",route:"xdao-app"}]}],$e=[{title:"Home",route:"home",icon:"home"},{title:"Explorer",route:"explorer",icon:"search"},...Ze,...Be,...Ae,...Le,...Ve,...Se,...Oe,...Pe];var ze=function(){var e=this,t=e._self._c;return t("ul",e._l(e.items,(function(a){return t(e.resolveNavItemComponent(a),{key:a.id||a.header||a.title,tag:"component",attrs:{item:a}})})),1)},De=[],Re=a(23646),Fe=a(24019);const je=e=>e.header?"vertical-nav-menu-header":e.children?"vertical-nav-menu-group":"vertical-nav-menu-link",Ge=e=>{if((0,Re.Kn)(e.route)){const{route:t}=Fe.Z.resolve(e.route);return t.name}return e.route},He=e=>{const t=Fe.Z.currentRoute.matched,a=Ge(e);return!!a&&t.some((e=>e.name===a||e.meta.navActiveLink===a))},Ee=e=>{const t=Fe.Z.currentRoute.matched;return e.some((e=>e.children?Ee(e.children):He(e,t)))},Ue=e=>(0,s.computed)((()=>{const t={};return e.route?t.to="string"===typeof e.route?{name:e.route}:e.route:(t.href=e.href,t.target="_blank",t.rel="nofollow"),t.target||(t.target=e.target||null),t})),We=e=>{const t=(0,s.getCurrentInstance)().proxy;return t.$t?t.$t(e):e},qe=null,Xe=()=>({...n}),{t:Ke}=Xe(),Je={props:{item:{type:Object,required:!0}},computed:{...(0,d.rn)("flux",["privilege"])},methods:{hasPrivilegeLevel(e){return!e.privilege||e.privilege.some((e=>e===this.privilege))}},render(e){if(this.hasPrivilegeLevel(this.item)){const t=e("span",{},Ke(this.item.header));return e("li",{class:"navigation-header text-truncate"},[t])}return e()}};var Ye=function(){var e=this,t=e._self._c;return e.hasPrivilegeLevel(e.item)?t("li",{staticClass:"nav-item",class:{active:e.isActive,disabled:e.item.disabled}},[t("b-link",e._b({staticClass:"d-flex align-items-center"},"b-link",e.linkProps,!1),[t("v-icon",{attrs:{name:e.item.icon||"regular/circle"}}),t("span",{staticClass:"menu-title text-truncate"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag&&e.item.tag.value>0?t("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag.value)+" ")]):e._e()],1)],1):e._e()},Qe=[],et=a(26034);function tt(e){const t=(0,s.ref)(!1),a=Ue(e),n=()=>{t.value=He(e)};return{isActive:t,linkProps:a,updateIsActive:n}}const at={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},nt={components:{BLink:p.we,BBadge:et.k},mixins:[at],props:{item:{type:Object,required:!0}},setup(e){const{isActive:t,linkProps:a,updateIsActive:n}=tt(e.item),{t:r}=Xe();return{isActive:t,linkProps:a,updateIsActive:n,t:r}},computed:{...(0,d.rn)("flux",["privilege"])},methods:{hasPrivilegeLevel(e){return!e.privilege||e.privilege.some((e=>e===this.privilege))}}},rt=nt;var ot=(0,x.Z)(rt,Ye,Qe,!1,null,null,null);const it=ot.exports;var lt=function(){var e=this,t=e._self._c;return e.hasPrivilegeLevel(e.item)?t("li",{staticClass:"nav-item has-sub",class:{open:e.isOpen,disabled:e.item.disabled,"sidebar-group-active":e.isActive,"sidebar-group-spacing":e.item.spacing}},[t("b-link",{staticClass:"d-flex align-items-center",on:{click:()=>e.updateGroupOpen(!e.isOpen)}},[e.item.icon?t("v-icon",{attrs:{name:e.item.icon||"regular/circle"}}):e._e(),e.item.image?t("b-img",{staticClass:"sidebar-menu-image",attrs:{src:e.item.image}}):e._e(),t("span",{staticClass:"menu-title text-truncate"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag&&e.item.tag.value>0?t("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag.value)+" ")]):e._e()],1),t("b-collapse",{staticClass:"menu-content",attrs:{tag:"ul"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},e._l(e.item.children,(function(a){return t(e.resolveNavItemComponent(a),{key:a.header||a.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:a}})})),1)],1):e._e()},st=[],ct=a(11688),ut=(a(70560),a(73507));function dt(e){const t=(0,s.computed)((()=>ut.Z.state.verticalMenu.isVerticalMenuCollapsed));(0,s.watch)(t,(e=>{a.value||(e?r.value=!1:!e&&i.value&&(r.value=!0))}));const a=(0,s.inject)("isMouseHovered");(0,s.watch)(a,(e=>{t.value&&(r.value=e&&i.value)}));const n=(0,s.inject)("openGroups");(0,s.watch)(n,(t=>{const a=t[t.length-1];a===e.title||i.value||c(a)||(r.value=!1)}));const r=(0,s.ref)(!1);(0,s.watch)(r,(t=>{t&&n.value.push(e.title)}));const o=e=>{r.value=e},i=(0,s.ref)(!1);(0,s.watch)(i,(e=>{e&&t.value||(r.value=e)}));const l=()=>{i.value=Ee(e.children)},c=t=>e.children.some((e=>e.title===t));return{isOpen:r,isActive:i,updateGroupOpen:o,openGroups:n,isMouseHovered:a,updateIsActive:l}}const pt={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},mt={name:"VerticalNavMenuGroup",components:{VerticalNavMenuHeader:Je,VerticalNavMenuLink:it,BLink:p.we,BBadge:et.k,BCollapse:ct.k,BImg:ne.s},mixins:[pt],props:{item:{type:Object,required:!0}},setup(e){const{isOpen:t,isActive:a,updateGroupOpen:n,updateIsActive:r}=dt(e.item),{t:o}=Xe();return{resolveNavItemComponent:je,isOpen:t,isActive:a,updateGroupOpen:n,updateIsActive:r,t:o}},computed:{...(0,d.rn)("flux",["privilege"])},methods:{hasPrivilegeLevel(e){return!e.privilege||e.privilege.some((e=>e===this.privilege))}}},vt=mt;var gt=(0,x.Z)(vt,lt,st,!1,null,null,null);const ht=gt.exports,ft={components:{VerticalNavMenuHeader:Je,VerticalNavMenuLink:it,VerticalNavMenuGroup:ht},props:{items:{type:Array,required:!0}},setup(){return(0,s.provide)("openGroups",(0,s.ref)([])),{resolveNavItemComponent:je}}},bt=ft;var xt=(0,x.Z)(bt,ze,De,!1,null,null,null);const kt=xt.exports;function Ct(e){const t=(0,s.computed)({get:()=>ut.Z.state.verticalMenu.isVerticalMenuCollapsed,set:e=>{ut.Z.commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),a=(0,s.computed)((()=>e.isVerticalMenuActive?t.value?"unpinned":"pinned":"close")),n=(0,s.ref)(!1),r=e=>{n.value=e},o=()=>{t.value=!t.value};return{isMouseHovered:n,isVerticalMenuCollapsed:t,collapseTogglerIcon:a,toggleCollapsed:o,updateMouseHovered:r}}const wt=a(80129),yt=a(9669),Mt={components:{VuePerfectScrollbar:ae(),VerticalNavMenuItems:kt,BLink:p.we,BImg:ne.s},props:{isVerticalMenuActive:{type:Boolean,required:!0},toggleVerticalMenuActive:{type:Function,required:!0}},setup(e){const{isMouseHovered:t,isVerticalMenuCollapsed:a,collapseTogglerIcon:n,toggleCollapsed:r,updateMouseHovered:o}=Ct(e),i=(0,s.ref)(null);(0,s.onBeforeMount)((()=>{const e=localStorage.getItem("zelidauth"),t=wt.parse(e);i.value=t.zelid}));const{isNavMenuCollapsed:l,xdaoOpenProposals:c,skin:u}=(0,w.Z)(),d=async e=>{const t=await yt.get(`https://stats.runonflux.io/proposals/voteInformation?hash=${e.hash}&zelid=${i.value}`);return t.data},p=async()=>{let e=0;yt.get("https://stats.runonflux.io/proposals/listProposals").then((t=>{if("success"===t.data.status){const a=t.data.data.filter((e=>"Open"===e.status));a.forEach((async t=>{const a=await d(t);"success"!==a.status||null!=a.data&&0!==a.data.length||(e+=1,c.value=e)}))}}))};setInterval((()=>{p()}),6e5),p();const m=(0,s.ref)(!1);(0,s.provide)("isMouseHovered",t);const v={maxScrollbarLength:60,wheelPropagation:!1},g=(0,s.computed)((()=>"unpinned"===n.value?"CircleIcon":"DiscIcon")),{appName:h,appLogoImageDark:f,appLogoImage:b}=re.$themeConfig.app;return{navMenuItems:Ie,navMenuItemsCollapsed:$e,perfectScrollbarSettings:v,isVerticalMenuCollapsed:a,collapseTogglerIcon:n,toggleCollapsed:r,isMouseHovered:t,updateMouseHovered:o,collapseTogglerIconFeather:g,shallShadowBottom:m,skin:u,isNavMenuCollapsed:l,appName:h,appLogoImage:b,appLogoImageDark:f}}},_t=Mt;var It=(0,x.Z)(_t,Q,ee,!1,null,null,null);const Zt=It.exports;function Bt(e,t){const a=(0,s.ref)(!0),n=()=>{a.value=!a.value},r=(0,s.ref)("xl"),o=(0,s.computed)((()=>ut.Z.state.verticalMenu.isVerticalMenuCollapsed)),i=(0,s.computed)((()=>{const n=[];return"xl"===r.value||"xxl"===r.value?(n.push("vertical-menu-modern"),n.push(o.value?"menu-collapsed":"menu-expanded")):(n.push("vertical-overlay-menu"),n.push(a.value?"menu-open":"menu-hide")),n.push(`navbar-${e.value}`),"sticky"===t.value&&n.push("footer-fixed"),"static"===t.value&&n.push("footer-static"),"hidden"===t.value&&n.push("footer-hidden"),n}));(0,s.watch)(r,(e=>{a.value="xxl"===e||"xl"===e}));const l=()=>{window.innerWidth>=1600?r.value="xxl":window.innerWidth>=1200?r.value="xl":window.innerWidth>=992?r.value="lg":window.innerWidth>=768?r.value="md":window.innerWidth>=576?r.value="sm":r.value="xs"},c=(0,s.computed)((()=>"xxl"!==r.value&&"xl"!==r.value&&a.value?"show":null)),u=(0,s.computed)((()=>"sticky"===e.value?"fixed-top":"static"===e.value?"navbar-static-top":"hidden"===e.value?"d-none":"floating-nav")),d=(0,s.computed)((()=>"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""));return{isVerticalMenuActive:a,toggleVerticalMenuActive:n,isVerticalMenuCollapsed:o,layoutClasses:i,overlayClasses:c,navbarTypeClass:u,footerTypeClass:d,resizeHandler:l}}const At={watch:{$route(){this.$store.state.app.windowWidth<re.n.xl&&(this.isVerticalMenuActive=!1)}}},Tt={components:{AppFooter:C,VerticalNavMenu:Zt,BNavbar:y.E,LayoutContentRendererLeftDetached:Y,LayoutContentRendererLeft:U,LayoutContentRendererDefault:R},mixins:[At],setup(){const{routerTransition:e,navbarBackgroundColor:t,navbarType:a,footerType:n,isNavMenuHidden:r}=(0,w.Z)(),{isVerticalMenuActive:o,toggleVerticalMenuActive:i,isVerticalMenuCollapsed:l,layoutClasses:c,overlayClasses:u,resizeHandler:d,navbarTypeClass:p,footerTypeClass:m}=Bt(a,n);return d(),window.addEventListener("resize",d),(0,s.onUnmounted)((()=>{window.removeEventListener("resize",d)})),{isVerticalMenuActive:o,toggleVerticalMenuActive:i,isVerticalMenuCollapsed:l,overlayClasses:u,layoutClasses:c,navbarTypeClass:p,footerTypeClass:m,routerTransition:e,navbarBackgroundColor:t,isNavMenuHidden:r}},computed:{layoutContentRenderer(){const e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}}},Lt=Tt;var Vt=(0,x.Z)(Lt,i,l,!1,null,null,null);const St=Vt.exports;var Ot=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar-container d-flex content align-items-center"},[t("ul",{staticClass:"nav navbar-nav d-xl-none"},[t("li",{staticClass:"nav-item"},[t("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[t("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),t("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-md-flex"},[t("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{text:e.backendURL,variant:"outline-primary",size:"sm"}},[t("b-dropdown-item-button",{on:{click:function(t){return e.changeBackendURL(`http://${e.userconfig.externalip}:${e.config.apiPort}`)}}},[e._v(" http://"+e._s(e.userconfig.externalip)+":"+e._s(e.config.apiPort)+" ")]),t("b-dropdown-divider"),t("b-dropdown-item-button",{on:{click:function(t){return e.changeBackendURL("https://api.runonflux.io")}}},[e._v(" https://api.runonflux.io ")]),t("b-dropdown-divider"),t("b-form-input",{attrs:{id:"dropdown-form-custom",type:"text",size:"sm",placeholder:"Custom Backend"},on:{input:function(t){return e.changeBackendURL(e.customBackend)}},model:{value:e.customBackend,callback:function(t){e.customBackend=t},expression:"customBackend"}})],1)],1),t("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[e._v(" "+e._s(e.zelid)+" "),t("dark-Toggler",{staticClass:"d-block"}),t("menu-Collapse-Toggler",{staticClass:"d-block"}),"none"!==e.privilege?t("b-button",{attrs:{variant:"outline-primary",size:"sm"},on:{click:e.logout}},[e._v(" Logout ")]):e._e()],1)],1)},Nt=[],Pt=a(29852),$t=a(36537),zt=a(2332),Dt=a(41294),Rt=a(15193),Ft=a(22183),jt=function(){var e=this,t=e._self._c;return t("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Toggle Dark Mode"},on:{click:function(t){e.skin=e.isDark?"light":"dark"}}},[t("feather-icon",{attrs:{size:"21",icon:(e.isDark?"Sun":"Moon")+"Icon"}})],1)},Gt=[],Ht=a(32450),Et=a(5870);const Ut={components:{BNavItem:Ht.r},directives:{"b-tooltip":Et.o},setup(){const{skin:e}=(0,w.Z)(),t=(0,s.computed)((()=>"dark"===e.value));return{skin:e,isDark:t}}},Wt=Ut;var qt=(0,x.Z)(Wt,jt,Gt,!1,null,null,null);const Xt=qt.exports;var Kt=function(){var e=this,t=e._self._c;return t("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"menu-toggler",attrs:{title:"Toggle Menu Style"},on:{click:function(t){e.isNavMenuCollapsed=!e.isCollapsed}}},[t("v-icon",{attrs:{size:"21",name:""+(e.isCollapsed?"bars":"align-left")}})],1)},Jt=[];const Yt={components:{BNavItem:Ht.r},directives:{"b-tooltip":Et.o},setup(){const{isNavMenuCollapsed:e}=(0,w.Z)(),t=(0,s.computed)((()=>!0===e.value));return{isNavMenuCollapsed:e,isCollapsed:t}}},Qt=Yt;var ea=(0,x.Z)(Qt,Kt,Jt,!1,null,"2ed358b2",null);const ta=ea.exports;var aa=a(34369);const na=a(80129),ra=a(58971),oa={components:{BLink:p.we,BNavbarNav:Pt.o,BDropdown:$t.R,BDropdownItemButton:zt.t,BDropdownDivider:Dt.a,BButton:Rt.T,BFormInput:Ft.e,DarkToggler:Xt,MenuCollapseToggler:ta,ToastificationContent:g.Z},directives:{Ripple:V.Z},props:{toggleVerticalMenuActive:{type:Function,default:()=>{}}},data(){return{backendURL:"",customBackend:""}},computed:{...(0,d.rn)("flux",["userconfig","config","privilege","zelid"])},mounted(){const{protocol:e,hostname:t,port:a}=window.location;let n="";n+=e,n+="//";const r=/[A-Za-z]/g;if(t.match(r)){const e=t.split(".");e[0]="api",n+=e.join(".")}else{if("string"===typeof t&&this.$store.commit("flux/setUserIp",t),+a>16100){const e=+a+1;this.$store.commit("flux/setFluxPort",e)}n+=t,n+=":",n+=this.config.apiPort}this.backendURL=ra.get("backendURL")||n},methods:{changeBackendURL(e){console.log(e),ra.set("backendURL",e),this.backendURL=e},showToast(e,t){this.$toast({component:g.Z,props:{title:t,icon:"BellIcon",variant:e}})},logout(){const e=localStorage.getItem("zelidauth"),t=na.parse(e);localStorage.removeItem("zelidauth"),this.$store.commit("flux/setPrivilege","none"),this.$store.commit("flux/setZelid",""),console.log(t),aa.Z.logoutCurrentSession(e).then((e=>{console.log(e),"error"===e.data.status?console.log(e.data.data.message):(this.showToast("success",e.data.data.message),this.$router.push({name:"home"}))})).catch((e=>{console.log(e),this.showToast("danger",e.toString())}))}}},ia=oa;var la=(0,x.Z)(ia,Ot,Nt,!1,null,null,null);const sa=la.exports,ca={components:{LayoutVertical:St,Navbar:sa},data(){return{}}},ua=ca;var da=(0,x.Z)(ua,r,o,!1,null,null,null);const pa=da.exports},39055:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(80914);const r={softUpdateFlux(e){return(0,n.Z)().get("/flux/softupdateflux",{headers:{zelidauth:e}})},softUpdateInstallFlux(e){return(0,n.Z)().get("/flux/softupdatefluxinstall",{headers:{zelidauth:e}})},updateFlux(e){return(0,n.Z)().get("/flux/updateflux",{headers:{zelidauth:e}})},hardUpdateFlux(e){return(0,n.Z)().get("/flux/hardupdateflux",{headers:{zelidauth:e}})},rebuildHome(e){return(0,n.Z)().get("/flux/rebuildhome",{headers:{zelidauth:e}})},updateDaemon(e){return(0,n.Z)().get("/flux/updatedaemon",{headers:{zelidauth:e}})},reindexDaemon(e){return(0,n.Z)().get("/flux/reindexdaemon",{headers:{zelidauth:e}})},updateBenchmark(e){return(0,n.Z)().get("/flux/updatebenchmark",{headers:{zelidauth:e}})},getFluxVersion(){return(0,n.Z)().get("/flux/version")},broadcastMessage(e,t){const a=t,r={headers:{zelidauth:e}};return(0,n.Z)().post("/flux/broadcastmessage",JSON.stringify(a),r)},connectedPeers(){return(0,n.Z)().get(`/flux/connectedpeers?timestamp=${(new Date).getTime()}`)},connectedPeersInfo(){return(0,n.Z)().get(`/flux/connectedpeersinfo?timestamp=${(new Date).getTime()}`)},incomingConnections(){return(0,n.Z)().get(`/flux/incomingconnections?timestamp=${(new Date).getTime()}`)},incomingConnectionsInfo(){return(0,n.Z)().get(`/flux/incomingconnectionsinfo?timestamp=${(new Date).getTime()}`)},addPeer(e,t){return(0,n.Z)().get(`/flux/addpeer/${t}`,{headers:{zelidauth:e}})},removePeer(e,t){return(0,n.Z)().get(`/flux/removepeer/${t}`,{headers:{zelidauth:e}})},removeIncomingPeer(e,t){return(0,n.Z)().get(`/flux/removeincomingpeer/${t}`,{headers:{zelidauth:e}})},adjustCruxID(e,t){return(0,n.Z)().get(`/flux/adjustcruxid/${t}`,{headers:{zelidauth:e}})},adjustKadena(e,t,a){return(0,n.Z)().get(`/flux/adjustkadena/${t}/${a}`,{headers:{zelidauth:e}})},adjustRouterIP(e,t){return(0,n.Z)().get(`/flux/adjustrouterip/${t}`,{headers:{zelidauth:e}})},adjustBlockedPorts(e,t){const a={blockedPorts:t},r={headers:{zelidauth:e}};return(0,n.Z)().post("/flux/adjustblockedports",JSON.stringify(a),r)},adjustAPIPort(e,t){return(0,n.Z)().get(`/flux/adjustapiport/${t}`,{headers:{zelidauth:e}})},adjustBlockedRepositories(e,t){const a={blockedRepositories:t},r={headers:{zelidauth:e}};return(0,n.Z)().post("/flux/adjustblockedrepositories",JSON.stringify(a),r)},getCruxID(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/cruxid",e)},getKadenaAccount(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/kadena",e)},getRouterIP(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/routerip",e)},getBlockedPorts(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/blockedports",e)},getAPIPort(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/apiport",e)},getBlockedRepositories(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/blockedrepositories",e)},getMarketPlaceURL(){return(0,n.Z)().get("/flux/marketplaceurl")},getZelid(){const e={headers:{"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/zelid",e)},getStaticIpInfo(){return(0,n.Z)().get("/flux/staticip")},restartFluxOS(e){const t={headers:{zelidauth:e,"x-apicache-bypass":!0}};return(0,n.Z)().get("/flux/restart",t)},tailFluxLog(e,t){return(0,n.Z)().get(`/flux/tail${e}log`,{headers:{zelidauth:t}})},justAPI(){return(0,n.Z)()},cancelToken(){return n.S}}},25448:(e,t,a)=>{e.exports=a.p+"img/logo.png"},84328:(e,t,a)=>{var n=a(65290),r=a(27578),o=a(6310),i=function(e){return function(t,a,i){var l,s=n(t),c=o(s),u=r(i,c);if(e&&a!==a){while(c>u)if(l=s[u++],l!==l)return!0}else for(;c>u;u++)if((e||u in s)&&s[u]===a)return e||u||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},5649:(e,t,a)=>{var n=a(67697),r=a(92297),o=TypeError,i=Object.getOwnPropertyDescriptor,l=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=l?function(e,t){if(r(e)&&!i(e,"length").writable)throw new o("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},8758:(e,t,a)=>{var n=a(36812),r=a(19152),o=a(82474),i=a(72560);e.exports=function(e,t,a){for(var l=r(t),s=i.f,c=o.f,u=0;u<l.length;u++){var d=l[u];n(e,d)||a&&n(a,d)||s(e,d,c(t,d))}}},55565:e=>{var t=TypeError,a=9007199254740991;e.exports=function(e){if(e>a)throw t("Maximum allowed index exceeded");return e}},72739:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},79989:(e,t,a)=>{var n=a(19037),r=a(82474).f,o=a(75773),i=a(11880),l=a(95014),s=a(8758),c=a(35266);e.exports=function(e,t){var a,u,d,p,m,v,g=e.target,h=e.global,f=e.stat;if(u=h?n:f?n[g]||l(g,{}):n[g]&&n[g].prototype,u)for(d in t){if(m=t[d],e.dontCallGetSet?(v=r(u,d),p=v&&v.value):p=u[d],a=c(h?d:g+(f?".":"#")+d,e.forced),!a&&void 0!==p){if(typeof m==typeof p)continue;s(m,p)}(e.sham||p&&p.sham)&&o(m,"sham",!0),i(u,d,m,e)}}},94413:(e,t,a)=>{var n=a(68844),r=a(3689),o=a(6648),i=Object,l=n("".split);e.exports=r((function(){return!i("z").propertyIsEnumerable(0)}))?function(e){return"String"===o(e)?l(e,""):i(e)}:i},92297:(e,t,a)=>{var n=a(6648);e.exports=Array.isArray||function(e){return"Array"===n(e)}},35266:(e,t,a)=>{var n=a(3689),r=a(69985),o=/#|\.prototype\./,i=function(e,t){var a=s[l(e)];return a===u||a!==c&&(r(t)?n(t):!!t)},l=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},6310:(e,t,a)=>{var n=a(43126);e.exports=function(e){return n(e.length)}},58828:e=>{var t=Math.ceil,a=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?a:t)(n)}},82474:(e,t,a)=>{var n=a(67697),r=a(22615),o=a(49556),i=a(75684),l=a(65290),s=a(18360),c=a(36812),u=a(68506),d=Object.getOwnPropertyDescriptor;t.f=n?d:function(e,t){if(e=l(e),t=s(t),u)try{return d(e,t)}catch(a){}if(c(e,t))return i(!r(o.f,e,t),e[t])}},72741:(e,t,a)=>{var n=a(54948),r=a(72739),o=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},7518:(e,t)=>{t.f=Object.getOwnPropertySymbols},54948:(e,t,a)=>{var n=a(68844),r=a(36812),o=a(65290),i=a(84328).indexOf,l=a(57248),s=n([].push);e.exports=function(e,t){var a,n=o(e),c=0,u=[];for(a in n)!r(l,a)&&r(n,a)&&s(u,a);while(t.length>c)r(n,a=t[c++])&&(~i(u,a)||s(u,a));return u}},49556:(e,t)=>{var a={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!a.call({1:2},1);t.f=r?function(e){var t=n(this,e);return!!t&&t.enumerable}:a},19152:(e,t,a)=>{var n=a(76058),r=a(68844),o=a(72741),i=a(7518),l=a(85027),s=r([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(l(e)),a=i.f;return a?s(t,a(e)):t}},27578:(e,t,a)=>{var n=a(68700),r=Math.max,o=Math.min;e.exports=function(e,t){var a=n(e);return a<0?r(a+t,0):o(a,t)}},65290:(e,t,a)=>{var n=a(94413),r=a(74684);e.exports=function(e){return n(r(e))}},68700:(e,t,a)=>{var n=a(58828);e.exports=function(e){var t=+e;return t!==t||0===t?0:n(t)}},43126:(e,t,a)=>{var n=a(68700),r=Math.min;e.exports=function(e){var t=n(e);return t>0?r(t,9007199254740991):0}},70560:(e,t,a)=>{var n=a(79989),r=a(90690),o=a(6310),i=a(5649),l=a(55565),s=a(3689),c=s((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=c||!u();n({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=r(this),a=o(t),n=arguments.length;l(a+n);for(var s=0;s<n;s++)t[a]=arguments[s],a++;return i(t,a),a}})}}]);