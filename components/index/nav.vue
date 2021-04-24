<template>
  <nav class="index-component-nav-wrap">
    <div class="index-component-nav-1200">
      <!-- 导航 -->
      <h2 class="index-component-nav-title">LL Blog</h2>
      <ul class="index-component-nav-list">
        <li class="index-component-nav-item">
          <a href="/"><i class="iconfont icon-home"></i><span>首页</span> </a>
        </li>
        <li class="index-component-nav-item">
          <a href="/category">
            <i class="iconfont icon-fenlei"></i><span>分类</span>
          </a>
        </li>
        <li class="index-component-nav-item">
          <a href="/tips">
            <i class="iconfont icon-iconset0103"></i><span>标签</span>
          </a>
        </li>
        <li class="index-component-nav-item">
          <a href="/aboutus">
            <i class="iconfont icon-usercenter"></i><span>关于</span>
          </a>
        </li>
      </ul>
      <a class="index-component-nav-login" href="/login">登陆吧，大佬</a>
      <!-- 搜索 -->
      <div class="index-component-nav-search">
        <input type="text" placeholder="搜索" v-model="searchText" />
        <i class="iconfont icon-search"></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style lang="less" scoped>
.index-component-nav-wrap {
  background-color: #090723;
  .index-component-nav-1200 {
    width: 1200px;
    margin: 0 auto;
    height: 100px;
    line-height: 100px;
    display: flex;
    .index-component-nav-title {
      color: #fff;
      font-size: 30px;
    }
    .index-component-nav-list {
      display: flex;
      list-style: none;
      .index-component-nav-item {
        padding: 0 8px;
        &:hover {
          a {
            color: #fff;
          }
        }
        a {
          color: #666;
          i {
            font-size: 23px;
            margin-right: 4px;
          }
          span {
            font-size: 20px;
          }
        }
      }
    }
    .index-component-nav-login{
      color: #fff;
      font-size: 20px;
      margin-left: 20px;
    }
    .index-component-nav-search {
      position: relative;
      margin-left: auto;
      width: 160px;
      height: 30px;
      line-height: 30px;
      align-self: center;
      i {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        font-size: 20px;
        cursor: pointer;
      }
      input {
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 15px;
        width: 100%;
        height: 100%;
        outline: none;
        padding: 0 35px 0 10px;
        transition: all 0.5s;
        color: #fff;
        &:active {
          border-color: #fff;
        }
      }
    }
  }
}
</style>