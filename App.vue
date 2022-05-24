<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  }
};
</script>

<!-- 每个页面的公共CSS -->
<style lang="scss">
/* 引入UView UI的CSS样式 */
@import "uview-ui/index.scss";

/*垂直水平居中的公共CSS*/
.all-in-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
