<template>
    <div>
        <header-nav navTitle="新闻详情" :isCanBack="true"></header-nav>
        <div class="app-sub-content wid-100" v-show="!isLoading">
            <div class="news-title">{{newsTitle}}</div>
            <div class="news-author-time">
                <span>作者：{{newsAuthor}}</span>
                <span>时间：{{newsTime}}</span>
            </div>
            <div class="news-content wid-100" v-html="newsContent" id="newsContent"></div>
        </div>
        <div class="loading-box" v-if="isLoading">
            <spinner :color="spinnerColor" :size="50" :depth="4"></spinner>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/header'
import Spinner from 'vue-spinner-component/src/Spinner'
import { getIndexNewsDetail } from '@/api/home/index'
import { parseTime } from '@/utils/tools'
export default {
  components: {
    HeaderNav,
    Spinner
  },
  data () {
    return {
      newsId: '',
      newsTitle: '',
      newsAuthor: '',
      newsTime: '',
      newsContent: '',
      isLoading: true
    }
  },
  created () {
    this.$data.newsId = this.$route.query.newsId
  },
  mounted () {
    let _this = this
    let newsId = _this.$data.newsId

    getIndexNewsDetail(`User_Control&MethodName=getNfcpDetail&Parameters=${newsId}`, 'get')
      .then((data) => {
        _this.$data.newsTitle = data.Title
        _this.$data.newsAuthor = data.AuthorName
        _this.$data.newsTime = parseTime(data.Time.replace('T', ' '), '{y}-{m}-{d}')
        _this.$data.newsContent = data.Content
        _this.$nextTick(() => {
          let newsContent = document.querySelector('#newsContent')
          let img = newsContent.querySelector('img')
          if (img != null) {
            let src = img.getAttribute('src')
            if (!src.startsWith('http')) {
              src = process.env.BASE_API + '/dataservice/ueditor/' + src
              img.setAttribute('src', src)
              img.onload = function () {
                img.width = newsContent.offsetWidth // img不能通过img.style.width来改变宽度
                img.style.maxHeight = '250px'
              }
            }
          }

          _this.isLoading = false
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.app-sub-content {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 40px;
    .news-title,.news-author-time {
        text-align: center;
    }
    .news-title {
        padding: 18px 0;
        font-size: 15px;
    }
    .news-author-time {
        padding-bottom: 18px;
        font-size: 13px;
    }
    .news-content {
        font-size: 14px;
    }
    img{
        width: 100%!important;
        max-height: 250px;
    }
}
</style>

<style>
.news-content p{
    line-height: 1.8;
    color: #666;
}
</style>
