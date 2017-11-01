<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";

    .page-container{
        /*padding-bottom:100px;*/
        padding-bottom:2rem;
    }
    .listHead{
        width:100%;
        height: 80px;
        position: fixed;
        left:0;
        top:0;
        background: #fff;
        font-size: 30px;
        line-height: 80px;
        color: #333;
        text-align: center;
        z-index: 1000;
    }
    .listBody{
        padding-top: 80px;
    }

    .listItem{
        background: #fff;
        width:580px;
        height: 140px;
        line-height: 140px;
        border-radius: 12px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        color: #404040;
        box-sizing: border-box;
        padding-left: 25px;
        padding-right: 25px;
        &.disabled{
            background: #dfdfdf;
        }
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-right: 25px;
            vertical-align: middle;
        }
        span{
            display: inline-block;
            font-size:28px;
            max-width: 300px;
            line-height:1.5;
            vertical-align: middle;
            overflow: hidden;
            &.time{
                color:#999;
                font-size:24px;
                position:absolute;
                right:25px;
                bottom:10px;
            }
        }
        .moneyStyle{
            color: #eb4f39;
            float: right;
            line-height:140px;
            &.ended{
                color:#777;
            }
        }
        .notice{
            position: absolute;
            width: 46px;
            height: 46px;
            background: #eb4f39;
            border-radius: 50%;
            right: 0px;
            top: 0px;
            color: #fff;
            line-height: 46px;
            font-size: 24px;
            text-align: center;
        }
    }
    .nodata{
        text-align:center;
        color:#666;
        font-size:28px;
        padding:20px;
    }

</style>
<template>
    <div class="page-container" >

        <div class="chatListBox">
            <div class="listHead">处理中的服务</div>
        </div>
        <div class="listBody">
            <div class="listItem" :class="{disabled:item.status >= 2}" v-if="chatList.length > 0" v-for="item in chatList" @click="toLink(item.room_id,item.from_uid,item.to_uid)">
                <img :src="item.avatar" alt="">
                <span v-if="user_type == 1">购买{{item.nickname}}的{{ item.service_name }}服务 </span>
                <span v-else>{{item.nickname}}购买的{{ item.service_name }}服务 </span>
                <span class="time">{{ item.pay_time }}</span>
                <!--<span class="moneyStyle" v-if="user_type == 2">￥{{ item.amount }}</span>-->
                <span class="moneyStyle ended" v-if="item.status >= 2">已结束</span>
                <span class="notice" v-if="item.notice > 0">{{item.notice>99?'99+':item.notice}}</span>
            </div>
            <div v-else class="nodata">
                暂无服务数据
            </div>
        </div>
        <!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
        <ComFooter current="3"></ComFooter>
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
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'

    export default {
        name: 'appPage',
        components: {
            ComFooter,
            LoadingModel,
            myAlertTip
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 问题id
                askId: commonFn.getParams()["ask_id"]||"",
                // shareConfig: wxShareConfig,
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                wxConfig: {},
                chatList:[],
                user_type:1
            }
        },
        methods: {
            toLink:function(room,from,to){
                location.href = `/home/chatroom/chatRoom?room=${room}&from=${from}&to=${to}`
            },
            async getChatList(){
                this.showLoading('加载中...');
                let data = {};
                await myAjax.get(apiPath.getChatList,data)
                        .then(res=>{

                            this.user_type = res.user_type;
                            this.chatList = res.list;
                        })
                        .catch( e => { this.layer(e) } );
                this.hideLoading();
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
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                let channel = localStorage.getItem('channel');
                let channelStr = channel ? `&channel=${channel}`:'';
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.protocol + '//' + location.hostname  + '/home/index/index?' + channelStr
                });
            },
    },
    created: function() {
            this.getChatList();
            this.share();
    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
