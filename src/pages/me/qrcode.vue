<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container {
        background:#fff;
        padding:30px;
        padding-bottom:2rem;
        text-align:center;
        .header{
            display:inline-block;
        }
        .nickname{
            font-size: .468rem;
            color: #333;
            padding: 20px;
        }
        .job_title{
            line-height: .5rem;
            font-size: .4rem;
            color:#999;
        }
        .introduce{
            text-align: justify;
            font-size: .46rem;
            line-height: 1.5;
            margin-top: .1rem;
            color: #151515;
            margin-bottom: .1rem;
        }
        .qrcode{
            img{
                width:400px;
            }
            p{
                font-size:26px;
                color:@mainColor;
                line-height:1.5;
            }
        }
    }
</style>
<template>
    <div class="page-container">
        <div class="header">
            <Avatar :avatarSrc="user.avatar"
                    :isHasScore="false"
                    :avatarWidth="style"
            ></Avatar>
        </div>
        <div class="nickname">
            {{ user.nickname }}
        </div>
        <div class="job_title">
            {{ user.job_title  }}
        </div>
        <div class="introduce">
            {{ user.introduce }}
        </div>
        <div class="qrcode">
            <img v-if="qrcode" :src="qrcode">
            <p>微信扫码，来「 易起问 」向我提问</p>
        </div>
        <ComFooter current="3"></ComFooter>
    </div>
</template>
<script>
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import ComFooter from '../../common/components/footer.vue';
    import myAjax from '../../common/js/request';
    export default {
        name: 'appPage',
        components: {
            ComFooter,
            Avatar,
        },
        data() {
            return {
                style:{
                    width:'120px',
                    height:'120px',
                },
                user:{},
                qrcode:'',
            }
        },
        methods: {
            async getPersonData(){
                await  myAjax.get( apiPath.getPersonal )
                    .then( res => this.user = res )
                    .catch( e => {} )
            },
            async getQrcode(){
                await myAjax.get( apiPath.getQrcode )
                    .then( res => this.qrcode = res.slice(1) )
                    .catch( e => {} )
            },
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href
                });
            },
        },
        async created(){
            this.getPersonData();
            await this.getQrcode();
            this.share();
        }
    }
</script>
