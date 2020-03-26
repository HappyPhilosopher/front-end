import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !window.isLogin) {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
