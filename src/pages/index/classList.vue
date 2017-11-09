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
		.class-list{
			.class-list-item{
				padding:20px;
				color:#151515;
				font-size:30px;
				border-top:1px solid #eee;
				&:last-child{
					border-bottom:1px solid #eee;
				}
				.class-info-img{
					border-radius:10px;
					overflow: hidden;
					position:relative;
				}
				.class-info-text{
					display:flex;
					justify-content: space-between;
					padding:10px 0;
					font-size:30px;
					.class-money{
						color:red;
					}
				}
				.classed-nums{
					position:absolute;
					top:0;
					left:20px;
					color:#fff;
					padding:10px 20px;
					background:@mainColor;
					text-align:right;
					font-size:26px;
					border-bottom-left-radius: 8px;
					border-bottom-right-radius: 8px;
				}
			}

		}

    }
</style>
<template>
    <div class="page-container" >
		<div class="banner-container">
			<swiper ref="swiper"
					direction="horizontal"
					:mousewheel-control="true"
					:performance-mode="false"
					:pagination-visible="true"
					:pagination-clickable="true"
					:loop="true"
					:autoplay="true"
					:autoplaytime="4000"
			>
				<div v-for="(item,index) in banner">
					<a :href="item.link">
						<img :src="item.src" :alt="item.desc" />
					</a>
				</div>
			</swiper>
		</div>
		<ul class="class-list">
			<li class="class-list-item" @click.stop.prevent="gotoIndex()">
				<div class="class-info-img">
					<img src="../../image/scbfm.jpg" alt="">
					<div class="classed-nums">
						12713人学习
					</div>
				</div>
				<div class="class-info-text">
					<div class="class-name">
						公众号运营速成课程
					</div>
					<div class="class-money">
						￥299/年
					</div>
				</div>

			</li>
			<li class="class-list-item">
				<div class="class-info-img">
					<img src="../../image/scbfm.jpg" alt="">
					<div class="classed-nums">
						12713人学习
					</div>
				</div>
				<div class="class-info-text">
					<div class="class-name">
						公众号运营速成课程
					</div>
					<div class="class-money">
						￥299/年
					</div>
				</div>
			</li>
			<li class="class-list-item">
				<div class="class-info-img">
					<img src="../../image/scbfm.jpg" alt="">
					<div class="classed-nums">
						12713人学习
					</div>
				</div>
				<div class="class-info-text">
					<div class="class-name">
						公众号运营速成课程
					</div>
					<div class="class-money">
						￥299/年
					</div>
				</div>
			</li>
		</ul>
		<ComFooter current="1"></ComFooter>
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
    import Swiper from '../../common/components/swiper.vue';
    export default {
        name: 'appPage',
        components: {
            InfiniteLoading,
            myAlertTip,
            LoadingModel,
			ComFooter,
			Swiper,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
				banner:[
					{
						link:'./index.html',
						src:'https://mabiao8023.github.io/wb/src/image/scbfm.jpg',
						desc:'ss'
					},{
						link:'./index.html',
						src:'https://mabiao8023.github.io/wb/src/image/scbfm.jpg',
						desc:'ss'
					},{
						link:'./index.html',
						src:'https://mabiao8023.github.io/wb/src/image/scbfm.jpg',
						desc:'ss'
					}
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
			gotoIndex(){
                location.href = './index.html';
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
