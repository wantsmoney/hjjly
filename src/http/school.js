import instance from "./axios";

const add = (data) => {
    return instance.request({
       url:'api/school/add',
       method:'post',
       data
    })
 }
 const all = () => {
    return instance.request({
       url:'api/school/all',
       method:'get',
    })
 }
 const checkName = (data) => {
    return instance.request({
       url:'api/school/checkname',
       method:'get',
       params:data
    })
 }
 const getCommunitiesByColums = (data) => {
    return instance.request({
       url:'api/school/colums',
       method:'get',
       params:data
    })
 }
 const remove = (data) => {
    return instance.request({
       url: 'api/school/delete',
       method: 'get',
       params: data
    })
 }
 const update = (data) => {
    return instance.request({
       url:'api/school/edit',
       method:'post',
       data
    })
 }
 const query = (data) => {
    return instance.request({
       url:'api/school/enable',
       method:'get',
       params:data
    })
 }
 const one = (id) => {
   return instance.request({
     url: `api/school/one/${id}`, // 使用模板字符串将 id 替换到 URL 中
     method: 'get',
   });
 };
 const getSchoolsByRegion = (data) => {
    return instance.request({
       url:'api/school/search',
       method:'post',
       data
    })
 }


 const getschoolsByColums = (data) => {
    return instance.request({
       url:'api/school/colums',
       method:'get',
       params: data
    })
 }


export default {
    add,
    all,
    checkName,
    getCommunitiesByColums,
    remove,
    update,
    query,
    one,
    getSchoolsByRegion
 }