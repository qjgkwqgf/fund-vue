<template>
  <div id="app">
    <keep-alive>
      <router-view :originData="originData" ref="view"/>
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
import {getFundData} from "./http/api";

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
    this.getFundData()
  },
  methods: {
    getFundData() {
      getFundData({
        token: this.$cookies.get('token')
      })
        .then(res => {
          if (res.data.code !== 'OK') {
            this.$cookies.remove('user')
            this.$cookies.remove('token')
            this.originData = 'empty'
            return
          }
          this.originData = res.data.fundData
          if (this.originData.length === 0) this.originData = 'empty'
        })
        .catch(err => console.log(err))
    }
  },
};
</script>
