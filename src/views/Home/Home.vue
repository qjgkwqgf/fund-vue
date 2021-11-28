<template>
  <div>
    <div class="card-tab van-sticky--fixed">
      <van-tabs type="card" v-model="cardActive" @change="cardChg">
        <van-tab title="资产排序"></van-tab>
        <van-tab title="跌幅排序"></van-tab>
        <van-tab title="回撤率序"></van-tab>
      </van-tabs>
    </div>
    <div class="lists" style="padding-bottom: 56px">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <home-list v-for="i in 100"/>
      </van-pull-refresh>
    </div>
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
      isLoading: false,
    }
  },
  methods: {
    cardChg() {
      console.log(this.cardActive)
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        console.log('刷新成功')
      }, 1000)
    }
  }
}
</script>

<style scoped>
.card-tab {
  padding: 12px 0;
  box-shadow: 0 1px 5px rgba(233, 233, 233, 1);
  background: white;
}

.lists {
  margin-top: 55px;
}
</style>
