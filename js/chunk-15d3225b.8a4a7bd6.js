(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15d3225b"],{1602:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return d}));var o=a("a27e");function c(e){return Object(o["a"])({url:"/api/user/login",method:"POST",data:e})}function r(){return Object(o["a"])({url:"api/user/getUserInfo",method:"GET"})}function n(e){return Object(o["a"])({url:"/api/user/getEmailCode",method:"post",data:e})}function l(e){return Object(o["a"])({url:"/api/user/emailLogin",method:"post",data:e})}function d(e){return Object(o["a"])({url:"/api/user/register",method:"POST",data:e})}},2062:function(e,t,a){"use strict";var o=a("3eb2");function c(e,t){let a=!1;return function(){a||(a=!0,e.apply(this,arguments),setTimeout(()=>{a=!1},t))}}var r={__name:"captcha",props:{noMatchCode:{type:Boolean,default:!1}},emits:["getCaptcha"],setup(e,{emit:t}){const a=e,r=Object(o["ref"])(null),n=new Event("updateCaptcha");function l(e,t){const a=e.getContext("2d");a.save(),e.addEventListener("updateCaptcha",()=>d(a,t)),d(a,t)}function d(e,a){e.restore(),e.restore(),e.clearRect(0,0,80,30),e.save();let o="";e.font="bold 15px serif",e.textBaseline="top",e.translate(10,5),e.save();let c=0;while(c<a){const t=i(9,0);o=o+""+t,e.restore(),e.save(),e.fillStyle=u(),e.translate(c*i(20,15),0),e.rotate(s(40)*Math.PI/180),e.fillText(t,0,0),c++}t("getCaptcha",o)}function i(e=1,t=0){return Math.floor(Math.random()*(e-t))+t}function u(){return`rgb(${i(255)}, ${i(255)}, ${i(255)})`}function s(e,t=0){return 0===t?Math.random()>=.5?s(e,1):s(e,-1):t<0?-i(e):i(e)}return Object(o["onMounted"])(()=>{r.value.addEventListener("click",c(()=>r.value.dispatchEvent(n),500)),l(r.value,4),Object(o["watch"])(()=>a.noMatchCode,()=>{r.value.dispatchEvent(n)})}),(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("canvas",{ref_key:"canvas",ref:r,width:"80",height:"30"},null,512))}};const n=r;t["a"]=n},"307c":function(e,t,a){"use strict";a("f059")},"34e1":function(e,t,a){"use strict";var o=a("3eb2"),c=a("5500");const r={id:"header"},n={id:"back-icon"},l={id:"avatar",class:"slot"};var d={__name:"layoutHeader",setup(e){const t=Object(c["d"])();function a(){t.push({name:"login"})}return(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",n,[Object(o["renderSlot"])(e.$slots,"backIcon")]),Object(o["createElementVNode"])("div",{id:"icon-logo",class:"slot"},[Object(o["createElementVNode"])("img",{src:"https://img1.imgtp.com/2022/10/15/TP8TMu93.png",alt:"logo",height:"48",width:"78",onClick:a})]),Object(o["createElementVNode"])("div",l,[Object(o["renderSlot"])(e.$slots,"avatar")])]))}},i=(a("307c"),a("6dd4")),u=a.n(i);const s=u()(d,[["__scopeId","data-v-89c18978"]]);t["a"]=s},"9ed6":function(e,t,a){"use strict";a.r(t);a("e097");var o=a("3eb2"),c=a("2062"),r=a("1602"),n=a("3df8"),l=a("a18c"),d=a("34e1"),i=a("2147");const u=e=>(Object(o["pushScopeId"])("data-v-5eb4a80a"),e=e(),Object(o["popScopeId"])(),e),s={id:"content"},b={id:"main-box"},p=u(()=>Object(o["createElementVNode"])("div",{id:"box-left"},null,-1)),m={id:"box-right"},h={id:"tabs-login"},O={class:"img-code"},j={class:"img-code"},C=u(()=>Object(o["createElementVNode"])("span",null,"登录",-1)),g=[C],f=u(()=>Object(o["createElementVNode"])("hr",{color:"#dcdfe6"},null,-1)),v={id:"router-link-register"},N=u(()=>Object(o["createElementVNode"])("span",{id:"text-register"},"注册账号",-1)),V=u(()=>Object(o["createElementVNode"])("span",{id:"text-register"},"忘记密码/修改密码",-1));var w={__name:"index",setup(e){const t=Object(o["ref"])(null),a=Object(o["ref"])(null),u=Object(o["ref"])(null),C=Object(o["ref"])(!1),w=Object(o["reactive"])({nlLoginNoMatchCaptchaCode:!1,elLoginNoMatchCaptchaCode:!1}),E=Object(o["reactive"])({userName:"",password:"",captcha:""}),x=Object(o["reactive"])({userEmail:"",emailCode:""}),_=Object(o["reactive"])({isCodeCD:!1,buttonText:"获取验证码"}),y=Object(o["ref"])("loginFrom"),M=Object(o["reactive"])({nlCaptcha:"",eCaptcha:""}),L=Object(o["reactive"])({userName:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],captcha:[{validator:I,trigger:"blur"}]}),k=Object(o["reactive"])({captcha:[{validator:I,trigger:"blur"}],userEmail:[{validator:U,trigger:"blur"}],emailCode:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:4,max:4,message:"验证码格式为4位",trigger:"blur"}]}),T=Object(i["a"])();function F(e){E.captcha=""}function B(e){let o;C.value=!0,o="loginFrom"===e?t.value:a.value,o.validate((e,t)=>{e?"loginFrom"===y.value?$(o):P(o):(console.log("error submit!",t),C.value=!1)})}function I(e,t,a){if(""===t)return a(new Error("请输入验证码"));if("loginFrom"===y.value){if(t!==M.nlCaptcha)return w.nlLoginNoMatchCaptchaCode=!w.nlLoginNoMatchCaptchaCode,a(new Error("验证码错误"))}else if(t!==M.eCaptcha)return w.elLoginNoMatchCaptchaCode=!w.elLoginNoMatchCaptchaCode,a(new Error("验证码错误"));return a()}function U(e,t,a){return""===t?a(new Error("请输入邮箱")):/^[^@]+@[^@]+$/.test(t)?void a():a(new Error("请输入正确的邮箱"))}function S(e){M.nlCaptcha=e}function D(e){M.eCaptcha=e}function $(e){Object(r["d"])({userName:E.userName,password:E.password}).then(t=>{200===t.code?q(t):(C.value=!1,e.resetFields(),w.nlLoginNoMatchCaptchaCode=!w.nlLoginNoMatchCaptchaCode,Object(n["a"])({message:"账号或密码错误",type:"error"})),C.value=!1},e=>{console.log(e),Object(n["a"])({message:"网络错误，请稍后再试",type:"error"}),w.nlLoginNoMatchCaptchaCode=!w.nlLoginNoMatchCaptchaCode,C.value=!1})}function P(e){Object(r["a"])({userEmail:x.userEmail,emailCode:x.emailCode}).then(t=>{200===t.code?q(t):(C.value=!1,e.resetFields(),w.elLoginNoMatchCaptchaCode=!w.elLoginNoMatchCaptchaCode,Object(n["a"])({message:"验证码错误",type:"error"})),C.value=!1},e=>{console.log(e),Object(n["a"])({message:"网络错误，请稍后再试",type:"error"}),w.elLoginNoMatchCaptchaCode=!w.elLoginNoMatchCaptchaCode,C.value=!1})}function G(e,t){let a=60;_.isCodeCD=!0,t.classList.toggle("text-getCode-button");const o=setInterval(()=>{_.buttonText=`重新获取(${a})`,a-=1,a<0&&(clearInterval(o),_.isCodeCD=!1,t.classList.toggle("text-getCode-button"),_.buttonText="重新获取验证码")},900);Object(n["a"])({message:"验证码已发送",type:"success"}),e.validateField(["captcha","userEmail"],e=>{e&&Object(r["b"])({userEmail:x.userEmail,type:"login"}).then(e=>{200===e.code&&console.log("send")},e=>{console.log(e),Object(n["a"])({message:"网络错误，请稍后再试",type:"error"})})})}function q(e){C.value=!1,Object(l["a"])(),l["c"].push("productList")}return Object(o["onMounted"])(()=>{T.resetUserToken()}),(e,r)=>{const n=Object(o["resolveComponent"])("el-input"),l=Object(o["resolveComponent"])("el-form-item"),i=Object(o["resolveComponent"])("el-form"),M=Object(o["resolveComponent"])("el-tab-pane"),T=Object(o["resolveComponent"])("el-button"),I=Object(o["resolveComponent"])("el-tabs"),U=Object(o["resolveComponent"])("router-link"),$=Object(o["resolveDirective"])("loading");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",s,[Object(o["createVNode"])(Object(o["unref"])(d["a"])),Object(o["createElementVNode"])("div",b,[p,Object(o["createElementVNode"])("div",m,[Object(o["createElementVNode"])("div",h,[Object(o["createVNode"])(I,{modelValue:y.value,"onUpdate:modelValue":r[7]||(r[7]=e=>y.value=e),type:"border-card",stretch:!0,onTabChange:F},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(M,{label:"密码登录",name:"loginFrom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{ref_key:"loginFrom",ref:t,model:E,rules:L},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"userName"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{modelValue:E.userName,"onUpdate:modelValue":r[0]||(r[0]=e=>E.userName=e),placeholder:"请输入账号"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(l,{prop:"password"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{modelValue:E.password,"onUpdate:modelValue":r[1]||(r[1]=e=>E.password=e),type:"password","show-password":"",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(l,{prop:"captcha"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{modelValue:E.captcha,"onUpdate:modelValue":r[2]||(r[2]=e=>E.captcha=e),placeholder:"输入图形验证码",type:"text"},{append:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",O,[Object(o["createVNode"])(Object(o["unref"])(c["a"]),{"no-match-code":w.nlLoginNoMatchCaptchaCode,onGetCaptcha:S},null,8,["no-match-code"])])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),Object(o["createVNode"])(M,{label:"验证码登录",name:"emailLoginFrom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{ref_key:"emailLoginFrom",ref:a,model:x,rules:k},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{prop:"userEmail"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{modelValue:x.userEmail,"onUpdate:modelValue":r[3]||(r[3]=e=>x.userEmail=e),type:"text",placeholder:"输入邮箱"},null,8,["modelValue"])]),_:1}),Object(o["createVNode"])(l,{prop:"captcha"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{modelValue:x.captcha,"onUpdate:modelValue":r[4]||(r[4]=e=>x.captcha=e),placeholder:"输入图形验证码",type:"text"},{append:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",j,[Object(o["createVNode"])(Object(o["unref"])(c["a"]),{"no-match-code":w.elLoginNoMatchCaptchaCode,onGetCaptcha:D},null,8,["no-match-code"])])]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(l,{prop:"emailCode"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{modelValue:x.emailCode,"onUpdate:modelValue":r[6]||(r[6]=e=>x.emailCode=e),type:"text",placeholder:"输入验证码"},{append:Object(o["withCtx"])(()=>[Object(o["createVNode"])(T,{type:"primary",disabled:_.isCodeCD,onClick:r[5]||(r[5]=e=>G(a.value,u.value))},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("span",{id:"text-getCode-button",ref_key:"textGetCodeButton",ref:u},Object(o["toDisplayString"])(_.buttonText),513)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1},8,["modelValue"]),Object(o["createElementVNode"])("button",{id:"button-login",onClick:r[8]||(r[8]=e=>B(y.value))},g),f,Object(o["createElementVNode"])("div",v,[Object(o["createVNode"])(U,{to:"/register"},{default:Object(o["withCtx"])(()=>[N]),_:1}),Object(o["createVNode"])(U,{to:"/resetPassword"},{default:Object(o["withCtx"])(()=>[V]),_:1})])])])])])),[[$,C.value,"body"]])}}},E=(a("f4c2"),a("6dd4")),x=a.n(E);const _=x()(w,[["__scopeId","data-v-5eb4a80a"]]);t["default"]=_},cca1:function(e,t,a){},f059:function(e,t,a){},f4c2:function(e,t,a){"use strict";a("cca1")}}]);
//# sourceMappingURL=chunk-15d3225b.8a4a7bd6.js.map