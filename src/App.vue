<template>
  <div id="app">
    <router-view :originData="originData"/>
    <main-tab-bar v-if="showTabBar"/>
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
import {checkLoginStatus} from "./http/api";

export default {
  components: {
    MainTabBar,
  },
  data() {
    return {
      showTabBar: true,
      originData: 'Hello',
    }
  },
  mounted() {
    // checkLoginStatus()
    //   .then(res => {
    //     if (res.data.code !== 'OK') {
    //       this.$router.push('/login')
    //       this.showTabBar = false
    //     }
    //   })
    //   .catch(err => console.log(err))
  },
  methods: {},
};
</script>
