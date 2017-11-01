<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
    @bg:#ffeed2;
    .page-container{
        max-width:10rem;
        margin:0 auto;
        background:@bg;
        .header{
            position:relative;
            p{
                color:#6a2a04;
                font-size:32px;
                position:absolute;
                left:215px;
                bottom:30px;
            }
        }
        .main{
            margin:0 20px;
            margin-top:-20px;
            padding-bottom:100px;
            position:relative;
            z-index:10;
            .main-header{
                width:100%;
                height:100px;
                background:url('../../image/hb-header.png') no-repeat;
                background-position:center center;
                background-size:100% 100%;
            }
            .main-body{
                width:100%;
                min-height:100px;
                background-image:linear-gradient(to right, #f93b3b 0%, #f93b3b 50%, #db2929 50%, #db2929 100%);
                border-bottom-right-radius:20px;
                border-bottom-left-radius:20px;
                color:#fff;
                .addPhone{
                    padding:20px 60px 90px;
                    li{
                        margin-top:40px;
                        width:100%;
                        height:74px;
                        background:#fff;
                        border-radius:37px;
                        padding:0 50px;
                        input{
                            width:100%;
                            outline:none;
                            line-height:74px;
                            border:0;
                            background:transparent;
                            font-size:30px;
                        }
                    }
                    li:nth-child(2){
                        padding-right:0;
                      input{
                        width:240px;
                        vertical-align: middle;
                      }
                      span{
                        display:inline-block;
                        vertical-align: middle;
                        width:156px;
                        height:50px;
                        background: url('../../image/sendcode.png') no-repeat center center;
                        background-size:156px 50px;
                        text-align:center;
                        line-height:50px;
                        font-size:24px;
                        color:#6a2a04;
                        &.disable{
                           background: url('../../image/sending.png') no-repeat center center;
                           background-size:156px 50px;
                           color:#fff;
                        }
                      }
                    }
                    li:last-child{
                        height:92px;
                        border-radius:46px;
                        line-height:92px;
                        color:#6a2a04;
                        font-size:36px;
                        text-align:center;
                        font-weight:bold;
                        background: url('../../image/phone_button.png') no-repeat center center;
                        background-size:100% 100%;
                    }
                }

                .get-coupon{
                    padding:20px 30px 90px;
                    .coupon-tip{
                        text-align:center;
                        line-height:1.5;
                    }
                    .coupon-list{
                        padding-bottom:40px;
                        .coupon-item{
                            height:146px;
                            margin-top:34px;
                            background:url('../../image/coupon.png') no-repeat center center;
                            background-size: 100% 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            text-align:center;
                            &.geted{
                            background:url('../../image/coupon-geted.png') no-repeat center center;
                            background-size: 100% 100%;
                            }
                            .coupon-prize{
                                /*width:180px;*/
                                flex:1;
                                line-height:146px;
                                font-size:80px;
                                font-weight:bold;
                                margin-left:56px;
                            }
                            .coupon-detail{
                                width:200px;


                                text-align:left;
                                .coupon-name{
                                    font-size:40px;
                                }
                                .coupon-condition{
                                     font-size:24px;
                                     line-height:1.5;
                                }
                                .coupon-time{
                                    font-size:20px;
                                }
                            }
                            .coupon-click{
                                width:90px;
                                color:#fd616f;
                            }
                            .completed{
                                color:#999;
                            }
                        }
                    }
                    .go-yiqiwen{
                        height:92px;
                        border-radius:46px;
                        line-height:92px;
                        color:#6a2a04;
                        font-size:36px;
                        text-align:center;
                        font-weight:bold;
                        background: url('../../image/phone_button.png') no-repeat center center;
                        background-size:100% 100%;
                    }
                }
            }
        }

    }

</style>
<template>
    <div class="page-container">
        <header class="header">
            <img src="../../image/bg_01.jpg" alt="新人福利">
        </header>
        <section class="main">
            <div class="main-header">

            </div>
            <div class="main-body">
                <!-- 验证手机号码 -->
                <div class="addPhone" v-if="!isBindPhone">
                    <ul class="addPhone-ul">
                        <li class="phone">
                            <input v-model='userData.phone' type="number" placeholder="请输入手机号码">
                        </li>
                        <li class="code">
                            <input maxlength="6" v-model='userData.code' type="number" placeholder="请输入验证码">
                            <span :class="{'disable':isSendingCode}" @click.stop.prevent="sendCode">{{isSendingCode?'已发送('+userData.time_out+')':'获取验证码'}}</span>
                        </li>
                        <li class="getCoupon" @click.stop.prevent="verify">
                            领取福利
                        </li>
                    </ul>
                </div>

                <!-- 领取优惠券 -->

                <div class="get-coupon" v-else>
                    <div class="coupon-tip">
                        <p>您已领取50元新手测算福利</p>
                        <p>领取的福利可在“问大师”-“个人中心”-</p>
                        <p>“我的优惠券”查看</p>
                    </div>
                    <ul class="coupon-list">
                        <li class="coupon-item" :class="{geted:item.is_take}" v-for='(item,index) in couponList'>
                            <div class="coupon-prize">
                                {{item.discount}}
                            </div>
                            <div class="coupon-detail">
                                <p class="coupon-name">优惠券</p>
                                <p class="coupon-condition">满{{item.discountMin}}元可用</p>
                                <p class="coupon-time">{{item.start_time}} - {{item.end_time}}</p>
                            </div>
                            <div class="coupon-click" v-if="!item.is_take" @click.stop.prevent="sendCoupon($event,item.id)">
                                <p>点击</p>
                                <p>领取</p>
                            </div>
                            <div class="coupon-click completed" v-else>
                                <p>领取</p>
                                <p>完成</p>
                            </div>

                        </li>
                    </ul>

                    <div class="go-yiqiwen" @click.stop.prevent="goToPage">
                        进入 - 易起问
                    </div>
                </div>
            </div>
        </section>
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
    import {commonFn} from '../../common/js/common.js'
    import {apiPath} from '../../common/js/config.js'
    import { getWXParams } from '../../common/js/utils.js'
    import myAlertTip from '../../common/components/modelBox.vue'
    import { addStatisticsCode } from '../../common/js/addStatisticsCode'
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            LoadingModel
        },
        data() {
            return {

                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                // shareConfig: wxShareConfig,
                shareConfig: {},

                // 用户是否绑定手机
                isBindPhone:false,

                // 发送验证码
                userData:{
                   phone:'',
                   code:'',
                   time_out:90
                },

                // 优惠券列表

                couponList:[],
                // 是否发送验证码
                isSendingCode:false,
                timer:null
            }
        },
        computed: {
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
					title:'占卜看这里，这里有一份礼包等你签收',
					desc: '易起问新用户专享，快来测测你的运势', // 分享描述
					img_url:'https://img.ggwan.com/yd/Public/forecast/addPhone/static/bg.jpg?ver=4',
					link:location.href + channleStr
				});
            },
            // 是否绑定手机号
            async hasBindPhone(){

                await myAjax.get(apiPath.isBindPhone)
                        .then(res=>{
                            this.isBindPhone = res.is_bind;
                            // 获取优惠券列表
                            if(res.is_bind){
                                this.getCouponList()
                            }
                        })
                        .catch( e => { this.layer(e) } );
            },

            // 发送验证码

            async sendCode(){
                if( this.isSendingCode ){
                    return;
                }
                // 判断手机号码
                if(this.userData.phone.length == 0){
                    this.layer("请输入手机号码")
                    return;
                }
                this.showLoading('发送中');

                let data = {
                        phone:this.userData.phone
                    }
                await myAjax.get(apiPath.sendCode,data)
                        .then(res => {
                            this.userData.time_out =  res.time_out || 60;
                            // 倒计时 90s
                            this.timer = setInterval(() => {
                                this.userData.time_out -= 1;
                                    if( this.userData.time_out <= 0 ){
                                        clearInterval(this.timer);
                                        this.timer = null;
                                        this.isSendingCode = false;
                                    }
                            },1000)
                            this.isSendingCode = true;
                        })
                        .catch( e => { this.layer(e) } );
                this.hideLoading();
            },

            // 验证验证码

            async verify(){
                // 判断手机号码

                if(this.userData.phone.length == 0){
                    this.layer("请输入手机号码");
                    return;
                }
                if(this.userData.code.length == 0 ){
                    this.layer("请输入验证码");
                    return;
                }
                // 判断手机号码
                if(this.userData.code.length != 6 ){
                    this.layer("请输入正确的验证码");
                    return;
                }
                if(this.timer){
                    clearInterval(this.timer);
                    this.timer = null;
                 }


                this.showLoading('领取中');

                let data = {
                        phone:this.userData.phone,
                        code:this.userData.code
				}
                await myAjax.post(apiPath.verify,data)
                        .then(res=>{
                            this.isBindPhone = true;
                            this.getCouponList();
                        })
                        .catch( e => { this.layer(e) } );
				this.hideLoading();
            },

            // 获取优惠券
            async sendCoupon(event,id){
                this.showLoading("领取中")
                let data = {
                        prize_id:id
				}
                await myAjax.get(apiPath.sendCoupon,data)
                        .then( res => {
                            this.couponList.forEach(val => {
                                if( val.id == res ){
                                    val.is_take = true;
                                }
                            });
                            // todo:这里可能有错，需要仔细测试
                            this.couponList = res;
                        })
                        .catch( e => { this.layer(e) } );
            },

            // 获取优惠券列表
            async getCouponList(){
                await myAjax.get(apiPath.prizeList)
                        .then(res=>{
                            this.couponList = res;
                        })
                        .catch( e => { this.layer(e) } );
            },

            // 跳转至易起问的页面
            goToPage(){
                location.href  = '/home/index/index.html?channel=1504238077'
            }

    },

    created: function() {
        this.hasBindPhone();
        this.share();

    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
