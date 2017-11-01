<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
        .header{
            width:100%;
            text-align:center;
            background:#fff;
            line-height:80px;
            padding:0 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            position:relative;
            .title{
                font-size:30px;
                color:#333;
            }
            .icon{
                position:absolute;
                left:30px;
                width:20px;
                height:20px;
                border-top:4px solid #ccc;
                border-left:4px solid #ccc;
                transform: rotate(-45deg);
            }
        }
        .section{
            padding:0 30px;
            background:#fff;
            margin:12px 0;
            .order-detail{
                font-size:30px;
                color:#333;
                line-height:76px;
                font-weight:bold;
            }
            .order-content{
                padding:30px 0;
                display:flex;
                justify-content: space-between;
                align-items: center;
                border-top:1px solid #ebebeb;
                border-bottom:1px solid #ebebeb;
                .order-avater{
                    margin-right:20px;
                }
                .order-item{
                    flex:1;
                    color:#333;
                    font-size:28px;
                }
                .money{
                    font-size:28px;
                    color:#999;
                }
            }
            .order-show{
                border-bottom:1px solid #e6e6e6;
            }
        }


    }
    .pay-container{
        padding:0 30px;
        margin-top:12px;
        background:#fff;
        .total-money{
            border-top:1px solid #e6e6e6;
            font-weight:bold;
            font-size:32px;
            .money{
                color:@mainColor;
            }
        }
    }
    .order-com-item{
        display:flex;
        line-height:88px;
        justify-content: space-between;
        color:#666;
        font-size:28px;
    }
    .gotopay{
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        line-height:100px;
        background:@mainColor;
        color:#fff;
        font-size:34px;
        text-align:center;
        font-weight:bold;
    }
</style>
<template>
    <div class="page-container" >
        <div class="header">
            <!--<i class="icon" @click.stop.prevent="back"></i>-->
            <span class="title">处理中的服务</span>
        </div>
        <div class="section">
            <h1 class="order-detail">订单详情</h1>
            <div class="order-content">
                <div class="order-avater">
                    <Avatar :avatarSrc="serviceData.answer_avatar"
                            :isHasScore="false"
                    ></Avatar>
                </div>
                <div class="order-item">
                    <p>一对一咨询室</p>
                    <p>{{ serviceData.answer_name }}-{{ serviceData.service_name }}</p>
                </div>
                <div class="money">
                    ￥{{ serviceData.order_amount | formateMoney }}
                </div>
            </div>
            <div class="order-show">
                <div class="order-id order-com-item">
                    <div class="title">
                        订单编号
                    </div>
                    <div>
                        {{ serviceData.out_trade_no }}
                    </div>
                </div>
                <div class="order-time order-com-item">
                    <div class="title">
                        下单时间
                    </div>
                    <div>
                        {{ serviceData.order_time }}
                    </div>
                </div>
            </div>
            <div class="order-money order-com-item">
                <div class="title">
                    订单金额
                </div>
                <div>
                    ￥{{ serviceData.order_amount | formateMoney }}
                </div>
            </div>
        </div>
        <div class="pay-container">
            <div class="coupon order-com-item" >
                <div class="title">
                    优惠券减免
                </div>
                <div>
                    ￥-{{ serviceData.coupon_amount | formateMoney }}
                </div>
            </div>
            <div class="total-money order-com-item">
                <div class="title">
                    共需支付
                </div>
                <div class="money">
                    ￥{{ serviceData.order_amount - serviceData.coupon_amount | formateMoney  }}
                </div>
            </div>
        </div>
        <div class="gotopay" @click.stop.prevent="submit">
            立刻购买
        </div>
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
        <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
        <!--<ComFooter current="2"></ComFooter>-->
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import myAlertTip from '../../common/components/modelBox.vue';
    //    import ComFooter from '../../common/components/footer.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request';
    export default {
        name: 'appPage',
        components: {
//            ComFooter,
            Avatar,
            myAlertTip,
            LoadingModel
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                answer_uid:commonFn.getParams()['answer_uid']||'',
                isShowHighPrizePop:false,
                high_id:commonFn.getParams()['high_id']||'',
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                serviceData:{
                    answer_avatar:'',
                    answer_name:'',
                    coupon_amount:'0.00',
                    order_amount:'0',
                    order_time:'',
                    service_name:'',
                    jsApiParameters:'',
                    ut_trade_noo:''
                }
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
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
//                let channelStr = channel ? `&channel=${channel}`:'';
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.protocol + '//' + location.hostname  + '/home/index/index'
                });
            },
            // 返回
            back(){
                window.history.back();
            },
            // 调起支付
            submit(){
                commonFn.wxPay({
                    wxPayConf:this.serviceData.jsApiParameters,
                    successCb:this.wxPaySuc.bind(this,this.serviceData.out_trade_no),
                    failCb:this.layer.bind(this,'支付失败，请重试'),
                    cancelCb:this.layer.bind(this,'支付失败，请重试')
                });
            },
            wxPaySuc(){
                location.href = `/home/chatroom/chatRoom?room=${this.serviceData.room_id}&from=${this.serviceData.from_uid}&to=${this.serviceData.to_uid}`
            },

            // 获取下单信息
            async consultantOrder(){
                this.showLoading('订单生成中');
                let data = {
                    answer_uid:this.answer_uid,
                    service_id:this.high_id,
                };
                await myAjax.post( apiPath.consultantOrder,data )
                    .then( res => this.serviceData = res.data )
                    .catch( e => this.layer(e) );
            },
        },
        async created(){
            await this.consultantOrder();
            this.share()
        },
        mounted() {
            // 动态添加统计代码
            addStatisticsCode();
        }
    }
</script>
