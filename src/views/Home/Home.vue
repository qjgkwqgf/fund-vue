<template>
  <div>
    <div class="card-tab van-sticky--fixed">
      <van-tabs type="card" v-model="cardActive" @change="cardChg">
        <van-tab title="资产排序"></van-tab>
        <van-tab title="跌幅排序"></van-tab>
        <van-tab title="回撤率序"></van-tab>
      </van-tabs>
    </div>
    <home-list style="margin-top: 56px" :mb-data="mbData"/>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "Home",
  components: {HomeList},
  props: ['originData'],
  data() {
    return {
      cardActive: 0,
      scrollTop: 0,
      mbData: [],
    }
  },
  methods: {
    cardChg() {
      this.formatData(this.cardActive)
    },
    formatData(tab) {
      this.mbData = []
      const oData = this.originData
      if (oData === 'empty') {
        this.mbData = oData
        return
      }
      oData.forEach(item => {
        let leftBig, leftSmall, rightBig, rightSmall, paixu
        leftBig = item.name
        if (tab === 0) {
          paixu = item.count * item.gsPrice
          leftSmall = item.gsPoint
          rightBig = paixu.toFixed(2)
          rightSmall = (item.gsPrice - item.jsPrice) * item.count
          let fh = ''
          if (leftSmall > 0) fh = '+'
          leftSmall = `今日收益：${fh + leftSmall.toFixed(2)}%`
          rightSmall = fh + rightSmall.toFixed(2)
        }
        if (tab === 1) {
          paixu = item.gsPoint
          leftSmall = (item.gsPrice - item.jsPrice) * item.count
          rightBig = item.gsPoint
          rightSmall = item.gsTime
          if (leftSmall > 0) {
            leftSmall = `估算收益：+${leftSmall.toFixed(2)}`
          } else {
            leftSmall = `估算亏损：${leftSmall.toFixed(2)}`
          }
          let fh = ''
          if (rightBig > 0) fh = '+'
          rightBig = fh + rightBig + '%'
        }
        if (tab === 2) {
          paixu = ((item.gsPrice - item.jsPrice + item.ljPrice) / item.ljMaxPrice - 1) * 100
          leftSmall = item.code
          rightBig = paixu.toFixed(2)
          rightSmall = item.gsPoint
          rightBig += '%'
          let fh = ''
          if (rightSmall > 0) fh = '+'
          rightSmall = fh + rightSmall + '%'
        }
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
      this.cardActive === 0
        ? this.mbData.sort((a, b) => b.paixu - a.paixu)
        : this.mbData.sort((a, b) => a.paixu - b.paixu)
      window.scrollTo(0, this.scrollTop)
    },
  },
  activated() {
    this.formatData(this.cardActive)
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
  watch: {
    originData() {
      this.formatData(this.cardActive)
    }
  },
}
</script>

<style scoped>
.card-tab {
  padding: 12px 0;
  box-shadow: 0 1px 5px rgba(233, 233, 233, 1);
  background: white;
}
</style>
