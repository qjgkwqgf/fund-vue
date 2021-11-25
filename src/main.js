import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Image,
} from 'vant';

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Image)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
