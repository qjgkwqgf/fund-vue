<template>
  <div>
    <navbar :bar-title="barTitle"/>
    <div v-if="fund">
      <div class="header" style="padding-top: 55px">
        <div class="left">
          <div class="title">{{ fund.name }}</div>
          <div class="small">{{ fund.code }}</div>
          <div class="small">{{ fund.manager }}</div>
        </div>
        <div class="right" :class="have-fund.cost>0 ? 'red' : 'green'">
          <div class="zzc">{{ have.toFixed(2) }}</div>
          <div class="ljsy">总收益：{{ showN(have - fund.cost) }}</div>
          <div class="ljsy">总收益率：{{ showN((have / fund.cost - 1) * 100) }}%</div>
        </div>
        <div class="about">{{ fund.about }}</div>
      </div>
      <div class="body">
        <div class="left">
          持仓份额：{{ fund.count }}<br>
          持仓总成本：{{ fund.cost.toFixed(2) }}<br>
          总收益率：{{ showN((have / fund.cost - 1) * 100) }}%<br>
          当前回撤率：{{ showN(((fund.gsPrice - fund.jsPrice + fund.ljPrice) / fund.ljMaxPrice - 1) * 100) }}%<br>
          估算收益率：{{ showN(fund.gsPoint) }}%<br>
          估算收益：{{ showN((fund.gsPrice - fund.jsPrice) * fund.count) }}
        </div>
        <div class="left">
          最大累计净值：{{ fund.ljMaxPrice }}<br>
          累计净值：{{ fund.ljPrice }}<br>
          结算净值：{{ fund.jsPrice }}<br>
          结算日期：{{ fund.jsTime }}<br>
          净值估算：{{ fund.gsPrice }}<br>
          估算时间：{{ fund.gsTime }}
        </div>
      </div>
      <div class="btns">
        <van-button size="small" type="info" @click="toWeb">去官网看看</van-button>
        <van-button size="small" type="primary" style="margin-left:5px" @click="addLog(fund.code)">追加交易日志</van-button>
        <van-button type="warning" size="small" style="margin-left: 5px" @click="editFund(fund.id)">修改基金</van-button>
        <van-button type="danger" size="small" style="margin-left: 5px" @click="delFund(fund.id)">取消关注</van-button>
      </div>
      <logs style="margin-bottom: 56px" :logs-data="logsData" ref="lgs"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Logs from "../../components/Logs";
import {Dialog, Toast} from 'vant'
import {delFund, getBuyLogs} from '../../http/api'

export default {
  name: "Fund",
  components: {Logs, Navbar},
  props: ['originData'],
  data() {
    return {
      barTitle: '基金详情',
      id: this.$route.params.id,
      fund: undefined,
      have: 0,
      p: 1,
      logsData: [],
      newCount: 0,
    }
  },
  methods: {
    setData() {
      window.scrollTo(0, 0)
      this.id = this.$route.params.id
      const oData = this.originData
      if (oData === 'empty') return
      this.fund = oData.find(item => item.id === ~~this.id)
      this.have = this.fund.count * this.fund.gsPrice
      this.getBuyLogs()
    },
    toWeb() {
      window.open('https://h5.1234567.com.cn/app/fund-details/?fCode=' + this.fund.code, '_blank')
    },
    addLog(code) {
      this.$router.push('/money/add-log/' + code)
    },
    editFund(id) {
      this.$router.push('/money/edit-fund/' + id)
    },
    delFund(id) {
      Dialog.confirm({
        title: '提示',
        message: '您确定不再关注该基金了吗？',
      })
        .then(() => {
          const token = this.$cookies.get('token')
          delFund({token, id})
            .then(res => {
              if (res.data.code === 'OK') {
                Toast.success('删除成功')
                this.$parent.delFund(id)
                this.$router.push('/money')
              }
            })
            .catch(err => console.log(err))
        })
        .catch(() => {
          // console.log('cancel')
        });
    },
    getBuyLogs() {
      const data = {
        token: this.$cookies.get('token'),
        p: this.p,
        code: this.fund.code,
      }
      getBuyLogs(data)
        .then(res => {
          this.logsData = res.data.logs
          this.newCount = res.data.logs.length
        })
        .catch(err => console.log(err))
    },
    incPage() {
      if (this.newCount >= 20) {
        this.p++
        this.getAllLogs()
      } else {
        this.$refs.lgs.setEnd()
      }
    },
  },
  activated() {
    this.setData()
  },
  computed: {
    showN() {
      return function (num) {
        num = parseFloat(num)
        if (num > 0) return '+' + num.toFixed(2)
        else return num.toFixed(2)
      }
    }
  },
  watch: {
    originData() {
      this.setData()
    },
  },
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
  float: left;
  line-height: 1.5;
  padding-top: 15px;
  text-align: left;
  font-size: 0.88rem;
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

.red {
  color: #e74c3c
}

.green {
  color: #27ae60
}
</style>
