

import instance from "./axios";


const add = (data) => {
  return instance.request({
    url: 'api/teacher/add',
    method: 'post',
    data,
  });
};

const all = () => {
  return instance.request({
    url: 'api/teacher/all',
    method: 'get',
  });
};

const getCommunitiesByColums = (data) => {
  return instance.request({
    url: 'api/teacher/colums',
    method: 'get',
    params: data,
  });
};

const remove = (data) => {
  return instance.request({
    url: 'api/teacher/delete',
    method: 'get',
    params: data,
  });
};

const update = (data) => {
  return instance.request({
    url: 'api/teacher/edit',
    method: 'post',
    data,
  });
};

const query = (data) => {
  return instance.request({
    url: '/api/teacher/query',
    method: 'get',
    params: data,
  });
};

const one = (id) => {
  return instance.request({
    url: `api/teacher/one`,
    method: 'get',
	params: id,
  });
};

export default {
  add,
  all,
  getCommunitiesByColums,
  remove,
  update,
  query,
  one,
};