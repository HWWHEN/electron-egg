var Y=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var S=(o,n,r)=>n in o?Y(o,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[n]=r,L=(o,n)=>{for(var r in n||(n={}))ue.call(n,r)&&S(o,r,n[r]);if(R)for(var r of R(n))te.call(n,r)&&S(o,r,n[r]);return o},P=(o,n)=>Z(o,ee(n));import{a4 as x,d as le,r as z,$ as y,J as ae,L as oe,M as ne,f as p,a5 as re,o as c,c as k,j as e,h as l,l as u,a6 as ie,R as se,g as D,t as f,B as b,a as E,z as v,C as de,E as h}from"./index-ad449e55.js";import{g as pe,u as N}from"./filter-4c8c4852.js";function me(o){return x({url:"/game_bans",method:"get",params:o})}function ce(o){return x({url:"/game_bans",method:"post",data:o})}function _e(o){return x({url:"/game_bans/update",method:"post",data:o})}const ge={class:"app-container"},fe=v("\u65B0\u589E"),be={key:0},Fe={key:1},Ce=v("\u89E3\u5C01"),Be={class:"dialog-footer"},ye=v("\u786E \u5B9A"),De=v("\u53D6 \u6D88"),Ee={name:"user"},Ve=le(P(L({},Ee),{setup(o){const n=z(y),r=z(y),i=ae({loading:!0,ids:[],single:!0,multiple:!0,total:0,banList:[],dialog:{visible:!1},formData:{},queryParams:{page:1,pageSize:10},rules:{type:[{required:!0,message:"\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],unBanTime:[{required:!0,message:"\u89E3\u5C01\u65F6\u95F4",trigger:"blur"}],address:[{required:!0,message:"\u5C01\u7981\u8D26\u53F7\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],ip:[{required:!0,message:"\u5C01\u7981ip\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],reason:[{required:!0,message:"\u5C01\u7981\u539F\u56E0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),{loading:$,queryParams:g,total:T,dialog:w,formData:s,rules:j}=oe(i);function F(){i.loading=!0,me(i.queryParams).then(({data:d})=>{i.banList=d.items,i.total=d.count,i.loading=!1})}function I(d){i.ids=d.map(a=>a.serverId),i.single=d.length!==1,i.multiple=!d.length}async function J(){i.dialog={title:"\u6DFB\u52A0\u5C01\u7981",visible:!0}}function Q(d){de.confirm("\u786E\u8BA4\u8981\u89E3\u5C01"+d._id+"\u5417?","\u8B66\u544A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>_e({_id:d._id,unBanTime:0}).then(()=>{h.success("\u89E3\u9664\u5C01\u7981\u6210\u529F"),F()}).catch(()=>{h.warning("\u89E3\u9664\u5C01\u7981\u5931\u8D25")})).catch(()=>{h.info("\u53D6\u6D88\u89E3\u9664\u5C01\u7981")})}function G(){r.value.validate(d=>{d&&ce(i.formData).then(()=>{h.success("\u6DFB\u52A0\u5C01\u7981\u6210\u529F"),A(),F()})})}function A(){i.dialog.visible=!1,i.formData._id=void 0,r.value.resetFields()}return ne(()=>{F()}),(d,a)=>{const C=p("el-button"),_=p("el-form-item"),q=p("el-col"),U=p("el-row"),m=p("el-table-column"),H=p("el-table"),K=p("pagination"),O=p("el-card"),B=p("el-option"),M=p("el-select"),V=p("el-input"),W=p("el-dialog"),X=re("loading");return c(),k("div",ge,[e(U,{gutter:20},{default:l(()=>[e(q,{span:24,xs:24},{default:l(()=>[e(O,{class:"box-card"},{default:l(()=>[e(u(y),{ref_key:"queryFormRef",ref:n,model:u(g),inline:!0},{default:l(()=>[e(U,null,{default:l(()=>[e(q,{span:18,xs:24},{default:l(()=>[e(_,null,{default:l(()=>[e(C,{type:"success",icon:u(ie),onClick:J},{default:l(()=>[fe]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),se((c(),D(H,{data:u(i).banList,onSelectionChange:I},{default:l(()=>[e(m,{label:"\u5C01\u7981id",align:"center",prop:"_id"}),e(m,{label:"\u5C01\u7981\u7C7B\u578B",align:"center",prop:"type",width:"80"}),e(m,{label:"\u5C01\u7981\u5730\u5740/ip",align:"center"},{default:l(t=>[t.row.type==1?(c(),k("p",be,f(t.row.address),1)):b("",!0),t.row.type==2?(c(),k("p",Fe,f(t.row.ip),1)):b("",!0)]),_:1}),e(m,{label:"\u89E3\u5C01\u65F6\u95F4",align:"center",width:"160"},{default:l(t=>[E("p",null,f(u(pe)(t.row.unBanTime)),1)]),_:1}),e(m,{label:"\u5C01\u7981\u539F\u56E0",align:"center",prop:"reason"}),e(m,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",width:"160"},{default:l(t=>[E("p",null,f(u(N)(t.row.createdAt)),1)]),_:1}),e(m,{label:"\u66F4\u65B0\u65F6\u95F4",align:"center",width:"160"},{default:l(t=>[E("p",null,f(u(N)(t.row.updatedAt)),1)]),_:1}),e(m,{label:"\u64CD\u4F5C",align:"center",width:"120"},{default:l(t=>[e(C,{type:"primary",plain:"",onClick:he=>Q(t.row)},{default:l(()=>[Ce]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[X,u($)]]),u(T)>0?(c(),D(K,{key:0,total:u(T),page:u(g).page,"onUpdate:page":a[0]||(a[0]=t=>u(g).page=t),limit:u(g).pageSize,"onUpdate:limit":a[1]||(a[1]=t=>u(g).pageSize=t),onPagination:F},null,8,["total","page","limit"])):b("",!0)]),_:1})]),_:1})]),_:1}),e(W,{title:u(w).title,modelValue:u(w).visible,"onUpdate:modelValue":a[7]||(a[7]=t=>u(w).visible=t),width:"600px","append-to-body":"",onClose:A},{footer:l(()=>[E("div",Be,[e(C,{type:"primary",onClick:G},{default:l(()=>[ye]),_:1}),e(C,{onClick:A},{default:l(()=>[De]),_:1})])]),default:l(()=>[e(u(y),{ref_key:"dataFormRef",ref:r,model:u(s),rules:u(j),"label-width":"100px"},{default:l(()=>[e(_,{prop:"type",label:"\u5C01\u7981\u7C7B\u578B"},{default:l(()=>[e(M,{modelValue:u(s).type,"onUpdate:modelValue":a[2]||(a[2]=t=>u(s).type=t),placeholder:"\u5C01\u7981\u7C7B\u578B",clearable:"",style:{width:"200px"}},{default:l(()=>[e(B,{label:"\u8D26\u53F7",value:"1"}),e(B,{label:"ip",value:"2"})]),_:1},8,["modelValue"])]),_:1}),e(_,{prop:"unBanTime",label:"\u89E3\u5C01\u65F6\u95F4"},{default:l(()=>[e(M,{modelValue:u(s).unBanTime,"onUpdate:modelValue":a[3]||(a[3]=t=>u(s).unBanTime=t),placeholder:"\u89E3\u5C01\u65F6\u95F4",clearable:"",style:{width:"200px"}},{default:l(()=>[e(B,{label:"7 Day",value:Math.floor(new Date().getTime()/1e3+604800)},null,8,["value"]),e(B,{label:"15 Day",value:Math.floor(new Date().getTime()/1e3)+1296e3},null,8,["value"])]),_:1},8,["modelValue"])]),_:1}),u(s).type=="1"?(c(),D(_,{key:0,label:"\u8D26\u53F7",prop:"address"},{default:l(()=>[e(V,{modelValue:u(s).address,"onUpdate:modelValue":a[4]||(a[4]=t=>u(s).address=t),placeholder:"\u8BF7\u8F93\u5165\u5C01\u7981\u8D26\u53F7"},null,8,["modelValue"])]),_:1})):b("",!0),u(s).type=="2"?(c(),D(_,{key:1,label:"ip",prop:"ip"},{default:l(()=>[e(V,{modelValue:u(s).ip,"onUpdate:modelValue":a[5]||(a[5]=t=>u(s).ip=t),placeholder:"\u8BF7\u8F93\u5165\u5C01\u7981ip"},null,8,["modelValue"])]),_:1})):b("",!0),e(_,{label:"\u539F\u56E0",prop:"reason"},{default:l(()=>[e(V,{modelValue:u(s).reason,"onUpdate:modelValue":a[6]||(a[6]=t=>u(s).reason=t),placeholder:"\u8BF7\u8F93\u5165\u5C01\u7981\u539F\u56E0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}}));export{Ve as default};
