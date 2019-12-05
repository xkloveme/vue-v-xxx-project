import Vue from 'vue'
import App from './App.vue'
import Vxxx from 'vue-v-xxx'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-v-xxx/lib/vue-v-xxx.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vxxx)
new Vue({
  render: h => h(App)
}).$mount('#app')
