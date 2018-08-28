import {
  LOGIN,
  LOGOUT } from './mutation-types';

const mutations = {
  [LOGIN](state) {
    state.logined = true;
    const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
    state.LoginedUser.username = userInfo.username;
  },
  [LOGOUT](state) {
    state.logined = false;
    state.LoginedUser.username = '';
  },
};

export default mutations;
