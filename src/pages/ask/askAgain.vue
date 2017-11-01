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
            .ask-list{
                .ask-item{
                    padding:30px;
                    background:#fff;
                    margin-top:8px;
                    &:first-child{
                        margin-top:0;
                    }
                    .user{
                        display:flex;
                        padding:20px 0;
                        .avatar{
                            margin-right:30px;
                        }
                    }
                    .ask-numbers{
                        .fr{
                            font-size:28px;
                            &.active{
                                color:@mainColor;
                            }
                        }
                    }
                }
                .btns{
                    text-align:right;
                    padding:0 30px;
                    padding-bottom:30px;
                    margin-top:0;
                    font-size:0;
                    .btn-item{
                        display:inline-block;
                        padding-left:50px;
                        padding-right:10px;
                        font-size:30px;
                        border-right:1px solid #e2e2e2;
                        &:last-child{
                            border-right:0;
                        }
                    }
                    .free-press{
                        background:url(../../image/ask.png) no-repeat 10px center/32px 32px;
                    }
                    .evaluate{
                        background:url(../../image/commend_icon.jpg) no-repeat 10px center/32px 32px;
                    }
                    .reward{
                        color:@mainColor;
                        background:url(../../image/give_reward.png) no-repeat 10px center/32px 32px;
                    }
                }
            }
        }

        .answer-container{
            padding:20px 30px;
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

        .recom-answers{
            h1{
                font-size: 26px;
                background: #fff;
                text-align: left;
                text-indent: 0;
                color: #666;
                padding-left: 24px;
                line-height: 80px;
                background: #fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA4CAYAAADevImVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OTlCRUQzREVFMjExRTY4RUE4QkE0RkQ5NDdCOUJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5OTlCRUQ0REVFMjExRTY4RUE4QkE0RkQ5NDdCOUJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTk5OUJFRDFERUUyMTFFNjhFQThCQTRGRDk0N0I5QkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTk5OUJFRDJERUUyMTFFNjhFQThCQTRGRDk0N0I5QkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6SfB/AAAAAfElEQVR42mKUObvsMgMDw1YgngjEzxmggAmIdYC4HIjvAnE8sgQMcALxAiBOQpeAgalALIdNggOIS7BJgIA7Lgk5XBIcuCQYRiVGJUYlRq7ED1wSD3FJ7MAm8R2Ie7FJZADxYyY0lbFAvAjEYQHiC0C8HYing1TCVAEEGADshhPeH75ZzgAAAABJRU5ErkJggg==') no-repeat center left;
                background-size: 10px 52px;
            }
        }
        .guideHighPrize{
            padding:30px;
            font-size:26px;
            span{
                color:@mainColor;
                text-decoration: underline;
            }
        }
        .kf-tip{
            padding:30px;
            background:#fff;
            margin-top:6px;
            h1{
                font-size:30px;
                color:#999;
                text-align:center;
            }
            .kf-img{
                margin:0 auto;
                width:240px;
                margin-top:20px;
            }
        }

        .rewarded{
            text-align:left;
            color:#666;
            font-size:26px;
            .goOnReward{
                display:inline-block;
                text-align: center;
                margin-top:10px;
                margin-left:10px;
                width: 2.03rem;
                height: .78rem;
                line-height: .78rem;
                color: #fff;
                background:@mainColor;
                border-radius: 10px;
            }
        }
    }
