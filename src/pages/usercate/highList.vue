<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
        padding-bottom:2rem;
        .nav-tab{ position:fixed;width:100%;z-index:100;border-bottom:1px solid #e5e5e5;}
        .nav-tab .line{position:absolute;width:1.375rem;height:2px;background-color: #F85F48;bottom:0;left:.325rem;transition:all .5s ease-in-out;}
        .nav-tab ul{width:100%;font-size:0;background-color:#fff;margin:0 auto;}
        .nav-tab ul li{display:inline-block;width:20%;height:1.25rem;line-height:1.25rem;font-size:0.47rem;text-align:center;color:#333;}
        .nav-tab ul li span{display:inline-block;color:#404040;font-size:.468rem;}
        .nav-tab ul li.active{color:#F85F48;}
        #answerList{padding-top:1.25rem;}
        #answerList ul li{padding:.42rem .468rem;background-color:#fff;border-bottom:1px solid #f6f6f6;}
        #answerList ul li.active{background-color:#f5f5f5;}
        #answerList .answer-avatar{position:relative;width:1.406rem;height:1.406rem;}
        #answerList .answer-avatar img{width:1.406rem;height:1.406rem;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow: hidden; }
        #answerList .answer-avatar .score-icon{position:absolute;font-size:.8125rem;width:1.4375rem;line-height:.9375rem;border:1px solid #fff;  -webkit-border-radius:.4687rem;  -moz-border-radius:.4687rem;  border-radius:.4687rem;  background-color:#F85F48;  color:#fff;  text-align:center;  -webkit-transform: scale(.5);  transform: scale(.5);  -webkit-transform-origin:100% 100%;  transform-origin:100% 100%;  bottom:0;  right:-.156rem;  }
        #answerList .nickname{font-size:0.406rem;color:#404040;}
        #answerList .job-title{ margin:.02rem 0;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;color:#999;}
        #answerList p{font-size:.345rem;color:#999;}
        #answerList .score{display:inline-block;vertical-align:top; margin-top:-.05rem;margin-left:-.2rem;width:1.56rem;line-height:1rem;font-size:.813rem;color:#30cba8;  border:2px solid #30cba8;  -webkit-border-radius:.31rem;  border-radius:.31rem;  text-align:center;  -webkit-transform: scale(.5);  transform: scale(.5);  transform-origin: 50% 50%;  -webkit-transform-origin: 50% 50%;  }
        #answerList .answer-content{position:relative; padding-left:1.875rem; padding-right:2.9rem;}
        #answerList .ask-money{text-indent:-2px;position:absolute;top:50%;right:0;margin-top:-.3594rem;width:1.5625rem;line-height:.7187rem;font-size:.406rem;color:#F85F48;text-align:center;border:1px solid #F85F48;  -webkit-border-radius:.156rem;  -moz-border-radius:.156rem;  border-radius:.156rem;}
        #answerList .ask-money.active{color:#fff;background-color: #F85F48}
        .ask-money-yhj{position:absolute;top:50%;right:0;width:2.81rem;text-align:center; -webkit-transform: translate(0,-50%);transform: translate(0,-50%);}
        .yh-content{display:block;width:3rem;height:.625rem;color:#fff;text-align:center;font-size:.37rem;line-height:.625rem;background:url("@{IMAGE-PATH}yhjbg.png?@{DATE}") no-repeat center;background-size:100% 100%;}
        .yh-prize{display:inline-block;color:#F85F48;font-size:.47rem;marigin-bottom:.15rem;}
        .yh-content .prize{text-decoration: line-through;color:#fff;font-size:.37rem;}
    }
</style>
<template>
    <div class="page-container" >
        <section class="main content2" id="answerList" style="padding-top:0;">
            <ul class="lists tab" ref="answerList">
                <li class="list-item cf" v-for="(item,index) in answers.data"
                    :data-uid="item.answer_id"
                    :data-couponid="item.coupon_id"
                    @click.stop.prevent="gotoAnswerIndex($event,item.answer_id,item.coupon_id)"
                >
                    <div class="answer-avatar fl">
                        <img :src="item.avatar" :alt="item.job_title">
                        <span class="score-icon">{{ item.scoreFormat }}</span>
                    </div>
                    <div class="answer-content">
                        <h2 class="nickname">{{ item.answer_name }}</h2>
                        <p class="job-title">{{ item.job_title }}</p>
                        <p>已回答{{ item.answers }}次</p>
                        <template v-if="item.askMoneyType == 1">
                            <span class="ask-money-yhj">
                                <span class="yh-prize">￥{{ item.askMoney }}</span>
                                <span class="yh-content">新人劵减免<span class="prize">{{ item.couponAmount }}</span></span>
                            </span>
                        </template>
                        <template v-else-if="item.askMoneyType == 2">
                            <span class="ask-money-yhj">
                                <span class="yh-prize">￥{{ item.askMoney }}</span>
                                <span class="yh-content">优惠劵减免<span class="prize">{{ item.couponAmount }}</span></span>
                            </span>
                        </template>
                        <template v-else>
                            <span class="ask-money-yhj">
                                <span class="yh-prize">￥{{ item.askMoney }}</span>
                            </span>
                        </template>
                    </div>
                </li>

                <infinite-loading :on-infinite="getAnswers" :distance="100" spinner="circles" ref="infiniteLoading">
                    <span slot="no-results">
                         暂无数据
                    </span>
                        <span slot="no-more">
                         暂无更多数据
                    </span>
                </infinite-loading>
            </ul>
        </section>
        <ComFooter current="2"></ComFooter>
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import ComFooter from '../../common/components/footer.vue';
    import InfiniteLoading from 'vue-infinite-loading';
    import myAjax from '../../common/js/request';

    export default {
        name: 'appPage',
        components: {
            ComFooter,
            InfiniteLoading,
            Avatar
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                answers:{
                    api:apiPath.highServiceAnswer,
                    page:1,
                    high_cate_id:1,
                    data:[],
                    count:10
                },
                startChain:null
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
            async getAnswers(){
                this.answers.high_cate_id = commonFn.getParams()["high_cate_id"];
                let data = {
					p : this.answers.page,
					high_cate_id:this.answers.high_cate_id,
					r:this.answers.count,
				}
                await myAjax.get( this.answers.api,data )
					.then( res => {
						if( res.length ){
							let len = this.answers.data.length;
							this.answers.data = this.answers.data.concat(res);
							// 价格格式化
							res.forEach(function(val,i){
								this.$set( this.answers.data[i + len],"askMoney",this.formatePrize(val.ask_money));
								this.$set( this.answers.data[i + len],"couponAmount",this.formatePrize(val.coupon_amount));
								this.$set( this.answers.data[i + len],"scoreFormat",this.formateScore(val.score));
								// 价格优惠类型 1=》新人优惠，2 => 优惠劵优惠，3=》普通优惠。。。可扩展
								var type = this.postRequest(this.startChain,val.coupon_id,0);
								this.$set( this.answers.data[i + len],"askMoneyType",type);
							},this);
							this.answers.page++;
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
						}else{
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:complete');
						}
					} ).catch( e => {  } )
            },
            formatePrize:function(prize){
                if( !prize ){  return "0"; }
                var prizeStr =  prize + "";
                return prizeStr.replace(/^(\d+)\.0+$/,"$1");
            },
            formateScore:function(score){
                return score >= 5 ? "5.0"
                    : score <= 4.6 ? "4.6" : score;
            },
            // 用户不同优惠类型的显示处理
            // 1、新用户优惠显示
            newUserShow:function(coupon_id,new_user){
                if( new_user == 1 ){
                    return 1;
                }else{
                    return "nextSuccessor";
                }
            },
            // 2、获得优惠劵显示
            couponShow:function( coupon_id,new_user ){
                if( coupon_id > 0 ){
                    return 2;
                }else{
                    return "nextSuccessor"
                }
            },
            // 3、普通价格显示
            normalShow:function( coupon_id,new_user ){
                return 3;
            },
            // 显示类型的职责链模式封装调用
            prizeShowType:function(){
                var Chain = function( fn ){
                    this.fn = fn;
                    this.successor = null;
                }
                Chain.prototype.setNextSuccessor = function(successor){
                    this.successor = successor;
                }
                Chain.prototype.postRequest = function(){
                    var ret = this.fn.apply(this,arguments);
                    if( ret == "nextSuccessor" ){
                        return this.successor && this.successor.postRequest.apply(this.successor,arguments);
                    }else{
                        return ret;
                    }
                }
                var newUserChain = new Chain(this.newUserShow);
                var couponChain = new Chain(this.couponShow);
                var normalChain = new Chain(this.normalShow);
                newUserChain.setNextSuccessor( couponChain );
                couponChain.setNextSuccessor( normalChain );
                return newUserChain;
            },
            postRequest:function( requester,coupon_id,new_user ){
                return requester.postRequest( coupon_id,new_user );
            },
            // 点击老师卡片跳转至老师首页
            gotoAnswerIndex:function(e,answerId,couponId){
                var target = e.currentTarget;
                target.classList.add("active");
                location.href = "/home/user/index?answer_uid=" + answerId  + "&coupon_id="+ couponId +"&type=3";
            },
    },
    mounted() {
        this.startChain = this.prizeShowType();
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
