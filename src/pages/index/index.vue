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
            line-height:90px;
            .nav-list{
                flex:auto;
                text-align:center;
                color:#151515;
                span{
                    display:inline-block;
                    padding:0 20px;
                    line-height:80px;
                    font-size:32px;
                }
                &.active span{
                    color:@mainColor;
                    border-bottom:8px solid @mainColor;
                }
            }
        }
        .video-js{
            width:100%;
        }
        .pay-footer{
            position:fixed;
            bottom:0;
            left:0;
            right:0;
            line-height:88px;
            background:#fff;
            border-top:1px solid #eee;
            .pay-footer-content{
                display:flex;
                text-align:center;
                justify-content:space-between;
				font-size:28px;
				.pay-btn{
					padding:0 20px;
					color:#fff;
					background: @mainColor;
				}
				.pay-nums{
					flex:1;
				}
            }

        }
    }

</style>
<template>
    <div class="page-container" >
	    <nav class="class-nav">
            <div class="nav-list" :class="{ active:navType == 1 }" @click.stop.prevent="navChange(1)">
                <span>课程特色</span>
            </div>
            <div class="nav-list" :class="{ active:navType == 2 }" @click.stop.prevent="navChange(2)">
                <span>课程列表</span>
            </div>
        </nav>
        <!-- 视频和图片展示区域 -->
        <section class="banner">
            <img v-if="!isHasVideo" src="../../image/scbfm.jpg">
            <video v-else id="my-video" webkit-playsinline class="video-js vjs-16-9 vjs-big-play-centered" controls
          :poster="postImgSrc" preload>
            <source src="http://v3.mukewang.com/shizhan/59f8498ae420e5be578b459b/H.mp4" type="video/mp4">
            <!-- <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
            <source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg"> -->
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider upgrading to a web browser that
              <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
          </video>
        </section>

        <section class="pay-footer">
            <div class="pay-footer-content">
                <div class="pay-nums">12682已卖</div>
                 <div class="pay-btn">购买课程(￥299.00/年)</div>
            </div>
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
    import postImg from '../../image/scbfm.jpg';
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
                postImgSrc:postImg,
				isHasVideo:true,
				navType:1,  // 1代表课程首页，2代表课程代表
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
			// 列表切换
			navChange(type){
				this.navType = type;
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
       // this.share();
    },
    mounted() {
        this.$nextTick( () => {
            // videojs.options.flash.swf = '//path/to/videojs.swf'
            // var myPlayer = videojs('my-video');

            videojs("my-video",{
                width:'100%',
                aspectRation:'4:3',
                techOrder:["html5"],
            },function(){
                var myPlayer = this;
//				  不能自动播放
//                myPlayer.play();
            })
        })
    }
    }
</script>
