var ne=Object.defineProperty,de=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var L=(s,n,d)=>n in s?ne(s,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[n]=d,M=(s,n)=>{for(var d in n||(n={}))pe.call(n,d)&&L(s,d,n[d]);if(P)for(var d of P(n))me.call(n,d)&&L(s,d,n[d]);return s},S=(s,n)=>de(s,ie(n));import{a4 as E,b as ce,d as fe,r as I,$ as y,J as _e,L as ge,M as Fe,f as m,a5 as be,o as B,c as Q,j as e,h as o,l as u,a2 as h,aa as De,R as Be,g as v,a as C,t as V,p as Ee,B as Z,F as ye,k as Ce,z as g,C as k,E as b}from"./index-ad449e55.js";import{l as we}from"./index-d5cbff93.js";import{u as j}from"./filter-4c8c4852.js";import{u as Ae}from"./index-a08904d7.js";import{r as he}from"./refresh-1942c72f.js";function ve(s){return E({url:"/marketing/distribution/users?"+we.stringify(s,{indices:!1}),method:"get"})}function Ve(){return E({url:"/marketing/distribution/users/roles",method:"get"})}function ke(s){return E({url:"/marketing/distribution/users",method:"post",data:s})}function xe(s){return E({url:"/marketing/distribution/users/update",method:"post",data:s})}function Ue(s){return E({url:"/marketing/distribution/change_address",method:"post",data:s})}function Re(s){return E({url:"/distribution/sync-agent",method:"post",data:s})}const qe={class:"app-container"},Ke=g("\u641C\u7D22"),Te=g("\u91CD\u7F6E"),$e=g("\u65B0\u5EFA\u5206\u9500\u5546"),ze=g("\u4FEE\u6539\u7ED1\u5B9A"),Ne=g("\u7F16\u8F91"),Pe=g("\u540C\u6B65\u5230\u94FE"),Le={class:"dialog-footer"},Me=g("\u786E \u5B9A"),Se=g("\u53D6 \u6D88"),Ie={class:"dialog-footer"},Qe=g("\u786E \u5B9A"),Ze=g("\u53D6 \u6D88"),je={name:"user"},Je=fe(S(M({},je),{setup(s){const{toClipboard:n}=Ae(),d=I(y),D=I(y),a=_e({loading:!0,ids:[],single:!0,multiple:!0,total:0,distributionUserList:[],dialog:{visible:!1},updateDialog:{visible:!1},queryParams:{page:1,pageSize:10},formData:{password:"mecha2022"},updateFormData:{},agentFormData:{},rules:{username:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{required:!0,pattern:/(?=.*[0-9])(?=.*[a-zA-Z]).{8,32}/,message:"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u6570\u7EC4\u548C\u5B57\u6BCD,\u957F\u5EA68-32\u4F4D\u4E4B\u95F4",trigger:"blur"}],roles:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},updateRules:{reset_password:[{pattern:/(?=.*[0-9])(?=.*[a-zA-Z]).{8,32}/,message:"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u6570\u7EC4\u548C\u5B57\u6BCD,\u957F\u5EA68-32\u4F4D\u4E4B\u95F4",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},allRoles:[]}),{loading:J,queryParams:i,total:x}=ge(a);function f(){a.loading=!0,ve(a.queryParams).then(({data:r})=>{a.distributionUserList=r.items,a.total=r.count,a.loading=!1}),Ve().then(r=>{a.allRoles=r.data})}function G(r){k.alert(`\u786E\u5B9A\u8981\u5C06\u7528\u6237[${r.username}]\u7684\u94B1\u5305\u5730\u5740\u540C\u6B65\u5230\u94FE\u4E0A\u4E48`,"TIP",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{Re({id:r.id}).then(()=>{b.success("\u53D1\u8D77\u540C\u6B65\u6210\u529F")})})}const H=r=>{var l="";switch(r){case 0:l="successbox";break;case 1:l="warningbox";break;case 2:l="errorbox";break}return l},O=r=>{var l="";switch(r){case 0:l="success";break;case 1:l="lock";break;case 2:l="ban";break}return l};function W(){d.value.resetFields(),f()}function X(r){k.prompt("\u8BF7\u8F93\u5165\u300C"+r+"\u300D\u7684\u65B0\u7ED1\u5B9A\u94B1\u5305\u5730\u5740","\u4FEE\u6539\u7ED1\u5B9A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(({value:l})=>{if(!l)return b.warning("\u8BF7\u8F93\u5165\u65B0\u94B1\u5305\u5730\u5740"),!1;Ue({distUserId:r,newAddress:l}).then(()=>{b.success("\u4FEE\u6539\u7533\u8BF7\u53D1\u9001\u6210\u529F\uFF0C\u65B0\u5730\u5740\u662F\uFF1A"+l)})})}async function Y(){a.dialog={title:"\u65B0\u5EFA\u5206\u9500\u5546",visible:!0}}async function ee(r){a.updateFormData.id=r.id,a.updateFormData.status=r.status,a.updateDialog={title:"\u4FEE\u6539\u5206\u9500\u5546",visible:!0}}const ue=async r=>{try{await n(r),b.success("\u590D\u5236\u6210\u529F")}catch{b.error("\u590D\u5236\u5931\u8D25")}};function te(){D.value.validate(r=>{r&&ke(a.formData).then(l=>{b.success("\u65B0\u589E\u5206\u9500\u5546\u6210\u529F");let c=`username:${a.formData.username},password:${a.formData.password},code:${l.data.code}`;k.alert(c,"\u65B0\u7528\u6237\u4FE1\u606F",{confirmButtonText:"\u590D\u5236\u5E76\u5173\u95ED",cancelButtonText:"\u53D6\u6D88"}).then(({value:p})=>{ue(c)}).finally(()=>{w(),f()})})})}function ae(){D.value.validate(r=>{r&&(a.updateFormData.reset_password==""&&delete a.updateFormData.reset_password,xe(a.updateFormData).then(()=>{b.success("\u4FEE\u6539\u5206\u9500\u5546\u6210\u529F"),U(),f()}))})}function w(){a.dialog.visible=!1,a.formData={password:"mecha2022"},D.value.resetFields()}function U(){a.updateDialog.visible=!1,a.updateFormData={},D.value.resetFields()}return Fe(()=>{f()}),(r,l)=>{const c=m("el-input"),p=m("el-form-item"),_=m("el-button"),R=m("el-col"),q=m("el-row"),F=m("el-table-column"),le=m("el-table"),oe=m("pagination"),re=m("el-card"),A=m("el-option"),K=m("el-select"),T=m("el-dialog"),se=be("loading");return B(),Q("div",qe,[e(q,{gutter:20},{default:o(()=>[e(R,{span:24,xs:24},{default:o(()=>[e(re,{class:"box-card"},{default:o(()=>[e(u(y),{ref_key:"queryFormRef",ref:d,model:u(i),inline:!0},{default:o(()=>[e(q,null,{default:o(()=>[e(R,{span:24,xs:24},{default:o(()=>[e(p,{prop:"id"},{default:o(()=>[e(c,{modelValue:u(i).id,"onUpdate:modelValue":l[0]||(l[0]=t=>u(i).id=t),placeholder:"id",clearable:"",style:{width:"200px"},onKeyup:h(f,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(p,{prop:"username"},{default:o(()=>[e(c,{modelValue:u(i).username,"onUpdate:modelValue":l[1]||(l[1]=t=>u(i).username=t),placeholder:"\u7528\u6237\u540D",clearable:"",style:{width:"200px"},onKeyup:h(f,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(p,{prop:"code"},{default:o(()=>[e(c,{modelValue:u(i).code,"onUpdate:modelValue":l[2]||(l[2]=t=>u(i).code=t),placeholder:"\u9080\u8BF7\u7801",clearable:"",style:{width:"200px"},onKeyup:h(f,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(p,{prop:"address"},{default:o(()=>[e(c,{modelValue:u(i).address,"onUpdate:modelValue":l[3]||(l[3]=t=>u(i).address=t),placeholder:"\u94B1\u5305\u5730\u5740",clearable:"",style:{width:"200px"},onKeyup:h(f,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(p,null,{default:o(()=>[e(_,{type:"primary",icon:u(De),onClick:f},{default:o(()=>[Ke]),_:1},8,["icon"]),e(_,{icon:u(he),onClick:W},{default:o(()=>[Te]),_:1},8,["icon"])]),_:1}),e(p,null,{default:o(()=>[e(_,{type:"success",onClick:Y},{default:o(()=>[$e]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),Be((B(),v(le,{data:u(a).distributionUserList},{default:o(()=>[e(F,{label:"id",align:"center",prop:"id",width:"100"}),e(F,{label:"\u7528\u6237\u540D",align:"center",prop:"username",width:"100"}),e(F,{label:"\u9080\u8BF7\u7801",align:"center",prop:"code",width:"100"}),e(F,{label:"\u914D\u7F6E\u94B1\u5305",align:"center",prop:"address"}),e(F,{label:"\u94FE\u4E0A\u94B1\u5305",align:"center",prop:"linkAddr"}),e(F,{label:"\u72B6\u6001",align:"center",width:"120"},{default:o(t=>[C("span",{class:Ee(H(t.row.status))},V(O(t.row.status)),3)]),_:1}),e(F,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",width:"180"},{default:o(t=>[C("p",null,V(u(j)(t.row.createdAt)),1)]),_:1}),e(F,{label:"\u4FEE\u6539\u65F6\u95F4",align:"center",width:"180"},{default:o(t=>[C("p",null,V(u(j)(t.row.updatedAt)),1)]),_:1}),e(F,{label:"\u64CD\u4F5C",align:"center",width:"200"},{default:o(t=>{var $,z;return[e(_,{type:"primary",plain:"",onClick:N=>X(t.row.id)},{default:o(()=>[ze]),_:2},1032,["onClick"]),e(_,{type:"primary",plain:"",onClick:N=>ee(t.row)},{default:o(()=>[Ne]),_:2},1032,["onClick"]),((z=($=t.row)==null?void 0:$.address)==null?void 0:z.toUpperCase())!=t.row.linkAddr.toUpperCase()&&t.row.address&&t.row.status==0?(B(),v(_,{key:0,type:"success",plain:"",onClick:N=>G(t.row)},{default:o(()=>[Pe]),_:2},1032,["onClick"])):Z("",!0)]}),_:1})]),_:1},8,["data"])),[[se,u(J)]]),u(x)>0?(B(),v(oe,{key:0,total:u(x),page:u(i).page,"onUpdate:page":l[4]||(l[4]=t=>u(i).page=t),limit:u(i).pageSize,"onUpdate:limit":l[5]||(l[5]=t=>u(i).pageSize=t),onPagination:f},null,8,["total","page","limit"])):Z("",!0)]),_:1})]),_:1})]),_:1}),e(T,{title:u(a).dialog.title,modelValue:u(a).dialog.visible,"onUpdate:modelValue":l[10]||(l[10]=t=>u(a).dialog.visible=t),width:"600px","append-to-body":"",onClose:w},{footer:o(()=>[C("div",Le,[e(_,{type:"primary",onClick:te},{default:o(()=>[Me]),_:1}),e(_,{onClick:w},{default:o(()=>[Se]),_:1})])]),default:o(()=>[e(u(y),{ref_key:"dataFormRef",ref:D,model:u(a).formData,rules:u(a).rules,"label-width":"80px"},{default:o(()=>[e(p,{label:"\u7528\u6237\u540D",prop:"username"},{default:o(()=>[e(c,{modelValue:u(a).formData.username,"onUpdate:modelValue":l[6]||(l[6]=t=>u(a).formData.username=t),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u7528\u6237\u5BC6\u7801",prop:"password"},{default:o(()=>[e(c,{modelValue:u(a).formData.password,"onUpdate:modelValue":l[7]||(l[7]=t=>u(a).formData.password=t),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u9080\u8BF7\u7801",prop:"code"},{default:o(()=>[e(c,{modelValue:u(a).formData.code,"onUpdate:modelValue":l[8]||(l[8]=t=>u(a).formData.code=t),placeholder:"\u7559\u7A7A\u81EA\u52A8\u751F\u6210"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u89D2\u8272",prop:"roles"},{default:o(()=>[e(K,{modelValue:u(a).formData.roles,"onUpdate:modelValue":l[9]||(l[9]=t=>u(a).formData.roles=t),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u89D2\u8272",style:{width:"240px"}},{default:o(()=>[(B(!0),Q(ye,null,Ce(u(a).allRoles,t=>(B(),v(A,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),e(T,{title:u(a).updateDialog.title,modelValue:u(a).updateDialog.visible,"onUpdate:modelValue":l[13]||(l[13]=t=>u(a).updateDialog.visible=t),width:"600px","append-to-body":"",onClose:w},{footer:o(()=>[C("div",Ie,[e(_,{type:"primary",onClick:ae},{default:o(()=>[Qe]),_:1}),e(_,{onClick:U},{default:o(()=>[Ze]),_:1})])]),default:o(()=>[e(u(y),{ref_key:"dataFormRef",ref:D,model:u(a).updateFormData,rules:u(a).updateRules,"label-width":"80px"},{default:o(()=>[e(p,{label:"\u65B0\u5BC6\u7801",prop:"reset_password"},{default:o(()=>[e(c,{modelValue:u(a).updateFormData.reset_password,"onUpdate:modelValue":l[11]||(l[11]=t=>u(a).updateFormData.reset_password=t),modelModifiers:{trim:!0},placeholder:"\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u72B6\u6001",prop:"status"},{default:o(()=>[e(K,{modelValue:u(a).updateFormData.status,"onUpdate:modelValue":l[12]||(l[12]=t=>u(a).updateFormData.status=t),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u72B6\u6001",style:{width:"240px"}},{default:o(()=>[e(A,{label:"\u6B63\u5E38",value:0}),e(A,{label:"lock",value:1}),e(A,{label:"ban",value:2})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}}));var eu=ce(Je,[["__scopeId","data-v-5bddeda4"]]);export{eu as default};
