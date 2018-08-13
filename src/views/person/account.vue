<template>
    <div>
        <nav-header navTitle="我的账户" :isCanBack="true"></nav-header>
        <div class="wid-100 app-content">
          <div class="account-item box-active flex flex-justify flex-vert-center">
            <div class="user-img-info flex flex-vert-center">
              <img src="../../assets/images/pic_1.jpg" class="user-img">
              <div class="user-info">
                <span class="block">{{userName}}</span>
                <span class="block">{{sex}}</span>
              </div>
            </div>
            <img src="../../assets/images/more.png">
            <div class="trans-line"></div>
          </div>
          <div class="account-item box-active flex flex-justify flex-vert-center">
            <span class="block">手机号码</span>
            <span class="block">{{phone}}</span>
            <div class="trans-line"></div>
          </div>
          <div class="account-item box-active flex flex-justify flex-vert-center">
            <span class="block">修改登录密码</span>
            <img src="../../assets/images/more.png">
            <div class="trans-line"></div>
          </div>
          <div class="account-item flex flex-justify flex-vert-center">
            <div class="btn btn-warning wid-100" @click="logOut">退出登录</div>
          </div>
        </div>
    </div>
</template>
<script>
import navHeader from '@/components/header'
export default {
  components: {
    navHeader
  },
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    let userInfo = localStorage.getItem('zmUserInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      this.$data.userInfo = userInfo
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push({name: 'Home'})
      })
    }
  },
  computed: {
    userName () {
      let userName = ''
      if (this.$data.userInfo.UserName) {
        userName = this.$data.userInfo.UserName
      }

      return userName
    },
    sex () {
      let sex = ''
      if (this.$data.userInfo.Sex) {
        sex = '男'
      } else {
        sex = '女'
      }

      return sex
    },
    phone () {
      let tel = ''
      if (this.$data.userInfo.Tel) {
        tel = this.$data.userInfo.Tel
      }

      return tel
    }
  }
}
</script>

<style lang="scss" scoped>
.account-item{
  padding: 12px 15px;
  position: relative;
  font-size: 15px;
  &:first-child{
    font-size: 14px;
    span:first-child{
      margin-bottom: 5px;
    }
  }
  .user-img{
    width: 50px;
    height: 50px;
    margin-right: 15px;
    -webkit-border-radius: 50%;
            border-radius: 50%;
  }
}
</style>
