<template>
    <div>
        <header-bar navTitle="我的" @nav-event="goAccount">
            <i class="iconfont icon-shezhi" slot="top-right-slot"></i>
        </header-bar>
        <div class="wid-100 app-content">
            <div class="person-info-box flex flex-trans-center flex-vert-center flex-column">
                <img src="../../assets/images/pic_1.jpg">
                <span class="block">{{userName}}</span>
            </div>
            <div class="user-info-item box-active flex flex-justify">
                <span>我的订单</span>
                <img src="../../assets/images/more.png">
                <div class="trans-line"></div>
            </div>
            <div class="user-info-item box-active flex flex-justify">
                <span>出行人管理</span>
                <img src="../../assets/images/more.png">
                <div class="trans-line"></div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from '@/components/header'
export default {
  components: {
    HeaderBar
  },
  computed: {
    userName () {
      let userInfo = localStorage.getItem('zmUserInfo')
      let userName = ''
      if (userInfo) {
        userName = JSON.parse(userInfo).UserName
      }

      return userName
    }
  },
  methods: {
    goAccount () {
      this.$router.push({name: 'Account'})
    }
  }
}
</script>

<style scoped>
.person-info-box {
  height: 158px;
  background-color: #ff9900;
}
.person-info-box img {
  margin-bottom: 8px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: solid 2px #ddd;
}
.person-info-box span {
  color: #fff;
  font-size: 14px;
}
.user-info-item {
  position: relative;
  padding: 15px;
}
.user-info-item span {
  font-size: 14px;
}
</style>
