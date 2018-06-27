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
	.main
</style>
<template>
    <div class="page-container" >
    	<template>
	    	<header class="header">
				推荐内容主题
	    	</header>
			<section class="mian">
				<div class="m-title">
					06/24 10:00 中国VS美国
				</div>
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
    // import InfiniteLoading from 'vue-infinite-loading';

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
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href,
					title: '夜猫足球--' + this.testContent.title,
					desc: this.testContent.desc,
					imgUrl: this.testContent.img_url
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
            preLoader(){
                this.preLoadImages.forEach(val => {
                    let img = new Image();
                    img.src = val;
                })
            },
    },
    created(){
//		this.getTest();
//		this.getTestAsk();
    },
    mounted() {
        this.share();
        // this.getIsTest();
        addStatisticsCode();
    }
    }
</script>
