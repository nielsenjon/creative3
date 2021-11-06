import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import mock2 from './item-data.js'


Vue.config.productionTip = false

let data = {
  dungeons: mock,
  items: mock2,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
