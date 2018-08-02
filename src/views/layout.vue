<template>
    <div class="wid-100 hei-100">
        <router-view></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import FooterNav from '@/components/footer'
export default {
  components: {
    FooterNav
  }
}
</script>
