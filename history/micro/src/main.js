import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './router';
// import router from './router';
// import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render() {
  router = new VueRouter({
    // eslint-disable-next-line no-underscore-dangle
    base: window.__POWERED_BY_QIANKUN__ ? '/micro' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount('#app-child');
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main app', props);
  render();
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');
