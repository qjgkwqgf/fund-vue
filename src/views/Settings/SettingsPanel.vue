<template>
  <div>
    <div class="title">账户管理</div>
    <van-cell-group inset>
      <van-cell title="登录账号" is-link @click="toLogin" v-if="!user"/>
      <van-cell title="当前登录账号" :value="user" v-else/>
      <van-cell title="关注基金数" :value="fundCount+' / 100'" v-if="user"/>
      <van-cell title="修改登录密码" is-link @click="changePass" v-if="user"/>
      <van-cell title="退出登录" is-link @click="exitLogin" v-if="user"/>
    </van-cell-group>
    <div class="title" style="padding-top: 20px">关于</div>
    <van-cell-group inset>
      <van-cell title="版本号" value="0.1.2"/>
      <van-cell title="作者信箱" value="admin@feiyu.me"/>
      <van-cell title="帮助" label="保持耐心，做时间的朋友。"/>
    </van-cell-group>
  </div>
</template>

<script>
import {Dialog} from "vant";

export default {
  name: "SettingsPanel",
  props: ['fundCount'],
  data() {
    return {
      bodyHeight: 'auto',
      user: this.$cookies.get('user'),
    }
  },
  methods: {
    changePass() {
      this.$router.push('/settings/change-pass')
    },
    exitLogin() {
      Dialog.confirm({
        title: '退出登录',
        message: '确定要退出账号吗？',
      })
        .then(() => {
          this.$cookies.set('token', '', '1s')
          this.$cookies.set('user', '', '1s')
          this.$router.push('/settings/login')
        })
        .catch(() => {
          // cancel
        })
    },
    toLogin() {
      this.$router.push('/settings/login')
    },
  },
  activated() {
    this.$parent.setBodyHeight()
    this.$parent.setBarTitle('设置')
    this.user = this.$cookies.get('user')
  },
}
</script>

<style scoped>
.title {
  width: 88%;
  padding: 0 6% 0.5rem 6%;
}
</style>
