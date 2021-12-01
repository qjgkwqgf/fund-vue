<template>
  <div>
    <div class="logs">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="log" v-for="i in 10" @click="logClick(i)" :class="i>5 ? '' : 'red'">
          买入日期：2021/08/11<br>
          买入金额：2.3333<br>
          买入份数：1000<br>
          备注：没有什么逻辑可言，干就完了
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logs",
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.finished = true
      }, 1000)
    },
    logClick(i) {
      if (i > 5) return
      this.$router.push('/money/edit-log/'+i)
    },
  },
}
</script>

<style scoped>
.logs {
  width: 92%;
  padding: 0 4%;
}

.log {
  text-align: left;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  padding: 8px;
  margin-bottom: 10px;
  border: solid 1px lightgray;
  box-shadow: 1px 1px 3px rgba(200, 200, 200, 0.6);
}

.red {
  color: #e74c3c;
}
</style>
