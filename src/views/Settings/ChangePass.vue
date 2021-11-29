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
      console.log('submit')
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
