<template>
<div class="mdatetimepicker">
    <div class="mdtp_mask" @click="hideMask" @touchmove.stop.prevent=""></div>
    <div class="mdtp_poppanel">
        <div class="mdtp_panel">
         <div class="mdtp_indicator"></div>
            <div class="mdtp_body">
                <div class="mdtp_year">
                    <ul ref='mdtp_year_container'>
                        <li></li>
                        <li></li>
                        <li v-for="item in yearList">{{item}}年</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="mdtp_month">
                    <ul>
                        <li></li>
                        <li></li>
                        <li v-for="item in monthList">{{item}}月</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="mdtp_day">
                    <ul>
                        <li></li>
                        <li></li>
                        <li v-for="item in dayList">{{item}}{{ isLunar ? "" : "日" }}</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="mdtp_time">
                    <ul>
                        <li></li>
                        <li></li>
                        <li v-for="item in timeList">{{item}}</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div class="mdtp_head" @touchmove.stop.prevent="">
                <button class="mDate_btn" :class="{active: !isLunar}" @click.stop.prevent="checkout(false)"><i class="icon" :class="{active:!isLunar}"></i>阳历</button>
                <button class="mDate_btn" :class="{active: isLunar}" @click.stop.prevent="checkout(true)"><i class="icon" :class="{active:isLunar}"></i>农历</button>
            </div>
            <div @touchmove.stop.prevent="">
                <button class="mDate_sure_btn" @click.stop.prevent="sureHandler">确定</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
require('./iscroll');
import {
    calendar
} from './calendar.js';

