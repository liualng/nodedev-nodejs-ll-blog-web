<template>
  <div class="index-page-wrap">
    <div class="page-cneter-wrap cneter-1200"></div>
  </div>
</template>

<script>
export default {
  mounted() {},
  head() {
    return {
      title: "Hello,world",
    };
  },
};
</script>

<style lang="less" scoped>
.index-page-wrap {
  background-color: #fff;
  .page-cneter-wrap {
    height: 200px;
    background: linear-gradient(to bottom, #6dd5ed, #2193b0);
  }
}
</style>
