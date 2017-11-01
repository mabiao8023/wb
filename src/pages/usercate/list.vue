<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
        .nav-tab{ position:fixed;width:100%;z-index:100;border-bottom:1px solid #e5e5e5;}
        .nav-tab .line{position:absolute;width:1.375rem;height:4px;background-color: #F85F48;bottom:0;left:.325rem;transition:all .5s ease-in-out;}
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
        /*新手引导*/
        #model-top{
            position:absolute;
            top:0;
            left:-3px;
            right:-3px;
            height:1.42rem;
            z-index:102;
            background-color:rgba(0,0,0,.7);
            -webkit-box-shadow: inset 0 -2px 6px #fff;
            box-shadow: inset 0 -2px 6px #fff;
        }
        #model-bottom{
            position:absolute;
            top:3.635rem;
            left:-3px;
            right:-3px;
            bottom:0;
            z-index:102;
            background-color:rgba(0,0,0,.7);
            -webkit-box-shadow: inset 0 2px 6px #fff;
            box-shadow: inset 0 2px 6px #fff;
        }
        #model-middle{
            position:absolute;
            top:1.4rem;
            left:-3px;
            right:-3px;
            height:2.3rem;
            z-index:102;
        }
        #model-bottom .model-hand{
            position:absolute;
            top:-1rem;
            right:2rem;
        }
        .click-animation{
            width:1.875rem;
            height:1.875rem;
            margin-left:4rem;
            margin-top:0rem;
            perspective:1000px;
            position:relative;
        }
        .click-animation .hand{
            width:1.03rem;
            height:1.1rem;
            position:absolute;
            bottom:0;
            right:0;
            z-index:1001;
            animation:handAnimation 1s ease-in infinite;
        }
        .click-animation .hand img{
            width:100%;
        }
        .click-animation .circle{
            position:absolute;
            top:50%;
            left:50%;
            transform-origin: 50% 50%;
            border:2px solid #F85F48;
            background: #fff;
            border-radius:50%;
            /*opacity:0;*/
        }
        .click-animation .circle1{
            width:0.85rem;
            height:0.85rem;
            margin-top:-.425rem;
            margin-left:-.425rem;
            z-index:1000;
            animation: circle1Animation 1s linear infinite;
        }
        .click-animation .circle2{
            width:1.187rem;
            height:1.187rem;
            margin-top:-.59rem;
            margin-left:-.59rem;
            z-index:999;
            animation: circle2Animation 1s linear infinite;
        }
        .click-animation .circle3{
            width:1.56rem;
            height:1.56rem;
            margin-top:-.78rem;
            margin-left:-.78rem;
            z-index:998;
            animation: circle3Animation 1s linear infinite;
        }
        @keyframes handAnimation{
            0%{
                transform: translate3d(0,0,0);

            }
            70%{
                transform: translate3d(5px,5px,0);
            }
            100%{
                transform: translate3d(0px,0px,0);
            }
        }
        @keyframes circle1Animation {
            0% {
                transform:scale3d(1,1,1);
                opacity: 1;
            }
            70%{
                transform:scale3d(1.1,1.1,1);
                opacity: 0.3;
            }
            100%{
                transform:scale3d(1.2,1.2,1);
                opacity: 0;
            }
        }
        @keyframes circle2Animation {
            0% {
                transform:scale3d(1,1,1);
                opacity: .7;
            }
            80%{
                transform:scale3d(1.4,1.4,1);
                opacity: 0;
            }
            100%{
                opacity: 0;
            }
        }
        @keyframes circle3Animation {
            0% {
                transform:scale3d(1,1,1);
                opacity: .4;
            }
            60%{
                transform:scale3d(1.2,1.2,1);
                opacity: 0;
            }
            100%{
                opacity: 0;
            }
        }
    }
