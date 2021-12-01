<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="fundCode"
      name="基金代码"
      label="基金代码"
      placeholder="基金代码"
      :rules="[{ required: true, message: '请填写基金代码' }]"
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
</template>

<script>
export default {
  name: "FundForm",
  props: ['settings'],
  data() {
    return {
      fundCode: this.settings.fundCode,
      count: this.settings.count,
      cost: this.settings.cost,
      maxSumPrice: this.settings.maxSumPrice,
      about: this.settings.about,
    }
  },
  methods: {
    onSubmit() {
      this.$emit('subData', {
        fundCode: this.fundCode,
        count: this.count,
        cost: this.cost,
        maxSumPrice: this.maxSumPrice,
        about: this.about,
      })
    }
  },
}
</script>

<style scoped>

</style>
