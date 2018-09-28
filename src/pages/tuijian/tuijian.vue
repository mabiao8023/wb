<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
	body{
		background-color: #124977;
	}
    .page-container{
        min-height: 1000px;
		background: #124977 url(../../image/footer-bg.jpg) no-repeat left bottom/750px 430px;
    }
	.header{
		margin-top: 64px;
		font-size: 51px;
		line-height: 60px;
		letter-spacing: 0px;
		color: #fff845;
		text-align: center;
		background-color: #124977;
		text-shadow: 4px 6.928px 6px rgb( 0, 10, 16 );
	}
	.main{
		margin-top: 30px;
		.m-title{
			margin-bottom: 10px;
			color: #fff;
			text-align: center;
			font-size: 30px;
		}
		.m-imgs{
			 width: 90%;
			 margin: 20px auto;
			 border-radius: 10px;
			 overflow: hidden;
		 }
		.m-desc{
			width: 90%;
			margin: 20px auto;
			border-radius: 10px;
			background: #fff;
			padding: 24px;
			font-size: 26px;
			line-height: 1.5;
			color: rgb(111, 83, 0);
			overflow: hidden;
		}
		.simple-desc{
			background: transparent;
			color: #fff;
		}
	}
	.footer{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 50px 0 20px;
		.footer-item{
			padding: 0 26px;
		}
		.left{
			border-right: 1px solid #eee;
		}
		img{
			width: 172px;
			height: 172px;
		}
	}
	.tip{
		width: 90%;
		margin: 0 auto;
		padding-bottom: 50px;
	}
	.no-exist{
		padding: 200px 0;
		text-align: center;
		color: #fff;
		font-size: 30px;
	}

	.submit{
		width: 80%;
		font-size: 32px;
		color: #fff;
		text-align: center;
		margin: 200px auto 0;
		line-height: 100px;
		border-radius: 10px;
		background: #e83834;
		/*box-shadow: 1px 1px 10px rbga(0,0,0,.8);*/
	}
</style>
<template>
    <div class="page-container" v-if="content.title">
		<header class="header">
				{{ content.title }}
	    </header>
		<section v-if="content.theme" class="main">
				<div class="m-title">
					{{ content.theme }}
				</div>
				<template v-if="content.is_paid" >
					<div class="m-imgs" v-for="item in content.imgs">
						<img :src="item"
							 @click.stop.prevent="previewImg(item)"
							 alt="">
					</div>
					<div class="m-title">
						精准分析
					</div>
					<div class="m-desc" v-html="recommendText">
						<!--{{ content.info }}-->
					</div>
					<div class="footer">
						<div class="footer-item left">
							<img :src="content.logo" v-if="content.logo">
							<img src="../../image/logo.png" v-else>
						</div>
						<div class="footer-item right">
							<img :src="content.wx_qrcode" v-if="content.wx_qrcode">
							<img src="../../image/qrode.png" v-else>
						</div>
					</div>
					<div class="tip">
						<img src="../../image/tips.png" alt="">
					</div>
				</template>
				<template v-else>
					<div class="m-desc simple-desc">
						简要分析：{{ content.desc }}
					</div>
					<div class="submit" @click.stop.prevent="gotoPay">
						{{ content.price }}元解锁精准分析
					</div>
				</template>

			</section>
		<section v-else class="no-exist">
				推荐内容不存在
		</section>
		<!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
         <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
        <div v-transfer-dom>
            <previewer :list="goodImgList" ref="previewer"></previewer>
        </div>
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
    // import ComFooter from '../../common/components/footer.vue';
    export default {
        name: 'appPage',
        components: {
            // InfiniteLoading,
            myAlertTip,
            LoadingModel,
			// ComFooter,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"] || localStorage.getItem('channel') || "",
				id: commonFn.getParams()['id'] || 1,
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
				content: {

				},
            }
        },
        computed:{
			recommendText(){
				return 	this.content.info && this.content.info.replace(/\n|\r\n/g,"<br/>");
			}
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
            // 微信分享
            async wxConfig() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
				commonFn.wxShare({
					wxConfig: wxParams,
					link: location.href,
					title: '夜猫足球--' + this.content.title,
					desc: this.content.desc,
					imgUrl: this.content.logo
				});
            },

			/* 显示图片放大 */
			previewImg( url ){
			    let urls = [];
			    urls.push( url );
			    wx.previewImage({
					current: url, // 当前显示图片的http链接
					urls: urls // 需要预览的图片http链接列表
				});
			},

			async getRecommend(){
					this.showLoading();
					await myAjax.get(apiPath.recommend,
						{
							id: this.id
						}).then( res => {
						this.content = res;
						this.wxConfig();
					} ).catch( e => {
					    this.layer( e );
					} );
					this.hideLoading();
			},

			// 去支付
			async gotoPay(){
				this.showLoading('提交中');
				await myAjax.post( apiPath.recommendPay,
					{
					    id: this.id,
						channel: this.channel
					}).then( res => {
					    res.timeStamp = res.timestamp;
						let wxConfig = JSON.stringify(res);
						commonFn.wxPay({
							wxPayConf: wxConfig,
							successCb: this.wxPaySuc.bind(this),
							failCb: this.layer.bind(this,'支付失败，请重试'),
							cancelCb: this.layer.bind(this,'支付失败，请重试'),
						});
				} ).catch( e => {
					this.layer(e);
				} );
				this.hideLoading();
			},
			// 支付成功
			async wxPaySuc(){
				this.layer('支付成功');
				location.reload();
			},
		},
		created(){
			this.getRecommend();
		},
		mounted() {
			addStatisticsCode();
		}
    }
</script>
