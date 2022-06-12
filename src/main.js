import Vue from 'vue'
import App from './App'
import MUI from "./index"
Vue.use(MUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
