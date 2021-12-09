<template>
  <div>
    <navbar bar-title="修改日志"/>
    <div class="form" style="padding:55px 4% 56px 4%">
      <van-form @submit="subConfirm">
        <van-field
          v-model="fundName"
          name="基金名称"
          label="基金名称"
          placeholder="基金名称"
          readonly
        />
        <van-field
          v-model="fundCode"
          name="基金代码"
          label="基金代码"
          placeholder="基金代码"
          readonly
        />
        <van-field
          v-model="date"
          name="买入日期"
          label="买入日期"
          placeholder="买入日期"
          readonly
        />
        <van-field
          v-model="cost"
          name="买入金额"
          type="number"
          label="买入金额"
          placeholder="买入金额"
          :rules="[{ required: true, message: '请输入买入金额' }]"
        />
        <van-field
          v-model="count"
          name="确认份额"
          type="number"
          label="确认份额"
          placeholder="确认份额"
          :rules="[{ required: true, message: '请输入确认份额' }]"
        />
        <van-field
          v-model="about"
          rows="3"
          autosize
          label="备注信息"
          type="textarea"
          placeholder="请输入备注信息"
        />
        <van-radio-group v-model="status" direction="horizontal" style="padding-left:10px">
          <van-radio name="wait">等待确认</van-radio>
          <van-radio name="ok">已确认</van-radio>
          <van-radio name="cancel">已取消</van-radio>
        </van-radio-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">确认修改</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import {getSingleLog, editLog} from '../../http/api'
import {Dialog, Toast} from 'vant'
import moment from "moment";

export default {
  name: "EditLog",
  components: {Navbar},
  data() {
    return {
      id: this.$route.params.id,
      fundCode: '',
      fundName: '',
      cost: 0,
      about: '',
      status: 'wait',
      count: 0,
      date: '',
    }
  },
  methods: {
    subConfirm() {
      if (this.status === 'ok') {
        Dialog
          .confirm({
            title: '注意！',
            message: '本操作会使当前基金的【确认份额】及【购买成本】被自动计入，操作后该日志将不可修改。请确认无误！'
          })
          .then(() => this.editLog())
          .catch(() => {
            return
          })
      } else {
        this.editLog()
      }
    },
    editLog() {
      const data = {
        token: this.$cookies.get('token'),
        id: this.id,
        cost: this.cost,
        get: this.count,
        status: this.status,
        about: this.about,
      }
      editLog(data)
        .then(res => {
          if (res.data.code === 'OK') {
            Toast.success('修改成功')
            this.$parent.getSingleFund(this.fundCode)
            history.go(-1)
          }
        })
        .catch(err => console.log(err))
    },
    getSingleLog() {
      this.id = this.$route.params.id
      const data = {
        token: this.$cookies.get('token'),
        id: this.id,
      }
      getSingleLog(data)
        .then(res => {
          this.fundCode = res.data.log.code
          this.fundName = res.data.log.name
          this.cost = res.data.log.cost
          this.about = res.data.log.about
          this.status = res.data.log.status
          this.count = 0
          this.date = moment(res.data.log.date).format('YYYY/MM/DD')
        })
        .catch(err => console.log(err))
    },
  },
  activated() {
    this.getSingleLog()
  },
}
</script>

<style scoped>

</style>
