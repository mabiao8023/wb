<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";

    .page-container{
        min-height:100%;
        background:#fff;
        padding-bottom:50px;
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
					你的左右脑分别有几岁？
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
						2390万人在测
					</span>
				</div>
	    	</header>
    		<transition name="fade" mode="in-out">	
	    		<section v-if="!isBeginTest" class="main-desc">
					<div class="test-img">
						<img src="../../image/test-banner.jpg">
					</div>
					<div class="test-desc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
					<div class="begin-test" @click.stop="beginTest">
						点击开始测试
					</div>
				</section>
				<section v-else class="question">
					<div class="q-list">
			
							<div class="title">
								<span>{{currentIndex}}/{{total}}：</span>
								<span>{{ currentQuestion.title }}</span>
							</div>
							<div class="img">
								<img :src="currentQuestion.img"/>
							</div>
							<ul class="answers">
								<li v-for="item in currentQuestion.answers" class="answers-item" @click.stop="choiceAnswer(currentQuestion.id,item)">{{item}}</li>
						</ul>
					</div>
				</section>
			</transition>
    	</template>
		<template v-else>
			<section  class="result"> 
				<div class="r-title">
					长按结果分享给朋友
				</div>
				<div r-img>
					<img src="../../image/result.jpg">
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
    import InfiniteLoading from 'vue-infinite-loading';

    import myAjax from '../../common/js/request';
    import myAlertTip from '../../common/components/modelBox.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import ComFooter from '../../common/components/footer.vue';
    import demo1 from '../../image/demo1.jpg';
    import demo2 from '../../image/demo2.jpg';
    import demo3 from '../../image/demo3.png';
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
                isBeginTest:false,
                questions:[
                	{
                		id:1,
                		title:'这个男人的眼fadsf条直线上吗？',
                		img:demo1,
                		answers:[
                			'是',
                			'不是',
                			'oo'
                		]
                	},	
                	{
                		id:2,
                		title:'这个男人的眼asdfsd一条直线上吗？',
                		img:demo2,
                		answers:[
                			'是',
                			'不是'
                		]
                	},
                	{
                		id:3,
                		title:'这个adsfasd眼睛在一条直线上吗？',
                		img:demo3,
                		answers:[
                			'是',
                			'嘿嘿',
                			'不是'
                		]
                	},
                	{
                		id:4,
                		title:'asdfadsf人的眼睛在一条直线上吗？',
                		img:demo2,
                		answers:[
                			'是',
                			'不是',
                			'哈哈哈'
                		]
                	},
                	{
                		id:5,
                		title:'这个男人sadfasdfasd一条直线上吗？',
                		img:demo1,
                		answers:[
                			'对',
                			'不对',
                			'对不起'
                		]
                	},
                ],
                currentQuestion:{},
                userAnswers:[],
                total:1,
                currentIndex:1,
                isShowResult:false,
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
            // 选择答案
            choiceAnswer(id,item){
            	if( this.currentIndex >= this.total ){
            		// 出结果	
            		this.showLoading('获取结果中');
            		setTimeout(() => {
            			this.hideLoading();
            			this.isShowResult = true;	
            		},500 );
            	}else{
            		this.userAnswers.push(item);
					this.currentQuestion = this.questions[this.currentIndex];
					this.currentIndex += 1;
            	}
            	
            },
            beginTest(){
            	this.isBeginTest = true;
            }

    },
    created(){

    },
    mounted() {
    	this.currentQuestion = this.questions[0];
    	this.currentIndex = 1;
    	this.total = this.questions.length;
    }
    }
</script>
