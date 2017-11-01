<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
    }
    // 搜索
    .search{
        /*position:fixed;*/
        /*top:0;*/
        /*left:0;*/
        /*right:0;*/
        background:#fff;
        /*z-index:100;*/
		border-bottom:1px solid #eee;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
		padding:.156rem  .47rem;
        .search-box{
            height:100%;
            border:1px solid #eee;
            .br(5px);
            text-align: center;
            .search-content{
                display:inline-block;
                color:#aaa;
                line-height:.93rem;
                font-size:.41rem;
                width: 4rem;
                text-align:center;
                background:url('../../image/search-index.png') no-repeat left center/.39rem .39rem;
            }
        }
    }
    // 导航

    .nav{
        width:5.63rem;
        margin:.31rem auto;
        background: #fff;
        font-size:0;
        .br(5px);
        border:1px solid @mainColor;
        overflow: hidden;
        li{
            display:inline-block;
            font-size:.47rem;
            width:50%;
            text-align:center;
            line-height:.95rem;
            color:@mainColor;
            &.active{
                color:#fff;
                background-color: @mainColor;
            }
        }

    }
    /*问题榜*/
    .questions_ul > li{padding:.47rem;margin-bottom:.3rem;background:#fff;}
    .questions_ul > li dt{text-align:justify;color:#151515;font-size:.44rem;line-height:.718rem;font-weight:normal;margin:.156rem 0;}
    .questions_ul > li dl{margin:0;padding:0;}
    .questions_ul > li dd span.other{font-size:.375rem;color:#666;}
    .questions_ul > li dd .content{margin-top:.15rem;}
    .media{display:inline-block;}
    .media a{display:inline-block;}
    .user{ display:inline-block;margin-right:20px;}
    .received{float:right;line-height:1.25rem;color:#999;font-size:.375rem;}

    /* 首页活动弹窗 */
    .action-window{
        position:fixed;
        top:0;left:0;
        right:0;bottom:0;
        z-index:1000;
        background:rgba(0,0,0,.7);
    }
    .action-window .container{
        position:absolute;
        top:50%;left:50%;
        width:9.71rem;
        background:transparent;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        -webkit-border-radius:5px 5px;
        border-radius:5px 5px;
    }
    .action-window .container img{
        vertical-align:middle;
    }
    .action-window .close{
        position:absolute;
        right: .8rem;
        top: -1.375rem;
        width:.9rem;
        height:1.375rem;
        background: url("@{IMAGE-PATH}close-pop.png?@{DATE}") no-repeat center center;
        background-size:.9rem 1.375rem;
    }
    .n-content{
        position:absolute;
        top:50%;
        left:50%;
        width:6.47rem;
        height:7.875rem;
        margin-left:-3.235rem;
        margin-top:-3.06rem;
        text-align:center;
    }
    .n-content .n-title{
        font-size:.47rem;
        color:#bd553b;
        font-weight:bold;
        padding-bottom:.33rem;
    }
    .n-content .n-prize{
        width:100%;
        height:2.656rem;
    }
    .n-content .n-prize p:first-child{
        font-size:1.22rem;
        font-weight:bolder;
        color:#fff;
        text-shadow: 0 4px 4px #cb2e1a;
        padding-top:.3rem;
    }
    .n-content .n-prize p:first-child em{
        font-size:0.80rem;
        font-weight:bolder;
        vertical-align:text-bottom;
        line-height:1.375rem;
    }
    .n-content .n-prize p:last-child{
        font-size:.47rem;
        color:#fff;
    }
    .n-content .n-wel{
        margin-top:.3rem;
        font-size:.4375rem;
        height:1.953rem;
        text-align:justify;
        color:#bd553b;
        line-height:1.5;
    }
    .n-content .n-btn{
        width:4.5rem;
        height:1.125rem;
        margin:.275rem auto 0;
    }
    .click-animation{
        width:1.875rem;
        height:1.875rem;
        margin-left:4rem;
        margin-top:-1.3rem;
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
        -webkit-animation:handAnimation 1s ease-in infinite;
    }
    .click-animation .hand img{
        width:100%;
    }
    .click-animation .circle{
        position:absolute;
        top:50%;
        left:50%;
        /*-webkit-transform: translate3d(-50%,-50%,0);*/
        /*transform: translate3d(-50%,-50%,0);*/
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        border:2px solid #F85F48;
        background: #fff;
        -webkit-border-radius:50%;
        -moz-border-radius:50%;
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
        -webkit-animation: circle1Animation 1s linear infinite;
    }
    .click-animation .circle2{
        width:1.187rem;
        height:1.187rem;
        margin-top:-.59rem;
        margin-left:-.59rem;
        z-index:999;
        animation: circle2Animation 1s linear infinite;
        -webkit-animation: circle2Animation 1s linear infinite;
    }
    .click-animation .circle3{
        width:1.56rem;
        height:1.56rem;
        margin-top:-.78rem;
        margin-left:-.78rem;
        z-index:998;
        animation: circle3Animation 1s linear infinite;
        -webkit-animation: circle3Animation 1s linear infinite;
    }
    @keyframes handAnimation{
        0%{
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);

        }
        70%{
            -webkit-transform: translate3d(5px,5px,0);
            transform: translate3d(5px,5px,0);
        }
        100%{
            -webkit-transform: translate3d(0px,0px,0);
            transform: translate3d(0px,0px,0);
        }
    }
    @keyframes circle1Animation {
        0% {
            -webkit-transform:scale3d(1,1,1);
            transform:scale3d(1,1,1);
            opacity: 1;
        }
        70%{
            -webkit-transform:scale3d(1.1,1.1,1);
            transform:scale3d(1.1,1.1,1);
            opacity: 0.3;
        }
        100%{
            -webkit-transform:scale3d(1.2,1.2,1);
            transform:scale3d(1.2,1.2,1);
            opacity: 0;
        }
    }
    @keyframes circle2Animation {
        0% {
            -webkit-transform:scale3d(1,1,1);
            transform:scale3d(1,1,1);
            opacity: .7;
        }
        80%{
            -webkit-transform:scale3d(1.4,1.4,1);
            transform:scale3d(1.4,1.4,1);
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes circle3Animation {
        0% {
            -webkit-transform:scale3d(1,1,1);
            transform:scale3d(1,1,1);
            opacity: .4;
        }
        60%{
            -webkit-transform:scale3d(1.2,1.2,1);
            transform:scale3d(1.2,1.2,1);
            opacity: 0;
        }
        100%{
            opacity: 0;
        }
    }
    //banner
    .banner-container{
        height:3.75rem;
        overflow: hidden;
        .swiper-pagination{
            text-align:right!important;
            padding-right:.31rem;
            .swiper-pagination-bullet{
                opacity: 1!important;
                background:#fff!important;
                border:1px solid @mainColor;
            }
            .active{
                background:@mainColor!important;
                opacity: 1!important;
            }
        }
        img{
            height:3.75rem;
        }
    }
    //高价列表
    .high-prize-container{
        background:#fff;
        margin-bottom:.31rem;
        .swiper{
            padding-bottom:.68rem;
        }
        .swiper-pagination{
            bottom:.34rem!important;
            .swiper-pagination-bullet{
                opacity: .5!important;
            }
            .active{
                background:#f85f48!important;
                opacity: 1!important;
            }
        }
    }
    .high-list{
        padding:0 .47rem;
        //width:100%;
        font-size:0;
        li{
            display:inline-block;
            font-size:.41rem;
            width:25%;
            text-align:center;
            padding:.31rem;
            color:#333;
            img{
                width:.75rem;
                height:.75rem;
            }
        }
    }
    // 图片展示
    .photo-show{
        padding:0 0 .15rem;
        li{
            padding:0;
            display:inline-block;
            width:2.46rem;
            height:2.46rem;
            background:#e7e7e7;
            margin-right:.156rem;
            margin-bottom: 0;
            .br(5px);
            overflow: hidden;
            position:relative;
            img{
                width:100%;
                position:absolute;
                top:50%;
                -webkit-transform: translate(0,-50%);
                transform: translate(0,-50%);
            }
        }
    }
    // 弹窗显示
    .photo-pop{
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background-color:#000;
        z-index:1000;
        .photo-pop-container{
            position:absolute;
            //background-color:#fff;
            top:50%;
            left:0;right:0;
            -webkit-transform: translate(0,-50%);
            transform: translate(0,-50%);
            max-height:100%;
            overflow: scroll;
            .swiper-pagination-bullet{
                opacity: 1!important;
                background:#fff!important;
                border:1px solid @mainColor;
            }
            .active{
                background:@mainColor!important;
                opacity: 1!important;
            }
        }
        .close{
            position: absolute;
            width: .75rem;
            height: .75rem;
            top: .7rem;
            right: .47rem;
            z-index:10000;
            background: url("@{IMAGE-PATH}detail-close.png?@{DATE}") no-repeat center center;
            background-size: .75rem .75rem;
        }
    }
    // 上周排行榜
    .last-week-rank{
        padding:.37rem;
        background:#fff;
        margin-bottom:.31rem;
        .total-title{
            text-align:center;
            font-size:.53rem;
            color:#333;
            span{
                display:inline-block;
                vertical-align: middle;
            }
            .line{
                width:1.71rem;
                height:.56rem;
            }
            .line-left{
                margin-right:.25rem;
                background: url("@{IMAGE-PATH}line-left.png?@{DATE}") no-repeat center center/1.71rem .125rem;
            }
            .line-right{
                margin-left:.25rem;
                background: url("@{IMAGE-PATH}line-right.png?@{DATE}") no-repeat center center/1.71rem .125rem;
            }
        }
        .classify-rank{
            padding:.31rem 0;
            padding-bottom:0;
            border-bottom:1px solid #e6e6e6;
            position:relative;
            &:last-child{
                border-bottom:none;
            }
            .hide-line{
                content:"";
                position:absolute;
                left:0;right:-.31rem;
                opacity: 1;
                bottom:0;
                height:.25rem;
                z-index:30;
                background-color: #fff;
            }
        }
        .title{
            font-size:.47rem;
            color:#333;
            margin-bottom:.15rem;
            .loadmore{
                float:right;
                color:@mainColor;
                font-size:.43rem;
                line-height: 1.5;
                text-decoration: underline;
            }
        }
    }
    ::-webkit-scrollbar {
        display:none;
        width: 0;
        height: 0;
        background-color: transparent;
    }
    .rank-container{
        //width:100%;
        padding-bottom:.31rem;
        margin-right: -.31rem;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        position: relative;
        z-index:10;
        &::-webkit-scrollbar {
            position: relative;
            z-index:-1;
            display:none;
            width: 0;
            height: 0;
        }
        .rank-list{
            width:22rem;
            font-size:0;
            .rank-item{
                display:inline-block;
                margin-right:.47rem;
                .rank-avatar{
                    width:1.718rem;
                    height:1.718rem;
                    position:relative;
                    img{
                        width:1.718rem;
                        height:1.718rem;
                        .br(50%);
                    }
                    .rank-icon{
                        position:absolute;
                        bottom:0;
                        right:0;
                        width:.625rem;
                        height:.625rem;
                        &.rank-base{
                            .br(50%);
                            line-height:.625rem;
                            text-align:center;
                            font-size:.375rem;
                            background:@mainColor;
                            color:#fff;
                        }
                        &.number1{
                            width:.71rem;
                            height:.71rem;
                            background: url("@{IMAGE-PATH}gold.png?@{DATE}") no-repeat center center/.71rem .71rem;
                        } &.number2{
                              width:.71rem;
                              height:.71rem;
                              background: url("@{IMAGE-PATH}silver.png?@{DATE}") no-repeat center center/.71rem .71rem;
                          } &.number3{
                                width:.71rem;
                                height:.71rem;
                                background: url("@{IMAGE-PATH}copper.png?@{DATE}") no-repeat center center/.71rem .71rem;
                            }
                    }
                }
                .rank-nickname{
                    font-size:.41rem;
                    color:#999;
                    text-align:center;
                }
            }
        }
    }
    .erweima-box{
		position:fixed;
		top:0;
		left:0;
		right:0;
		height:78px;
		z-index:1000;
        .close-erweima-box{
            width:44px;
            height:44px;
            position:absolute;
            top:15px;
            left:12px;
        }
    }
</style>
<template>
    <div class="page-container" >
		<div class="erweima-box" ref="qrode"  v-if="isShowErweima">
			<div class="close-erweima-box" @click.stop="closeQrodePop"></div>
			<img src="../../image/index-erweima-img.jpg">
		</div>
        <div class="search" :style="'margin-top:' + marTop" @click.stop.prevent="gotoSearchPage">
            <div class="search-box">
                <div class="search-content">
                    查找老师和服务
                </div>
            </div>
        </div>
        <div class="banner-container">
            <swiper ref="swiper"
                    direction="horizontal"
                    :mousewheel-control="true"
                    :performance-mode="false"
                    :pagination-visible="true"
                    :pagination-clickable="true"
                    :loop="true"
                    :autoplay="true"
                    :autoplaytime="4000"
            >
                <div v-for="(item,index) in banner">
                    <a :href="item.link">
                        <img :src="item.src" :alt="item.desc" />
                    </a>
                </div>
            </swiper>
        </div>
        <div class="high-prize-container">
            <div v-for="item in highServiceList">
                <ul class="high-list">
                    <li v-for="items in item" class="high-list-item" @click.stop.prevent="gotoAnswerList($event,items.id)">
                        <img :src="items.icon" alt="">
                        <p>{{items.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!--排行榜-->
        <div class="last-week-rank" v-if="rankList.answer_rank">
            <h1 class="total-title"><span class="line line-left"></span><span>一周明星老师</span><span class="line line-right"></span> </h1>
            <div class="richer-rank classify-rank">
                <h1 class="title">人气榜前10 <span class="loadmore" style="display:none;" @click="gotoRewardPage">查看</span></h1>
                <div class="rank-container">
                    <ul class="rank-list">
                        <li class="rank-item" @click.stop.prevent="gotoAnswerIndex($event,item.id)" v-for="(item,index) in rankList.ask_money_rank" v-if="item">
                            <div class="rank-avatar">
                                <img :src="item.avatar">
                                <span class="rank-icon"  :class="{'rank-base':index>2,number1:index==0,number2:index==1,number3:index==2}">{{index+1}}</span>
                            </div>
                            <p class="rank-nickname">{{item.nickname.substr(0,4)}}</p>
                        </li>
                    </ul>
                </div>
                <div class="hide-line"></div>
            </div>
            <div class="better-rand classify-rank">
                <h1 class="title">好评榜前10</h1>
                <div class="rank-container">
                    <ul class="rank-list">
                        <li class="rank-item" @click.stop.prevent="gotoAnswerIndex($event,item.id)" v-for="(item,index) in rankList.evaluate_rank" v-if="item">
                            <div class="rank-avatar">
                                <img :src="item.avatar">
                                <span class="rank-icon"  :class="{'rank-base':index>2,number1:index==0,number2:index==1,number3:index==2}">{{index+1}}</span>
                            </div>
                            <p class="rank-nickname">{{item.nickname.substr(0,4)}}</p>
                        </li>
                    </ul>
                </div>
                <div class="hide-line"></div>
            </div>
            <div class="faster-rand classify-rank">
                <h1 class="title">快速回复榜前10</h1>
                <div class="rank-container">
                    <ul class="rank-list">
                        <li class="rank-item" @click.stop.prevent="gotoAnswerIndex($event,item.id)" v-for="(item,index) in rankList.answer_rank" v-if="item">
                            <div class="rank-avatar">
                                <img :src="item.avatar">
                                <span class="rank-icon"  :class="{'rank-base':index>2,number1:index==0,number2:index==1,number3:index==2}">{{index+1}}</span>
                            </div>
                            <p class="rank-nickname">{{item.nickname.substr(0,4)}}</p>
                        </li>
                    </ul>
                </div>
                <div class="hide-line"></div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div class="photo-pop" @touchmove.prevent=""  @click.stop="photoPop.isShow = !photoPop.isShow" v-if="photoPop.imgData.length>0 && photoPop.isShow">
                <div class="close" @click.stop="photoPop.isShow = !photoPop.isShow"></div>
                <div class="photo-pop-container">
                    <swiper ref="swiper"
                            direction="horizontal"
                            :mousewheel-control="false"
                            :performance-mode="false"
                            :pagination-visible="true"
                            :pagination-clickable="false"
                            :loop="false"
                            :autoplay="false"
                            :autoplaytime="4000"
                    >
                        <div v-for="val in photoPop.imgData">
                            <img :src="val">
                        </div>
                    </swiper>
                </div>
            </div>
        </transition>
        <ul class="questions_ul">
            <li v-for="(item,index) in questions" @click="gotoQuestionDetial(item.id)">
                <dl>
                    <dt>{{ item.ask }}</dt>
                    <!--问题中的图片展示-->
                    <template v-if="item.image_info.length > 0">
                        <ImageShow :image_info="item.image_info"></ImageShow>
                    </template>
                    <!--<ul class="photo-show" v-if="item.image_info.length>0" @click.stop="photoShow($event,item.image_info)">-->
                        <!--<li v-for="val in item.image_info" data-id="val.id">-->
                            <!--<img :src="val.thumb_url">-->
                        <!--</li>-->
                    <!--</ul>-->
                    <dd>
                        <span class="other">{{ item.user.nickname }}｜{{ item.user.job_title }}</span>
                        <div class="content">
                            <div class="user">
                                <Avatar :avatarSrc="item.user.avatar"
                                        :answerUid="item.user.id"
                                        :isHasScore="true" :score="item.user.score | formateScore"
                                ></Avatar>
                            </div>
                            <div class="media">
                                <AudioShow  :fee_touting="item.fee_touting" :time="item.media_time"></AudioShow>
                            </div>
                            <div class="received">听过{{ item.touting }}</div>
                        </div>
                    </dd>
                </dl>
            </li>
            <infinite-loading :on-infinite="getQuestion" :distance="100" spinner="circles" ref="infiniteLoading">
                    <span slot="no-results">
                            暂无数据
                    </span>
                <span slot="no-more">
                            暂无更多数据
                    </span>
            </infinite-loading>
        </ul>
        <!-- 新手引导start -->
        <transition name="fade" mode="out-in">
            <div id="news_window" @touchmove.stop.prevent="" class="action-window" v-if="newsGuide.isShow == 1">
                <div class="container">
                    <div class="close" @click="newsClickHandler">
                    </div>
                    <div class="img" >
                        <img src="../../image/newUserPop.png" alt="">
                    </div>
                    <div class="n-content">
                        <div class="n-title">
                            获得1张{{ newsGuide.data.name }}
                            </div>
                        <div class="n-prize">
                            <p>{{ newsGuide.data.value }}<em>元</em></p>
                            <p>{{ newsGuide.data.name }} | 满{{ newsGuide.data.mininum }}元立减 </p>
                        </div>
                        <div class="n-wel" v-html="newsGuide.data.desc">
                        </div>
                        <div class="n-btn" id="n-btn" @click="newsClickHandler">
                        </div>
                        <div class="click-animation" @click="newsClickHandler">
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
        </transition>
        <!--新手弹窗end-->
        <!--优惠卷弹窗start-->
        <!--<transition name="fade" mode="out-in">-->
        <div id="read_airicle_window" @touchmove.stop.prevent="" class="action-window" v-if="(newsGuide.isShow != 1) && readAiricle.value">
            <div class="container">
                <div class="close" @click.stop="readAiricle.value = 0">
                </div>
                <div class="img" >
                    <img src="../../image/newUserPop.png" alt="">
                </div>
                <div class="n-content">
                    <div class="n-title">
                        获得1张优惠券
                    </div>
                    <div class="n-prize">
                        <p>{{ readAiricle.value }}<em>元</em></p>
                        <p>优惠券 | 满{{ readAiricle.mininum }}元立减 </p>
                    </div>
                    <div class="n-wel" v-html="readAiricle.desc">
                    </div>
                    <div class="n-btn" @click.stop="gotoOnePage">
                    </div>
                    <div class="click-animation" @click.stop="gotoOnePage">
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
        <!--</transition>-->
        <!--优惠卷弹窗end-->
        <ComFooter current="1"></ComFooter>
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
    import Swiper from '../../common/components/swiper.vue';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            ComFooter,
            InfiniteLoading,
            ImageShow,
            AudioShow,
            Avatar,
            Swiper
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                banner:[],
                highServiceList:[],
                pop:{},
                questions:[],
                page:1,
                popData:{
                    src:"http://img.ggwan.com/yd/userPic/201705/60386f159246c285.jpg",
                    link:"/home/usercate/index",
                    desc:"H5事业"
                },
                popShow:false,
                newsGuide:{
                    isShow:false,
                    data:{
                        name:'',
                        value:'',
                        mininum:'',
                        desc:''
                    }
                },
                user:{
                    id:'',
					isNewUser:0,
				},
                readAiricle:{},
                photoPop:{
                    isShow:false,
                    imgData:[]
                },
                // 一周排行榜
                rankList:{},
                isShowErweima:false
            }
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        computed:{
            marTop(){
				if( this.isShowErweima ){
					return '1.56rem'
				}else{
					return '0px'
				}
			}
		},
        methods: {
            async getBanner(){
				await myAjax.post(apiPath.banner)
					.then(res => this.banner = res.banner_list)
					.catch(e => {
					});
				// 关闭二维码弹窗
			},
            closeQrodePop(){
                this.isShowErweima = false;
            },
            // 获取是否弹二维码关注弹窗
            async getIsReadlyFocus(){
				await myAjax.get( apiPath.getIsReadlyFocus )
					.then( res => {
						if( res.status == 0 ){
							this.isShowErweima = true;
						}else{
							this.isShowErweima = false;
						}
					} ).catch( e => {
						this.isShowErweima = false;
					} );
            },
            async getQuestion(){
                await myAjax.get( apiPath.indexAsks,{ p:this.page}  )
                    .then( res => {
                        if(res.length){
                            this.page++;
                            this.questions = this.questions.concat(res);
                            this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
                        }else{
                            this.$nextTick(() => {
                                this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                            });
                        }
                    } ).catch( e => {} );
            },
            gotoQuestionDetial(askId){
                location.href = `/home/ask?ask_id=${askId}`;
            },
            async newsGuideHandler(){
                await myAjax.get(apiPath.isPopBoot,{step:2} )
					.then( res => {
						if( res.new_user == 1 ){
						    this.newsGuide.data = res.coupon;
							this.newsGuide.isShow = true;
						}else{
							this.newsGuide.isShow = false;
						}
					} ).catch( e => {} );

                if( this.newsGuide.isShow == 1 ){
                    history.pushState({page: 1}, "title 1", "");

                    let data = {
                        node:"newUserGuild",
                        num:1
                    };
                    // 埋点统计弹出新手弹窗的次数
                    await myAjax.post(apiPath.newNums,data)
                            .then(res => {})
                            .catch( e => { } );
                }
            },
            async newsClickHandler(){
                this.newsGuide.isShow = false;
				await myAjax.post( apiPath.logStep,{uid:uid,step:2} )
					.then( res => {} )
					.catch( e => {} );
                location.href = "/home/usercate/index";
            },
            async getHighPrizeList(){
                await myAjax.get( apiPath.highService )
					.then( res => {
						let len = res.length;
						let num = Math.ceil(len/8);
						for(let i = 0;i < num;i++ ){
							if( num*8 <= len ){
								this.highServiceList.push(res.slice(i*8,len+1));
								break;
							}else{
								this.highServiceList.push(res.slice(i*8,(i+1)*8));
							}
						}
					} ).catch( e => {} );
            },
            gotoAnswerList(event,id){
                location.href = `/home/usercate/highList?high_cate_id=${id}`;
            },

            // 图片弹窗显示
            photoShow(event,imgInfo){
                // 展现弹窗
                // imInfo为存放图片的路径对象
                this.photoPop.imgData = [];
                var imageUrls = [];
                // 拿出对应的路劲展现到弹窗中
                for(var i = 0; i < imgInfo.length;i++){
                    imageUrls[i] = imgInfo[i].image_url;
                }
                this.photoPop.imgData = imageUrls;
                this.photoPop.isShow = true;
            },
            // 跳到固定的页面
            gotoOnePage(event){
                // 隐藏优惠券弹窗
                this.readAiricle.value = 0;
                // 页面跳转至固定页面
                if(this.readAiricle.notify_url){
                    location.href = this.readAiricle.notify_url
                }
            },
            // 获取优惠券的信息
            async getCouponMessage(prize_id){
                let data = {
                        prize_id : prize_id
                    }
                await myAjax.get(apiPath.readText,data)
                        .then(res=>{

                            if( this.newsGuide.isShow ){
                                // 说明有新手弹窗
                            }else{
                                // 无新手弹窗
                                if( res.value ){
                                    this.readAiricle = res;
                                }else{
                                    if( res.notify_url ){
                                        location.href = res.notify_url;
                                    }
                                }
                            }
                        })
                        .catch( e => {/* this.layer(e) */} );
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
            // 获取等级列表
            async getRankList(){
                await myAjax.get(apiPath.answerRank)
                        .then(res=>{
                           this.rankList = res;
                        })
                        .catch( e => {  } );
            },
            // 跳转到老师页面
            gotoAnswerIndex(event,id){
                location.href = `/home/user/index?answer_uid=${id}`;
            },
            // 跳转至打赏页面
            gotoRewardPage(){
                location.href = `/home/spare/tyrants?type=2&from=1&teacherType=1`;
            },
            // 跳转至搜索页面
            gotoSearchPage(){
                location.href = '/home/search/index';
            },
    },
    created(){
        var prize_id = commonFn.getParams()["prize_id"];
        this.getBanner()
            .then(this.getHighPrizeList)
            .then(() => {
                //分享
                this.share();
                // 动态添加统计代码
                addStatisticsCode();
            });
		this.getIsReadlyFocus();
        // 新手引导
        this.newsGuideHandler();
        if( prize_id ){
            this.getCouponMessage(prize_id)
                .then(this.getRankList);
        }else{
            this.getRankList();
        }
    },
    mounted() {
    }
    }
</script>
