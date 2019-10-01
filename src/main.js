/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-09-29 03:42:47
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-29 09:46:17
 */
import Vue from 'vue'
import App from './App.vue'
import Vxxx from 'vue-v-xxx'
import 'vue-v-xxx/lib/vue-v-xxx.css'
Vue.config.productionTip = false

Vue.use(Vxxx)
new Vue({
  render: h => h(App),
}).$mount('#app')
