import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import { routes } from './router';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render() {
  router = new VueRouter({
    mode: 'hash',
    routes,
  });

  instance = new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app-child');
}

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
