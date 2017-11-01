/**
 * Created by mabiao on 2017/5/4.
 */

<style lang="less" rel="stylesheet/less">
 @import "../../common/style/config.less";
 .footerbar{position:fixed;bottom:0;left:0;right:0;z-index: 50;width:100%;height:1.47rem;border-top:1px solid #e5e5e5;background:#fff;}
 .footerbar .item{position:relative;display:inline-block;float:left;width:33.33%;height:1.47rem;font-size:.406rem;color:#999;text-align:center;text-decoration:none;}
 .footerbar .item i{display:block;width:.56rem;height:.56rem;margin:.2rem auto 0;background-repeat:no-repeat;background-size:.56rem .56rem;}
 .footerbar .item i.hot-icon{background-size:.43rem .56rem;}
 .footerbar .item i.hot-icon{background-image:url("@{IMAGE-PATH}hot.png?@{DATE}")}
 .footerbar .item i.listen-icon{background-image:url("@{IMAGE-PATH}listen.png?@{DATE}")}
 .footerbar .item i.ask-icon{margin-top:-.55rem;width:1.56rem;height:1.375rem;background-size:1.56rem 1.375rem;background-image:url("@{IMAGE-PATH}ask-circle-active.png?@{DATE}")}
 .footerbar .item i.presonal-icon{background-image:url("@{IMAGE-PATH}me.png?@{DATE}")}
 .footerbar .item.current{color:#f85f48;}
 .footerbar .item.current i.hot-icon{background-image:url("@{IMAGE-PATH}hot-active.png?@{DATE}")}
 .footerbar .item.current i.listen-icon{background-image:url("@{IMAGE-PATH}listen-active.png?@{DATE}")}
 .footerbar .item.current i.ask-icon{background-image:url("@{IMAGE-PATH}ask-circle.png?@{DATE}")}
 .footerbar .item.current i.presonal-icon{background-image:url("@{IMAGE-PATH}me-active.png?@{DATE}")}
 .unread-messages{
    position:absolute;
    width:14px;
    height:14px;
    border-radius:50%;
    border:2px solid @mainColor;
    background:@mainColor;
    top:10px;
    right:80px;
 }
</style>
<template>
   <div class="footerbar">
      <a href="/home/index/index"  class="item" :class="{current: current == 1}"><i class="hot-icon"></i>热门榜</a>
      <a href="/home/usercate/index" class="item" :class="{current: current == 2}"><i class="ask-icon"></i>我要问</a>
      <a href="/home/me/index" class="item" :class="{current: current == 3 }">
         <i class="presonal-icon"></i>
         个人中心
         <span class="unread-messages" v-if="isShowNoReadMsg"></span>
      </a>
   </div>
</template>
<script>
   import { apiPath } from '../../common/js/config.js';
   export default {
       name:'com-footer',
       props:['current'],
       data(){
           return {
               isShowNoReadMsg:false
           }
       },
       methods:{
           getMessage(){
                this.$http.get(apiPath.getNoticeNums).then(
                    res => {
                        if(res.data.code == 1 && res.data.data.notice != 0){
                            this.isShowNoReadMsg = true;
                        }else{
                            this.isShowNoReadMsg = false;
                        }
                    }
                )
           }
       },
       mounted(){
           setTimeout(() => {
               this.getMessage();
           },1000)
       }
   }
</script>