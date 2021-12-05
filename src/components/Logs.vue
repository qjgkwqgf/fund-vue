<template>
  <div>
    <div class="logs">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多日志了"
        @load="onLoad"
      >
        <div
          class="log"
          v-for="log in logsData"
          @click="logClick(log.id,log.status)"
          :class="getClass(log.status)"
        >
          {{ log.name }} ({{ log.code }})<br>
          买入日期：{{ showDate(log.date) }}<br>
          买入金额：{{ log.cost }}<br>
          买入份数：{{ log.get }}<br>
          备注：{{ log.about }}
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Logs",
  props: ['logsData'],
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad() {
      this.$parent.incPage()
    },
    setEnd() {
      this.finished = true
    },
    logClick(id, status) {
      if (status === 'wait') {
        this.$router.push('/money/edit-log/' + id)
      }
    },
  },
  computed: {
    showDate() {
      return function (date) {
        return moment(date).format('YYYY/MM/DD')
      }
    },
    getClass() {
      return function (status) {
        let className = ''
        if (status === 'wait') className = 'red'
        if (status === 'cancel') className = 'cancel'
        return className
      }
    },
  }
}
</script>

<style>
.logs {
  width: 92%;
  padding: 0 4%;
}

.logs .log {
  text-align: left;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  padding: 8px;
  margin-bottom: 10px;
  border: solid 1px lightgray;
  box-shadow: 1px 1px 3px rgba(200, 200, 200, 0.6);
}

.logs .red {
  color: #e74c3c;
}

.logs .cancel{
  color: darkgray;
  text-decoration: line-through;
}
</style>
