import Vue from 'vue'
import Main from './Main.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Main)
})
