<style lang="less" rel="stylesheet/less">
   .loading-pop{
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background:rgba(0,0,0,0);
      z-index:1000;
      .loading-box{
         left:50%;
         top:50%;
         width:200px;
         height:200px;
         border-radius:10px;
         position:absolute;
         margin-top:-100px;
         margin-left:-100px;
         background:rgba(0,0,0,.8);
      }
   }
   .load-effect{
      width: 100px;
      height: 100px;
      position: relative;
      margin: 20px auto;
      span{
         display: inline-block;
         width: 14px;
         height: 14px;
         border-radius: 50%;
         background: #fff;
         position: absolute;
         -webkit-animation: load 1.04s ease infinite;
      }
      span:nth-child(1){
         left: 0;
         top: 50%;
         margin-top:-8px;
         -webkit-animation-delay:0.13s;
      }
      span:nth-child(2){
         left: 14px;
         top: 14px;
         -webkit-animation-delay:0.26s;
      }
      span:nth-child(3){
         left: 50%;
         top: 0;
         margin-left: -8px;
         -webkit-animation-delay:0.39s;
      }
      span:nth-child(4){
         top: 14px;
         right:14px;
         -webkit-animation-delay:0.52s;
      }
      span:nth-child(5){
         right: 0;
         top: 50%;
         margin-top:-8px;
         -webkit-animation-delay:0.65s;
      }
      span:nth-child(6){
         right: 14px;
         bottom:14px;
         -webkit-animation-delay:0.78s;
      }
      span:nth-child(7){
         bottom: 0;
         left: 50%;
         margin-left: -8px;
         -webkit-animation-delay:0.91s;
      }
      span:nth-child(8){
         bottom: 14px;
         left: 14px;
         -webkit-animation-delay:1.04s;
      }
   }
   .loading-tip{
       color:#fff;
       font-size:26px;
       text-align:center;
   }
   @-webkit-keyframes load{
      0%{
         opacity: 1;
      }
      100%{
         opacity: 0.2;
      }
   }
</style>
<template>
    <div class="loading-pop" @touchmove.stop.prevent="">
         <div  class="loading-box">
            <div class="load-effect">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <div class="loading-tip">
               <slot>
                  加载中...
               </slot>
            </div>
         </div>
    </div>
</template>
<script>
   export default {
       name:'loading'
   }
</script>