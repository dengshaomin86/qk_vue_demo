import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/user/:username?',
    name: 'User',
    component: User,
    props: true,
  },
];
