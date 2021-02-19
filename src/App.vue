<template>
  <div id="app">
    <!-- 路由 -->
    <router-view  v-if="routerAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      routerAlive: true
    }
  },
  methods: {
    reload() {
      this.routerAlive = false
      this.$nextTick(function() {
        this.routerAlive = true
      })
    }
  }
}
</script>

<style>

</style>
