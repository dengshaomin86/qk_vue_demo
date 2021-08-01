import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import { routes } from './router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const { container, components } = props;

  Vue.use(components);

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

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main app', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
