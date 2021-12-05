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
import {getFundData, getSingleFund} from "./http/api";

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
      this.originData = []
      const token = this.$cookies.get('token')
      getFundData({token})
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
    },
    getSingleFund(code) {
      const token = this.$cookies.get('token')
      getSingleFund({token, code})
        .then(res => {
          if (res.data.code === 'OK') {
            const idx = this.originData.findIndex(item => item.code === res.data.fundData.code)
            idx === -1
              ? this.originData.push(res.data.fundData)
              : this.originData.splice(idx, 1, res.data.fundData)
          }
        })
        .catch(err => console.log(err))
    },
    delFund(id) {
      this.originData = this.originData.filter(item => item.id !== id)
      if (this.originData.length === 0) {
        this.originData = 'empty'
      }
    },
  },
};
</script>
