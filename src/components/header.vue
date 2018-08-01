<template>
    <div class="nav wid-100">
        <div class="sub-nav wid-100 hei-100 flex flex-vert-center">
            <i class="iconfont icon-fanhui"></i>
            <h1>{{navTitle}}</h1>
            <i class="iconfont icon-shezhi"></i>
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
    height: 36px;
    padding: 7px 8px;
    font-size: 22px;
    color: #fff;
}
.icon-fanhui{
    width: 36px;
}
</style>
