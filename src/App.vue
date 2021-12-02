<template>
  <div id="app">
    <keep-alive>
      <router-view :originData="originData"/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import MainTabBar from "./components/MainTabBar";
import {getFundDatas} from "./http/api";

export default {
  components: {
    MainTabBar,
  },
  data() {
    return {
      originData: [],
    }
  },
  mounted() {
    // 获取基础数据
    getFundDatas({
      token: this.$cookies.get('token')
    })
      .then(res => {
        if (res.data.code !== 'OK') {
          this.$cookies.remove('user')
          this.$cookies.remove('token')
          return
        }
        console.log('ok')
      })
      .catch(err => console.log(err))
  },
  methods: {},
};
</script>
