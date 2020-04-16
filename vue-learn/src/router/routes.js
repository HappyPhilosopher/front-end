import Home from '@/pages/home';
import FromTest from '@/pages/formTest';
import Tree from '@/pages/tree';
import DynamicRouter from '@/pages/dynamicRouter';
const User = () => import('@/components/dynamicRouter/user');
const Login = () => import('@/components/dynamicRouter/Login');
const VuexLearn = () => import('@/pages/vuex');
const VueSlots = () => import('@/pages/slots');
const DynamicComponents = () => import('@/pages/dynamicComponents');
const VueStyle = () => import('@/pages/styles');

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/formTest',
    component: FromTest
  },
  {
    path: '/tree',
    component: Tree
  },
  {
    path: '/dynamicRouter',
    component: DynamicRouter,
    children: [
      {
        path: 'user/:id',
        name: 'user',
        component: User,
        // 解耦
        props: true,
        meta: { auth: true }
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/vuex',
    component: VuexLearn
  },
  {
    path: '/slots',
    component: VueSlots
  },
  {
    path: '/dynamicComponents',
    component: DynamicComponents
  },
  {
    path: '/styles',
    component: VueStyle
  }
];

export default routes;
