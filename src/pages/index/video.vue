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
     	.banner{
			position:fixed;
			top:0;
			left:0;
			right:0;
			z-index:100;
		}
        .video-js{
            width:100%;
        }
		.video-container{
			width:100%;
			height:372px;
			.view-cover{
				width:100%;
				height:372px;
			}
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
		.class-intro{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:20px;
			padding-top:60%;
			border-bottom:1px solid #eee;
			.class-name{
				font-size:30px;
				color:#151515;
			}
			.class-zixun{
				color:#fff;
				padding:12px 20px;
				background:@mainColor;
				border-radius:8px;
			}
		}
		.progress{
			padding-top:10px;
			.progress-bar{
				display:inline-block;
				vertical-align:middle;
				width:250px;
				height:18px;
				margin-right:20px;
				background:#ddd;
				border-radius:9px;
				position:relative;
				overflow: hidden;
				&:after{
					content:'';
					position: absolute;
					top:0;
					left:0;
					width:30%;
					height:18px;
					margin-right:20px;
					border-bottom-left-radius: 9px;
					border-top-left-radius: 9px;
					background: @mainColor;
					z-index:20;
				}
			}
		}

		.c-xq{
			font-size:0;
			width:100%;
		}
		.p20{
			padding:20px;
		}
		.b-title{
			font-size:30px;
			color:#151515;
		}
		.m-title{
			font-size:28px;
			color:#151515;
		}
		.b-desc{
			font-size:26px;
			color:#666;
		}
		.m-desc{
			font-size:24px;
			color:#666;
		}
		.class-list{

			.c-fl-title{
				padding-left:60px;
				background:#fff;
				border-top:1px solid #eee;
				border-bottom:1px solid #eee;
				position:relative;
			}
			.desc{
				color:#999;
				font-size:26px;
			}
			.title-icon{
				position:absolute;
				left:20px;
				top:50%;
				width:32px;
				height:32px;
				margin-top:-16px;
				background:url(../../image/class-list-icon.png) no-repeat center center/100% 100%;

				//background:url(../../image/learn-list2.png) no-repeat center center/100% 100%;
			}
			.arrow{
				position:absolute;
				right:20px;
				top:50%;
				width:48px;
				height:48px;
				margin-top:-24px;
				background:url(../../image/arrow-right.png) no-repeat center center/100% 100%;
				&.active{
					background:url(../../image/arrow-down.png) no-repeat center center/100% 100%;
				}
			}
		}
		.preson-center{
			position:fixed;
			bottom:150px;
			right:20px;
			width:100px;
			height:100px;
			border-radius:50%;
			background:#fff;
			box-shadow: 0px 0px 10px rgba(0,0,0,.5);
		}
    }
