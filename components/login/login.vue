<template>
  <view class="login-container">
    <uni-icons type="personadd" size="100"></uni-icons>
    <view>拥豹阅读Logo↑</view>
    <!-- <button type="default" open-type="getUserInfo" @click="getUserInfo">
        一键登录
      </button> -->
    <form @submit="login" class="input-form">
      <view class="input-username">
        <view class="title"
          ><uni-icons type="staff" size="20"></uni-icons
          ><view>用户名</view></view
        >
        <input
          name="username"
          class="input"
          placeholder="请输入用户名"
          v-model="inputContent.username"
        />
      </view>
      <view class="input-password">
        <view class="title"
          ><uni-icons type="locked" size="20"></uni-icons
          ><view>密码</view></view
        >
        <input
          name="password"
          class="input"
          password
          placeholder="请输入密码"
          v-model="inputContent.password"
        />
      </view>
      <button class="login-button" form-type="submit">登录</button>
      <!-- <button class="register-button">注册</button> -->
    </form>
    <!-- <view class="loginText">登陆后即可享受更多权益~</view> -->
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "login",
  computed: {
    ...mapState("m_user", ["redirectInfo"])
  },
  data() {
    return {
      inputContent: {
        username: "OzzyYang",
        password: "oyzz7758258"
      }
    };
  },
  methods: {
    ...mapMutations("m_user", [
      "updateUserInfo",
      "updateUserToken",
      "updateRedirectInfo"
    ]),
    /**
     * 登陆功能，获取Token以及用户信息
     */
    async login() {
      await this.getUserToken()
        .then(() => {
          this.$refs.uToast.show({
            title: "登陆成功",
            type: "success"
          });
        })
        .catch((err) => {
          this.$refs.uToast.show({
            title: err.message,
            type: "error"
          });
        });
    },
    /**
     * 获取用户的基本信息
     * 仅限微信小程序端
     */
    async getUserInfoFromWX(e) {
      //仅微信支持此接口，可用于一键登录，所以先进行判断
      if (uni.getUserProfile) {
        await uni
          .getUserProfile({
            desc: "用于一键登录功能",
            lang: "zh_CN"
          })
          .then(({ userInfo, errMsg }) => {
            return {
              nickname: userInfo.nickName,
              avatar: userInfo.avatarUrl
            };
          })
          .catch((err) => {
            if (err) {
              return null;
            }
          });
      }
    },
    async getUserToken() {
      await uni.$http
        .post("/user/login", this.inputContent)
        .then(({ data: res }) => {
          if (res.status === 1) {
            this.updateUserToken(res.data.token);
          } else {
            throw new Error(res.message);
          }
        });
      await this.getUserInfo();
    },
    async getUserInfo() {
      await uni.$http.get("/my/get").then(({ data: res }) => {
        if (res.status === 1) {
          this.updateUserInfo(res.data);
        } else {
          throw new Error(res.message);
        }
      });
    },

    navigateBack() {
      if (
        this.redirectInfo === null ||
        this.redirectInfo === "{}" ||
        JSON.stringify(this.redirectInfo) === "{}"
      )
        return;
      switch (this.redirectInfo.openType) {
        case "switchTab": {
          uni.switchTab({
            url: this.redirectInfo.from
          });
          this.updateRedirectInfo("{}");
          break;
        }
      }
    }
  },
  onCreated(options) {}
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  display: flex;
  padding: 200upx 30upx;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .input-form,
  .input-password,
  .input-username {
    width: 100%;
  }

  .title {
    font-size: 30upx;
    display: flex;
  }
  .input {
    margin: 0upx 0upx 15upx 0upx;
    padding: 0upx 10upx;
    height: 80upx;
    border-bottom: 2upx solid #efefef;
    border-radius: 10upx;
    font-size: 1rem;
  }

  .login-button,
  .register-button {
    margin: 30upx 0;
    color: white;
    width: 100%;
    background-color: #f3b91a;
    border-radius: 50upx;
    box-shadow: 0upx 8upx 13upx 3upx #fdd25d;
  }

  .loginText {
    font-size: 25upx;
    color: #333333;
  }
}
</style>
