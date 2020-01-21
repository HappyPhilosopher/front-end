import Vue from 'vue';
import VueRouter from 'vue-router';
import DefineComponent from '@/views/defineComponent.vue';
import Slot from '@/views/slot.vue';
import Provide from '@/views/provide.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/defineComponent',
    component: DefineComponent
  },
  {
    path: '/slot',
    component: Slot
  },
  {
    path: '/provide',
    component: Provide
  }
];

export default new VueRouter({
  routes
});
