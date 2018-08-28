import {
  LOGIN_DIALOG_VISIBLE_OPEN,
  LOGIN_DIALOG_VISIBLE_CLOSE,
  REGISTER_DIALOG_VISIBLE_OPEN,
  REGISTER_DIALOG_VISIBLE_CLOSE } from './mutation-types';

const mutations = {
  [LOGIN_DIALOG_VISIBLE_OPEN](state) {
    state.loginDialogVisible = true;
  },
  [LOGIN_DIALOG_VISIBLE_CLOSE](state) {
    state.loginDialogVisible = false;
  },
  [REGISTER_DIALOG_VISIBLE_OPEN](state) {
    state.registerDialogVisible = true;
  },
  [REGISTER_DIALOG_VISIBLE_CLOSE](state) {
    state.registerDialogVisible = false;
  },
};

export default mutations;
