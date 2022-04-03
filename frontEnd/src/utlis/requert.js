/* eslint-disable require-jsdoc */
import axios from "axios";
// import { getToken } from "./auth";

const instance = axios.create({
  baseURL: "http://81.68.79.176:3333",
  timeout: 3333,
});

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // config.headers["token"] = getToken();
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器

instance.interceptors.response.use(function(response) {
  return response.data;
}, function(error) {
  return Promise.reject(error);
});

/**
 * get请求
 * @param {*} url 请求地址
 * @param {*} param url参数
 */

export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

/**
 * post请求
 * @param {*} url 请求地址
 * @param {*} data url参数
 */

export function post(url, data) {
  return instance.post(url, data);
}