</style>
<template>
    <div class="page-container" >
        <nav class="main nav-tab tab">
            <ul>
                <li class="active item" data-id="17" @click="navClickHandler($event,17)">
                    情感
                </li>
                <li data-id="14" class="item" @click="navClickHandler($event,14)">
                    事业
                </li>
                <li data-id="19" class="item" @click="navClickHandler($event,19)">
                    风水
                 </li>
                <li data-id="1" class="item" @click="navClickHandler($event,1)">
                    财运
                </li>
                <li data-id="21" class="item" @click="navClickHandler($event,21)">
                    其他
                </li>
            </ul>
            <div class="line" :style="lineStyle" ref="line">
            </div>
        </nav>
        <section class="main content2" id="answerList">
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
                        <h2 class="nickname">{{ item.nickname }}</h2>
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
        <!--新人弹窗-->
        <div id="newsGuide" v-if="user.isNew == 1" @touchmove.prevent="">
            <div id="model-top">
            </div>
            <div id="model-middle" @click.stop.prevent="firstLiClicked">
            </div>
            <div id="model-bottom">
                <div class="model-hand" @click.stop.prevent="firstLiClicked">
                    <div class="click-animation" >
                        <div class="circle circle1">
                        </div>
                        <div class="circle  circle2">
                        </div>
                        <div class="circle circle3">
                        </div>
                        <div class="hand">
                            <img src="../../image/small-hand.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ComFooter current="2"></ComFooter>
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import AudioShow from '../../common/components/audioShowCompontent.vue'
    import ComFooter from '../../common/components/footer.vue';
    import InfiniteLoading from 'vue-infinite-loading';
    import ImageShow from '../../common/components/imageShow.vue';
	import myAjax from '../../common/js/request';

	export default {
        name: 'appPage',
        components: {
            ComFooter,
            InfiniteLoading,
            ImageShow,
            AudioShow,
            Avatar
        },
        filters:{
            formateScore:function(value){
                if(!value){
                    return '4.6';
                }
                return value >= 5 ? '5.0' : value <= 4.6 ? '4.6' : value + '';
            },
            formateMoney:function(value){
                if(!value){
                    return '';
                }
                var prizeStr =  value + "";
                return prizeStr.replace(/^(\d+)\.0+$/,"$1");
            }
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                user:{
                    id:'',
                    isNew:false,
                    step:3,
                    count:0
                },
                nav:{
                    translateX:0
                },
                answers:{
                    api:"/home/usercate/answerList",
                    count:10,
                    page:1,
                    cate_id:17,
                    data:[]
                },
                startChain:null,
                initLineLeft:10
            }
        },
        computed:{
            lineStyle:function(){
                return { transform : 'translate3d(' + this.nav.translateX + 'px,0,0)'}
            },
        },
        methods: {
            navClickHandler:function(event,type){
                event.stopImmediatePropagation();
                var target = event.target;
                var children = target.parentElement.children;
                var lastActivedEle = document.querySelector(".main li.active");
                if( lastActivedEle !== target){
                    [].forEach.call(children,function(val){
                        val.classList.remove("active");
                    });
                    target.classList.add("active");
                    this.answers.data = [];
                    this.answers.page = 1;
                    this.answers.cate_id = type;
                    this.$refs["infiniteLoading"].$emit('$InfiniteLoading:reset');
                    // 点击后线滑动
                    this.lineScroll(target);
                }
            },
            lineScroll:function(targetEle){
                var targetWidth =  targetEle.getBoundingClientRect().width;
                var lineLeft = this.$refs["line"].getBoundingClientRect().left;
                var targetLeft = targetEle.getBoundingClientRect().left;
                this.nav.translateX += (targetLeft - lineLeft + this.initLineLeft);
            },
			async getAnswers(){
				this.answers.high_cate_id = commonFn.getParams()["high_cate_id"];
				let data = {
					p : this.answers.page,
					cate_id:this.answers.cate_id,
					count:this.answers.count
				}
				await myAjax.get( this.answers.api,data )
					.then( res => {
						if( res.answer_list.length ){
							let len = this.answers.data.length;
							this.answers.data = this.answers.data.concat(res.answer_list);
							// 价格格式化
							res.answer_list.forEach(function(val,i){
								this.$set( this.answers.data[i + len],"askMoney",this.formatePrize(val.ask_money));
								this.$set( this.answers.data[i + len],"couponAmount",this.formatePrize(val.coupon_amount));
								this.$set( this.answers.data[i + len],"scoreFormat",this.formateScore(val.score));
								// 价格优惠类型 1=》新人优惠，2 => 优惠劵优惠，3=》普通优惠。。。可扩展
								var type = this.postRequest(this.startChain,val.coupon_id,this.user.isNew);
								this.$set( this.answers.data[i + len],"askMoneyType",type);
							},this);
							this.answers.page++;
							// 保证新手引导只弹出一次
							if( this.user.count == 0 && new_user == 1){
								this.user.isNew = new_user;
								this.user.count = 1;
								history.pushState({page: 1}, "title 1", "");
								if (window.history && window.history.pushState) {
									window.addEventListener('popstate', function () {
										location.href = "/home/index/index";
									});
								}
							}
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
            // 新人弹窗中间部分被点击
            firstLiClicked:function(){
                // 压入历史记录，监听后事件，并刷新页面
                this.user.isNew = 0;
                this.$refs["answerList"].firstElementChild.click();
                this.$http.post("/home/ajax/logStep",{ uid:uid,step:3 },{emulateJSON:true}).then(function(){});
            },
            // 点击老师卡片跳转至老师首页
            gotoAnswerIndex:function(e,answerId,couponId){
                var target = e.currentTarget;
                target.classList.add("active");
                location.href = "/home/user/index?answer_uid=" + answerId + "&coupon_id=" + couponId;
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
			async newsGuideHandler(){
				await myAjax.get(apiPath.isPopBoot,{step:3} )
					.then( res => {
						this.user.isNew = res.new_user;
					} ).catch( e => {} );

				if( this.user.isNew == 1 ){
					history.pushState({page: 1}, "title 1", "");
				}
			},
    },
    async mounted() {
		await  this.newsGuideHandler();
        this.startChain = this.prizeShowType();
        this.share();
        this.initLineLeft = this.$refs["line"].getBoundingClientRect().left;
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
