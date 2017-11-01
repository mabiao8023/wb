<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";

    .big-text{
        font-size: 28px;
        text-align: justify;
        line-height: 1.5;
        color: #151515;
    }
    .middle-text{
        color: #999;
        font-size: 26px;
        line-height:1.5;
    }
    .small-text{
        color: #999;
        font-size: 24px;
        line-height:1.5;
    }

    .page-container{
        padding-bottom:100px;
        .ask-detail{
            padding:30px;
            background:#fff;
            .user{
                .avatar{
                    margin-right:20px;
                    float:left;
                }
                .content{
                    overflow: hidden;
                }
            }
            .answer{
                padding-top:10px;
                .avatar{
                    margin-right:20px;
                    display:inline-block;
                }
                .audio{
                    display:inline-block;
                    vertical-align: middle;
                }
            }
            .numbers{
                display:flex;
                margin-top:20px;
                justify-content: space-between;
            }
        }

        .answer-container{
            padding:30px;
            background:#fff;
            margin-top:10px;
            .left{
                margin-right:20px;
            }
            .center{
                line-height:1.5;
                .nickname{
                    font-size:28px;
                    color:#151515;
                }
                .job-title{
                    font-size:26px;
                    color:#999;
                }
                overflow: hidden;
            }
            .right{
                button{
                    width:120px;
                    line-height:50px;
                    border-radius:10px;
                    margin-top:10px;
                    text-align:center;
                    outline:none;
                    border:none;
                    color:#fff;
                    background:@mainColor;
                    &:hover{
                        opacity: .9;
                    }
                }
            }
        }

        .recommend{
            .title{
                padding:10px 30px;
                font-size:28px;
            }
            .content{
                padding:30px;
                background:#fff;
            }
        }
    }

