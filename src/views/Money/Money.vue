<template>
  <div>
    <div class="header">
      <div class="left">
        <div class="title">结算总资产</div>
        <div class="money">￥{{ sumMoney.toFixed(2) }}</div>
      </div>
      <div
        class="right"
        :class="allShouyi>0 ? 'red' : 'green'"
      >
        <div class="shouyi">估算总收益：{{ showN(allShouyi) }}</div>
        <div class="shouyilv">估算收益率：{{ showN(allShouyi / allCost * 100) }}%</div>
      </div>
    </div>
    <div class="btns">
      <van-button type="info" size="small" @click="allLogs">查看所有交易日志</van-button>
      <van-button type="primary" size="small" style="margin-left: 5px" @click="addFund">添加新的基金</van-button>
    </div>
    <home-list :mb-data="mbData"/>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "Money",
  components: {HomeList},
  props: ['originData'],
  data() {
    return {
      scrollTop: 0,
      sumMoney: 0,
      allShouyi: 0,
      allCost: 0,
      mbData: [],
    }
  },
  methods: {
    allLogs() {
      this.$router.push('/money/all-logs')
    },
    addFund() {
      this.$router.push('/money/add-fund')
    },
    formatData() {
      this.mbData = []
      this.sumMoney = 0
      this.allShouyi = 0
      this.allCost = 0
      const oData = this.originData
      if (oData === 'empty') {
        this.mbData = oData
        return
      }
      oData.forEach(item => {
        let leftBig, leftSmall, rightBig, rightSmall, paixu
        leftBig = item.name
        paixu = item.count * item.jsPrice
        this.sumMoney += paixu
        leftSmall = item.count * item.gsPrice - item.cost
        this.allShouyi += leftSmall
        this.allCost += item.cost
        rightBig = paixu.toFixed(2)
        rightSmall = leftSmall / item.cost * 100
        let fh = ''
        if (leftSmall > 0) fh = '+'
        leftSmall = `估算总收益：${fh + leftSmall.toFixed(2)}`
        rightSmall = fh + rightSmall.toFixed(2) + '%'
        this.mbData.push({
          id: item.id,
          leftBig,
          leftSmall,
          rightBig,
          rightSmall,
          point: item.gsPoint,
          paixu,
        })
      })
      this.mbData.sort((a, b) => b.paixu - a.paixu)
      this.todayPoint = this.todayMoney / this.sumMoney * 100
      window.scrollTo(0, this.scrollTop)
    },
  },
  computed: {
    showN() {
      return function (num) {
        num = parseFloat(num)
        if (num > 0) return '+' + num.toFixed(2)
        else return num.toFixed(2)
      }
    },
  },
  activated() {
    this.formatData()
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
  watch: {
    originData() {
      this.formatData()
    }
  }
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

.red {
  color: #e74c3c;
}

.green {
  color: #27ae60;
}
</style>
