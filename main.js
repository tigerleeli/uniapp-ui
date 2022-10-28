import App from './App'
import cuCustom from './ui/components/cu-custom.vue'
import throttle from '@/util/throttle.js'
import debounce from '@/util/debounce.js'
import math from '@/util/math.js'

Vue.component('cu-custom', cuCustom)
Vue.prototype.$throttle = throttle
Vue.prototype.$debounce = debounce
Vue.prototype.$math = math

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif