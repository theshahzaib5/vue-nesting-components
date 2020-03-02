import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/styles/styles.scss';

Vue.use(VueResource);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