export default {
    name: 'mdatetimepicker',
    props: {
        options: { type: Object }
    },
    data:function(){
        return {
            isLunar: false,  // true为农历
            year: undefined,
            month: undefined,
            scroll: {
                year: {
                    panel: {},
                    scrollHeight:0, // 当前列表初始化的高度，用来计算page
                    indicator: undefined,  // 指示器索引
                },
                month: {
                    panel: {},
                    scrollHeight:0,
                    indicator: undefined,
                },
                day: {
                    panel: {},
                    scrollHeight:0,
                    indicator: undefined,
                },
                time: {
                    panel: {},
                    scrollHeight:0,
                    indicator: undefined,
                },
            },
            dateType: {
                year: '',  // 年
                month: '',  // 月
                day: '',  // 日
                time:'' // 时
            },
            yearList: [],
            monthList: [],
            dayList: [],
            timeList:[],

            liHeight:0, // 单个li的高度
        }
    },
    watch: {
        year: function(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.createMonthList(this.yearList[newValue]);
                this.createDayList(this.yearList[newValue], this.scroll.month.indicator + 1);

                // this.destroyIscroll('month');
                this.initIscroll('month');

                // this.destroyIscroll('day');
                this.initIscroll('day');
            }
        },
        month: function(newValue, oldValue) {
            if (newValue !== oldValue) {
                // this.destroyIscroll('day');
                this.createDayList(this.scroll.year.indicator, this.monthList[newValue]);

                this.initIscroll('day');
            }
        }
    },
    methods: {
        checkout: function(isLunar) {
            if (isLunar) {
                this.isLunar = true;
                this.createMonthList();
                this.createDayList();
                // this.destroy();
                this.init();
            } else {
                this.isLunar = false;
                this.createMonthList();
                this.createDayList();
                // this.destroy();
                this.init();
            }
        },
        hideMask: function() {
            this.emitData('mask', 'hide');
        },
        emitData: function(type, action, data) {
            // 广播选择的数据
            var data = data || {};
            this.$emit('change', {type: type, action: action, data: data});
        },
        // 格式化日期对象为时间戳单位s
        formatDateToTimestamp:function(dateObj){
            var date = new Date(dateObj.year,dateObj.month-1,dateObj.day);
            return date.getTime()/1000 + "";
        },
        sureHandler: function() {
            var date = {} , solarDate = {};
            Object.keys(this.dateType).forEach(function(key) {
                var indicator = this.getDateByIndicator(key);
                date[key] = indicator;
                solarDate[key] = indicator;
                if( key === 'year' ){
                    date[key] = indicator + "年";
                }
                if( key === 'month' ){
                    date[key] = indicator + "月";
                }
                if (!this.isLunar) {
                    if( key === 'day' ){
                        date[key] = indicator + "日";
                    }
                }
                if (key === 'time') {
                        date[key] = indicator;
                }
            }, this);
            if (this.isLunar) {
                date.isLunar = true;
                var isLunar = false;

                // 存储今年闰月是哪个，默认无闰月为0
                var leapMonth = 0;

                Object.keys(this.dateType).forEach(function(key) {
                    var indicator = this.getDateByIndicator(key);
                    if (key === 'year') {
                        solarDate[key] = indicator;
                        leapMonth = calendar.leapMonth(solarDate[key]);
                    }

                    if (key === 'month') {

                        if (leapMonth !== 0) {
                            // 今年有闰月
                            if (indicator.indexOf('闰') !== -1) {
                                // 这个月是闰月
                                isLunar = true;
                                solarDate[key] = this[key + 'List'].indexOf(indicator);
                            } else {
                                // 这个月不是闰月
                                // 这个月是小于闰月还是大于闰月
                                if (leapMonth > this.scroll[key].indicator) {
                                    // 小于闰月
                                    solarDate[key] = this[key + 'List'].indexOf(indicator) + 1;
                                }
                                if (leapMonth < this.scroll[key].indicator) {
                                    // 大于闰月
                                    solarDate[key] = this[key + 'List'].indexOf(indicator);
                                }
                            }
                        } else {
                            // 今年没有闰月
                            solarDate[key] = this[key + 'List'].indexOf(indicator) + 1;
                        }

                    }

                    if (key === 'day') {
                        solarDate[key] = this[key + 'List'].indexOf(indicator) + 1;
                    }
                }, this);
                var temp = calendar.lunar2solar(solarDate.year, solarDate.month, solarDate.day, isLunar);
                solarDate.year = temp.cYear;
                solarDate.month = temp.cMonth;
                solarDate.day = temp.cDay;
            } else {
                date.isLunar = false;
            }

            date.timestamp = this.formatDateToTimestamp(solarDate);
            this.emitData('formate', 'update', date);

            this.hideMask();
        },

        todayHandler: function() {
            Object.keys(this.dateType).forEach(function(key) {
                this.beforeScroll(key);
            }, this);
        },


        now: function() {
            // 返回当前年月日
            // var date = new Date();
            // var now = {
            //     year: date.getFullYear(),
            //     month: date.getMonth() + 1,
            //     day: date.getDate(),
            //     time: 24
            // }
            // 默认时间改为1990.1.1
            var now = {
                year: 1990,
                month: 8,
                day: 8,
                time: "不记得"
            }
            return now;
        },
        nowTimestamp: function() {
            // 返回当前时间戳
            return Date.now() || new Date().getTime();
        },
        daysInMonth: function(year, month) {
            // 计算某年某月有多少天
            if (!year || !month) {
                // throw '请传入正确参数';
                return false;
            }
            return new Date(year, month, 0).getDate();
        },


        createYearList: function() {
            // 生成年份列表，农历和阳历都一样
            var yearList = [];
            for (var i = 1930; i < 2020; i++) {
                yearList.push(i);
            }
            this.yearList = yearList;
        },
        createMonthList: function(year) {
            if (this.isLunar) {
                // 农历比较特殊，每年有不同的闰月
                var tempYear;
                if (year) {
                    tempYear = year;
                } else {
                    var now = this.now();
                    tempYear = now.year;
                }

                var monthList = ['正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '冬', '腊'];
                var leapMonthList = ['闰正', '闰二', '闰三', '闰四', '闰五', '闰六', '闰七', '闰八', '闰九', '闰十', '闰冬', '闰腊'];

                // 判断今年哪个月是闰月
                var leapMonth = calendar.leapMonth(tempYear);
                if (leapMonth !== 0) {
                    // 如果有闰月，则添加闰月到对应月份后面
                    monthList.splice(leapMonth, 0, leapMonthList[leapMonth - 1]);
                    this.monthList = monthList;
                } else {
                    this.monthList = monthList;
                }
            } else {
                this.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
        },
        createDayList: function(year, month) {
            if (this.isLunar) {
                // 农历的处理
                var dayList = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];

                var days, tempYear, tempMonth;

                if (year && month) {
                    tempYear = year;
                    tempMonth = month;
                } else {
                    var now = this.now();
                    tempYear = now.year;

                    // 判断当前月份是否闰月
                    if (now.month === calendar.leapMonth(now.year)) {
                        // 都转化为汉字，1月 => 正月
                        tempMonth = '闰' + calendar.toChinaMonth(now.month);
                    } else {
                        tempMonth = calendar.toChinaMonth(now.month);
                    }
                }


                // 判断这个月是否是闰月
                var isLeap = tempMonth.toString().indexOf('闰');

                if (isLeap === -1) {
                    // 非闰月天数
                    var monthIndex = this.monthList.indexOf(tempMonth) + 1;
                    days = calendar.monthDays(this.yearList[tempYear], monthIndex);
                    this.dayList = dayList.slice(0, days);
                } else {
                    // 闰月天数
                    days = calendar.leapDays(this.yearList[tempYear]);
                    this.dayList = dayList.slice(0, days);
                }
            } else {
                // 阳历的处理
                var dayList = [];
                var days;
                var now = this.now();
                if (year && month) {
                    days = this.daysInMonth(year, month);
                } else {
                    days = this.daysInMonth(now.year, now.month);
                }
                for (var i = 1; i < days + 1; i++) {
                    dayList.push(i);
                }
                this.dayList = dayList;
            }
        },
        // 创建时辰列表
        createTimeList: function(year) {
            for(var i = 0; i <= 24 ; i++){
                // 24点代表不记得
                if( i <= 23 ){
                    this.timeList.push(`${i}:00~${i}:59  `);
                }else if( i == 24 ){
                    this.timeList.push( '不记得  ' );
                }
            }
        },
        getDateByIndicator: function(key) {
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

            // // 设置当前页样式
            // nodeList[key][page + 2].className = 'selected';
            //
            // 保存索引，注意从'0'开始
            this.scroll[key].indicator = page;

            // 触发dayList或者monthList更新
            this[key] = page;
        },
        addScrollListener: function(key, eventType) {
            this.scroll[key].panel.on(eventType, this.pageHandler.bind(this, key))
        },
        beforeScroll: function(key) {
            // 每次初始化的时间点
            var now = this.now();

            // 农历需要根据当前阳历日期进行转换
            if (this.isLunar) {
                var temp = calendar.solar2lunar(now.year, now.month, now.day);
                    now.year = temp.cYear;
                    now.month = temp.IMonthCn;
                    now.day = temp.IDayCn;
            }

            // 初始跳转到当前日期
            if( this.isMobile() ){
                this.goToPage(key,now[key]);
            }else{
                this.scroll[key].panel.goToPage(0, this[key + 'List'].indexOf(now[key]), 500);
            }

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
            var liEle = this.$refs['mdtp_year_container'].firstElementChild;
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
        this.createYearList();
        this.createMonthList();
        this.createDayList();
        this.createTimeList();
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
    /*top: 50%;*/
    width: 100%;
    bottom:0;
    // top: 0.85034rem;
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
    text-align: center;
    height: 100%;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            height: @lineHeight;
            line-height: @lineHeight;
            font-size: @fontSize;
        }
    }
}
.mdtp_time{
	flex: none;
	width: 3.2rem;
}
</style>
