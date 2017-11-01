<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
    }
    .nav-bar{
        padding:.31rem;
        text-align:center;
    }
    .btn-group{
        display:inline-block;
        font-size:0;
        border: 1px solid #f85f48;
        border-radius:10px;
        overflow: hidden;
        li{
            display:inline-block;
            vertical-align:middle;
            font-size:.47rem;
            padding:.2rem .85rem;
            color:@mainColor;
            &.active{
                background:@mainColor;
                color:#fff;
            }
        }
    }
    .income-tip{
        p{
            font-size:0.4375rem;
            color:#666;
            text-indent:0;
            padding:0 .4rem .15rem;
            line-height:1.67;
            letter-spacing: 1px;
        }
    }
    .income-list{
        li{
            background-color:#fff;
            padding:.4rem;
            margin-bottom:.31rem;
            .hd{
                font-size:.47rem;
                color:#333;
                padding-bottom: .05rem;
            }
            .fl{
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                padding-right: 1.8rem;
                overflow: hidden;
            }
            .hd2{
                font-size:.4rem;
                color:#666;
                line-height:1.67;
            }
            .bd span{
                font-size:.375rem;
            }
        }
    }
    .nodata{padding:2rem;text-align:center;}
    .nodata i{display:inline-block;width:2rem;height:2rem;background-image:url("@{IMAGE-PATH}nodata.png?@{DATE}");background-size:2rem 2rem;}
    .nodata span{line-height:1rem}
</style>
<template>
    <div class="page-container">
        <div class="nav-bar">
            <ul class="btn-group">
                <li class="active" @click="tabChange($event,1)">收入</li>
                <li @click="tabChange($event,2)">支出</li>
                <li @click="tabChange($event,3)">结算</li>
            </ul>
        </div>
        <div v-show="type == 1">
            <template v-if="incomeData.list.length > 0">
                <div class="income-tip">
                    <p>待结算收益：{{ incomeData.allIncome }}元<br/>
                        结算日期为每月5日(如遇节假日顺延)</p>
                    <p>收益列表</p>
                </div>
                <ul class="income-list">
                    <li v-for="item in incomeData.list">
                        <div class="hd cf">
                            <div class="fl">{{ item.content }}</div>
                            <div class="fr">{{ item.money | moneyFormat }}元</div>
                        </div>
                        <div class="hd hd2 cf">
                            <div class="fl">{{item.score_content}}</div>
                            <div class="fr">{{ item.score_money | moneyFormat}}元</div>
                        </div>
                        <div class="hd hd2 cf">
                            <div class="fl">{{item.reward_content}}</div>
                            <div class="fr">{{ item.reward_money | moneyFormat}}元</div>
                        </div>
                        <div class="bd cf">
                            <span class="fr">{{ item.times }}</span>
                        </div>
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="nodata">
                    <p><i></i></p>
                    <span class="block">还没有收入~</span>
                </div>
            </template>
        </div>
        <div v-show="type == 2">
            <template v-if="disburseData.list.length > 0">
                <div class="income-tip">
                    <p>支出列表</p>
                </div>
                <ul class="income-list">
                    <li v-for="item in disburseData.list">
                        <div class="hd cf">
                            <div class="fl">{{ item.info }}</div>
                            <div class="fr">{{ item.amount | moneyFormat }}元</div>
                        </div>
                        <div class="bd cf">
                            <span class="fl">{{ item.created_time | dateFormat }}</span>
                            <span class="fr">支付成功</span>
                        </div>
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="nodata">
                    <p><i></i></p>
                    <span class="block">还没有支出~</span>
                </div>
            </template>
        </div>
        <div v-show="type == 3">
            <template v-if="settleData.list.length > 0">
                <div class="income-tip">
                    <p>结算列表</p>
                </div>
                <ul class="income-list">
                    <li v-for="item in settleData.list">
                        <div class="hd cf">
                            <div class="fl">{{ item.content }}</div>
                            <div class="fr">{{ item.money | moneyFormat }}元</div>
                        </div>
                        <div class="bd cf">
                            <span class="fl">{{ item.created_time | dateFormat }}</span>
                            <span class="fr">结算成功</span>
                        </div>
                    </li>
                </ul>
            </template>
            <template v-else>
                <div class="nodata">
                    <p><i></i></p>
                    <span class="block">还没有结算~</span>
                </div>
            </template>
        </div>
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
    import myAlertTip from '../../common/components/modelBox.vue';
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
            myAlertTip,
            ComFooter,
            ImageShow,
            InfiniteLoading,
            Avatar,
            AudioShow
        },
        data() {
            return {
                type:1,// 1 => 收入 ， 2 => 支出 ，3 => 结算
                incomeData:{
                    api:apiPath.income,
                    allIncome:0,
                    list:[],
                    page:1
                },
                disburseData:{
                    api:apiPath.disburse,
                    list:[],
                    page:1
                },
                settleData:{
                    api:apiPath.settle,
                    list:[],
                    page:1
                }
            }
        },
        filters:{
            moneyFormat:function(val){
                val = (+val).toFixed(2);
                var val2 = val + "";
                return val2.replace(/^(\d+)\.0+$/,"$1");
            },
            dateFormat:function(time){
                time = time * 1000 ;
                time = new Date(time);
                var year = time.getFullYear(),
                    month = time.getMonth() + 1,
                    date = time.getDate(),
                    hour = time.getHours(),
                    minute = time.getMinutes(),
                    second = time.getSeconds(),
                    m = month >= 10 ? month : "0" + month,
                    d = date >= 10 ? date : "0" + date,
                    h = hour >= 10 ? hour : "0" + hour,
                    mt = minute >= 10 ? minute : "0" + minute,
                    s = second >= 10 ? second : "0" + second;
                return year + "-" + m + "-" + date + " " + h + ":" + mt + ":" + s;
            }
        },
        computed:{
            api:function(){
                return this.type == 1 ? this.incomeData.api :
                    this.type == 2 ? this.disburseData.api : this.settleData.api;
            },
            page:function(){
                return this.type == 1 ? this.incomeData.page :
                    this.type == 2 ? this.disburseData.page : this.settleData.page;
            }
        },
        methods: {
            tabChange:function(event,type){
                this.type = type;
                var target = event.currentTarget;
                var lis = document.querySelectorAll(".btn-group li");
                [].forEach.call(lis,function(val){
                    val.classList.remove("active");
                });
                target.classList.add("active");
                var that = this;
                this.$nextTick(function(){
                    that.$refs["infiniteLoading"].$emit('$InfiniteLoading:reset');
                });
            },
            async getData(){
                let type = this.type;
                await myAjax.get( this.api,{ p : this.page } )
					.then( res => {
						if( type == 1 ){
							this.incomeData.allIncome = res.not_received_money;
							if( res.income && res.income.length ){
								this.incomeData.list = this.incomeData.list.concat(res.income);
								this.incomeData.page++;
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
							}else{
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:complete');
							}
						}else if( type == 2 ){
							if( res.disburse && res.disburse.length ){
								this.disburseData.list = this.disburseData.list.concat(res.disburse);
								this.disburseData.page++;
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
							}else{
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:complete');
							}
						}else{
							if( res.income && res.income.length ){
								this.settleData.list = this.settleData.list.concat(res.income);
								this.settleData.page++;
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
							}else{
								this.$refs["infiniteLoading"].$emit('$InfiniteLoading:complete');
							}
						}
					} );
            },
    },
    mounted() {
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
