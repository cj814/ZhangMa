<template>
    <div class="wid-100 app-content">
        <div class="index-header">
            <div class="name-weather-arrow flex flex-vert-center flex-justify">
                <router-link class="name-weather" :to="{name: 'Weather'}" tag="div">
                    <span class="block">张马村</span>
                    <span class="block">31℃</span>
                </router-link>
                <router-link class="arrow" :to="{name: 'Intro'}" tag="div">
                    <img src="../../assets/images/forward.png">
                </router-link>
            </div>
            <div class="index-img-box flex flex-justify">
                <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
            </div>
        </div>
        <div class="index-middle-box flex flex-justify">
            <router-link class="middle-box-item flex flex-trans-center flex-vert-center flex-column" :to="{name: 'Syyd'}" tag="div">
                <img src="../../assets/images/syyd.png">
                <span class="block">四园一岛</span>
            </router-link>
            <div class="middle-box-item flex flex-trans-center flex-vert-center flex-column">
                <img src="../../assets/images/nfcp.png">
                <span class="block">农副产品</span>
            </div>
            <div class="middle-box-item flex flex-trans-center flex-vert-center flex-column">
                <img src="../../assets/images/ybyj.png">
                <span class="block">一步一景</span>
            </div>
            <div class="middle-box-item flex flex-trans-center flex-vert-center flex-column">
                <img src="../../assets/images/tsms.png">
                <span class="block">特色民宿</span>
            </div>
        </div>
        <div class="index-space"></div>
        <div class="dynamic-news-list">
            <div class="dynamic-news-header">
                <blockquote>张马动态</blockquote>
            </div>
            <ul class="dynamic-news-content">
                <li class="dynamic-news-item flex">
                    <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                    <div class="dynamic-news-info flex flex-column flex-column-justify">
                        <span class="dynamic-news-title block">大清邮局</span>
                        <span class="dynamic-news-time block">07-25 14:00</span>
                    </div>
                    <div class="trans-line-top"></div>
                </li>
                <li class="dynamic-news-item flex">
                    <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                    <div class="dynamic-news-info flex flex-column flex-column-justify">
                        <span class="dynamic-news-title block">大清邮局</span>
                        <span class="dynamic-news-time block">07-25 14:00</span>
                    </div>
                    <div class="trans-line-top"></div>
                </li>
                <li class="dynamic-news-item flex">
                    <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                    <div class="dynamic-news-info flex flex-column flex-column-justify">
                        <span class="dynamic-news-title block">大清邮局</span>
                        <span class="dynamic-news-time block">07-25 14:00</span>
                    </div>
                    <div class="trans-line-top"></div>
                </li>
                <li class="dynamic-news-item flex">
                    <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                    <div class="dynamic-news-info flex flex-column flex-column-justify">
                        <span class="dynamic-news-title block">大清邮局</span>
                        <span class="dynamic-news-time block">07-25 14:00</span>
                    </div>
                    <div class="trans-line-top"></div>
                </li>
                <li class="dynamic-news-item flex">
                    <img src="http://www.qpzhangma.com/dataservice/PhotoManage.ashx?OP=comm_Show&tableName=ZM.ImageTable&key=ImageTable_ID&keyValue=90&col=Image">
                    <div class="dynamic-news-info flex flex-column flex-column-justify">
                        <span class="dynamic-news-title block">大清邮局</span>
                        <span class="dynamic-news-time block">07-25 14:00</span>
                    </div>
                    <div class="trans-line-top"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

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
.index-middle-box{
    padding-top: 16px;
    padding-bottom: 16px;
}
.index-space{
    content: '';
    width: 100%;
    height: 10px;
    background-color: #ddd;
}
.middle-box-item{
    flex: 1;
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
