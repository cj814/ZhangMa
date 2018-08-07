<template>
    <div class="wid-100 hei-100">
        <header-nav navTitle="登录"></header-nav>
        <div class="app-sub-content hei-100 flex flex-trans-center flex-vert-center flex-column">
          <h1 class="block">张马旅游</h1>
          <input type="text" class="block wid-100" v-model="username" placeholder="用户名">
          <input type="password" class="block wid-100" v-model="password" placeholder="密码">
          <div class="btn btn-info wid-100" @click="login">登录</div>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/header'
export default {
  components: {
    HeaderNav
  },
  data () {
    return {
      username: '13164649520',
      password: '111111'
    }
  },
  methods: {
    login () {

    }
  }
}
</script>

<style scoped>
.app-sub-content{
  padding: 0 15px;
}
h1{
  font-size: 24px;
  margin-bottom: 50px;
}
input{
  outline: none;
  border: none;
  border-bottom: solid 1px #ddd;
  margin-bottom: 10px;
  padding: 8px 0;
}
.btn{
  margin-top: 20px;
}
</style>
