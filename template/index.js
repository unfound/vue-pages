import Vue from 'vue'
import <%= pageName %> from './<%= pageName %>.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(<%= pageName %>)
})
