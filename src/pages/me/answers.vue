<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
    @bg:#ffeed2;
    .page-container {
        padding-bottom: 2.5rem;
        .bubble span:nth-child(3) {
            display: none;
        }
        .nav-tab ul{
            width:100%;
            font-size:0;
        }
        .nav-tab ul li{
            position:relative;
            display:inline-block;
            width:3.33rem;
            height:1.5rem;
            line-height:1.5rem;
            font-size:0.47rem;
            text-align:center;
            background-color:#fff;
            color:#333;
            border-bottom:2px solid #f5f5f5;
        }
        .nav-tab .numbers{
            position:absolute;
            padding:0 .2rem;
            top:0.1rem;
            right:0rem;
            color:#fff;
            background-color: #F85F48;
            -webkit-border-radius:.3rem;
            -moz-border-radius:.3rem;
            border-radius:.3rem;
            /*width:0.6rem;*/
            height:0.6rem;
            line-height:0.6rem;
            text-align:center;
            font-size:0.4rem;
        }
        .nav-tab ul .active{
            border-bottom:2px solid #F85F48;
        }
        .is_first{
            padding-left:.4rem;color:#F85F48;font-size:.375rem;
        }
        .answer .content{
            width:100%;
        }
        .answer{
            border-bottom:1px solid #eee;
            background: #fff;
            padding: .47rem;
        }
        .answer .price {
            float: right;
            line-height: 1rem;
            color: #f85f48;
            font-size: .4rem;
        }
        .answer .content p{
            color:#151515;
            padding:.31rem 0;
        }
        .username{
            font-size:.47rem;
            color:#666;
            line-height:1.25rem;
        }
        img{
            width:100%;
            vertical-align:middle;
        }
        .photo-show{
            padding: 0 0 .15rem;
        }
        .photo-show li {
            padding: 0;
            display: inline-block;
            width: 2.46rem;
            height: 2.46rem;
            background: #e7e7e7;
            margin-right: .156rem;
            margin-bottom: 0;
            border-radius: 5px;
            -webkit-boder-radius:5px;
            overflow: hidden;
            position: relative;
        }
        .photo-show li img{
            vertical-align:middle;
            width:100%;
            position:absolute;
            top:50%;
            left:0;
            -webkit-transform: translate(0,-50%);
            transform: translate(0,-50%);
        }
    }
    .user-evl{
        display:flex;
        align-items: center;
        justify-items: right;
        .evl-com{
            padding-top:10px;
        }
    }
    .timeout{
        text-align: right;
    }
    .red{
        color: red;
    }
