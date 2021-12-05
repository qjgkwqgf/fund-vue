<template>
  <div>
    <navbar bar-title="添加基金"/>
    <div class="form" style="padding:55px 4% 56px 4%">
      <fund-form @subData="subData" :settings="settings" ref="form"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import FundForm from "../../components/FundForm";
import {addFund, getFundDatas} from '../../http/api'
import {Toast} from 'vant'

export default {
  name: "AddFund",
  components: {FundForm, Navbar},
  data() {
    return {
      settings: {
        fundCode: '',
        count: 0,
        cost: 0,
        maxSumPrice: 1,
        about: '暂无',
        btnType: 'primary',
        btnText: '添加到我的自选基金',
      }
    }
  },
  methods: {
    subData(data) {
      addFund(data)
        .then(res => {
          if (res.data.code === 'OK') {
            Toast.success('添加成功')
            this.$parent.getSingleFund(data.fundCode)
            this.$refs.form.clearForm()
            history.go(-1)
          }
        })
        .catch(err => console.log(err))
    }
  },
}
</script>

<style scoped>

</style>
