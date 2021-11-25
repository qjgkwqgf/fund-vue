<template>
  <div class="page">
    <div class="title">
      <div class="left">
        <img src="../../assets/logo.png">
      </div>
      <div class="right">登录监控台</div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <van-divider style="margin:2rem 0">本应用由飞鱼提供技术支持</van-divider>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>

<style scoped>
.page .title {
  margin: 1.8rem 0;
  float: left;
  width: 100%;
}

.page .title .left {
  float: left;
  width: 40%;
  text-align: right;
}

.page .right {
  float: left;
  width: 40%;
  text-align: left;
  margin-left: 10px;
  font-size: 1.5rem;
  color: #e74c3c;
  font-weight: bold;
  padding-top: 40px;
}

.page .title .left img {
  width: 50%;
}
.page .form {
  padding: 0 2rem;
}
</style>
