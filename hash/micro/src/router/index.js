import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/micro/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/micro/about',
    name: 'About',
    component: About,
  },
  {
    path: '/micro/user',
    name: 'User',
    component: User,
  },
];
