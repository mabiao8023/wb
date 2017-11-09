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
			.c-fl-children-item{
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				margin-bottom:20px;
				padding:20px;
				border-bottom:1px solid #eee;
				border-radius:10px;
				background:#fff;
				.c-info-img{
					width:200px;
					height:150px;
					overflow: hidden;
					border-radius:10px;
				}
				.c-info-content{
					flex:1;
					display:flex;
					flex-direction: column;
					justify-content: space-around;
					margin-left:20px;
					.m-desc{
						text-align:justify;
					}
				}
			}
			.pay-tip{
				position:fixed;
				top:0;
				left:0;
				right:0;
				background:#fff;
				text-align:center;
				color:red;
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
    }
</style>
<template>
    <div class="page-container" >
		<section class="class-list">

			<h1 class="pay-tip">我学习的课程列表</h1>
			<ul class="c-fl-children-list">
				<li class="c-fl-children-item"
					v-for="(val,index) in classList"
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

	export default {
        name: 'appPage',
        components: {
            InfiniteLoading,
            ImageShow,
            myAlertTip,
            LoadingModel,
			ComFooter,
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
    }
    }
</script>
