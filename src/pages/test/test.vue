<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";

    .page-container{
        min-height:100%;
        background:#fff;
        max-width:10rem;
        margin:0 auto;
        .test-title{
        	font-size:36px;
        	color:#151515;
        }
        .test-peoples{
        	padding:10px 0;
  			font-size:26px;
  			.span{
  				display:inline-block;
  				vertical-align:middle;
  			}
  			.test-start{
  				img{
  					width:32px;
  					height:32px;
  					vertical-align:top;
  				}
  			}
        }
        .test-img{
        	width:100%;
     		padding:10px 0;
        }
        .test-desc{
        	padding:20px 0;
        	font-size:26px;
        	color:#666;
        	text-align:justify;
        	line-height:1.5;
        }
        .begin-test{
        	width:100%;
        	color:#fff;
        	background:@mainColor;
        	line-height:80px;
        	text-align:center;
        	border-radius:10px;
        	font-size:30px;
        }
        .question{
        	padding:20px 0;
        	.title{
        		color:#333;
        		font-size:28px;
        	}
        	.img{
        		padding:30px;
        	}
        	.answers{
        		border:1px solid #ccc;
        		border-radius:10px;
        		.answers-item{
        			padding:20px 30px;
        			font-size:30px;
        			color:#333;
        			border-bottom:1px solid #ccc;
        			&:active{
        				background:#eee;
        			}
        			&:last-child{
        				border-bottom:none;
        			}
        		}
        	}
        }
        .header,.main-desc,.question{
        	padding:20px 30px;
        }
        .result{
        	.r-title{
        		text-align:center;
        		background:@mainColor;
        		color:#fff;
        		line-height:80px;
        		font-size:36px;
        	}
        }
    }
</style>
<template>
    <div class="page-container" >
    	<template v-if="!isShowResult">
	    	<header class="header">
	    		<div class="test-title">
					{{ testContent.title }}
				</div>
				<div class="test-peoples">
					<span class="test-start">
						<img src="../../image/start1.png">
						<img src="../../image/start1.png">
						<img src="../../image/start1.png">
						<img src="../../image/start1.png">
						<img src="../../image/start1.png">
					</span>
					<span>
						{{ testContent.test_num }}人在测
                                           </span>
				</div>
	    	</header>
    		<transition name="fade" mode="in-out">
	    		<section v-if="!isBeginTest" class="main-desc">
					<div class="test-img">
						<img :src="testContent.img_url">
					</div>
					<div class="test-desc">
						{{ testContent.desc }}
					</div>
					<div class="begin-test" @click.stop="beginTest">
						点击开始测试
					</div>
				</section>
				<section v-else class="question">
					<div class="q-list">
							<div class="title">
								<span>{{currentIndex}}/{{total}}：</span>
								<span>{{ currentQuestion.desc }}</span>
							</div>
							<div class="img" v-if="currentQuestion.img_url">
								<img :src="currentQuestion.img_url"/>
							</div>
							<ul class="answers">
								<li v-for="item in currentQuestion.option" class="answers-item" @click.stop="choiceAnswer(currentQuestion.id,item)">{{item.desc}}</li>
							</ul>
					</div>
				</section>
			</transition>
    	</template>
		<template v-else>
			<section  class="result">
				<div class="r-title">
					长按结果卡片分享给朋友
				</div>
				<div class="r-img">
					<img :src="result.img_url">
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
                channel: commonFn.getParams()["channel"]||localStorage.getItem('channel')||"",
				testId:commonFn.getParams()['id']||1,
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                isBeginTest:false,
                questions:[],
                testContent:{},
                currentQuestion:{},
                userAnswers:[],
                total:1,
                currentIndex:1,
                isShowResult:false,
				result:{},
                preLoadImages:[],
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
			async getTestAsk(){
			    await myAjax.get(apiPath.getTestAsk,{test_id:this.testId}).then(
			        res => {
			            this.questions = res;
						this.currentQuestion = this.questions[0];
						this.currentIndex = 1;
						this.total = this.questions.length;
                        // 图片的url提前预加载
                        if( res.length ){
                            res.forEach( val => {
                                this.preLoadImages.push(val.img_url);
                            } );
                            this.preLoader();
                        }
					}
				)
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
		this.getTestAsk();
    },
    mounted() {
        this.share();
        // this.getIsTest();
        addStatisticsCode();
    }
    }
</script>
