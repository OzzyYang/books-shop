<template>
  <view>
    <login v-if="userToken === null || userToken === ''"></login>
    <view v-else class="my-container">
      <!-- 背景图片 -->
      <image class="circle" src="@/static/my-bc.png"></image>
      <!-- 用户信息区域 -->
      <view class="userInfo-container">
        <view class="avatar-container">
          <u-avatar class="avatar" :src="userInfo.avatar"></u-avatar>
        </view>
        <view class="userInfo">
          <text class="nickname">{{
            userInfo.nickname || userInfo.username
          }}</text>
          <u-tag
            class="phone"
            :text="userInfo.phone || '未注册手机号码'"
            shape="circle"
            type="warning"
          ></u-tag>
        </view>
      </view>
      <!-- 第一个区域 -->
      <uni-card class="block1" spacing="0px" padding="5px">
        <uni-grid
          :column="3"
          :show-border="false"
          :square="false"
          :highlight="false"
        >
          <uni-grid-item
            class="block1-item"
            v-for="item in block1"
            :key="item.title"
            style="text-align: center"
          >
            <view class="block1-content">
              <!-- 数字 -->
              <text class="number" :style="{ color: item.color }">{{
                item.number
              }}</text>
              <!-- 单位 -->
              <text class="unit">{{ item.unit }}</text>
            </view>
            <!-- 标题 -->
            <view class="block1-title">{{ item.title }}</view>
          </uni-grid-item>
        </uni-grid>
      </uni-card>
      <!-- 第二个区域 -->
      <uni-card class="block2" spacing="0px" padding="5px">
        <uni-grid :column="3" :show-border="false" :square="false">
          <uni-grid-item
            class="block2-item"
            v-for="item in block2"
            :key="item.title"
            style="text-align: center"
          >
            <uni-icons
              v-if="item.icon === ''"
              class="block2-icon"
              :type="item.demoIcon"
              :color="item.demoColor"
              size="30"
            ></uni-icons>
            <image
              v-else
              class="block2-icon"
              :src="item.icon"
              mode="scaleToFill"
            ></image>
            <!-- 标题 -->
            <view class="block2-title" style="color: black">{{
              item.title
            }}</view>
          </uni-grid-item>
        </uni-grid>
      </uni-card>
      <!-- 更多服务 -->
      <uni-card title="更多服务" class="more" spacing="0px" padding="5px">
        <uni-grid :column="4" :show-border="false" :square="false">
          <uni-grid-item
            class="more-item"
            v-for="item in more"
            :key="item.title"
            style="text-align: center"
          >
            <uni-icons
              v-if="item.icon === ''"
              class="block2-icon"
              :type="item.demoIcon"
              :color="item.demoColor"
              size="30"
            ></uni-icons>
            <image
              v-else
              class="block2-icon"
              :src="item.icon"
              mode="scaleToFill"
            ></image>
            <!-- 标题 -->
            <view class="block2-title" style="color: black">{{
              item.title
            }}</view>
          </uni-grid-item>
        </uni-grid>
      </uni-card>
      <button class="logout-button" size="medium">退出登陆</button>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("m_user", ["userToken", "userInfo"]),
    createDuration() {
      const result = parseInt(
        uni
          .$formateDate()
          .subtract(uni.$formateDate(this.userInfo.createtime))
          .format("DD")
      );
      this.block1[0].number = result;
      return result;
    }
  },
  watch: {},
  data() {
    return {
      block1: [
        {
          title: "已成为会员",
          number: 0,
          unit: "天",
          color: "#0077b9"
        },
        {
          title: "已借阅",
          number: 0,
          unit: "本",
          color: "#2dcb91"
        },
        {
          title: "价值",
          number: 0,
          unit: "元",
          color: "#fdd25d"
        }
      ],
      block2: [
        {
          title: "我的订单",
          icon: "",
          demoIcon: "shop-filled",
          demoColor: "#25d896"
        },
        {
          title: "我的书包",
          icon: "",
          demoIcon: "wallet-filled",
          demoColor: "#f6bb47"
        },
        {
          title: "我的收藏",
          icon: "",
          demoIcon: "heart-filled",
          demoColor: "#f09b72"
        }
      ],
      more: [
        {
          title: "阅读报告",
          icon: "",
          demoIcon: "calendar-filled",
          demoColor: "#ffae21"
        },
        {
          title: "我的积分",
          icon: "",
          demoIcon: "vip-filled",
          demoColor: "#ffa45b"
        },
        {
          title: "我的评论",
          icon: "",
          demoIcon: "chat-filled",
          demoColor: "#6fdc99"
        },
        {
          title: "我的信息",
          icon: "",
          demoIcon: "email-filled",
          demoColor: "#4fd4c3"
        },
        {
          title: "分享好友",
          icon: "",
          demoIcon: "upload-filled",
          demoColor: "#4fd4c3"
        },
        {
          title: "修改密码",
          icon: "",
          demoIcon: "locked-filled",
          demoColor: "#62adfe"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.circle {
  width: 100%;
  height: 250upx;
  position: absolute;
  z-index: -100;
  left: 0;
  top: 0;
}
.userInfo-container {
  width: 100%;
  padding: 0 20upx;
  margin: 10upx 0;
  display: flex;
}
.avatar-container {
  display: inline-block;
  border: 6upx solid white;
  border-radius: 50%;
  box-shadow: 0upx 0upx 10upx black;
}
.userInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4upx 20upx;
  .nickname {
    font-size: 35upx;
    font-weight: bold;
    color: white;
    text-shadow: 0upx 0upx 5upx black;
  }
}
.block1-item,
.block2-item,
.more-item {
  margin: 10upx 0;
  font-size: 30upx;
}
.block1-content,
.block2-icon {
  margin-bottom: 15upx;
  .number {
    font-size: 50upx;
    font-weight: bold;
  }
}

.more {
  font-weight: bold;
}

.more-item {
  font-weight: normal;
  margin: 24upx 0;
}

.logout-button {
  margin: 30upx auto;
  color: white;
  width: 80%;
  background-color: #f3b91a;
  border-radius: 50upx;
  box-shadow: 0upx 8upx 13upx 3upx #fdd25d;
}
</style>
