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
Vue.filter('changeDateFromTime', function (value) {
  value = String(new Date(value * 1000))
  const date = value.slice(8, 10).trim()
  return `${date}`
})

Vue.filter('changetime', function (value) {
  if (value) {
    const date = new Date(value * 1000)
    const hours = date.getHours()
    const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    return `${hours}:${min}`
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')