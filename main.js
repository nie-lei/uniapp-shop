import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'
import {getSetting,chooseAddress,openSetting,showModal} from './util/asyncUni.js'

Vue.prototype.$myRequest = myRequest
Vue.prototype.$myUniApi= {getSetting,chooseAddress,openSetting,showModal}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
