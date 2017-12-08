<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";

    .page-container{
        min-height:100%;
        //padding-bottom:2rem;
        max-width:10rem;
        margin:0 auto;
        /*background:#fff;*/
        font-size:26px;
     	/*.banner{*/
			/*position:fixed;*/
			/*top:0;*/
			/*left:0;*/
			/*right:0;*/
			/*z-index:100;*/
		/*}*/
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
			background:#fff;
			border-bottom:1px solid #eee;
			.class-name{
				font-size:30px;
				color:#151515;
			}
			.class-zixun{
				color:#fff;
				font-size:26px;
				padding:0 10px;
				line-height:56px;
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
				height:14px;
				margin-right:20px;
				background:#ddd;
				border-radius:7px;
				position:relative;
				overflow: hidden;
				i{
					content:'';
					position: absolute;
					top:0;
					left:0;
					width:30%;
					height:14px;
					margin-right:20px;
					border-bottom-left-radius: 7px;
					border-top-left-radius: 7px;
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
			font-size:26px;
			color:#151515;
		}
		.b-desc{
			font-size:24px;
			color:#666;
		}
		.m-desc{
			font-size:24px;
			color:#666;
		}
		.class-list-container{
			margin-top:20px;
		}
		.class-list{

			.c-fl-title{
				padding-left:60px;
				background:#fff;
				border-top:1px solid #eee;
				border-bottom:1px solid #eee;
				position:relative;
				line-height:76px;
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
			<img v-if="!isHasVideo" :src="classInfo.img_url">
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
			</div>
        </section>
        <section class="class-intro">
            <div class="class-progress">
                <h1 class="class-name">{{classInfo.title}}</h1>
				<div class="progress">
					<span class="progress-bar"><i :style="'width:'+classInfo.learn_percent+'%;'"></i></span>已学{{classInfo.learn_percent}}%
				</div>
            </div>
            <div class="class-zixun" @click.stop="isShowQrodePop = true">
                课程咨询
            </div>
        </section>
		<section class="class-list ">
			<ul class="class-list-container">
				<li class="class-item"
					v-for="(item,index) in chapterList"
				>
					<h1 class="c-fl-title m-title" @click.stop.prevent="slideToggle(item)">
						<i class="title-icon"></i>
						{{ item.title }}
						<span class="desc">{{ item.desc }}</span>
						<i class="arrow" :class="{active:!item.slide}"></i>
					</h1>
					<ul class="class-free-list" v-if="!item.slide">
						<template v-for="val in item.lesson">
							<VideoItem
								v-if="val.resource_type == 0"
								:item="val"
								@click.stop.native="playVideo(val)"
							></VideoItem>
							<!-- 文章显示组件 -->
							<ArticleItem
								v-if="val.resource_type == 1"
								:item="val"
								@click.stop.native="gotoArticle(val)"
							>
							</ArticleItem>
						</template>
					</ul>
				</li>
			</ul>
		</section>
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
				classId:commonFn.getParams()["id"]||1,
				isShowQrodePop:false,
				video:null,
				currentVideoSrc:'',
				chapterList:[],
				classInfo:{},
				currentVideoId:null,
				videoTotalTime:0, // 总共的时间
				totalProgress:0,
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
			progressControl(){
                if( this.currentVideoId ){
					let time = this.video.currentTime;
					let totalTime = this.video.duration;
					let progress = parseInt(time/totalTime * 100,10);
					console.log(time,this.currentVideoId,totalTime,progress);
					let classProgress = localStorage.getItem('classProgress');
					let classArr = [];
					if( classProgress ){
						try {
						    classArr = JSON.parse(classProgress);
						    let currentClassArr = classArr[this.classId];
						    if( currentClassArr ){
								if( currentClassArr.some( val => { return val.id == this.currentVideoId }) ){
									currentClassArr.forEach(val => {
//										if( val.id == this.currentVideoId && val.progress < progress){
//											val.progress = progress
//										}
										if( val.id == this.currentVideoId && val.time < time){
											val.time = time
										}
									})
								}else{
									currentClassArr.push({
										id:this.currentVideoId,
										time:time
									})
								}
							}else{
								classArr[this.classId] = {
									id:this.currentVideoId,
									time:time
								}
							}
							localStorage.setItem('classProgress',JSON.stringify(classArr));
						}	catch (err){

						}
					}else{
					    let obj = {};
					    obj[this.classId] = [
							{
							    id:this.currentVideoId,
								time:time
							}
						]
						localStorage.setItem('classProgress',JSON.stringify(obj));
					}
                }
                this.getProgress();
			},
			// 播放视频
			playVideo(item){
			    this.progressControl();
				this.isHasVideo = true;
				this.currentVideoId = item.id;
				this.chapterList.forEach( val => {
					val.lesson.forEach( val2 => {
					    if(val2.resource_type == 0){
							val2.resource.playing = false;
						}
					})
				} )
				item.resource.playing = true;
				this.video.src = item.resource.media_url;
				this.video.click();
				this.video.play();
			},
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.origin
                });
            },
			// 跳转至文章页面
			gotoArticle(value){
			    console.log(value.resource_id);
				location.href = `./article.html?id=${value.resource_id}`;
			},
			slideToggle(item){
				item.slide = !item.slide;
			},
			// 获得视频总时间
			getTotalTime(){
			    let time = 0;
				this.chapterList.forEach( val => {
					val.lesson.forEach( val2 => {
						if(val2.resource_type == 0){
							time += val2.resource.media_time;
						}
					})
				})
				this.videoTotalTime = time;
			},
			getProgress(){
			    let time = 0;
			    try {
					let currentClass = JSON.parse(localStorage.getItem('classProgress'))[this.classId];
					if ( currentClass.length ){
						currentClass.forEach( val => {
						    time += val.time;
						} )
					}else{
					    time = 0
					}
				}catch (err){
					time = 0;
				}
				if(this.videoTotalTime){
					this.totalProgress = parseInt(time/this.videoTotalTime * 100,10);
				}else{
					this.totalProgress = 0;
				}
				// 传总进度给后端保存
				myAjax.post(apiPath.classPercent,{class_id:this.classId,percent:this.totalProgress}).then( res => {
				    console.log(res);
				})
			},

			// 获取课程章节列表

			async getClassChapter(){
			    this.showLoading();
				await  myAjax.get( apiPath.userChapter,{class_id:this.classId} )
					.then( res => {
					    if( res.chapter.length ){
					        res.chapter.forEach( (val,i) => {
								val.slide = i === 0 ?  false : true;
								val.lesson.forEach( val2 => {
									val2.resource.playing = false;
								})
							});
							this.chapterList = res.chapter;
						}else{
					        this.layer('暂无数据')
						}
						this.classInfo = res;
					} )
				this.hideLoading();
			},
    },
    async created(){
//    	this.getClassInfo();
    	await  this.getClassChapter();
		this.getTotalTime();
		//this.getProgress();
        this.share();
    },
    mounted() {
        this.$nextTick( () => {
			this.video = document.getElementById("my-video");
			// 监听播放结束事件
			this.video.addEventListener('pause',() => {
				// 获取当前视频的播放时间
				this.progressControl();
			});
			this.video.addEventListener('ended',() => {
				// 获取当前视频的播放时间
				this.progressControl();
				// 暂停所有的视频
				this.chapterList.forEach( val => {
					val.lesson.forEach( val2 => {
						if(val2.resource_type == 0){
							val2.playing = false;
						}
					})
				} )
			});
        });
		addStatisticsCode();
    }
    }
</script>
