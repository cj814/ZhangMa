<template>
    <div class="wid-100 hei-100">
        <header-nav navTitle="登录"></header-nav>
        <div class="app-sub-content hei-100 flex flex-trans-center flex-vert-center flex-column">
          <h1 class="block">张马旅游</h1>
          <input type="text" class="block wid-100" placeholder="用户名">
          <input type="password" class="block wid-100" placeholder="密码">
          <div class="btn btn-info">登录</div>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/header'
export default {
  components: {
    HeaderNav
  }
}
</script>

<style scoped>
.app-sub-content{
  padding: 0 15px;
}
h1{
  font-size: 24px;
}
</style>
