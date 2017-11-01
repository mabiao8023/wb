<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @import "../../less/user/index";
    .page-container{
        padding-bottom:2rem;
        .main1{
            margin-top:.31rem;
            padding:0.47rem;
            background-color:#fff;
            position:relative;
            .askType-container{
                width:100%;
                .askType{
                    font-size:0;
                    width:100%;
                    display:flex;
                    justify-content: space-between;
                    li{
                        border-radius:10px;
                        overflow:hidden;
                        display:flex;
                        align-items: center;
                        width:260px;
                        height:105px;
                        text-align:center;
                        font-size:.4rem;
                        color:@mainColor;
                        position:relative;
                        vertical-align: middle;
                        border:1px solid @mainColor;
                        .left{
                            width:90px;
                        }
                        p{
                            line-height:1.5;
                        }
                        .icon{
                            display:block;
                            width:55px;
                            height:55px;
                            margin:0 auto;
                        }
                        &.active{
                            color:#fff;
                            background-color:@mainColor;
                            &::after{
                                content:"";
                                display:none;
                            }
                        }
                        &.disable{
                            color: #fff;
                            background-color: #aaa;
                            border: none;
                        }
                        &.type0 .icon{
                            background:url(../../image/ask-icon.png) no-repeat center center;
                            background-size:54px 54px;
                        }
                        &.type1 .icon{
                            background:url("@{IMAGE-PATH}private.png?@{DATE}") no-repeat center center;
                            background-size:100% ;
                        }
                        &.type2 .icon{
                            background:url(../../image/high-icon.png) no-repeat center center;
                            background-size:100% ;
                        }
                        &.type0.active .icon{
                            background:url(../../image/ask-icon-active.png) no-repeat center center;
                            background-size:54px 54px;
                        }
                        &.type1.active .icon{
                            background:url("@{IMAGE-PATH}private-active.png?@{DATE}") no-repeat center center;
                            background-size:100% ;
                        }
                        &.type2.active .icon{
                            background:url(../../image/high-icon-active.png) no-repeat center center;
                            background-size:100% ;
                        }
                        &.type2.disable .icon{
                            background:url(../../image/high-icon-active.png) no-repeat center center;
                            background-size:100% ;
                        }
                    }
                 }
            }

            .tip{
                font-size:.41rem;
                padding:.31rem 0 0;
                color:#999;
                line-height:1.5;
                text-align:justify;
            }
            .textArea{
                margin:.31rem 0 0;
                position:relative;
                textArea{
                    padding-left: .47rem;
                    height:2rem;
                    line-height:1.5;
                    resize:none;
                    width:100%;
                    color:#151515;
                    font-size:.4rem;
                    text-align:justify;
                    outline:none;
                    border:none;
                }
                .icon{
                    position:absolute;
                    width:.33rem;
                    height:.36rem;
                    z-index:10;
                    top: .15rem;
                    left: 0rem;
                    background:url("@{IMAGE-PATH}input.png?@{DATE}") no-repeat center center;
                    background-size:100% 100%;
                }
            }
            // 是否是公开问题
            .isPublic{
                text-align:justify;
                font-size:.43rem;
                input{
                    vertical-align:middle;
                }
            }

            //
            .total-money{
                padding:.156rem 0 0;
                margin-top:.31rem;
                line-height:1.5;
                border-top:1px solid #e6e6e6;
                p{
                    &:first-child{
                        color:@mainColor;
                        font-size:.46rem;
                    }
                    font-size:.437rem;
                    .left{
                        text-align:left;
                    }
                    .right{
                        text-align:right;
                    }
                }
            }
        }
        .service-list{
            margin-top:30px;
            .service-item{
                padding-bottom:30px;
                border-top:1px solid @mainColor;
                &:last-child{
                    border-bottom:1px solid @mainColor;
                }
                .service-part1{
                    font-size:28px;
                    font-weight:bold;
                    display: flex;
                    justify-content: space-between;
                    color:@mainColor;
                    padding:20px 0;
                }
                .service-part2{
                    display: flex;
                    justify-content: space-between;
                    font-size:26px;
                    color:#404040;
                    align-items: flex-end;
                }
                .service-desc{
                    width:500px;
                    text-align:justify;
                }
                .service-check-box{
                    width:36px;
                    height:36px;
                    border:1px solid @mainColor;
                    border-radius:4px;
                    overflow: hidden;
                    &.active{
                        background:@mainColor url(../../image/service-checked.png) no-repeat center center/19px 19px;
                    }
                }
            }
        }
        .service-tip{
              h1{
                  text-align:center;
                  padding:20px 0;
                  color:#666;
                  font-size:28px;
              }
              p{
                  color:#777;
                  line-height:1.5;
                  font-size:26px;
                  text-align:justify;
              }
          }
    }
    .picker-move-enter, &.picker-move-leave-active
    {
        transform: translate3d(0, 492px, 0);
    }
    .picker-move-enter-active, &.picker-move-leave-active
    {
        transition: all .3s ease-in-out;
    }
    .introduce{
        max-height: none;
    }
