import Vue from 'vue';
import VueRouter from 'vue-router';
import Comp1 from '@/practices/components/index.vue';
import computed from '@/practices/computed&watch/computed.vue';
import App from '@/App.vue';
import Watch from '@/practices/computed&watch/watch.vue';
import Directives from '@/practices/directives/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/components',
    component: Comp1
  },
  {
    path: '/computed',
    component: computed
  },
  {
    path: '/watch',
    component: Watch
  },
  {
    path: '/directives',
    component: Directives
  }
];

export default new VueRouter({
  routes
});
