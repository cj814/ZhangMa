<template>
    <div class="wid-100">
        <header-nav navTitle="四园一岛" :isCanBack="true"></header-nav>
        <ul class="app-sub-content">
          <li class="flex flex-justify flex-vert-center" v-for="(el,index) in allViews" :key="index">
            <div class="syyd-item-left flex">
              <img :src="imgUrl + '?OP=comm_Show&tableName=ZM.ViewTable&key=ViewTable_ID&keyValue=' + el.ViewId + '&col=viewICO'">
              <div class="name-intro-distance">
                <span class="name">{{el.ViewName}}</span>
                <p>{{el.ViewDesc}}</p>
                <p class="distance">距您<span>58</span>km</p>
              </div>
            </div>
            <div class="syyd-item-right">
              <span class="price">¥{{el.ViewPrice_Mp}}</span>
              <span>起</span>
            </div>
            <div class="trans-line"></div>
          </li>
        </ul>
    </div>
</template>

<script>
import * as syydAPI from '@/api/syyd/index'
import { imgUrl } from '@/utils/fetch'
import HeaderNav from '@/components/header'
export default {
  components: {
    HeaderNav
  },
  data () {
    return {
      allViews: [],
      imgUrl: imgUrl
    }
  },
  methods: {
    getAllViews () {
      syydAPI.getAllViews('View_Control&MethodName=GetAllViews', 'get')
        .then((data) => {
          console.log('data:', data)
          this.allViews = data
        })
    }
  },
  mounted () {
    this.getAllViews()
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