</style>
<template>
    <div class="page-container">
        <nav class="nav-tab tab">
            <ul>
                <li  :class="{active:type == 1}" class="item" @click="navChange($event,1)">
                    待回答
                    <div class="numbers">{{ message.data.not_answer }}</div>
                </li>
                <li :class="{active:type == 2}" class="item" @click="navChange($event,2)">
                    已回答
                </li>
                <li :class="{active:type == 3}" class="item" @click="navChange($event,3)">
                    已过期
                </li>
            </ul>
        </nav>
        <section class="main content">
            <ul class="lists no-answer tab1" v-show="type == 1">
                <li class="answer" v-for="(item,index) in noAnswers.data"  :data-url="item.status == 2 ? '/home/ask/answerDetail?ask_id='+ item.id: '/home/me/answer?ask_id='+item.id" @click="goToPage($event,item.id)">
                    <div>
                        <div class="user">
                            <img class="avatar" :src="item.ask_avatar">
                        </div>
                        <span class="username">{{ item.ask_nickname }}</span>
                        <span class="is_first"></span>
                        <span class="price">￥{{ item.ask_money }}</span>
                        <span class="price" style="margin-right: 15px" v-if="item.status == 2">有追问</span>
                    </div>
                    <div class="content">
                        <p>{{ item.ask }}</p>
                        <ul class="photo-show" v-if="item.image_info.length > 0" >
                            <li v-for="(val,index) in item.image_info">
                                <img :src="val.thumb_url">
                            </li>
                        </ul>
                        <div class="content" v-if="item.status == 2">
                            <div class="user">
                                <img class="avatar" :src="answer.avatar">
                                <span class="auth_ico">{{ answer.score>5?'5.0':answer.score<4.6?'4.6':answer.score }}</span>
                            </div>
                            <div class="media">
                                <span class="bubble">
                                    <span class="bubble-tail"></span>
                                    <span class="wave3"></span>
                                    <span></span>听一听
                                </span>
                                <span class="length">{{ item.media_time }}"</span>
                            </div>
                        </div>
                    </div>
                    <div class="timeout" v-if="item.status != 2">该问题已提问 <span class="red">{{getTime(item.end_time)}}</span></div>

                </li>
            </ul>
            <ul class="lists answered tab2" v-show="type == 2">
                <li class="answer" v-for="(item,index) in answered.data" :data-url="'/home/ask/answerDetail?ask_id='+ item.id" @click="goToPage($event,item.id)">
                    <div>
                        <div class="user">
                            <img class="avatar" :src="item.ask_avatar">
                        </div>
                        <span class="username">{{ item.ask_nickname }}</span>
                        <span class="is_first"></span>
                        <span class="price">￥{{ item.ask_money }}</span>
                        <span class="price" style="margin-right: 15px">{{ item.is_evaluate >= 1 ? '已评价':'未评价'}}</span>
                    </div>
                    <div class="content">
                        <p>{{ item.ask }}</p>
                        <ul class="photo-show" v-if="item.image_info && item.image_info.length > 0" >
                            <li v-for="(val,index) in item.image_info">
                                <img :src="val.thumb_url">
                            </li>
                        </ul>
                        <div class="content" v-if="item.status == 2">
                            <div class="user">
                                <img class="avatar" :src="answer.avatar">
                                <span class="auth_ico">{{ answer.score>5?'5.0':answer.score<4.6?'4.6':answer.score }}</span>
                            </div>
                            <div class="media">
                                    <span class="bubble">
                                        <span class="bubble-tail"></span>
                                        <span class="wave3"></span>
                                        <span></span>听一听
                                    </span>
                                <span class="length">{{ item.media_time }}"</span>
                            </div>
                        </div>
                        <!-- 评价数据 -->
                        <div class="user-evl" v-if="item.is_evaluate >= 1">
                            <p>用户评价：</p>
                            <div class="evl-com">
                                <start-show :rank="item.star"></start-show>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="lists expired tab3" v-show="type == 3">
                <li class="answer" v-for="(item,index) in expired.data" :data-url="'/home/ask/answerDetail?ask_id='+ item.id" >
                    <div>
                        <div class="user">
                            <img class="avatar" :src="item.ask_avatar">
                        </div>
                        <span class="username">{{ item.ask_nickname }}</span>
                        <span class="is_first"></span>
                        <span class="price">￥{{ item.ask_money }}</span>
                        <span class="price" style="margin-right: 15px" v-if="item.is_evaluate">未评价</span>
                    </div>
                    <div class="content">
                        <p>{{ item.ask }}</p>
                        <ul class="photo-show" v-if="item.image_info.length > 0" >
                            <li v-for="(val,index) in item.image_info">
                                <img :src="val.thumb_url">
                            </li>
                        </ul>
                        <div class="content" v-if="item.status == 2">
                            <div class="user">
                                <img class="avatar" :src="answer.avatar">
                                <span class="auth_ico">{{ answer.score>5?'5.0':answer.score<4.6?'4.6':answer.score }}</span>
                            </div>
                            <div class="media">
                                    <span class="bubble">
                                        <span class="bubble-tail"></span>
                                        <span class="wave3"></span>
                                        <span></span>听一听
                                    </span>
                                <span class="length">{{ item.media_time }}"</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <ComFooter current="3"></ComFooter>
        <infinite-loading :on-infinite="getData" :distance="100" spinner="circles" ref="infiniteLoading">
            <span slot="no-results">
                暂无数据
            </span>
            <span slot="no-more">
                暂无更多数据
            </span>
        </infinite-loading>
    </div>
