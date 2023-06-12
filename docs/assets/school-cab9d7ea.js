import{n as m,_ as y,d as D,o as v,c as q,b as e,w as a,a as i,F,k,f as C,e as E,x as u,g as f,j as U,E as $,i as L,h as W}from"./index-19735745.js";import{E as h}from"./index-07cb7aef.js";import{E as B}from"./index-f159de2f.js";const N=l=>m.request({url:"api/school/add",method:"post",data:l}),T=()=>m.request({url:"api/school/all",method:"get"}),S=l=>m.request({url:"api/school/checkname",method:"get",params:l}),_=l=>m.request({url:"api/school/colums",method:"get",params:l}),I=l=>m.request({url:"api/school/delete",method:"get",params:l}),z=l=>m.request({url:"api/school/edit",method:"post",data:l}),A=l=>m.request({url:"api/school/enable",method:"get",params:l}),M=l=>m.request({url:`api/school/one/${l}`,method:"get"}),Q=l=>m.request({url:"api/school/search",method:"post",data:l}),c={add:N,all:T,checkName:S,getCommunitiesByColums:_,remove:I,update:z,query:A,one:M,getSchoolsByRegion:Q};const j=D({data(){return{list:[],school:{},dialogFormVisible:!1,queryForm:{id:""},dialogVisible:!1,dialogData:{},formLabelWidth:"80px"}},mounted(){this.fetchData()},methods:{fetchData(){c.all().then(l=>{console.log(l),this.list=l.data.schools})},handleQuery(){const l=this.queryForm.id;c.one(l).then(o=>{console.log(o),this.dialogData=o.data.school,this.dialogVisible=!0}).catch(o=>{console.error(o),h.error("查询失败")})},toAdd(){this.school={},this.dialogFormVisible=!0},handleEdit(l){const o={id:l};console.log(o),c.update(o).then(r=>{console.log(r),this.school=r.data.school,this.dialogFormVisible=!0}).catch(r=>{console.error(r),h.error("获取学校信息失败")})},handleDelete(l){B.confirm("确定要删除该学校吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const o={id:l};c.remove(o).then(r=>{console.log(r),this.fetchData(),h.success("删除成功")}).catch(r=>{console.error(r),h.error("删除失败")})}).catch(()=>{})},confirm(){this.school.id?this.updateSchool():this.addSchool()},addSchool(){c.add(this.school).then(l=>{console.log(l),this.dialogFormVisible=!1,this.fetchData(),h.success("添加成功")}).catch(l=>{console.error(l),h.error("添加失败")})},updateSchool(){c.update(this.school).then(l=>{console.log(l),this.dialogFormVisible=!1,this.fetchData(),h.success("修改成功")}).catch(l=>{console.error(l),h.error("修改失败")})}}}),R={class:"footer-container"},G={class:"query-form"},H={class:"root"},J={class:"dialog-footer"},K={class:"table"};function O(l,o,r,P,X,Y){const d=U,b=k,p=$,g=C,n=L,s=W,V=E;return v(),q(F,null,[e(g,{modelValue:l.dialogVisible,"onUpdate:modelValue":o[1]||(o[1]=t=>l.dialogVisible=t),title:"查询结果",width:"30%"},{default:a(()=>[e(b,{model:l.dialogData},{default:a(()=>[e(d,{label:"省份"},{default:a(()=>[i("span",null,u(l.dialogData.province),1)]),_:1}),e(d,{label:"城市"},{default:a(()=>[i("span",null,u(l.dialogData.city),1)]),_:1}),e(d,{label:"县"},{default:a(()=>[i("span",null,u(l.dialogData.area),1)]),_:1}),e(d,{label:"学校名称"},{default:a(()=>[i("span",null,u(l.dialogData.schoolName),1)]),_:1}),e(d,{label:"学校说明"},{default:a(()=>[i("span",null,u(l.dialogData.description),1)]),_:1}),e(d,{label:"纬度"},{default:a(()=>[i("span",null,u(l.dialogData.latitude),1)]),_:1}),e(d,{label:"经度"},{default:a(()=>[i("span",null,u(l.dialogData.longitude),1)]),_:1}),e(d,{label:"是否启用"},{default:a(()=>[i("span",null,u(l.dialogData.enable),1)]),_:1}),e(d,{label:"住址"},{default:a(()=>[i("span",null,u(l.dialogData.address),1)]),_:1})]),_:1},8,["model"]),i("div",R,[e(p,{onClick:o[0]||(o[0]=t=>l.dialogVisible=!1)},{default:a(()=>[f("关闭")]),_:1})])]),_:1},8,["modelValue"]),i("div",G,[e(b,{model:l.queryForm,inline:""},{default:a(()=>[e(d,{label:""},{default:a(()=>[e(n,{modelValue:l.queryForm.id,"onUpdate:modelValue":o[2]||(o[2]=t=>l.queryForm.id=t),placeholder:"请输入id",clearable:""},null,8,["modelValue"])]),_:1}),e(d,null,{default:a(()=>[e(p,{type:"primary",onClick:l.handleQuery},{default:a(()=>[f("查询")]),_:1},8,["onClick"]),e(p,{type:"primary",onClick:l.toAdd},{default:a(()=>[f("添加")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),i("div",H,[e(g,{modelValue:l.dialogFormVisible,"onUpdate:modelValue":o[14]||(o[14]=t=>l.dialogFormVisible=t),title:"学校信息"},{footer:a(()=>[i("span",J,[e(p,{onClick:o[12]||(o[12]=t=>l.dialogFormVisible=!1)},{default:a(()=>[f("取消")]),_:1}),e(p,{type:"primary",onClick:o[13]||(o[13]=t=>l.confirm())},{default:a(()=>[f("确定")]),_:1})])]),default:a(()=>[e(b,{model:l.school},{default:a(()=>[e(d,{label:"省份","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.province,"onUpdate:modelValue":o[3]||(o[3]=t=>l.school.province=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"城市","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.city,"onUpdate:modelValue":o[4]||(o[4]=t=>l.school.city=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"市|县","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.area,"onUpdate:modelValue":o[5]||(o[5]=t=>l.school.area=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"学校名称","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.schoolName,"onUpdate:modelValue":o[6]||(o[6]=t=>l.school.schoolName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"纬度","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.latitude,"onUpdate:modelValue":o[7]||(o[7]=t=>l.school.latitude=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"经度","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.longitude,"onUpdate:modelValue":o[8]||(o[8]=t=>l.school.longitude=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"是否启用","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.enable,"onUpdate:modelValue":o[9]||(o[9]=t=>l.school.enable=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"学校说明","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.description,"onUpdate:modelValue":o[10]||(o[10]=t=>l.school.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),e(d,{label:"地址","label-width":l.formLabelWidth},{default:a(()=>[e(n,{modelValue:l.school.address,"onUpdate:modelValue":o[11]||(o[11]=t=>l.school.address=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),i("div",K,[e(V,{data:l.list,style:{width:"100%"}},{default:a(()=>[e(s,{fixed:"",prop:"id",label:"id",width:"80",align:"center"}),e(s,{prop:"province",label:"省份",width:"80",align:"center"}),e(s,{prop:"city",label:"城市",width:"80",align:"center"}),e(s,{prop:"area",label:"市|县",width:"80",align:"center"}),e(s,{prop:"schoolName",label:"学校名称",width:"80",align:"center"}),e(s,{prop:"latitude",label:"纬度",width:"80",align:"center"}),e(s,{prop:"longitude",label:"经度",width:"80",align:"center"}),e(s,{prop:"enable",label:"是否启用",width:"80",align:"center"}),e(s,{prop:"description",label:"学校说明",width:"150",align:"center"}),e(s,{prop:"address",label:"地址",width:"120",align:"center"}),e(s,{prop:"createTime",label:"创建时间",width:"80",align:"center"}),e(s,{prop:"updateTime",label:"修改时间",width:"80",align:"center"}),e(s,{fixed:"right",label:"操作",width:"150",align:"center"},{default:a(t=>[e(p,{type:"info",size:"small",onClick:w=>l.handleEdit(t.row.id)},{default:a(()=>[f("修改")]),_:2},1032,["onClick"]),e(p,{type:"danger",size:"small",onClick:w=>l.handleDelete(t.row.id)},{default:a(()=>[f("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])])],64)}const el=y(j,[["render",O],["__scopeId","data-v-4c954d2d"]]);export{el as default};