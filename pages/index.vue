<template>
  <div class="index-page-wrap">
    <index />
  </div>
</template>

<script>
import index from "~/components/index/index.vue";
export default {
  components: {
    index,
  },
  head() {
    return {
      title: "liulang's blog",
    };
  },
};
</script>

<style lang="less" scoped>
.index-page-wrap {
  background-color: #fff;
}
</style>
