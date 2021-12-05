<template>
  <div>
    <navbar bar-title="修改基金"/>
    <div class="form" style="padding:55px 4% 56px 4%" v-if="settings">
      <fund-form @subData="subData" :settings="settings"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import FundForm from "../../components/FundForm";
import {editFund} from '../../http/api'
import {Toast} from 'vant'

export default {
  name: "EditFund",
  components: {FundForm, Navbar},
  props: ['originData'],
  data() {
    return {
      id: this.$route.params.id,
      settings: undefined,
    }
  },
  methods: {
    subData(data) {
      data.id = this.id
      editFund(data)
        .then(res => {
          if (res.data.code === 'OK') {
            Toast.success('修改成功')
            this.$parent.getSingleFund(data.fundCode)
            history.go(-1)
          }
        })
        .catch(err => console.log(err))
    },
    setData() {
      const oData = this.originData
      if (oData === 'empty') return
      const fund = oData.find(item => item.id === ~~this.id)
      this.settings = {
        fundCode: fund.code,
        fundName: fund.name,
        count: fund.count,
        cost: fund.cost,
        maxSumPrice: fund.ljMaxPrice,
        about: fund.about,
        btnType: 'info',
        btnText: '修改基金信息',
      }
    }
  },
  activated() {
    this.setData()
  },
  watch: {
    originData() {
      this.setData()
    }
  },
}
</script>

<style scoped>

</style>
