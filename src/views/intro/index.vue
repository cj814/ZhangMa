<template>
    <div class="wid-100 hei-100">
        <header-bar navTitle="张马简介"></header-bar>
        <div class="wid-100 app-content">
          <div class="intro-box">
            <p>张马村坐落于繁华的国际大都市——上海的的西南方向，在有“上海后花园”及“鱼米之乡”美称的青浦区区域内，是“江南古镇”朱家角的南大门。东南靠松江区的永丰村和泖口村，西邻练塘镇，上海太阳岛国际俱乐部位于村区域内，北与李庄村接壤，距朱家角镇6公里，A9高速公路、318国道5公里左右，水陆交通便捷，沈太路贯穿全村南北，拦路江和太浦河汇集于村西侧，沿拦路江涵养林500亩，绿化成荫，风景秀丽。50年代中期，农村积极响应国家指示，建立了农业生产合作社。直至0十一届三种全会后实行多种形式的农业生产责任制发展到家庭承包责任制，主要形式是“分田到户”。全会后实行多种形式的农业生产责任制发展到家庭承包责任制...</p>
            <video src="http://www.qpzhangma.com/千年张马.mp4" controls muted autoplay class="wid-100" id="introVideo"></video>
          </div>
        </div>
        <div class="loading-box" v-if="isLoading">
          <spinner :color="spinnerColor" :size="50" :depth="4"></spinner>
        </div>
    </div>
</template>

<script>
import Spinner from 'vue-spinner-component/src/Spinner'
import HeaderBar from '@/components/header'
export default {
  components: {
    HeaderBar,
    Spinner
  },
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    let _this = this
    let introVideo = document.getElementById('introVideo')
    introVideo.oncanplaythrough = function () {
      _this.isLoading = false
    }
  }
}
</script>

<style scoped>
.intro-box{
  padding: 15px;
}
.intro-box p{
  font-size: 14px;
  line-height: 1.5;
}
</style>
