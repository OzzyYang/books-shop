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
      <view class="popup-content all-in-center">查看更多内容后关闭公告栏</view>
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
        <view
          class="swiper-item all-in-center"
          style="background-color: lightblue"
        >
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
          <view class="grid-item all-in-center">
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
    <view
      class="stream"
      v-for="streamItem in streamList"
      :key="streamItem.title"
    >
      <view class="stream-title">
        <u-section
          :title="streamItem.title"
          sub-title="查看更多"
          line-color="#fdd25d"
          font-size="36"
        >
        </u-section>
      </view>
      <book-item
        v-for="listItem in streamItem.items"
        :key="listItem.title"
        :imgSrc="listItem.imgSrc"
        :title="listItem.title"
        :info="listItem.info"
        :haveTags="streamItem.haveTags"
      >
      </book-item>
    </view>
    <!-- 绘本信息流 热门推荐 -->
    <view class="stream books-stream">
      <view class="stream-title">
        <u-section
          title="热门推荐"
          sub-title="查看更多"
          line-color="#fdd25d"
          font-size="36"
        >
        </u-section>
      </view>
      <book-item-simple
        class="books"
        v-for="book in bookList.books"
        :key="book.title"
        :imgSrc="book.imgSrc"
        :title="book.title"
        :haveTags="bookList.haveTags"
      >
      </book-item-simple>
    </view>
    <u-loadmore :status="reachBottomStatus" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showNotice: true,
      reachBottomStatus: "loadmore",
      pullDownRefreshStatus: false,
      bannerList: [],
      gridList: [],
      streamList: [],
      bookList: {}
    };
  },
  methods: {
    getNotice() {
      this.$refs.popup.open();
      this.showNotice = false;
    },
    getBooksList() {
      //TODO:记得节流
      var newBooks = [];
      for (
        let index = this.bookList.books.length;
        index < 15 + this.bookList.books.length;
        index++
      ) {
        newBooks.push({
          imgSrc:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
          title: "绘本" + (index + 1),
          info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
        });
      }
      console.log(newBooks);
      setTimeout(() => {
        this.bookList.books.push(...newBooks);
        this.reachBottomStatus = "loadmore";
      }, Math.random() * 1500);
    },
    getBannerList() {
      this.bannerList.push(
        ...[
          {
            name: "轮播图1",
            path: ""
          },
          {
            name: "轮播图2",
            path: ""
          },
          {
            name: "轮播图3",
            path: ""
          }
        ]
      );
    },
    getGridList() {
      this.gridList.push(
        ...[
          {
            rows: [
              {
                name: "功能1",
                img: "图片",
                path: ""
              },
              {
                name: "功能2",
                img: "图片",
                path: ""
              },
              {
                name: "功能3",
                img: "图片",
                path: ""
              },
              {
                name: "功能4",
                img: "图片",
                path: ""
              }
            ]
          },
          {
            rows: [
              {
                name: "功能5",
                img: "图片",
                path: ""
              },
              {
                name: "功能6",
                img: "图片",
                path: ""
              },
              {
                name: "功能7",
                img: "图片",
                path: ""
              },
              {
                name: "功能8",
                img: "图片",
                path: ""
              }
            ]
          }
        ]
      );
    },
    getStreamList() {
      this.streamList.push(
        ...[
          {
            title: "经典书单",
            haveTags: true,
            items: [
              {
                imgSrc:
                  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                title: "豹豹带你选：0-1岁宝宝书单",
                info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
              },
              {
                imgSrc:
                  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                title: "豹豹带你选：1-2岁宝宝书单",
                info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
              },
              {
                imgSrc:
                  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                title: "豹豹带你选：2-3岁宝宝书单",
                info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
              }
            ]
          },
          {
            title: "绘本知识",
            haveTags: false,
            items: [
              {
                imgSrc:
                  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                title: "爱上阅读，从绘本开始",
                info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
              },
              {
                imgSrc:
                  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                title: "绘本之美，美在何处？",
                info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
              },
              {
                imgSrc:
                  "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                title: "绘本故事：用图画书养大孩子",
                info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
              }
            ]
          }
        ]
      );
    },
    getBookList() {
      this.bookList = {
        haveTags: false,
        books: [
          {
            imgSrc:
              "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
            title: "绘本1",
            info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
          },
          {
            imgSrc:
              "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
            title: "绘本2",
            info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
          },
          {
            imgSrc:
              "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
            title: "绘本3",
            info: "这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息这是描述信息"
          }
        ]
      };
    },
    refreshPage() {
      if (this.pullDownRefreshStatus) return;
      this.pullDownRefreshStatus = true;
      // this.getNotice();
      this.bannerList = [];
      this.getBannerList();
      this.gridList = [];
      this.getGridList();
      this.streamList = [];
      this.getStreamList();
      this.bookList = {};
      this.getBookList();
      this.pullDownRefreshStatus = false;
    }
  },
  // 上拉触底事件
  onReachBottom() {
    this.reachBottomStatus = "loading";
    console.log("上拉触底事件触发");
    this.getBooksList();
  },
  onPullDownRefresh() {
    this.refreshPage();
    uni.stopPullDownRefresh();
  },
  onLoad(options) {
    this.refreshPage();
	console.log(this.$u.config.v);
  }
};
</script>

<style lang="scss" scoped>
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

.stream-title {
  width: 100%;
  margin: 20upx 0;
}

.books-stream {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.books {
  display: inline-block;
  margin: 20upx 20upx;
}
</style>
