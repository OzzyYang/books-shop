<template>
  <view>
    <login v-if="userToken === null || userToken === ''"></login>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: { ...mapState("m_user", ["userToken", "userInfo"]) },
  data() {
    return {};
  }
};
</script>

<style lang="less"></style>
