<template>
    <div>
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
