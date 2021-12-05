<template>
  <div>
    <navbar bar-title="追加交易日志"/>
    <div class="form" style="padding:55px 4% 56px 4%">
      <van-form @submit="onSubmit">
        <van-field
          v-model="name"
          name="基金名称"
          label="基金名称"
          placeholder="基金名称"
          readonly
        />
        <van-field
          v-model="code"
          name="基金代码"
          label="基金代码"
          placeholder="基金代码"
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
          v-model="about"
          rows="3"
          autosize
          label="备注信息"
          type="textarea"
          placeholder="请输入备注信息"
        />
        <van-cell title="请选择购买日期：" :value="date" @click="show = true"/>
        <van-calendar v-model="show" @confirm="onConfirm" :min-date="minDate" :max-date="maxDate"/>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">确认追加</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import {addNewLog} from '../../http/api'
import {Toast} from 'vant'
import moment from 'moment'

export default {
  name: "AddLog",
  components: {Navbar},
  props: ['originData'],
  data() {
    return {
      code: this.$route.params.code,
      name: '',
      cost: 0,
      about: '',
      date: '',
      show: false,
      minDate: new Date(moment().subtract(10, 'days')),
      maxDate: new Date(moment().add(10, 'days'))
    }
  },
  methods: {
    onSubmit() {
      const data = {
        token: this.$cookies.get('token'),
        date: this.date,
        name: this.name,
        code: this.code,
        cost: this.cost,
        about: this.about,
        get: '0',
      }
      addNewLog(data)
        .then(res => {
          if (res.data.code === 'OK') {
            Toast.success('添加成功')
            history.go(-1)
          }
        })
        .catch(err => console.log(err))
    },
    formatDate(date) {
      return moment(date).format('YYYY/MM/DD');
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
  activated() {
    this.code = this.$route.params.code
    const which = this.originData.find(item => item.code === this.code)
    if (!which) return
    this.name = which.name
    this.cost = 0
    this.about = ''
  },
}
</script>

<style scoped>

</style>
