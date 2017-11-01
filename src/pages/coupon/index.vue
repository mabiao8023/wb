<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding:0 .47rem;
    }
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
    .yhj-list{
        padding-bottom:1.6rem;
        .yhj-item{
            width:100%;
            height:2.65rem;
            background:url("@{IMAGE-PATH}yhj-active-bg.jpg?@{DATE}") no-repeat center center;
            background-size:100% 100%;
            margin-bottom:.31rem;
            .yhj-exprise{
                text-align:center;
                color:#fff;
                font-size:.46rem;
                line-height:.8rem;
                span{
                    font-size:.375rem;
                    line-height:.8rem;
                    vertical-align:middle;
                }
            }
        }
        .yhj-main{
            font-size:0;
            .yhj-prize{
                display:inline-block;
                width:50%;
                vertical-align: middle;
                text-align:center;
                height:1.875rem;
                font-weight:bolder;
                color:#fff;
                font-size:.63rem;
                span{
                    font-size:1.6rem;
                }
                p{
                    width:3.44rem;
                    text-align:center;
                    font-weight:normal;
                    font-size:.41rem;
                    line-height:.75rem;
                }
                .btn{
                    display:block;
                    margin-left:.45rem;
                    width:2.6rem;
                    height:.96rem;
                }
            }
        }

        .yhj-expired{
            background:url("@{IMAGE-PATH}yhj-expired-bg.jpg?@{DATE}") no-repeat center center;
            background-size:100% 100%;
        }
    }
</style>
<template>
    <div class="page-container">
        <ul class="nav">
            <li class="nav-item active" @click="toggle($event,1)">未使用({{ coupons_total}})</li>
            <li class="nav-item" @click="toggle($event,2)">已过期({{ expired_total }})</li>
        </ul>
        <ul class="yhj-list">
            <template v-if="!isExpired">
                <li class="yhj-item" v-for="(item,index) in list">
                    <div class="yhj-main">
                        <div class="yhj-prize">￥<span>{{ item.value.replace(/^(\d+)\.0+$/,"$1") }}</span></div>
                        <div class="yhj-prize">
                            <p>满{{item.mininum.replace(/^(\d+)\.0+$/,"$1")}}元可用</p>
                            <div class="btn" @click="toAskPage"></div>
                        </div>
                    </div>
                    <div class="yhj-exprise">{{ item.begin_time }}-{{ item.end_time }}</div>
                </li>
            </template>
            <template v-else>
                <li class="yhj-item yhj-expired" v-for="(item,index) in list">
                    <div class="yhj-main">
                        <div class="yhj-prize">￥<span>{{ item.value.replace(/^(\d+)\.0+$/,"$1") }}</span></div>
                        <div class="yhj-prize">
                            <p>满{{item.mininum.replace(/^(\d+)\.0+$/,"$1")}}元可用</p>
                            <div class="btn"></div>
                        </div>
                    </div>
                    <div class="yhj-exprise">{{ item.begin_time }}-{{ item.end_time }}</div>
                </li>
            </template>
            <infinite-loading :on-infinite="getData" :distance="100" spinner="circles" ref="infiniteLoading">
                <span slot="no-results">
                     暂无数据
                </span>
                <span slot="no-more">
                     暂无更多数据
                </span>
            </infinite-loading>
        </ul>

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
                list:[],
                coupons_total:0,
                expired_total:0,
                isExpired:false,
                page:1,
				api:apiPath.couponUseful,
            }
        },
        filters:{
            moneyFormat:function(val){
                var val = val + "";
                return val.replace(/^(\d+)\.0+$/,"$1");
            },
            dateFormat:function(time){
                time = new Date(time);
                var year = time.getFullYear(),
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
                this.isExpired = ( type == 1 ?  false : true  );
                // 分页切换
                this.list = [];
                this.page = 1;
                this.api = ( type == 1 ? apiPath.couponUseful : apiPath.couponExpired );
                var that = this;
                this.$nextTick(function(){
                    that.$refs["infiniteLoading"].$emit("$InfiniteLoading:reset");
                });
            },
            async getData(){
                await myAjax.get( this.api,{ p:this.page} )
					.then( res => {
						this.coupons_total = res.total;
						this.expired_total = res.expire_total;
						if( res.list.length ){
							this.list = this.list.concat(res.list);
							this.page++;
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
						}else{
							this.$refs["infiniteLoading"].$emit("$InfiniteLoading:complete");
						}
					} ).catch( e => {});
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
                    link:location.protocol + '//' + location.hostname  + '/home/index/index?' + channelStr
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
