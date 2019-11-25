import Start from '@/components/Start.vue';
import App from '@/App.vue';
import Transition from '@/components/Transition.vue';
import Layouts from '@/components/Layout.vue';

export default [
  {
    path: '/',
    component: App
  },
  {
    path: '/start',
    component: Start
  },
  {
    path: '/transition',
    component: Transition
  },
  {
    path: '/layouts',
    component: Layouts
  }
];
