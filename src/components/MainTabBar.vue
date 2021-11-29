<template>
  <van-tabbar v-model="tabActive" class="own-tab-bar" active-color="#e74c3c">
    <van-tabbar-item
        v-for="item in tabItemLists"
        :icon="item.icon"
        @click="clickTabItem(item.path)"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "MainTabBar",
  data() {
    return {
      tabActive: 0,
      tabItemLists: [
        {
          name: '行情',
          path: '/home',
          icon: 'chart-trending-o',
        },
        {
          name: '涨跌',
          path: '/updown',
          icon: 'sort',
        },
        {
          name: '资产',
          path: '/money',
          icon: 'balance-o',
        },
        {
          name: '设置',
          path: '/settings',
          icon: 'setting-o',
        },
      ]
    };
  },
  methods: {
    clickTabItem(path) {
      const oldPath = document.location.pathname
      if (path !== oldPath) this.$router.push(path)
    },
    setActive() {
      let path = document.location.pathname
      if (path === '/') path = '/home'
      this.tabActive = this.tabItemLists.findIndex(
          item => path === item.path || path.indexOf(item.path + '/') !== -1
      )
    }
  },
  mounted() {
    this.setActive()
  },
  watch: {
    $router() {
      this.setActive()
    }
  }
}
</script>

<style scoped>
.own-tab-bar {
  box-shadow: 0 -1px 5px rgba(233, 233, 233, 0.8);
  padding: 3px 0;
}
</style>