</style>
<template>
    <div class="page-container" >
        <section class="banner">
			<img v-show="!isHasVideo" src="../../image/scbfm.jpg">
			<div class="video-container"
				v-show="isHasVideo">
				<video class="view-cover"
					   autoplay="autoplay"
					   controls
					   id="my-video"
					   x5-video-player-type="h5"
					   webkit-playsinline
					   playsinline>
				</video>
				<!--<video  id="my-video"-->
						<!--x5-video-player-type="h5"-->
						<!--webkit-playsinline="true"-->
						<!--playsinline="true"-->
						<!--class="video-js vjs-16-9 vjs-big-play-centered"-->
						<!--controls-->
						<!--:poster="postImgSrc"-->
						<!--preload>-->
					<!--<p class="vjs-no-js">-->
						<!--To view this video please enable JavaScript, and consider upgrading to a web browser that-->
						<!--<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>-->
					<!--</p>-->
				<!--</video>-->
			</div>
        </section>
        <section class="class-intro">
            <div class="class-progress">
                <h1 class="class-name">爆款文案训练营</h1>
				<div class="progress">
					<span class="progress-bar"></span>已学30%
				</div>
            </div>
            <div class="class-zixun" @click.stop="isShowQrodePop = true">
                课程咨询
            </div>
        </section>
		<section class="class-list ">
			<ul class="class-list-container">
				<li class="class-item"
					v-for="(item,index) in classList"
				>
					<h1 class="c-fl-title m-title p20" @click.stop.prevent="slideToggle(item)">
						<i class="title-icon"></i>
						{{ item.title }}
						<span class="desc">{{ item.desc }}</span>
						<i class="arrow" :class="{active:!item.slide}"></i>
					</h1>
					<ul class="class-free-list" v-if="!item.slide">
						<template v-for="val in item.childList">
							<VideoItem
								v-if="val.type == 1"
								:item="val"
								@click.stop.native="playVideo(val)"
							></VideoItem>
							<!-- 文章显示组件 -->
							<ArticleItem
								v-if="val.type == 2"
								:item="val"
								@click.stop.native="gotoArticle(val.id)"
							>
							</ArticleItem>
						</template>
					</ul>
				</li>
			</ul>
			<!--<h1 class="b-title p20 free-title">其他课程推荐列表</h1>-->
			<!--<ClassItem :childList="freeClassList"></ClassItem>-->
		</section>
		<!--跳转至个人中心-->
		<!--<aside class="preson-center">-->
			<!--<a href="./me.html">-->
				<!--<img src="../../image/preson.png">-->
			<!--</a>-->
		<!--</aside>-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
        <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
		<transition name="fade" mode="in-out">
			<QrodePop v-if="isShowQrodePop"
					  @closeQrodePop="isShowQrodePop = !isShowQrodePop"></QrodePop>
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
	import QrodePop from '../../common/components/qrodePop.vue';
	import ArticleItem from '../../common/components/articleItem';
	import VideoItem from '../../common/components/videoItem';
	export default {
        name: 'appPage',
        components: {
            InfiniteLoading,
            ImageShow,
            myAlertTip,
            LoadingModel,
			QrodePop,
			ArticleItem,
			VideoItem
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
				type:commonFn.getParams()['type']||1,
                postImgSrc:postImg,
				isHasVideo:false,
				navType:2,  // 1代表课程首页，2代表课程代表
				isShowQrodePop:false,
				video:null,
				currentVideoSrc:'',
				classList:[
					{
					    id:1,
						title:'足球系列',
						desc:'专业的足球竞技教学视频',
						slide:false,
						childList:[
							{
							    id:1,
								type:1,
								title:'足球系列1',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo1.jpg'),
								src:'http://v3.mukewang.com/shizhan/583d5988b3fee311398b457c/H.mp4',
								playing:false,
							},
							{
								id:1,
								type:1,
								title:'足球系列2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
								src:'http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4',
								playing:false,
							},
							{
								id:1,
								type:2,
								title:'足球系列3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
								playing:false,
							},
						],
					},
					{
						title:'篮球系列',
						desc:'专业的篮球竞技',
						slide:true,
						childList:[
							{
								id:1,
								type:1,
								title:'足球系列1',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo1.jpg'),
								src:'http://v3.mukewang.com/shizhan/583d5988b3fee311398b457c/H.mp4',
								playing:false,
							},
							{
								id:1,
								type:1,
								title:'足球系列2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
								src:'http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4',
								playing:false,
							},
							{
								id:1,
								type:2,
								title:'足球系列3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
								playing:false,
							},
						],
					},
					{
						title:'排球系列',
						desc:'专治情感类疑难杂症',
						slide:true,
						childList:[
							{
								id:1,
								type:1,
								title:'足球系列1',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo1.jpg'),
								src:'http://v3.mukewang.com/shizhan/583d5988b3fee311398b457c/H.mp4',
								playing:false,
							},
							{
								id:1,
								type:1,
								title:'足球系列2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
								src:'http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4',
								playing:false,
							},
							{
								id:1,
								type:2,
								title:'足球系列3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
								playing:false,
							},
						],
					}
				],
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
			// 播放视频
			playVideo(item){
				this.isHasVideo = true;
				this.classList.forEach( val => {
					val.childList.forEach( val2 => {
					    if(val2.type == 1){
							val2.playing = false;
						}
					})
				} )
				item.playing = true;
				this.$nextTick( () => {
					this.video.src = item.src;
					this.video.click();
					this.video.play();
				})
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
            },
			// 跳转至文章页面
			gotoArticle(id){
				location.href = `./article.html?id=${id}`;
			},
			slideToggle(item){
				item.slide = !item.slide;
			},
    },
    created(){
       // this.share();
    },
    mounted() {
        this.$nextTick( () => {
			this.video = document.getElementById("my-video");
            // videojs.options.flash.swf = '//path/to/videojs.swf'
            // var myPlayer = videojs('my-video');
//			var that = this;
//			videojs("my-video",{
//			    width:'100%',
//				aspectRation:'4:3',
//				techOrder:["html5"],
//			}).ready(function(){
//				console.log(this);
//				var myPlayer = this;
//				that.video = this;
//				// 默认初始化播放视频
//				myPlayer.src("http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4");
//
////				myPlayer.play();
//			});
//			console.log(this.video)
        })
    }
    }
</script>
