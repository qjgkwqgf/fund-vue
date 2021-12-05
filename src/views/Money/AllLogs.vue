<template>
  <div>
    <navbar bar-title="所有日志"/>
    <logs style="margin: 55px 0 56px 0;" :logs-data="logsData" ref="lgs"/>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Logs from "../../components/Logs";
import {getAllLogs} from '../../http/api'

export default {
  name: "AllLogs",
  components: {Logs, Navbar},
  data() {
    return {
      p: 1,
      newCount: 0,
      logsData: [],
      scrollTop: 0,
    }
  },
  methods: {
    getAllLogs() {
      const data = {
        token: this.$cookies.get('token'),
        p: this.p,
      }
      getAllLogs(data)
        .then(res => {
          if (res.data.code === 'OK') {
            this.logsData = res.data.logs
            this.newCount = res.data.logs.length
          }
          window.scrollTo(0, this.scrollTop)
        })
        .catch(err => console.log(err))
    },
    incPage() {
      if (this.newCount >= 20) {
        this.p++
        this.getAllLogs()
      } else {
        this.$refs.lgs.setEnd()
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    next()
  },
  activated() {
    this.getAllLogs()
  },
}
</script>

<style scoped>

</style>
