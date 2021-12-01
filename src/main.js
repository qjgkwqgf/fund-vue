import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
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
  CellGroup,
  Cell,
  NavBar,
  List,
  RadioGroup,
  Radio,
} from 'vant';

Vue.config.productionTip = false

Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(List)
Vue.use(NavBar)
Vue.use(Cell)
Vue.use(CellGroup)
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

Vue.use(VueCookies)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