</style>
<template>
    <div class="page-container">
        <header class="header">
            <div>
                <div class="cf">
                    <div class="user fl">
                        <Avatar :avatarSrc="answer.avatar"
                                :isHasScore="true"
                                :score="score"
                        ></Avatar>
                    </div>
                    <div class="content">
                        <h3>{{ answer.nickname }} <span class="answers">{{ answer.follows }}个关注</span></h3>
                        <p class="job_title">{{ answer.job_title }}</p>
                    </div>
                    <div @click.stop.prevent="choiceFollow"
                         :class="['follow',{active:answer.is_follow == 1}]">
                        {{answer.is_follow == 1?"已关注":"+ 关注"}}
                    </div>
                </div>
                <div class="introduce" ref="introduce">
                    {{ answer.introduce }}
                </div>
                <span class="all-answers">{{ answer.answers }}个回答</span>
            </div>
        </header>
        <!-- 详情弹窗 -->
        <section class="main1">
            <div class="askType-container">
                <ul class="askType">
                    <li :class="['type0',{active:ask.type == 1}]"  @click.stop.prevent="askClassifyClick($event,1)"
                    >
                        <div class="left">
                            <i class="icon"></i>
                        </div>
                        <div class="right">
                            <p class="title">普通问题</p>
                            <p>￥{{ answer.ask_order_original_money | moneyFormat }}/次</p>
                        </div>
                    </li>
                    <!--隐藏个人问题，说不定哪天又出来了-->
                    <!--<li style="display:none;" :class="['type1',{active:ask.type == 2}]"  @click.stop.prevent="askClassifyClick($event,2)"-->
                    <!--&gt;-->
                        <!--<p class="title">个人问题</p>-->
                        <!--<i class="icon"></i>-->
                        <!--<p>￥{{ answer.private_order_original_money | moneyFormat }}/次</p>-->
                    <!--</li>-->
                    <li :class="['type2',{active:ask.type == 3,disable:!answer.is_high_service}]"  @click.stop.prevent="askClassifyClick($event,3)"
                    >
                        <div class="left">
                            <i class="icon"></i>
                        </div>
                        <div class="right">
                            <p class="title">一对一咨询室</p>
                            <p v-if="answer.is_high_service">畅聊48小时</p>
                            <p v-else>暂未开通</p>
                        </div>
                    </li>
                </ul>
            </div>
            <transition  mode="out-in">
                <!--普通和个人问题分类-->
                <div v-if=" ask.type == 1 || ask.type == 2 ">
                        <div class="tip">
                            <p>含2次免费追问；一事一测，老师的分析会更准确;</p>
                            <p v-if="answer.is_high_service">起名/择日/风水改运等需要详细分析，请选用一对一咨询室服务。</p>
                            <p v-else>起名/择日/风水改运等需要详细分析，请联系客服预约老师沟通。</p>
                        </div>
                        <!--姓名列表及输入姓名弹窗-->
                        <div class="user-container" v-if="userInfoList.length>0">
                            <ul class="user-list" @click="userInfoHandle">
                                <li v-for="(item,index) in userInfoList" :class="{active: index == currentUserInfoIndex}" :data-id="index"><i :data-id="item.id" :data-index="index"></i>{{item.user_name.slice(0,4)}}</li>
                            </ul>
                            <div @click.stop.prevent="addUser"  class="add-user">
                            </div>
                            <div class="current-user">
                                {{ currentUserInfo }}
                            </div>
                        </div>
                        <div class="question-from-container">
                            <ul class="question-from">
                                <li class="name" v-if="userInfoList.length == 0">
                                    <span class="title" >您的姓名:</span>
                                    <input type="text" v-model.trim="ask.user_name" @blur="inputBlur" @focus="inputFocus" @click.stop.prevent="calendar.isShow = false" placeholder="请输入姓名">
                                </li>
                                <li v-if="userInfoList.length == 0">
                                    <span class="title">您的性别:</span>
                                    <span class="male sex-item" @click.stop.prevent="choiceSex($event,1)"><i :class="['icon',{active:ask.gender == 1}]"></i>男</span>
                                    <span class="female sex-item" @click.stop.prevent="choiceSex($event,0)"><i :class="['icon',{active:ask.gender == 0}]"></i>女</span>
                                </li>
                                <li class="birthday" v-if="userInfoList.length == 0">
                                    <span class="title">出生日期:</span>
                                    <input @focus="$event.currentTarget.blur()" readonly ref="birthday" type="text" @click.stop.prevent="calendar.isShow = true" placeholder="请选择日期">
                                </li>
                                <li class="birthday" v-if="userInfoList.length == 0">
                                    <span class="title">出生地点:</span>
                                    <input @focus="$event.currentTarget.blur()" readonly ref="birthplace" type="text" @click.stop.prevent="showPicker" placeholder="请选择出生地点">
                                </li>
                                <li class="textArea-item">
                                    <span class="title">问题详情:</span>
                                    <div class="textArea">
                                        <div class="icon"></div>
                                        <textarea maxlength="140" ref="textarea" name="askContent" :placeholder="placeholder" v-model.lazy.trim="ask.content" @focus="textaeraFocus" @blur="textaeraBlur"></textarea>
                                    </div>
                                </li>
                            </ul>
                            <div class="upload-photo" style="opacity:0;height:0;display:none;">
                                <input type="file" ref="photos" accept="image/*" @change="choosePhoto">
                            </div>
                            <ul class="photo-show">
                                <li v-for="(item,index) in preShowImages" :class="[{background:item.src != null},{border:item.src == null}]" @click="choicePhoto($event,index)">
                                    <div v-if="item.src != null">
                                        <div class="photo-container">
                                            <img :src="item.src" ref="photos-container" alt="">
                                            <div class="upload-progress" v-if="(!item.isUploadSuc)&&item.isBeginUpload">
                                                <span class="line"></span>
                                                <span class="active-line" :ref="'active-line' + index"></span>
                                            </div>
                                            <transition name="fade">
                                                <div class="upload-complete" v-if="item.isUploadSuc">
                                                    <i class="complete-icon"></i>
                                                </div>
                                            </transition>
                                        </div>
                                        <div class="delete-photo" v-if="item.isShowDelete" @click.stop="deletePhoto($event,index)"></div>
                                    </div>
                                </li>
                                <li @click.stop="photoExamplePop.isShow = true">参考示列</li>
                            </ul>
                            <p class="upload-photo-tip">如果看手面相或者风水，请上传小于5M的图片</p>
                        </div>
                        <transition name="fade" mode="out-in">
                            <div class="photo-pop" @click.stop="photoPop.isShow = !photoPop.isShow" v-show="photoPop.isShow" @touchmove.stop="">
                                <div class="photo-pop-box">
                                    <img :src="photoPop.imgSrc">
                                </div>
                            </div>
                        </transition>
                        <div class="isPublic">
                            <input type="checkbox" v-model="ask.isPublic" id="isPublic"><label for="isPublic">公开提问，答案每被人偷偷听一次，你将从中获得￥0.5元</label>
                        </div>
                        <div class="total-money cf" v-if="ask.type == 1">
                            <p class="cf"><span class="fl">共需支付</span><span class="fr">{{ answer.ask_order_original_money - answer.ask_order_coupon | moneyFormat }}元</span></p>
                            <p class="cf"><span class="fl">原价</span><span class="fr">{{ answer.ask_order_original_money | moneyFormat }}元</span></p>
                            <p class="cf"><span class="fl">优惠劵减免</span><span class="fr">-{{ answer.ask_order_coupon | moneyFormat }}元</span></p>
                        </div>
                        <div class="total-money cf" v-if="ask.type == 2">
                            <p class="cf"><span class="fl">共需支付</span><span class="fr">{{ answer.private_order_original_money - answer.private_order_coupon | moneyFormat }}元</span></p>
                            <p class="cf"><span class="fl">原价</span><span class="fr">{{ answer.private_order_original_money | moneyFormat }}元</span></p>
                            <p class="cf"><span class="fl">优惠劵减免</span><span class="fr">-{{ answer.private_order_coupon | moneyFormat }}元</span></p>
                        </div>
                        <div class="submit">
                            <button class="submit-btn" @click.stop.prevent="submit">写好了</button>
                        </div>
                    </div>
                <div v-if="ask.type == 3">
                        <ul class="service-list">
                            <li class="service-item"
                                v-for="(item,index) in chatData"
                                @click.stop.prevent="choiceChatItem(item)">
                                <div class="service-part1">
                                    <div class="service-title">
                                        {{ item.name }}
                                    </div>
                                    <div class="service-money">
                                        ￥{{ item.price }}
                                    </div>
                                </div>
                                <div class="service-part2">
                                    <div class="service-desc">
                                        {{ item.intro }}
                                    </div>
                                    <div class="service-check-box"
                                         :class="{active:item.isChecked}"
                                    >
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="service-tip">
                            <h1>服务说明</h1>
                            <p>
                                1. 通过文字、图片、语音进行1对1咨询<br/>
                                2. 服务期时长为48小时<br/>
                                3. 可详细咨询购买项目的相关问题
                            </p>
                        </div>
                        <div class="submit">
                             <button class="submit-btn" @click.stop.prevent="gotoChatPay">一对一咨询（{{ chatTotalMoney }}元）</button>
                        </div>
                    </div>
            </transition>
        </section>
        <transition>
            <section  class="main2">
                <ul class="main2-nav tit cf">
                    <li class="nav-item fl items tab1 active" @click.stop.prevent="answeredAndCommend($event,1)">回答问题({{ answer.answers }})</li>
                    <li class="nav-item items fr tab2" @click.stop.prevent="answeredAndCommend($event,2)">匿名评价({{ answer.evaluate_count }})</li>
                </ul>
                <div v-if="answeredAndCmdData.type == 1">
                    <ul class="main2-content">
                        <li class="answered" v-for="item in answeredAndCmdData.list" @click.stop.prevent="gotoDetailPage($event,item.id)">
                            <div class="cf">
                                <div class="user">
                                    <Avatar :avatarSrc="item.user.avatar"
                                            :isHasScore="false"
                                    ></Avatar>
                                </div>
                                <p>{{ item.ask }}</p>
                                <!--问题中的图片展示-->
                                <template v-if="item.image_info.length > 0">
                                    <ImageShow :image_info="item.image_info"></ImageShow>
                                </template>
                            </div>
                            <div class="content cf">
                                <div class="cf">
                                    <div class="user">
                                        <Avatar :avatarSrc="item.answer_user.avatar"
                                                :isHasScore="true"
                                                :score="score"
                                        ></Avatar>
                                    </div>
                                    <AudioShow :fee_touting="item.fee_touting" :time="item.media_time"></AudioShow>
                                </div>
                                <div class="replytime">
                                    {{ item.answer_time }}
                                    <span class="fr">{{ item.touting }}人偷偷听</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-if="!answeredAndCmdData.hasAnsweredData" class="no-data-tip">暂无更多数据</div>
                    <div v-if="answeredAndCmdData.hasAnsweredData" class="loadMore" @click="loadMore()">
                        查看更多
                    </div>
                </div>
                <div v-else>
                    <ul class="main2-content">
                        <li class="commend" v-for="item in answeredAndCmdData.commendList">
                            <div class="clear cf">
                                <div class="avatar fl">
                                    <img class="round-avatar" :src="item.avatar">
                                    <span>{{ item.nickname }}</span>
                                </div>
                                <start-show :rank="item.rank"></start-show>
                            </div>
                            <div class="cmd_content">{{ item.content }}</div>
                        </li>
                    </ul>
                    <div v-if="!answeredAndCmdData.hasCommendData" class="no-data-tip">暂无更多数据</div>
                    <div v-if="answeredAndCmdData.hasCommendData" class="loadMore" @click="loadMore()">
                        查看更多
                    </div>
                </div>
            </section>
        </transition>
        <!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
        <!-- 普通与个人问题提问成功 -->
        <transition name="fade" mode="in-out">
            <div class="lowPrizePop" v-if="lowPrizePop.isShow" @touchmove.prevent="">
                <div class="lowPrizePop-close" @click="lowPaySuc"></div>
                <p class="lowPrize-header">老师回复内容在<span>【易起问】</span>公众号中查看，<span>请务必关注！！</span></p>
                <img src="https://img.ggwan.com/yd/Public/index/image/finish_erweima.jpg" alt="">
                <p class="lowPrize-middle">长按二维码识别关注接收通知提醒</p>
                <p class="lowPrize-bottom">
                    您的问题将在<br>
                    <span>24小时内</span><br>
                    回复，超过24小时未回答将全额退款。如有疑问可在公众号上联系客服解决。
                </p>
            </div>
        </transition>
        <!--上传图片弹窗展示-->
        <transition name="fade" mode="out-in">
            <div class="photo-example-pop" v-if="photoExamplePop.isShow" @touchmove.prevent="">
                <div class="photo-example-container">
                    <div class="close" @click.stop="photoExamplePop.isShow = false">
                    </div>
                    <div class="photo-swiper" >
                        <Swiper ref="swiper"
                                direction="horizontal"
                                :mousewheel-control="false"
                                :performance-mode="false"
                                :pagination-visible="true"
                                :pagination-clickable="false"
                                :loop="false"
                                :autoplay="false"
                                :autoplaytime="4000"
                        >
                            <div>
                                <p>手相正确示例:</p>
                                <img src="../../image/hand-example.jpg" alt="">
                            </div>
                            <div>
                                <p>风水正确示例:</p>
                                <img src="../../image/fenshui.jpg" alt="">
                            </div>
                            <div>
                                <p>面相正确示例:</p>
                                <img src="../../image/face-example.jpg" alt="">
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </transition>
        <!--日期插件-->
        <mdatetimepicker v-if="calendar.isShow" @change="dateChange"></mdatetimepicker>
        <!--地区选择-->
        <city-picker-v2 v-if="cityPicker.isShow" @change="cityPickerChange"></city-picker-v2>
        <!--增加用户信息的弹窗-->
        <transition name="fade" mode="in-out">
            <div class="add-user-pop" v-if="addUserPop.isShow" @touchmove.prevent="">
                <div class="add-user-container">
                    <div class="close" @click.stop="closeAddUserPop()">
                    </div>
                    <div class="add-user-form">
                        <h1>请输入用户信息</h1>
                        <ul class="question-from add-user-box">
                            <li class="name">
                                <span class="title">您的姓名:</span>
                                <input type="text" v-model.trim="addUserPop.data.user_name" @click.stop.prevent="calendar.isShow = false" placeholder="请输入姓名">
                            </li>
                            <li>
                                <span class="title">您的性别:</span>
                                <span class="male sex-item" @click.stop.prevent="addUserChoiceSex($event,1)"><i class="icon" :class="{active:addUserPop.data.gender == 1}"></i>男</span>
                                <span class="female sex-item" @click.stop.prevent="addUserChoiceSex($event,0)"><i class="icon" :class="{active:addUserPop.data.gender == 0}"></i>女</span>
                            </li>
                            <li class="birthday">
                                <span class="title">出生日期:</span>
                                <input @focus="$event.currentTarget.blur()" readonly ref="birthday" type="text" @click.stop.prevent="calendar.isShow = true" placeholder="请选择日期">
                            </li>
                            <li class="birthday">
                                <span class="title">出生地点:</span>
                                <input @focus="$event.currentTarget.blur()" readonly ref="birthplace" type="text" @click.stop.prevent="showPicker" placeholder="请选择出生地点">
                            </li>
                        </ul>
                        <div class="submit">
                            <button class="submit-btn" @click.stop.prevent="submitUser">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!--问多个老师弹窗-->
        <transition name="fade" mode="in-out">
            <div class="more-ask-pop" v-if="askMorePop.isShow">
                <!--<div class="more-ask-pop">-->
                <div class="more-ask-popbox">
                    <div class="close" @click.stop.prevent="closeMoreAskPop"></div>
                    <div class="more-ask-container">
                        <h1 class="title">平台--优选老师</h1>
                        <p class="descript">根据您的提问，平台为您推荐以下老师</p>
                        <ul class="answer-list">
                            <li class="answer-item" v-for="(item,index) in askMoreList" @click.stop.prevent="choiceMoreAnswer(index)">
                                <div class="header cf">
                                    <div class="user">
                                        <img class="avatar" :src="item.avatar">
                                        <span class="auth_ico">{{ item.star >= 5.0 ? '5.0' : item.star <= 4.6 ? '4.6':item.star }}</span>
                                    </div>
                                    <div class="content">
                                        <h3>{{ item.nickname }}  <span class="answers">{{ item.answers }}个回答</span></h3>
                                        <p class="job_title">{{ item.job_title }}</p>
                                    </div>
                                    <div class="checkbox" :class="{active:item.isChecked}"></div>
                                </div>
                                <div class="introduce">
                                    {{item.introduce}}
                                        </div>
                                <div class="ask-money">
                                    ￥{{ item.ask_money | moneyFormat }}
                                        </div>
                            </li>
                        </ul>
                        <div class="button" @click.stop.prevent="submitMoreAsk">
                            <div class="left fl">
                                <p>提问</p>
                                <p>￥{{(totalMoney*couponDiscount - couponValue) | moneyFormat}}</p>
                            </div>
                            <div class="right">
                                <p>原价 ￥{{ totalMoney | moneyFormat }}</p>
                                <p>优惠券已减免 <span>{{ couponValue | moneyFormat }}</span></p>
                                <p>提问{{  countCheckedNum }}人 <span>{{ couponDiscount == 1 ? '不打' : couponDiscount*10 + ''  }}折</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!--扫二维码的弹窗-->
        <transition name="fade" mode="in-out">
            <div class="add-user-pop pay-fail-pop" v-if="wxPayFailPop.isShow">
                <div class="add-user-container">
                    <div class="close" @click.stop.prevent="closePayFailPop">
                    </div>
                    <div class="add-user-form" >
                        <h1>支付遇到问题？</h1>
                        <p>长按识别下方二维码继续完成支付</p>
                        <div>
                            <img :src="wxPayFailPop.imgData" alt="">
                        </div>
                        <div class="submit">
                            <button class="submit-btn" @click.stop.prevent="orderIsPaySuc">我已完成付款</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
        <ComFooter current="2" ref="footerbar"></ComFooter>
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
    import ImageShow from '../../common/components/imageShow.vue';
    import myAlertTip from '../../common/components/modelBox.vue';
    import Swiper from '../../common/components/swiper.vue';
    import mdatetimepicker from '../../common/components/mDatetimePicker/mDatetimePicker.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import cityPickerV2 from '../../common/components/cityPicker/city-picker-v2.vue';
    import startShow from '../../common/components/startCompontent.vue';
    import myAjax from '../../common/js/request';

    export default {
        name: 'appPage',
        components: {
            ComFooter,
            ImageShow,
            AudioShow,
            Avatar,
            myAlertTip,
            Swiper,
            mdatetimepicker,
            LoadingModel,
            cityPickerV2,
            startShow
        },
        data() {
            return {
                answer_uid:"0",
                user:{
                    id:0,
                    new_user:false,
                    prizeid:0,
                    count_id:0,
                    coupon_id:0
                },
                wxConfig:{},
                // 答主信息
                answer:{
                    answer_uid: "",
                    answers: "100000+",
                    ask_order_coupon: "0.00",
                    ask_order_original_money: "0.00",
                    evaluate_count: "",
                    follows: "100000+",
                    introduce: "东方智慧语音咨询平台",
                    is_follow: 0,
                    is_high_service: 0,
                    job_title: "东方智慧语音咨询平台",
                    nickname: "易起问",
                    star: 5
                },
                // 提问数据
                ask:{
                    type:1,   //问题类型
                    content:localStorage.getItem("ask_content")||"老师分析一下我的八字，还有我的个人运势是如何的呢？",
                    order_id:"121312",
                    cate_id:"17",
                    isPublic:true,
                    mess_id:'',
                    user_name:'',
                    gender:1,
                    birthday:"",
                    hours:'',
                    bir_timestamp:"",
                    is_calendar:1,
                    province:'', // 省份
                    city:'', // 城市
                    county:'', // 区县
                },
                // 回答了的问题和评论列表
                answeredAndCmdData:{
                    type:1,   //代表回答了的问题
                    hasAnsweredData:false,
                    hasCommendData:false,
                    list:[],
                    commendList:[],
                    page:1,
                    api:"/home/user/answered",  /// home/Evaluate/evaluateList?answer_uid=20318&p=1
                },

                //低价问题支付成功弹窗
                lowPrizePop:{
                    isShow:false,
                },
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                timer:1,
                ifFocus:false,
                // 阅读原文券
                // readAiricle:readAiricleData,
                // 表单图片数据预览
                preShowImages:[
                    {
                        src:null,
                        isBeginUpload:false,
                        isUploadSuc:false,
                        isShowDelete:true,
                        progress:0
                    },
                    {
                        src:null,
                        isBeginUpload:false,
                        isUploadSuc:false,
                        isShowDelete:true,
                        progress:0
                    },
                    {
                        src:null,
                        isBeginUpload:false,
                        isUploadSuc:false,
                        isShowDelete:true,
                        progress:0
                    }
                ],
                // 当前点击的上传图片对应的下标
                uploadPhotoIndex:0,
                // 上传图片的放大
                photoPop:{
                    isShow:false,
                    imgSrc:null,
                },
                // 实例弹窗
                photoExamplePop:{
                    isShow:false
                },
                // 禁用页面上传图片
                // isDisableUploadBtn:false,
                // 提问接口拼接上传图片
                image_ids:[],
                res_ids:[],
                // 提问日期组件
                calendar:{
                    isShow:false,
                    data:{}
                },
                // 地区组件
                cityPicker:{
                    isShow:false,
                    data:{}
                },
                // 显示添加用户信息的弹窗
                addUserPop:{
                    isShow:false,
                    data:{
                        id:0,
                        user_name:'',
                        gender:1,
                        birthday:"",
                        hours:"",
                        bir_timestamp:"",
                        is_calendar:1,
                        province:'', // 省份
                        city:'', // 城市
                        county:'', // 区县
                    }
                },
                userInfoList:[],
                // 显示当前用户信息,默认显示第一个
                currentUserInfoIndex:0,
                // 一题多问数据
                askMoreList:[],
                // 一题多问弹窗显示
                askMorePop:{
                    isShow:false
                },
                // 是否显示支付失败弹窗
                wxPayFailPop:{
                    isShow:false,
                    imgData:"",
                    order_id:''
                },
                // 一单多问的优惠券信息
                couponData:[],
                // 一单多问打折信息
                discount:{},
                // 图文咨询数据,和老师聊天的数据
                chatData:[],
                // 聊天被选中的id
                highServiceId:0
            }
        },
        filters:{
            moneyFormat:function(val){
                val = (+val).toFixed(2);
                var val2 = val + "";
                return val2.replace(/^(\d+)\.0+$/,"$1");
            },
            dateFormat:function(time){
                var year = time.getFullYear(),
                    month = time.getMonth() + 2,
                    date = time.getDate(),
                    m = month >= 10 ? month : "0" + month,
                    d = date >= 10 ? date : "0" + date;
                return year + "-" + m + "-" + d;
            }
        },
        computed:{
            placeholder:function(){
                return this.ask.type == 1 ? "向" + this.answer.nickname + "提问，等Ta语音回答；老师回复后可以免费追问咨询您的问题。" :
                    "如：姓名丁丁，生辰八字为阳历1987年6月25日上午9时，问今年是否适合结婚。(向"+ this.answer.nickname +"提问，等Ta语音回答；老师回复后可以免费追问咨询您的问题。)";
            },
            score:function(){
                return this.answer.star >= 5.0 ? "5.0" :
                    this.answer.star <= 4.6 ? "4.6" : this.answer.star;
            },
            isShowViewMore:function(){
                return  this.highPriceService.length > 3 ? true : false;
            },
            // 当前用户的显示
            currentUserInfo:function(){
                var current = this.userInfoList[this.currentUserInfoIndex];
                let currentGender = current.gender == 1 ? "男" : "女";
                let province = current.province || '';
                let city = current.city || ''
                return `${current.user_name}  ${currentGender} ${current.birthday} ${current.hours} ${province}${city}`;
            },
            // 总价格
            chatTotalMoney:function(){
                var totalMoney = 0;
                this.chatData.forEach(function(val,idx){
                    if( val.isChecked ){
                        totalMoney += (+val.price);
                    }
                })
                return totalMoney;
            },
            // 总价格
            totalMoney:function(){
                var totalMoney = 0;
                this.askMoreList.forEach(function(val,idx){
                    if(val.isChecked){
                        totalMoney += (+val.ask_money);
                    }
                })
                return totalMoney;
            },
            // 统计有选择多少个问题
            countCheckedNum:function(){
                var count = 0;
                this.askMoreList.forEach(function(val,idx){
                    if(val.isChecked){
                        count++;
                    }
                })
                return count;
            },
            // 优惠券折扣
            couponDiscount:function(){
                var count = 0;
                var key = 'five';
                this.askMoreList.forEach(function(val,idx){
                    if(val.isChecked){
                        count++;
                    }
                })
                switch (count){
                    case 1:
                        key = 'one';
                        break;
                    case 2:
                        key = 'two';
                        break;
                    case 3:
                        key = 'three';
                        break;
                    case 4:
                        key = 'four';
                        break;
                    case 5:
                        key = 'five';
                        break;
                    default:
                        key = 'five';
                }
                return this.discount[key]||1;
            },
            // 获取不同的优惠券类别
            couponValue:function() {
                var value = 0;
                var totalMoney = 0;

                this.askMoreList.forEach(function (val, idx) {
                    if (val.isChecked) {
                        totalMoney += (+val.ask_money);
                    }
                })

                if (this.couponData.length > 0) {
                    this.couponData.forEach(function (val, idx) {
                        if (val.mininum < totalMoney) {
                            value = val.mininum;
                        }
                    }, this)
                } else {
                    value = 0;
                }
                return value;
            }
        },
        methods:{
            showPicker(){
                this.cityPicker.isShow = true;
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
            askClassifyClick:function( event,type ){
                var lastActiveEle = document.querySelector(".askType li.active");
                var target = event.currentTarget;
                if( lastActiveEle != target ){
                    if( !this.answer.is_high_service && ( type == 3 ) ){
                        return;
                    }else{
                        this.ask.type = type;
                    }
                }
            },

            ajaxError:function(){
                this.hideLoading();
                this.layer("数据接口请求失败");
            },
            // 提交问题接口
            async submit(){
                // 判断回答字数与过滤回答内容
                var ranges = [
                    '\ud83c[\udf00-\udfff]',
                    '\ud83d[\udc00-\ude4f]',
                    '\ud83d[\ude80-\udeff]'
                ];
                var len = this.ask.content.length;
                var askFlag = new RegExp(ranges.join('|'),'g').test(this.ask.content);
                // 保存问题到本地
                localStorage.setItem("ask_content",this.ask.content);
                localStorage.setItem("phone",this.ask.phone);

                // 处理图片上传区别
                var imageIds = this.image_ids.join(",");

                // 如果当前默认的里面有用户信息
                var currentUser =  this.userInfoList[this.currentUserInfoIndex];
                if( currentUser ){
                    this.ask.mess_id = currentUser.id;
                    this.ask.user_name = currentUser.user_name;
                    this.ask.gender = currentUser.gender;
                    this.ask.birthday = currentUser.birthday;
                    this.ask.hours = currentUser.hours;
                    this.ask.bir_timestamp = currentUser.bir_timestamp;
                    this.ask.is_calendar =  currentUser.is_calendar;
                    this.ask.province = currentUser.province || ''; // 省份
                    this.ask.city = currentUser.city || ''; // 城市
                    this.ask.county = currentUser.county || '';// 区县
                }
                if( this.ask.type <=2 && (len <= 5 || len >= 140) ){
                    return this.layer("请输入5~140个字符");
                }else if( this.ask.type <=2 && this.ask.user_name.length <= 0 ){
                    return this.layer("请输入姓名");
                }else if( this.ask.type <=2 && this.ask.birthday.length <= 0 ){
                    return this.layer("请输入出生年月");
                }else if( askFlag ){
                    return this.layer("问题中有特殊字符，请删除后重新提交");
                }else{
                    var data = {
                        uid:this.answer_uid,
                        // cate_id:17,
                        is_public:this.ask.isPublic?1:0,
                        ask:this.ask.content,
                        image_ids:imageIds,
                        mess_id:this.ask.mess_id||"",
                        user_name:this.ask.user_name,
                        gender:this.ask.gender,
                        birthday:this.ask.birthday,
                        hours:this.ask.hours,
                        bir_timestamp:this.ask.bir_timestamp,
                        is_calendar:this.ask.is_calendar,
                        province:this.ask.province, // 省份
                        city:this.ask.city, // 城市
                        county:'', // 区县
                    }

                    if(!/日/.test(data.birthday)){
                        data.birthday = data.birthday + '日';
                    }
                    var that = this;
                    this.showLoading("提交中...");
                    await myAjax.post( apiPath.askOrder,data )
                        .then( res => {
                            if( res.jsApiParameters && res.out_trade_no){
                                commonFn.wxPay({
                                    wxPayConf:res.jsApiParameters,
                                    successCb:this.wxPaySuc.bind(this,res.out_trade_no),
                                    failCb:this.wxPayFail.bind(this,'支付失败，请重试'),
                                    cancelCb:this.layer.bind(this,'支付失败，请重试'),
                                });
                            }
                        } ).catch( e => this.layer(e) );
                    this.hideLoading();
                }
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
                // 重置订单信息
                this.getUserList();
            },
            // 获取支付失败后的二维码支付
            getQrodePay(){
                let conf,order_id;
                let num = this.getTimeClassify();
                let data = {
                    order_id:order_id,
                    app_id:conf.appId,
                };
                order_id = this.wxConfig.payConfig[this.ask.type - 1].data[0];
                try{
                    conf = JSON.parse(this.wxConfig.payConfig[this.ask.type - 1].data[1]);
                }catch(e){

                }
                myAjax.post( apiPath.qrcodePay,data )
                    .then( res => {
                        this.wxPayFailPop.order_id = res.out_trade_no;
                        this.wxPayFailPop.imgData = res.qrcode;
                    } ).catch( e => this.layer(e) );
            },
            // 判断该订单是否已支付
            async orderIsPaySuc(){
                this.showLoading('订单查询中...');
                await myAjax.post( apiPath.paySuccess,{'order_id': this.wxPayFailPop.order_id} )
					.then( res => {
						this.wxPayFailPop.isShow = false;
					} ).catch( e => { this.layer(e) } )
				this.hideLoading();
            },
            // 微信支付成功后回调
            async wxPaySuc( order_id ){
                // 弹窗的缩放
                this.lowPrizePop.isShow = true;
                let data = {
                    'order_id': order_id,
					'prizeid':this.answer.prizeid,
					'coupon_id':this.answer.coupon_id||0,
					'type': this.ask.type -1
                };
               	await myAjax.post( apiPath.paySuccess, data )
					.then( res => {} )
					.catch( e => this.layer(e) );
            },
            // 微信分享
            async share(){
                let channel = commonFn.getParams()["channel"] || localStorage.getItem("channel")||"";
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    title:'易起问，' + this.answer.nickname,
                    desc:this.answer.introduce,
                    link:location.href.split("?")[0] + "?answer_uid=" + this.answer.answer_uid + "&channel=" + channel,
                    imgUrl:this.answer.avatar
                });
            },
            // 回答了的问题和匿名评价
            answeredAndCommend:function(event,type){
                var target = event.target;
                var sblingEle = document.querySelector(".main2-nav li.active");
                sblingEle.classList.remove("active");
                target.classList.add("active");
                this.answeredAndCmdData.type = type;
            },
            // 请求回答问题和匿名评价
            async requestAnsweredData(){
                let data = {
                    answer_uid:this.answer_uid,
                    p:1,
                }
                await myAjax.get( this.answeredAndCmdData.api,data )
                    .then( res => {
                        this.answeredAndCmdData.list = res;
                        this.answeredAndCmdData.hasAnsweredData = res.length ? true : false;
                    } ).catch( e => {} );
            },
            // 请求匿名评价数据
            requestCommendData:function(){
                let data = {
                    answer_uid:this.answer_uid,
                    p:1,
                }
                myAjax.get( apiPath.evaluateList,data )
                    .then( res => {
                        this.answeredAndCmdData.hasCommendData = res.length ? true : false;
                        this.answeredAndCmdData.commendList = res.list;
                    } ).catch( e => {} );
            },
            // 获得老师相关信息接口
            async getAnswerInfo(){
                let data = {
					answer_uid: this.answer_uid,
				};
                this.showLoading('老师正在赶来中')
				await myAjax.get( apiPath.answerInfo,data )
					.then( res => {
						this.answer = res;
						this.ask.type = (this.answer.is_high_service && commonFn.getParams()["type"])||1;
					} ).catch( e => this.layer( e ) );
                this.hideLoading();
            },
            // 加载更多数据
            loadMore:function(){
                if( this.answeredAndCmdData.type == 1 ){
                    location.href = "/home/user/answered?answer_uid=" + this.answer_uid;
                }else{
                    location.href = "/home/user/commendList?answer_uid=" + this.answer_uid;
                }
            },
            // 支付成功后
            lowPaySuc:function(){
                this.lowPrizePop.isShow = !this.lowPrizePop.isShow;
                // 如果url中有order_id则清空链接中的url
                if( commonFn.getParams()["order_id"] ){
                    var index = location.href.indexOf("order_id");
                    var re_url = location.href.slice(0,index);
                    location.href = re_url;
                }
                location.reload();
            },
            // 点击页面中的其他地方输入框失去焦点
            inputFocus:function(){
                document.querySelector(".footerbar").style.bottom = "-2rem";
            },
            inputBlur:function(){
                document.querySelector(".footerbar").style.bottom = "0rem";
            },
            textaeraFocus:function(){
                this.ifFocus = true;
                document.querySelector(".footerbar").style.bottom = "-2rem";
            },
            textaeraBlur:function(){
                this.ifFocus = false;
                document.querySelector(".footerbar").style.bottom = "0rem";
            },
            // 跳到首页
            gotoDetailPage:function(event,id){
                location.href = "/home/ask?ask_id=" + id;
            },
            // 单个图片选项被点击
            choicePhoto:function(event,index){
                // 判断具体的选项中有无图片进行处理
                this.uploadPhotoIndex = index;
                if( this.preShowImages[index].src == null ){
                    this.$refs["photos"].click();
                }else{
                    this.photoPop.isShow = true;
                    this.photoPop.imgSrc = this.preShowImages[index].src;
                    // 放大图片查看
                }
            },
            // 删除对应的图片
            deletePhoto:function(event,index){
                this.preShowImages[index].src = null;
                // 上传图片组中也删除对应的图片
                this.preShowImages[index].isUploadSuc = false;
                this.preShowImages[index].isBeginUpload = false;
                this.preShowImages[index].isShowDelete = true;
                this.image_ids[index] = "";
                this.deletePhotoAjax(this.res_ids[index]);
            },
            // 删除图片接口
            async deletePhotoAjax(res_id){
				await myAjax.post( apiPath.delFile, {res_id:res_id})
					.then( res => { /*删除成功*/ } )
            },
            // 上传图片回显到本地并上传到服务器
            choosePhoto:function(event){
                var that = this;
                var target = event.currentTarget;
                var file = target.files[0];
                // 对应选择的图片的下标
                var idx = this.uploadPhotoIndex;
                // 判断图片的类型大小
                var imgType = /\.jpg|\.png|\.jpeg/i;
                if( !imgType.test(file.name) ){
                    this.layer("只支持图片上传，请选择正确的图片格式");
                    return;
                }else if((file.size/1024000)>5){
                    this.layer("图片大小不能超过5M，请压缩后上传");
                    return;
                }
                // 利用fileReader 预览图片
                if( typeof FileReader == "underfined" ){
                    this.layer("您的浏览器不支持图片预览功能，请换浏览器重试");
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(){
                        that.preShowImages[idx].src = reader.result;
                        // 上传图片进度条展示
                        that.preShowImages[idx].isBeginUpload = true;
                        that.ajaxUploadApi(target.files[0],idx);
                        // input清空，防止两次请求同一个时不能选中
                        target.value = '';
                    }
                }
            },
			// 上传图片的ajax请求
			async ajaxUploadApi(fileData,index){
				let form = new FormData();
				form.append("Filedata",fileData);
				await myAjax.post( apiPath.upload ,form,{
					'headers':{
						'mimeType':'multipart/form-data'
					},
					progress:function(event){
						let precent = event.loaded/event.total * 100 + "%";
						that.$refs["active-line" + index][0].style.width = precent;
					}
				} ).then( res => {
					this.preShowImages[index].isUploadSuc = true;
					this.image_ids[index] = res.image_id;
					this.res_ids[index] = res.res_id;
				} ).catch( e => {
					this.preShowImages[index].isUploadSuc = false;
					this.preShowImages[index].isBeginUpload = false;
					this.preShowImages[index].isShowDelete = true;
					this.layer( e )
				} );
//
			},
            // 日期的改变
            dateChange:function(obj){
                // 获得子组件传的日期
                var birthdayEle = this.$refs.birthday;
                if( obj.action === "update"){
                    // 判断时期中出现错误的问题
                    if( obj.data.year == undefined ){
                        return this.layer('日期选择出错，请重新选择');
                    }
                    if( obj.data.month == undefined ){
                        return this.layer('日期选择出错，请重新选择');
                    }
                    if( obj.data.day == undefined ){
                        return this.layer('日期选择出错，请重新选择');
                    }
                    if( obj.data.time == undefined ){
                        return this.layer('日期选择出错，请重新选择');
                    }
                    this.calendar.data = obj.data;
                    birthdayEle.value = obj.data.year + obj.data.month + obj.data.day + " " + (obj.data.time == "不记得" ? "" : obj.data.time);
                    var date = obj.data.year + obj.data.month + obj.data.day;
                    var time = obj.data.time;
                    var is_calendar = obj.data.isLunar ? 0 : 1;
                    // 问题和添加用户
                    this.ask.birthday = date;
                    this.ask.hours = time || '不记得';
                    this.ask.is_calendar = is_calendar;
                    this.ask.bir_timestamp = obj.data.timestamp;
                    this.addUserPop.data.birthday = date;
                    this.addUserPop.data.hours = time || '不记得';
                    this.addUserPop.data.is_calendar = is_calendar;
                    this.addUserPop.bir_timestamp = obj.data.timestamp;
                }
                this.calendar.isShow = false;
            },
            // 地区变化处理
            cityPickerChange( obj ){
                let birthplaceEle = this.$refs.birthplace;
                if( obj.action === "update"){
                    let { province,city } = obj.data;
                    // 判断时期中出现错误的问题
                    if( !province ){
                        return this.layer('出生省份选择错误，请重新选择');
                    }
                    if( !city ){
                        return this.layer('出生城市选择错误，请重新选择');
                    }
                    // 显示到选中的省份
                    birthplaceEle.value = `${province} ${city}`;
                    this.ask.province = province;
                    this.ask.city = city;
                    this.addUserPop.data.province = province;
                    this.addUserPop.data.city = city;
                }
                this.cityPicker.isShow = false;
            },
            // 添加用户信息
            addUser:function(){
                if( this.userInfoList.length >= 6){
                    this.layer("添加用户已达上限，请删除后再添加");
                }else{
                    this.addUserPop.isShow = true;
                }
            },
            /**
             * 删除用户信息
             * @param id 删除用户信息的id
             */
            async deleteUser(id,index){
                // 从数据库中删除用户
                this.showLoading("删除中...");
				await myAjax.get( apiPath.delUserMessList,{ id:id } )
					.then( res => {
						this.layer("删除成功");
						this.userInfoList.splice(index,1);
						if( index < this.currentUserInfoIndex ){
							this.currentUserInfoIndex -= 1;
						}
					} ).catch( e => this.layer( e ) );
				this.hideLoading();
            },
            // 提交用户信息
            async submitUser(){
                // 判断当前的内容有没有填完
                var birthdayEle = this.$refs.birthday;
                if( this.addUserPop.data.user_name.length <= 0 ){
                    return this.layer("请输入姓名");
                }else if( birthdayEle.value.length <= 0){
                    return this.layer("请选择出生年月");
                }
                var birthday = (this.addUserPop.data.is_calendar == 0) ? this.addUserPop.data.birthday + "日" : this.addUserPop.data.birthday;
                var requestData = {
                    user_name:this.addUserPop.data.user_name,
                    gender:this.addUserPop.data.gender,
                    birthday:birthday,
                    hours:this.addUserPop.data.hours,
                    bir_timestamp:this.addUserPop.bir_timestamp,
                    is_calendar:this.addUserPop.data.is_calendar,
                    province:this.addUserPop.data.province,
                    city:this.addUserPop.data.city,
                    county:'',
                }
                this.showLoading("添加中...");
                await myAjax.post( apiPath.addUserMess,requestData )
                    .then( res => {
                        requestData.id = res;
                        this.userInfoList.push(requestData);
                        this.addUserPop.isShow = false;
                        this.$nextTick(() => {
                            this.currentUserInfoIndex = this.userInfoList.length - 1;
                        })
                    } ).catch( e => this.layer( e ) );
                this.hideLoading();
            },
            // 用户信息处理
            // 使用事件冒泡节约绑定事件
            userInfoHandle:function(event){
                var target = event.target;
                var id = target.dataset.id;
                var index = target.dataset.index || 0;
                var nodeName = target.nodeName;
                if( nodeName === "LI" ){
                    this.currentUserInfoIndex = id;
                }else if( nodeName === "I" ){
                    this.deleteUser(id,index);
                }
            },
            // 选择用户性别
            choiceSex:function( event,type ){
                this.ask.gender = type;
            },
            // 添加用户选择性别
            addUserChoiceSex:function( event,type ){
                this.calendar.isShow = false;
                this.addUserPop.data.gender = type;
            },
            // 关闭弹窗
            closeAddUserPop:function(){
                this.addUserPop.isShow = false;
                this.calendar.isShow = false;
            },
            // 获得用户列表信息
            async getUserList(){
                await myAjax.get( apiPath.getUserMessList )
                        .then( res => this.userInfoList = res )
                        .catch( e => this.layer(e) );
            },
            // 点击后判断然后调关注接口
            async choiceFollow(){
                if( this.answer.is_follow == 1 ){
					this.showLoading("取关中...");
                }else{
					this.showLoading("关注中...")
                }
                await myAjax.post( apiPath.userfollow,{ uid:this.answer_uid } )
					.then( res => {
					    if( this.answer.is_follow == 1 ){
							this.layer("已取消关注");
							this.answer.is_follow = 0;
						}else{
					        this.layer("关注成功");
							this.answer.is_follow = 1;
						}
					} )
				this.hideLoading();
            },
            // 关闭弹窗
            closeMoreAskPop:function(){
                document.body.style.overflow = "initial";
                document.body.style.height = "auto";
                document.documentElement.style.overflow = "initial";
                var isCanAskMore = JSON.parse(localStorage.getItem('isCanAskMore'));
                var now = new Date().getTime()/1000/3600/24;
                if( isCanAskMore ){
                    if( (now - isCanAskMore.time) < 30  ){
                        localStorage.setItem('isCanAskMore',JSON.stringify({time:isCanAskMore.time,times:2}));
                    }
                }else{
                    localStorage.setItem('isCanAskMore',JSON.stringify({time:now,times:1}));
                }
                if(!commonFn.getParams()["order_id"]){
                    this.lowPrizePop.isShow = true;
                }
                this.askMorePop.isShow = false;
            },
            // 是否弹一题多问弹窗
            isMoreAskPop:function(){
                var isCanAskMore = JSON.parse(localStorage.getItem('isCanAskMore'));
                var now = new Date().getTime()/1000/3600/24;
                if( isCanAskMore && (isCanAskMore.times >=2) ){
                    // 测试30天改为10分钟
                    if((now - isCanAskMore.time ) < 30){
                        this.askMorePop.isShow = false;
                        this.lowPrizePop.isShow = true;
                        // 测试30天改为10分钟
                    }else if(now - isCanAskMore.time > 30){
                        localStorage.removeItem('isCanAskMore');
                        this.randomAnswer();
                    }
                }else{
                    // 随机需要提问的老师，获得老师信息后弹出窗口
                    this.randomAnswer();
                }
            },
            // 选择老师
            choiceMoreAnswer:function( id ){
                // 至少选择一个
                if( this.countCheckedNum == 1 && this.askMoreList[id].isChecked){
                    return;
                }else{
                    this.askMoreList[id].isChecked = !this.askMoreList[id].isChecked;
                }
            },
            // 随机老师接口
            async randomAnswer(){
                let url_order_id = commonFn.getParams()["order_id"];
                let order_id = url_order_id || this.wxConfig.payConfig[0].data[0];
                let data = {
                    order_id:order_id
                }
                this.showLoading("请稍等...");
                await myAjax.get( apiPath.randomAnswer,data )
                    .then( res => {
                        res.answerList.forEach(function(val,idx){
                            val.isChecked = true;
                        });
                        this.couponData = res.couponData;
                        this.discount = res.discount;
                        this.askMoreList = res.answerList;
                        this.askMorePop.isShow = true;
                    } ).catch( e => {
                        this.layer(e);
                        this.askMorePop.isShow = false;
                        this.lowPrizePop.isShow = true;
                    } );
                this.hideLoading();
            },
            // 提交多单接口
            async submitMoreAsk(){
                // 获取普通问题订单号
                let url_order_id = commonFn.getParams()["order_id"];
                let order_id = url_order_id || this.wxConfig.payConfig[0].data[0];
                // 获得需要提交的老师id，以逗号隔开的方式
                let answer_uids = [];
                this.askMoreList.forEach(function(val,idx){
                    val.isChecked && answer_uids.push(val.id);
                },this);

                if( !answer_uids.length ){
                    this.layer('请至少选择一个老师');
                }
                // 提交请求
                let data = {
                    order_id:order_id,
                    answer_uid:answer_uids.join(','),
                };

                this.showLoading('提交中...');
                await myAjax.post( apiPath.askMoreOrder,data )
                    .then( res => {
                        // body的滑动属性变为hidden，阻止页面touch穿透
                        document.body.style.overflow = "hidden";
                        document.body.style.height = "100%";
                        document.documentElement.style.overflow = "hidden";
                        // 调微信支付
                        commonFn.wxPay({
                            wxPayConf:res.jsApiParameters,
                            successCb:this.askMorePaySuc.bind(this,res.out_trade_no),
                            cancelCb:this.layer.bind(this,'支付失败，请重试')
                        });
                    } ).catch( e => this.layer(e) );
                this.hideLoading();
            },
            // 微信支付成功后的回调
            async askMorePaySuc(order_id){
                this.askMorePop.isShow = false;
                this.lowPrizePop.isShow = true;
				await myAjax.post( apiPath.paySuccess,{ 'order_id': order_id,'type': 0 } )
					.then( res => {} ).catch( e => this.layer( e ) );
            },
            // 选择图文咨询项目
            choiceChatItem(item){
                this.highServiceId = item.id;
                if( item.isChecked ){
                    return;
                }else{
                    this.chatData.forEach(val => {
                        if(val.isChecked){
                            val.isChecked = false;
                        }
                    })
                    item.isChecked = !item.isChecked;
                }
            },
            // 当前老师有图文咨询时再调图文列表接口
            async getHighPriceData(){
                let highId = commonFn.getParams()['high_id'];
                await myAjax.get( apiPath.highPriceService, { answer_uid:this.answer_uid })
					.then( res => {
						res.forEach((val,idx) => {
							if( highId ){
								if( val.id == highId ){
									val.isChecked = true;
									this.highServiceId = highId;
								}else{
									val.isChecked = false;
								}
							}else{
								if(idx == 0){
									val.isChecked = true;
									this.highServiceId = val.id;
								}else{
									val.isChecked = false;
								}
							}
						})
						this.chatData = res;
					} ).catch( e => {} )
            },
            // 跳转至支付页面
            gotoChatPay(){
                if( this.chatTotalMoney == 0 ){
                    this.layer('请选择正确的服务项目');
                    return;
                }
                location.href = "/home/user/chatPay.html?answer_uid=" + this.answer_uid + '&high_id=' + this.highServiceId;
            }
        },
        created:function(){
            this.answer_uid = commonFn.getParams()["answer_uid"] + "";
            this.getAnswerInfo().then(()=>{
                this.share();
                // 当前老师有图文咨询时再调图文列表接口
                if( this.answer.is_high_service == 1 ){
                    this.getHighPriceData();
                }
                this.getUserList()
                // 调用回答了的问题
                    .then(this.requestAnsweredData)
                    // 调评论接口
                    .then(this.requestCommendData)
                    .then( () => {
                        // 增加统计代码
                        addStatisticsCode();
                    })
            });
        },
        mounted:function(){
            this.$nextTick(function(){
                this.answer_uid = commonFn.getParams()["answer_uid"] + "";
                if( this.answer_uid === "64435"){
                    this.ask.content = "老师您好，请问这房子的风水怎么样？如何布置可以催旺我的桃花、姻缘、财运？"
                }else if( this.answer_uid === "1502347236" ){
                    this.ask.content = "老师您好，我想来解梦，我梦见了"
                }else if( this.answer_uid === "1500614261" ){
                    this.ask.content = "老师您好，我想向您咨询这方面的心理问题："
                }
            });

            // 判断有误order_id,跟进order_id显示多人问弹窗
            if( commonFn.getParams()["order_id"] ){
                this.askMorePop.isShow = true;
                this.randomAnswer();
            }
        }
    }
</script>