</template>
<script>
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import ComFooter from '../../common/components/footer.vue';
    import ImageShow from '../../common/components/imageShow.vue';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode'
    import InfiniteLoading from 'vue-infinite-loading';
    import startShow from '../../common/components/startCompontent.vue';
    import myAjax from '../../common/js/request'
    export default  {
        name: 'appPage',
        components: {
            ComFooter,
            ImageShow,
            InfiniteLoading,
            startShow
        },
        data() {
            return {
                // 返回数据类型 1=>待回答，2=>已回答，3=>已过期
                type:1,
                // 老师信息
                answer:{},
                // 回答数据
                message:{
                    api:apiPath.answerMessage,
                    data:{}
                },
                // 待回答数据
                noAnswers:{
                    page:1,
                    api:apiPath.noAnswerList,
                    data:[]
                },
                // 已经回答数据
                answered:{
                    page:1,
                    api:apiPath.answeredList,
                    data:[]
                },
                // 已经过期数据
                expired:{
                    page:1,
                    api:apiPath.overAnswerList,
                    data:[]
                },
                timer:null, // 启动的定时器
                curTime:Date.now()/1000, // 获取到当前时间
            }
        },
        computed:{
            // 计算获得的api和page,用于请求数据
            api:function() {
                var api = [apiPath.noAnswerList, apiPath.answeredList, apiPath.overAnswerList];
                return api[this.type - 1];
            },
            // 根据问题类型判断当前选项的页数
            page:function(){
                var page = [this.noAnswers.page,this.answered.page,this.expired.page];
                return page[this.type - 1];
            }
        },
        methods:{
            getTime(time){
                // 显示24小时
                let leftTime = 24*60*60 - (time - this.curTime);
                    //定义变量 d,h,m,s保存倒计时的时间
                    //d = Math.floor(leftTime/1000/60/60/24);
                    if( leftTime <= 0 ){
                        leftTime = 0;
                    }
                    let h = Math.floor(leftTime/60/60%48),
                        m = Math.floor(leftTime/60%60),
                        s = Math.floor(leftTime%60);

                    return h+':'+m+':'+s;
            },
            timeHandle:function(){
                if( this.timer ){
                    return;
                }
                if(this.noAnswers.data.length){
                    this.timer = setInterval( () => {
                    this.noAnswers.data.forEach(val => {
                        val.end_time -= 1;
                        if( val.end_time <= this.curTime ){
                            // 聊天结束
                            val.end_time = this.curTime;
                        }
                    })
                    },1000);

                }else{
//                    clearInterval(this.timer);
//                    this.timer = null;
                }

            },
            // 切换导航tab
            navChange:function( event , type ){
                this.type = type || 1;
                var targetLi = event.currentTarget;
                var activeLi = document.querySelector(".nav-tab li.active");
                if( targetLi != activeLi ){
                    this.$refs["infiniteLoading"].$emit('$InfiniteLoading:reset');
                }
            },
            // 请求列表数据
            async getData(){
                let type = this.type;
                await myAjax.get( this.api,{ p : this.page } )
					.then( res => {
						if(res && res.list.length > 0){
							this.answer = res.answer;
							if( type == 1 ){
								this.noAnswers.page++;
								this.noAnswers.data = this.noAnswers.data.concat(res.list);
								this.timeHandle();
							}else if( type == 2 ){
								this.answered.page++;
								this.answered.data = this.answered.data.concat(res.list);
							}else{
								this.expired.page++;
								this.expired.data = this.expired.data.concat(res.list);
							}
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:loaded');
						}else{
							this.$refs["infiniteLoading"].$emit('$InfiniteLoading:complete');
						}
					} ).catch( e => { } );
            },
            // 请求待回答数量
            async getMessage(){
                await myAjax.get( this.message.api )
					.then( res => this.message.data = res.total )
					.catch( e => {} );
            },
            //点击li后的页面跳转
            goToPage( event,id ){
                var target = event.currentTarget;
                var url = target.getAttribute("data-url");
                location.href = url;
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
        created:function(){
            this.getMessage();
            this.share();
        }
    }
</script>
