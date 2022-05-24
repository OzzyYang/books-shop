<template>
  <view>
    <!-- 通知栏 -->
    <uni-notice-bar
      v-if="showNotice"
      class="home-notice"
      showIcon
      text="这是 NoticeBar 公告栏"
      showGetMore="true"
      moreText="借阅计划 >"
      @getmore="getNotice"
    ></uni-notice-bar>
    <uni-popup ref="popup" class="popup" type="bottom" background-color="#fff">
      <view class="popup-content center">查看更多内容后关闭公告栏</view>
    </uni-popup>
    <!-- 轮播图 -->
    <swiper
      class="home-banner"
      :indicator-dots="true"
      :autoplay="true"
      :interval="3000"
      :duration="1000"
      indicator-active-color="#fdd25d"
    >
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <view class="swiper-item center" style="background-color: lightblue">
          {{ item.name }}
        </view>
      </swiper-item>
    </swiper>

    <!-- 功能栏 -->
    <view class="grid">
      <uni-row class="grid-row" v-for="(col, index) in gridList" :key="index">
        <uni-col
          :xs="6"
          :sm="6"
          :md="6"
          :lg="6"
          :xl="6"
          v-for="row in col.rows"
          :key="row.name"
        >
          <view class="grid-item center">
            <uni-icons
              class="grid-item-image"
              type="color"
              color="black"
              size="60"
            />
            {{ row.name }}
          </view>
        </uni-col>
      </uni-row>
    </view>

    <!-- 信息流 -->
    <uni-card
      title="经典书单"
      extra="查看更多 >"
      :is-full="true"
      :is-shadow="false"
    >
      <uni-list>
        <uni-list-item
          title="豹豹带你选：0-1岁宝宝书单"
          note="书单的详细描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
        <uni-list-item
          title="豹豹带你选：0-1岁宝宝书单"
          note="书单的详细描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
        <uni-list-item
          title="豹豹带你选：0-1岁宝宝书单"
          note="书单的详细描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-card
      title="最新上架"
      extra="查看更多 >"
      :is-full="true"
      :is-shadow="false"
    >
      <uni-list>
        <uni-list-item
          title="豹豹带你选：0-1岁宝宝书单"
          note="书单的详细描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
        <uni-list-item
          title="豹豹带你选：0-1岁宝宝书单"
          note="书单的详细描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
        <uni-list-item
          title="豹豹带你选：0-1岁宝宝书单"
          note="书单的详细描述信息"
          thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
          thumb-size="lg"
        ></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-group title="基本模式" margin-top="20">
      <view> 分组内容 </view>
      <view> 分组内容 </view>
      <view> 分组内容 </view>
      <view> 分组内容 </view>
    </uni-group>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showNotice: true,
      bannerList: [
        { name: "轮播图1", path: "" },
        { name: "轮播图2", path: "" },
        { name: "轮播图3", path: "" }
      ],
      gridList: [
        {
          rows: [
            { name: "功能1", img: "图片", path: "" },
            { name: "功能2", img: "图片", path: "" },
            { name: "功能3", img: "图片", path: "" },
            { name: "功能4", img: "图片", path: "" }
          ]
        },
        {
          rows: [
            { name: "功能5", img: "图片", path: "" },
            { name: "功能6", img: "图片", path: "" },
            { name: "功能7", img: "图片", path: "" },
            { name: "功能8", img: "图片", path: "" }
          ]
        }
      ]
    };
  },
  methods: {
    getNotice() {
      this.$refs.popup.open();
      this.showNotice = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// 垂直水平居中
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup,
.popup view {
  height: 150upx;
  width: 100%;
}

.home-banner view,
swiper-item {
  height: 100%;
  width: 100%;
  color: black;
}

.home-notice {
  width: 100%;
  height: 20upx;
  position: absolute;
  z-index: 999;
}

.grid {
  border-top: 1upx solid #efefef;
}

.grid-row {
  /* QQ、字节小程序文档写有 :host，但实测不生效 */
  /* 百度小程序没有 :host，需要设置block */
  /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
  display: block;
  /* #endif */
}

/* 支付宝小程序没有 demo-uni-row 层级 */
/* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
/* #ifdef MP-ALIPAY || MP-WEIXIN */
/deep/ .uni-row {
}
/* #endif */

.grid-item {
  height: 186upx;
  background-color: #efefef;
  flex-direction: column;
  font-size: 25upx;
}

.grid-item-image {
  width: 120upx;
  height: 120upx;
}
</style>
