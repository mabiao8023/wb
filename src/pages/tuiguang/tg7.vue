<style lang="less" rel="stylesheet/less">
	@import "../../common/style/reset.less";
	@import "../../common/style/public.less";
	html{
		height: 100%;
	}
	body{
		background-color: #fff;
		height: 100%;
	}
	.qrode{
		padding: 20px;
	}
	p{
		text-align: center;
		font-size: 36px;
		color: #323232;
		font-weight: bold;
	}
</style>
<template>
	<div class="page-container">
		<div class="qrode">
			<img  src="../../image/tg7.png" alt="">
		</div>
		<p>扫一扫二维码加我为好友 </p>
	</div>
</template>
<script>
	import  commonFn  from '../../common/js/common.js';
	import { apiPath } from '../../common/js/config.js';
	import { getWXParams } from '../../common/js/utils.js';

	import myAjax from '../../common/js/request';
	export default {
		name: 'appPage',
		components: {
		},
		data() {
			return {
			}
		},
		computed:{
		},
		methods: {

		},
		created(){
		},
		mounted() {
		}
	}
</script>
