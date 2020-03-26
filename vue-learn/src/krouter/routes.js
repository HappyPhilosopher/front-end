import Login from '@/components/dynamicRouter/Login';
import Home from '@/pages/home';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
];
