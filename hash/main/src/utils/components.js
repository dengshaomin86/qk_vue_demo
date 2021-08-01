import TextView from '@/components/TextView';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  install(Vue) {
    Vue.component(TextView.name, TextView);
    Vue.use(ElementUI);
  },
};
