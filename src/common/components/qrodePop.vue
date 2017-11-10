<template>
    <div class="model-box" @touchmove.prevent="">
        <div class="model-container">
			<h1>长按图片选择<br/>“识别二维码”咨询客服</h1>
			<img src="../../image/demo1.jpg">
			<div class="close" @click.stop="closeQrode"></div>
		</div>
    </div>
</template>

<script>
export default {
    name: 'qrode-pop',
	props:['closeQrodePop'],
    data() {
        return {

		}
    },
	methods:{
		closeQrode(){
			this.$emit('closeQrodePop');
		}
	},
    mounted(){

    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.model-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: rgba(0,0,0,0.5);
    .model-container {
        position: absolute;
        font-size: 36px;
		width:540px;
        top: 50%;
        left: 50%;
        color: #999;
        line-height:1.5;
        text-align: center;
        background-color: #fff;
        transform: translate(-50%,-50%);
        border-radius: 10px;
		h1{
			padding:30px;
		}
		img{
			width:80%;
			margin:30px 0;
		}
		.close{
			position:absolute;
			top:20px;
			right:20px;
			width:58px;
			height:58px;
			background: url(../../image/close.png) no-repeat center center/100% 100%;
		}
    }
}
</style>
