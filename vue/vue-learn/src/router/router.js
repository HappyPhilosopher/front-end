import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Film from '../pages/Film.vue';
import NowPlaying from '../pages/Film/NowPlaying.vue';
import ComingSoon from '../pages/Film/ComingSoon.vue';
import Cinema from '../pages/Cinema.vue';
import Detail from '../pages/Film/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
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
        name: 'nowPlaying',
        component: NowPlaying
      },
      {
        path: 'comingSoon',
        name: 'comingSoon',
        component: ComingSoon
      }
    ]
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: Cinema
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
];

export default new VueRouter({
  routes
});
