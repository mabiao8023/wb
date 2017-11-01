<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
    @bg:#ffeed2;
    body{
        height:100%;
    }
    .page-container{
        padding-bottom:2.5rem;
        height:100%;
    }
    #answerList{padding-top:1.25rem;padding-bottom:2rem;}
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
    .nodata{
        width:100%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .nodata-box{
            text-align:center;
        }
        p{
            width:100%;
            font-size:30px;
        }
        .nodata-btn{
            font-size:30px;
            width:200px;
            height:70px;
            line-height:70px;
            background:@mainColor;
            margin-top:20px;
            border-radius:10px;
            color:#fff;
        }
    }
</style>
<template>
    <div class="page-container">
        <div class="nodata" v-if="isHasNoData">
            <div class="nodata-box">
                <p>没有搜索到数据</p>
                <div class="nodata-btn" @click.stop.prevent="gotoIndex">
                    去首页看看
                </div>
            </div>

        </div>
        <section class="main content2" id="answerList" style="padding-top:0;">
            <ul class="lists tab" ref="answerList">
                <li class="list-item cf" v-for="(item,index) in answers.data"
                    :data-uid="item.id"
                    @click.stop.prevent="gotoAnswerIndex($event,item.id)"
                >
                    <div class="answer-avatar fl">
                        <img :src="item.avatar" :alt="item.job_title">
                        <span class="score-icon">{{ item.score | formateScore }}</span>
                    </div>
                    <div class="answer-content">
                        <h2 class="nickname">{{ item.nickname }}</h2>
                        <p class="job-title">{{ item.job_title }}</p>
                        <p>已回答{{ item.answers }}次</p>
                        <span class="ask-money-yhj">
                            <span class="yh-prize">￥{{ item.ask_money | formateMoney }}</span>
                        </span>
                    </div>
                </li>
            </ul>
            <infinite-loading :on-infinite="getAnswers" :distance="100" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">
                     <!--暂无数据-->
                </span>
                <span slot="no-more">
                     暂无更多数据
                </span>
            </infinite-loading>
        </section>

        <ComFooter current="1"></ComFooter>
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
    import { getWXParams } from '../../common/js/utils.js';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import InfiniteLoading from 'vue-infinite-loading';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request';
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            InfiniteLoading,
            LoadingModel
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 回答问题的类型
                type: commonFn.getParams()["type"] || "ask",
                // 提示处理
                tip: {
                    isShow: false,
                    text: "hello world",
                    time: 1500
                },
                // shareConfig: wxShareConfig,
                wxConfig: {},
                answers:{
                    api:"/home/ajax/highServiceAnswer",
                    page:1,
                    high_cate_id:1,
                    data:[],
                    count:10
                },
                startChain:null,
                // 是否有搜索到的数据
                isHasNoData:false
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
            getAnswers(){
                let keyword = decodeURIComponent(commonFn.getParams()["keyword"]);
                let data = {
                    keyword:keyword,
                    page:this.answers.page,
                };
                myAjax.get( apiPath.searchResult,data )
                    .then( res => {
                        if( res.length ){
                            this.answers.data = this.answers.data.concat(res);
                            this.answers.page++;
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                        }else{
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                        }
                        // 判断当前的数据列表
                        if( !this.answers.data.length ){
                            this.isHasNoData = true;
                        }
                    } ).catch( e => this.layer( e ) );
            },
            // 点击老师卡片跳转至老师首页
            gotoAnswerIndex(e,answerId){
                var target = e.currentTarget;
                target.classList.add("active");
                location.href = `/home/user/index?answer_uid=${answerId}&channel=1505464053`;
            },
            // 跳到首页
            gotoIndex(){
                location.href = `/home/index/index`;
            }
    },
    created: function() {
         this.share();
    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
