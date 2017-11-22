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
</style>
<template>
    <div class="page-container" >
		<section class="class-list">

			<h1 class="pay-tip boxShadow">您学习的课程列表</h1>
			<ul class="c-fl-children-list" v-if="classList.length">
				<template v-for="(val,index) in classList">
					<VideoItem
						:item="val"
						@click.stop.native="gotoClassIndex(val.id)"
					></VideoItem>

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
				</template>
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
				classList:[
					{
					    id:1,
						title:'天龙八部',
						desc:'一些描述的内容',
						img_url:require('../../image/demo1.jpg'),
						tag:'专项课',
						progress:'0',
						totalTime:4000,
					},
					{
						id:2,
						title:'射雕英雄传',
						desc:'一些描述的内容',
						img_url:require('../../image/demo1.jpg'),
						tag:'系列课',
						progress:'0',
						totalTime:4000,
					},
					{
						id:3,
						title:'我也不知懂啊',
						desc:'一些描述的内容',
						img_url:require('../../image/demo2.jpg'),
						progress:'0',
						tag:'不知道',
						totalTime:4000,
					},
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
                location.href = './classList.html';
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
			gotoClassIndex(id,type){
				location.href = `./video.html?id=${id}&type=${type}`;
			},
			getProgress(value){
				let time = 0;
				try {
					let currentClass = JSON.parse(localStorage.getItem('classProgress'))[value.id];
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
				return parseInt(time/value.totalTime * 100,10);
			},
			initListProgress(){
				this.classList.forEach( val => {
				    val.progress = this.getProgress(val);
				})
			},
			async getMeClassList(){
				this.showLoading();
				await myAjax.get(apiPath.userClass)
					.then( res => {
						if(res.length){
							res.forEach( val => {
								val.totalTime = this.getTotalTime(val.id);
							} )
						}
						this.classList = res;
						this.initListProgress();
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
       // this.share();
		this.getMeClassList().then( res => {
			this.initListProgress();
		} )
    },
    mounted() {

    }
    }
</script>
