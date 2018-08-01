<template>
  <div id="app">
    <router-view :key="key"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date().getTime() : this.$route.name + new Date().getTime()
    }
  }
}
</script>

<style>
@import 'assets/css/reset.css';
@import 'assets/css/tool.css';
</style>
