<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
        .ask-detail{
            padding:30px;
            background:#fff;
            .user{
                display:flex;
                .avatar{
                    margin-right:20px;
                }
            }
            .answer{
                padding-top:10px;
                .avatar{
                    margin-right:20px;
                    display:inline-block;
                }
                .audio{
                    display:inline-block;
                    vertical-align: middle;
                }
            }
            .numbers{
                display:flex;
                margin-top:20px;
                justify-content: space-between;
            }
        }
    }
    .big-text{
        font-size: 28px;
        text-align: justify;
        line-height: 1.5;
        color: #151515;
    }
    .middle-text{
        color: #999;
        font-size: 26px;
        line-height:1.5;
    }
    .small-text{
        color: #999;
        font-size: 24px;
        line-height:1.5;
    }

</style>
<template>
    <div class="page-container" >
        <ul class="main2">
            <li class="answered" v-for="item in answeredList" @click.stop.prevent="gotoDetailPage($event,item.id)">
                <section class="ask-detail">
                    <div class="user">
                        <div class="avatar">
                            <Avatar :avatarSrc="item.user.avatar"
                                    :isHasScore="false"
                            ></Avatar>
                        </div>
                        <div class="content big-text">
                            {{ item.ask }}
                        <!--图片展示组件-->
                            <template v-if="item.image_info.length > 0">
                                <ImageShow :image_info="item.image_info"></ImageShow>
                            </template>
                        </div>
                    </div>
                    <div class="answer">
                        <div class="avatar">
                            <Avatar :avatarSrc="item.answer_user.avatar"
                                    :answerUid="item.answer_user.id"
                                    :isHasScore="true" :score="item.answer_user.score | formateScore"
                            ></Avatar>
                        </div>
                        <div class="audio" >
                            <!--当前组件的事件属性要指定为原生的-->
                            <AudioShow  :fee_touting="item.fee_touting" :time="item.media_time"></AudioShow>
                        </div>
                    </div>
                    <div class="numbers small-text">
                        <div class="ask-time">
                            {{ item.answer_time }}
                         </div>
                        <div>
                            听过 {{ item.touting }}
                        </div>
                    </div>
                </section>
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
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                answer_uid:commonFn.getParams()['answer_uid']||'',
                answeredList:[],
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
            // 请求回答问题和匿名评价
            async requestAnsweredData(){
                let data = {
                    answer_uid:this.answer_uid,
                    p:this.page,
                };
                await myAjax.get( apiPath.answered,data )
                    .then( res => {
                        if( res.length ){
                            this.page++;
                            this.answeredList = this.answeredList.concat(res);
                            this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
                        }else{
                            this.$nextTick(() => {
                                this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
                            });
                        }
                    } ).catch( e => {} )
            },
            // 跳到详情首页
            gotoDetailPage:function(event,id){
                location.href = "/home/ask?ask_id=" + id;
            }
    },
    mounted() {
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
