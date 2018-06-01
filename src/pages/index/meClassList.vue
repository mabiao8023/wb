<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";

    .page-container{
        min-height:100%;
        padding-bottom:2rem;
        max-width:10rem;
        margin:0 auto;
        font-size:26px;
		.class-list{
			padding-top:82px;
			.c-fl-children-list{
				margin:20px;
			}
			.pay-tip{
				position:fixed;
				top:0;
				left:0;
				right:0;
				background:#fff;
				text-align:center;
				color:#151515;
				padding:20px;
				font-size:30px;
				border-bottom:1px solid #eee;
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
		.empty-list{
			text-align:center;
			padding:120px;
			img{
				width:128px;
				height:128px;
			}
			.gotoClassList{
				margin:30px auto;
				background:@mainColor;
				width:250px;
				padding:20px;
				font-size:26px;
				border-radius:10px;
				color:#fff;
			}
		}

    }
    .c-fl-children-item{
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding:20px;
		margin-bottom:0;
		background:#fff;
		border-bottom:1px solid #eee;
		/*&:hover{*/
			/*background:#eee;*/
		/*}*/
		.c-info-img{
			width:200px;
			height:120px;
			overflow: hidden;
			position:relative;
			.playing{
				position:absolute;
				top:0;
				left:8px;
				color:#fff;
				background:@mainColor;
				padding:6px 10px;
				font-size:24px;
				border-bottom-left-radius: 8px;
				border-bottom-right-radius: 8px;
			}
			.model-box{
				position:absolute;
				left:0;
				top:0;
				bottom:0;
				right:0;
				background:rgba(0,0,0,.5);
				img{
					width:60px;
					height:60px;
					position:absolute;
					top:50%;
					left:50%;
					margin-left:-30px;
					margin-top:-30px;
				}
			}
		}
		.c-info-content{
			flex:1;
			height:120px;
			display:flex;
			align-items: stretch;
			flex-wrap: wrap;
			margin-left:20px;
			position:relative;
			.c-info-tag{
				position:absolute;
				right:20px;
				top:0px;
				padding:4px 10px;
				color:#fff;
				background:@mainColor;
				font-size:24px;
				border-radius:4px;
			}
			.progress{
				font-size:24px;
				.progress-bar{
					display:inline-block;
					vertical-align:middle;
					width:150px;
					height:10px;
					margin-right:20px;
					background:#ddd;
					border-radius:5px;
					position:relative;
					overflow: hidden;

					i{
						position: absolute;
						top:0;
						left:0;
						width:30%;
						height:10px;
						margin-right:20px;
						border-bottom-left-radius: 5px;
						border-top-left-radius: 5px;
						background: @mainColor;
						z-index:100;
					}
				}
			}
			.m-desc{
				width:100%;
				text-align:justify;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.time{
				padding-left:34px;
				font-size:24px;
				height:40px;
				line-height:40px;
				background:url(../../image/time.png) no-repeat left center/24px 24px;
			}
		}
	}
</style>
<template>
    <div class="page-container" >
		<section class="class-list">

			<h1 class="pay-tip boxShadow">您学习的课程列表</h1>
			<ul class="c-fl-children-list" v-if="classList.length">
					<li class="c-fl-children-item"
					 v-for="(item,index) in classList"
					 @click.stop="gotoClassIndex(item.id)">
						<div class="c-info-img">
							<!-- <div v-if="item.resource.playing" class="playing">正在播放</div> -->
							<!-- <div class="model-box">
								<img src="../../image/play.png">
							</div> -->
							<img :src="item.img_url">
						</div>
						<div class="c-info-content">
							<div class="c-info-tag" v-if="item.tag">{{item.tag}}</div>
							<h1 class="m-title">{{ item.title }}</h1>
							<!-- <p class="m-desc">
								{{ item.desc }}
							</p> -->
							<!-- <p class="time" v-if="!item.progress && item.resource.media_time">{{secondsFormate(item.resource.media_time)}}</p> -->
							<div class="progress">
								<span class="progress-bar"><i :style="'width:' + (item.learn_percent || 0) +'%;' "></i></span> 已学习{{item.learn_percent || 0}}%
							</div>
						</div>
					</li>

					<!-- <VideoItem
						v-if="val.type == 1"
						:item="val"
						@click.stop.native="gotoClassIndex(val.id,val.type)"
					></VideoItem>
					//文章显示组件
					<ArticleItem
						v-if="val.type == 2"
						:item="val"
						@click.stop.native="gotoClassIndex(val.id,val.type)"
					>
					</ArticleItem> -->
			</ul>
			<div v-else class="empty-list">
				<img src="../../image/empty.png" alt="">
				<div class="gotoClassList"
					@click="gotoClassList"
				>去首页看看</div>
			</div>
		</section>
		<ComFooter current="2"></ComFooter>
		<!--跳转至个人中心-->
		<!--<aside class="preson-center">-->
			<!--<img src="../../image/preson.png">-->
		<!--</aside>-->
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
	import ComFooter from '../../common/components/footer.vue';
	import VideoItem from '../../common/components/videoItem';
	import ArticleItem from '../../common/components/articleItem';
	export default {
        name: 'appPage',
        components: {
            InfiniteLoading,
            ImageShow,
            myAlertTip,
            LoadingModel,
			ComFooter,
			VideoItem,
			ArticleItem
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
				isHasVideo:false,
				navType:2,  // 1代表课程首页，2代表课程代表
				classList:[],
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
			gotoClassList(){
                location.href = './index.html';
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

			gotoClassIndex(id){
				location.href = `./video.html?id=${id}`;
			},
			async getMeClassList(){
				this.showLoading();
				await myAjax.get(apiPath.userClass)
					.then( res => {

						this.classList = res;
					} ).catch( e => {this.layer(e)} );
					this.hideLoading();
			},
			getTotalTime(classId){
				let totalTime = Infinity;
				let arr = [];
				try{
					arr = JSON.parse(localStorage.getItem('totalTime'));
					arr.forEach(val=>{
						if(val.id == classId){
							totalTime = val.totalTime;
						}
					})
				}catch(err){

				}
				return totalTime;
			}
    },
    created(){
        this.share();
		this.getMeClassList()
    },
    mounted() {
		addStatisticsCode();
    }
    }
</script>
