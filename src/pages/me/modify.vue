<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container {
        padding:30px 0;
        padding-bottom:2rem;
        text-align:center;
        background:#fff;
        .header{
            display:inline-block;

        }
        .nickname{
            color:#333;
            font-size:30px;
            padding:20px 0;
            background:#fff;
        }
        .introduce,.job_title{
            text-align:left;
            background:#ebebeb;
            padding:10px 30px;
        }
        h1{
             color:#151515;
             font-size:28px;
             padding-left:20px;
             border-left:8px solid @mainColor;
            margin:10px 0;
         }
        .text-area{
            width:100%;
            resize: none;
            background:#fff;
            color:#151515;
            border: none;
            padding: 20px;
            height: 200px;
            font-size:28px;
            outline:none;
        }
        .ask-money{
            text-align:left;
            font-size:26px;
            color:#666;

            .input{
                width:130px;
                background:#eee;
                outline:none;
                border:none;
                font-size:28px;
                vertical-align:middle;
                padding:10px;
                margin:0 10px;
            }
            .ask-money-item{
                background:#fff;
                font-size:28px;
                padding:30px 10px;
                margin:10px 0;
                color:#151515;
            }
            .tip{
                text-align:center;
                line-height:1.5;
                color:#999;
            }
        }
        .submit{
            background:@mainColor;
            color:#fff;
            font-size:30px;
            width:200px;
            line-height:60px;
            border-radius:10px;
            margin:0 auto;
            margin-top:30px;
         }
        .modify-tip{
            text-align:center;
            line-height:1.8;
            font-size:26px;
        }
    }
</style>
<template>
    <div class="page-container">
        <div class="header">
            <Avatar :avatarSrc="myInfo.avatar"
                    :isHasScore="false"
                    :avatarWidth="style"
            ></Avatar>
        </div>
        <div class="nickname">
            {{ myInfo.nickname }}
        </div>
        <div class="job_title">
            <h1>您的头衔（18个字以内）</h1>
            <textarea disabled v-model="myInfo.job_title" placeholder="运营经理；电台DJ；Google早期员工；周游过列国的斜杠青年；心理咨询师......" class="text-area">
            </textarea>
        </div>
        <div class="introduce">
            <h1>介绍下自己吧（100个字以内）</h1>
            <textarea disabled class="text-area" v-model="myInfo.introduce" placeholder="关于这些，心情问我：提交理财、迎娶白富美；如何优雅参加前途婚礼；和异性出差时如何管理自我冲动......或者给你唱个晚安小曲吧。" >
            </textarea>
            <div class="ask-money">
                <div class="ask-money-item">
                    <span>普通问题向我提问需要支付</span><input disabled class="input" v-model="myInfo.ask_money" type="text"> 元
                    <div class="tip">
                        建议50~160元之间
                    </div>
                </div>
                <div class="ask-money-item" v-for="(item,index) in myInfo.user_service">
                    <span>{{ item.name }}服务需要支付</span><input disabled class="input" v-model="item.price" type="text"> 元
                    <div class="tip">
                        建议150~300元之间
                    </div>
                </div>
            </div>
        </div>
        <div class="submit" @click.stop.prevent="submit">
            保存
        </div>
        <p class="modify-tip">如果需要修改超过300元</p>
        <p class="modify-tip">请联系子仲帮忙修改，微信号:yiqiwenzm</p>
        <!--提示组件-->
        <transition name="fade" mode="in-out">
            <myAlertTip
                    v-if="tip.isShow"
                    @close-tip="tip.isShow = !tip.isShow"
                    :text="tip.text"
                    :time="tip.time">
            </myAlertTip>
        </transition>
        <transition name="fade" mode="in-out">
            <LoadingModel v-if="loading.isShow">
                <span>{{ loading.text }}</span>
            </LoadingModel>
        </transition>
        <ComFooter current="3"></ComFooter>
    </div>
</template>
<script>
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import ComFooter from '../../common/components/footer.vue';
    import Validator from '../../common/js/validator';
    import myAlertTip from '../../common/components/modelBox.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    import myAjax from '../../common/js/request'

    export default {
        name: 'appPage',
        components: {
            ComFooter,
            Avatar,
            myAlertTip,
            LoadingModel
        },
        data() {
            return {
                style:{
                    width:'100px',
                    height:'100px'
                },
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                myInfo:{
                    id:'',
                    avatar:'',
                    nickname:'',
                    job_title:'',
                    introduce:'',
                    ask_money:'',
                    user_service:[]
                }
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
            validatorFunc(){
                let validator = new Validator();
                // 添加验证规则
                validator.add(this.myInfo.job_title,[{
                    strategy:'isNonEmpty',
                    errorMsg:'头衔内容不能为空'
                },{
                    strategy:'isChinese',
                    errorMsg:'请输入中文'
                },{
                    strategy:'isEmoji',
                    errorMsg:'请不要输入表情等特殊符号'
                }, {
                    strategy:'maxLength:18',
                    errorMsg:'做多只能输入18个字'
                }
                ]);
                validator.add(this.myInfo.introduce,[{
                    strategy:'isNonEmpty',
                    errorMsg:'介绍内容不能为空'
                },{
                    strategy:'isChinese',
                    errorMsg:'请输入中文'
                },{
                    strategy:'isEmoji',
                    errorMsg:'请不要输入表情等特殊符号'
                }, {
                    strategy:'maxLength:18',
                    errorMsg:'做多只能输入18个字'
                }]);
                validator.add(this.myInfo.ask_money,[{
                    strategy:'minValue:50',
                    errorMsg:'普通问题价格不能低于50'
                },{
                    strategy:'maxValue:160',
                    errorMsg:'普通问题价格不能高于160'
                }]);
                // 图文咨询价格设置
                if( this.myInfo.user_service.length > 0 ){
                    this.myInfo.user_service.forEach( val => {
                        validator.add(val.price,[{
                            strategy:'minValue:150',
                            errorMsg:`${val.name}价格不能低于150`
                        },{
                            strategy:'maxValue:300',
                            errorMsg:`${val.name}价格不能高于300`
                        }]);
                    })
                }
                return validator.start();
            },
            // 提交反馈信息
            async submit(){
                let errMsg = this.validatorFunc();
                let data = {
                    job_title:this.myInfo.job_title,
                    introduce:this.myInfo.introduce,
                    ask_money:this.myInfo.ask_money,
                    service:this.myInfo.user_service,
                }
                if( errMsg ){
                    this.layer(errMsg);
                    return;
                }
                // 提交信息
                this.showLoading('修改中');
                await myAjax.post(apiPath.editMyself,data)
                    .then( data => {
                        this.layer('修改成功');
                        location.href = '/home/me/index';
                    })
                    .catch( e => this.layer(e));
                this.hideLoading();
            },
            // 获得个人信息
            async getMyInfo(){
                await myAjax.get(apiPath.getMyInfo)
                    .then( res => this.myInfo = res )
                    .catch( e => this.layer(e) )

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
        created(){
            this.getMyInfo();
            this.share();
        }
    }
</script>
