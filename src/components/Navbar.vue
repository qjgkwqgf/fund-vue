<template>
  <van-nav-bar
    :title="barTitle"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    style="box-shadow:0 1px 5px rgba(233,233,233,0.8)"
  />
</template>

<script>
export default {
  name: "Navbar",
  props: ['barTitle'],
  methods: {
    onClickLeft() {
      history.go(-1)
    },
  },
}
</script>

<style scoped>

</style>
