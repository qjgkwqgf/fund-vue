import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Image,
  Form,
  Field,
  Divider,
  Tab,
  Tabs,
  PullRefresh,
} from 'vant';

Vue.config.productionTip = false

Vue.use(PullRefresh)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Divider)
Vue.use(Field)
Vue.use(Form)
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Image)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
