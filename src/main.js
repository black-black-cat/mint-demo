import Vue from 'vue'
import App from './App'
import router from './router'
import { Cell, Button } from 'mint-ui'

Vue.config.productionTip = false

Vue.component(Cell.name, Cell)
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
