var Ne=Object.defineProperty,qe=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var xe=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var Ae=(n,e,t)=>e in n?Ne(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ce=(n,e)=>{for(var t in e||(e={}))Ue.call(e,t)&&Ae(n,t,e[t]);if(xe)for(var t of xe(e))Ye.call(e,t)&&Ae(n,t,e[t]);return n},Ce=(n,e)=>qe(n,Ke(e));import{d as L,_ as Oe,o as f,c as _,a as y,i as ke,b as V,u as re,r as B,w as U,e as Ge,f as S,g as T,h as w,j as m,k as ee,t as q,l as v,m as J,F as G,T as je,n as Se,p as N,q as he,s as _e,v as Xe,x as W,y as C,z as F,E as Qe,A as pe,B as O,C as Je,D as Be,G as Ze,K as et,H as Te,I as ae,J as Ve,L as De,M as ge,N as Me,O as se,P as de,Q as Pe,R as fe,S as ve,U as We,V as tt,W as nt,X as at,Y as st}from"./index-ad449e55.js";import{S as M}from"./index-061ae28c.js";import{L as rt}from"./index-f87200d8.js";const ot=L({name:"CaretBottom"}),it={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},lt=y("path",{fill:"currentColor",d:"m192 384 320 384 320-384z"},null,-1),ct=[lt];function ut(n,e,t,s,l,a){return f(),_("svg",it,ct)}var dt=Oe(ot,[["render",ut]]);const ft=L({name:"Setting"}),vt={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},mt=y("path",{fill:"currentColor",d:"M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"},null,-1),ht=[mt];function _t(n,e,t,s,l,a){return f(),_("svg",vt,ht)}var pt=Oe(ft,[["render",_t]]);function gt(n){for(var e=[],t=0;t<n.length;){var s=n[t];if(s==="*"||s==="+"||s==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(s==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(s==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(s==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(s===":"){for(var l="",a=t+1;a<n.length;){var r=n.charCodeAt(a);if(r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||r===95){l+=n[a++];continue}break}if(!l)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:l}),t=a;continue}if(s==="("){var o=1,i="",a=t+1;if(n[a]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<n.length;){if(n[a]==="\\"){i+=n[a++]+n[a++];continue}if(n[a]===")"){if(o--,o===0){a++;break}}else if(n[a]==="("&&(o++,n[a+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(a));i+=n[a++]}if(o)throw new TypeError("Unbalanced pattern at ".concat(t));if(!i)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:i}),t=a;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function wt(n,e){e===void 0&&(e={});for(var t=gt(n),s=e.prefixes,l=s===void 0?"./":s,a="[^".concat(xt(e.delimiter||"/#?"),"]+?"),r=[],o=0,i=0,u="",c=function(E){if(i<t.length&&t[i].type===E)return t[i++].value},d=function(E){var R=c(E);if(R!==void 0)return R;var X=t[i],oe=X.type,ie=X.index;throw new TypeError("Unexpected ".concat(oe," at ").concat(ie,", expected ").concat(E))},p=function(){for(var E="",R;R=c("CHAR")||c("ESCAPED_CHAR");)E+=R;return E};i<t.length;){var b=c("CHAR"),k=c("NAME"),D=c("PATTERN");if(k||D){var A=b||"";l.indexOf(A)===-1&&(u+=A,A=""),u&&(r.push(u),u=""),r.push({name:k||o++,prefix:A,suffix:"",pattern:D||a,modifier:c("MODIFIER")||""});continue}var $=b||c("ESCAPED_CHAR");if($){u+=$;continue}u&&(r.push(u),u="");var Y=c("OPEN");if(Y){var A=p(),H=c("NAME")||"",K=c("PATTERN")||"",j=p();d("CLOSE"),r.push({name:H||(K?o++:""),pattern:H&&!K?a:K,prefix:A,suffix:j,modifier:c("MODIFIER")||""});continue}d("END")}return r}function bt(n,e){return yt(wt(n,e),e)}function yt(n,e){e===void 0&&(e={});var t=At(e),s=e.encode,l=s===void 0?function(i){return i}:s,a=e.validate,r=a===void 0?!0:a,o=n.map(function(i){if(typeof i=="object")return new RegExp("^(?:".concat(i.pattern,")$"),t)});return function(i){for(var u="",c=0;c<n.length;c++){var d=n[c];if(typeof d=="string"){u+=d;continue}var p=i?i[d.name]:void 0,b=d.modifier==="?"||d.modifier==="*",k=d.modifier==="*"||d.modifier==="+";if(Array.isArray(p)){if(!k)throw new TypeError('Expected "'.concat(d.name,'" to not repeat, but got an array'));if(p.length===0){if(b)continue;throw new TypeError('Expected "'.concat(d.name,'" to not be empty'))}for(var D=0;D<p.length;D++){var A=l(p[D],d);if(r&&!o[c].test(A))throw new TypeError('Expected all "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(A,'"'));u+=d.prefix+A+d.suffix}continue}if(typeof p=="string"||typeof p=="number"){var A=l(String(p),d);if(r&&!o[c].test(A))throw new TypeError('Expected "'.concat(d.name,'" to match "').concat(d.pattern,'", but got "').concat(A,'"'));u+=d.prefix+A+d.suffix;continue}if(!b){var $=k?"an array":"a string";throw new TypeError('Expected "'.concat(d.name,'" to be ').concat($))}}return u}}function xt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function At(n){return n&&n.sensitive?"":"i"}function Z(n){return ke.global.te("route."+n)?ke.global.t("route."+n):n}const Ct={key:0,class:"no-redirect"},kt=["onClick"],St=L({setup(n){const e=re(),t=o=>{const{params:i}=e;return bt(o)(i)},s=B([]);function l(){let o=e.matched.filter(u=>u.meta&&u.meta.title);const i=o[0];a(i)||(o=[{path:"/dashboard",meta:{title:"dashboard"}}].concat(o)),s.value=o.filter(u=>u.meta&&u.meta.title&&u.meta.breadcrumb!==!1)}function a(o){const i=o&&o.name;return i?i.toString().trim().toLocaleLowerCase()==="Dashboard".toLocaleLowerCase():!1}function r(o){const{redirect:i,path:u}=o;if(i){Se.push(i).catch(c=>{console.warn(c)});return}Se.push(t(u)).catch(c=>{console.warn(c)})}return U(()=>e.path,o=>{o.startsWith("/redirect/")||l()}),Ge(()=>{l()}),(o,i)=>{const u=S("el-breadcrumb-item"),c=S("el-breadcrumb");return f(),T(c,{class:"app-breadcrumb","separator-class":"el-icon-arrow-right"},{default:w(()=>[m(je,{name:"breadcrumb"},{default:w(()=>[(f(!0),_(G,null,ee(s.value,(d,p)=>(f(),T(u,{key:d.path},{default:w(()=>[d.redirect==="noredirect"||p===s.value.length-1?(f(),_("span",Ct,q(v(Z)(d.meta.title)),1)):(f(),_("a",{key:1,onClick:J(b=>r(d),["prevent"])},q(v(Z)(d.meta.title)),9,kt))]),_:2},1024))),128))]),_:1})]),_:1})}}});var Tt=V(St,[["__scopeId","data-v-1922868d"]]);const Pt=n=>(he("data-v-dbd67466"),n=n(),_e(),n),Et=Pt(()=>y("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"},null,-1)),Lt=[Et],Ot=L({props:{isActive:{required:!0,type:Boolean,default:!1}},emits:["toggleClick"],setup(n,{emit:e}){function t(){e("toggleClick")}return(s,l)=>(f(),_("div",{style:{padding:"0 15px"},onClick:t},[(f(),_("svg",{class:N([{"is-active":n.isActive},"hamburger"]),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},Lt,2))]))}});var Bt=V(Ot,[["__scopeId","data-v-dbd67466"]]);const Vt=L({setup(n){const{isFullscreen:e,toggle:t}=Xe();return(s,l)=>(f(),_("div",null,[m(M,{"icon-class":v(e)?"exit-fullscreen":"fullscreen",onClick:v(t)},null,8,["icon-class","onClick"])]))}});const Dt={class:"size-select__icon"},Mt=L({setup(n){const{app:e}=W(),t=C(()=>e.size),s=B([{label:"\u9ED8\u8BA4",value:"default"},{label:"\u5927\u578B",value:"large"},{label:"\u5C0F\u578B",value:"small"}]);function l(a){e.setSize(a),Qe.success("\u5207\u6362\u5E03\u5C40\u5927\u5C0F\u6210\u529F")}return(a,r)=>{const o=S("el-dropdown-item"),i=S("el-dropdown-menu"),u=S("el-dropdown");return f(),T(u,{class:"size-select",trigger:"click",onCommand:l},{dropdown:w(()=>[m(i,null,{default:w(()=>[(f(!0),_(G,null,ee(s.value,c=>(f(),T(o,{key:c.value,disabled:(v(t)||"default")==c.value,command:c.value},{default:w(()=>[F(q(c.label),1)]),_:2},1032,["disabled","command"]))),128))]),_:1})]),default:w(()=>[y("div",Dt,[m(M,{"class-name":"size-icon","icon-class":"size"})])]),_:1})}}});var Wt=V(Mt,[["__scopeId","data-v-bd20bba6"]]);const $t={class:"navbar"},Ht={class:"right-menu"},Rt={class:"avatar-wrapper"},It=["src"],zt=L({setup(n){const{app:e,login:t}=W();re();const s=pe(),l=C(()=>e.sidebar),a=C(()=>e.device),r=C(()=>t.avatar);function o(){e.toggleSidebar()}function i(){Je.confirm("\u786E\u5B9A\u6CE8\u9500\u5E76\u9000\u51FA\u7CFB\u7EDF\u5417\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(async()=>{await t.logout(),s.push("/login")})}return(u,c)=>{const d=S("el-tooltip"),p=S("el-dropdown-item"),b=S("el-dropdown-menu"),k=S("el-dropdown");return f(),_("div",$t,[m(Bt,{id:"hamburger-container","is-active":v(l).opened,class:"hamburger-container",onToggleClick:o},null,8,["is-active"]),m(Tt,{id:"breadcrumb-container",class:"breadcrumb-container"}),y("div",Ht,[v(a)!=="mobile"?(f(),_(G,{key:0},[m(Vt,{id:"screenfull",class:"right-menu-item hover-effect"}),m(d,{content:"\u5E03\u5C40\u5927\u5C0F",effect:"dark",placement:"bottom"},{default:w(()=>[m(Wt,{id:"size-select",class:"right-menu-item hover-effect"})]),_:1}),m(rt,{class:"right-menu-item hover-effect"})],64)):O("",!0),m(k,{class:"avatar-container right-menu-item hover-effect",trigger:"click"},{dropdown:w(()=>[m(b,null,{default:w(()=>[m(p,{onClick:i},{default:w(()=>[F(q(u.$t("navbar.logout")),1)]),_:1})]),_:1})]),default:w(()=>[y("div",Rt,[y("img",{src:v(r)+"?imageView2/1/w/80/h/80",class:"user-avatar"},null,8,It),m(v(dt),{style:{width:"0.6em",height:"0.6em","margin-left":"5px"}})])]),_:1})])])}}});var Ft=V(zt,[["__scopeId","data-v-9af73a06"]]);const Nt={class:"app-main"},qt=L({setup(n){const{tagsView:e}=W(),t=C(()=>e.cachedViews);return(s,l)=>{const a=S("router-view"),r=S("el-scrollbar");return f(),_("section",Nt,[m(r,{height:"calc(100vh - 85px)",always:!0},{default:w(()=>[m(a,null,{default:w(({Component:o,route:i})=>[m(Be,{name:"router-fade",mode:"out-in"},{default:w(()=>[(f(),T(et,{include:v(t)},[(f(),T(Ze(o),{key:i.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})]),_:1},8,["height"])])}}});var Kt=V(qt,[["__scopeId","data-v-f197e0f4"]]);function $e(n,e){return!!n.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function Ut(n,e){$e(n,e)||(n.className+=" "+e)}function Yt(n,e){if($e(n,e)){const t=new RegExp("(\\s|^)"+e+"(\\s|$)");n.className=n.className.replace(t," ")}}function Ee(n,e,t){t=Math.max(Math.min(Number(t),1),0);const s=parseInt(n.substring(1,3),16),l=parseInt(n.substring(3,5),16),a=parseInt(n.substring(5,7),16),r=parseInt(e.substring(1,3),16),o=parseInt(e.substring(3,5),16),i=parseInt(e.substring(5,7),16),u=Math.round(s*(1-t)+r*t),c=Math.round(l*(1-t)+o*t),d=Math.round(a*(1-t)+i*t),p=("0"+(u||0).toString(16)).slice(-2),b=("0"+(c||0).toString(16)).slice(-2),k=("0"+(d||0).toString(16)).slice(-2);return"#"+p+b+k}const Gt=L({setup(n){const e="#ffffff",t="#000000",s=document.documentElement,{setting:l}=W(),a=C(()=>l.theme);return U(a,r=>{s.style.setProperty("--el-color-primary",r),Te.set("theme",r);for(let o=1;o<10;o+=1)s.style.setProperty(`--el-color-primary-light-${o}`,Ee(r,e,o*.1));s.style.setProperty("--el-color-primary-dark",Ee(r,t,.1)),Te.set("style",s.style.cssText)}),(r,o)=>{const i=S("el-color-picker");return f(),T(i,{modelValue:v(a),"onUpdate:modelValue":o[0]||(o[0]=u=>ae(a)?a.value=u:null),predefine:["#409EFF","#1890ff","#304156","#212121","#11a983","#13c2c2","#6959CD","#f5222d"],class:"theme-picker","popper-class":"theme-picker-dropdown"},null,8,["modelValue"])}}});const te=n=>(he("data-v-ae3e533e"),n=n(),_e(),n),jt={class:"drawer-container"},Xt=te(()=>y("h3",{class:"drawer-title"},"\u7CFB\u7EDF\u5E03\u5C40\u914D\u7F6E",-1)),Qt={class:"drawer-item"},Jt=te(()=>y("span",null,"\u4E3B\u9898\u989C\u8272",-1)),Zt={style:{float:"right",height:"26px",margin:"-3px 8px 0 0"}},en={class:"drawer-item"},tn=te(()=>y("span",null,"\u5F00\u542F Tags-View",-1)),nn={class:"drawer-item"},an=te(()=>y("span",null,"\u56FA\u5B9A Header",-1)),sn={class:"drawer-item"},rn=te(()=>y("span",null,"\u4FA7\u8FB9\u680F Logo",-1)),on=L({setup(n){const{setting:e}=W(),t=Ve({fixedHeader:e.fixedHeader,tagsView:e.tagsView,sidebarLogo:e.sidebarLogo}),{fixedHeader:s,tagsView:l,sidebarLogo:a}=De(t);function r(o){e.changeSetting({key:"theme",value:o})}return U(()=>t.fixedHeader,o=>{e.changeSetting({key:"fixedHeader",value:o})}),U(()=>t.tagsView,o=>{e.changeSetting({key:"tagsView",value:o})}),U(()=>t.sidebarLogo,o=>{e.changeSetting({key:"sidebarLogo",value:o})}),(o,i)=>{const u=S("el-switch");return f(),_("div",jt,[Xt,y("div",Qt,[Jt,y("div",Zt,[m(Gt,{onChange:r})])]),y("div",en,[tn,m(u,{modelValue:v(l),"onUpdate:modelValue":i[0]||(i[0]=c=>ae(l)?l.value=c:null),class:"drawer-switch"},null,8,["modelValue"])]),y("div",nn,[an,m(u,{modelValue:v(s),"onUpdate:modelValue":i[1]||(i[1]=c=>ae(s)?s.value=c:null),class:"drawer-switch"},null,8,["modelValue"])]),y("div",sn,[rn,m(u,{modelValue:v(a),"onUpdate:modelValue":i[2]||(i[2]=c=>ae(a)?a.value=c:null),class:"drawer-switch"},null,8,["modelValue"])])])}}});var ln=V(on,[["__scopeId","data-v-ae3e533e"]]);function z(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function Le(n,e){for(var t="",s=0,l=-1,a=0,r,o=0;o<=n.length;++o){if(o<n.length)r=n.charCodeAt(o);else{if(r===47)break;r=47}if(r===47){if(!(l===o-1||a===1))if(l!==o-1&&a===2){if(t.length<2||s!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var i=t.lastIndexOf("/");if(i!==t.length-1){i===-1?(t="",s=0):(t=t.slice(0,i),s=t.length-1-t.lastIndexOf("/")),l=o,a=0;continue}}else if(t.length===2||t.length===1){t="",s=0,l=o,a=0;continue}}e&&(t.length>0?t+="/..":t="..",s=2)}else t.length>0?t+="/"+n.slice(l+1,o):t=n.slice(l+1,o),s=o-l-1;l=o,a=0}else r===46&&a!==-1?++a:a=-1}return t}function cn(n,e){var t=e.dir||e.root,s=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+s:t+n+s:s}var Q={resolve:function(){for(var e="",t=!1,s,l=arguments.length-1;l>=-1&&!t;l--){var a;l>=0?a=arguments[l]:(s===void 0&&(s=process.cwd()),a=s),z(a),a.length!==0&&(e=a+"/"+e,t=a.charCodeAt(0)===47)}return e=Le(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(z(e),e.length===0)return".";var t=e.charCodeAt(0)===47,s=e.charCodeAt(e.length-1)===47;return e=Le(e,!t),e.length===0&&!t&&(e="."),e.length>0&&s&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return z(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var s=arguments[t];z(s),s.length>0&&(e===void 0?e=s:e+="/"+s)}return e===void 0?".":Q.normalize(e)},relative:function(e,t){if(z(e),z(t),e===t||(e=Q.resolve(e),t=Q.resolve(t),e===t))return"";for(var s=1;s<e.length&&e.charCodeAt(s)===47;++s);for(var l=e.length,a=l-s,r=1;r<t.length&&t.charCodeAt(r)===47;++r);for(var o=t.length,i=o-r,u=a<i?a:i,c=-1,d=0;d<=u;++d){if(d===u){if(i>u){if(t.charCodeAt(r+d)===47)return t.slice(r+d+1);if(d===0)return t.slice(r+d)}else a>u&&(e.charCodeAt(s+d)===47?c=d:d===0&&(c=0));break}var p=e.charCodeAt(s+d),b=t.charCodeAt(r+d);if(p!==b)break;p===47&&(c=d)}var k="";for(d=s+c+1;d<=l;++d)(d===l||e.charCodeAt(d)===47)&&(k.length===0?k+="..":k+="/..");return k.length>0?k+t.slice(r+c):(r+=c,t.charCodeAt(r)===47&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(z(e),e.length===0)return".";for(var t=e.charCodeAt(0),s=t===47,l=-1,a=!0,r=e.length-1;r>=1;--r)if(t=e.charCodeAt(r),t===47){if(!a){l=r;break}}else a=!1;return l===-1?s?"/":".":s&&l===1?"//":e.slice(0,l)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');z(e);var s=0,l=-1,a=!0,r;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var o=t.length-1,i=-1;for(r=e.length-1;r>=0;--r){var u=e.charCodeAt(r);if(u===47){if(!a){s=r+1;break}}else i===-1&&(a=!1,i=r+1),o>=0&&(u===t.charCodeAt(o)?--o===-1&&(l=r):(o=-1,l=i))}return s===l?l=i:l===-1&&(l=e.length),e.slice(s,l)}else{for(r=e.length-1;r>=0;--r)if(e.charCodeAt(r)===47){if(!a){s=r+1;break}}else l===-1&&(a=!1,l=r+1);return l===-1?"":e.slice(s,l)}},extname:function(e){z(e);for(var t=-1,s=0,l=-1,a=!0,r=0,o=e.length-1;o>=0;--o){var i=e.charCodeAt(o);if(i===47){if(!a){s=o+1;break}continue}l===-1&&(a=!1,l=o+1),i===46?t===-1?t=o:r!==1&&(r=1):t!==-1&&(r=-1)}return t===-1||l===-1||r===0||r===1&&t===l-1&&t===s+1?"":e.slice(t,l)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return cn("/",e)},parse:function(e){z(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var s=e.charCodeAt(0),l=s===47,a;l?(t.root="/",a=1):a=0;for(var r=-1,o=0,i=-1,u=!0,c=e.length-1,d=0;c>=a;--c){if(s=e.charCodeAt(c),s===47){if(!u){o=c+1;break}continue}i===-1&&(u=!1,i=c+1),s===46?r===-1?r=c:d!==1&&(d=1):r!==-1&&(d=-1)}return r===-1||i===-1||d===0||d===1&&r===i-1&&r===o+1?i!==-1&&(o===0&&l?t.base=t.name=e.slice(1,i):t.base=t.name=e.slice(o,i)):(o===0&&l?(t.name=e.slice(1,r),t.base=e.slice(1,i)):(t.name=e.slice(o,r),t.base=e.slice(o,i)),t.ext=e.slice(r,i)),o>0?t.dir=e.slice(0,o-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};Q.posix=Q;var He=Q;const un=L({setup(n,{expose:e}){const t=B(4),s=B(null),{tagsView:l}=W(),a=C(()=>l.visitedViews),{ctx:r}=de(),o=C(()=>s.value.$refs.wrap);ge(()=>{}),Me(()=>{});function i(c){const d=c.wheelDelta||-c.deltaY*40;o.value.scrollLeft=o.value.scrollLeft+d/4}function u(c){const p=r.$refs.scrollContainer.$el.offsetWidth,b=o.value;let k=null,D=null;if(a.value.length>0&&(k=a.value[0],D=a.value[a.value.length-1]),k===c)b.scrollLeft=0;else if(D===c)b.scrollLeft=b.scrollWidth-p;else{const A=document.getElementsByClassName("tags-view__item"),$=a.value.findIndex(E=>E===c);let Y=null,H=null;for(const E in A)E!=="length"&&Object.hasOwnProperty.call(A,E)&&(A[E].dataset.path===a.value[$-1].path&&(Y=A[E]),A[E].dataset.path===a.value[$+1].path&&(H=A[E]));const K=H.offsetLeft+H.offsetWidth+t.value,j=Y.offsetLeft-t.value;K>b.scrollLeft+p?b.scrollLeft=K-p:j<b.scrollLeft&&(b.scrollLeft=j)}}return e({moveToTarget:u}),(c,d)=>{const p=S("el-scrollbar");return f(),T(p,{ref_key:"scrollContainerRef",ref:s,vertical:!1,class:"scroll-container",onWheel:J(i,["prevent"])},{default:w(()=>[se(c.$slots,"default",{},void 0,!0)]),_:3},8,["onWheel"])}}});var dn=V(un,[["__scopeId","data-v-44875d2a"]]);const fn={class:"tags-view__container"},vn=["onClick"],mn=F(" \u5237\u65B0 "),hn=F(" \u5173\u95ED "),_n=F(" \u5173\u95ED\u5176\u5B83 "),pn=F(" \u5173\u95ED\u5DE6\u4FA7 "),gn=F(" \u5173\u95ED\u53F3\u4FA7 "),wn=F(" \u5173\u95ED\u6240\u6709 "),bn=L({setup(n){const{tagsView:e,permission:t}=W(),{proxy:s}=de(),l=pe(),a=re(),r=C(()=>e.visitedViews),o=C(()=>t.routes),i=B([]),u=B(!1),c=B({}),d=B(),p=B(0),b=B(0);U(a,()=>{A(),$()}),U(u,h=>{h?document.body.addEventListener("click",le):document.body.removeEventListener("click",le)});function k(h,g="/"){let P=[];return h.forEach(x=>{if(x.meta&&x.meta.affix){const I=He.resolve(g,x.path);P.push({fullPath:I,path:I,name:x.name,meta:ce({},x.meta)})}if(x.children){const I=k(x.children,x.path);I.length>=1&&(P=P.concat(I))}}),P}function D(){const h=k(o.value);i.value=h;for(const g of h)g.name&&e.addVisitedView(g)}function A(){a.name&&e.addView(a)}function $(){var g;const h=(g=de())==null?void 0:g.refs.tag;Pe(()=>{if(!(h==null||!Array.isArray(h)))for(const P of h)P.to.path===a.path&&(d.value.value.moveToTarget(P),P.to.fullPath!==a.fullPath&&e.updateVisitedView(a))})}function Y(h){return h.path===a.path}function H(h){return h.meta&&h.meta.affix}function K(){try{return c.value.fullPath===r.value[1].fullPath||c.value.fullPath==="/index"}catch{return!1}}function j(){try{return c.value.fullPath===r.value[r.value.length-1].fullPath}catch{return!1}}function E(h){e.delCachedView(h);const{fullPath:g}=h;Pe(()=>{l.replace({path:"/redirect"+g}).catch(P=>{console.warn(P)})})}function R(h,g){const P=h.slice(-1)[0];P&&P.fullPath?l.push(P.fullPath):g.name==="Dashboard"?l.replace({path:"/redirect"+g.fullPath}):l.push("/")}function X(h){e.delView(h).then(g=>{Y(h)&&R(g.visitedViews,h)})}function oe(){e.delLeftViews(c.value).then(h=>{h.visitedViews.find(g=>g.fullPath===a.fullPath)||R(h.visitedViews)})}function ie(){e.delRightViews(c.value).then(h=>{h.visitedViews.find(g=>g.fullPath===a.fullPath)||R(h.visitedViews)})}function Re(){e.delOtherViews(c.value).then(()=>{$()})}function Ie(h){e.delRightViews(c.value).then(g=>{i.value.some(P=>P.path===a.path)||R(g.visitedViews,h)})}function ze(h,g){const x=s==null?void 0:s.$el.getBoundingClientRect().left,be=(s==null?void 0:s.$el.offsetWidth)-105,ye=g.clientX-x+15;ye>be?p.value=be:p.value=ye,b.value=g.clientY,u.value=!0,c.value=h}function le(){u.value=!1}function Fe(){le()}return ge(()=>{D(),A()}),(h,g)=>{const P=S("router-link");return f(),_("div",fn,[m(dn,{ref_key:"scrollPaneRef",ref:d,class:"tags-view__wrapper",onScroll:Fe},{default:w(()=>[(f(!0),_(G,null,ee(v(r),x=>(f(),T(P,{key:x.path,class:N([Y(x)?"active":"","tags-view__item"]),to:{path:x.path,query:x.query,fullPath:x.fullPath},onMouseup:J(I=>H(x)?"":X(x),["middle"]),onContextmenu:J(I=>ze(x,I),["prevent"])},{default:w(()=>[F(q(v(Z)(x.meta.title))+" ",1),H(x)?O("",!0):(f(),_("span",{key:0,class:"icon-close",onClick:J(I=>X(x),["prevent","stop"])},[m(M,{"icon-class":"close"})],8,vn))]),_:2},1032,["class","to","onMouseup","onContextmenu"]))),128))]),_:1},512),fe(y("ul",{style:We({left:p.value+"px",top:b.value+"px"}),class:"tags-view__menu"},[y("li",{onClick:g[0]||(g[0]=x=>E(c.value))},[m(M,{"icon-class":"refresh"}),mn]),H(c.value)?O("",!0):(f(),_("li",{key:0,onClick:g[1]||(g[1]=x=>X(c.value))},[m(M,{"icon-class":"close"}),hn])),y("li",{onClick:Re},[m(M,{"icon-class":"close_other"}),_n]),K()?O("",!0):(f(),_("li",{key:1,onClick:oe},[m(M,{"icon-class":"close_left"}),pn])),j()?O("",!0):(f(),_("li",{key:2,onClick:ie},[m(M,{"icon-class":"close_right"}),gn])),y("li",{onClick:g[2]||(g[2]=x=>Ie(c.value))},[m(M,{"icon-class":"close_all"}),wn])],4),[[ve,u.value]])])}}});var yn=V(bn,[["__scopeId","data-v-3f8c932b"]]);function me(n){return/^(https?:|http?:|mailto:|tel:)/.test(n)}const{app:we}=W(),xn=C(()=>we.sidebar),An=C(()=>we.device),Cn=L({props:{to:{type:String,required:!0}},setup(n){const e=pe();return{push:()=>{An.value==="mobile"&&xn.value.opened==!0&&we.closeSideBar(!1),e.push(n.to).catch(s=>{console.log(s)})},isExternal:me}}}),kn=["href"];function Sn(n,e,t,s,l,a){return n.isExternal(n.to)?(f(),_("a",{key:0,href:n.to,target:"_blank",rel:"noopener"},[se(n.$slots,"default")],8,kn)):(f(),_("div",{key:1,onClick:e[0]||(e[0]=(...r)=>n.push&&n.push(...r))},[se(n.$slots,"default")]))}var Tn=V(Cn,[["render",Sn]]);const Pn={key:0},En={key:1},Ln=L({props:{item:{type:Object,required:!0},isNest:{type:Boolean,required:!1},basePath:{type:String,required:!0}},setup(n){const e=n,t=B();function s(a=[],r){a||(a=[]);const o=a.filter(i=>i.meta&&i.meta.hidden?!1:(t.value=i,!0));return o.length===1?!0:o.length===0?(t.value=Ce(ce({},r),{path:"",noShowingChildren:!0}),!0):!1}function l(a){return me(a)?a:me(e.basePath)?e.basePath:He.resolve(e.basePath,a)}return(a,r)=>{const o=S("el-menu-item"),i=S("sidebar-item",!0),u=S("el-sub-menu");return!n.item.meta||!n.item.meta.hidden?(f(),_("div",Pn,[s(n.item.children,n.item)&&(!t.value.children||t.value.noShowingChildren)&&(!n.item.meta||!n.item.meta.alwaysShow)?(f(),_(G,{key:0},[t.value.meta?(f(),T(Tn,{key:0,to:l(t.value.path)},{default:w(()=>[m(o,{index:l(t.value.path),class:N({"submenu-title-noDropdown":!n.isNest})},{title:w(()=>[F(q(v(Z)(t.value.meta.title)),1)]),default:w(()=>[t.value.meta&&t.value.meta.icon?(f(),T(M,{key:0,"icon-class":t.value.meta.icon},null,8,["icon-class"])):O("",!0)]),_:1},8,["index","class"])]),_:1},8,["to"])):O("",!0)],64)):(f(),T(u,{key:1,index:l(n.item.path),"popper-append-to-body":""},{title:w(()=>[n.item.meta&&n.item.meta.icon?(f(),T(M,{key:0,"icon-class":n.item.meta.icon},null,8,["icon-class"])):O("",!0),n.item.meta&&n.item.meta.title?(f(),_("span",En,q(v(Z)(n.item.meta.title)),1)):O("",!0)]),default:w(()=>[(f(!0),_(G,null,ee(n.item.children,c=>(f(),T(i,{key:c.path,item:c,"is-nest":!0,"base-path":l(c.path),class:"nest-menu"},null,8,["item","base-path"]))),128))]),_:1},8,["index"]))])):O("",!0)}}});var ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAADCCAMAAADEv1goAAAAilBMVEUAAACfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmfWOmaWwwpAAAALXRSTlMAEKkIvvnVF2r07gwqHkc34oIkx8PqTpN3ZKK4W5pxPd2IVNFCMOaNfdmuy7OZSRFHAAAJ8klEQVR42uzcibKaMBQG4ECMyCqrsm8qIvq//+t1pu3UKdYSvUWSmX4PcO8/mDkm5wTJf09UnncicrKTA7DKbSIfWqkMAPS0UohktLLGT53nUyIReswYfmGHRKKHbzcdfmPcHEkePm1DHWPu3iISsPYu/oBdY40IzkwChj8zbq3Ya6cqXDxX7ysiLK0M8HdB7BMxHQsDU9iQi1g2/fIAHp14a4c6KgOnQylW2fRjFy/IWnHKpuJkeI1RbE0iBL+J8DI3tgWo+rQNGN7Agnzxh28VBt5kqMvWHbq5MryvbnyymK0a4Uv0oFTIIrT4ii+Lhh1ZgKMa+BfW5y35ML8/YEoQNy44rEqbfBDdDQwTuqIiNL8xTNPV3efK5smrMYGFyfc8vrcGB7f50NpR2gxT6vuZ1RkMcAgSn8zPaibDGFlL7pT4wDCNDY5G5qW0V0y59KMUpzQCB2N/omQ+9FTo09/6j8uX5nwboMuMdUdJ1k8yTLbH/KYDB301V4uhUo3pT9568s/NI1fVROSRGWjxBVOynUKesjcXcBjIDHIDE+qJxgatCh2TVDKDcmq1p9PdVC0Plwm/wV9dNzbXLrrphAsfcXdjzPbGxAq/SsyXNqQChb+crVePApEg4Y1bS16llFcmQvh1r721qy7cxcNH6rv7cJoH+rLhL4n5lbmbsWR45inkC7Rw0fAxJV9AV4uG703yBYrA4SmVNrztJYqk4Wk76HtTzvDVuQbOUob3yxAQPjw88w+RdiqDBOH1DSUjdHuO8EMjdLVxz/bjIftw/1gEDq+Hu8cVkwEyhO8a+7GdZkCG8Gzl0Me+DoMM4Tvv4bG3q/EGtxdzb3NzxlVwm7oYi0UM7/b+uMb0B0CK8MN4fmTmmQ4pwtee9XDByQVkCM8ebuhZzyfJpVjh68YaN05veGojUPhSz9pxy3pvQI7w7fiKhlWuAUnCj46k2m4FSBN+tPMtdEga3o5rTEqEDE/zUIek4Ss1AuQMbzdrQM7wZrLSwcX1bMHCO2kHLizdKSL1Kgk5eQfwCTe2WI1WLcnA59JsxeoSU6cweC+q7gRrcZ/6GlxYWGpi9eftPORdMXtLrOGCWaWM93qqI9ZkhPpeBy76NVHEGusoOe897a7xxZpJ0eNggIuuVqZYAzXr7IJPkGtiTQOVMuDdx/SWYKPM3RCBi14cTTJPeFMj79ju1+CTJfZsQ2TL25hvvKIYgs+hP804AT+FUVG9ejs+1cElSp1Zx/dWBgQb7ZUV4/HuY1aJQmYPD704Ek5+EoLP+v6tNFd4f/j5KqTP9fe4367s1CMhHwoPqI45udithrc8hgklHwwPt7cnasxmDS6svp+u5w2v4pfVzvzbWSnTwcVIt5R8JLyd4i7a+89/r6DjPSu1CiELhAe75veHNn4phUv9rbxz3VYTBqIwGAJyB5WLAgreUDHv/3rtqj2llQgbQqmu7r9nLf3OmMtkMjOpZ/508PW+cuKk9iSo5xu5RJoQPmtUdTxXQrpZzjDd6+LtSeC1jJOGevwjXL1E/ZjYkqRp4SMuhv315/1NB3elSGRXErd8Lf0WkseQWYGD/f6jVcQ7WP67ro/bYKeC2Kv6yn5KeLlonX0OMuC9Te1UTwtfvvbGY4LAG8qvveF9LM9YJXfD0zq7f3p4028JWHTAN/a0yeEvAvD0yZX7JMtfn46PH2R5oxSsrRWHl1JjGPwtFDa7OLwcJgPgq7nArjRmuM+6eD3hvRLYlaaBl0g4o33ggylaz+CB1kV84MMfefAqDjBNwYtz15uesSztVjx4AgNMAy+lXhNS5rvEh7eD3+cwfPXJ8Mu3g09xeOXt4Nfe/wGffDL8/X+B14Zvxubmb8DPCJ78pAgczk++Nz78BoR3fYUyttxqg20fzujI8BSDP/qrr3i9I9BgdAnBn2H4jAApFX712wfFC5GOut3w82A8ePn43OFLoBOZuU70TngDho/a4bVj4QHJE7gWhToavF6SNnQnChhPSigPxj/egrHgC9KCvjFehxssMnjszCs6Crzhk1foYWs0n1YC58dFdB4F/sKFJ1raeXWlC0QHTSehI8DHEk/hCrh1o6pA709trr6A33LhTwoHfsv/XTOGyLgdBTrURfQmcRTrPHgLgq97YSFSfVsg3XotBh/MX3pSRYBdYO0FHGVB+PXrSZUmYBa6JQlKHJ7fJRTRPTX/Cfw5ldoE3tyeS/cN4SUbLL9Ypdr08F7HdIP7rhqjpVlcKAwfAqm6KoVWzfU4xvcF4Dk6bSDj05lLJoXPoS3STLH8Ii/W3g9eIlYEGV9PHDId/HWHboYh5i94hT0dvNujfeMZS8NMyUTw6qmPE37DjJ+dhOAZ7piRXm+MqGC9oDwcvoDh6TULe+ATB8tYD7Lhjn6GwT+UR6HZ7zkjRNXWHnY+LK4QfI1fOnKfsFc9caH2v7i0sFQZw+BreeURxzfXK6xVeM/A4CKszdKAXyit6/NO7vV4GqKbI+Po+5nO2Et4O+lyyvGvSlfYxPUXYFVimlDGMHi+gtI18cp8zPhIHri5mFftDqvWDc/oGWjID+TgQ53ea7/Jv9KO2WMD8IxRr8ZHH8ns7rFvtqC7Ua4zhsADonl0Qo0Plv4aM/f1pudRxhB4hUGiauTiD8OCSeEy95hwyxljELw5zxmIf2h0Oncy/pbpRtjIvznNUXf3GAPh6xsaRFX5O77lH5iRxBY3MKhgxv8zMGjFScBQefZjjPkVA7UsvvDldUIf56TY5RkfqAN+as/lXhKd4ezF14w/FksY/7J79HCobaRcdoQXGIQmbu6fft4urhiuPPt9q9iVOH7surH69B9x6nmtQkVfEZSd4sBwXTd78/mHriiKv+SEtY9aAz+8G5C/EJV5P3TCCcWUB50Nllc28bXLlY2sfPbqoGQVIvhG1sTfAYFBXNSbtR0IFr4qgK83E5DluUrHQj830BuOaHygAvhK+oRPgMAghB5sjibgR29F8AOfNFtuiLMbG/BcRzp8aeSch7/+BUYe8IgnsearQV9S1kFhJA8eLo7Tel6JzpXew3L2umDAuuSD0Yc8rnaaJ73G/pJXMMDPg8flRQ2DoPjbO7BwggUDdR48rjwKBYKE1vZuYCs8Egd2+q2a12xvSkJabJMAcNZsODCISs3GeAzO3ipBh4OKR/TdzRl0v0IAHcslqfFFnzUia+ANwRwJauL46xf49ADmhOJdCqgHouOSU8XgLcLWkBdaV3qL+7U5wui4tH2iPx9BB36P7Z9ful9AW65h+OEf6/4BvN/GH3AMMiAuPVh2OPvCDwqLCK1hOecNPMAaYvgb/XHJAdgIDwzyz5Hjy95vzqu1PcIHravf0FH3S9z6rjSKvlqR55EjSx8nea0wdo3CD0R/BFyykEifqsXQResbg9/K72awwAcAAAAASUVORK5CYII=";const On=["src"],Bn={key:1,class:"sidebar-title"},Vn=["src"],Dn={class:"sidebar-title"},Mn=L({props:{collapse:{type:Boolean,required:!0}},setup(n){const t=Ve({isCollapse:n.collapse}),{isCollapse:s}=De(t),l=B("Mecha-Admin");return(a,r)=>{const o=S("router-link");return f(),_("div",{class:N(["sidebar-logo-container",{collapse:v(s)}])},[m(Be,{name:"sidebarLogoFade"},{default:w(()=>[n.collapse?(f(),T(o,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:w(()=>[v(ne)?(f(),_("img",{key:0,src:v(ne),class:"sidebar-logo"},null,8,On)):(f(),_("h1",Bn,q(l.value),1))]),_:1})):(f(),T(o,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:w(()=>[v(ne)?(f(),_("img",{key:0,src:v(ne),class:"sidebar-logo"},null,8,Vn)):O("",!0),y("h1",Dn,q(l.value),1)]),_:1}))]),_:1})],2)}}});var Wn=V(Mn,[["__scopeId","data-v-0efc7402"]]);const $n="#bfcbd9",Hn="#409eff",Rn="#f4f4f5",In="#304156",zn="#263445",Fn="#1f2d3d",Nn="#001528",qn="210px";var ue={menuText:$n,menuActiveText:Hn,subMenuActiveText:Rn,menuBg:In,menuHover:zn,subMenuBg:Fn,subMenuHover:Nn,sideBarWidth:qn};const Kn=L({setup(n){const{permission:e,setting:t,app:s}=W(),l=re(),a=C(()=>e.routes),r=C(()=>t.sidebarLogo),o=C(()=>!s.sidebar.opened),i=C(()=>{const{meta:u,path:c}=l;return u.activeMenu?u.activeMenu:c});return(u,c)=>{const d=S("el-menu"),p=S("el-scrollbar");return f(),_("div",{class:N({"has-logo":v(r)})},[v(r)?(f(),T(Wn,{key:0,collapse:v(o)},null,8,["collapse"])):O("",!0),m(p,{"wrap-class":"scrollbar-wrapper"},{default:w(()=>[m(d,{"default-active":v(i),collapse:v(o),"background-color":v(ue).menuBg,"text-color":v(ue).menuText,"active-text-color":v(ue).menuActiveText,"unique-opened":!1,"collapse-transition":!1,mode:"vertical"},{default:w(()=>[(f(!0),_(G,null,ee(v(a),b=>(f(),T(Ln,{item:b,key:b.path,"base-path":b.path,"is-collapse":v(o)},null,8,["item","base-path","is-collapse"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])]),_:1})],2)}}});const Un=n=>(he("data-v-48d4c382"),n=n(),_e(),n),Yn=Un(()=>y("div",{class:"rightPanel-background"},null,-1)),Gn={class:"rightPanel"},jn={class:"rightPanel-items"},Xn=L({props:{buttonTop:{default:250,type:Number}},setup(n){const{setting:e}=W(),t=C(()=>e.theme),s=B(!1);U(s,i=>{i&&l(),i?Ut(document.body,"showRightPanel"):Yt(document.body,"showRightPanel")});function l(){window.addEventListener("click",a)}function a(i){let u=i.target.closest(".theme-picker-dropdown");u||(u=i.target.closest(".rightPanel"),u||(s.value=!1,window.removeEventListener("click",a)))}const r=B(tt);function o(){const i=r.value,u=document.querySelector("body");u.insertBefore(i,u.firstChild)}return ge(()=>{o()}),Me(()=>{r.value.remove()}),(i,u)=>(f(),_("div",{ref_key:"rightPanel",ref:r,class:N([{show:s.value},"rightPanel-container"])},[Yn,y("div",Gn,[y("div",{class:"handle-button",style:We({top:n.buttonTop+"px","background-color":v(t)}),onClick:u[0]||(u[0]=c=>s.value=!s.value)},[fe(m(v(nt),{style:{width:"1em",height:"1em","vertical-align":"middle"}},null,512),[[ve,s.value]]),fe(m(v(pt),{style:{width:"1em",height:"1em","vertical-align":"middle"}},null,512),[[ve,!s.value]])],4),y("div",jn,[se(i.$slots,"default",{},void 0,!0)])])],2))}});var Qn=V(Xn,[["__scopeId","data-v-48d4c382"]]);const Jn=L({setup(n){const{width:e}=at(),t=992,{app:s,setting:l}=W(),a=C(()=>s.sidebar),r=C(()=>s.device),o=C(()=>l.tagsView),i=C(()=>l.fixedHeader),u=C(()=>l.showSettings),c=C(()=>({hideSidebar:!a.value.opened,openSidebar:a.value.opened,withoutAnimation:a.value.withoutAnimation,mobile:r.value==="mobile"}));st(()=>{e.value<t?(s.toggleDevice("mobile"),s.closeSideBar(!0)):s.toggleDevice("desktop")});function d(){s.closeSideBar(!1)}return(p,b)=>(f(),_("div",{class:N([v(c),"app-wrapper"])},[v(r)==="mobile"&&v(a).opened?(f(),_("div",{key:0,class:"drawer-bg",onClick:d})):O("",!0),m(Kn,{class:"sidebar-container"}),y("div",{class:N([{hasTagsView:v(o)},"main-container"])},[y("div",{class:N({"fixed-header":v(i)})},[m(v(Ft)),v(o)?(f(),T(v(yn),{key:0})):O("",!0)],2),m(v(Kt)),v(u)?(f(),T(Qn,{key:0},{default:w(()=>[m(v(ln))]),_:1})):O("",!0)],2)],2))}});var aa=V(Jn,[["__scopeId","data-v-6a1f20af"]]);export{aa as default};
