<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";
    @bg:#ffeed2;
    .page-container{
        padding-bottom:2.5rem;
        position:relative;
        .header{
            height:90px;
            /*line-height:90px;*/
            padding:0 30px;
            background:#fff;
            .search-box{
                display:inline-block;
                width:100%;
                height:56px;
                .br(10px);
                margin-top:17px;
                padding-left:60px;
                background:#f5f5f5 url('../../image/search-box.png') no-repeat 22px center/30px 30px;
                input{
                    width:100%;
                    line-height:56px;
                    outline: none;
                    border:none;
                    background:transparent;
                    font-size:26px;
                }
            }
        }

        .search-container{
            background:#fff;
            padding:25px 30px;
            border-top:2px solid #e2e2e2;
            .title{
                font-size:30px;
                color:#151515;
            }
            .list{
                max-width:100%;
                margin:16px 0;
                .item{
                    display:inline-block;
                    color:#666;
                    padding:10px 20px;
                    background:#f5f5f5;
                    .br(8px);
                    font-size:26px;
                    margin-right:16px;
                    margin-bottom:16px;
                    /*&:nth-child(4n){*/
                        /*margin-right:0;*/
                    /*}*/
                }
            }
            .clear-history-btn{
                width:320px;
                height:50px;
                line-height:50px;
                margin:0 auto;
                font-size:24px;
                border:1px solid #9c9c9c;
                .br(10px);
                text-align:center;
                background: url('../../image/clear-history.png') no-repeat 80px center/24px 25px;
            }
        }

        .searching-contianer{
            position:absolute;
            top:93px;
            background:#fff;
            width:586px;
            left:27px;
            box-shadow: 0 5px 20px rgba(0,0,0,.3);
            .list{
                .item{
                    color:#666;
                    line-height:74px;
                    padding:0 65px;
                    font-size:26px;
                    border-bottom:1px solid #eee;
                    &:hover{
                        background:#eee;
                    }
                    &:last-child{
                        border-bottom:none;
                    }
                    background:url('../../image/search-input.png') no-repeat 30px center/25px 25px;
                }
                .first-item{
                    padding:0 30px;
                    background:#fff;
                    color:@mainColor;
                }
                .last-item{
                    background:#fff;
                    text-align:center;
                }
            }
        }
    }
</style>
<template>
    <div class="page-container">
        <header class="header">
            <div class="search-box">
                <form action="" @submit.prevent="searchHandle($event)">
                    <input ref="search" type="search" @focus="inputFocus" @input="inputFocus" @blur="inputBlur" v-model="searchContent" placeholder="婚恋情感">
                </form>
            </div>
        </header>
        <section class="search-history search-container" v-if="historyList.length > 0">
            <h1 class="title">历史搜索</h1>
            <ul class="list">
                <li class="item" v-for="(item,index) in historyList" @click.stop.prevent="gotoResult('history',index)">
                    {{ item.keyWord }}
                </li>
            </ul>
            <div class="clear-history-btn" @click="clearHistory">
                清空历史
            </div>
        </section>
        <section class="hot-search search-container">
            <h1 class="title">热门搜索</h1>
            <ul class="list">
                <li class="item" @click.stop.prevent="searchResultPage(item.keyword)" v-for="(item,index) in hotSearchList">
                    {{ item.keyWord }}
                </li>
            </ul>
        </section>
        <transition name="fade" mode="in-out">
            <section class="searching-contianer" v-show="isShowSearchList">
                <ul class="list">
                    <li class="first-item item" v-if="this.searchContent" @click.stop.prevent="searchResultPage(searchContent)">
                        搜索“{{searchContent}}”
                    </li>

                    <li class="item" v-for="(item,index) in searchList" @click.stop.prevent="gotoResult('search',index)">
                        {{ item.keyWord }}
                     </li>
                    <li class="item last-item">
                        {{searchTip}}
                </li>
                </ul>
            </section>
        </transition>

        <ComFooter v-if="isShowFooter" current="1"></ComFooter>
        <!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip v-if="tip.isShow" @close-tip="tip.isShow = !tip.isShow" :text="tip.text" :time="tip.time"></myAlertTip>
        </transition>
        <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
    </div>
