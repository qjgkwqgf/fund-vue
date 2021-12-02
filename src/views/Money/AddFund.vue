<template>
  <div>
    <navbar bar-title="添加基金"/>
    <div class="form" style="padding:55px 4% 56px 4%">
      <fund-form @subData="subData" :settings="settings"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import FundForm from "../../components/FundForm";
import {addFund} from '../../http/api'

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
      addFund({
        token: this.$cookies.get('token'),
        fundCode: data.fundCode,
        maxSumPrice: data.maxSumPrice,
        count: data.count,
        cost: data.cost,
        about: data.about,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  },
}
</script>

<style scoped>

</style>
