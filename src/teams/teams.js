import Vue from 'vue'
import Teams from '../components/Teams.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Teams),
}).$mount('#app')
