<template>
  <div>
    <div class="header">
      <div class="left">
        <div class="title">总资产</div>
        <div class="money">￥88888.00</div>
      </div>
      <div class="right">
        <div class="shouyi">今日收益：+100.00</div>
        <div class="shouyilv">今日收益率：+2.33%</div>
      </div>
    </div>
    <div class="btns">
      <van-button type="info" size="small" @click="allLogs">查看所有交易日志</van-button>
      <van-button type="primary" size="small" style="margin-left: 5px" @click="addFund">添加新的基金</van-button>
    </div>
    <home-list/>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "Money",
  components: {HomeList},
  data() {
    return {
      scrollTop: 0,
    }
  },
  methods: {
    activated() {
      console.log('money activated')
    },
    allLogs() {
      this.$router.push('/money/all-logs')
    },
    addFund() {
      this.$router.push('/money/add-fund')
    },
  },
  activated() {
    window.scrollTo(0, this.scrollTop)
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
}
</script>

<style scoped>
.header {
  padding: 0.9rem 4%;
  float: left;
  width: 92%;
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
}

.header .right {
  float: left;
  width: 50%;
  text-align: right;
  font-size: 0.9rem;
  line-height: 1.6;

}

.btns {
  width: 92%;
  padding: 0 4% 10px 4%;
  text-align: left;
}
</style>
