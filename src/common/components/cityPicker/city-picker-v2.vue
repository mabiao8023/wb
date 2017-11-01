<template>
<div class="mdatetimepicker">
    <div class="mdtp_mask" @click="hideMask" @touchmove.stop.prevent=""></div>
    <div class="mdtp_poppanel">
        <div class="mdtp_panel">
         <div class="mdtp_indicator"></div>
            <div class="mdtp_body">
                <div class="mdtp_year mdtp_province">
                    <ul ref='mdtp_province_container'>
                        <li></li>
                        <li></li>
                        <li v-for="item in provinceList">{{item.text}}</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="mdtp_month mdtp_city">
                    <ul>
                        <li></li>
                        <li></li>
                        <li v-for="item in cityList">{{item.text}}</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div @touchmove.stop.prevent="">
                <button class="mDate_sure_btn" @click.stop.prevent="sureHandler">确定</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import '../mDatetimePicker/iscroll';
import { provinceList, cityList, areaList } from '../../js/areaData'

export default {
    name: 'city-picker-v2',
    props: {
        options: { type: Object }
    },
    data:function(){
        return {
            isLunar: false,  // true为农历
            province: undefined,
            city: undefined,
            scroll: {
                province: {
                    panel: {},
                    scrollHeight:0, // 当前列表初始化的高度，用来计算page
                    indicator: undefined,  // 指示器索引
                },
                city: {
                    panel: {},
                    scrollHeight:0,
                    indicator: undefined,
                },
            },
            dateType: {
                province: '',  // 省
                city: '',  // 市
            },
            provinceList: [],
            cityList: [],
            liHeight:0, // 单个li的高度
        }
    },
    watch: {
        province: function(newValue, oldValue) {
            if (newValue !== oldValue) {
                // 重置选择
                this.createCityList(this.provinceList[newValue]);
                this.initIscroll('city');
            }
        },
//        month: function(newValue, oldValue) {
//            if (newValue !== oldValue) {
//                // this.destroyIscroll('day');
//                this.createDayList(this.scroll.year.indicator, this.monthList[newValue]);
//
//                this.initIscroll('day');
//            }
//        }
    },
    methods: {
        hideMask: function() {
            this.emitData('mask', 'hide');
        },
        emitData: function(type, action, data) {
            // 广播选择的数据
            var data = data || {};
            this.$emit('change', {type: type, action: action, data: data});
        },
        sureHandler: function() {
            // 获得所有参数输出
            let data = {
                province:'',
                city:'',
            };
            Object.keys(this.dateType).forEach( key => {
                data[key] = this.getNameByIndicator(key).text
            })
            this.emitData('formate', 'update', data);
            this.hideMask();
        },
        createProvinceList: function() {
            // 生成省级列表
            this.provinceList = provinceList;
        },
        createCityList: function(province) {
            // 生成市级列表
            if( province ){
                this.cityList = cityList[province.value];
            }else{
                // 默认初始化为北京市
                this.cityList = cityList['110000'];
            }
        },
        getNameByIndicator: function(key) {
            // 根据key的indicator计算出年月日
            return this[key + 'List'][this.scroll[key].indicator];
        },
        clearStyle: function(key) {
            // 清理样式
            if (key) {
                [].forEach.call(document.querySelectorAll('.mdtp_' + key + ' .selected'), function(item) {
                    item.className = '';
                });
            }
        },
        // 不用对齐属性的改动
        pageHandler: function(key) {

            // 清理样式
            // this.clearStyle(key);

            // 获取所有节点
            var nodeList = {},
                page = 0;
            nodeList[key] = document.querySelectorAll('.mdtp_' + key + ' li');

            // 获取当前项索引
            if(this.isMobile()){
                page = this.mobileGetPage(key).pageY;
            }else{
                page = this.scroll[key].panel.currentPage.pageY;
            }

            // 保存索引，注意从'0'开始
            this.scroll[key].indicator = page;

            // 省级改变触发市级联动
            this[key] = page;
        },
        addScrollListener: function(key, eventType) {
            this.scroll[key].panel.on(eventType, this.pageHandler.bind(this, key))
        },
        beforeScroll: function(key) {
            this.pageHandler(key);
        },
        destroyIscroll: function(key) {
            this.scroll[key].panel.destroy();
            this.scroll[key].panel = null;
        },
        initIscroll: function(key) {
            // 根据key初始化IScroll
            var config = {
                startY: 0,  // 开始位置默认为0
                snap: 'li',  // 以li元素为一页建立页码索引
                defaultScrollbars: 'horizontal',
                mouseWheel: true,
            };

            // 手机端不使用对齐效果
            if(this.isMobile()){
                config = {
                    startY: 0,  // 开始位置默认为0
                    defaultScrollbars: 'horizontal',
                    mouseWheel: false,
                    deceleration:0.0008
                }
            }

            this.scroll[key].panel = new IScroll('.mdtp_' + key, config);

            // 初始化几个高度值，用来在移动端计算页面数
            this.resetHeight(key);
            this.beforeScroll(key);

            this.addScrollListener(key, 'scrollEnd');

            this.$nextTick(function () {
                this.scroll[key].panel.refresh();
            });
        },
        destroy: function() {
            Object.keys(this.dateType).forEach(function(key) {
                this.destroyIscroll(key);
            }, this);
        },
        init: function() {
            Object.keys(this.dateType).forEach(function(key) {
                this.initIscroll(key);
            }, this);
        },
        // add
        // 修改日期组件滑动流畅性 by mbiao
        // 判断是手机还是电脑端
        isMobile:function(){
            var ua = navigator.userAgent,
                Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            return Agents.some(function(v){
                return new RegExp(v,'i').test(ua);
            })
        },
        mobileGetPage:function(key){
            // 1、计算当前位置滚动高度
            var currentY = this.scroll[key].panel.y;
            // 2、当前距离与整个高度的差距几个Li
            var nums = Math.abs(currentY/this.liHeight);
            // 3、算出最近li的个数
            var currentLi = Math.round(nums);
            // 4、算出当前li的滚动的距离
            var currentLiHeight = currentLi * this.liHeight;
            // 5、滚动到对应的位置
            this.scroll[key].panel.scrollTo(0,-currentLiHeight,500);
            return {
                pageY:currentLi
            };
        },
        // 重新获取到li的高度和对应列表的滚动高度
        resetHeight:function(key){
            var liEle = this.$refs['mdtp_province_container'].firstElementChild;
            // 这种方式只会拿到整数不会拿到小数
            // this.liHeight = liEle.offsetHeight;
            // this.liHeight = liEle.clientHeight;
            // 只针对阿里fiexible的适配方案做适配处理
            // 获得根元素字体的大小
            var docEleFontSize = document.documentElement.style.fontSize;
            this.liHeight = parseFloat(docEleFontSize);
            var liLength = this[key + 'List'].length + 4;
            this.scroll[key].scrollHeight = this.liHeight * liLength;
        },
        // 初始化页面滚动到对应的位置
        goToPage:function(key,initValue){
            var index = this[key + 'List'].indexOf(initValue);
            var initHeight = index * this.liHeight;
            this.scroll[key].panel.scrollTo(0,-initHeight,500);
        }
    },
    created:function() {
        this.createProvinceList();
        this.createCityList();
    },
    mounted:function() {
        this.init();
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>


@mainColor: #f85f48;
// 大红
@subColor: #4aa66a;
// 绿
@border1: 0.021259rem solid #eee;
@lineHeight: 1rem;
@fontSize: 0.43rem;
@border: 1px solid #eee;
.br(@val) {
    border-radius: @val;
}
.mdtp_mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.8;
    visibility: visible;
    z-index: 1010;
    
}
.mdtp_poppanel {
    position: fixed;
    width: 100%;
    // top: 0.85034rem;
    bottom:0;
    //padding:0 .31rem;
    height: auto;
    background: #fff;
    box-sizing: border-box;
    z-index: 9999;
    /*<!--.br(5px);-->*/
    overflow: hidden;
}
.mdtp_panel {
    position: relative;
    background: #fff;
    height: auto;
}
.mdtp_head {
    display: flex;
    justify-content: space-around;
    background: #fff;
    height: auto;
    box-shadow: 0 1px 20px #000;
    .mDate_btn {
        &:first-child {
            border-right: @border;
        }
        flex: 1;
        box-flex: 1.0;
        outline: none;
        border: none;
        text-align: center;
        padding-left: 0.106293rem;
        padding-right: 0.106293rem;
        box-sizing: border-box;
        min-width: 0.85034rem;
        height: @lineHeight + 0.2rem;
        line-height: @lineHeight + 0.2rem;
        background: #fff;
        font-size: @fontSize;
        //font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
        .icon {
            display: inline-block;
            vertical-align: middle;
            width: 0.47rem;
            height: 0.47rem;
            border: 1px solid #999;
            .br(50%);
            margin-right: 0.31rem;
            position: relative;
            &.active:after {
                content: "";
                position: absolute;
                width: 0.3rem;
                height: 0.3rem;
                top: 50%;
                left: 50%;
                margin-left: -0.15rem;
                margin-top: -0.15rem;
                .br(50%);
                background-color: #f85f48;
            }
        }
    }
    .mDate_btn.active {
        color: @mainColor;
    }
}
.mDate_sure_btn {
    outline: none;
    border: none;
    text-align: center;
    height: @lineHeight + 0.2rem;
    line-height: @lineHeight + 0.2rem;
    width: 100%;
    color: #fff;
    font-size: 0.53rem;
    background-color: @mainColor;
}
.mdtp_body {
    position: relative;
    height: @lineHeight * 5;
    overflow: hidden;
    margin: 0.31rem 0.31rem 0;
    display: flex;
    color:#333;
    .active {
        color: @subColor;
    }
    .selected {
        color: @mainColor;
    }
}
.mdtp_indicator {
    position: absolute;
    background: #f85f48;
    opacity: .3;
    height:@lineHeight;
    position: absolute;
    top: @lineHeight * 2;
    width: 100%;
    &:after {
        content: '';
        position: absolute;
        top: @lineHeight;
        width: 100%;
    }
}
.mdtp_day,
.mdtp_month,
.mdtp_time,
.mdtp_year {
    flex: 1;
    box-flex: 1.0;
    text-align: center;
    height: 100%;
    overflow: hidden;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            height: @lineHeight;
            line-height: @lineHeight;
            font-size: @fontSize;
            overflow: hidden;
        }
    }
}
</style>