<template>
    <div class="nav wid-100">
        <div class="sub-nav wid-100 hei-100 flex flex-vert-center">
            <!-- <i class="iconfont icon-fanhui"></i> -->
            <slot name="top-left-slot">
                <i class="iconfont icon-default1"></i>
            </slot>
            <h1>{{navTitle}}</h1>
            <slot name="top-right-slot">
                <i class="iconfont icon-default2"></i>
            </slot>
            <div class="trans-line"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    navTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@import '../assets/css/iconfont.css';
.nav{
    height: 36px;
    position: fixed;
    background-color: #1bb6e2;
}
.sub-nav{
    position: relative;
}
h1{
    text-align: center;
    flex: 1;
    color: #fff;
}
.iconfont{
    min-width: 36px;
    height: 36px;
    padding: 8px;
    font-size: 20px;
    color: #fff;
}
.icon-fanhui{
    width: 36px;
}
</style>
