import{n as u,_ as C,d as k,o as E,c as _,a as c,b as l,w as a,F,E as y,e as v,f as P,g as d,h as z,i as $,j,k as L}from"./index-f95716da.js";import{c as U,E as W}from"./el-select-a9def2c4.js";/* empty css                   */import{E as r}from"./index-c8f5a2e9.js";const B=e=>u.request({url:"api/classinfo/add",method:"post",data:e}),I=e=>u.request({url:"api/classinfo/page",method:"post",data:e}),q=e=>u.request({url:"api/classinfo/edit",method:"post",data:e}),A=e=>u.request({url:"api/classinfo/delete",params:e}),D=k({data(){return{classinfos:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,classinfo:{id:0,name:"",major:"",depart:"",school:"",state:0},formLabelWidth:80}},mounted(){this.getclassinfosPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.classinfo=U(e)},getclassinfosPage(e){I({current:e,size:2}).then(t=>{console.log(t);const p=t.data.page;this.classinfos=p.records,this.page=p}).catch(t=>{console.log(t)})},currentchange(e){this.getclassinfosPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),A({id:e}).then(t=>{if(t.success)this.getclassinfoPage(this.page.current);else return console.log(t.msg),!1}).catch(t=>{})},toAdd(){this.dialogFormVisible=!0,this.classinfo={id:0,name:"",major:"",depart:"",school:"",state:0}},save(){const e=this.classinfo;e.id==0?B(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getclassinfosPage(this.page.current),r(o.msg);else return r(o.msg),!1}).catch(o=>{r("网络错误联系管理员")}):q(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getclassinfoPage(this.page.current),r(o.msg);else return r(o.msg),!1}).catch(o=>{r("添加成功")})}}}),N={class:"classinfos"},T={class:"classInfo-tools"},M={class:"dialog-footer"};function G(e,o,t,p,H,J){const i=y,n=z,g=v,h=W,f=$,m=j,b=L,V=P;return E(),_(F,null,[c("div",N,[c("div",T,[l(i,{type:"warning",onClick:e.toAdd},{default:a(()=>[d("添加")]),_:1},8,["onClick"]),l(i,{type:"warning",onClick:e.searchById},{default:a(()=>[d("查询")]),_:1},8,["onClick"])]),l(g,{data:e.classinfos,style:{width:"100%"}},{default:a(()=>[l(n,{prop:"id",label:"班级编号",width:"150"}),l(n,{prop:"name",label:"班级名称",width:"120"}),l(n,{prop:"major",label:"专业",width:"120"}),l(n,{prop:"depart",label:"学院",width:"120"}),l(n,{prop:"school",label:"学校",width:"120"}),l(n,{prop:"state",label:"状态",width:"120"}),l(n,{fixed:"right",label:"功能管理",width:"120"},{default:a(s=>[l(i,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(s.row)},{default:a(()=>[d("更新")]),_:2},1032,["onClick"]),l(i,{link:"",type:"primary",size:"small",onClick:w=>e.del(s.row.id)},{default:a(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[6]||(o[6]=s=>e.dialogFormVisible=s),title:"添加班级"},{footer:a(()=>[c("span",M,[l(i,{onClick:o[5]||(o[5]=s=>e.dialogFormVisible=!1)},{default:a(()=>[d("取消")]),_:1}),l(i,{type:"primary",onClick:e.save},{default:a(()=>[d("保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(b,{model:e.classinfo},{default:a(()=>[l(m,{label:"班级名称","label-width":e.formLabelWidth},{default:a(()=>[l(f,{modelValue:e.classinfo.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.classinfo.name=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"专业","label-width":e.formLabelWidth},{default:a(()=>[l(f,{modelValue:e.classinfo.major,"onUpdate:modelValue":o[1]||(o[1]=s=>e.classinfo.major=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"学院","label-width":e.formLabelWidth},{default:a(()=>[l(f,{modelValue:e.classinfo.depart,"onUpdate:modelValue":o[2]||(o[2]=s=>e.classinfo.depart=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"学校","label-width":e.formLabelWidth},{default:a(()=>[l(f,{modelValue:e.classinfo.school,"onUpdate:modelValue":o[3]||(o[3]=s=>e.classinfo.school=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"状态","label-width":e.formLabelWidth},{default:a(()=>[l(f,{modelValue:e.classinfo.state,"onUpdate:modelValue":o[4]||(o[4]=s=>e.classinfo.state=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const S=C(D,[["render",G]]);export{S as default};
