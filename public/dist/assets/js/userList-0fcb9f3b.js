var D=Object.defineProperty,F=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(t,a,e)=>a in t?D(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,y=(t,a)=>{for(var e in a||(a={}))R.call(a,e)&&v(t,e,a[e]);if(b)for(var e of b(a))z.call(a,e)&&v(t,e,a[e]);return t},B=(t,a)=>F(t,L(a));import{a4 as E,d as S,r as U,$ as k,J as M,L as N,M as V,f as s,a5 as j,o as d,c as A,j as n,h as r,l as o,R as J,g as x,B as Q}from"./index-ad449e55.js";function $(t){return E({url:"/users",method:"get",params:t})}const G={class:"app-container"},H={name:"user"},O=S(B(y({},H),{setup(t){const a=U(k),e=M({loading:!0,ids:[],single:!0,multiple:!0,total:0,userList:[],dialog:{visible:!1},queryParams:{page:1,pageSize:10}}),{loading:h,queryParams:i,total:_}=N(e);function m(){e.loading=!0,$(e.queryParams).then(({data:c})=>{e.userList=c.items,e.total=c.count,e.loading=!1})}return V(()=>{m()}),(c,u)=>{const g=s("el-col"),f=s("el-row"),l=s("el-table-column"),q=s("el-table"),w=s("pagination"),P=s("el-card"),C=j("loading");return d(),A("div",G,[n(f,{gutter:20},{default:r(()=>[n(g,{span:24,xs:24},{default:r(()=>[n(P,{class:"box-card"},{default:r(()=>[n(o(k),{ref_key:"queryFormRef",ref:a,model:o(i),inline:!0},{default:r(()=>[n(f,null,{default:r(()=>[n(g,{span:24,xs:24})]),_:1})]),_:1},8,["model"]),J((d(),x(q,{data:o(e).userList},{default:r(()=>[n(l,{label:"\u7528\u6237id",align:"center",prop:"_id"}),n(l,{label:"\u7528\u6237\u8D26\u6237",align:"center",prop:"address",width:"350"}),n(l,{label:"\u6635\u79F0",align:"center",prop:"nickname"}),n(l,{label:"\u90AE\u7BB1",align:"center",prop:"email"}),n(l,{label:"\u89D2\u8272",align:"center",prop:"avatar"}),n(l,{label:"\u7528\u6237\u72B6\u6001",align:"center",prop:"status"})]),_:1},8,["data"])),[[C,o(h)]]),o(_)>0?(d(),x(w,{key:0,total:o(_),page:o(i).page,"onUpdate:page":u[0]||(u[0]=p=>o(i).page=p),limit:o(i).pageSize,"onUpdate:limit":u[1]||(u[1]=p=>o(i).pageSize=p),onPagination:m},null,8,["total","page","limit"])):Q("",!0)]),_:1})]),_:1})]),_:1})])}}}));export{O as default};
