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
			async login(){

			    if( !this.code ){
			        this.layer('code为空不能登录');
			        return ;
				}

				let data = {
					state:this.state,
					channel:this.channel,
					code:this.code,
				};
			    this.showLoading('登录中...');
			    await myAjax.post( apiPath.login,data )
					.then( res => {
						// 跳转
						// this.layer( ' 登录成功，即将跳转 ' );

						let prev_link = localStorage.getItem('prev-link');
						// 阻止登录后返回的问题
						let stateObj = {'prev_link':prev_link}
						if( window.history && history.replaceState ){
							history.replaceState(stateObj,'',prev_link);
						}
						location.href = prev_link;

						} ).catch( e => { this.layer( e ) } );
//				this.hideLoading();
			}
    },
    created(){
		this.login();
    }
    }
</script>
