<template>
  <div id="app">
    <keep-alive>
      <router-view :originData="originData" :fundCount="fundCount" ref="view"/>
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
      fundCount: 0,
    }
  },
  mounted() {
    this.getFundData()
  },
  methods: {
    getFundData(cb) {
      this.originData = []
      this.fundCount = 0
      const token = this.$cookies.get('token')
      getFundData({token})
        .then(res => {
          if (res.data.code !== 'OK') {
            this.$cookies.remove('user')
            this.$cookies.remove('token')
            this.originData = 'empty'
            if (cb) cb()
            return
          }
          this.originData = res.data.fundData
          this.fundCount = res.data.count
          if (this.originData.length === 0) this.originData = 'empty'
          if (cb) cb()
        })
        .catch(err => {
          console.log(err)
          if (cb) cb()
        })
    },
    getSingleFund(code) {
      const token = this.$cookies.get('token')
      getSingleFund({token, code})
        .then(res => {
          if (res.data.code === 'OK') {
            if (this.originData === 'empty') this.originData = []
            const idx = this.originData.findIndex(item => item.code === res.data.fundData.code)
            if (idx === -1) {
              this.fundCount++
              this.originData.push(res.data.fundData)
            } else {
              this.originData.splice(idx, 1, res.data.fundData)
            }
          }
        })
        .catch(err => console.log(err))
    },
    delFund(id) {
      this.fundCount--
      this.originData = this.originData.filter(item => item.id !== id)
      if (this.originData.length === 0) {
        this.originData = 'empty'
      }
    },
  },
};
</script>
