(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d41e54"],{"26d6":function(e,t,n){"use strict";n.r(t);var c=n("3eb2"),a=n("32b3"),r=n("a18c"),o=n("815d"),d=n("5500"),i={__name:"navigationMenu",setup(e){const t=Object(o["a"])(),n=Object(d["d"])(),a=Object(c["reactive"])([]),i=Object(c["computed"])(()=>t.subRouterName);function u(){while(a.length)a.pop();a.push(...r["b"].find(e=>"deviceLayout"===e.name).children[0].children)}function b(e){n.push({name:e,params:{productId:t.productId,deviceId:t.deviceId}})}return Object(c["onMounted"])(()=>{u()}),(e,t)=>{const n=Object(c["resolveComponent"])("el-menu-item"),r=Object(c["resolveComponent"])("el-menu");return Object(c["openBlock"])(),Object(c["createBlock"])(r,{"default-active":Object(c["unref"])(i),class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:b},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a,e=>(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:e.name,index:e.name},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.meta.title),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])}}};const u=i;var b=u,p=n("7b4b"),l=n("3df8"),m={__name:"index",setup(e){const t=Object(d["c"])(),n=Object(c["computed"])(()=>"设备列表 - "+t.meta.title+"["+r.deviceName+"]"),r=Object(c["reactive"])({deviceName:"default_name"}),i=Object(o["a"])();return Object(p["f"])({productId:i.productId,deviceId:i.deviceId}).then(e=>{200===e.code&&(r.deviceName=e.data.deviceName)},e=>{Object(l["a"])({type:"error",message:"网络错误"})}),(e,t)=>{const r=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(Object(c["unref"])(a["a"]),{"page-title":Object(c["unref"])(n)},null,8,["page-title"]),Object(c["createVNode"])(Object(c["unref"])(b)),Object(c["createVNode"])(r)])}}};const s=m;t["default"]=s},"32b3":function(e,t,n){"use strict";var c=n("3eb2");const a={id:"container-main-app-header"},r={id:"text-page-title"};var o={__name:"mainAppHeader",props:{pageTitle:{type:String,default:"temp"}},setup(e){const t=e;return(e,n)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("span",r,Object(c["toDisplayString"])(t.pageTitle),1)]))}},d=(n("ce40"),n("6dd4")),i=n.n(d);const u=i()(o,[["__scopeId","data-v-4b858026"]]);t["a"]=u},"44fb":function(e,t,n){},"7b4b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return l}));var c=n("a27e");function a(e){return Object(c["a"])({url:"/api/data/addDevice",method:"POST",data:e})}function r(e){return Object(c["a"])({url:"/api/data/fetchDeviceList",method:"GET",params:e})}function o(e){return Object(c["a"])({url:"/api/data/fetchDeviceInfo",method:"GET",params:e})}function d(e){return Object(c["a"])({url:"/api/data/fetchDeviceStatus",method:"POST",data:e})}function i(e){return Object(c["a"])({url:"/api/data/deviceDataUploadInfo",method:"GET",params:e})}function u(e){return Object(c["a"])({url:"/api/data/deleteDevice",method:"DELETE",params:e})}function b(e){return Object(c["a"])({url:"/api/data/sendCommand",method:"POST",data:e})}function p(e){return Object(c["a"])({url:"/api/data/fetchCommandList",method:"GET",params:e})}function l(e){return Object(c["a"])({url:"/api/data/addApiKey",month:"GET",params:e})}},ce40:function(e,t,n){"use strict";n("44fb")}}]);
//# sourceMappingURL=chunk-54d41e54.559d4c72.js.map