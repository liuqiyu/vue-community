// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import 'normalize.css';
import App from './App';
import router from './router';
import store from './store';
import './assets/font/iconfont.css';
import './common/element-ui';
import './assets/style/reset.css';

Vue.use(mavonEditor);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
