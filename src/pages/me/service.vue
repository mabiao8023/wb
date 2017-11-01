<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .nav{
        width:5.63rem;
        margin:.31rem auto;
        background: #fff;
        font-size:0;
        border-radius: 10px;
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
    .service-list{
        width:9.1rem;
        margin:0 auto;
        padding:0 .31rem;
        background-color:#fff;
        li{
            padding:.31rem 0;
            border-bottom:1px solid #e6e6e6;
            font-size:0;
            position:relative;
            div{
                display:inline-block;
                width:33%;
                text-align:center;
            }
            &:last-child{
                border-bottom:none;
            }
            .left{
                .box{
                    width:33.33%;
                    position:absolute;
                    top:50%;
                    left:0;
                    -webkit-transform: translate(0,-50%);
                    transform: translate(0,-50%);
                }
                p{
                    font-size:.43rem;
                    color:#666;
                }
                span{
                    font-size:.375rem;
                    color:#999;
                }
            }
            .center{
                .answer-avatar{
                    display:inline-block;
                    width:1.25rem;
                    height:1.25rem;
                    overflow: hidden;
                    vertical-align:middle;
                    img{
                        width:1.25rem;
                        height:1.25rem;
                        border-radius: 50%;
                    }
                }
                span{
                    display:block;
                    color:#333;
                    margin-top:.15rem;
                    font-size:.43rem;
                }
            }
            .right{
                .box{
                    width:33.33%;
                    position:absolute;
                    top:50%;
                    right:0;
                    -webkit-transform: translate(0,-50%);
                    transform: translate(0,-50%);
                }
                color:#333;
                font-size:.47rem;
            }
        }
        .header{
            div{
                color:#999;
                font-size:.47rem;
            }
        }
    }
</style>
<template>
    <div class="page-container">
        <ul class="nav">
            <li class="nav-item active" @click="toggle($event,0)">当前服务</li>
            <li class="nav-item" @click="toggle($event,1)">已完成</li>
        </ul>
        <ul class="service-list current-service" v-show="type == 0">
            <li class="header">
                <div class="left">
                    项目
                </div>
                <div class="center">
                    老师
                </div>
                <div class="right">
                    金额
                </div>
            </li>
            <li class="items" v-for="item in currentList">
                <div class="left">
                    <div class="box">
                        <template v-if="item.ask_type == 2">
                            <p>电话咨询</p>
                            <!--<span>{{ item.consult_time }}  + {{ item.give_time }}分钟</span>-->
                            <span>{{ item.consult_time }} 分钟</span>
                        </template>
                        <template v-else>
                            <p>私人顾问</p>
                            <span>至{{ item.service_end_time*1000 | dateFormat }}</span>
                        </template>
                    </div>
                </div>
                <div class="center">
                    <div class="answer-avatar">
                        <img :src="item.avatar" alt="">
                    </div>
                    <span>{{ item.nickname }}</span>
                </div>
                <div class="right">
                    <div class="box">
                        ￥{{ item.amount | moneyFormat }}
                        </div>
                </div>
            </li>
        </ul>
        <ul class="service-list completed-service" v-show="type == 1">
            <li class="header">
                <div class="left">
                    项目
                </div>
                <div class="center">
                    老师
                </div>
                <div class="right">
                    金额
                </div>
            </li>
            <li class="items" v-for="item in completedList">
                <div class="left">
                    <div class="box">
                        <template v-if="item.ask_type == 2">
                            <p>电话咨询</p>
                            <!--<span>{{ item.consult_time }} + {{ item.give_time }}分钟</span>-->
                            <span>{{ item.consult_time }}分钟</span>
                        </template>
                        <template v-else>
                            <p>私人顾问</p>
                            <span>至{{ item.service_end_time*1000 | dateFormat }}</span>
                        </template>
                    </div>
                </div>
                <div class="center">
                    <div class="answer-avatar">
                        <img :src="item.avatar" alt="">
                    </div>
                    <span>{{ item.nickname }}</span>
                </div>
                <div class="right">
                    <div class="box">
                        ￥{{ item.amount | moneyFormat }}
                        </div>
                </div>
            </li>
        </ul>
        <infinite-loading :on-infinite="getData" :distance="100" spinner="circles" ref="infiniteLoading">
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
                type:0,
                currentList:[],
                completedList:[],
                curPage:1,
                comPage:1,
                page:1,
            }
        },
        filters:{
            moneyFormat(val){
                val = val + "";
                return val.replace(/^(\d+)\.0+$/,"$1");
            },
            dateFormat(time){
                time = new Date(time);
                let year = time.getFullYear(),
                    month = time.getMonth() + 2,
                    date = time.getDate(),
                    m = month >= 10 ? month : "0" + month,
                    d = date >= 10 ? date : "0" + date;
                return year + "." + m + "." + date;
            }
        },
        methods: {
            toggle:function(event,type){
                var targetEle = event.target;
                [].forEach.call(targetEle.parentElement.children,
                    function(v,idx){
                        v.classList.remove("active")
                    }
                );
                targetEle.classList.add("active");
                this.type = type;

                this.$nextTick(() => {
                    this.$refs["infiniteLoading"].$emit('$InfiniteLoading:reset');
                });
            },
            async getData(){
                this.page = this.type == 0 ? this.curPage :this.comPage;
                let type = this.type;
             	let data = {
                    p:this.page,
                    type : this.type,
                };
                await myAjax.get( apiPath.myService,data )
					.then( res => {
						if( type == 0 ){
							if( res.list.length ){
								this.currentList = this.currentList.concat(res.list);
								this.curPage++;
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
							}else{
								this.$nextTick(function(){
									this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
								});
							}
						}else{
							if( res.list.length > 0 ){
								this.completedList = this.completedList.concat(res.list);
								this.comPage++;
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
							}else{
								this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
							}
						}
					} );
            },
            toAskPage:function(){
                location.href = "/home/usercate/index"
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

    created: function() {
            this.share();
    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
