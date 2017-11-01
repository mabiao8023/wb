<style lang="less" rel="stylesheet/less" scoped>
    @import '../../common/style/config';
    .user-avatar-container{
        position:relative;
        .user-avatar{
            width:100%;
            height:100%;
            border-radius: 50%;
        }
        .user-score{
            position:absolute;
            bottom:-18px;
            right:-40px;
            width:100px;
            height:60px;
            text-align:center;
            color:#fff;
            background:@mainColor;
            line-height:60px;
            font-size:48px;
            border-radius: 30px;
            border:4px solid #fff;
            transform: scale(0.5);
        }
    }
</style>

<template>
    <div class="user-avatar-container" :style="avatarWidth"  @click.stop.prevent="gotoAnswerIndex(answerUid)">
        <img class="user-avatar" :src="avatarSrc" alt="易起问">
        <span class="user-score" v-if="isHasScore">{{ score }}</span>
    </div>
</template>

<script>
export default {
    name:'avatar-component',
    props:{
            avatarWidth:{
                type:Object,
                default: function(){
                    return {
                        width:'80px',
                        height:'80px'
                    }
                }
            },
            score:{
                default:'4.8'
            },
            isHasScore:{
                type:Boolean,
                default:false
            },
            avatarSrc:{
                type:String,
                default:'https://zxcs.ggwan.com/forecastyiqiwenbundle/images/logo.png'
            },
            answerUid:{
                default:0
            }
        }
    ,
    data(){
        return {

        }
    },
    methods:{
        gotoAnswerIndex( id ){
            if( id == 0 ){
                return;
            }
            location.href = '/home/user/index?answer_uid=' + id;
        }
    }

}
</script>