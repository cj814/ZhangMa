<template>
  <div>
    <ul class="flex">
      <router-link
        v-for="(item,index) in navData"
        tag="li"
        :key="index"
        :to="{ name: item.linkName }"
        :class="item.isActive ? 'active' : ''"
      >{{item.navName}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      navData: [
        {
          navName: '首页',
          linkName: 'Home',
          isActive: true
        },
        {
          navName: '天气',
          linkName: 'Weather',
          isActive: false
        },
        {
          navName: '简介',
          linkName: '',
          isActive: false
        },
        {
          navName: '我的',
          linkName: '',
          isActive: false
        }
      ]
    }
  },
  methods: {
    getActiveIndex () {
      this.navData.forEach((item, index) => {
        if (this.$route.name === item.linkName) this.activeIndex = index
      })
    }
  },
  mounted () {
    this.navData[this.activeIndex].isActive = false
    this.getActiveIndex()
    this.navData[this.activeIndex].isActive = true
  }
}
</script>

<style scoped>
ul{
    width: 100%;
    position: fixed;
    bottom: 0;
}
ul li{
    height: 44px;
    flex: 1;
    font-size: 14px;
    text-align: center;
    position: relative;
}
ul li::before{
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #dcdcdc;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
}
.active{
    color: red;
}
</style>
