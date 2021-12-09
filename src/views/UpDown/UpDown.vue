<template>
  <div>
    <h4>今日涨跌</h4>
    <div class="process-line" v-show="up+down>0">
      <div class="left" :style="`width:${leftW}%`">{{ leftW }}%</div>
      <div class="right" :style="`width:${rightW}%`">{{ rightW }}%</div>
    </div>
    <div class="up-down-text">
      <div class="left">上涨 {{ up }}</div>
      <div class="right">下跌 {{ down }}</div>
    </div>
    <div class="shouyi" :class="todayMoney>0 ? 'red' : 'green'">
      今日收益：{{ this.todayMoney.toFixed(2) }} &nbsp;
      收益率：{{ (this.todayMoney / this.jsMoney * 100).toFixed(2) }}%
    </div>
    <home-list :mb-data="mbData"/>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "UpDown",
  components: {HomeList},
  props: ['originData'],
  data() {
    return {
      scrollTop: 0,
      mbData: [],
      up: 0,
      down: 0,
      leftW: 50,
      rightW: 50,
      todayMoney: 0,
      jsMoney: 0,
    }
  },
  methods: {
    formatData() {
      this.mbData = []
      this.up = 0
      this.down = 0
      this.todayMoney = 0
      this.jsMoney = 0
      const oData = this.originData
      if (oData === 'empty') {
        this.mbData = oData
        return
      }
      oData.forEach(item => {
        let leftBig, leftSmall, rightBig, rightSmall, paixu
        leftBig = item.name
        leftSmall = item.count * item.jsPrice
        this.jsMoney = leftSmall
        this.todayMoney += item.count * item.gsPrice - leftSmall
        paixu = item.gsPoint
        rightBig = `${paixu.toFixed(2)}%`
        rightSmall = (item.gsPrice - item.jsPrice) * item.count
        let fh = ''
        if (rightSmall > 0) fh = '+'
        item.gsPoint > 0
          ? this.up++
          : this.down++
        rightSmall = fh + rightSmall.toFixed(2)
        rightBig = fh + rightBig
        leftSmall = `结算金额：${leftSmall.toFixed(2)}`
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
      this.mbData.sort((a, b) => a.paixu - b.paixu)
      this.leftW = (this.up / (this.up + this.down) * 100).toFixed(0)
      this.rightW = 100 - this.leftW
      window.scrollTo(0, this.scrollTop)
    }
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
.process-line {
  float: left;
  width: 80%;
  margin: 0 10%;
  border-radius: 1rem;
  overflow: hidden;
}

.process-line div {
  float: left;
  width: 50%;
  font-size: 0.8rem;
  line-height: 1.6rem;
  color: white;
}

.process-line .left {
  background: #e74c3c;
}

.process-line .right {
  background: #27ae60;
}

.up-down-text {
  width: 80%;
  margin: 8px 10%;
  float: left;
  font-weight: bold;
}

.up-down-text .left {
  width: 45%;
  padding-right: 5%;
  text-align: right;
  float: left;
  color: #e74c3c;
}

.up-down-text .right {
  width: 45%;
  padding-left: 5%;
  text-align: left;
  float: left;
  color: #27ae60;
}

.lists {
  float: left;
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 -1px 4px rgba(233, 233, 233, 1);
}

.shouyi {
  float: left;
  width: 100%;
  line-height: 1.5;
  margin-top: 0.3rem;
  font-size: 0.88rem;
}

.red {
  color: #e74c3c;
}

.green {
  color: #27ae60;
}
</style>
