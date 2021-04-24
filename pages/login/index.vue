<template>
  <div class="login-page-wrap">
    <index />
  </div>
</template>

<script>
import index from '~/components/login/index.vue';
export default {
  components:{
    index
  },
  head(){
    return {
      title:"用户登陆与注册"
    }
  }
};
</script>

<style lang="less" scoped>
.login-page-wrap {
}
</style>