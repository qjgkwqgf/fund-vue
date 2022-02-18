<template>
  <div>
    <van-form v-if="settings" @submit="onSubmit">
      <van-field
        v-model="fundCode"
        name="基金代码"
        label="基金代码"
        placeholder="基金代码"
        :disabled="settings.btnText==='修改基金信息'"
      />
      <van-field
        v-model="fundName"
        name="基金名称"
        label="基金名称"
        placeholder="基金名称"
        :disabled="settings.btnText==='修改基金信息'"
        v-if="settings.btnText==='修改基金信息'"
      />
      <van-field
        v-model="count"
        name="持仓份额"
        type="number"
        label="持仓份额"
        placeholder="持仓份额"
        :rules="[{ required: true, message: '请填写持仓份额' }]"
      />
      <van-field
        v-model="cost"
        name="持仓总成本"
        type="number"
        label="持仓总成本"
        placeholder="持仓总成本"
        :rules="[{ required: true, message: '请填写持仓总成本' }]"
      />
      <van-field
        v-model="maxSumPrice"
        name="最大累计净值"
        type="number"
        label="最大累计净值"
        placeholder="最大累计净值"
        :rules="[{ required: true, message: '请填写最大累计净值' }]"
      />
      <van-field
        v-model="about"
        rows="3"
        autosize
        label="备注信息"
        type="textarea"
        placeholder="请输入备注信息"
      />
      <div style="margin: 16px;">
        <van-button round block :type="settings.btnType" native-type="submit">{{ settings.btnText }}</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "FundForm",
  props: ['settings'],
  data() {
    return {
      fundCode: this.settings.fundCode,
      fundName: this.settings.fundName,
      count: this.settings.count,
      cost: this.settings.cost,
      maxSumPrice: this.settings.maxSumPrice,
      about: this.settings.about,
    }
  },
  methods: {
    onSubmit() {
      this.$emit('subData', {
        token: this.$cookies.get('token'),
        fundCode: this.fundCode,
        count: this.count,
        cost: this.cost,
        maxSumPrice: this.maxSumPrice,
        about: this.about,
      })
    },
    clearForm() {
      this.fundCode = ''
      this.count = 0
      this.cost = 0
      this.maxSumPrice = 1
      this.about = '暂无'
    },
  },
  watch: {
    settings() {
      this.fundCode = this.settings.fundCode
      this.fundName = this.settings.fundName
      this.count = this.settings.count
      this.cost = this.settings.cost
      this.maxSumPrice = this.settings.maxSumPrice
      this.about = this.settings.about
    }
  },
}
</script>

<style scoped>

</style>
