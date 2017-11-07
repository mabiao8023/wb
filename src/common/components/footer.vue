/**
 * Created by mabiao on 2017/5/4.
 */

<style lang="less" rel="stylesheet/less">
 	@import "../style/public";
	.footer{
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		padding:10px 0;
		background:#fff;
		border-top:1px solid #eee;
		.footer-container{
			display:flex;
			align-items: center;
			justify-content: center;
			font-size:30px;
			li{
				flex:1;
			}
			li.active{
				a{
					color:@mainColor;
				}
				i{
					background:url(../../image/me-active.png) no-repeat center center/100% 100%;
					&.class-icon{
						background:url(../../image/f-learn-active.png) no-repeat center center/100% 100%;
					}
				}
			}
			a{
				display:flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
			}
			i{
				display:block;
				width:48px;
				height:48px;
				background:url(../../image/me.png) no-repeat center center/100% 100%;
				&.class-icon{
					background:url(../../image/f-learn.png) no-repeat center center/100% 100%;
				}
			}
		}
	}

</style>
<template>
	<div class="footer">
		<ul class="footer-container">
			<li class="myClass" :class="{active:current == 1}">
				<a href="./meClassList.html" class="my-class">
					<i class="class-icon"></i>
					课程
				</a>
			</li>
			<li class="me" :class="{active:current == 2}">
				<a href="./me.html" class="">
					<i class="me-icon"></i>
					我的
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
   import { apiPath } from '../../common/js/config.js';
   export default {
       name:'com-footer',
       props:['current'],
       data(){
           return {

           }
       },
   }
</script>
