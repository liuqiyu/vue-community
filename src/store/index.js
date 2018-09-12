import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import login from './module/login';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    login,
  },
  getters,
});