</style>
<template>
    <div class="page-container" >
        <div v-if="askAgainData.ask">
            <section class="ask-detail">
                <ul class="ask-list">
                    <li class="ask-item">
                        <p class="big-text">{{askAgainData.ask.ask}}</p>
                        <template v-if="askAgainData.ask.image_info.length > 0">
                            <ImageShow :image_info="askAgainData.ask.image_info"></ImageShow>
                        </template>
                        <div class="user" v-if="askAgainData.ask.status == 2">
                            <div class="avatar">
                                <Avatar :avatarSrc="askAgainData.ask.answer_user.avatar"
                                        :isHasScore="true" :score="askAgainData.ask.answer_user.score | formateScore"
                                ></Avatar>
                            </div>
                            <div class="audio-control" data-id="0" @click="audioClick(0)">
                                <AudioControl @layer="layer"
                                              @showLoading="showLoading"
                                              @hideLoading="hideLoading"
                                              :src="askAgainData.ask.answer"
                                              :isPaused="pausedAudio[0]"
                                              :time="askAgainData.ask.media_time"
                                ></AudioControl>
                            </div>
                        </div>
                        <div class="ask-numbers cf small-text" >
                            <span v-if="askAgainData.ask.status == 2"> {{ askAgainData.ask.answer_time }}  听过 {{ askAgainData.ask.touting }} </span>
                            <span class="isAsked fr active" > {{ askAgainData.ask.status == 2 ? '已回答': '待回答' }} </span>
                        </div>
                        <div class="rewarded" v-if="rewardAmount != 0">
                            <span>您打赏了老师{{ rewardAmount }}元</span><span class="goOnReward" @click.stop.prevent="gotoReward">继续打赏</span>
                        </div>
                    </li>
                    <li class="ask-item" v-for="(item,index) in askAgainData.ask_press">
                        <h5 class="middle-text">追问：</h5>
                        <p class="big-text">{{ item.ask_content }}</p>
                        <template v-if="item.image_info.length > 0">
                            <ImageShow :image_info="item.image_info"></ImageShow>
                        </template>
                        <div class="user" v-if="item.status == 2">
                            <div class="avatar">
                                <Avatar :avatarSrc="askAgainData.ask.answer_user.avatar"
                                        :isHasScore="true" :score="askAgainData.ask.answer_user.score | formateScore"
                                ></Avatar>
                            </div>
                            <div class="audio-control" :data-id="index + 1" @click="audioClick(index + 1)">
                                <AudioControl @layer="layer"
                                              @showLoading="showLoading"
                                              @hideLoading="hideLoading"
                                              :src="item.answer"
                                              :isPaused="pausedAudio[index + 1]"
                                              :time="item.media_time"
                                ></AudioControl>
                            </div>
                        </div>
                        <div class="ask-numbers cf small-text">
                            <span v-if="item.status == 2"> {{ item.answer_time }} </span>
                            <span class="isAsked fr active"> {{ item.status == 2 ? '已回答': '待回答' }} </span>
                        </div>
                    </li>
                    <li class="ask-item btns" v-if="askAgainData.ask.status == 2">
                        <div class="btn-item free-press" v-if="isCanFreePress" @click.stop.prevent="gotoPressPage">
                            免费追问
                        </div>
                        <div class="btn-item evaluate" v-if="evaluateObj.isCanEvaluate == 1" @click.stop.prevent="showEvaluate">
                            评价
                        </div>
                        <div class="btn-item reward" v-if="rewardAmount == 0" @click.stop.prevent="gotoReward">
                            打赏
                        </div>
                    </li>
                </ul>
            </section>
            <section class="guideHighPrize">
                您的问题还未得到解决吗？您还可以 <span @click.stop.prevent="gotoAnswerHighIndex(askAgainData.ask.answer_uid)">点击预约</span>老师的长时间服务
        </section>
            <transition name="fade" mode="in-out">
                <section class="evaluate" v-if="isShowEvaluateCom">
                    <Evaluate :ask_id="ask_id"
                              @layer="layer"
                              @showLoading="showLoading"
                              @hideLoading="hideLoading"
                              :evaluateObj="evaluateObj"
                    ></Evaluate>
                </section>
            </transition>
            <!--推荐老师列表-->
            <section class="recom-answers" v-if="recommendList.length > 0">
                <h1>您还可以咨询其他老师的意见</h1>
                <ul>
                    <li v-for="(item,index) in recommendList" @click.stop.prevent="gotoAnswerIndex(item.id)">
                        <div class="answer-container cf">
                            <div class="left fl">
                                <Avatar :avatarSrc="item.avatar"
                                        :isHasScore="true" :score="item.score | formateScore"
                                ></Avatar>
                            </div>
                            <div class="right fr">
                                <button>提问</button>
                            </div>
                            <div class="center">
                                <p class="nickname">{{ item.nickname }}</p>
                                <p class="job-title">{{ item.job_title }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <!-- 二维码提示 -->
            <section class="kf-tip">
                <h1>长按识别老师助手二维码，咨询更多问题</h1>
                <div class="kf-img">
                    <img src="../../image/yiqiwen-kefu.jpg">
                </div>
            </section>
        </div>

        <ComFooter current="3"></ComFooter>
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
    import { ajaxHandle } from '../../common/js/myAjaxHandle';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import AudioControl from '../../common/components/audioControlCompontent.vue'
    import ImageShow from '../../common/components/imageShow.vue';
    import Evaluate from '../../common/components/evaluateCompontent.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            Avatar,
            AudioControl,
            ImageShow,
            Evaluate,
            LoadingModel,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 问题id
                ask_id: commonFn.getParams()["ask_id"]||"",
                // 提示处理
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                wxConfig: {},
                isShowEvaluateCom:false,
                recommendList:[], // 推荐老师列表
                // 评论的数据
                evaluateObj:{
                    isCanEvaluate:0,
                    is_evaluate:"1",
                    start:4,
                    content:'',
                    is_recommend:1
                },
                rewardAmount:0, // 打赏金额
                // 问题详情的数据
                askAgainData:{},
                // 音频禁止播放标示
                pausedAudio:[false,false,false]
            }
        },
        computed:{
            // 是否可以显示追问按钮
            isCanFreePress:function(){
                if( this.askAgainData.ask_press_num >= 2 ){
                    return false;
                }else if( this.askAgainData.answer_uid == '7963' && this.askAgainData.ask_press_num == 1){
                    // 针对麦玲玲的处理
                    return false;
                }else{
                    return true;
                }
            },
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
                let channel = localStorage.getItem('channel');
                let channelStr = channel ? `&channel=${channel}`:'';
                commonFn.wxShare({
                    wxConfig:wxParams,
                    title:'我问了一个问题，快来偷听吧',
                    desc:'',
                    link:location.protocol + '//' + location.hostname  + '/home/ask?ask_id=' + this.ask_id  + channelStr,
                    imgUrl:this.askAgainData.ask.ask_user.avatar
                });
            },

            // 获取评论接口
            // 获取评论信息
            async getEvaluate(){
                let data = {
                    ask_id:this.ask_id
                };
                await myAjax.get( apiPath.getEvaluate,data )
                    .then( res => {
                        // 评论的位置
                        this.evaluateObj.is_evaluate = res.is_evaluate;
                        // 评论的状态
                        this.evaluateObj.isCanEvaluate = res.status;
                        if( res.status == 2 ){
                            this.evaluateObj.start = res.list.rank;
                            this.evaluateObj.content = res.list.content;
                            this.evaluateObj.is_recommend = res.list.is_recommend;
                            this.isShowEvaluateCom = true;
                        }else{
                            this.isShowEvaluateCom = false;
                        }
                    } ).catch( e => {} );
            },
            // 页面跳转至答主首页
            gotoAnswerHighIndex(id){
                location.href = '/home/user/index?answer_uid=' + id + '&type=3';
            },
            gotoAnswerIndex(id){
                location.href = '/home/user/index?answer_uid=' + id;
            },
            audioClick(index){
                // 暂停其他的音频元素
                let arr = [];
                for(let i = 0;i < 3;i++){
                    if( i == index ){
                        arr[i] = false;
                    }else{
                        arr[i] = true;
                    }
                }
                this.pausedAudio = arr;
            },

            // 点击后显示评论组件
            showEvaluate(){
                // 未评价
                this.isShowEvaluateCom = !this.isShowEvaluateCom;
            },
            // 获得推荐的老师
            async getRecommend(){
                // 获得推荐老师接口
                let data = {
                    answer_uid: this.askAgainData.ask.answer_user.id,
                    limit:4
                };
                await myAjax.post( apiPath.recommend,data )
                    .then( res => this.recommendList = res )
                    .catch( e => {} )
            },
            // 获得用户针对问题的打赏金额
            async getUserAskReward(){
                let data = {
                        ask_id:this.ask_id
                    }
                await myAjax.get(apiPath.getUserAskReward,data)
                        .then(res=>{
                            this.rewardAmount = res.amount ? parseFloat(res.amount) : 0;
                        })
                        .catch( e => { } );
            },

            // 获得问题的内容
            async getAskAgainData(){
                this.showLoading('加载中...');
                let data = {
                        ask_id:this.ask_id
                }
                await myAjax.get(apiPath.getAskAgain,data)
                        .then(res => this.askAgainData = res)
                        .catch( e => {  } );
                this.hideLoading();
            },
            // 跳转至打赏页面
            gotoReward(){
                location.href = "/home/user/spare?answer_id=" + this.askAgainData.ask.answer_uid + "&ask_id=" + this.ask_id;
            },
            // 跳转至追问页面
            gotoPressPage(){
                location.href = "/home/ask/askpress?answer_uid=" + this.askAgainData.ask.answer_uid + "&pressId=" + this.ask_id + "&photoNum=" + this.askAgainData.ask_image_num;
            }
    },
    async created() {
        await this.getAskAgainData();
        this.getEvaluate();
        this.getRecommend();
        await this.getUserAskReward();
        // 分享
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    },
    mounted() {
    }
    }
</script>
