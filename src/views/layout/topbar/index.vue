<template>
  <header class="App-header">
    <div class="wrap m-auto app-top flex-row">
      <h1 @click="refresh"><span class="iconfont icon-shequ2"></span>讨论区</h1>
      <div class="right-bar" v-if="!this.$store.state.common.logined">
        <el-button type="primary"
                   size="small"
                   @click="register">注册</el-button>
        <el-button type="primary"
                   icon="el-icon-check"
                   size="small"
                   @click="login">登录</el-button>
      </div>
      <div class="right-bar" v-if="this.$store.state.common.logined">
        <el-button type="primary"
                   size="small"
                   icon="el-icon-close"
                   @click="logout">注销</el-button>
      </div>
    </div>
    <Login
      :loginDialogVisible="loginDialogVisible"
      @closeLogin="closeLogin"></Login>
    <Register
      :registerDialogVisible="registerDialogVisible"
      @closeRegister="closeRegister"></Register>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import user from './../../../api/user';
import Login from './../login/index';
import Register from './../register/index';

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      loginDialogVisible: false,
      registerDialogVisible: false,
    };
  },
  methods: {
    ...mapMutations([
      'LOGOUT',
    ]),
    register() {
      this.registerDialogVisible = true;
    },
    closeRegister() {
      this.registerDialogVisible = false;
    },
    login() {
      this.loginDialogVisible = true;
    },
    closeLogin() {
      this.loginDialogVisible = false;
    },
    logout() {
      user.logout().then((res) => {
        if (res.data.code === 200) {
          window.localStorage.removeItem('userInfo');
          this.LOGOUT();
        }
      });
    },
    refresh() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style scoped lang="less">
  .App-header {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    backface-visibility: hidden;
    background-color: #fff;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);
    .app-top {
      height: 100%;
      h1 {
        color: #4267b2;
        font-weight: normal;
        span {
          font-size: 30px;
          margin-right: 10px;
        }
      }
      .right-bar {
        button {
          margin-left: 10px;
        }
      }
    }
  }
</style>
