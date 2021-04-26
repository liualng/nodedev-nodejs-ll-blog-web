<template>
  <div class="login-index-components">
    <!-- 背景轮播 -->
    <el-carousel
      height="100vh"
      :interval="4000"
      indicator-position="none"
      arrow="never"
    >
      <el-carousel-item v-for="num in 6" :key="num">
        <img :src="require(`./img/${num}.jpg`)" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 登陆框 -->
    <div class="login-index-components-content">
      <div :class="['type-change-list', typeNum === 1 ? 'active-item' : '']">
        <div
          class="type-change-item"
          v-for="(item, index) in types"
          :key="index"
          @click="setTypeNum(index)"
        >
          {{ item.title }}
        </div>
      </div>
      <!-- 用户名 -->
      <input
        type="text"
        id="name"
        v-model="username"
        placeholder="Enter Name"
        @keyup.enter="submitLogin"
      />
      <!-- 密码 -->
      <input
        type="password"
        id="pwd"
        v-model="userpwd"
        placeholder="Enter Password"
        @keyup.enter="submitLogin"
      />
      <!-- 邮箱 -->
      <input
        v-show="typeNum"
        type="email"
        v-model="useremail"
        placeholder="Enter Email"
        @keyup.enter="submitLogin"
      />
      <!-- 按钮 -->
      <div class="submit-login" @click="submitLogin">
        {{ types[typeNum].btnText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userpwd: "",
      useremail: "",
      types: [
        {
          title: "Login In",
          btnText: "Login In",
        },
        {
          title: "Register",
          btnText: "Register",
        },
      ],
      typeNum: 0,
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    setTypeNum(num = 0) {
      this.typeNum = num;
    },
    submitLogin() {
      const { username, userpwd, useremail } = this;
      let mes = "";
      if (!username) {
        mes = "请输入账号";
      } else if (!userpwd) {
        mes = "请输入密码";
      } else if (this.typeNum && !useremail) {
        mes = "请输入邮箱";
      }
      if (mes) {
        this.$message({
          type: "error",
          message: mes,
        });
        return;
      }
      // 登陆
      if (this.typeNum === 0) {
        this.$axios
          .post(`http://${this.$store.state.baseUrl}/api/users/login`, {
            username,
            userpwd,
            useremail,
          })
          .then(({ data }) => {
            if (data.success) {
              this.$message({
                type: "success",
                message: data.description,
              });
              // 登陆成功跳转到首页
              setInterval(() => {
                window.location.href = "/";
              }, 2000);
            } else {
              this.$message({
                type: "error",
                message: data.description,
              });
              // 清空密码
              this.userpwd = "";
            }
          });
      } else if (this.typeNum === 1) {
        // 注册
        this.$axios
          .post(`http://${this.$store.state.baseUrl}/api/users/register`, {
            username,
            userpwd,
            useremail,
          })
          .then(({ data }) => {
            if (data.success) {
              this.$message({
                type: "success",
                message: data.description,
              });
              // 注册登陆成功
              this.userpwd = "";
              this.setTypeNum(0);
            } else {
              this.$message({
                type: "error",
                message: data.description,
              });
            }
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login-index-components {
  height: 100vh;
  position: relative;
  .login-index-components-content {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 460px;
    height: 438px;
    padding: 30px 40px 50px 40px;
    background-color: #fff;
    .type-change-list {
      position: relative;
      width: 340px;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      text-align: center;
      box-shadow: 0 1px 12px #ff6900ab;
      transition: all 0.3s;
      margin-bottom: 80px;
      &.active-item {
        &::before {
          left: 170px !important;
        }
      }
      .type-change-item {
        position: absolute;
        z-index: 2;
        width: 170px;
        height: 100%;
        border-radius: 25px;
        cursor: pointer;
        &:last-child {
          left: 170px;
        }
      }
      &::before {
        position: absolute;
        top: 0px;
        left: 0px;
        transition: left 0.5s;
        content: "";
        width: 170px;
        height: 100%;
        border-radius: 25px;
        background: linear-gradient(to right, #ff5e62, #ff9966);
      }
    }
    input {
      display: block;
      width: 100%;
      height: 40px;
      border: none;
      color: #333;
      text-align: center;
      font-size: 20px;
      border-bottom: 1px solid #000;
      margin-bottom: 20px;
      background-color: transparent;
      outline: none;
    }
    .submit-login {
      position: relative;
      margin: 0 auto;
      width: 200px;
      height: 48px;
      line-height: 48px;
      font-size: 20px;
      text-align: center;
      background-image: linear-gradient(to right, #25aae1, #40e495);
      color: #fff;
      cursor: pointer;
      border-radius: 30px;
      &::before,
      &::after {
        position: absolute;
        content: "";
        border: 3px solid transparent;
        width: 0px;
        height: 0px;
      }
      &::before {
        top: 0px;
        left: 0px;
      }
      &::after {
        bottom: 0px;
        right: 0px;
      }
      &:hover {
        letter-spacing: 4px;
        &::after,
        &::before {
          width: 100%;
          height: 100%;
        }
        &::before {
          border-top-color: #fff;
          border-right-color: #fff;
          transition: width 0.3s ease-out, height 0.15s ease-out 0.3s;
        }
        &::after {
          border-bottom-color: #fff;
          border-left-color: #fff;
          transition: border-color 0s ease-out 0.45s, width 0.3s ease-out 0.45s,
            height 0.15s ease-out 1s;
        }
      }
    }
  }
}
</style>