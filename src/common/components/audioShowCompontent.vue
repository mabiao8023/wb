/*
* 功能：音频显示组件，仅用来显示
* props: fee_touting -> 偷听的需要支付的价格，time -> 音频时间
*/

<template>
    <div class="audio-container">
        <div class="main">
            <slot>{{fee_touting}}元偷偷听</slot>
        </div>
        <div class="media-time"> {{ time }}"</div>
    </div>
</template>

<script>

export default {
    name:'audio-show-component',
    props:{
            fee_touting:{
                type: String,
                default: "1"
            },
            time:{
                type:String,
                default: '59'
            }
        }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import '../../common/style/config';
    .audio-container{
        display:inline-block;
        .main{
            display:inline-block;
            width:280px;
            height:70px;
            line-height:70px;
            text-align:center;
            color:#fff;
            border-radius: 35px;
            background:#1ccda6 url(../../image/wave3.png) no-repeat 20px center/26px 26px;
            font-size:28px;
            position:relative;
            margin-right:20px;
            &::after{
                content:'';
                position:absolute;
                bottom:-5px;
                left:-10px;
                width:34px;
                height:48px;
                background:url(../../image/bubble.png) no-repeat center center/100% 100%;
            }
        }
        .media-time{
            display:inline-block;
        }
    }
</style>
