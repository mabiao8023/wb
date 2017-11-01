<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
        .header{
            padding:.47rem .31rem;
            margin-bottom:.3125rem;
            background-color:#fff;
            .user{
                float:none;
                display:block;
                width:1.875rem;
                height:1.875rem;
                margin:0 auto;
            }
            .user .avatar{
                width:1.875rem;
                height:1.875rem;
            }
            .user .auth_ico{
                width:1.875rem;
                height:auto;
                font-size: .93rem;
                line-height:1.25rem;
                border-radius:10px;
            }
            .username{
                font-size:.47rem;
                text-align:center;
                padding:.25rem;
                color:#151515;
            }
            .tip{
                color:#666;
                font-size:.41rem;
                text-align:justify;
            }
        }
        .section{
            background:#fff;
            padding:.375rem .47rem;
            .title{
                font-size:.47rem;
                color:#666;
                padding-bottom:.25rem;
                border-bottom:1px solid #e6e6e6;
            }
            .money-list{
                font-size:0;
                padding:.375rem 0;
                .money-item{
                    display:inline-block;
                    font-size:.47rem;
                    text-align:center;
                    width:2.07rem;
                    height:1rem;
                    line-height:1.01rem;
                    color:@mainColor;
                    border:1px solid @mainColor;
                    border-radius:10px;
                    margin-right:.25rem;
                    &:last-child{
                        margin-right:0;
                    }
                    &.active{
                        color:#fff;
                        background:@mainColor;
                    }
                }
            }
            .changable-money{
                padding-left:1rem;

                input{
                    width:2.5rem;
                    height:1rem;
                    color:@mainColor;
                    font-size: .43rem;
                    padding-left:.78rem;
                    vertical-align:middle;
                    border-radius:10px;
                    border:1px solid @mainColor;
                }
                span:first-child{
                    color:#666;
                    font-size:.4375rem;
                    display:inline-block;
                    vertical-align:middle;
                    margin-right:.15rem;
                }
                span:last-child{
                    color:@mainColor;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: .4375rem;
                    margin-left: -2.3rem;
                }
            }
        }
        .submit{
            padding:0 .4rem;
            .btn{
                padding:.78rem 0 2.3rem;
                width:100%;
                border-bottom:1px solid #ccc;
                .btn-content{
                    width:100%;
                    line-height:1.25rem;
                    border-radius:10px;
                    color:#fff;
                    background-color:@mainColor;
                    text-align:center;
                    font-size:.53rem;
                }
            }
            .tip{
                font-size:.4375rem;
                text-align:center;
                padding:.47rem 0;
                span:nth-child(1){
                    color:@mainColor;
                }
                .check{
                    display:inline-block;
                    width:1.56rem;
                    line-height:.78rem;
                    color:@mainColor;
                    border:1px solid @mainColor;
                    border-radius:10px;
                    text-align:center;
                }
            }
        }
        // 增加提问用户信息弹窗
        .add-user-pop{
            position:fixed;
            top:0;left:0;right:0;bottom:0;
            background:rgba(0,0,0,.5);
            z-index:1000;
            .add-user-container{
                position:absolute;
                width:9rem;
                height: 7.8rem;
                background:#fff;
                padding:.47rem;
                border-radius:10px;
                top:50%;
                left:50%;
                margin-top:-3.9rem;
                margin-left:-4.5rem;
                overflow:hidden;
                h1{
                    text-align:center;
                    font-size:.53rem;
                    color:#151515;
                }
                li{
                    input{
                        width:5rem;
                        padding-left:.1rem;
                    }
                }
                .close{
                    position:absolute;
                    top:.47rem;
                    right:.47rem;
                    width:.5rem;
                    height:.5rem;
                    z-index:2000;
                    background:url("@{IMAGE-PATH}example-close.png?@{DATE}") no-repeat center center/100% 100%;
                }
            }
        }
        .pay-fail-pop{
            text-align:center;
            .add-user-container{
                height:auto;
                margin-top: -6rem;
            }
            p{
                font-size:.43rem;
                text-align:center;
                color:#333;
                padding:.37rem;
            }
            img{
                width:6rem;
            }
        }
        .submit .pay-btn {
            margin-top: .4rem;
            width: 100%;
            z-index: 1000;
            outline: 0;
            border: 0;
            font-size: .53rem;
            line-height: 1.17rem;
            color: #fff;
            background: #f85f48;
            -webkit-border-radius: 5px;
            border-radius: 5px;
        }
    }


