<template>
    <div class="wid-100">
        <header-nav navTitle="四园一岛" :isCanBack="true"></header-nav>
        <ul class="app-sub-content">
          <li class="flex flex-justify flex-vert-center box-active" v-for="(el,index) in allViews" :key="index">
            <div class="syyd-item-left flex">
              <img :src="imgUrl + '?OP=comm_Show&tableName=ZM.ViewTable&key=ViewTable_ID&keyValue=' + el.ViewId + '&col=viewICO'">
              <div class="name-intro-distance">
                <span class="name">{{el.ViewName}}</span>
                <p>{{el.ViewDesc | cutDesc(24)}}</p>
                <p class="distance">距您<span>58</span>km</p>
              </div>
            </div>
            <div class="syyd-item-right flex">
              <span class="price">¥{{el.ViewPrice_Mp}}</span>
              <span>起</span>
            </div>
            <div class="trans-line"></div>
          </li>
        </ul>
        <div id="allmap" class="allmap" style="height: 100px;display:none"></div>
        <div class="loading-box" v-if="isLoading">
            <spinner :size="50" :depth="4"></spinner>
        </div>
    </div>
</template>

<script>
import * as syydAPI from '@/api/syyd/index'
import Spinner from 'vue-spinner-component/src/Spinner'
import { imgUrl } from '@/utils/fetch'
import HeaderNav from '@/components/header'
import BMap from 'BMap'
export default {
  components: {
    HeaderNav,
    Spinner
  },
  data () {
    return {
      allViews: [],
      imgUrl: imgUrl,
      isLoading: true,
      center: {lng: 116.40387397, lat: 39.91488908}
    }
  },
  methods: {
    getAllViews () {
      syydAPI.getAllViews('View_Control&MethodName=GetAllViews', 'get')
        .then((data) => {
          console.log('data:', data)
          this.allViews = data
          this.$nextTick(() => {
            this.$data.isLoading = false
          })
        })
    },
    ready () {
      let map = new BMap.Map('allmap')
      let point = new BMap.Point(this.center.lng, this.center.lat)
      map.centerAndZoom(point, 10)
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition((r) => {
        if (r.point) {
          this.center.lng = r.longitude
          this.center.lat = r.latitude
          let markers = new BMap.Marker(r.point)
          map.addOverlay(markers)
          map.panTo(r.point)
          map.centerAndZoom(r.point, 16)
        }
      }, { enableHighAccuracy: true })
    }
  },
  mounted () {
    this.getAllViews()
    this.ready()
  }
}
</script>

<style lang="scss" scoped>
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
  span{
    font-size: 12px;
  }
}
.price,.distance span{
  font-weight: bold;
  font-size: 14px!important;
  color: #ff9900;
  margin-right: 5px;
}
</style>
