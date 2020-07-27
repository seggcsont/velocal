import Vue from 'vue'
// import App from './App.vue'
import router from './router'
import Teams from './views/Teams'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Teams)
}).$mount('#app')
