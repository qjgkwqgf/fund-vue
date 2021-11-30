<template>
  <div>
    <navbar :bar-title="barTitle"/>
    <div class="header">
      <div class="left">
        <div class="title">基金名称在这里</div>
        <div class="small">1234567</div>
        <div class="manager">经理人</div>
      </div>
      <div class="right">
        <div class="zzc">88888.00</div>
        <div class="ljsy">+12345.00</div>
        <div class="ljsyl">+30.00%</div>
      </div>
    </div>
    <div class="body">
      <div class="left">
        持仓份额：1234.56<br>
        持仓总成本：12456.78<br>
        总收益率：+333.33%<br>
        当前回撤率：-30.56%<br>
        估算收益率：-2.33%<br>
        估算收益：1234.00
      </div>
      <div class="left">
        最大累计净值：12.1234<br>
        累计净值：8.1234<br>
        结算净值：2.2345<br>
        结算日期：2021-04-20<br>
        净值估算：2.2355<br>
        估算日期：2021-04-21
      </div>
    </div>
    <div class="btns">
      <van-button size="small" type="info">去官网看看</van-button>
      <van-button size="small" type="primary" style="margin-left:0.5rem">追加买入日志</van-button>
    </div>
    <div class="logs">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="log" v-for="i in 10">
          买入日期：2021/08/11<br>
          买入金额：2.3333<br>
          买入份数：1000<br>
          备注：没有什么逻辑可言，干就完了
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";

export default {
  name: "Fund",
  components: {Navbar},
  data() {
    return {
      barTitle: '基金名称',
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.finished = true
      }, 1000)
    },
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.header {
  width: 92%;
  padding: 0.8rem 4%;
  float: left;
  box-shadow: 0 1px 5px rgba(200, 200, 200, 0.3);
}

.header .left {
  width: 55%;
  text-align: left;
  line-height: 1.5;
  float: left;
}

.header .left .title, .header .right .zzc {
  font-weight: bold;
  font-size: 1.2rem;
}

.header .right {
  width: 45%;
  text-align: right;
  line-height: 1.5;
  float: left;
}

.body {
  float: left;
  width: 92%;
  padding: 0.9rem 4%;
  font-size: 0.8rem;
  line-height: 1.5;
}

.body .left {
  width: 50%;
  text-align: left;
  float: left;
}

.btns {
  width: 92%;
  padding: 0.9rem 4%;
  text-align: left;
}

.logs {
  width: 92%;
  padding: 0 4% 56px 4%;
  text-align: left;
}

.logs .log {
  border-radius: 0.5rem;
  font-size: 0.8rem;
  padding: 8px;
  margin-bottom: 10px;
  border: solid 1px lightgray;
  box-shadow: 1px 1px 3px rgba(200, 200, 200, 0.6);
}
</style>
