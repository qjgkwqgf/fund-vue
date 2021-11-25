<template>
  <div id="app">
    <router-view/>
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
      showTabBar: false,
    }
  },
  mounted() {
    checkLoginStatus()
      .then(res => {
        if (res.data.code !== 'OK') {
          this.$router.push('/login')
        } else {
          this.showTabBar = true
        }
      })
      .catch(err => console.log(err))
  },
};
</script>
