/*
* 功能：音频控制组件，用来控制语音播放
* props: fee_touting -> 偷听的需要支付的价格，time -> 音频时间
*/
<style lang="less" rel="stylesheet/less" scoped>
    @import '../../common/style/config';
    .audio-container{
        display:inline-block;
        .main{
            display:inline-block;
            width:440px;
            height:70px;
            line-height:70px;
            text-align:center;
            color:#fff;
            border-radius: 35px;
            background:#1ccda6;
            font-size:28px;
            position:relative;
            &::after{
                content:'';
                position:absolute;
                bottom:-5px;
                left:-10px;
                width:34px;
                height:48px;
                background:url(../../image/bubble.png) no-repeat center center/100% 100%;
            }

            .play-control{
                position:relative;
                z-index:100;
                width:38px;
                height:38px;
                margin:16px;
                background: url(../../image/play.png) no-repeat center center/100% 100%;
                &.active{
                    background: url(../../image/pause.png) no-repeat center center/100% 100%;
                }
            }
            .progress-control{
                /*overflow: hidden;*/
                height:100%;
                position:relative;
                width:290px;
                margin-left:70px;
                .progressbar{
                    position:absolute;
                    width:100%;
                    top:50%;
                    margin-top:-4px;
                    left:0;
                    height:8px;
                    background:#2aa78b;
                    border-radius:4px;
                }
                .progress-bar-fr{
                    width:0;
                    background:#fff;
                    &::after{
                        position:absolute;
                        top:0;
                        right:-15px;
                        margin-top:-6px;
                        content:'';
                        width:20px;
                        height:20px;
                        border-radius:50%;
                        background: #fff;
                        box-shadow: 1px 1px 3px rgba(0,0,0,.5);
                    }
                }
             }
            .media-time{
                padding:0 10px;
            }
        }

    }
</style>

<template>
    <div class="audio-container">
        <div class="main">
            <div class="play-control fl"
                :class="{active:!isCurrentPaused}"
                @click.prevent="controlAudio"
            ></div>
            <div class="media-time fr"> {{ time }}"</div>
            <div class="progress-control"
                 ref="progressbar"
                @touchstart="setAudioProgress($event)"
            >
                <div class="progress-bar-bg progressbar"></div>
                <div class="progress-bar-fr progressbar" :style="'width:'+ progress"></div>
            </div>
        </div>
        <audio ref="audio"
            preload="preload"
            style="display:none;width:0;height:0"
            @canplay="canplayAudio"
            @ended="audioEnded"
            @error="audioError()"
            @timeupdate="progressControl"
            :src="src"
        ></audio>
    </div>
</template>

<script>

export default {
    name:'audio-control-component',
    props:{
        // 音频路径
        src:{
            type: String
        },
        // 音频时间
        time:{
            default:0
        },
        // 当前音频是否强制暂停，针对多音频处理
        isPaused:{
            type:Boolean,
            default:false
        },
        // 播放音频对应的id，针对多音频播放时的处理
    },
    data(){
        return {
            audioEle:this.$refs.audio,   // 音频元素
            isCanPlay:false,
            isCurrentPaused:true,
            progress:'0%',   // 当前音频播放的进度
            duration:0, // 音频总时间
            currentTime:0, // 音频当前的时间
            progressPageX:0, //进度条距离页面的坐标
            progressWidth:0, //进度条的宽度
        }
    },
    watch:{
        isPaused:function(newValue){
            // true代表暂停，false代表播放
            if( newValue ){
                this.pauseAudio();
            }else{
                this.playAudio();
            }
        }
    },
    methods:{
        layer(text,time){
            this.$emit('layer',text,time);
        },
        showLoading(text){
            this.$emit('showLoading',text);
        },
        hideLoading(){
            this.$emit('hideLoading');
        },

        // 单击控制音频播放与暂停
        controlAudio(){
//            if( this.isCanPlay ){
//                this.hideLoading();
                if( this.isCurrentPaused ){
                    this.playAudio();
                }else{
                    this.pauseAudio();
                }
//            }else{
//                this.showLoading('加载中，请稍等');
//            }
        },
        // 触发播放音频
        playAudio(){
            this.isCurrentPaused = false;
            this.audioEle.play();
        },
        // 触发暂停音频
        pauseAudio(){
            this.isCurrentPaused = true;
            this.audioEle.pause();
        },
        // 音频可播放时触发
        canplayAudio(){
            this.isCanPlay = true;
            // 可以播放时才能获得音频的总时长
            this.duration = this.audioEle.duration;
        },
        // 音频播放结束
        audioEnded(){
            this.isCurrentPaused = true;
        },
        // 音频播放错误提示
        audioError(){
            let code = this.audioEle.error ? this.audioEle.error.code : 0;
            let msg = '';
            switch( +code ){
                case 1:
                    msg = '中止下载';
                    break;
                case 2:
                    msg = '下载发生错误';
                    break;
                case 3:
                    msg = '解码错误';
                    break;
                case 4:
                    msg = '不支持音频'
                    break;
                default:
                    msg = '音频播放错误';
                    break;
            }
            this.layer(msg);
            // 刷新重试
        },
        // 控制音频播放的进度
        progressControl(){
            // 获得音频当前的时间
            this.currentTime = this.audioEle.currentTime;
            // 计算百分比
            let precent = parseInt(this.currentTime / this.duration * 100) + '%';
            // 动态显示进度
            this.progress = precent;
        },
        // 触摸进度条后音频进度播放控制
        setAudioProgress(event){
            let pageX = event.touches[0].pageX;
            let precent = (pageX - this.progressPageX) / this.progressWidth * 100;
            this.progress = precent + '%';
            this.audioEle.currentTime = precent * this.duration / 100;
        },
        initData(){
            this.audioEle = this.$refs.audio;
            this.progressPageX = this.$refs.progressbar.getBoundingClientRect().left;
            this.progressWidth = this.$refs.progressbar.offsetWidth;
        },
    },
    mounted(){
        this.initData();
    }
}
</script>