</template>
<script>
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode'
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'
    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            LoadingModel,
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 回答问题的类型
                type: commonFn.getParams()["type"] || "ask",
                // 提示处理
                tip: {
                    isShow: false,
                    text: "hello world",
                    time: 1500
                },
                // shareConfig: wxShareConfig,
                wxConfig: {},
                searchContent:'',
                searchList:[],
                isShowSearchList:false,
                searchTip:"请输入要搜索的内容",
                historyList:[],
                hotSearchList:[],
                isShowFooter:true
            }
        },
        watch:{
            // 设置搜索
            searchContent( newValue ){
                this.searchTip = '正在输入中...';
                this.getSearchList();
            }
        },
        methods: {
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
                let channleStr =  commonFn.getChannelStr();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href + channleStr
                });
            },
            searchHandle(){
                // 触发输入框失去焦点事件
                if(!this.searchContent){
                    return this.layer('请输入搜索内容');
                }
                this.$refs.search.blur();
                this.setHistory({keyWord:this.searchContent});
                location.href = "/home/search/master?keyword=" + encodeURIComponent(this.searchContent);
            },
            // 获得搜索列表
            getSearchList:commonFn.debounce(function(){
                // 请求搜索内容
                if( this.searchContent ){
                    this.searchTip = '正在努力搜索更多内容...';
                    this.getSearchData();
                }else{
                    this.searchTip = '请输入搜索内容';
                }
            },1000),
            // 输入框获取焦点
            inputFocus(){
                if(this.searchContent){
                    this.isShowSearchList = true;
                }
                this.isShowFooter = false;
            },
            // 输入框失去焦点
            inputBlur(){
                setTimeout(()=>{
                    this.isShowSearchList = false;
                },100);
                this.isShowFooter = true;
            },
            // 本地存储历史搜索数据
            setHistory(search){
                // 取出本地之前存储的再一起存进去
                let history = localStorage.getItem('historySearch');
                try{
                    history = history ? JSON.parse(history) : [];

                    if(search && typeof search === 'object'){
                        for( let i = 0;i < history.length;i++){
                            if(!search.keyWord || history[i].keyWord === search.keyWord){
                                // 终止当前函数，不存储数据
                                return;
                            }
                        }
                        history.unshift(search);
                        localStorage.setItem('historySearch',JSON.stringify(history));
                    }
                }catch (err){
                    console.log(err);
                }
            },
            // 获取历史记录显示到历史列表
            getHistorySearch(){
                let history = localStorage.getItem('historySearch');
                try{
                    history = history ? JSON.parse(history) : [];
                    this.historyList = history;
                }catch (err){
                    console.log(err);
                }
            },
            // 清除历史记录
            clearHistory(){
                localStorage.removeItem('historySearch');
                this.historyList = [];
            },
            // 跳转至结果页面
            // 点具体项跳转到老师或者问题页面
            // 要是点击搜索跳转至搜索结果页面
            gotoResult(type,index){
                // 当前项的数据
                let curItem = {
                    'hot': this.hotSearchList[index], // 热门榜跳转
                    'history' : this.historyList[index] , // 历史搜索页跳转
                    'search': this.searchList[index] // 搜索列表页跳转
                }
                // 存到历史记录中
                this.setHistory(curItem[type]);
                // 获得要跳转的页面链接
                if( curItem[type].type ){
                    let url = Number(curItem[type].type) === 1 ? '/home/user/index?answer_uid=' : '/home/ask?ask_id=';
                    location.href = url + curItem[type].id + '&channel=1505464053';
                }else{
                    this.searchResultPage(curItem[type].keyWord);
                }
            },

            // 跳转到搜索结果页面
            searchResultPage(keyword){
                // 存到历史记录中
                this.setHistory({keyWord:keyword});
                let kwd = encodeURIComponent(keyword);
                location.href = "/home/search/master?keyword=" + kwd;
            },
            // 获取数据接口
            async getSearchData(){
                let data = { keyword:this.searchContent };
                await myAjax.get( apiPath.search,data )
                    .then( res => {
                        if( res.length ){
                            res.forEach(val => {
                                val.keyWord = val.nickname;
                            });
                            this.searchTip = '搜索完成';
                        }else{
                            this.searchTip = '暂无搜索结果';
                        }
                        this.searchList = res;
                    } )
                    .catch( e => {
                        this.layer( e )
                    });
            },
            // 获取热门搜索列表
            async getHotSearchData(){
                await myAjax.get( apiPath.hotSearch )
                    .then( res => {
                        if( res.length ){
                            res.forEach(val => {
                                val.keyWord = val.keyword;
                            });
                        }
                        this.hotSearchList = res;
                    } )
                    .catch( e => this.layer(e));
            }
    },

    created: function() {
        this.getHotSearchData();

    },
    async mounted(){
        // 动态添加统计代码
        this.getHistorySearch();

        if(this.historyList.length > 0){
            this.searchContent = this.historyList[0].keyWord;
        }
        await this.share();
        addStatisticsCode();
    }
    }
</script>
