(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2b7978e"],{6076:function(e,t,a){"use strict";a("99af");var n=a("b4c0");t["a"]={help:function(){return Object(n["a"])().get("/daemon/help")},helpSpecific:function(e){return Object(n["a"])().get("/daemon/help/".concat(e))},getInfo:function(){return Object(n["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(n["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(e,t){return Object(n["a"])().get("/daemon/getrawtransaction/".concat(e,"/").concat(t))},listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(n["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(n["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(n["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(n["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(n["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(n["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(e){return Object(n["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark:function(e){return Object(n["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo:function(){return Object(n["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(n["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(n["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(e,t){return Object(n["a"])().get("/daemon/validateaddress/".concat(t),{headers:{zelidauth:e}})},getWalletInfo:function(e){return Object(n["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listZelNodeConf:function(e){return Object(n["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start:function(e){return Object(n["a"])().get("/daemon/start",{headers:{zelidauth:e}})},restart:function(e){return Object(n["a"])().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon:function(e){return Object(n["a"])().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon:function(e,t){return Object(n["a"])().get("/daemon/rescanblockchain/".concat(t),{headers:{zelidauth:e}})},getBlock:function(e,t){return Object(n["a"])().get("/daemon/getblock/".concat(e,"/").concat(t))},tailDaemonDebug:function(e){return Object(n["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"6c0f":function(e,t,a){},c26b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-card",[a("h6",{staticClass:"mb-1"},[e._v(" Click the 'Download Debug File' button to download the log. This may take a few minutes depending on file size. ")]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-download",variant:"outline-primary",size:"md"}},[e._v(" Download Debug File ")]),e.total&&e.downloaded?a("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[a("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[e._v(" "+e._s((e.downloaded/1e6).toFixed(2)+" / "+(e.total/1e6).toFixed(2))+" MB - "+e._s((e.downloaded/e.total*100).toFixed(2)+"%")+" ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:e.cancelDownload}},[e._v(" x ")])],1):e._e(),a("b-popover",{ref:"popover",attrs:{target:"start-download",triggers:"click",show:e.downloadPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.downloadPopoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("span",[e._v("Are You Sure?")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onDownloadClose}},[a("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onDownloadClose}},[e._v(" Cancel ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onDownloadOk}},[e._v(" Download Debug ")])],1)])],1)]),a("b-card",[a("h6",{staticClass:"mb-1"},[e._v(" Click the 'Show Debug File' button to view the last 100 lines of the Daemon debug file. ")]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-tail",variant:"outline-primary",size:"md"}},[e._v(" Show Debug File ")]),e.callResponse.data.message?a("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:e.callResponse.data.message}}):e._e(),a("b-popover",{ref:"popover",attrs:{target:"start-tail",triggers:"click",show:e.tailPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.tailPopoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("span",[e._v("Are You Sure?")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onTailClose}},[a("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onTailClose}},[e._v(" Cancel ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onTailOk}},[e._v(" Show Debug ")])],1)])],1)])],1)},o=[],r=a("c7eb"),i=a("1da1"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("205f")),c=a("1947"),l=a("3828"),d=a("9c7d"),u=a("d6e4"),b=a("b307"),p=a("e009"),g=a("6076"),m={components:{BCard:s["a"],BButton:c["a"],BPopover:l["a"],BFormTextarea:d["a"],BCardText:u["a"],ToastificationContent:b["a"]},directives:{Ripple:p["a"]},data:function(){return{downloadPopoverShow:!1,tailPopoverShow:!1,abortToken:{},downloaded:0,total:0,callResponse:{status:"",data:{}}}},methods:{cancelDownload:function(){this.abortToken.cancel("User download cancelled"),this.downloaded="",this.total=""},onDownloadClose:function(){this.downloadPopoverShow=!1},onDownloadOk:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a,n,o,i,s,c;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,e.downloadPopoverShow=!1,e.abortToken=g["a"].cancelToken(),n=localStorage.getItem("zelidauth"),o={headers:{zelidauth:n},responseType:"blob",onDownloadProgress:function(e){a.downloaded=e.loaded,a.total=e.total},cancelToken:a.abortToken.token},t.next=7,g["a"].justAPI().get("/flux/daemondebug",o);case 7:i=t.sent,s=window.URL.createObjectURL(new Blob([i.data])),c=document.createElement("a"),c.href=s,c.setAttribute("download","debug.log"),document.body.appendChild(c),c.click();case 14:case"end":return t.stop()}}),t)})))()},onTailClose:function(){this.tailPopoverShow=!1},onTailOk:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tailPopoverShow=!1,a=localStorage.getItem("zelidauth"),g["a"].tailDaemonDebug(a).then((function(t){"error"===t.data.status?e.$toast({component:b["a"],props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"danger"}}):(e.callResponse.status=t.data.status,e.callResponse.data=t.data.data)})).catch((function(t){e.$toast({component:b["a"],props:{title:"Error while trying to get latest debug of Daemon",icon:"InfoIcon",variant:"danger"}}),console.log(t)}));case 3:case"end":return t.stop()}}),t)})))()}}},f=m,v=(a("f428"),a("2877")),h=Object(v["a"])(f,n,o,!1,null,null,null);t["default"]=h.exports},d6e4:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("2b0e"),o=a("b42e"),r=a("c637"),i=a("a723"),s=a("cf75"),c=Object(s["d"])({textTag:Object(s["c"])(i["t"],"p")},r["p"]),l=n["default"].extend({name:r["p"],functional:!0,props:c,render:function(e,t){var a=t.props,n=t.data,r=t.children;return e(a.textTag,Object(o["a"])(n,{staticClass:"card-text"}),r)}})},f428:function(e,t,a){"use strict";a("6c0f")}}]);