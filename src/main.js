import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/styles.scss';

Vue.use(VueResource);

// custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color =
      '#' +
      Math.random()
        .toString()
        .slice(2, 8);
  }
});

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

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
