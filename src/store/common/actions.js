import {
  LOGIN,
  LOGOUT } from './mutation-types';

const loginStatus = async ({ commit }) => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
  if (userInfo) {
    commit(LOGIN);
  } else {
    commit(LOGOUT);
  }
};

export default {
  loginStatus,
};
