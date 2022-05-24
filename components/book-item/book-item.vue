<template>
  <view class="book-item">
    <view class="book-image">
      <!-- <image class="book-image" :src="imgSrc" mode="aspectFit" /> -->
      <view class="all-in-center testImg">我是图片</view>
    </view>
    <view class="book-info">
      <text class="title">{{ title }}</text>
      <text class="info">{{ info }}</text>
      <slot>
        <u-tag text="馆长推荐" type="success" />
        <u-tag text="本书单包括59本书" type="warning"
      /></slot>
    </view>
  </view>

  <!-- <uni-card
    title="基础卡片"
    :isFull="true"
    :isShadow="false"
    sub-title="副标题"
    extra="额外信息"
  >
    <text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
  </uni-card>
  <uni-list class="stream-list">
    <uni-list-item
      title="豹豹带你选：0-1岁宝宝书单"
      note="书单的详细描述信息"
      thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
      thumb-size="lg"
    ></uni-list-item>
  </uni-list> -->
</template>

<script>
export default {
  name: "book-item",
  props: ["imgSrc", "title", "info"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.book-item {
  width: 100%;
  height: 200upx;
  padding: 10upx 30upx;
  border-top: 2upx solid #efefef;
  border-bottom: 2upx solid #efefef;
  display: flex;
}

.book-image {
  height: 100%;
  margin-right: 20upx;
  .testImg {
    float: right;
    height: 176upx;
    width: 176upx;
    border: 2upx solid black;
  }
}

.book-info {
  padding-bottom: 4upx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    display: inline-block;
    height: 1rem;
    font-size: 30rpx;
    font-weight: bold;
  }

  .info {
    display: inline-block;
    height: 2rem;
    color: #cecece;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
