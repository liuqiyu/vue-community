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
        <ul class="t-navigation clearfix">
          <li @click.stop="showDropDown('search')">
            <span class="el-icon-search"></span>
          </li>
          <li class="photo" v-if="this.$store.state.login.username"
              @click.stop="showDropDown('info')">
            <span>{{ this.$store.getters.firstWorld }}</span>
          </li>
        </ul>
        <div class="drop-down" ref="dropDown" @click.stop="">
          <div class="user-menu" v-if="showUserMenu">
            <ul>
              <li>
                <div class="sp">
                  <span class="iconfont icon-wo icon"></span>{{ this.$store.state.login.username }}
                </div>
                <div class="sp"><span class="el-icon-setting"></span></div>
              </li>
              <li>
                <div class="sp logout" @click="logouts">
                  <span class="icon iconfont icon-dengchu1"></span>
                  登出</div>
              </li>
            </ul>
          </div>
          <div class="search-menu" v-if="showSearch">
            <el-input v-model="searchValue" size="small"
                      placeholder="请输入主题、帖子"
                      ref="searchIpt"></el-input>
          </div>
        </div>
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
import { hasClass } from './../../../common/utils';

export default {
  components: {
    Login,
    Register,
  },
  mounted() {
    document.addEventListener('click', () => {
      this.closeDropDown();
    });
  },
  data() {
    return {
      loginDialogVisible: false,
      registerDialogVisible: false,
      showUserMenu: false,
      showSearch: false,
      searchValue: '',
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
        this.closeDropDown();
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
    showDropDown(type) {
      if (!hasClass(this.$refs.dropDown, `${type}show`)) {
        this.$refs.dropDown.classList.remove('infoshow');
        this.$refs.dropDown.classList.remove('searchshow');
        this.$refs.dropDown.classList.add(`${type}show`);
      } else {
        this.$refs.dropDown.classList.remove(`${type}show`);
      }
      switch (type) {
        case 'search':
          this.showUserMenu = false;
          this.showSearch = true;
          this.$nextTick(() => {
            this.$refs.searchIpt.focus();
          });
          break;
        case 'info':
          this.showUserMenu = true;
          this.showSearch = false;
          break;
        default:
          break;
      }
    },
    closeDropDown() {
      this.$refs.dropDown.classList.remove('infoshow');
      this.$refs.dropDown.classList.remove('searchshow');
      this.showUserMenu = false;
      this.showSearch = false;
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
        position: relative;
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
            margin-left: 10px;
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
        .drop-down {
          display: none;
          position: absolute;
          right: 0;
          top: 100%;
          width: 300px;
          height: auto;
          border: 1px solid #e9e9e9;
          box-shadow: 0 2px 2px rgba(0,0,0,0.25);
          background-color: #fff;
          z-index: 1100;
          padding: 0 10px;
          .user-menu {
            ul li {
              cursor: pointer;
              padding: 10px 0;
              border-bottom: 1px solid #e9e9e9;
              display: flex;
              justify-content: space-between;
              color: #919191;
              &:last-child {
                border-bottom: 0;
              }
              .sp {
                padding: 5px 10px;
                &:hover {
                  background: yellow;
                }
              }
              .icon {
                margin-right: 10px;
              }
              .logout {
                color: #08c;
                width: 100%;
              }
            }
          }
          .search-menu {
            padding: 10px;
          }
        }
      }
    }
  }
  .infoshow {
    display: block !important;
  }
  .searchshow {
    display: block !important;
  }
</style>
