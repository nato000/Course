import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
// import '@/styles/main_styles.css'
// import '@/styles/elements_responsive.css'
// import '@/styles/elements_styles.css'
// import '@/styles/offers_responsive.css'
// import '@/styles/offers_styles.css'
// import '@/styles/responsive.css'
// import '@/styles/about_responsive.css'
// import '@/styles/about_styles.css'
// import '@/styles/blog_responsive.css'
// import '@/styles/blog_styles.css'
// import '@/styles/contact_responsive.css'
// import '@/styles/contact_styles.css'
// import '@/styles/single_listing_responsive.css'
// import '@/styles/single_listing_styles.css'
// import '@/styles/bootstrap4/bootstrap.min.css'
// import '@/js/jquery-3.2.1.min.js'
// import '@/styles/bootstrap4/popper.js'
// import '@/styles/bootstrap4/bootstrap.min.js'
// import '@/plugins/OwlCarousel2-2.2.1/owl.carousel.js'
// import '@/plugins/easing/easing.js'
// import '@/js/custom.js'
// import '@/'
// import '@/'



Vue.config.productionTip = false
Vue.use(VueRouter, VueAxios, axios)

new Vue({
  render: h => h(App),
  // el: '#app',
  router
})
.$mount('#app')


