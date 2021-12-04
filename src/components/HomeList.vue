<template>
  <div class="lists" style="padding-bottom: 56px">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="line-height:10rem" v-if="mbData.length===0">数据加载中...</div>
      <div
        v-if="mbData!=='empty'"
        v-for="fund in mbData"
        @click="listClick(fund.id)"
        class="list"
        :class="fund.point>0 ? 'red' : 'green'"
        :style="showBg ? 'background: linear-gradient(to right, '+showBg+' '+Math.floor(Math.abs(point)*10)+'%, white 0%)' : ''"
      >
        <div class="left">
          <div class="large">{{ fund.leftBig }}</div>
          <div class="small">{{ fund.leftSmall }}</div>
        </div>
        <div class="right">
          <div class="large">{{ fund.rightBig }}</div>
          <div class="small">{{ fund.rightSmall }}</div>
        </div>
      </div>
    </van-pull-refresh>
    <div style="line-height:20rem" v-if="mbData==='empty'">空空如也~</div>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  props: ['showBg', 'mbData'],
  data() {
    return {
      isLoading: false,
    }
  },
  methods: {
    listClick(code) {
      this.$router.push('/money/fund/'+code)
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        console.log('刷新成功')
      }, 1000)
    },
  }
}
</script>

<style scoped>
.list {
  float: left;
  border-bottom: solid 1px #eee;
  width: 100%;
}

.list .left {
  float: left;
  width: 52%;
  padding: 8px 4%;
  text-align: left;
}

.list .right {
  float: left;
  width: 32%;
  padding: 8px 4%;
  text-align: right;
}

.list .large {
  font-weight: bold;
  font-size: 1.1rem;
  width: 100%;
}

.list .small {
  font-size: .88rem;
  width: 100%;
  color: darkgray;
}

.red .large {
  color: #e74c3c;
}

.green .large {
  color: #27ae60;
}
</style>
