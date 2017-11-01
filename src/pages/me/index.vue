<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";

    .page-container {
        padding-bottom:2rem;
        .header{
            padding:30px;
            background:#fff;
            text-align:center;
            .user-avatar{
                display:inline-block;
            }
            /*二维码 编辑*/
            .qrcode-edit{position:absolute;top:10px;right:30px;}
            .qrcode-edit a{display:inline-block;color:#999;margin-left:.4rem;}
            .qrcode-edit i{display:block;width:.55rem;height:.55rem;margin:.1rem auto;vertical-align:middle;}
            .qrcode-edit a.qrcode i{background-image:url(../../image/qrcode_ico.png);background-size:.55rem .55rem;}
            .qrcode-edit a.edit i{background-image:url(../../image/edit_ico.png);background-size:.55rem .55rem;}
            .nickname{
                color:#151515;
                font-size:30px;
                padding:10px;
            }
            .job-title{
                line-height: 1.5;
                font-size: 26px;
            }
            .introduce{
                text-align: justify;
                font-size: .46rem;
                line-height: 1.5;
                margin-top: .1rem;
                color: #151515;
                margin-bottom: .1rem;
            }
            .ask-money{
                text-align:left;
                font-size:26px;
                line-height:1.5;
                span{
                    color:@mainColor;
                }
            }
        }
        .mynav{margin-top:.4rem;}
        .mynav li{position:relative;padding:0.4rem .625rem;background:#fff;}
        .mynav li:after{content:' ';position: absolute;top:50%;margin-top:-.1rem;right:.625rem;width:.2rem;height:.2rem;border: #cdcdcd solid;border-width: 2px 2px 0 0;-webkit-transform: rotate(45deg);}
        .mynav li.border{border-bottom:1px #F1EEEE solid;}
        .mynav li a{display:block;color:#333;font-size:.47rem;}
        .mynav li i{display:inline-block;width:.625rem;height:.625rem;vertical-align:top;margin-right:.41rem;background-size:.625rem .625rem;}
        .mynav li.myhome i{background-image:url(../../image/myyqw.png);}
        .mynav li.reward i{background-image:url(../../image/coupon-icon.png);}
        .mynav li.my_ask i{background-image:url(../../image/ask-list.png);}
        .mynav li.my_reply i{background-image:url(../../image/apply.png);}
        .mynav li.my_listen i{background-image:url(../../image/listen-list.png);}
        .mynav li.income i{background-image:url(../../image/income.png);}
        .mynav li.income{margin-top:30px;}
        .mynav li.disburse i{background-image:url(../../image/dis.png);}
        .mynav li.help i{background-image:url(../../image/help.png);}
        .mynav li.about i{background-image:url(../../image/about.png);}
        .mynav li.my_feedback i{background-image:url(../../image/feedback.png);}
        .mynav li.my_answer i{background-image:url(../../image/myAsk.png);}
        .mynav li.my_service i{background-image:url(../../image/my-service.png);}
        .mynav li.my_coupons i{background-image:url(../../image/coupon-icon.png);}
        .noread-message{
            margin-right:30px;
            width:45px;
            height:45px;
            border-radius: 50%;
            color:#fff;
            background:@mainColor;
            text-align:center;
            line-height:45px;
            font-size:24px;
        }
    }
</style>
<template>
    <div class="page-container">
        <div class="header">
            <div class="qrcode-edit" v-if="user.type == 2">
                <a href="/home/me/qrcode" class="qrcode">
                    <i></i>二维码
                </a>
                <a href="/home/me/modify" class="edit">
                    <i></i>编辑
                </a>
            </div>
            <div class="user-avatar">
                <Avatar :avatarSrc="user.avatar"
                        :isHasScore="false"
                        :avatarWidth="style"
                ></Avatar>
            </div>
            <p class="nickname">{{ user.nickname }}</p>
            <p class="job-title" v-if="user.type == 2"> {{ user.job_title }} </p>
            <p class="introduce" v-if="user.type == 2"> {{ user.introduce }} </p>
            <p class="ask-money" v-if="user.type == 2"> 普通问题向我提问需要支付<span>￥{{ user.ask_money }}</span></p>
            <!--<p class="ask-money" v-if="user.type == 2"> 图文咨询向我提问需要支付<span>￥{{ user.heightMoney }}</span></p>-->
        </div>
        <ul class="mynav">
            <li class="myhome border" v-if="user.type == 2">
                <a href="/home/me/qrcode">
                    <i></i>
                    我的主页
                </a>
            </li>
            <li class="reward border">
                <a href="/home/spare/tyrants?from=other">
                    <i></i>
                    查看打赏榜
                </a>
            </li>
            <li class="my_ask border">
                <a href="/home/me/asks">
                    <i></i>
                    我问
                </a>
            </li>
            <li class="my_service border">
                <a href="/home/chatroom/chatList.html">
                    <i></i>
                    我的服务(一对一咨询室)<span class="noread-message fr" v-if="noticeNums > 0">{{ noticeNums }}</span>
                </a>
            </li>
            <li class="my_reply border" v-if="user.type == 1">
                <a href="/home/me/welcome">
                    <i></i>
                    答主申请
                </a>
            </li>
            <li class="my_answer border" v-if="user.type == 2">
                <a href="/home/me/answers">
                    <i></i>
                    我答
                </a>
            </li>
            <li class="my_coupons border">
                <a href="/home/coupon/index">
                    <i></i>
                    我的优惠券({{ couponNums }})
                </a>
            </li>
            <li class="my_listen">
                <a href="/home/me/touting">
                    <i></i>
                    我听
                </a>
            </li>
            <li class="income border mt4">
                <a href="/home/me/income">
                    <i></i>
                    收入支出
                </a>
            </li>
            <li class="my_feedback border">
                <a :href="'/home/me/feedback?uid=' + user.id">
                    <i></i>
                    用户反馈
                </a>
            </li>
            <li class="disburse">
                <a href="/home/me/agreement">
                    <i></i>
                    用户协议
                </a>
            </li>
        </ul>
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
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import Avatar from '../../common/components/avatarCompontent.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            ImageShow,
            Avatar,
            LoadingModel,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                style:{
                    width:'120px',
                    height:'120px'
                },
                user:{
                    type:1,
                    nickname:'易起问',
                },
                noticeNums:0,
                couponNums:0,
            }
        },
        filters:{
            formateScore:function(value){
                if(!value){
                    return '4.6';
                }
                return value >= 5 ? '5.0' : value <= 4.6 ? '4.6' : value + '';
            }
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
            gotoAskAgainPage:function( askId ){
                location.href = '/home/ask/askAgain?ask_id=' + askId;
            },
            async getPersonData(){
               await myAjax.get(apiPath.getPersonal)
                    .then( res => this.user = res )
                    .catch( e => this.layer(e) )
            },
            async getMessage(){
                await myAjax.get( apiPath.getNoticeNums )
                    .then( res => this.noticeNums = res.notice )
            },
            async getCoupon(){
                await myAjax.get( apiPath.getCouponNums )
                    .then( res => this.couponNums = res.coupon_num )
            },
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                let channel = localStorage.getItem('channel');
                let channelStr = channel ? `&channel=${channel}`:'';
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:`${location.origin}/home/index/index?${channelStr}`
                });
            },
    },

    async created() {
        this.getPersonData();
        this.getMessage();
        await this.getCoupon();
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    },
    mounted() {
    }
    }
</script>
