import Vue from 'vue'
import App from './App.vue'

import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faCheckCircle, faPlusSquare, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faCheckCircle, faPlusSquare, faCheck)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
