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
                font-size:.47rem;
                text-align:center;
                font-weight:bold;
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
                }
            }
            .changable-money{
                padding-left:1rem;
                input{
                    width:2.5rem;
                    height:1rem;
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
                padding:0 0 .78rem;
                width:100%;
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
            .rank{
                text-align:center;
                font-size:.4375rem;
                .rank-level{
                    display:inline-block;
                    margin-top:.43rem;
                    width:2.81rem;
                    height:.93rem;
                    border-radius:10px;
                    font-size:.43rem;
                    text-align:center;
                    line-height:.94rem;
                    color:@mainColor;
                    border:1px solid @mainColor;
                }
            }
            .tip{
                font-size:.4375rem;
                text-align:center;
                padding:.47rem 0;
                margin-top:2rem;
                span:nth-child(1){
                    color:@mainColor;
                }
                .check{
                    margin-left:.15rem;
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

    }


</style>
<template>
    <div class="page-container" >
        <div class="header">
            <div class="user">
                <Avatar :avatarSrc="rewardSucData.avatar"
                        :isHasScore="false"
                        :avatarWidth="style"
                        :score="rewardSucData.score | formateScore"
                ></Avatar>
            </div>
            <div class="username">{{ rewardSucData.nickname }}</div>
            <div class="tip">
                谢谢您的打赏
            </div>
        </div>
        <div class="submit">
            <div class="btn">
                <div class="btn-content" @click="goOnReward">
                    继续打赏
                </div>
            </div>
            <div class="rank">
                <p>您在{{ rewardSucData.nickname }}打赏排名+{{ rewardSucData.answer_rank_change}}，列第{{ rewardSucData.answer_rank}}名</p>
                <p>您在平台打赏排名+{{ rewardSucData.rank_change}}，列第{{ rewardSucData.rank}}名</p>
                <div class="rank-level" @click="gotoRankLevel">
                    查看排行榜
                </div>
            </div>
            <div class="tip">
                您可以继续向{{ rewardSucData.nickname }}<span class="check" @click="goToQuestion">提问</span>
            </div>
        </div>
        <ComFooter current="3"></ComFooter>
        <!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import ComFooter from '../../common/components/footer.vue';
    import myAjax from '../../common/js/request';
    export default {
        name: 'appPage',
        components: {
            ComFooter,
            Avatar
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        data() {
            return {
                // 渠道
                style:{
                    width:'120px',
                    height:'120px'
                },
                tip:{
                    isShow:false,
                    text:"hello world",
                    time:1500
                },
                answer_id:"",
                ask_id:"",
                rewardSucData:{}
            }
        },
        methods: {
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
            //跳至提问页面
            goToQuestion:function(){
                location.href = `/home/user/index?answer_uid=${this.answer_id}`;
            },
            goOnReward:function(){
                location.href = `/home/user/spare?answer_id=${this.answer_id}&ask_id=${this.ask_id}`;
            },
            gotoRankLevel:function(){
                location.href = `/home/spare/tyrants?answer_id=${this.answer_id}&ask_id=${this.ask_id}`;
            },
            async getRewardSucData(){
                let data = {
                    order_id:commonFn.getParams()["order_id"]
                };
                await myAjax.get( apiPath.rewardSuccess,data )
                    .then( res => this.rewardSucData = res )
                    .catch( e => {} );
            }
    },
    async mounted() {
        this.answer_id = commonFn.getParams()["answer_id"];
        this.ask_id = commonFn.getParams()["ask_id"];
        await this.getRewardSucData();
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
