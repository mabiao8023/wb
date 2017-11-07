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
		.footer{
			position:fixed;
			bottom:0;
			left:0;
			right:0;
			padding:10px 0;
			background:#fff;
			.footer-container{
				display:flex;
				align-items: center;
				justify-content: center;
				font-size:30px;
				li{
					flex:1;
				}
				li.active{
					a{
						color:@mainColor;
					}
					i{
						background:url(../../image/me-active.png) no-repeat center center/100% 100%;
						&.class-icon{
							background:url(../../image/f-learn-active.png) no-repeat center center/100% 100%;
						}
					}
				}
				a{
					display:flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
				}
				i{
					display:block;
					width:48px;
					height:48px;
					background:url(../../image/me.png) no-repeat center center/100% 100%;
					&.class-icon{
						background:url(../../image/f-learn.png) no-repeat center center/100% 100%;
					}
				}
			}
		}

		.user-info{
			display:flex;
			align-items: center;
			justify-content: flex-start;
			padding:28px;
			.user-avatar{
				width:140px;
				height:140px;
				border-radius:50%;
				overflow: hidden;
			}
			.user-name{
				font-size:36px;
				color:#151515;
				margin-left:30px;
			}
		}
		.me-list{
			.me-list-item{
				padding:20px;
				color:#151515;
				font-size:30px;
				border-top:1px solid #eee;
				background:url(../../image/arrow-right.png) no-repeat 600px center/32px 32px;
				&:last-child{
					border-bottom:1px solid #eee;
				}
			}

		}

    }
</style>
<template>
    <div class="page-container" >
		<div class="user-info">
			<div class="user-avatar">
				<img src="../../image/preson.png">
			</div>
			<div class="user-name">
				All is Well
			</div>
		</div>
		<ul class="me-list">
			<li class="me-list-item">
				<a href="./meClassList.html">
					我的课程
				</a>
			</li>
			<li class="me-list-item">
				待开放
			</li>
		</ul>
		<ComFooter current="2"></ComFooter>
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
    </div>
</template>
<script>
    import  commonFn  from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import InfiniteLoading from 'vue-infinite-loading';

    import myAjax from '../../common/js/request';
    import myAlertTip from '../../common/components/modelBox.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import ComFooter from '../../common/components/footer.vue';
    export default {
        name: 'appPage',
        components: {
            InfiniteLoading,
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
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href
                });
            },

    },
    created(){

    },
    mounted() {

    }
    }
</script>
