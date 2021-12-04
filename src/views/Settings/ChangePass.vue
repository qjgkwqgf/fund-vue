<template>
  <div>
    <van-cell-group inset>
      <van-form @submit="onSubmit">
        <van-field
          v-model="oldPass"
          type="password"
          name="原密码"
          label="原密码"
          placeholder="原密码"
          :rules="[{ required: true, message: '请输入原密码' }]"
        />
        <van-field
          v-model="newPass"
          type="password"
          name="新密码"
          label="新密码"
          placeholder="新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
        <van-field
          v-model="newPass2"
          type="password"
          name="确认新密码"
          label="确认新密码"
          placeholder="确认新密码"
          :rules="[{ required: true, message: '请再填写一次新密码，以确认' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">修改密码</van-button>
        </div>
      </van-form>
    </van-cell-group>
  </div>
</template>

<script>
import {Toast} from 'vant'
import {editPass} from '../../http/api'

export default {
  name: "ChangePass",
  data() {
    return {
      oldPass: '',
      newPass: '',
      newPass2: '',
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1)
    },
    onSubmit() {
      if (this.newPass.length < 6 || this.newPass2.length < 6) {
        Toast.fail('密码最短不能小于 6 位')
        return
      }
      if (this.newPass !== this.newPass2) {
        Toast.fail('两次输入的新密码不一致')
        return
      }
      const data = {
        token: this.$cookies.get('token'),
        oldPass: this.oldPass,
        newPass: this.newPass,
      }
      editPass(data)
        .then(res => {
          if (res.data.code === 'OK') {
            Toast.success('修改成功')
            this.$router.push('/settings')
          }
        })
        .catch(err => console.log(err))
    },
  },
  activated() {
    this.$parent.setBodyHeight()
    this.$parent.setBarTitle('修改密码')
  },
}
</script>

<style scoped>
.body {
  padding: 1rem 0;
  background: rgba(200, 200, 200, 0.2);
  text-align: left;
}
</style>
