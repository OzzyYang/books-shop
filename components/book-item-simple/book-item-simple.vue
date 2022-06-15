<template>
  <view class="book-item-simple">
    <view class="all-in-center book-image">
      <image
        v-if="imgSrc"
        class="all-in-center testImg"
        :src="imgSrc"
        mode="aspectFit"
      />
      <view v-else class="all-in-center testImg">我是图片</view>
    </view>
    <view class="book-info">
      <text class="all-in-center title">{{ title }}</text>
      <view v-if="haveTags" class="tags">
        <u-tag text="馆长推荐" type="success" />
        <u-tag text="本书单包括59本书" type="warning" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "book-item-simple",
  props: ["imgSrc", "title", "tags", "haveTags"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.book-item-simple {
  display: flex;
  flex-direction: column;

  .book-image {
    .testImg {
      height: 176upx;
      width: 176upx;
      border: 2upx solid black;
    }
  }
}
</style>
