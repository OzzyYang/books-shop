export default {
  //开启命名空间
  namespaced: true,

  //模块的state数据
  state: () => ({
    //用户的鉴权字符串
    userToken:
      uni.getStorageSync("userToken") &&
      uni.getStorageSync("userToken").match(/^".*"$/) //只对包含双引号的字符串进行读取
        ? JSON.parse(uni.getStorageSync("userToken"))
        : "",
    //用户的基本信息
    userInfo:
      uni.getStorageSync("userInfo") &&
      uni.getStorageSync("userInfo").match(/^{.*}$/) //只对包含大括号的字符串进行读取
        ? JSON.parse(uni.getStorageSync("userInfo"))
        : "",
    //用户的重定向信息，{open-type,from}
    redirectInfo: null
  }),

  //模块的mutations方法
  mutations: {
    updateUserInfo(state, newUserInfo) {
      //用于执行退出登录操作,newUserInfo为''时，则执行
      if (!newUserInfo) {
        state.userInfo = "{}";
        state.userToken = "";
        this.commit("m_user/saveToStorage");
        return;
      }
      state.userInfo = newUserInfo;
      this.commit("m_user/saveToStorage");
    },
    updateUserToken(state, newToken) {
      state.userToken = "Bearer " + newToken;
      this.commit("m_user/saveToStorage");
    },
    updateRedirectInfo(state, info) {
      state.redirectInfo = info;
      console.log(state.redirectInfo);
    },
    saveToStorage(state) {
      uni.setStorageSync("userInfo", JSON.stringify(state.userInfo));
      uni.setStorageSync("userToken", JSON.stringify(state.userToken));
    }
  },

  //模块的getters属性
  getters: {}
};
