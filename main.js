import App from "./App";
//导入store的实例对象
import store from "@/store/store.js";
//引入request工具
import Request from "luch-request";

/* 配置全局变量 */
// Vue.prototype.baseUrl = "http://127.0.0.1:3007";

/* 引入uView UI */
import uView from "uview-ui";
Vue.use(uView);

/* 配置http请求 */
uni.$http = new Request();
//全局配置
uni.$http.setConfig((config) => {
  /* config 为默认全局配置*/
  config.baseURL = "http://127.0.0.1:3007"; /* 根域名 */

  return config;
});
//在请求之前拦截
uni.$http.interceptors.request.use((config) => {
  uni.showLoading({
    title: "请求数据中",
    mask: true
  });
  //如果请求的网址不以/user/开头，则加入Token
  if (!config.url.match(/^\/user\//)) {
    config.header["Authorization"] = store.state.m_user.userToken;
  }
  //如果为POST请求，则设置内容编码格式
  if (config.method === "POST") {
    config.header["Content-Type"] = "application/x-www-form-urlencoded";
  }
  return config;
});
//在请求之后拦截
uni.$http.interceptors.response.use(
  (response) => {
    uni.hideLoading();
    return response;
  },
  (response) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    return Promise.reject(response);
  }
);

// #ifndef VUE3
import Vue from "vue";
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
  store
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app
  };
}
// #endif
