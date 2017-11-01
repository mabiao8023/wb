<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @bg:#ffeed2;
    .text-info{
        font-size:28px;
    }
    .is_evaluate{
        color:#666;
    }
    .page-container {
        padding-bottom:2rem;
    }
    .nodata{padding:2rem;text-align:center;}
    .nodata i{display:inline-block;width:2rem;height:2rem;background-image:url("@{IMAGE-PATH}nodata.png?@{DATE}");background-size:2rem 2rem;}
    .nodata span{line-height:1rem}
    .nodata .btn{padding:.15rem 1rem;}
    /*问题榜*/
    //.questions{padding-bottom:3rem;}
    .questions>ul>li{padding:.47rem;margin-bottom:.3rem;background:#fff;}
    .questions>ul>li dt{text-align:justify;color:#151515;font-size:.44rem;line-height:.718rem;font-weight:normal;margin:.156rem 0;}
    .questions>ul>li dl{margin:0;padding:0;}
    .questions>ul>li dd span.other{font-size:.375rem;color:#666;}
    .questions>ul>li dd .content{margin-top:.15rem;}
    .media{display:inline-block;}
    .media a{display:inline-block;}
    .bubble{display:inline-block;position:relative;background:#1ccda6;width:4.375rem;line-height:1.1rem;height:1.1rem;border-radius:1.1rem;text-align:center;min-width:4rem;color:#fff;font-size:.4375rem;text-decoration:none;margin-right:.2rem;}
    .bubble.bubble-red{background:#f85f48;}
    .bubble .bubble-tail{width:.53rem;height:.885rem;position:absolute;top:.26rem;left:-.13rem;background-image: url("@{IMAGE-PATH}bubble.png?@{DATE}");background-size: .53rem .885rem;}
    .bubble.bubble-red .bubble-tail{background-image:url("@{IMAGE-PATH}bubble-red.png?@{DATE}");}
    .bubble span{color:#fff;font-size:.4375rem;}
    .bubble .wave1,.bubble .wave2{display:block;width:.4rem;height:.4rem;background-size:.4rem;position:absolute;top:.3rem;left:.3rem;}
    .bubble .wave1{background-image:url("@{IMAGE-PATH}wave1.png?@{DATE}");}
    .bubble .wave2{background-image:url("@{IMAGE-PATH}wave2.png?@{DATE}");}
    .bubble .wave3{display:block;width:.4rem;height:.4rem;background-image:url("@{IMAGE-PATH}wave3.png?@{DATE}");background-size:.4rem;position:absolute;top:.3rem;left:.3rem;}
    .bubble img{position:absolute;top:.3rem;left:.3rem;width:.4rem;height:.4rem;display:none;}
    .received{float:right;line-height:1rem;color:#999;font-size:.375rem;}
    .user{
        display:inline-block;
        margin-right:20px;
    }
    .replytime{
        font-size:24px;
        margin-top:20px;
    }
    .mt2{
        line-height:80px;
        font-size:28px;
        .nickname{
            font-size:30px;
            color:#151515;
        }
    }
    .tith{
        font-size:30px;
        padding: 10px 30px;
        color:#666;
    }
</style>
<template>
    <div class="page-container">
        <!--没有数据-->
        <div class="nodata" v-if="!hasMoreData">
            <p><i></i></p>
            <span class="block">你还没有提问呦~</span>
            <a class="btn btn-danger" href="/home/usercate">去问一个</a>
        </div>
        <div class="questions">
            <div class="tith" v-if="total">已提问 {{ total }}</div>
            <ul class="questions_ul">
                <li v-for="item in askList" data-id="item.id" @click.stop.prevent="gotoAskAgainPage(item.id)">
                    <dl>
                        <dd>
                            <div class="content cf">
                                <div class="user fl">
                                    <Avatar :avatarSrc="item.user.avatar"
                                            :isHasScore="true" :score="item.user.score | formateScore"
                                    ></Avatar>
                                </div>
                                <div class="mt2">
                                    <span class="nickname">{{ item.user.nickname }}</span>
                                    <span class="fr">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span  class="text-info">
                                            {{ item.status == 1 ? '待回答' : item.status == 2 ? '已回答':'已过期' }}
                                        </span>
                                        <span class="text-info is_evaluate">
                                            {{ item.is_evaluate > 0 ? '已评价':'待评价'  }}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </dd>
                        <dt>{{item.ask}}</dt>
                    </dl>
                    <template v-if="item.image_info.length > 0">
                        <ImageShow :image_info="item.image_info"></ImageShow>
                    </template>
                    <span class="block" v-if="item.status == 1">{{item.answer_time}}</span>
                    <template v-if="item.status == 3">
                        <span class="block">您的提问已过期，退款将原路返回。</span>
                        <span class="block">如需继续咨询，可关注【易起问】公众号。</span>
                    </template>
                    <template  v-if="item.status == 2" >
                        <div class="content">
                            <div class="user">
                                <Avatar :avatarSrc="item.user.avatar"
                                        :isHasScore="true" :score="item.user.score | formateScore"
                                ></Avatar>
                            </div>
                            <AudioShow :time="item.media_time">
                                <p>听一听</p>
                            </AudioShow>
                            <div class="replytime">{{item.answer_time}}<span class="fr">{{item.touting}}人偷偷听</span>
                            </div>
                        </div>
                    </template>
                </li>
            </ul>
        </div>
        <infinite-loading :on-infinite="requestData" :distance="100" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">
                     暂无数据
                </span>
            <span slot="no-more">
                     暂无更多数据
                </span>
        </infinite-loading>
        <ComFooter current="3"></ComFooter>
    </div>
</template>
<script>
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import ComFooter from '../../common/components/footer.vue';
    import ImageShow from '../../common/components/imageShow.vue';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import InfiniteLoading from 'vue-infinite-loading';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import AudioShow from '../../common/components/audioShowCompontent.vue'
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            ComFooter,
            ImageShow,
            InfiniteLoading,
            Avatar,
            AudioShow
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // shareConfig: wxShareConfig,
                wxConfig: {},
                askList:[],
                page:1,
                hasMoreData:true,
                total:0,
            }
        },
        filters:{
            formateScore:commonFn.formateScore
        },
        methods: {
            async requestData(){
                let data = {
					p:this.page
                };
                await myAjax.get(apiPath.asks,data)
                    .then(res => {
                        if( res.ask.length ){
                            this.page++;
                            // 暂不格式化时间
                            this.askList = this.askList.concat(res.ask);
                            this.total = res.count;
                            if( !this.askList.length  ){
                                this.hasMoreData = false;
                            }else{
                                this.hasMoreData = true;
                            }
                            this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
                        }else{
                            this.$nextTick(function(){
                                this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                            });
                        }
                        })
                    .catch( e => {  } );
            },
            gotoAskAgainPage:function( askId ){
                location.href = '/home/ask/askAgain?ask_id=' + askId;
            },
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:`${location.origin}/home/index/index`
                });
            },
    },
    mounted() {
        // 动态添加统计代码
		this.share();
        addStatisticsCode();
    }
    }
</script>
