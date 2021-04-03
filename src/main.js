import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.filter('changeDate', function (value) {
  value = String(value)
  const date = value.slice(8, 10).trim()
  const month = value.slice(4, 7).trim()
  const year = value.slice(11, 15)

  return `${month} ${date}, ${year}`
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')