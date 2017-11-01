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
    .ask-content{
        font-size:28px;
        text-align:justify;
        color:#151515;
        line-height:1.5;
        padding-bottom:10px;
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
            <a class="btn btn-danger" href="/home/index/index">去偷听</a>
        </div>

        <div class="questions">
            <div class="tith" v-if="total">已偷听 {{ total }}</div>
            <ul class="questions_ul">
                <li v-for="item in askList" data-id="item.id" @click.stop.prevent="gotoAskPage(item.ask.id)">
                    <p class="ask-content">{{item.ask.ask}}</p>
                    <template v-if="item.image_info.length > 0">
                        <ImageShow :image_info="item.image_info"></ImageShow>
                    </template>
                    <div class="content">
                            <div class="user">
                                <Avatar :avatarSrc="item.answer_user.avatar"
                                        :isHasScore="true" :score="item.answer_user.score | formateScore"
                                ></Avatar>
                            </div>
                            <AudioShow :time="item.ask.media_time">
                                <p>听一听</p>
                            </AudioShow>
                            <div class="replytime">{{item.ask.answer_time}}<span class="fr">{{item.ask.touting}}人偷偷听</span>
                            </div>
                    </div>
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
    import myAjax from '../../common/js/request';
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
                total:0,
                page:1,
                hasMoreData:true,
            }
        },
        filters:{
            formateScore:commonFn.formateScore
        },
        methods: {
            requestData(){
                let data = { p:this.page };
                myAjax.get( apiPath.toutingAsks,data )
                    .then( res => {
                        if( res.touting.length ){
                            this.page++;
                            // 暂不格式化时间
                            this.askList = this.askList.concat(res.touting);
                            this.total = res.count;
                            if( !this.askList.length ){
                                this.hasMoreData = false;
                            }else{
                                this.hasMoreData = true;
                            }
                            this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
                        }else{
							this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                        }
                    } ).catch( e => {});
            },
            gotoAskPage(askId){
                location.href = '/home/ask?ask_id=' + askId;
            },
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                let channel = localStorage.getItem('channel');
                let channelStr = channel ? `&channel=${channel}`:'';
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:`${location.origin}/home/index/index?${channelStr}`
                });
            },
    },

    async created() {
        await this.share();
        addStatisticsCode();
    }
    }
</script>
