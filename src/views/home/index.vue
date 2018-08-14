<template>
    <div class="wid-100 app-content">
        <div class="index-header">
            <div class="name-weather-arrow flex flex-vert-center flex-justify">
                <router-link class="name-weather" :to="{name: 'Weather'}" tag="div">
                    <span class="block">张马村</span>
                    <span class="block">{{curWenDu}}</span>
                </router-link>
                <router-link class="arrow" :to="{name: 'Intro'}" tag="div">
                    <img src="../../assets/images/forward.png">
                </router-link>
            </div>
            <router-link class="index-img-box flex flex-justify" :to="{name: 'phoList'}" tag="div">
                <img :src="imgUrl + '?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=' + el + '&col=Image'" :key="index" v-for="(el,index) in imgIds">
            </router-link>
        </div>
        <div class="index-middle-box flex flex-justify">
            <router-link class="middle-box-item box-active flex flex-trans-center flex-vert-center flex-column" :to="{name: 'Syyd'}" tag="div">
                <img src="../../assets/images/syyd.png">
                <span class="block">四园一岛</span>
            </router-link>
            <router-link class="middle-box-item box-active flex flex-trans-center flex-vert-center flex-column" :to="{name: 'Nfcp'}" tag="div">
                <img src="../../assets/images/nfcp.png">
                <span class="block">农副产品</span>
            </router-link>
            <router-link class="middle-box-item box-active flex flex-trans-center flex-vert-center flex-column" :to="{name: 'Ybyj'}" tag="div">
                <img src="../../assets/images/ybyj.png">
                <span class="block">一步一景</span>
            </router-link>
            <router-link class="middle-box-item box-active flex flex-trans-center flex-vert-center flex-column" :to="{name: 'Tsms'}" tag="div">
                <img src="../../assets/images/tsms.png">
                <span class="block">特色民宿</span>
            </router-link>
        </div>
        <div class="index-space"></div>
        <div class="dynamic-news-list">
            <div class="dynamic-news-header">
                <blockquote>张马动态</blockquote>
            </div>
            <ul class="dynamic-news-content">
                <li class="dynamic-news-item box-active flex" v-for="(el, index) in newsList" :key="index">
                    <img :src="el.ImgSrc">
                    <div class="dynamic-news-info flex flex-column flex-column-justify">
                        <span class="dynamic-news-title block">{{el.Title}}</span>
                        <span class="dynamic-news-time block">{{el.Time}}</span>
                    </div>
                    <div class="trans-line-top"></div>
                </li>
            </ul>
        </div>
        <div class="loading-box" v-if="isLoading">
            <spinner :color="spinnerColor" :size="50" :depth="4"></spinner>
        </div>
    </div>
</template>

<script>
import * as homeAPI from '@/api/home/index'
import axios from 'axios'
import Spinner from 'vue-spinner-component/src/Spinner'
import { strToImg, parseTime } from '@/utils/tools'
import { imgUrl } from '@/utils/fetch'
export default {
  components: {
    Spinner
  },
  data () {
    return {
      imgUrl: imgUrl,
      isLoading: true,
      curWenDu: '',
      imgIds: [],
      newsList: []
    }
  },
  mounted () {
    let _this = this
    axios.all([this.getIndexViewsImage(), this.getIndexNewsList(), this.getCurWenDu()])
      .then(() => {
        // console.log('图片，新闻加载成功')
        _this.$nextTick(() => {
          setTimeout(function () {
            _this.$data.isLoading = false
          }, 2000)
        })
      })
  },
  methods: {
    // 获取风景图片
    getIndexViewsImage () {
      homeAPI.getIndexViewsImage('View_Control&MethodName=GetAllViewImage', 'get')
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            if (i < 3) {
              this.$data.imgIds.push(data[i])
            }
          }
        })
    },
    // 获取新闻列表
    getIndexNewsList () {
      homeAPI.getIndexNewsList('User_Control&MethodName=getIndexNfcp', 'get')
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            data[i].ImgSrc = strToImg(data[i].Content)
            data[i].Time = parseTime(data[i].Time.replace('T', ' '), '{m}-{d} {h}:{i}')
          }

          this.$data.newsList = data
        })
    },
    // 获取当前温度
    getCurWenDu () {
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=青浦')
        .then((res) => {
          this.$data.curWenDu = res.data.data.forecast[0].high.replace('高温 ', '')
        })
    }
  }
}
</script>

<style scoped>
.app-content{
    padding-top: 0;
}
.index-header{
    width: 100%;
    height: 166px;
    margin: 0;
    padding: 20px;
    background-image: url(../../assets/images/index-header-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.name-weather-arrow span{
    color: #fff;
}
.arrow img{
    width: 15px;
    height: 25px;
}
.index-img-box img{
    width: 84px;
    height: 60px;
    margin-top: 30px;
}
.index-space{
    content: '';
    width: 100%;
    height: 10px;
    background-color: #ddd;
}
.middle-box-item{
    flex: 1;
    padding-top: 16px;
    padding-bottom: 16px;
}
.middle-box-item img{
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
}
.middle-box-item span{
    font-size: 12px;
}
.dynamic-news-list{
    padding: 0 15px;
}
blockquote{
    margin: 10px 0;
    padding-left: 5px;
    border-left: solid 5px #ff9900;
    font-size: 14px;
    font-weight: bold;
    color: #ff9900;
}
.dynamic-news-item{
    padding: 10px 0;
    position: relative;
}
.dynamic-news-item img{
    width: 84px;
    height: 60px;
    margin-right: 10px;
}
.dynamic-news-info span{
    font-size: 14px;
}
</style>