</style>
<template>
    <div class="page-container" >
        <div v-if="askData.ask">
            <section class="ask-detail">
                <div class="user">
                    <div class="avatar">
                        <Avatar :avatarSrc="askData.ask_user.avatar"
                                :isHasScore="false"
                        ></Avatar>
                    </div>
                    <div class="content big-text">
                        {{ askData.ask }}
                        <!--图片展示组件-->
                        <template v-if="askData.image_info.length > 0">
                            <ImageShow :image_info="askData.image_info"></ImageShow>
                        </template>
                    </div>
                </div>
                <div class="answer">
                    <div class="avatar" @click.stop.prevent="gotoAnswerIndex(askData.answer_user.id)">
                        <Avatar :avatarSrc="askData.answer_user.avatar"
                                :isHasScore="true" :score="askData.answer_user.score | formateScore"
                        ></Avatar>
                    </div>
                    <div class="audio" >
                        <!--layer,showLoading,hideLoading 自定义事件用来传子组件触发父组件中的提示组件-->

                        <AudioControl v-if="mediaSrc" @layer="layer"
                                      @showLoading="showLoading"
                                      @hideLoading="hideLoading"
                                      :src="mediaSrc"
                                      :isPaused="false"
                                      :time="askData.media_time"
                        ></AudioControl>
                        <!--当前组件的事件属性要指定为原生的-->
                        <AudioShow @click.native.stop.prevent="isPayed" v-else :fee_touting="askData.fee_touting" :time="askData.media_time"></AudioShow>
                    </div>
                </div>
                <div class="numbers small-text">
                    <div class="ask-time">
                        {{ askData.answer_time }}
                </div>
                    <div>
                        听过 {{ askData.touting }}
                </div>
                </div>
            </section>
            <section class="answer-container cf" @click.stop.prevent="gotoAnswerIndex(askData.answer_user.id)">
                <div class="left fl">
                    <Avatar :avatarSrc="askData.answer_user.avatar"
                            :answerUid="askData.answer_user.id"
                            :isHasScore="true" :score="askData.answer_user.score | formateScore"
                    ></Avatar>
                </div>
                <div class="right fr">
                    <button>提问</button>
                </div>
                <div class="center">
                    <p class="nickname">{{ askData.answer_user.nickname }}</p>
                    <p class="job-title">{{ askData.answer_user.job_title }}</p>
                </div>
            </section>
            <section class="recommend" v-if="randAskData.ask">
                <h1 class="title">值得一听</h1>
                <div class="content" @click.stop.prevent="gotoAskIndex(randAskData.id)">
                    <div class="ask big-text">
                        {{ randAskData.ask }}
                     </div>
                    <div class="middle-text">
                        {{ randAskData.answer_user.nickname }} | {{ randAskData.answer_user.job_title }}
                     </div>
                    <div class="small-text cf">
                    <span class="fl">
                       {{ randAskData.answer_time }}
                    </span>
                        <span class="fr">
                        听过 {{ randAskData.touting }}
                    </span>
                    </div>
                </div>
            </section>
        </div>

        <ComFooter current="1"></ComFooter>
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
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import AudioShow from '../../common/components/audioShowCompontent.vue'
    import AudioControl from '../../common/components/audioControlCompontent.vue'
    import ImageShow from '../../common/components/imageShow.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request';
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            Avatar,
            AudioShow,
            AudioControl,
            ImageShow,
            LoadingModel
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 问题id
                askId: commonFn.getParams()["ask_id"]||"",

                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                // shareConfig: wxShareConfig,
                wxConfig: {},
                isShowAudioCtrCom:false,
                mediaSrc:'',
                isPaused:false,
                askData:{
                    answer_user:{},
                    ask_user:{}
                }, // 问题内容
                randAskData:{
                    answer_user:{}
                },
            }
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
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
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                let channleStr =  commonFn.getChannelStr();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    title:this.askData.answer_user.nickname + '回答了“' + this.askData.ask + '”',
                    img_url:this.askData.avatar,
                    link:location.href + channleStr
                });
            },
            // 判断是否已经支付过该问题
            async isPayed(){
                let that = this;
				this.showLoading('加载中...');
                await myAjax.post( apiPath.touting,{ask_id:this.askId} )
					.then( res => {
						// 调微信支付
						if( res.media_id ){
							this.audioControl(res.media_id);
							return;
						}
						if( res.jsApiParameters && res.out_trade_no ){
//                            this.wxPay(res.data.jsApiParameters,res.data.out_trade_no)
							commonFn.wxPay({
								wxPayConf:res.jsApiParameters,
								successCb:that.wxPaySuc.bind(that,res.out_trade_no),
								failCb:that.layer.bind(that,'支付失败，请重试'),
								cancelCb:that.layer.bind(that,'支付失败，请重试')
							});
						}
					} ).catch( e => this.layer( e ) );
				this.hideLoading();
            },
            // 支付成功
            async wxPaySuc( order_id ){
                let data = {
                   order_id:order_id
                };
                await myAjax.post( apiPath.toutingPaySuc,data )
                        .then(res => {
							this.isPayed();
                        })
                        .catch( e => { this.layer(e) } );
            },
            // 设置音频组件播放信息
            audioControl(media_id){
                this.mediaSrc = media_id;
                this.isPaused = true;
            },

            // 获取问题接口
            async getAskData(){
               this.showLoading('加载中...');
               let data = {
                   ask_id:this.askId
               }
               await myAjax.get( apiPath.getAsk,data )
                   .then( res => {
                       this.askData = res.ask;
                       this.mediaSrc = res.ask.media_id;
                   } )
                   .catch( e => { this.layer(e) } );
               this.hideLoading();
            },
            // 获取随机问题接口
            async getRandAskData(){
                await myAjax.get( apiPath.randAsk )
                    .then( res => this.randAskData = res.rand_ask )
                    .catch( e => { this.layer(e) } );
            },

            // 页面跳转至问题页面
            gotoAskIndex(id){
                location.href = `/home/ask?ask_id=${id}`;
            },
            gotoAnswerIndex(id){
                location.href = `/home/user/index?answer_uid=${id}`;
            }

    },
    created: async function() {
        this.getAskData();
        await this.getRandAskData();
        this.share();
    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
