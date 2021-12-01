<template>
  <div>
    <navbar bar-title="所有日志"/>
    <logs style="margin: 55px 0 56px 0;"/>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
import Logs from "../../components/Logs";
export default {
  name: "AllLogs",
  components: {Logs, Navbar}
}
</script>

<style scoped>

</style>
