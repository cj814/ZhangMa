<template>
  <div>
    <ul class="flex">
      <router-link
        v-for="(item,index) in navData"
        tag="li"
        :key="index"
        :to="{ name: item.linkName }"
        class="flex flex-trans-center flex-vert-center"
        :class="item.isActive ? 'active' : ''"
      >
        <i class="iconfont" :class="item.iconClass"></i>
        {{item.navName}}
      </router-link>
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
          iconClass: 'icon-shouye',
          isActive: true
        },
        {
          navName: '天气',
          linkName: 'Weather',
          iconClass: 'icon-yin',
          isActive: false
        },
        {
          navName: '简介',
          linkName: 'Intro',
          iconClass: 'icon-jieshao',
          isActive: false
        },
        {
          navName: '我的',
          linkName: 'Person',
          iconClass: 'icon-xiazai',
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
@import '../assets/css/iconfont.css';
ul{
    width: 100%;
    position: fixed;
    bottom: 0;
}
ul li{
    height: 44px;
    flex: 1;
    color: #999;
    font-size: 12px;
    text-align: center;
    position: relative;
    -webkit-flex-direction: column;
    flex-direction: column;
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
    color: #1bb6e2;
}
.iconfont{
    font-size: 26px;
}
</style>
