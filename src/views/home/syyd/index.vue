<template>
    <div class="wid-100">
        <header-nav navTitle="四园一岛" :isCanBack="true"></header-nav>
        <ul class="app-sub-content">
          <li class="flex flex-justify flex-vert-center">
            <div class="syyd-item-left flex">
              <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
              <div class="name-intro-distance">
                <span class="name">蓝莓园</span>
                <p>玛莎拉蒂骂什么大</p>
                <p class="distance">距您<span>58</span>km</p>
              </div>
            </div>
            <div class="syyd-item-right">
              <span class="price">¥5</span>
              <span>起</span>
            </div>
            <div class="trans-line"></div>
          </li>
          <li class="flex flex-justify flex-vert-center">
            <div class="syyd-item-left flex">
              <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
              <div class="name-intro-distance">
                <span class="name">蓝莓园</span>
                <p>玛莎拉蒂骂什么大</p>
                <p class="distance">距您<span>58</span>km</p>
              </div>
            </div>
            <div class="syyd-item-right">
              <span class="price">¥5</span>
              <span>起</span>
            </div>
            <div class="trans-line"></div>
          </li>
          <li class="flex flex-justify flex-vert-center">
            <div class="syyd-item-left flex">
              <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
              <div class="name-intro-distance">
                <span class="name">蓝莓园</span>
                <p>玛莎拉蒂骂什么大我的我么大我的我么大我的我么大我的我</p>
                <p class="distance">距您<span>58</span>km</p>
              </div>
            </div>
            <div class="syyd-item-right">
              <span class="price">¥5</span>
              <span>起</span>
            </div>
            <div class="trans-line"></div>
          </li>
          <li class="flex flex-justify flex-vert-center">
            <div class="syyd-item-left flex">
              <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
              <div class="name-intro-distance">
                <span class="name">蓝莓园</span>
                <p>玛莎拉蒂骂什么大</p>
                <p class="distance">距您<span>58</span>km</p>
              </div>
            </div>
            <div class="syyd-item-right">
              <span class="price">¥5</span>
              <span>起</span>
            </div>
            <div class="trans-line"></div>
          </li>
        </ul>
    </div>
</template>

<script>
import HeaderNav from '@/components/header'
export default {
  components: {
    HeaderNav
  },
  methods: {

  }
}
</script>

<style scoped>
li{
  padding: 10px;
  font-size: 14px;
  color: #999;
  position: relative;
}
.syyd-item-left img{
  width: 82px;
  height: 82px;
  margin-right: 10px;
}
.name-intro-distance{
  position: relative;
  flex: 1;
}
.name-intro-distance span{
  color: #333;
  font-weight: bold;
}
.name-intro-distance .name{
  margin-bottom: 5px;
  display: block;
}
.name-intro-distance p{
  line-height: 1.2;
}
.distance{
  position: absolute;
  bottom: 0;
}
.syyd-item-right{
  margin-left: 5px;
}
.price,.distance span{
  font-weight: bold;
  color: #ff9900;
}
</style>
