<style lang="less" rel="stylesheet/less" scoped>
    @import '../../common/style/config';
    .evaluate-container{
        padding:30px;
        margin:6px 0;
        background:#fff;
        .title{
            font-size:28px;
            color:#333;
            text-align:center;
            position:relative;
            p{
                display:inline-block;
                padding:0 10px;
                background: #fff;
                position:relative;
                z-index:10;
            }
            .line{
                position:absolute;
                left:0;right:0;
                top:50%;
                height:1px;
                background:#e6e6e6;
            }
        }
        .start-list{
            font-size: 0;
            margin: 0 auto;
            padding: .22rem 0;
            text-align: center;
            .start-item{
                background: url(../../image/star2.png) no-repeat center;
                background-size: 100% 100%;
                display: inline-block;
                width: .75rem;
                height: .687rem;
                margin-right: .28rem;
                &.active{
                    background: url(../../image/star1.png) no-repeat center;
                    background-size: 100% 100%;
                }
            }
        }
        .evaluate-input > textarea{
            padding: .23rem;
            width: 100%;
            height: 3.125rem;
            font-size: .375rem;
            background: #eee;
            vertical-align: middle;
            border: 1px solid #999;
            outline: 0;
            resize: none;
            border-radius: .156rem;
        }
        .sub-evaluate{
            color: #fff;
            display: block;
            margin: .31rem auto;
            font-size: .4375rem;
            background: #f85f48;
            width: 3.125rem;
            line-height: 1rem;
            border: 0;
            outline: 0;
            border-radius: .156rem;
            text-align:center;
        }
        .think-tip{
            text-align:center;
            font-size:30px;
            color:#151515;
        }
        .cmd_show{
            color:#666;
            font-size:26px;
            text-align:justify;
            text-indent: 2em;
            word-wrap: break-word;
        }
        .recommend-pop{
            position:fixed;
            top:0;
            left:0;
            bottom:0;
            right:0;
            z-index:1000;
            background-color: rgba(0,0,0,.5);
            img{
                position:absolute;
                right:0;
                top:0;
                width:60%;
            }
        }
    }
</style>

<template>
    <div class="evaluate-container">
            <div class="title">
                <p>匿名评价大师</p>
                <span class="line"></span>
            </div>
            <ul class="start-list" @click.stop.prevent="choiceStart">
                <li class="start-item" :class="{active:start >= 1}" data-id="1"></li>
                <li class="start-item" :class="{active:start >= 2}" data-id="2"></li>
                <li class="start-item" :class="{active:start >= 3}" data-id="3"></li>
                <li class="start-item" :class="{active:start >= 4}" data-id="4"></li>
                <li class="start-item" :class="{active:start >= 5}" data-id="5"></li>
            </ul>
            <div v-if="isCanEvaluate == '1'">
                <div class="evaluate-input">
                    <textarea v-model="content" placeholder="其他意见或建议(内容匿名，可放心填写)">
                    </textarea>
                </div>
                <div class="sub-evaluate" @click.stop.prevent="submit">
                    提交评论
                </div>
            </div>
            <div v-else-if="isCanEvaluate == '2'">
                <div class="cmd_show">
                   {{ content }}
                </div>
                <p class="think-tip">感谢您的评价</p>
                <div class="sub-evaluate" @click.stop.prevent="showRePop" v-if="is_recommend == 1 ">
                    推荐给好友
                </div>
            </div>
            <!-- 推荐给朋友的弹窗 -->
            <div class="recommend-pop" @click.stop.prevent="hideRePop" v-if="isShowRePop">
                <div class="recommend-img">
                    <img src="../../image/tjzy.png">
                </div>
            </div>
        </div>

</template>

<script>
    import { apiPath } from '../../common/js/config.js';
export default {
    name:'evaluate-component',
    // 通过ask_id获取和提交评价信息
    props:{
        ask_id:{},
        evaluateObj:{},
        room_id:{},
        type:{
            default:1    // 1表示普通问题评论，2 -> 图文咨询评论
        }
    },
    data(){
        return {
            isCanEvaluate:this.evaluateObj.isCanEvaluate, //是否已经评论过  0 -> 不可  ，1 -> 可评论, 2 -> 评论过
            start:this.evaluateObj.start || 4, // 当前的星数
            content:this.evaluateObj.content || '',// 评价内容
            is_evaluate:this.evaluateObj.is_evaluate,
            is_recommend:this.evaluateObj.is_recommend, // 是否可推荐给其他人  1 -> 可以推荐 ， 2 -> 不能推荐
            isShowRePop:false
        }
    },
    methods:{
        layer(text,time){
            this.$emit('layer',text,time);
        },
        showLoading(text){
            this.$emit('showLoading',text);
        },
        hideLoading(){
            this.$emit('hideLoading');
        },
        // 选择星星
        choiceStart(event){
            if( this.isCanEvaluate == '2' ){
                return;
            }
            let target = event.target;
            let startId;
            if( target.nodeName == 'LI' ){
                startId = target.dataset.id;
                this.start = startId;
            }
        },
        // 提交评论
        submit(){
            this.showLoading('提交中...');
            let data = {},api = apiPath.addEvaluate;
            if( this.type == 1 ){
                data = {
                    ask_id:this.ask_id,
                    content:this.content,
                    is_evaluate:this.is_evaluate,
                    rank:this.start
                }
            }else if(this.type == 2){
                data = {
                    room_id:this.room_id,
                    content:this.content,
//                    is_evaluate:this.is_evaluate,
                    rank:this.start
                }
                api = apiPath.consultantEvaluate;
            }
            this.$http.post(api, data,
                {
                    emulateJSON:true
                }).then( data => {
                    this.hideLoading();
                    let res = data.body;
                    if( res.err ){
                        location.reload();
                    }else{
                        this.layer(res.msg,1000);
                    }
            } )
        },
        // 显示弹窗
        showRePop(){
            this.isShowRePop = true;
        },
        // 隐藏弹窗
        hideRePop(){
            this.isShowRePop = false;
        }
    },
    created(){
    }
}
</script>