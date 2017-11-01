<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
    }
    /*评论列表样式*/
    .commend-list{
        padding:.4rem;
    }
    .commend{
        background-color: rgb(255, 255, 255);
        border-bottom: 1px solid rgb(227, 227, 227);
        padding: .3rem;
    }
    .avatar {
        display: inline-block;
        vertical-align: middle;
        height: 1.25rem;
        position: relative;
        /*margin-right: 20 / @r;*/
    }
    .round-avatar{
        display:inline-block;
        vertical-align:middle;
        /*margin-right:20/@r;*/
        width: 1.25rem;
        height: 1.25rem;
        margin-right:.31rem;
        -webkit-border-radius:0.625rem;
        -moz-border-radius:0.625rem;
        border-radius:0.625rem;
    }
    .avatar span{
        font-size:0.44rem;
        color:#333;
    }
    .cmd_content{
        font-size:0.375rem;
        color:#666;
        padding:.31rem 0;
    }
    .container{
        h5{
            font-size:.47rem;
            padding:.31rem;
        }
    }
    .title{
        font-size:30px;
        padding:10px 30px;
        color:#666;
    }
</style>
<template>
    <div class="page-container" >
        <h5 class="title">匿名评价 ({{total}})</h5>
        <ul class="main2-content">
            <li class="commend" v-for="item in commendList">
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
        <infinite-loading :on-infinite="requestAnsweredData" :distance="100" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">
                     暂无数据
                </span>
            <span slot="no-more">
                     暂无更多数据
                </span>
        </infinite-loading>
        <ComFooter current="2"></ComFooter>
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import ComFooter from '../../common/components/footer.vue';
    import InfiniteLoading from 'vue-infinite-loading';
    import startShow from '../../common/components/startCompontent.vue';
    import myAjax from '../../common/js/request';
    export default {
        name: 'appPage',
        components: {
            ComFooter,
            InfiniteLoading,
            startShow,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: {
                    isShow: false,
                    text: "hello world",
                    time: 1500
                },
                answer_uid:commonFn.getParams()['answer_uid']||'',
                commendList:[],
                total:0,
                page:1,
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
            // 请求回答问题和匿名评价
            async requestAnsweredData(){
                let data = {
                    answer_uid:this.answer_uid,
                    p:this.page,
                };
                await myAjax.get( apiPath.evaluateList,data )
                    .then( res => {
                        if( res.list.length ){
                            this.page++;
                            this.commendList = this.commendList.concat(res.list);
                            this.total = res.total;
                            this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
                        }else{
                            this.$nextTick(() => {
                                this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                            });
                        }
                    } )
            },
    },
    mounted() {
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
