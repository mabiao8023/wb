<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    body,html{
        background: #ebebeb;
        height: 100%;
    }
    .page-container{
        height: 100%;
        position: relative;
    }

    .avatar_msg{
        margin-top: 10px;
        img{
            width: 80px;
            border-radius: 50%;
            vertical-align: middle;
        }
        .msg{
            max-width: 452px;
            box-sizing: border-box;
            padding: 26px 0;
            padding-left: 20px;
            padding-right: 30px;
            background: #fff;
            min-height: 80px;
            font-size:28px;
            color: #404040;
            text-align: left;
            border-radius: 12px;
            position: relative;
            margin-left: 22px;
            word-wrap:break-word;
            vertical-align: middle;
        }

    }
    .left_msg .msg{
        &:after{
            content:"";
            position:absolute;
            bottom:50%;
            left:-24px;
            border:18px solid transparent;
            border-top-color:#fff;
            border-bottom:0;
            margin: -9px 0 -9px 0;
            transform:rotate(90deg);
        }
    }
    .right_msg .msg{
        margin-left: 0;
        margin-right: 22px;
        background: #30cba8;
        color: #fff;
        &:after{
            content:"";
            position:absolute;
            bottom:50%;
            right:-24px;
            border:18px solid transparent;
            border-top-color:#30cba8;
            border-bottom:0;
            margin: -9px 0 -9px 0;
            transform:rotate(-90deg);
        }
    }
    .chat_msg{
        margin-top:20px;
    }
    .chat_msg:first-child{
        margin-top:0;
    }
    .msg,.img_box{
        display: inline-block;
    }
    .right_msg{
        text-align: right;
    }
    .chat_head{
        height: 110px;
        background: #fff;
        text-align: center;
        line-height: 1.5;
        box-sizing: border-box;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        z-index: 1000;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    .name{
        font-size:28px;
        color: #404040;
    }
    .countDownTips{
        font-size:24px;
        color: #888;
    }
    .countDown{
        color: #30cba8;
    }
    .info_icon{
        position: absolute;
        right: 25px;
        top:30px;
        width: 44px;
        height: 38px;
        background: url("../../image/info-tips.png") no-repeat;
        background-size:100% 100%;
        span{
            position: absolute;
            width: 40px;
            /*height: 36px;*/
            background: #eb4f39;
            border-radius: 50%;
            right: -12px;
            top:-17px;
            color: #fff;
            line-height: 40px;
            font-size:22px;
        }
    }
    .chat_tips{
        font-size:22px;
        flex:1;
        color: #888;
        text-align: center;
        line-height: 1.5;
    }
    .chat_box{
        padding:15px 30px;
    }
    .img_box{
        max-width: 334px;
        margin-top: -20px;
        img{
            width: 100%;
            border-radius: 10px;
            vertical-align:top;
        }
    }
    .img_left_box{
        margin-left: 22px;
        img{
            margin-top: -20px;
        }

    }
    .input_foot{
        position: absolute;
        bottom: 0;
        left:0;
        width: 100%;
        background: #f4f4f4;
        height: 90px;
        line-height: 90px;
        z-index: 1000;
        border-top: 1px solid #e0e0e0;
    }
    /*.audio_msg img{
        margin-top: -58px;
    }*/
    /*.audio_box{
        display: inline-block;
        width:360px;
        min-height:80px;
        text-align:center;
        color:#fff;
        border-radius: 12px;
        background:#fff;
        font-size:28px;
        position:relative;
        box-sizing: border-box;
        color: #a9a9a9;
    }*/
    .audio_msg .msg{
        padding: 0;
    }
    .audio_msg .audio_left_box{
        color: #a9a9a9;
    }
    .audio_msg .audio_right_box{
        color: #ffffff;
    }
    .input_foot,.enter_box,.btn_box,.foot_icon{
        display: inline-block;
        background: #fff;
    }
    .foot_icon_input{
        display: inline-block;
        width: 54px;
        height: 54px;
        vertical-align: middle;
        background:url('../../image/input_icon.png') no-repeat center center/100% 100%;
        margin-left: 20px;
        margin-right: 20px;
    }
    .msg_input,.audio_input,.auding_input{
        width: 420px;
        height: 60px;
        line-height: 60px;
        color:#151515;
        vertical-align: middle;
        display: inline-block;
        background:#fff;
        /*background: #f4f4f4;*/
        border: 1px solid #d2d2d2;
        font-size: 26px;
        color: #777;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        border-radius:4px;
    }
    .audio_input{
        margin: 0;
        padding: 0;
        &.active{
            background:#f4f4f4;
        }
    }
    .audio_input,.auding_input{
        text-align: center;
    }
    .img_icon{
        display: inline-block;
        width: 54px;
        height: 54px;
        vertical-align: middle;
        background:url('../../image/img_icon.png') no-repeat center center/100% 100%;
        margin-left: 26px;
        border: 0;
        outline: none;
    }
    .send_btn{
        width: 80px;
        line-height: 54px;
        height: 54px;
        border-radius: 6px;
        color: #fff;
        background: #30cba8;
        padding: 0;
        border:0;
        margin: 0;
        vertical-align: middle;
        margin-left: 20px;
        font-size:26px;
        outline: none;
    }
    .audio_icon_input{
        width: 54px;
        height: 54px;
        display: inline-block;
        vertical-align: middle;
        background:url('../../image/audio_icon.png') no-repeat center center/34px 53px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .auding_input{
        position: relative;
    }
    .recording_animation{
        position: absolute;
        left:30px;
        top:0;
    }
    .recording_animation span{
        /*display:block;
        width:102px;
        height:102px;
        border-radius:50%;
        padding-top:38px;*/
    }
    .recording_animation span > div{
        width:12.8px;
        height:12.8px;
        border-radius:50%;
        background:#777;
        display:inline-block;
        animation:bouncedelay 1.4s infinite ease-in-out;
        animation-fill-mode:both;
    }
    .recording_animation span .bounce1{
        animation-delay:-0.32s;
    }
    .recording_animation span .bounce2{
        animation-delay:-0.16s;
    }
    @keyframes bouncedelay {
        0%, 80%, 100% {
            transform: scale(0.0);
        } 40% {
            transform: scale(1.0);
        }
    }
    .chat_body{
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        overflow-y:auto;
        position: absolute;
        top:110px;
        bottom: 91px;
        width: 100%;
        left:0;
    }
    .loadBox{
        text-align: center;
        padding-top: 10px;
    }
    .loading{
        width: 36px;
        height: 36px;
        display: inline-block;
        background:url('../../image/juhua.gif') no-repeat center center/100% 100%;
    }
    .ended-pop{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        background:#fff;
        z-index:1000;
        .ended-tip{
            padding:30px;
            border-bottom:2px solid #eee;
            h1{
                font-size:30px;
                color:#333;
                font-weight:bold;
            }
            p{
                margin-top:10px;
                font-size:26px;
                color:#777;
            }
        }
        .ended-btns{
            padding:30px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            div{
                width:240px;
                height:80px;
                line-height:80px;
                border-radius:12px;
                color:#fff;
                font-size:32px;
                font-weight:bold;
                text-align:center;
                background: #30cba8;
            }
            .go-ask-btn{
                background: @mainColor;
            }
        }
        .close{
            width:42px;
            height:42px;
            position:absolute;
            right:20px;
            top:20px;
            background:url(../../image/delete-photo.png) no-repeat center center/100% 100%;
        }
    }
    /*打赏*/
    .reward-box{
        width:480px;
        line-height:70px;
        border-radius:12px;
        color:#fff;
        background:#d4d4d4;
        font-size:26px;
        text-align:center;
        margin:20px auto;
    }
    .reward{
        padding-left:60px;
        background:#d4d4d4 url(../../image/heart.png) no-repeat 20px center/32px 28px;
        .right-arrow{
            display:inline-block;
            width:18px;
            height:28px;
            vertical-align:text-bottom;
            background: url(../../image/right-arrow.png) no-repeat center center/100% 100%;
        }
    }
    .reward-text{
        color:@mainColor;
        font-weight:bold;
    }
    /* 添加消息动画 */
    .msg-animation{
        opacity:1;
        transition:opacity 1s linear;
    }
    /* 上传音频的提示 */
    .send_audio_pop{
        position:absolute;
        width:300px;
        height:300px;
        background:rgba(0,0,0,.8);
        border-radius:10px;
        top:50%;
        left:50%;
        margin-top:-150px;
        margin-left:-150px;
        z-index:200;
        color:#fff;
        text-align:center;
        font-size:26px;
        overflow: hidden;
        .send_audio_section{
            height:220px;
            display:flex;
            .icon{
                flex:1;
                height:100%;
                background:url(../../image/audio-recording.png) no-repeat center center;
                background-size:80px 131px;
                &.cancel{
                    background:url(../../image/audio-cancle-icon.png) no-repeat center center;
                    background-size:102px 131px;
                }
            }
            .animate{
                flex:1;
                height:100%;
                padding-top:35px;
                padding-left:20px;
                /*animation:bouncedelay 1.4s infinite ease-in-out;*/

                .ate_icon{
                    display:block;
                    width:100px;
                    height:18px;
                    background:#fff;
                    margin-top:15px;
                    position:relative;
                    /*transition: all 0.2s linear;*/
                    animation: audioAnimate 1s infinite ease-in-out;
                    animation-fill-mode:both;
                    &::before{
                        content:"";
                        position:absolute;
                        top:0;
                        right:-17px;
                        width:0;
                        height:0;
                        background:transparent;
                        border-left:9px solid #fff;
                        border-bottom:9px solid transparent;
                        border-top:9px solid #fff;
                        border-right:9px solid transparent;
                    }
                }
                .ate_icon1{
                    /*opacity: ;*/
                    animation-delay:-0.08s;
                }
                .ate_icon2{
                    width:82px;
                    animation-delay:-0.16s;
                }
                .ate_icon3{
                    width:64px;
                    animation-delay:-0.32s;
                }
                .ate_icon4{
                    width:46px;
                    animation-delay:-0.64s;
                    animation:none;
                }
            }
        }
    }
    /* 音频动画 */
    @keyframes audioAnimate {
        0%{
            opacity: 1;
        } 100% {
            opacity:0;
        }
    }

    .andio-press{
        background:#eee;
    }

    .send_audio_tip{
        p{
            display:inline-block;
            padding:10px 10px;
            border-radius: 5px;
        }
        .cancel{
            background:rgba(247,95,72,.5);
        }
    }
</style>
<template>
    <div class="page-container" @touch.stop.prevent="">
        <div class="chat_head" id="chat_head">
            <!--<div class="name">{{toUsername}}</div>-->
            <div id="chat_tips" v-if="isTips">
                <div v-if="to_user.type == 2" class="chat_tips">老师正在赶来<br/>请先说明自己的出生年月和出生地</div>
                <div v-if="to_user.type == 1" class="chat_tips">对方不在线，请留言</div>
            </div>
            <div v-if="!isChatEnded" class="countDownTips">
                本次咨询将在 <span class="countDown">{{ countTime }}</span> 秒后关闭
            </div>
            <div v-else class="countDownTips">
                本次会话时间已达上限
            </div>
            <span class="info_icon" @click="toLink()" v-if="count > 0"><span>{{count}}</span></span>
        </div>
        <!--<div @scroll="listScroll($event)" class="chat_body" id="chat_body">-->
        <div class="chat_body" id="chat_body">
            <div id="chat_inner_box">
                <div ref="pullDownLoading" v-if="isShowPullDownLoading">
                    <infinite-loading :on-infinite="pullDown"
                                      :distance="1"
                                      spinner="circles"
                                      direction="top"
                                      ref="infiniteLoading">
                        <span slot="no-results">
                            暂无聊天信息
                        </span>
                        <span slot="no-more">
                            暂无更多聊天信息
                        </span>
                    </infinite-loading>
                </div>
                <div class="chat_box" v-for="(item,index) in chatList">
                    <transition name="fade" mode="in-out">
                        <!--文本信息-->
                        <!--左边带头像信息-->
                        <div class="chat_msg left_msg" :key="'leftText' + index"  v-if="item.leftText">
                            <div class="chat_time">{{item.time}}</div>
                            <div class="avatar_msg">
                                <img :src="toImgUrl" >
                                <div class="msg">{{item.text}}</div>
                            </div>
                        </div>

                        <!--右边不带头像信息-->
                        <div class="chat_msg right_msg" :key="'rightText' +index" v-if="item.rightText">
                            <div class="chat_time">{{item.time}}</div>
                            <div class="avatar_msg">
                                <div class="msg">{{item.text}}</div>
                            </div>
                        </div>

                        <!--图片信息-->
                        <!--左边带头像图片信息-->
                        <div class="chat_msg left_msg" :key="'leftImg' +index" v-if="item.leftImg">
                            <div class="chat_time">{{item.time}}</div>
                            <div class="avatar_msg">
                                <img :src="toImgUrl" >
                                <div @click="bigImg(item.imgUrl)" class="img_box img_left_box">
                                    <img :src="item.imgUrl" >
                                </div>
                            </div>
                        </div>
                        <!--右边不带头像图片信息-->
                        <div class="chat_msg right_msg" :key="'rightImg' +index" v-if="item.rightImg">
                            <div class="chat_time">{{item.time}}</div>
                            <div class="avatar_msg">
                                <div @click="bigImg(item.imgUrl)" class="img_box img_right_box">
                                    <img :src="item.imgUrl" >
                                </div>
                            </div>
                        </div>
                        <!--语音信息-->
                        <!--左边-->
                        <div class="chat_msg left_msg" :key="'leftAudio'+index" v-if="item.leftAudio">
                            <div class="chat_time">{{item.time}}</div>
                            <div class="avatar_msg audio_msg">
                                <img :src="toImgUrl" >
                                <div class="audio_box audio_left_box msg" @click="audioClick(item.id)">
                                    <AudioControl v-if="item.mediaSrc" @layer="layer"
                                                  @showLoading="showLoading"
                                                  @hideLoading="hideLoading"
                                                  :src="item.mediaSrc"
                                                  :isPaused="item.isPaused"
                                                  :time="item.mediaTime"
                                    ></AudioControl>
                                </div>
                            </div>
                        </div>
                        <!--右边-->
                        <div class="chat_msg right_msg" :key="'rightAudio'+index" v-if="item.rightAudio">
                            <div class="chat_time">{{item.time}}</div>
                            <div class="avatar_msg audio_msg">
                                <div class="audio_box audio_right_box msg" @click="audioClick(item.id)">
                                    <AudioControl v-if="item.mediaSrc" @layer="layer"
                                                  @showLoading="showLoading"
                                                  @hideLoading="hideLoading"
                                                  :src="item.mediaSrc"
                                                  :isPaused="item.isPaused"
                                                  :time="item.mediaTime"
                                    ></AudioControl>
                                </div>
                            </div>
                        </div>
                        <!--跳转打赏提示-->
                        <div class="reward reward-box" :key="'leftReward'+index" v-if="(from_user.type == 1) && item.canReward" @click.stop.prevent="gotoReward">
                            <span>动不如行动，可以</span><span class="reward-text">打赏</span><span>表示感谢</span>
                            <span class="right-arrow"></span>
                        </div>
                        <!--用户端已经打赏提示-->
                        <div class="reward-tip reward-box" :key="'rightReward'+index" v-if="from_user.type == 1 && item.rewardTip">
                            <p>您打赏给老师<span class="reward-text">{{ item.rewardAmount }}元</span>向老师表示感谢</p>
                        </div>
                        <!--老师端打赏提示-->
                        <div class="reward-tip reward-box" :key="'centerReward'+index" v-if="from_user.type == 2 && item.rewardTip">
                            <p>{{ to_user.nickname }}打赏给您<span class="reward-text">{{ item.rewardAmount }}元</span>表示感谢</p>
                        </div>
                    </transition>
                </div>
            </div>
        </div>

        <!--<ComFooter current="3"></ComFooter>-->

        <div class="input_foot" id="input_foot">
            <div class="foot_icon" @click="fiiClickEvent">
                <span v-show="!ifShow" class="foot_icon_input"></span>
                <span v-show="ifShow" class="audio_icon_input"></span>
            </div>
            <div class="enter_box">
            <form  v-show="!ifShow"
                   action=""
                   @submit.prevent="handleSend(1,'','')">
                <input
                        class="msg_input"
                        id="inputText"
                        type="text"
                        v-model="msgInput"
                        @focus="handleFocus($event)"
                        @blur="handleBlur($event)"
                        :disabled="isChatEnded"
                >
            </form>
            <div
                    v-show="isFrontAudio"
                    :disabled="audioDisabled || isChatEnded"
                    class="audio_input"
                    ref="audioRecord"
                    :class="{ active : recordStatus > 1 }"
                    @touchstart.stop.prevent=""
                    >
                {{ recordStatus == 1 ? '按住 说话' : recordStatus == 2 ? '松手 结束' : '松开手指,取消发送'}}
            </div>
            <!--录音控制-->
            <!--<div v-show="isAuding" ref="audioRecord" class="auding_input" @click.stop.prevent="stopRecord">-->
            <!--<div v-show="isAuding" ref="audioRecord" class="auding_input">-->
                <!--<span>按住说话</span>-->
                <!--<div class="recording_animation">-->
                    <!--<span>-->
                        <!--<div class="bounce1"></div>-->
                        <!--<div class="bounce2"></div>-->
                        <!--<div class="bounce3"></div>-->
                    <!--</span>-->
                <!--</div>-->
            <!--</div>-->
            </div>
            <button v-show="!isImg" key="img" :disabled="disabled || isChatEnded" ref="sendPhotoBtn" class="img_icon" @click.stop.prevent="chooseImg"></button>
            <button v-show="isImg" key="text" class="send_btn" ref="sendMsgBtn" @click.stop.prevent="handleSend(1,'','')">发送</button>
        </div>
        <!--用户评论-->
        <transition name="fade" mode="in-out">
            <!--<div class="ended-pop" v-if="isShowEvlPop && isChatEnded && (from_user.type == 1)">-->
            <div class="ended-pop" ref="evaluate" v-if="isShowEvlPop && isChatEnded && (from_user.type == 1)">
                <!--<div class="close" @click.stop.prevent="closeEvlPop"></div>-->
                <div class="ended-tip">
                    <h1>问题已自动关闭</h1>
                    <p>请为老师的服务打个分或者您可以选择继续咨询！</p>
                </div>
                <div class="ended-btns">
                    <div class="evl-btn" @click.stop.prevent="toggleEvaluate">
                        {{ evaluateObj.isCanEvaluate == 2 ? '查看':'' }}评价
                    </div>
                    <div class="go-ask-btn" @click.stop.prevent="gotoAnswerIndex">
                        继续咨询
                    </div>
                </div>
                <div class="evaluate" v-if="isShowEvaluateCom">
                    <Evaluate :ask_id="ask_id"
                              @layer="layer"
                              @showLoading="showLoading"
                              @hideLoading="hideLoading"
                              :evaluateObj="evaluateObj"
                              :room_id="this.roomId"
                              :type="2"
                    ></Evaluate>
                </div>
            </div>
        </transition>
        <!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
        <!-- 图片上传组件 -->
        <UploadPhoto ref="uploadPhoto"
                     @layer="layer"
                     @showLoading="showLoading"
                     @hideLoading="hideLoading"
                     @getImgData="getImgDataUrl"
                     @progress="uploadProgress"
                     @uploadResData="uploadResData"
                     :isRepeatUpload="false"
        ></UploadPhoto>
        <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
        <!--上传语音弹窗-->
        <!--<transition name="fade" mode="in-out">-->
            <div class="send_audio_pop" v-if="recordStatus > 1">
                <div class="send_audio_section">
                    <div class="icon" :class="{cancel:recordStatus == 3}">
                    </div>
                    <div class="animate" v-show="recordStatus == 2">
                        <span class="ate_icon ate_icon1"></span>
                        <span class="ate_icon ate_icon2"></span>
                        <span class="ate_icon ate_icon3"></span>
                        <span class="ate_icon ate_icon4"></span>
                        <!--<span class="ate_icon ate_icon5"></span>-->
                    </div>
                </div>
                <div class="send_audio_tip">
                    <p v-show="recordStatus == 2">手指上滑，取消发送</p>
                    <p v-show="recordStatus == 3" class="cancel">松开手指，取消发送</p>
                </div>
            </div>
        <!--</transition>-->
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import socket  from '../../common/js/socket.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import AudioControl from '../../common/components/audioWeChatCompontent.vue'
    import ImageShow from '../../common/components/imageShow.vue';
    import Evaluate from '../../common/components/evaluateCompontent.vue';
    import UploadPhoto from '../../common/components/uploadPhoto.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
	//    import BScroll from 'better-scroll';
    import InfiniteLoading from 'vue-infinite-loading';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            AudioControl,
            ImageShow,
            UploadPhoto,
            LoadingModel,
            InfiniteLoading,
            Evaluate,
        },
        data() {
            return {
                chatList:[

                ],
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 问题id
                ask_id: commonFn.getParams()["ask_id"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                //倒计时
                countDown:'',
                count:0,
                msg: '', // 输入信息框
                socket: undefined,
                mediaSrc:'http://media.yd.linghit.com/voice/20161130/b7ef3505e27d6f4b09eb8d034926352b.mp3',
                //收到信息 判断未读条数
                noRead:{
                    room_id:'',
                    from_uid:'',
                    to_uid:'',
                    msg_id:''
                },
                media_time:'59',
                image_info:[{'thumb_url':'http://img.ggwan.com/yd/userPic/201611/1a73f9d98cb05d2b.jpg'}],
                recordJsApiList:[
                    'previewImage',
                    'startRecord',
                    'stopRecord',
                    'uploadVoice',
                    'onVoiceRecordEnd',
                ],
                //文字语音切换布尔值
                ifShow:false,
                //未语音布尔值切换
                isFrontAudio:false,
                //语音中布尔值切换
                isAuding:false,
                //发送与图片选择布尔值
                isImg:false,
                msgInput:'',
                from_user:{}, // 聊天自己的信息
                to_user:{},  // 对方的用户信息
                fromUid:commonFn.getParams()["from"]||'8aa7ALjk6mubrZHHgN2NGPtRbWNwGsbjMT8KfuRPVXbHdg',
                toUid:commonFn.getParams()["to"]||'0b9faYy0tSlq6UdL8XzXFdphaNysrG_rRFBRA3YsReoOWA',
                //对方头像昵称
                toImgUrl:'',
                toUsername:'',
                //聊天结束时间
                endTime:Date.now(),
                isTips:false,
                roomId:commonFn.getParams()["room"]||1,
                prevId:0,
                mediaUrl:'',
                imgUrl:'',
                isLoading:false,
                list:[1],
                disabled:false,
                audioDisabled:false,
                isShowPullDownLoading:false,
                isShowEvaluateCom:false, // 是否显示评价输入框
                // 评论的数据
                evaluateObj:{
                    isCanEvaluate:1,
                    start:4,
                    content:''
                },
                isChatEnded:false , // 聊天是否结束
                timer:null, // 启动的定时器
                isShowEvlPop:true, // 控制评论弹窗的关闭
                curTime:Date.now(), // 获取到当前时间

                // body滚动之前的高度
                bfscrolltop:0,
                intervalTimer:null,
                recordStatus:1, // 1 -> 尚未开始长按说话 2 -> 长按说话中 3 -> 上滑取消
                recordEleCoords:{}, // 录音文件的距离
                recordEle:null, // 长按说话的元素
            }
        },
        watch:{
            msgInput:function(){
                this.isImg = true;
                if(this.msgInput){
                    this.isImg = true;
                }else{
                    this.isImg = false;
                }
            },
            /*chatList:function(){
                setTimeout(function(){
                    document.getElementById('chat_body').scrollTop = document.getElementById('chat_body').scrollHeight;
                },300)

                //alert(document.getElementById('chat_body'))
            }*/
        },
        computed:{
            // 倒计时显示
            countTime(){
//               let this.endTime
                let leftTime = this.endTime - this.curTime;
                //定义变量 d,h,m,s保存倒计时的时间
                    //d = Math.floor(leftTime/1000/60/60/24);
                if( leftTime <= 0 ){
                    leftTime = 0;
                }
                let h = Math.floor(leftTime/1000/60/60%48),
                    m = Math.floor(leftTime/1000/60%60),
                    s = Math.floor(leftTime/1000%60);

                return h+':'+m+':'+s;
            },
        },
        methods: {
            //跳转至打赏页面
            gotoReward(){
                location.href = `/home/user/spare?answer_id=${this.to_user.id}&ask_id=0&room=${this.roomId}&from=${this.fromUid}&to=${this.toUid}`;
            },
            toggleEvaluate(){
                this.isShowEvaluateCom = !this.isShowEvaluateCom;
            },
            gotoAnswerIndex(){
                location.href = `/home/user/index?answer_uid=${this.to_user.id}&type=3`;
            },
            audioClick(id){
                for(let i=0;i<this.chatList.length;i++){
                    if(this.chatList[i].id == id){
                        this.chatList[i].isPaused = false;
                    }else{
                        this.chatList[i].isPaused = true;
                    }
                }
            },
            toLink(){
                location.href = `/home/chatroom/chatList`
            },
            // 下拉刷新
            pullDown:function(){
                this.prevId = this.chatList[0] ? this.chatList[0].id : 0;
                this.msgList();
            },
            chooseImg(){
                this.$refs['uploadPhoto'].$el.click();
            },
            startRecord(){
//                this.isAuding = true;
//                this.isFrontAudio = false;
                wx.startRecord();
                this.disabled = true;
            },
            stopRecord(){
                wx.stopRecord({
                    success:  ( res ) => {
                        //console.log('localId:',res)
                        this.recordSuc(res)
                    }
                });
                this.disabled = false;
            },
            recordSuc(res){
                this.recordStatus = 1;
                //音频录制结束后上传
                var that = this;
                wx.uploadVoice({
                    localId: res.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        //  var serverId = res.serverId; // 返回音频的服务器端ID
                        // 调用语音上传接口
                        res.serverId && that.uploadMedia(res.serverId);
                    }
                });
            },
            // 上传音频到服务器获得音频的地址
            async uploadMedia(serverId){
                this.showLoading("音频上传中...");
                let data = {media_id:serverId};
                await myAjax.post(apiPath.uploadVideo,data)
                        .then(res=>{
                            this.hideLoading();
                            let audioUrl = res.video_url;
                            let mediaTime = res.media_time;
                            //上传成功后拿到音频url 调用发送语音方法以及切换样式
                            this.isAuding = false;
                            this.isFrontAudio = true;
                            //第二个是图片url,第三个是语音url
                            if( audioUrl ){
                                this.pushMsg('','',audioUrl,mediaTime);
                                this.handleSend(3,'',audioUrl,mediaTime);
                            }else{
                                this.layer('音频出错');
                            }
                        })
                        .catch( e => {
                            this.layer(e)
                            // 录音上传失败
                            this.isAuding = false;
                            this.isFrontAudio = true;
                            this.layer('音频上传失败');
                        } );
            },
            fiiClickEvent:function(){
                if( this.isChatEnded ){
                    return;
                }
                if(this.ifShow){
                    this.ifShow = false;
                    this.isFrontAudio = false;
                    if(this.isAuding){
                        this.ifShow = true;
                        this.isFrontAudio = true;
                        this.isAuding = false;
                    }
                }else{
                    this.ifShow = true;
                    this.isFrontAudio = true;
                }

            },
            bigImg:function(imgUrl){
                wx.previewImage({
                    current: imgUrl, // 当前显示图片的http链接
                    urls: [imgUrl] // 需要预览的图片http链接列表
                });
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
            initSocket(){
                this.socket = socket();
                this.showLoading('聊天连接中...');
                console.log(this.socket);
                this.socket.addEventListener('open', () => {
                    this.hideLoading();
                    console.log('连接成功');
                    var bindData = {
                        "type": "bind",
                        "room_id":this.roomId,
                        "from_uid": this.fromUid,
                        "to_uid": this.toUid,
                        "time": this.time,
                        "data": {

                        },
                    }
                    this.socket.send( JSON.stringify( bindData ) );
                    console.log("打印返回")
                    this.isShowPullDownLoading = true;
                //                    this.msgList();
                    this.msgNoReadNum();
                })

                this.socket.addEventListener('error', ( err ) => {
                    this.hideLoading();
                    this.reConnectWs();
                })
                //console.dir(this.socket)

                this.socket.addEventListener('close', (err) => {
                    this.reConnectWs();
                })

                this.socket.addEventListener('message', (e) => {
                    var result = JSON.parse( e.data );
                    console.log(result);
                    switch(result.type){
                    case 'roomInfo':
                        this.handleSpeak(result.data);
                        break;
                    case 'isToUserOnline':
                        this.handleOnline(result)
                        break;

                    case 'sendMsg':
                        this.handleSendText(result)
                        break;
                    case 'msgList':
                        this.handleList(result);
                        break;
                    case 'msgNoReadNum':
                        this.handleReadNum(result);
                        break;
                    case 'requestError':
//                        this.layer('聊天室数据发送失败');
//                        this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                        break;
                    default:
                        break;
                    }
                })
            },
            reConnectWs(){
                let reConNums = localStorage.getItem('reConnectNums');
                if( !reConNums || reConNums <= 3 ){
                    this.layer(`服务器连接失败，将尝试第${reConNums}次重连`)
                    setTimeout(()=>{
                        location.reload(true);
                        localStorage.setItem('reConnectNums',reConNums++);
                    },1500)
                }else{
//                    localStorage.setItem('reConnectNums',1);
                    this.layer('尝试重连失败，请检查网络连接是否正常')
                }
            },
            msgNoReadNum(){
                var data = {
                    "type": "msgNoReadNum",
                    "room_id":this.roomId,
                    "from_uid": this.fromUid,
                    "to_uid": this.toUid,
                    "time": this.time,
                    "data": {

                    },
                }
                this.socket.send( JSON.stringify( data ) );
            },
            handleReadNum(data){
                this.count = data.data.no_read_msg_num;
                if(this.count > 99){
                    this.count = '99+'
                }
                /*this.noRead.room_id = data.room_id;
                this.noRead.from_uid = data.from_uid;
                this.noRead.to_uid = data.to_uid;
                if(this.roomId !== data.room_id){
                    this.count = this.count + 1;
                    this.msgNoRead();
                }*/
            },
            /*msgNoRead(){
                var data = {
                    "type": "msgNoRead",
                    "room_id":this.roomId,
                    "from_uid": this.fromUid,
                    "to_uid": this.toUid,
                    "time": this.time,
                    "data": {
                        'room_id': this.noRead.room_id, //房间id
                        'from_uid': this.noRead.from_uid,   //发送消息的人
                        'to_uid': this.noRead.to_uid,     //接收消息的人(即你自己)
                        'msg_id': this.noRead.msg_id
                    },
                }
                this.socket.send( JSON.stringify( data ) );
            },*/
            handleList(data){
                var list = [];
                // 获得当前的滚动高度
                let startHeight = document.getElementById('chat_inner_box').offsetHeight;
                console.log(startHeight);
                list = data.data.list;
                this.list = data.data.list;
                if( list.length > 0 ){
                    list.forEach( (val,i) => {
                        var obj = {
                            leftText:false,
                            rightText:false,
                            leftImg:false,
                            rightImg:false,
                            leftAudio:false,
                            rightAudio:false,
                            canReward:false,
                            rewardTip:false,
                            id:0,
                            time:'',
                            imgUrl:'',
                            text:'',
                            mediaSrc:'',
                            mediaTime:'',
                            isPaused:false
                        };
                        obj.time = commonFn.dateFormat(val.create_time);
                        obj.imgUrl = val.img_url;
                        obj.text = val.text;
                        obj.mediaSrc = val.media_src;
                        obj.id = val.id;
                        obj.mediaTime = val.media_time;
                        obj.rewardAmount = val.reward_amount;
                        if( val.is_me == 1 ){
                            switch(val.msg_type){
                                case 1:
                                    obj.rightText = true;
                                    break;

                                case 2:
                                    obj.rightImg = true;
                                    break;

                                case 3:
                                    obj.rightAudio = true;
                                    break;
                                case 4:
                                    obj.canReward = true;
                                    break;
                                case 5:
                                    obj.rewardTip = true;
                                    break;
                                default:
                                    break;

                            }
                        }else{
                            switch(val.msg_type){
                                case 1:
                                    obj.leftText = true;
                                    break;

                                case 2:
                                    obj.leftImg = true;
                                    break;

                                case 3:
                                    obj.leftAudio = true;
                                    break;
                                case 4:
                                    obj.canReward = false;
                                    break;
                                case 5:
                                    obj.rewardTip = true;
                                    break;
                                default:
                                    break;
                            }
                        }
                        this.chatList.unshift(obj);
                    },this )

                    this.$nextTick(() => {
                        this.$refs["infiniteLoading"].$emit("$InfiniteLoading:loaded");
                        if(this.prevId == 0){
                            document.getElementById('chat_body').scrollTop = document.getElementById('chat_body').scrollHeight;
                        }else{
                            let endHeight = document.getElementById('chat_inner_box').offsetHeight;
                            let scrollHeight = endHeight - startHeight;
                            document.getElementById('chat_body').scrollTop =  scrollHeight;
                        }
                    })
                }else{
                    this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                }
                // 发送打赏消息
                if(this.prevId == 0){
                    let rewardAmount = localStorage.getItem('rewardAmount');
                    if( rewardAmount ){
                        this.handleSend(5,'','','',rewardAmount);
                    }
                }
            },
            msgList(){
                var data = {
                    "type": "msgList",
                    "room_id":this.roomId,
                    "from_uid": this.fromUid,
                    "to_uid": this.toUid,
                    "time": this.time,
                    "data": {
                        "prev_id": this.prevId,  //前一条消息的id
                    },
                }
                this.socket.send( JSON.stringify( data ) );
            },
            handleSendText(data){
                var obj={
                    leftText:false,
                    rightText:false,
                    leftImg:false,
                    rightImg:false,
                    leftAudio:false,
                    rightAudio:false,
                    canReward:false,
                    rewardTip:false,
                    id:0,
                    time:'',
                    imgUrl:'',
                    text:'',
                    mediaSrc:'',
                    mediaTime:'',
                    isPaused:false
                };
                if(data.code == '0001'){
                    obj.time = commonFn.dateFormat(data.time);
                    obj.text = data.data.text;
                    obj.id = data.data.id;
                    obj.imgUrl = data.data.img_url;
                    obj.mediaSrc = data.data.media_src;
                    obj.mediaTime = data.data.media_time;
                    this.noRead.msg_id = data.data.id;
                    obj.rewardAmount = data.data.reward_amount;
                    if(data.data.is_me == 1){
                        switch(data.data.msg_type){
                            case 1:
                                obj.rightText = true;
                                break;

                            case 2:
                                obj.rightImg = true;
                                break;

                            case 3:
                                obj.rightAudio = true;
                                break;
                            case 4:
                                obj.canReward = true;
                                break;
                            case 5:
                                obj.rewardTip = true;
                                break;
                            default:
                                break;
                        }
                    }else{
                        switch(data.data.msg_type){
                            case 1:
                                obj.leftText = true;
                                break;

                            case 2:
                                obj.leftImg = true;
                                break;

                            case 3:
                                obj.leftAudio = true;
                                break;
                            case 4:
                                obj.canReward = false;
                                break;
                            case 5:
                                obj.rewardTip = true;
                                break;
                            default:
                                break;
                        }
                    }
                    if(data.data.is_me == 0){
                        this.chatList.push(obj)
                    }
                    if(data.data.is_me == 1){
                        if(data.data.msg_type == 4 || data.data.msg_type == 5){
                            this.chatList.push(obj)
                        }
                    }
                    //this.chatList.push(obj)

                    this.$nextTick(() => {
                        document.getElementById('chat_body').scrollTop = document.getElementById('chat_body').scrollHeight;
                    })
                }
            },
            handleSpeak(data){
                if( data.to_user ){
                    this.toImgUrl = data.to_user.avatar;
                    this.toUsername = data.to_user.nickname;
                    this.endTime = data.room_close_time*1000;
                    this.from_user = data.from_user;
                    this.to_user = data.to_user;
                    this.curTime = Date.now();
                    this.timeHandle();
                    // 设置title为用户的信息
                    this.setTitle()
                }
            },
            setTitle(){
                let title = document.getElementsByTagName('title')[0];
                title.textContent = this.toUsername;
//                console.log(title);
            },
            timeHandle(){
                if( this.timer ){
                    clearInterval(this.timer);
                    this.timer = null;
                    return;
                }
                this.timer = setInterval( () => {
                    this.endTime -= 1000;
                    if( this.endTime < this.curTime ){
                       // 聊天结束
                        // 判断评价状态
                        this.isChatEnded = true;
                        this.isTips = false;
                        // 设置聊天框的高度,获取聊天信息
                        this.from_user.type == 1 && this.setChatBodyHeight();
                        this.from_user.type == 1 && this.getConsStatus();
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                },1000);
            },
            // 设置聊天框的高度
            setChatBodyHeight(){
                this.$nextTick( () => {
                    let height = this.$refs.evaluate.offsetHeight;
                    let chat_body = document.getElementById('chat_body');
                    chat_body.style.bottom = height + 'px';
                })
            },
            handleOnline(data){
                if( data.code === '0001' ){
                    this.isTips = false;
                }else{
                    this.isTips = true;
                   /* this.tip.isShow = true;
                    this.tip.text = data.msg;*/
                }
            },
            time(){
                var timestamp = new Date().getTime();
                return parseInt(timestamp/1000);
            },
            pushMsg(text,imgUrl,mediaSrc,mediaTime){
                var obj={
                    leftText:false,
                    rightText:false,
                    leftImg:false,
                    rightImg:false,
                    leftAudio:false,
                    rightAudio:false,
                    canReward:false,
                    rewardTip:false,
                    id:0,
                    time:'',
                    imgUrl:'',
                    text:'',
                    mediaSrc:'',
                    mediaTime:'',
                    isPaused:false
                };
                obj.text = text;
                obj.mediaSrc = mediaSrc;
                obj.mediaTime = mediaTime;
                obj.imgUrl = imgUrl;
                if(text){
                    obj.rightText = true;
                }else if(imgUrl){
                    obj.rightImg = true;
                }else if(mediaSrc){
                    obj.rightAudio = true;
                }else{
                    return false
                }
                if(this.socket.readyState == 3){
                    this.layer('服务器连接失败，将尝试重连');
                }else{
                    this.chatList.push(obj)
                    this.$nextTick(() => {
                    document.getElementById('chat_body').scrollTop = document.getElementById('chat_body').scrollHeight;
                    })
                }

            },
            handleSend (type,imgUrl,mediaUrl,mediaTime,reward_amount) {
                    var inputText = document.querySelector('#inputText');
                    this.pushMsg(inputText.value,'','','');
                    var data = {
                        "type": "sendMsg",
                        "room_id":this.roomId,
                        "from_uid":  this.fromUid,
                        "to_uid": this.toUid,
                        "time": this.time(),
                        "data": {
                            'msg_type': type,
                            'text': inputText.value,
                            'img_url': imgUrl,
                            'media_src': mediaUrl,
                            'media_time': mediaTime||'',
                            'reward_amount':reward_amount||''
                        },
                    }
                    this.socket.send( JSON.stringify( data ) );
                    this.msgInput = '';
                    // 清除打赏金额缓存
                    if( type == 5 ){
                        localStorage.removeItem('rewardAmount');
                    }

                    //console.dir(this.socket);
                    // console.log(data);
            },
            // 输入框
            handleFocus (event) {
                let chatBody = document.getElementById('chat_body');
                setTimeout(function(){
                    chatBody.scrollTop = chatBody.scrollHeight;
                    document.body.scrollTop = document.body.scrollHeight;
                },600);
            },
            handleBlur (event) {
                document.body.scrollTop = this.bfscrolltop;
            },
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                let that = this;
                wxParams.jsApiList = wxParams.jsApiList.concat(this.recordJsApiList);
                let channleStr =  commonFn.getChannelStr();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href + channleStr
                });
                // 监听录音结束事件
                wx.ready(function(){
                    wx.onVoiceRecordEnd({
                        // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                        complete: function (res) {
                            that.recordSuc(res);
                        }
                    });
                });
            },
            // 父组件监听子组件上传图片返回的base64的数据，用于本地显示图片
            getImgDataUrl(value){
                // value -> 图片base64的数
//                console.log(value);
            },
            uploadProgress(value){
                // value -> 图片上传的进度百分比，会实时更新，用于进度条显示
//                console.log(value);
            },
            uploadResData(value){

                if(value.type == 'success'){
                    this.pushMsg('',value.image_url,'','');
                    this.handleSend(2,value.image_url,'');
                }else{
                    this.isAuding = false;
                    this.isFrontAudio = true;
                }
            },
            // 判断是否已经评价
            async getConsStatus(){
                let data = {
                        room_id:this.roomId
                    }
                await myAjax.get(apiPath.getConsultantStatus,data)
                        .then(res=>{
                            if( res.status == 2 ){
                                // 聊天已结束可评价
                                this.isChatEnded = true;
                            }else if( res.status == 3 ){
                                // 已经评价过可查看评价
                                this.evaluateObj = {
                                    isCanEvaluate:2,
                                    content:res.evaluate_list.content,
                                    start:res.evaluate_list.rank
                                }
                                this.isChatEnded = true;
                            }else{
//                                this.isChatEnded = false;
                            }
                        })
                        .catch( e => { this.layer(e) } );
            },
            closeEvlPop(){
                this.isShowEvlPop = false;
            },
            // 录音过程处理
            recordHandle(){
                this.recordEle = this.$refs.audioRecord;
                // 初始化hammer
                let mc = new Hammer(this.recordEle);
                let that = this;
                mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                // listen to events...
                let mcEventHandle = {
                    'press':this.pressHandle.bind(that),
                    'pressup':this.pressUpHandle.bind(that),
                    'panstart':this.panstartHandle.bind(that),
                    'panmove':this.panmoveHandle.bind(that),
                    'panend':this.panendHandle.bind(that)
                }
                this.recordEle.addEventListener('touchstart',function(e){
                    e.preventDefault();
                })
                mc.on("press pressup panstart panmove panend", function(ev) {
                    // 调用对应的处理事件
                    ev.preventDefault();
                    mcEventHandle[ev.type](ev)
                });
            },
            getELeCoord( element ){
                let coords = element.getBoundingClientRect();
                return {
                    x1: coords.left,  // 左上角到页面左上角的左距离
                    y1:coords.top, // 左上角到页面左上角的上距离
                    x2:coords.right, // 右下角到页面左上角的距离
                    y2:coords.bottom, // 右下角到页面
                }
            },
            // 长按录音处理
            pressHandle(ev){
                // 标示录音中
                this.recordStatus = 2;
                this.$nextTick( () => {
                    this.recordEleCoords = this.getELeCoord(this.recordEle);
                    console.dir(this.recordEleCoords)
                })
                // 开始录音
                this.startRecord();
                console.log(ev);
            },
            pressUpHandle(){
                this.recordStatus = 1;
                // 停止录音并上传
                this.stopRecord();
            },
            panstartHandle(ev){

            },
            panmoveHandle(ev){
                this.panPosition(ev);
            },
            panendHandle(ev){
                if(this.panPosition(ev)){
                    this.recordStatus = 1;
                    // 停止录音并上传
                    this.stopRecord();
                }else{
                    this.recordStatus = 1;
                    // 停止录音但不上传
                    wx.stopRecord({
                        success:  ( res ) => {
                            console.log(res)
                        }
                    });
                }
            },
            panPosition(ev){
                // 获得滑动的坐标
                let moveX = ev.center.x,
                    moveY = ev.center.y,
                    x1 = this.recordEleCoords.x1,
                    y1 = this.recordEleCoords.y1,
                    x2 = this.recordEleCoords.x2,
                    y2 = this.recordEleCoords.y2;
                // 标示滑动取消
                if( moveX < x1 || moveX > x2 || moveY < (y1 - 20) || moveY > y2 ){
                    // 标示滑动取消
                    this.recordStatus = 3;
                    return false;  // 判断是否可以发送录音
                }else{
                    // 继续录制音频
                    this.recordStatus = 2;
                    return true; //  可以继续发送录制发送音频
                }
            }
    },

    created(){
            this.initSocket();
            //alert(commonFn.getParams()["from"])
    },
    mounted() {
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
        this.bfscrolltop = document.body.scrollTop;
        this.recordHandle();
    }
}
</script>
