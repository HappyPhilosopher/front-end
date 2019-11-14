import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Film from '../pages/Film.vue';
import NowPlaying from '../pages/Film/NowPlaying.vue';
import ComingSoon from '../pages/Film/ComingSoon.vue';
import Cinema from '../pages/Cinema.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: '',
        redirect: '/film/nowPlaying'
      },
      {
        path: 'nowPlaying',
        component: NowPlaying
      },
      {
        path: 'comingSoon',
        component: ComingSoon
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  }
];

export default new VueRouter({
  routes
});
