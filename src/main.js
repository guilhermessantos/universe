import './assets/sass/style.scss'
import './assets/sass/vue.scss'

import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages'

Vue.use(VueHighlightJS);

new Vue({
  el: '#app',
  render: h => h(App)
})
