<template>
  <div>
    <h4>今日涨跌</h4>
    <div class="process-line">
      <div class="left">50%</div>
      <div class="right">50%</div>
    </div>
    <div class="up-down-text">
      <div class="left">上涨 5</div>
      <div class="right">下跌 5</div>
    </div>
    <home-list/>
  </div>
</template>

<script>
import HomeList from "../../components/HomeList";

export default {
  name: "UpDown",
  components: {HomeList},
  props: ['originData'],
  data() {
    return {
      scrollTop: 0,
    }
  },
  methods: {},
  activated() {
    window.scrollTo(0, this.scrollTop)
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
}
</script>

<style scoped>
.process-line {
  float: left;
  width: 80%;
  margin: 0 10%;
  border-radius: 1rem;
  overflow: hidden;
}

.process-line div {
  float: left;
  width: 50%;
  font-size: 0.8rem;
  line-height: 1.6rem;
  color: white;
}

.process-line .left {
  background: #e74c3c;
}

.process-line .right {
  background: #27ae60;
}

.up-down-text {
  width: 80%;
  margin: 8px 10%;
  float: left;
  font-weight: bold;
}

.up-down-text .left {
  width: 45%;
  padding-right: 5%;
  text-align: right;
  float: left;
  color: #e74c3c;
}

.up-down-text .right {
  width: 45%;
  padding-left: 5%;
  text-align: left;
  float: left;
  color: #27ae60;
}

.lists {
  float: left;
  margin-top: 10px;
  box-shadow: 0 -1px 4px rgba(233, 233, 233, 1);
}
</style>
