<template>
  <header class="App-header">
    <div class="wrap m-auto app-top flex-row">
      <h1 @click="refresh"><span class="iconfont icon-shequ1"></span>Community</h1>
      <div class="right-bar">
        <div class="r-top-btn" v-if="!this.$store.state.login.username">
          <el-button type="primary"
                     size="mini"
                     @click="register">注册</el-button>
          <el-button type="primary"
                     size="mini"
                     @click="login">登录</el-button>
        </div>
        <div class="r-top-btn" v-if="this.$store.state.login.username">
          <el-button type="primary"
                     size="mini"
                     @click="logouts">注销</el-button>
        </div>
        <ul class="t-navigation clearfix">
          <li>
            <span class="el-icon-search"></span>
          </li>
          <li class="photo">
            <span>{{ this.$store.getters.firstWorld }}</span>
          </li>
        </ul>
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
import { mapActions } from 'vuex';
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
    ...mapActions([
      'logout',
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
    logouts() {
      this.logout().then((res) => {
        this.$message({
          message: res,
          type: 'success',
        });
      }).catch((error) => {
        this.$message({
          message: error,
          type: 'error',
        });
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
        padding-left: 39px;
        position: relative;
        color: #08c;
        font-weight: normal;
        font-size: 18px;
        font-weight: bold;
        font-family: '幼圆';
        span {
          position: absolute;
          top: -4px;
          left: 0;
          font-size: 30px;
          margin-right: 10px;
        }
      }
      .right-bar {
        display: flex;
        align-items: center;
        .r-top-btn {
          button {
            margin-left: 5px;
          }
        }
        .t-navigation {
          margin-left: 5px;
          li {
            display: block;
            cursor: pointer;
            color: #999;
            font-weight: bolder;
            font-size: 24px;
            float: left;
            width: 30px;
            height: 30px;
            margin-left: 5px;
            text-align: center;
            line-height: 30px;
            &:hover {
              background: #e1e1e1;
              color: #000;
            }
            &.photo {
              span {
                display: block;
                border-radius: 50%;
                background: #cdc98d;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>
