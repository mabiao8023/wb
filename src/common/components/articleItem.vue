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
			.m-desc{
				width:100%;
				text-align:justify;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}


	}
</style>
<template>
	<li class="c-fl-children-item">
		<div class="c-info-img">
			<div class="playing">阅读课程</div>
			<img src="../../image/demo1.jpg">
		</div>
		<div class="c-info-content">
			<h1 class="m-title">{{ item.title }}</h1>
			<p class="m-desc">
				{{ item.desc }}
			</p>
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
