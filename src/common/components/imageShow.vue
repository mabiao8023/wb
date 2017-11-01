/**
 * Created by mabiao on 2017/5/4.
 */
<style lang="less" rel="stylesheet/less">
 // 图片展示
 .ask-photo-show{
    li{
       padding:0;
       display:inline-block;
       width:2rem;
       height:2rem;
       background:#e7e7e7;
       margin-right:.156rem;
       margin-bottom: 0;
       border-radius: 10px;
       overflow: hidden;
       position:relative;
       img{
          width:100%;
          position:absolute;
          top:50%;
          -webkit-transform: translate(0,-50%);
          transform: translate(0,-50%);
       }
    }
 }
</style>
<template>
   <ul class="ask-photo-show" v-if="image_info.length > 0">
      <li v-for="(val,index) in image_info" @click.stop.prevent="showImage(index)">
         <img :src="val.thumb_url">
      </li>
   </ul>
</template>
<script>
   export default {
       name:'ImageShow',
       // 父组件传递图片展示数组进来
       props:['image_info'],
       methods:{
           showImage(currentIndex){
               let currentUrl = '';
               let urls = [];
               this.image_info.forEach((val,index) => {
                   if(currentIndex == index){
                       currentUrl = val.image_url;
                   }
                   urls.push(val.image_url);
               },this);
               wx.previewImage({
                   current: currentUrl, // 当前显示图片的http链接
                   urls: urls // 需要预览的图片http链接列表
               });
           }
       },
   }
</script>