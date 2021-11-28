<template>
  <div>
    <div class="header van-sticky--fixed">
      <div class="left">
        <div class="title">总资产</div>
        <div class="money">￥88888.00</div>
      </div>
      <div class="right">
        <div class="shouyi">今日收益：+100.00</div>
        <div class="shouyilv">今日收益率：+2.33%</div>
      </div>
    </div>
    <div class="body" style="padding-bottom: 56px">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <home-list v-for="i in 20"/>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "Money",
  components: {HomeList},
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        console.log('刷新成功')
      }, 1000)
    }
  },
}
</script>

<style scoped>
.header {
  padding: 0.9rem 4%;
  float: left;
  width: 92%;
  box-shadow: 0 1px 5px rgba(233, 233, 233, 1);
  background: white;
}

.header .left {
  float: left;
  width: 50%;
  text-align: left;
}

.header .left .title {
  font-size: 1.1rem;
  font-weight: bold;
}

.header .left .money {
  font-size: 1.3rem;
  color: #e74c3c;
  font-family: Impact, sans-serif;
}

.header .right {
  float: left;
  width: 50%;
  text-align: right;
  font-size: 0.9rem;
  line-height: 1.6;

}

.body {
  margin-top: 80px;
}
</style>
