<template>
  <div>
    <navbar bar-title="修改基金"/>
    <div class="form" style="padding:55px 4% 56px 4%">
      <fund-form @subData="subData" :settings="settings"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import FundForm from "../../components/FundForm";

export default {
  name: "EditFund",
  components: {FundForm, Navbar},
  data() {
    return {
      id: this.$route.params.id,
      settings: {
        fundCode: '',
        count: 0,
        cost: 0,
        maxSumPrice: 1,
        about: 'balabalabala',
        btnType: 'info',
        btnText: '修改基金信息',
      }
    }
  },
  methods: {
    subData(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