</style>
<template>
    <div class="page-container">
        <div class="header">
            <div class="user">
                <Avatar :avatarSrc="answerInfo.avatar"
                        :isHasScore="false"
                        :avatarWidth="style"
                        :score="answerInfo.score | formateScore"
                ></Avatar>
            </div>
            <div class="username">{{ answerInfo.nickname }}</div>
            <div class="tip">
                “感谢你的真诚帮助，我要支付一定的金额作为心意”
            </div>
        </div>
        <div class="section">
            <div class="title">
                打赏金额
            </div>
            <ul class="money-list">
                <li class="money-item" :class="{active:rewardMoney == 6}" @click="rewardChoice(6)">￥ 6</li>
                <li class="money-item" :class="{active:rewardMoney == 88}" @click="rewardChoice(88)">￥ 88</li>
                <li class="money-item" :class="{active:rewardMoney == 268}" @click="rewardChoice(268)">￥ 268</li>
                <li class="money-item" :class="{active:rewardMoney == 588}" @click="rewardChoice(588)">￥ 588</li>
            </ul>
            <div class="changable-money">
                <span>自定义金额 </span>
                <input type="number" ref="inputBox" @focus="isShowFooter = false" @blur="isShowFooter = true" @input="changeHandle($event)">
                <span class="symbol" >￥</span>
            </div>
        </div>
        <div class="submit">
            <div class="btn">
                <div class="btn-content" @click="goToPay">
                    确定支付
                </div>
            </div>
            <div class="tip" v-if="askId != 0">
                打赏金额<span>￥{{ userAskReward||"0" }}</span> <span class="check" @click="goToAskagain">查看</span>
            </div>
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
    import Avatar from '../../common/components/avatarCompontent.vue';
    import ComFooter from '../../common/components/footer.vue';
    import myAlertTip from '../../common/components/modelBox.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request';

    export default {
        name: 'appPage',
        components: {
            ComFooter,
            Avatar,
            myAlertTip,
            LoadingModel
        },
        data() {
            return {
                style:{
                    width:'120px',
                    height:'120px'
                },
                rewardMoney:88,
                answerId:"",
                askId:"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                answerInfo:{},
                userAskReward:"0",
                isShowFooter:true,
                // 是否显示支付失败弹窗
                wxPayFailPop:{
                    isShow:false,
                    imgData:"",
                    order_id:''
                }
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
                    link:location.href + channleStr
                });
            },
            /**
             * 金额输入获得焦点
             * @param {object} event vue封装的事件对象
             * @return
             * */
            changeHandle:function(event){
                let currentELe = event.currentTarget;
                let money = currentELe.value;
                this.rewardMoney = money;
            },
            /**
             * 打赏金额选择
             * @param {number|string} money 具体打赏金额
             * @return undefined
             * */
            rewardChoice:function(money){
                this.rewardMoney = money || 88;
                this.$refs.inputBox.value = "";
            },
            /**
             * 确认调支付
             * */
            async goToPay(){
                let data = {
                    uid:this.answerId,
                    ask_id:this.askId,
                    amount:this.rewardMoney
                };
                this.showLoading('打赏中...');
                await  myAjax.post( apiPath.rewardOrder,data )
                    .then( res => {
                        this.wxConfig = res;
                        // 调微信支付
                        commonFn.wxPay({
                            wxPayConf:this.wxConfig.jsApiParameters,
                            successCb:this.wxPaySuc.bind(this,this.wxConfig.out_trade_no),
                            failCb:this.wxPayFail.bind(this),
                            cancelCb:this.layer.bind(this,'支付失败，请重试')
                        });
                    } ).catch( e => this.layer( e ));
                this.hideLoading();
            },

            // 微信支付失败后的回调
            wxPayFail:function(){
                this.wxPayFailPop.isShow = true;
                // 通过订单号请求二维码数据
                this.getQrodePay();
            },

            // 关闭支付失败的弹窗
            closePayFailPop:function(){
                this.wxPayFailPop.isShow = false;
            },
            // 获取支付失败后的二维码支付
            getQrodePay(){
                let appid = JSON.parse(this.wxConfig.jsApiParameters).appId,
                    order_id = this.wxConfig.out_trade_no;
                let data = {
                    order_id:order_id,
                    app_id:appid,
                };
                myAjax.post( apiPath.qrcodePay,data )
                    .then( res => {
                        this.wxPayFailPop.order_id = res.out_trade_no;
                        this.wxPayFailPop.imgData = res.qrcode;
                    }).catch( e => this.layer( e ) )

            },
            // 判断该订单是否已支付
            async orderIsPaySuc(){
                this.layer('订单查询中...');
				await myAjax.post( apiPath.paySuccess,{order_id: this.wxPayFailPop.order_id} )
					.then( res => { this.wxPayFailPop.isShow = false; } )
					.catch( e => this.layer( e ) );
            },
            /**
             * 微信支付成功后的回调
             * */
            async wxPaySuc(){
                let that = this;
				await myAjax.post( apiPath.paySuccess,{ 'order_id': this.wxConfig.out_trade_no,'type':"4" } )
					.then( res => {
						if(this.askId == 0){
							// 如果是聊天室的打赏支付成功后就回到原来的聊天室
							let room = commonFn.getParams()['room'];
							let from = commonFn.getParams()['from'];
							let to = commonFn.getParams()['to'];
							localStorage.setItem('rewardAmount',this.rewardMoney);
							location.href = `/home/chatroom/chatRoom?room=${room}&from=${from}&to=${to}`;
						}else{
							location.href = "/home/spare/spareSuccess?order_id=" + that.wxConfig.out_trade_no + "&answer_id=" + that.answerId + "&ask_id=" + that.askId;
						}
					} ).catch( e => this.layer( e ) );
            },
            goToAskagain:function(){
                // location.href = "/home/ask/askAgain/press_id/" + this.askId;
                location.href = "/home/spare/tyrants?answer_id=" + this.answerId + "&ask_id=" + this.askId;
            },
            /**
             * 获得老师的信息
             * */
            async getAnswerInfo(){
                let data = {
                    answer_id:this.answerId
                };
                await myAjax.get( apiPath.rewardGetAnswerInfo,data )
                    .then( res => this.answerInfo = res )
                    .catch( e => this.layer(e) );
            },
            /**
             * 获得共打赏的金额
             * */
            async getUserAskReward(){
                let data = {
                    ask_id:this.askId,
                };
                await myAjax.get( apiPath.getUserAskReward,data )
                    .then( res =>  this.userAskReward = res.amount )
                    .catch( e => this.layer( e ) );
            }
    },
    async mounted() {

        this.answerId = commonFn.getParams()["answer_id"];
        this.askId = Number(commonFn.getParams()["ask_id"]);
        await this.getAnswerInfo();
        this.askId !== 0 && this.getUserAskReward();
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
