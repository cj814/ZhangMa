<template>
  <div id="app" class="wid-100 hei-100">
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

html,body{
  width: 100%;
  height: 100%;
}
#app{
  position: absolute;
}
.app-content{
  padding-top: 36px;
  padding-bottom: 44px;
}
.app-sub-content{
  padding-top: 36px;
}
.loading-box{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
