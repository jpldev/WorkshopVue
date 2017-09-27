import Vue from 'vue'
import App from './App.vue'


Vue.filter('dash-list', (val) => {
  if (!val) { return '' }

  return val.join(', ')
})

new Vue({
  el: '#app',
  render: h => h(App)
  

})


