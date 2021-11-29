<template>
  <div class="lists" style="padding-bottom: 56px">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div
        v-for="i in 20"
        @click="listClick"
        class="list"
        :class="point>0 ? 'red' : 'green'"
        :style="showBg ? 'background: linear-gradient(to right, '+showBg+' '+Math.floor(Math.abs(point)*10)+'%, white 0%)' : ''"
      >
        <div class="left">
          <div class="large">左边的标题文本</div>
          <div class="small">左边的副文本</div>
        </div>
        <div class="right">
          <div class="large">
            <span v-show="point>0">+</span>
            {{ point }}%
          </div>
          <div class="small">-10.23%</div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  props: ['showBg'],
  data() {
    return {
      point: -5.33,
      isLoading: false,
    }
  },
  methods: {
    listClick() {
      console.log('点点')
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
  font-size: .8rem;
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
