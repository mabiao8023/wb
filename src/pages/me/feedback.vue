<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container {
        padding:30px;
        padding-bottom:2rem;
        background:#fff;
        .title{
            font-size:34px;
            text-align:center;
            color:#151515;
            margin-bottom:30px;
        }
         .feedback-input{
             width:100%;
             resize: none;
             background:#eee;
             border: none;
             padding: 20px;
             height: 200px;
             font-size:28px;
             outline:none;
             border-radius: 10px;
         }
        .email-input{
            width: 100%;
            height: 60px;
            margin: 20px auto;
            padding: 20px;
            font-size:28px;
            background: #eee;
            border: none;
            border-radius: 10px;
        }
        .sub-btn{
            text-align:center;
            width:200px;
            border-radius:10px;
            color:#fff;
            margin:0 auto;
            background:@mainColor;
            height:60px;
            line-height:60px;
            font-size:30px;
        }
    }
</style>
<template>
    <div class="page-container">
        <div class="title">
            反馈意见
        </div>
        <div class="text-area">
            <textarea v-model="content" class="feedback-input" placeholder="在这里输入您的反馈"></textarea>
        </div>
        <div>
            <input v-model="email" class="email-input" type="email" placeholder="请输入邮箱">
        </div>
        <div class="sub-btn" @click.stop.prevent="submit">
            提交
        </div>
        <ComFooter current="3"></ComFooter>
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
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import Validator from '../../common/js/validator';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'

    export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            LoadingModel
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                // shareConfig: wxShareConfig,
                wxConfig: {},
                // 反馈内容与邮箱
                content:'',
                email:''
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
            // 验证表单信息
            validatorFunc(){
                let validator = new Validator();
                // 添加验证规则
                validator.add(this.content,[{
                    strategy:'isNonEmpty',
                    errorMsg:'反馈内容不能为空'
                },{
                    strategy:'isChinese',
                    errorMsg:'请输入中文'
                },{
                    strategy:'isEmoji',
                    errorMsg:'请不要输入表情等特殊符号'
                }]);

                validator.add(this.email,[{
                    strategy:'isEmail',
                    errorMsg:'请输入正确的邮箱'
                }]);
                return validator.start();
            },


            async submit(){
                let errMsg = this.validatorFunc();

                if( errMsg ){
                    this.layer(errMsg);
                    return;
                }
                // 提交信息
                this.showLoading('提交中');
                let data = {
                    feedback_info:this.content,
                    user_email:this.email,
                    user_id:commonFn.getParams()['uid']
                }
                await myAjax.post( apiPath.feedback,data )
                    .then( res => {
						this.layer('反馈成功');
						window.location.href='/home/me/index';
					} ).catch( e => { this.layer(e); } );
            },
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:`${location.origin}/home/index/index`
                });
            },
        },
        mounted() {
            this.share();
            // 动态添加统计代码
            addStatisticsCode();
        }
    }
</script>
