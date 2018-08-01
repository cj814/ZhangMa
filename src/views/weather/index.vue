<template>
    <div>
        <header-bar :navTitle="navTitle"></header-bar>
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
      navTitle: '天气'
    }
  }
}
</script>
