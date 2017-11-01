<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
    @bg:#ffeed2;
    .page-container{
        padding-bottom:2.5rem;
        .header{
            padding:30px;
            display:flex;
            /*align-items: center;*/
            justify-content: center;
            background:#fff;
            margin-bottom:2px;

            .ask{
                margin:0 0 0 20px;
                flex:1;
                .nickname{
                    font-size:30px;
                    color:#404040;
                    span{
                        color:#ff79a9;
                    }
                    margin-bottom:10px;
                }
                .ask-content{
                    font-size:26px;
                    color:#666;
                    text-align:justify;
                    line-height:1.5;
                }
            }
        }

        .avatar{
            width:80px;
            height:80px;
            border-radius:50%;
        }

        .media{
            display:flex;
            background:#fff;
            padding-bottom:0;
            .media-list{
                margin-left:40px;
                padding:8px 0;
                flex:1;
            }
            .media-item{
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom:30px;
                .media-control{
                    position:relative;
                    width:250px;
                    height:70px;
                    text-align:center;
                    line-height:70px;
                    margin-right:30px;
                    color:#fff;
                    border-radius:40px;
                    border-bottom-left-radius:0px;
                    background:#35d0ae url('../../image/wave3.png') no-repeat 30px center/26px 34px;
                    &.active{
                        background:#35d0ae url('../../image/wave.gif') no-repeat 30px center/26px 34px;
                    }
                    &::after{
                        content:'';
                        position:absolute;
                        bottom:0;
                        width:17px;
                        height:38px;
                        left:-17px;
                        background:url('../../image/medie-icon.jpg') no-repeat center center/100% 100%;
                    }
                }
                .del-media{
                    width:40px;
                    height:40px;
                    background:url('../../image/delete-circle.png') no-repeat center center/100% 100%;
                }
            }

        }

        .record{
            padding:30px;
            padding-top:0;
            margin-bottom:10px;
            background:#fff;
            text-align:center;
            .record-time{
                color:@mainColor;
                font-size:26px;
                line-height:60px;
                span{
                    position:relative;
                    top:-8px;
                }
            }
            .record-control{
                .recording,.record-stop{
                    width:128px;
                    height:128px;
                    margin:0 auto;
                }
                p{
                    margin-top:20px;
                    font-size:24px;
                    color:#999;
                }
            }
        }

        .sure-update{
            margin-bottom:10px;
            padding:30px;
            background:#fff;
            line-height:1.5;
            color:#999;
            font-size:24px;
            .send-btn{
                margin-top:20px;
                width:160px;
                height:60px;
                text-align:center;
                line-height:60px;
                font-size:26px;
                background:@mainColor;
                color:#fff;
                border-radius:10px;
            }
        }
    }

    .recording_animation{
        width:128px;
        height:128px;
        text-align:center;
        background-color:#eb4f38;
        border-radius:50%;
        padding:12.8px;
    }
    .recording_animation span{
        display:block;
        width:102px;
        height:102px;
        border-radius:50%;
        padding-top:38px;
        background:#fff;
    }
    .recording_animation span > div{
        width:12.8px;
        height:12.8px;
        border-radius:50%;
        background-color:#eb4f38;
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
    .page-container{
    .answer {
            border-bottom: 1px solid #eee;
            background: #fff;
            padding: .47rem;
            .price {
                float: right;
                line-height: 1rem;
                color: #f85f48;
                font-size: .4rem;
            }
            .content {
                width: 100%;
            }
    }
    .username {
        font-size: .47rem;
        color: #666;
        line-height: 1.25rem;
    }
    .is_first {
        padding-left: .4rem;
        color: #F85F48;
        font-size: .375rem;
    }
}
.page-container img {
    width: 100%;
    vertical-align: middle;
    outline: none;
}
.user {
    position: relative;
    float: left;
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: .41rem;
}
.user .avatar {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    display: inline-block;
}
.content {
    width: 100%;
    vertical-align: middle;
    line-height: .5rem;
}
.page-container .answer .content p {
    color: #151515;
    padding: .31rem 0;
}
.user .auth_ico {
    position: absolute;
    width: 1.44rem;
    line-height: .9375rem;
    background-color: #F85F48;
    border-radius: .468rem;
    border: 2px solid #fff;
    font-size: .75rem;
    color: #fff;
    right: -0.2rem;
    bottom: 0;
    text-align: center;
    transform-origin: 100% 100%;
    transform: scale(0.5);
}
.content p {
    font-size: .44rem;
    text-align: justify;
    line-height: 1.5;
    color: #151515;
}
.media {
    display: inline-block;
}
.bubble {
    display: inline-block;
    position: relative;
    background: #1ccda6;
    width: 4.375rem;
    line-height: 1.1rem;
    height: 1.1rem;
    border-radius: 1.1rem;
    text-align: center;
    min-width: 4rem;
    color: #fff;
    font-size: .4375rem;
    text-decoration: none;
    margin-right: .2rem;
}
.bubble .bubble-tail {
    width: .53rem;
    height: .885rem;
    position: absolute;
    top: .26rem;
    left: -0.13rem;
    background-image: url("@{IMAGE-PATH}bubble.png?@{DATE}");
    background-size: .53rem .885rem;
}
.bubble span {
    color: #fff;
    font-size: .4375rem;
}
.bubble .wave3 {
    display: block;
    width: .4rem;
    height: .4rem;
    background-image: url("@{IMAGE-PATH}wave3.png?@{DATE}");
    background-size: .4rem;
    position: absolute;
    top: .3rem;
    left: .3rem;
}
.user-evl {
    display: flex;
    align-items: center;
    justify-items: right;
}
.user-evl .evl-com {
    padding-top: 0.156rem;
}
.mediaShow{
    padding:30px;
}
</style>
<template>
    <div class="page-container">
        <header class="header" v-if="ask.user">
             <div class="avatar">
                 <img :src="ask.user.avatar" class="avatar">
             </div>
            <div class="ask">
                <p class="nickname">{{ask.user.nickname}} <span class="fr" v-if="type != 'press'">￥{{ask.ask_money}}</span></p>
                <p class="ask-content">
                    {{ ask.ask }}
                </p>
                <!--图片展示组件-->
                <template v-if="ask.image_info.length > 0">
                    <ImageShow :image_info="ask.image_info"></ImageShow>
                </template>
            </div>
        </header>



        <section class="main">
            <div class="media mediaShow" v-if="mediaList.length > 0">
                <div class="avatar">
                    <img :src="ask.answer.avatar" class="avatar">
                </div>
                <ul class="media-list" >
                    <li class="media-item"  v-for="(item,index) in mediaList" @click.stop.prevent="playRecord(item.localId)">
                        <div class="media-control" :class="{ active : !item.isPaused}">
                            听一听
                        </div>
                        <div class="media-time">
                            {{ item.time }}"
                        </div>
                        <div class="del-media" @click.stop.prevent="delMediaHandle(index)">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="record">
                <p class="record-time">
                    <span>..........</span> {{ record.time }}"<span>..........</span>
                </p>
                <div class="record-control">
                    <div class="record-botton">
                        <div class="record-stop" v-if="!record.isRecording" @click.stop.prevent="startRecord">
                            <img src="../../image/record.png" alt="">
                        </div>
                        <div class="recording" v-else @click.stop.prevent="stopRecord">
                            <div class="recording_animation">
                                <span>
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <p>点击开始录音</p>
                    <p>一次最多可录制60"</p>
                </div>
            </div>
            <div class="sure-update">
                <p>1、一次最多录3条语音。</p>
                <p>2、全部录完后，再点击“发送答案”按钮。</p>
                <div class="send-btn" @click.stop.prevent="uploadVoice">
                    发送答案
                </div>
            </div>

        </section>
        <!--添加历史提问-->
            <ul class="lists answered">
                <li class="answer" v-for="(item,index) in answered.data" :data-url="'/home/ask/answerDetail?ask_id='+ item.id" @click="goToPage($event,item.id)">
                    <div>
                        <div class="user">
                            <img class="avatar" :src="ask.user.avatar">
                        </div>
                        <span class="username">{{ ask.user.nickname }}</span>
                        <span class="is_first"></span>
                        <!-- <span class="price">￥{{ item.ask_money }}</span> -->
                        <span class="price" style="margin-right: 15px">{{ item.is_evaluate >= 1 ? '已评价':'未评价'}}</span>
                    </div>
                    <div class="content">
                        <p>{{ item.ask }}</p>
                        <ul class="photo-show" v-if="item.image_info && item.image_info.length > 0" >
                            <li v-for="(val,index) in item.image_info">
                                <img :src="val.thumb_url">
                            </li>
                        </ul>
                        <div class="content">
                            <div class="user">
                                <img class="avatar" :src="answer.avatar">
                                <span class="auth_ico">{{ answer.score>5?'5.0':answer.score<4.6?'4.6':answer.score }}</span>
                            </div>
                            <div class="media">
                                    <span class="bubble">
                                        <span class="bubble-tail"></span>
                                        <span class="wave3"></span>
                                        <span></span>听一听
                                    </span>
                                <span class="length">{{ item.media_time }}"</span>
                            </div>
                        </div>
                        <!-- 评价数据 -->
                        <div class="user-evl" v-if="item.is_evaluate >= 1">
                            <p>用户评价：</p>
                            <div class="evl-com">
                                <start-show :rank="item.star"></start-show>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <!--添加历史提问结束-->
            <infinite-loading :on-infinite="gitHistory" :distance="100" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">
                     暂无数据
                </span>
            <span slot="no-more">
                     暂无更多数据
                </span>
        </infinite-loading>
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
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import ImageShow from '../../common/components/imageShow.vue';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode'
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import startShow from '../../common/components/startCompontent.vue';
    import InfiniteLoading from 'vue-infinite-loading';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            ImageShow,
            LoadingModel,
            InfiniteLoading,
            startShow
        },
        data() {
            return {
                // 老师信息
                answer:{},
                // 用户提问历史
                answered:{
                    page:1,
                    api:"/home/answer/anweredList",
                    data:[]
                },
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 回答问题的类型
                type: commonFn.getParams()["type"] || "ask",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                // shareConfig: wxShareConfig,
                wxConfig: {},
                // 问题内容
                ask:{
                    id:commonFn.getParams()["ask_id"]||''
                },
                // 回答的音频列表
                mediaList:[],
                // 录音
                record:{
                    isRecording:false,
                    localId:'',
                    time:0
                },
                recordJsApiList:[
                    'startRecord',
                    'stopRecord',
                    'onVoiceRecordEnd',
                    'playVoice',
                    'pauseVoice',
                    'stopVoice',
                    'onVoicePlayEnd',
                    'uploadVoice',
                    'downloadVoice',
                    'previewImage'
                ],
                wxIsReady:false, // 微信配置是否已经准备好
                timer:null, //定时器
                myPro:{
                    'uploadVoice':function(){}   // promise函数
                }
            }
        },

        methods: {
            //点击li后的页面跳转
            goToPage:function( event,id ){
                var target = event.currentTarget;
                var url = target.getAttribute("data-url");
                location.href = url;
            },
            async gitHistory(){
                let data = {
					type:this.type == 'press' ? 1 : 0,
					p : this.answered.page,
					ask_id:this.ask.id
				}
                await myAjax.get( apiPath.historyAsk,data )
					.then( res => {
						if(res && res.list.length > 0){
							this.answered.page++;
							this.answer = res.answer;
							this.answered.data = this.answered.data.concat(res.list);
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
						}else{
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:complete');
						}
					} );
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
            // 微信分享
            async wxRecord() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                this.wxConfig = wxParams;
                this.wxConfig.jsApiList = this.wxConfig.jsApiList.concat(this.recordJsApiList);
                wx.config(this.wxConfig);
                let that = this;
                // 执行微信的操作
                wx.ready(function(){
                    that.wxIsReady = true;

                    wx.onVoiceRecordEnd({
                        // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                        complete: function (res) {
                            that.recordSuc(res);
                        }
                    });
                    // 使用promise重写微信语音上传的
                    that.myPro.uploadVoice = function(val){
                        return new Promise((resolve, reject) => {
                            wx.uploadVoice({
                                localId: val.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                success: function (res) {
                                    val.serverId = res.serverId;
                                    resolve(res.serverId);
                                },
                                fail:function(err){
                                    // 上传失败后调本地存储
                                    that.uploadFail();
                                    reject(err);
                                }
                            });
                        })
                    }

                    // 监听音频播放结束后
                    wx.onVoicePlayEnd({
                        success: function ( res ) {
                            // 暂停所有的的音频就行
                            that.stopAllPlayRecord();
                        }
                    });

                    // 分享给朋友
                    wx.onMenuShareTimeline({
                        title: '易起问-东方智慧语音咨询平台', // 分享标题
                        link: 'http://yd.linghit.com', // 分享链接
                        imgUrl: "https://zxcs.ggwan.com/forecastyiqiwenbundle/images/logo.png", // 分享图标
                        success: function() {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function() {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                    // 分享到朋友圈
                    wx.onMenuShareAppMessage({
                        title: '易起问', // 分享标题
                        desc: '易起问-东方智慧语音咨询平台', // 分享描述
                        link: 'http://yd.linghit.com', // 分享链接
                        imgUrl: "https://zxcs.ggwan.com/forecastyiqiwenbundle/images/logo.png", // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function() {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function() {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });
            },
            startRecord(){
                // 先暂停播放
                this.stopAllPlayRecord();
                if( this.mediaList.length >=3 ){
                    this.layer("音频已超过3条,请删除后再录制");
                    return;
                }
                // 是在微信的sdk全部加载完成之后进行的处理
                if(this.wxIsReady){
                    this.record.time = 0;
                    this.timer = setInterval(()=>{
                        this.record.time++;
                        if( this.record.time>=60){
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    },1000);
                    // 调微信录音接口
                    // 每次都是重新进行录音处理
                    wx.startRecord();
                    this.record.isRecording = true;
                }else{
                    this.layer('正在加载，请稍等');
                }
            },
            stopRecord(){
                if( this.timer ){
                    clearInterval( this.timer );
                    this.timer = null;
                };
                this.record.isRecording = false;
                // 停止生成一条语音
                wx.stopRecord({
                    success:  ( res ) => {
                        this.recordSuc(res)
                    },
                    fail:(err) => {
                        console.log(err);
                    }
                });
            },
            // 音频录制结束后的处理方案
            recordSuc(res){
                if(this.timer){
                    clearInterval(this.timer);
                    this.timer = null;
                };
                // 多余的一步，留着先
                this.record.localId = res.localId;
                // 把当前的录制的音频数据放到音频列表中
                this.mediaList.push({
                    localId:res.localId,
                    isPaused:true,
                    time:this.record.time,
                    serverId:''
                })
                // 初始化目前录制的数据，为下一次录制做准备
                this.record = {
                    isRecording:false,
                    localId:'',
                    time:0
                }
            },


            // 删除音频列表中的内容
            delMediaHandle(index){
                this.stopAllPlayRecord();
                this.mediaList.splice(index,1);
            },
            // 上传失败存储上次回答失败的语音
            uploadFail(){
                let mediaListStorage = {};
                mediaListStorage[ this.ask.id ] = this.mediaList;
                try{
                    localStorage.setItem('answer',JSON.stringify(mediaListStorage));
                }catch(err){
                    console.log('不支持localStorage');
                }
            },
            // 点击之后上传语音
            async uploadVoice(){
                this.stopAllPlayRecord();
                if(!this.wxIsReady){
                    this.layer('加载中，请稍后再上传');
                    return;
                }
                if(this.mediaList.length == 0){
                    this.layer('请先录制音频');
                    return;
                }
                // 音频保存到本地
                this.uploadFail();
                for(let i =0; i < this.mediaList.length; i++){
                    if( !this.mediaList[i].serverId ){
                        await this.myPro.uploadVoice(this.mediaList[i]);
                    }
                }
                this.uploadMyService();
            },
            // 传media到自己的服务器
            async uploadMyService(){
                // 遍历当前的音频列表获取对应的数据
                let media_ids = [];
                let total_time = 0;
                let api = '';
                this.mediaList.forEach((val,index) => {
                    media_ids.push(val.serverId);
                    total_time += val.time;
                },this);

                // 判断当前是回答主问题还是追问的问题
                if(this.type == 'press'){
                    api = apiPath.answerPress;
                }else{
                    api = apiPath.answer;
                }
				let data = {
					media_id:media_ids,
					ask_id:this.ask.id,
					media_time:total_time,
				}
                this.showLoading("音频上传中...");
                let that = this;
				await myAjax.post( api,data )
					.then( res => {
						this.layer('回答成功');
						// 跳转至未回答列表页面
						setTimeout(() => {
							location.href = '/home/me/answers';
						},1000);
					} ).catch( e => {
					    this.layer( e );
						// 上传失败后调本地存储
						that.uploadFail();
						// 失败后重新加载页面
						location.reload();
					} );
            },
			// 播放录制的语音
            playRecord(id){
                this.mediaList.forEach(val => {
                    if(val.localId == id){
                        if( val.isPaused ){
                            // 播放当前音频
                            wx.playVoice({
                                localId: id // 需要播放的音频的本地ID，由stopRecord接口获得
                            });
                            val.isPaused = false;
                        }else{
                            // 播放当前音频
                            wx.stopVoice({
                                localId: id // 需要播放的音频的本地ID，由stopRecord接口获得
                            });
                            val.isPaused = true;
                        }
                    }else{
                        val.isPaused = true
                    }
                })
            },
            // 暂停所有的音频
            stopAllPlayRecord(){
                if ( this.mediaList.length > 0 ){
                    this.mediaList.forEach(val => {
                        wx.stopVoice({
                            localId:val.localId // 需要停止的音频的本地ID，由stopRecord接口获得
                        });
                        val.isPaused = true
                    })
                }
            },
            // 获取问题内容
            async getAskInfo(){
                let api = '';
                // 判断当前是回答主问题还是追问的问题
                if( this.type == 'press' ){
                    api = apiPath.pressInfo;
                }else{
                    api = apiPath.askInfo;
                }
                this.showLoading('加载中');

                let data = {
					ask_id:this.ask.id
                }
                await myAjax.get( api,data )
                        .then(res => {
                            if( res.ask && res.ask.user ){
                                this.ask = res.ask;
                            }else{
                                location.href = '/home/me/answers';
                            }
                        })
                        .catch( e => { this.layer(e) } );
                this.hideLoading();
            },
    },

    created: function() {
        // 判断当前问题是否存在缓存中
        let answer = localStorage.getItem('answer') && JSON.parse(localStorage.getItem('answer'));
        // 针对当前问题的id的处理
        if( answer && answer[this.ask.id]){
            // 初始化保存当前的问题的列表
            this.mediaList = answer[this.ask.id];
        }
        this.wxRecord();
        this.getAskInfo();
    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    },
    destroyed(){
        this.uploadFail();
    }
    }
</script>
