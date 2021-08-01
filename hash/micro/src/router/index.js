import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';

export const routes = [
  {
    path: '/micro/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/micro/about',
    name: 'About',
    component: About,
  },
  {
    path: '/micro/user/:username?',
    name: 'User',
    component: User,
    props: true,
  },
];
