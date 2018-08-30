<template>
    <div class="nav wid-100">
        <div class="sub-nav wid-100 hei-100 flex flex-vert-center">
            <i class="iconfont icon-fanhui slot-header left" v-show="isCanBack" @click="routerBack"></i>
            <h1>{{navTitle}}</h1>
            <div class="slot-header right hei-100 flex flex-vert-center" @click="navEvent">
                <slot name="top-right-slot"></slot>
            </div>
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
    },
    isCanBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    routerBack () {
      this.$router.go(-1)
    },
    navEvent () {
      this.$emit('nav-event')
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
    z-index: 10;
}
.sub-nav{
    position: relative;
}
h1{
    text-align: center;
    flex: 1;
    color: #ffffff;
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
.slot-header{
    position: absolute;
}
.slot-header.left{
    left: 0;
}
.slot-header.right{
    right: 0;
    color: #fff;
}
.slot-header.right>span{
    font-size: 14px;
    padding: 0 10px;
}
</style>
