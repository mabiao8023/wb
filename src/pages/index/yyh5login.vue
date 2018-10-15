<style lang="less" rel="stylesheet/less">
	@import "../../common/style/reset.less";
	@import "../../common/style/public.less";
    .page-container{
        height:100%;
		background:#fff;
    }
</style>
<template>
    <div class="page-container" >
		<!--提示组件-->
		<transition name="fade" mode="in-out">
			<myAlertTip
				v-if="tip.isShow"
				@close-tip="tip.isShow = !tip.isShow"
				:text="tip.text"
				:time="tip.time">
			</myAlertTip>
		</transition>
		<transition name="fade" mode="in-out">
			<LoadingModel v-if="loading.isShow">
				<span>{{ loading.text }}</span>
			</LoadingModel>
		</transition>
    </div>
</template>
<script>
	import  commonFn  from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import myAjax from '../../common/js/request';
	import myAlertTip from '../../common/components/modelBox.vue';
	import LoadingModel from '../../common/components/loadingModel.vue';
	import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    export default {
        name: 'appPage',
        components: {
			myAlertTip,
			LoadingModel
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]|| localStorage.getItem('channel') ||"",
				code: commonFn.getParams()["code"],
				tip: layerConfig,
				loading: loadingConfig,
				state:commonFn.getParams()['state']||''
            }
        },
        methods: {
			layer(text,time){
				layer.bind(this,text,time)();
			} ,
			showLoading(text){
				showLoading.bind(this,text)();
			},
			hideLoading(){
				hideLoading.bind(this)();
			},
    },
    created(){

    },
    mounted(){
    	let search = location.search
    	location.replace(`https://give_h5.ym8800.com/wxbuy${search}`)
    }
    }
</script>
