import Vue from 'vue';
import Router from 'vue-router';
const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'layout');
const Overview = r => require.ensure([], () => r(require('@/views/overview/index.vue')), 'overview');
const Page = r => require.ensure([], () => r(require('@/views/page/index.vue')), 'overview');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'overview',
          component: Overview,
        },
        {
          path: '/page/:id',
          name: 'page',
          component: Page,
        }
      ]
    },
  ],
});
