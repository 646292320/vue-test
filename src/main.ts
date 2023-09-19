import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import Component from '@/components/index'
import '@/assets/style/normalize.css'
import defineDirective from '@/directives/index'
import * as utils from '@/utils/index'
import requst from '@/api/requst'
import '@/assets/icons/iconfonts/iconfont.css'
import '@/assets/icons'
import 'animate.css'

Vue.use(Component)
Vue.use(defineDirective)
Vue.prototype.$utils = utils
Vue.prototype.$req = requst
Vue.prototype.$EventBus = new Vue()  
Vue.filter('dateFormat', function (originVal: string | number | Date) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  // 月份从0开始,使她变成字符串,不足两位时,前面补个0.
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
