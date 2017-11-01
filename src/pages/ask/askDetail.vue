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
            }
        }
        .ask-press{
            width:200px;
            background:@mainColor;
            color:#fff;
            line-height:60px;
            text-align:center;
            border-radius:10px;
            margin:0 auto;
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

        .rewarded{
            text-align:left;
            color:#666;
            font-size:26px;
            span{
                color:@mainColor;
            }
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
                            <span>{{ rewardNickname }}</span>很感激您的回答，打赏您 <span id="reward-money"></span>元作为感谢金，该笔打赏金已自动计入您的收入
                        </div>
                    </li>
                    <li class="ask-item" v-for="(item,index) in askAgainData.ask_press">
                        <h5 class="middle-text">追问：</h5>
                        <p class="big-text">{{ item.ask_content }}</p>
                        <template v-if="item.image_info && item.image_info.length > 0">
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
                        <div class="ask-press" v-if="item.status == 1" @click.stop.prevent="goToAskPress(item.id)">
                            回答追问
                        </div>
                    </li>
                </ul>
            </section>
            <section class="evaluate" v-if="isShowEvaluateCom">
                <Evaluate :ask_id="ask_id"
                          @layer="layer"
                          @showLoading="showLoading"
                          @hideLoading="hideLoading"
                          :evaluateObj="evaluateObj"
                ></Evaluate>
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
    import startShow from '../../common/components/startCompontent.vue';
    import myAjax from '../../common/js/request';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            Avatar,
            AudioControl,
            ImageShow,
            Evaluate,
            startShow,
            LoadingModel,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 问题id
                ask_id: commonFn.getParams()["ask_id"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                wxConfig: {},
                isShowEvaluateCom:false,
                recommendList:[], // 推荐老师列表
                // 评论的数据
                evaluateObj:{
                    isCanEvaluate:2,
                    is_evaluate:"1",
                    start:4,
                    content:'',
                    is_recommend:0
                },
                rewardNickname:'',// 打赏姓名
                rewardAmount:0, // 打赏金额
                // 问题详情的数据
                askAgainData:{},
                // 音频禁止播放标示
                pausedAudio:[false,false,false],
            }
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        methods: {
            //点击li后的页面跳转
            goToPage:function( event,id ){
                var target = event.currentTarget;
                var url = target.getAttribute("data-url");
                location.href = url;
            },
            layer(text,time){
                layer.bind(this,text,time)();
            } ,
            showLoading(text){
                showLoading.bind(this,text)();
            },
            hideLoading(){
                hideLoading.bind(this)();
            },

            // 页面跳转至答主首页
            gotoAnswerIndex(id){
                location.href = '/home/user/index?answer_uid=' + id;
            },
            // 跳转回答页面
            goToAskPress(id){
                location.href = '/home/me/answer?type=press&ask_id=' + id;
            },
            // 跳转至追问页面
            gotoPressPage(){
                location.href = "/home/ask/askpress?answer_uid=" + this.askAgainData.ask.answer_uid + "&pressId=" + this.ask_id + "&photoNum=" + this.askAgainData.ask_image_num;
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

            // 获得问题的内容
            async getAskAgainData(){
                let data = {
                        ask_id:this.ask_id
                    };
                await myAjax.get(apiPath.getAskAgain,data)
                        .then(res=>{
                            this.askAgainData = res;
                        })
                        .catch( e => { this.layer(e) } );
            },
            // 获得用户针对问题的打赏金额
            async getUserAskReward(){
                let data = {
                        ask_id:this.ask_id
                    }
                await myAjax.get(apiPath.getAskAgain,data)
                        .then( res => {
                            this.rewardAmount = res.amount ? parseFloat(res.amount) : 0;
                            this.rewardNickname = res.nickname;

                        })
                        .catch( e => { this.layer(e) } );
            },

            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                let channleStr =  commonFn.getChannelStr();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href + channleStr,
                });
            },
    },
    async created() {
        this.getUserAskReward();
        await this.getAskAgainData();
        if( this.askAgainData.ask_evaluate && this.askAgainData.ask_evaluate.length ){
            this.isShowEvaluateCom = true;
            this.evaluateObj.content = this.askAgainData.ask_evaluate[0].content;
            this.evaluateObj.start = this.askAgainData.ask_evaluate[0].rank;
        }
        // 动态添加统计代码
        this.share();
        addStatisticsCode();
    }
    }
</script>
