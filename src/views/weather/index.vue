<template>
    <div class="wid-100 hei-100">
        <header-bar navTitle="天气"></header-bar>
        <div class="wid-100 hei-100 app-content">
          <iframe src="http://weather1.sina.cn/?code=beijing&vt=4" frameborder="0" class="wid-100 hei-100" id="weatherFrame"></iframe>
        </div>
        <div class="loading-box" v-if="isLoading">
          <spinner :size="50" :depth="4"></spinner>
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
    let weatherFrame = document.getElementById('weatherFrame')
    weatherFrame.onload = function () {
      _this.isLoading = false
    }
  }
}
</script>
