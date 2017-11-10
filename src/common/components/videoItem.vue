/**
 * Created by mabiao on 2017/5/4.
 */

<style lang="less" rel="stylesheet/less">
 	@import "../style/public";
	.c-fl-children-item{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding:20px;
		margin-bottom:0;
		background:#fff;
		border-bottom:1px solid #eee;
		/*&:hover{*/
			/*background:#eee;*/
		/*}*/
		.c-info-img{
			width:200px;
			height:120px;
			overflow: hidden;
			position:relative;
			.playing{
				position:absolute;
				top:0;
				left:8px;
				color:#fff;
				background:@mainColor;
				padding:6px 10px;
				font-size:24px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;
			}
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
			height:120px;
			display:flex;
			align-items: stretch;
			flex-wrap: wrap;
			margin-left:20px;
			.progress{
				padding-top:5px;
				.progress-bar{
					display:inline-block;
					vertical-align:middle;
					width:150px;
					height:14px;
					margin-right:20px;
					background:#ddd;
					border-radius:7px;
					position:relative;
					overflow: hidden;
					&:after{
						content:'';
						position: absolute;
						top:0;
						left:0;
						width:30%;
						height:14px;
						margin-right:20px;
						border-bottom-left-radius: 7px;
						border-top-left-radius: 7px;
						background: @mainColor;
						z-index:100;
					}
				}
			}
			.m-desc{
				width:100%;
				text-align:justify;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.time{
				padding-left:34px;
				font-size:26px;
				height:40px;
				line-height:40px;
				background:url(../../image/time.png) no-repeat left center/28px 28px;
			}
		}


	}

</style>
<template>
	<li class="c-fl-children-item">
		<div class="c-info-img">
			<div v-if="item.playing" class="playing">正在播放</div>
			<div v-else class="model-box">
				<img src="../../image/play.png">
			</div>
			<img src="../../image/demo1.jpg">
		</div>
		<div class="c-info-content">
			<h1 class="m-title">{{ item.title }}</h1>
			<p class="m-desc">
				{{ item.desc }}
			</p>
			<p class="time" v-if="!item.progress">8:30</p>
			<div class="progress" v-else>
				<span class="progress-bar"></span> 已学习{{item.progress}}
			</div>
		</div>
	</li>
</template>
<script>
   export default {
       name:'com-footer',
       props:['item'],
       data(){
           return {

           }
       },
	   methods:{
	   }
   }
</script>
