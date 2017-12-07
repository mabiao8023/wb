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
			position:fixed;
			background:#fff;
			top:0;
			left:0;
			right:0;
			z-index:10;
            display:flex;
            line-height:80px;
			border-bottom:1px solid #eee;
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
		.banner{
			padding-top:90px;
		}
		.video-container{
			width:100%;
			height:372px;
			.view-cover{
				width:100%;
				height:372px;
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
				.zixun{
					padding:0 20px;
					display:flex;
					align-items: center;
					flex-direction: column;
					justify-content: center;
					border-left:1px solid #ccc;
					.icon{
						display:block;
						width:48px;
						height:48px;
						background:url(../../image/zixun.png) no-repeat center center/100% 100%;
					}
					p{
						font-size:26px;
						line-height:1;
					}
				}
				.pay-nums{
					flex:1;
					padding-left:70px;
					background:url(../../image/f-learn-active.png) no-repeat 20px center/42px 32px;
				}
            }
        }
		.class-intro{
			display: flex;
			justify-content: space-between;
			padding:20px;
			border-bottom:1px solid #eee;
			border-top:1px solid #eee;
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
			color:#999;
		}
		.class-list{
			.free-title{
				border-bottom: 1px solid #eee;
				padding-left:60px;
				background:url(../../image/free-icon.png) no-repeat 20px center/32px 32px;
			}
			.c-fl-title{
				padding-left:60px;
				background:#fff;
				border-top:1px solid #eee;
				border-bottom:1px solid #eee;
				position:relative;
			}
			.desc{
				font-size:26px;
				color:#999;
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
			.pay-tip{
				color:red;
				padding:20px 0;
				padding-left:70px;
				font-size:30px;
				background: url(../../image/pay-icon.png) no-repeat 20px center/46px 46px;
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
		// 宣传页面布局
		.c-list{
			width:100%;
			background:#fff;
			font-size:0;
			li{
				width:100%;
				//padding:20px 0;
				.c-h1{
					font-size:32px;
					padding:20px;
					color:#333;
					font-weight:bold;
					text-align:center;
				}
				.c-desc{
					font-size:26px;
					padding:0 40px;
					text-align:center;
					color:#999;
					padding-bottom:20px
				}
			}
		}
		.class-tag{
			color:#fff;
			background:@mainColor;
			font-size:24px;
			padding:4px 8px;
			border-radius:4px;
		}
		.no-data{
			text-align: center;
			/*font-size:*/
		}
    }
</style>
<template>
    <div class="page-container" >
	    <nav class="class-nav boxShadow">
            <div class="nav-list" :class="{ active:navType == 1 }" @click.stop.prevent="navChange(1)">
                <span>课程特色</span>
            </div>
            <div class="nav-list" :class="{ active:navType == 2 }" @click.stop.prevent="navChange(2)">
                <span>课程试看</span>
            </div>
        </nav>
        <!-- 视频和图片展示区域 -->
        <section class="banner">
            <img v-if="!isHasVideo" :src="classInfo.img_url">
			<div class="video-container" v-show="isHasVideo">
				<video class="view-cover"
					   autoplay="autoplay"
					   controls
					   id="my-video"
					   x5-video-player-type="h5"
					   webkit-playsinline
					   playsinline>
					<p>您的浏览器不支持该视频播放，请升级或者更换浏览器观看</p>
				</video>
			</div>
        </section>
        <section class="class-intro boxShadow">
            <div class="class-name">
                {{classInfo.title}}
            </div>
			<div class="class-tag" v-if="classInfo.tag">
				{{classInfo.tag}}
			</div>
            <div class="class-money" v-else>
                <span class="c-r-money">￥{{classInfo.price | formateMoney}}/{{ classInfo.expire_month && formateMonth(classInfo.expire_month) }}</span>
            </div>
        </section>
        <section class="c-xq" v-show="navType == 1">
             <ul class="c-list">
                <li v-for="(val,index) in classInfo.introduce">
                    <h1 class="c-h1" v-if="val.title">
                        {{val.title}}
                    </h1>
                    <p class="c-desc" v-if="val.content">
                       {{ val.content }}
                    </p>
                    <div class="c-img">
                    	<template v-if="!val.url">
                    		<img :src="val.img_url">
                    	</template>
                    	<template v-else>
                    		<a :href="val.url">
                    			<img :src="val.img_url">
          	        		</a>
                    	</template>
                    </div>
                </li>
            </ul>
        </section>
		<section class="class-list " v-show="navType == 2">
			<h1 class="b-title p20 free-title">试看列表</h1>
			<ul class="class-free-list">
				<template v-if="freeClassList.length > 0" v-for="item in freeClassList">
					<VideoItem
						v-if="item.resource_type == 0"
						:item="item"
						@click.stop.native="playVideo(item)"
					></VideoItem>
					<!-- 文章显示组件 -->
					<ArticleItem
						v-if="item.resource_type == 1"
						:item="item"
						@click.stop.native="gotoArticle(item.resource.id)"
					>
					</ArticleItem>
				</template>
				<template v-else>
					<li class="no-data">
						暂无试听问题
					</li>
				</template>
			</ul>
			<h1 class="pay-tip">以下内容，购买后可继续观看</h1>
			<ul class="class-list-container">
				<template v-if="chapterList.length > 0">
					<li class="class-item"
						v-for="(item,index) in chapterList"
					>
						<h1 class="c-fl-title m-title p20" @click.stop.prevent="slideToggle(item)">
							<i class="title-icon"></i>
							{{ item.title }}
						<span class="desc">{{ item.desc }}</span>
							<i class="arrow" :class="{active:!item.slide}"></i>
						</h1>
						<ul v-show="!item.slide">
							<template v-if="item.lesson.length > 0" v-for="val in item.lesson">
								<VideoItem
									v-if="val.resource_type == 0"
									:item="val"
									@click.stop.native="payTipHandle(val)"
								></VideoItem>
								<!-- 文章显示组件 -->
								<ArticleItem
									v-if="val.resource_type == 1"
									:item="val"
									@click.stop.native="payTipHandle(val)"
								>
								</ArticleItem>
							</template>
							<template v-else>
								<li class="no-data">
									暂无课时数据
								</li>
							</template>
						</ul>
					</li>
				</template>
				<template v-else>
					<li class="no-data">
						暂无章节内容
					</li>
				</template>
			</ul>
		</section>
        <section class="pay-footer">
            <div class="pay-footer-content">
                <div class="pay-nums">{{classInfo.sold}}已卖</div>
				<div @click="showQrodePop" class="zixun">
					<i class="icon"></i>
					<p>咨询</p>
				</div>
                <div class="pay-btn"
                	@click.stop="gotoPay"
                >购买课程(￥{{classInfo.price | formateMoney}})</div>
            </div>
        </section>
		<transition name="fade" mode="in-out">
			<QrodePop v-if="isShowQrodePop"
					  @closeQrodePop="isShowQrodePop = !isShowQrodePop"></QrodePop>
		</transition>
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
	import VideoItem from '../../common/components/videoItem';
    import QrodePop from '../../common/components/qrodePop.vue';
    import ArticleItem from '../../common/components/articleItem';
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
                channel: commonFn.getParams()["channel"]||localStorage.getItem('channel')||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                classId:commonFn.getParams()['id']||1,
                postImgSrc:postImg,
				isHasVideo:false,
				navType:1,  // 1代表课程首页，2代表课程代表
				chapterList:[],
				freeClassList:[],
				isShowQrodePop:false, //是否显示二维码弹窗
				video:null, // 视频
				classInfo:{}
            }
        },
		filters:{
			formateMoney:commonFn.formateMoney
		},
        methods: {
        	formateMonth:commonFn.formateMonth,
			showQrodePop(){
				this.isShowQrodePop = true;
			},
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
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href
                });
            },
			// 切换列表展开与合并
			slideToggle(item){
				item.slide = !item.slide;
			},
			// 免费视频播放
			playVideo(item){
				this.isHasVideo = true;
				this.freeClassList.forEach( val => {
					val.resource.playing = false;
				} )
				item.resource.playing = true;
				this.video.src = item.resource.media_url;
				this.video.click();
				this.video.play();
			},
			// 付费课程点击提示
			payTipHandle(){
				this.layer("请购买后继续观看");
			},
			// 跳转至文章页面
			gotoArticle(id){
				location.href = `./article.html?id=${id}`;
			},
			// 获得页面特色页
			async getClassInfo(){
				this.showLoading();
				await myAjax.get(apiPath.classInfo,{class_id:this.classId}).then( res => {
					this.classInfo = res;
				} ).catch( e => {
					this.layer(e);
				} );
				this.hideLoading();
			},
			// 去支付
			async gotoPay(){
				this.showLoading('支付中')
				await myAjax.post(apiPath.classPay,{class_id:this.classId}).then( res => {
				    if(res.jsapiConfig){
						let wxConfig = res.jsapiConfig;
						commonFn.wxPay({
							wxPayConf:wxConfig,
							successCb:this.wxPaySuc.bind(this,wxConfig),
							failCb:this.layer.bind(this,'支付失败，请重试'),
							cancelCb:this.layer.bind(this,'支付失败，请重试'),
						});
					}
				} ).catch( e => {
					this.layer(e);
				} );
				this.hideLoading();
			},
			// 支付成功
			async wxPaySuc(){
				this.layer('支付成功');
				setTimeout(() => {
					// 支付完成后跳转至页面视频页面
					location.href = './video.html';
				},1000);
			},

			// 获取试看列表的数据
			getClassTry(){
				myAjax.get(apiPath.classTry,{class_id:this.classId})
					.then( res => {
					    if(res.length){
					        res.forEach( val => {
					            val.resource.playing = false;
							} );
							this.freeClassList = res;
						}else{
					        this.layer('暂无数据');
						}
					} ).catch( e => {})
			},

			// 获取课程章节列表

			getClassChapter(){
				myAjax.get( apiPath.classChapter,{class_id:this.classId} )
					.then( res => {
						if( res.length ){
						    console.log(res);
							res.forEach( (val,i) => {
								val.slide = i === 0 ?  false : true;
								val.lesson && val.lesson.forEach( val2 => {
									val2.resource.playing = false;
								})
							});
							this.chapterList = res;
							console.log(this.chapterList )
						}else{
							this.layer('暂无数据')
						}
					} )
			},

			// 获取课程简介
			async getClassInfo(){
				this.showLoading('获取课程中');
				await	myAjax.get( apiPath.classInfo,{class_id:this.classId} )
									.then( res => {
										this.classInfo = res;
									});
				this.hideLoading();
			},
    },
    created(){
		 this.getClassInfo();
		 this.getClassTry();
		 this.getClassChapter();
       // this.share();
    },
    mounted() {
		this.$nextTick( () => {
			this.video = document.getElementById("my-video");
		})
    }
    }
</script>
