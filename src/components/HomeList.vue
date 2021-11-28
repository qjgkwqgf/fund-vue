<template>
  <div
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
</template>

<script>
export default {
  name: "HomeList",
  props: ['showBg'],
  data() {
    return {
      point: -5.33,
    }
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
