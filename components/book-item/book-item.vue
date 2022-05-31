<template>
  <view class="book-item">
    <view class="book-image">
      <!-- <image class="book-image" :src="imgSrc" mode="aspectFit" /> -->
      <view class="all-in-center testImg">我是图片</view>
    </view>
    <view class="book-info">
      <text class="title">{{ title }}</text>
      <text class="info">{{ info }}</text>
      <view v-if="haveTags" class="tags">
        <u-tag text="馆长推荐" type="success" />
        <u-tag text="本书单包括59本书" type="warning" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "book-item",
  props: ["imgSrc", "title", "info", "tags", "haveTags"],
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
    flex: 1;
    display: inline-block;
    font-size: 30rpx;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .info {
    flex: 1.5;
    display: inline-block;
    color: #cecece;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tags {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
