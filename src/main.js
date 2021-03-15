import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './styles/datepicker.css'
import './styles/unpkg.css'
import './styles/anim.css'
import elementLocale from 'element-ui/lib/locale/lang/en';



Vue.use(ElementUI, { locale: elementLocale });
Vue.config.productionTip = false
Vue.use(VueRouter, VueAxios, axios)

new Vue({
  render: h => h(App),
  el: '#app',
  router
})
.$mount('#app')


