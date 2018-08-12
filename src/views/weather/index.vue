<template>
    <div class="wid-100 hei-100">
        <header-bar navTitle="天气"></header-bar>
        <div class="wid-100 hei-100 app-content">
          <iframe src="http://weather1.sina.cn/?code=beijing&vt=4" frameborder="0" class="wid-100 hei-100"></iframe>
        </div>
    </div>
</template>

<script>
import HeaderBar from '@/components/header'
export default {
  components: {
    HeaderBar
  },
  data () {
    return {

    }
  }
}
</script>
