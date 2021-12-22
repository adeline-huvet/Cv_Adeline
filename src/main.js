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
//import Glitch from 'vue-glitch';




Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('flipper', Flipper);
//Vue.component('glitch', Glitch);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
