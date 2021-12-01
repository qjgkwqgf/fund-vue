<template>
  <div>
    <navbar :bar-title="barTitle"/>
    <div class="header" style="padding-top: 55px">
      <div class="left">
        <div class="title">基金名称在这里</div>
        <div class="small">1234567</div>
        <div class="small">经理人</div>
      </div>
      <div class="right">
        <div class="zzc">88888.00</div>
        <div class="ljsy">+12345.00</div>
        <div class="ljsy">+30.00%</div>
      </div>
      <div class="about">这里可以写一些个人对基金的看法</div>
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
      <van-button size="small" type="info" @click="toWeb">去官网看看</van-button>
      <van-button size="small" type="primary" style="margin-left:5px" @click="addLog">追加交易日志</van-button>
      <van-button type="warning" size="small" style="margin-left: 5px" @click="editFund(1234)">修改基金</van-button>
      <van-button type="danger" size="small" style="margin-left: 5px" @click="delFund(1234)">取消关注</van-button>
    </div>
    <logs style="margin-bottom: 56px"/>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Logs from "../../components/Logs";

export default {
  name: "Fund",
  components: {Logs, Navbar},
  data() {
    return {
      barTitle: '基金名称',
    }
  },
  methods: {
    toWeb() {
      window.open('https://h5.1234567.com.cn/app/fund-details/?fCode=007369', '_blank')
    },
    addLog() {
      this.$router.push('/money/add-log')
    },
    editFund(fundCode) {
      this.$router.push('/money/edit-fund/' + fundCode)
    },
    delFund(id){
      console.log(id)
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
.header .small {
  font-size: 0.9rem;
  color: darkgray;
}

.header .right {
  width: 45%;
  text-align: right;
  line-height: 1.5;
  float: left;
}

.header .ljsy {
  font-size: 0.9rem;
}

.header .about {
  width: 100%;
  line-height: 1.5;
  padding-top: 15px;
  text-align: left;
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
</style>
