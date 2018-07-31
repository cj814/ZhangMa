<template>
    <div>
        <ul class="flex">
            <li>首页</li>
            <li>天气</li>
            <li>简介</li>
            <li>我的</li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
ul{
    width: 100%;
    position: fixed;
    bottom: 0;
}
ul li{
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-size: 14px;
    text-align: center;
}
</style>
