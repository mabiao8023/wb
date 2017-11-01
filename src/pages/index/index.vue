<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
    
    .page-container{
        min-height:100%;
        padding-bottom:2rem;
        max-width:10rem;
        margin:0 auto;
        background:#fff;
        font-size:26px;
        .class-nav{
            display:flex;
            line-height:100px;
            .nav-list{
                flex:auto;
                text-align:center;
                color:#151515;
                span{
                    display:inline-block;
                    padding:0 20px;
                    line-height:88px;
                    font-size:32px;
                }
                &.active span{
                    color:#2cbd6c;
                    border-bottom:8px solid #2cbd6c;
                }
            }
        }
    }
    
</style>
<template>
    <div class="page-container" >
	    <nav class="class-nav">
            <div class="nav-list active" >
                <span>课程特色</span>   
            </div>
            <div class="nav-list">
                <span>课程试看</span>
            </div>
        </nav> 
        <section class="banner">
            <img src="../../image/scbfm.jpg">    
        </section>
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
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
    import { getWXParams } from '../../common/js/utils.js';
    import InfiniteLoading from 'vue-infinite-loading';
    import ImageShow from '../../common/components/imageShow.vue';
    import myAjax from '../../common/js/request';
    import myAlertTip from '../../common/components/modelBox.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    export default {
        name: 'appPage',
        components: {
            InfiniteLoading,
            ImageShow,
            myAlertTip,
            LoadingModel,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
            }
        },
        computed:{
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

            async getBanner(){
				await myAjax.post(apiPath.banner)
					.then(res => this.banner = res.banner_list)
					.catch(e => {
					});
			},
          
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href
                });
            },
            // 微信支付
            async pay(){
                commonFn.wxPay({
                    wxPayConf:res.jsApiParameters,
                    successCb:this.wxPaySuc.bind(this,res.out_trade_no),
                    failCb:this.wxPayFail.bind(this,'支付失败，请重试'),
                    cancelCb:this.layer.bind(this,'支付失败，请重试'),
                });
            }
    },
    created(){
       this.share();
    },
    mounted() {
    }
    }
</script>
