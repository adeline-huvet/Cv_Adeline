import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-flipper/dist/vue-flipper.css';
import Flipper from 'vue-flipper';
import VueTyperPlugin from 'vue-typer'
import VuePageTransition from 'vue-page-transition'





Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('flipper', Flipper);
Vue.use(VueTyperPlugin);
Vue.use(VuePageTransition);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
