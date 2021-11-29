<template>
  <div>
    <div class="card-tab van-sticky--fixed">
      <van-tabs type="card" v-model="cardActive" @change="cardChg">
        <van-tab title="资产排序"></van-tab>
        <van-tab title="跌幅排序"></van-tab>
        <van-tab title="回撤率序"></van-tab>
      </van-tabs>
    </div>
    <home-list style="margin-top: 56px"/>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "Home",
  components: {HomeList},
  data() {
    return {
      cardActive: 0,
    }
  },
  methods: {
    cardChg() {
      console.log(this.cardActive)
    },
  }
}
</script>

<style scoped>
.card-tab {
  padding: 12px 0;
  box-shadow: 0 1px 5px rgba(233, 233, 233, 1);
  background: white;
}
</style>
