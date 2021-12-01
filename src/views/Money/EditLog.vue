<template>
  <div>
    <navbar bar-title="修改日志"/>
    <div class="form" style="padding:55px 4% 56px 4%">
      <van-form @submit="onSubmit">
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

export default {
  name: "EditLog",
  components: {Navbar},
  data() {
    return {
      id: this.$route.params.id,
      fundCode: '12345',
      fundName: '牛牛基金',
      cost: 0,
      about: '',
      status: 'wait',
    }
  },
  methods: {
    onSubmit() {
      console.log('修改日志')
    }
  }
}
</script>

<style scoped>

</style>
