<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
	body{
		background-color: #004c7d;
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
		background-color: #004c7d;
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
		margin: 300px auto 0;
		line-height: 100px;
		border-radius: 10px;
		background: #e83834;
		box-shadow: 1px 1px 10px rbga(0,0,0,.8);
	}
</style>
<template>
    <div class="page-container" >
    	<template>
	    	<header class="header">
				世界杯赛事推荐
	    	</header>
			<section v-if="true" class="main">
				<div class="m-title">
					中国VS美国
				</div>
				<template v-if="true" >
					<div class="m-imgs">
						<img src="https://mmbiz.qpic.cn/mmbiz_png/pIsF27haEdeRHhnl1jT8TvbkvsibS4kelgKoD0Ushg4HJmaCXdKPTt7dIO2vxawk7Q6VoETQgZzO3ib69Eh88Aog/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1"
							 @click.stop.prevent="previewImg()"
							 alt="">
					</div>
					<div class="m-imgs">
						<img src="https://mmbiz.qpic.cn/mmbiz_png/pIsF27haEdeRHhnl1jT8TvbkvsibS4kelgKoD0Ushg4HJmaCXdKPTt7dIO2vxawk7Q6VoETQgZzO3ib69Eh88Aog/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1" alt="">
					</div>
					<div class="m-title">
						详细分析
					</div>
					<div class="m-desc">
						秘鲁两战0分已经提前出局了，而澳大利亚仍有出线希望，本场比赛只要拿下3分，而同组的丹麦输给法国，球队将有非常大的可能直接出线（两队同积4分，澳大利亚净胜球大概率比丹麦要多）。本场比赛如果是平手盘开出就会使澳大利亚形成大热，毕竟澳大利亚本战战意更充更渴望获胜，而受平/半球盘开出可以平衡热度，结合两队从前两场的表现来看，本战可以支持澳大利亚至少不败。
					</div>
					<div class="footer">
						<div class="footer-item left">
							<img src="../../image/logo.png" alt="">
						</div>
						<div class="footer-item right">
							<img src="../../image/qrode.png" alt="">
						</div>
					</div>
					<div class="tip">
						<img src="../../image/tips.png" alt="">
					</div>
				</template>
				<template v-else>
					<div class="submit">
						88元解锁赛事分析
					</div>
				</template>

			</section>
			<section v-else class="no-exist">
				推荐内容不存在
			</section>
    	</template>

		<!--提示组件-->
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
				testId: commonFn.getParams()['id'] || 1,
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
            async wxConfig() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
				wx.config(wxParams.wxConfig);
            },
			/* 显示图片放大 */
			previewImg( url = 'https://mmbiz.qpic.cn/mmbiz_png/pIsF27haEdeRHhnl1jT8TvbkvsibS4kelgKoD0Ushg4HJmaCXdKPTt7dIO2vxawk7Q6VoETQgZzO3ib69Eh88Aog/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1'){
				wx.previewImage({
					current: url, // 当前显示图片的http链接
					urls: [url] // 需要预览的图片http链接列表
				});
			},
            // 选择答案
            choiceAnswer(id,item){
            	if( this.currentIndex >= this.total ){
            		// 出结果
            		this.showLoading('获取结果中');
            		myAjax.get(apiPath.getRandAnswer,{test_id:this.testId})
						.then( res => {
						    console.log(res);
						    this.result = res;
							this.isShowResult = true;
						} ).catch( e => this.layer(e) );
					this.hideLoading();
            	}else{
            		this.userAnswers.push(item);
					this.currentQuestion = this.questions[this.currentIndex];
					this.currentIndex += 1;
            	}
            },
            beginTest(){
            	this.isBeginTest = true;
            },
            async getIsTest(){
                this.layer('您已测试过该项目,可将结果分享给朋友');
                this.isShowResult = true;

			},
			async getTest(){
				this.showLoading();
				await myAjax.get(apiPath.getTest,{id:this.testId}).then( res => {
					this.testContent = res;
				} );
				this.hideLoading();
			},
//			async getTestAsk(){
//			    await myAjax.get(apiPath.getTestAsk,{test_id:this.testId}).then(
//			        res => {
//			            this.questions = res;
//						this.currentQuestion = this.questions[0];
//						this.currentIndex = 1;
//						this.total = this.questions.length;
//                        // 图片的url提前预加载
//                        if( res.length ){
//                            res.forEach( val => {
//                                this.preLoadImages.push(val.img_url);
//                            } );
//                            this.preLoader();
//                        }
//					}
//				)
//			},
			// 去支付
			async gotoPay(){
				this.showLoading('支付中');
				await myAjax.post(apiPath.classPay,{class_id:this.classId,channel:this.channel}).then( res => {
					if( this.isFree ){
						location.href = './video.html?id=' + this.classId;
						return;
					}
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
            preLoader(){
                this.preLoadImages.forEach(val => {
                    let img = new Image();
                    img.src = val;
                })
            },
    },
    created(){
		this.getTest();
//		this.getTestAsk();
    },
    mounted() {
        this.wxConfig();
        addStatisticsCode();
    }
    }
</script>
