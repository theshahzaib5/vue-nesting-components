import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/styles.scss';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

// custom directives

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = '800px';
    }
    if (binding.arg == 'withBg') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + ' ...';
});

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
