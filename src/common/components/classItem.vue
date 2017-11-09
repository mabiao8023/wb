/**
 * Created by mabiao on 2017/5/4.
 */

<style lang="less" rel="stylesheet/less">
 	@import "../style/public";
	.c-fl-children-item{
		&:hover{
			background:#eee;
		}
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding:20px;
		border-bottom:1px solid #eee;
		.c-info-img{
			width:200px;
			height:120px;
			overflow: hidden;
			position:relative;
			border-radius:10px;
			.model-box{
				position:absolute;
				left:0;
				top:0;
				bottom:0;
				right:0;
				background:rgba(0,0,0,.5);
				img{
					width:60px;
					height:60px;
					position:absolute;
					top:50%;
					left:50%;
					margin-left:-30px;
					margin-top:-30px;
				}
			}
		}
		.c-info-content{
			flex:1;
			margin-left:20px;
			.m-desc{
				text-align:justify;
			}
			.time{
				padding-left:40px;
				line-height:40px;
				font-size:28px;
				background:url(../../image/time.png) no-repeat left center/30px 30px;
			}
		}
	}

</style>
<template>
	<ul class="class-free-list">
	<li class="c-fl-children-item"
		v-for="(val,index) in childList"
		@click.stop.prevent="goToPage(val)"
	>
		<div class="c-info-img">
			<div class="model-box">
				<img src="../../image/play.png">
			</div>
			<img src="../../image/demo1.jpg">
		</div>
		<div class="c-info-content">
			<h1 class="m-title">{{ val.title }}</h1>
			<p class="m-desc">
				{{ val.desc }}
			</p>
			<p class="time">8:30</p>
		</div>
	</li>
	</ul>
</template>
<script>
   import { apiPath } from '../../common/js/config.js';
   export default {
       name:'com-footer',
       props:['childList'],
       data(){
           return {

           }
       },
	   methods:{
		   goToPage( item ){
		       // todo:判断是否为文章或者视频进行跳转
			   location.href = './video.html';
//			   if( item.isPayed ){
//				   location.href = './video.html';
//			   }else{
//				   location.href = './index.html';
//			   }
		   }
	   }
   }
</script>
