<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container{
        padding-bottom:2rem;
        .main-nav-contianer{
            width:100%;
            background: #fff;
        }
        .main-nav{
            width:5.63rem;
            margin:0 auto;
            font-size:0;
            li{
                display:inline-block;
                font-size:.47rem;
                width:50%;
                text-align:center;
                height:1.375rem;
                line-height:1.375rem;
                color:#333;
                &.active{
                    border-bottom:4px solid @mainColor;
                }
            }
        }
        .nav{
            width:5.63rem;
            margin:.31rem auto;
            background: #fff;
            font-size:0;
            border-radius:10px;
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
        // 表格
        .table-container{
            width:9.06rem;
            margin:.31rem auto;
            background:#fff;
            padding:0 .3rem 0 .3rem;
            border-radius:10px;
            .table{
                width:100%;
                table-layout: fixed;
                font-size:.47rem;
                tr{
                    border-bottom:1px solid #e6e6e6;
                    th{
                        color:#999;
                    }
                    td{
                        color:#333;
                        overflow: hidden;
                    }
                    th,td{
                        height:1.25rem;
                        vertical-align:middle;
                    }
                    th:first-child,td:last-child{
                        width:1.25rem;
                    }
                    td.active{
                        span{
                            display:inline-block;
                            width:.656rem;
                            height:.656rem;
                            line-height:.656rem;
                            background-color:@mainColor;
                            color:#fff;
                            border-radius:10px;
                            text-align:center;
                            &.opacity2{
                                opacity:.8;
                            }
                            &.opacity3{
                                opacity:.5;
                            }
                            &.number1{
                                width:.94rem;
                                height:.94rem;
                                border-radius:0px;
                                background:url("@{IMAGE-PATH}gold.png?@{DATE}") no-repeat center center/.94rem .94rem;
                            }
                            &.number2{
                                width:.94rem;
                                height:.94rem;
                                border-radius:0px;
                                background:url("@{IMAGE-PATH}silver.png?@{DATE}") no-repeat center center/.94rem .94rem;
                            }
                            &.number3{
                                width:.94rem;
                                height:.94rem;
                                border-radius:0px;
                                background:url("@{IMAGE-PATH}copper.png?@{DATE}") no-repeat center center/.94rem .94rem;
                            }
                        }
                    }
                }

            }
        }
        .teacher-table {
            .table {
                tr {
                    th:last-child, td:last-child {
                        width: 2rem;
                    }
                }
            }
        }
        .btn{
            width:100%;
            margin-top:.94rem;
            padding:0 .4rem;
            .btn-content {
                line-height: 1.25rem;
                -webkit-border-radius: .15rem;
                border-radius: .15rem;
                color: rgb(255, 255, 255);
                background-color: rgb(248, 89, 67);
                text-align: center;
                font-size: .53rem;
            }
        }
        .tip{
            text-align:center;
        }
        .answer-avatar{
            display: inline-block;
            width: 1.25rem;
            height: 1.25rem;
            overflow: hidden;
            vertical-align: middle;
            margin-top: .15rem;
            img{
                width: 1.25rem;
                height: 1.25rem;
                border-radius:50%;
            }
        }
        .answer-name{
            display: block;
            color: #333;
            margin-top: .15rem;
            font-size: .43rem;
            margin-bottom: .15rem;
        }
    }

</style>
<template>
    <div class="page-container" >
        <div class="main-nav-contianer">
            <ul class="main-nav">
                <li class="nav-item" :class="{active:type==1}" @click="navClickHandle(1)">土豪榜</li>
                <li class="nav-item" :class="{active:type==2}" @click="navClickHandle(2)">老师打赏榜</li>
            </ul>
        </div>
        <div class="table-container" v-show="type==1">
            <table class="table">
                <thead>
                <tr>
                    <th>排名</th>
                    <th>用户</th>
                    <th>金额</th>
                    <th>称号</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in richers">
                    <td :class="{active:index <= 2}">
                        <span v-if="index < 3" :class="{number1:index == 0,number2:index == 1,number3:index == 2}"></span>
                        <span v-else >{{index+1}}</span>
                    </td>
                    <td>
                        <div class="answer-avatar">
                            <img :src="item.avatar">
                        </div>
                        <span class="answer-name">{{ item.nickname }}</span>
                    </td>
                    <td>{{ item.amount }}</td>
                    <td>{{ title[index] }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <ul class="nav" v-show="type==2">
            <li class="nav-item" :class="{active:teacherType==1}" @click="teacherRankNavClickHandle(1)">周榜</li>
            <li class="nav-item" :class="{active:teacherType==2}" @click="teacherRankNavClickHandle(2)">总榜</li>
        </ul>
        <div class="table-container teacher-table" v-show="type==2">
            <table class="table">
                <thead>
                <tr>
                    <th>排名</th>
                    <th>用户</th>
                    <th>金额</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in teachers">
                    <td :class="{active:index <= 2}">
                        <span v-if="index < 3" :class="{number1:index == 0,number2:index == 1,number3:index == 2}"></span>
                        <span v-else>{{index+1}}</span>
                    </td>
                    <td>
                        <div class="answer-avatar" @click.stop.prevent="gotoAnswerIndex(item.answer_id||item.id)">
                            <img :src="item.avatar" alt="">
                        </div>
                        <span class="answer-name">{{ item.nickname }}</span>
                    </td>
                    <td>{{ item.amount }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="btn" @click="goToReward" v-if="!isShowGoOnReward">
            <div class="btn-content">
                我要打赏
           </div>
        </div>
        <ComFooter current="3"></ComFooter>
    </div>
</template>
<script>
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import ComFooter from '../../common/components/footer.vue';
    import myAjax from '../../common/js/request';

    export default {
        name: 'appPage',
        components: {
            ComFooter,
            Avatar
        },
        filters:{
            formateScore:commonFn.formateScore,
            formateMoney:commonFn.formateMoney,
        },
        data() {
            return {
                teacherType:commonFn.getParams()["teacherType"]||2,
                type:commonFn.getParams()["type"]||1,
                richers:[],
                teachers:[],
                teachersTotal:[],
                teachersWeek:[],
                answer_id:commonFn.getParams()["answer_id"],
                ask_id:commonFn.getParams()["ask_id"],
                isShowGoOnReward:commonFn.getParams()["from"]||"",
                // 提示处理
                tip:{
                    isShow:false,
                    text:"hello world",
                    time:1500
                },
                title:["富甲天下","富可敌国","富埒王侯","富商巨贾","多钱巨贾","腰缠万贯","巨富之家","家财万贯","挥金如土","富贵逼人"]
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
            navClickHandle:function(type){
                this.type = type;
            },
            teacherRankNavClickHandle:function(type){
                this.teacherType = Number(type);
                if(type === 1){
                    this.teachers = this.teachersWeek;
                }else if(type === 2){
                    this.teachers = this.teachersTotal;
                }
            },
            goToReward:function(){
                location.href = "/home/user/spare?answer_id=" + this.answer_id + "&ask_id=" + this.ask_id;
            },
            async getRichersData(){
                await myAjax.get( apiPath.getUserRewardList )
                    .then( res => this.richer = res )
                    .catch( e => {} )
            },
            async getTeachersData(){
                await myAjax.get( apiPath.getAnswerRewardList )
                    .then( res => this.teachersTotal = res )
                    .catch( e => {} );
            },
            // 跳转至首页
            gotoAnswerIndex:function(id){
                location.href = '/home/user/index?answer_uid=' + id;
            },
            // 获取周榜的信息
            async getWeekRankMsg(){
                await myAjax.get( apiPath.getAnswerRankRewardList )
                    .then( res => this.teachersWeek = res.reward_rank )
                    .catch( e => {} );
            }
    },
    async created() {
        this.getRichersData();
        this.getTeachersData();
        await this.getWeekRankMsg();
        let type =  Number(this.teacherType);
        if(type === 1){
            this.teachers = this.teachersWeek;
        }else if(type === 2){
            this.teachers = this.teachersTotal;
        }
        this.share();
        // 动态添加统计代码
        addStatisticsCode();
    }
    }
</script>
