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
		.class-intro{
			display: flex;
			justify-content: space-between;
			padding:20px;
			.class-name{
				font-size:30px;
				color:#151515;
			}
			.class-money{
				font-size:28px;
				color:red;
				.c-o-money{
					color:#999;
					font-size:24px;
					text-decoration: line-through;
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
			.title-icon{
				position:absolute;
				left:20px;
				top:50%;
				width:32px;
				height:32px;
				margin-top:-16px;
				background:url(../../image/learn-list2.png) no-repeat center center/100% 100%;
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
			.c-fl-children-item{
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				margin-bottom:20px;
				.c-info-img{
					width:200px;
				}
				.c-info-content{
					flex:1;
					margin-left:20px;
					.m-desc{
						text-align:justify;
					}
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
	    <nav class="class-nav">
            <div class="nav-list" :class="{ active:navType == 1 }" @click.stop.prevent="navChange(1)">
                <span>课程特色</span>
            </div>
            <div class="nav-list" :class="{ active:navType == 2 }" @click.stop.prevent="navChange(2)">
                <span>课程试听</span>
            </div>
        </nav>
        <!-- 视频和图片展示区域 -->
        <section class="banner">
            <img v-if="!isHasVideo" src="../../image/scbfm.jpg">
            <video v-else id="my-video" webkit-playsinline="true" playsinline="true" class="video-js vjs-16-9 vjs-big-play-centered" controls
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
        <section class="class-intro">
            <div class="class-name">
                公众号速成班
            </div>
            <div class="class-money">
                <span class="c-r-money">￥599</span>
                <span class="c-o-money">￥1099</span>
            </div>
        </section>
        <section class="c-xq" v-show="navType == 1">
            <!-- <ul class="c-list">
                <li>
                    <h1 class="c-h1">
                        标题1
                    </h1>
                    <p class="c-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et natus nemo, cumque eligendi libero hic expedita repellat, laborum vero quae mollitia, necessitatibus odio quis reprehenderit fugiat itaque dolorem. Voluptatem, nam?
                    </p>
                    <div class="c-img">
                        <img src="" alt="">
                    </div>
                </li>
            </ul> -->
            <img src="../../image/class8-01.jpg" >
            <img src="../../image/class8-02.jpg" >
            <img src="../../image/class8-03.jpg" >
            <img src="../../image/class8-04.jpg" >
            <img src="../../image/class8-05.jpg" >
        </section>
		<section class="class-list " v-show="navType == 2">
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
					<ul class="c-fl-children-list p20" v-show="!item.slide">
						<li class="c-fl-children-item"
							v-for="(val,index) in item.childList"
						>
							<div class="c-info-img">
								<img src="../../image/demo1.jpg">
							</div>
							<div class="c-info-content">
								<h1 class="m-title">{{ val.title }}</h1>
								<p class="m-desc">
									{{ val.desc }}
								</p>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</section>
        <section class="pay-footer">
            <div class="pay-footer-content">
                <div class="pay-nums">12682已卖</div>
                 <div class="pay-btn">购买课程(￥299.00/年)</div>
            </div>
        </section>
		<!--跳转至个人中心-->
		<aside class="preson-center">
			<img src="../../image/preson.png">
		</aside>
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
				classList:[
					{
					    title:'情感类',
						desc:'专治情感类疑难杂症',
						slide:false,
						childList:[
							{
							    title:'列表1',
							    desc:'一些描述的内容',
							    imgSrc:require('../../image/demo1.jpg'),
							},
							{
								title:'列表2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
							{
								title:'列表3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
						],
					},
					{
						title:'情感类',
						desc:'专治情感类疑难杂症',
						slide:true,
						childList:[
							{
								title:'列表1',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo1.jpg'),
							},
							{
								title:'列表2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
							{
								title:'列表3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
						],
					},
					{
						title:'情感类',
						desc:'专治情感类疑难杂症',
						slide:true,
						childList:[
							{
								title:'列表1',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo1.jpg'),
							},
							{
								title:'列表2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
							{
								title:'列表3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
						],
					},
					{
						title:'情感类',
						desc:'专治情感类疑难杂症',
						slide:true,
						childList:[
							{
								title:'列表1',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo1.jpg'),
							},
							{
								title:'列表2',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
							{
								title:'列表3',
								desc:'一些描述的内容',
								imgSrc:require('../../image/demo2.jpg'),
							},
						],
					},
				]
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
            },
			// 切换列表展开与合并
			slideToggle(item){
				this.classList.forEach((val) => {
					val.slide = true;
				})
				item.slide = false;
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
