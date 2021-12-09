<template>
  <div class="page" style="padding-top: 46px">
    <navbar :bar-title="barTitle"/>
    <div class="body" style="padding-bottom: 56px" :style="'height:'+bodyHeight">
      <keep-alive>
        <router-view :fundCount="fundCount"/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";

export default {
  name: "Settings",
  components: {Navbar},
  props: ['fundCount'],
  data() {
    return {
      barTitle: '设置',
      bodyHeight: 'auto',
    }
  },
  methods: {
    setBodyHeight() {
      const bodyHeight = document.body.clientHeight
      const viewHeight = window.innerHeight - 46 - 16 * 2 - 56
      if (bodyHeight < viewHeight) this.bodyHeight = viewHeight + 'px'
    },
    setBarTitle(barTitle) {
      this.barTitle = barTitle
    },
  },
}
</script>

<style scoped>
.page .body {
  padding: 1rem 0;
  background: rgba(200, 200, 200, 0.2);
  text-align: left;
}
</style>
