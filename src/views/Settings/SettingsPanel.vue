<template>
  <div>
    <div class="title">账户管理</div>
    <van-cell-group inset>
      <van-cell title="当前登录账号" value="飞鱼"/>
      <van-cell title="修改登录密码" is-link @click="changePass"/>
      <van-cell title="退出登录" is-link @click="exitLogin"/>
    </van-cell-group>
    <div class="title" style="padding-top: 20px">关于</div>
    <van-cell-group inset>
      <van-cell title="版本号" value="0.1.0"/>
      <van-cell title="作者信箱" value="admin@feiyu.me"/>
      <van-cell title="帮助" label="保持耐心，做时间的朋友。"/>
    </van-cell-group>
  </div>
</template>

<script>
import {Dialog} from "vant";

export default {
  name: "SettingsPanel",
  data() {
    return {
      bodyHeight: 'auto',
    }
  },
  methods: {
    changePass() {
      this.$router.push('/settings/change-pass')
    },
    exitLogin() {
      Dialog.confirm({
        title: '退出登录',
        message: '确定要退出账号【飞鱼】吗？',
      })
        .then(() => {
          console.log('确认退出')
        })
        .catch(() => {
          // cancel
        })
    },
  },
  activated() {
    this.$parent.setBodyHeight()
    this.$parent.setBarTitle('设置')
  },
  mounted() {
    this.$parent.setBodyHeight()
    this.$parent.setBarTitle('设置')
  },
}
</script>

<style scoped>
.title {
  width: 88%;
  padding: 0 6% 0.5rem 6%;
}
</style>
