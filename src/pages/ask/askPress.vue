<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";

    .page-container{
        padding-bottom:100px;
        /*追问弹窗*/
        .askAgain-box{
            position:absolute;
            top:0;bottom:0;left:0;right:0;
            z-index:100;
            background-color:rgba(0,0,0,.7);
        }
        .askAgain-box .ag-container{
            width:8.42rem;
            position:absolute;
            top:50%;left:50%;
            background-color:#fff;
            border-radius:10px;
            text-align:center;
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
        }
        .askAgain-box .ag-title{
            padding:.625rem 0 .47rem;
            font-size:.53rem;
            font-weight:bold;
            color:#333;

        }
        .ag-input .ag-input-box{
            width:7.5rem;
            height:3.125rem;
            padding:.3125rem;
            -webkit-border-radius:.18rem;
            -moz-border-radius:.18rem;
            border-radius:.18rem;
            font-size:0.41rem;
            color:#333;
            resize:none;
            box-sizing: border-box;
            outline:none;
            border:1px solid #e6e6e6;
            vertical-align:middle;
        }
        .ag-btn-grounp{
            font-size:0;
            padding:0 .47rem .47rem;
        }
        .ag-btn-grounp li{
            display:inline-block;
            /*height:1rem;*/
            line-height:1rem;
            width:100%;
            font-size:.44rem;
            color:#999;
            border:1px solid #999;
            -webkit-border-radius:.15rem;
            -moz-border-radius:.15rem;
            border-radius:.15rem;
        }

        .ag-btn-grounp li.btn-sub{
            color:#fff;
            background:#F85F48;
            border:1px solid #F85F48;
            border:none;
        }

        //上传图片
        .photo-show{
            text-align:left;
            padding:.25rem .47rem;
            li{
                display:inline-block;
                width:2.1rem;
                height:2.1rem;
                line-height:2.1rem;
                //overflow: hidden;
            }
            li{
                position:relative;
                border-radius:10px;
                margin-right:.3125rem;
                background:url("@{IMAGE-PATH}add-photo.png?@{DATE}") no-repeat center center;
                background-size:1.28rem 1.28rem;
                &.background{
                    background:transparent;
                }
                &.border{
                    border:1px solid #e6e6e6;
                }
                .delete-photo{
                    width:.65rem;
                    height:.65rem;
                    position:absolute;
                    top: -0.3rem;
                    right: -0.20rem;
                    background:url("@{IMAGE-PATH}delete-photo.png?@{DATE}") no-repeat center center;
                    background-size:100% 100%;
                }
                .photo-container{
                    width:2.1rem;
                    height:2.1rem;
                    overflow: hidden;
                    position:relative;
                    background:#fff;
                    border-radius:10px;
                }
                img{
                    position:absolute;
                    width:100%;
                    top:50%;
                    transform:translate(0,-50%);
                }
                //  进度条展示
                .upload-progress{
                    position:absolute;
                    height:4px;
                    top:50%;
                    left:0;
                    right:0;
                    background:#999;
                    span{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                    }
                    .active-line{
                        width:0;
                        -webkit-transition: width .5s;
                        transition: width .5s;
                        background:#0f0;
                    }
                }
            }
            // 上传成功
            .upload-complete{
                position:absolute;
                top:0;bottom:0;left:0;right:0;
                background:rgba(0,0,0,.5);
                .complete-icon{
                    position:absolute;
                    width:.72rem;
                    height:.72rem;
                    top:50%;
                    left:50%;
                    margin-top:-.36rem;
                    margin-left:-.36rem;
                    background:url("@{IMAGE-PATH}upload_complete.png?@{DATE}") no-repeat center center/.72rem .72rem;
                }
            }
        }
        // 上传按钮的样式
        .upload-photo-btn{
            width:3.125rem;
            line-height:1rem;
            margin:.31rem auto;
            font-size:.4375rem;
            color:@mainColor;
            border:1px solid @mainColor;
            border-radius:10px;
            text-align:center;
            &.disable{
                color:#999;
                border:1px solid #999;
            }
        }
        // 图片放大弹窗
        .photo-pop{
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            overflow: scroll;
            background:#000;
            z-index:1000;
            .photo-pop-box{
                background:#fff;
                position:absolute;
                top:50%;
                left:50%;
                width:100%;
                -webkit-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
                img{
                    width:100%;
                }
            }
        }
        // 上传图片提示
        .upload-photo-tip{
            color:#999;
            font-size:.375rem;
            padding:0 .47rem .15rem;
            text-align:left;
        }
        // 关闭追问弹窗按钮
        .close-box{
            position:absolute;
            top:.31rem;
            right:.31rem;
            width:.6rem;
            height:.6rem;
            background:url("@{IMAGE-PATH}example-close.png?@{DATE}") no-repeat center center/.6rem .6rem;
        }
    }
</style>
<template>
    <div class="page-container" >
        <div class="askAgain-box">
            <div class="ag-container">
                <div class="close-box" @click="closeBox"></div>
                <h1 class="ag-title">追问</h1>
                <div class="ag-input">
                    <textarea class="ag-input-box" v-model.trim="pressContent" placeholder="请输入追问内容：" name=""></textarea>
                </div>
                <div class="upload-photo" style="opacity:0;height:0;display:none;">
                    <input type="file" accept="image/*" ref="photos" @change="choosePhoto">
                </div>
                <ul class="photo-show" >
                    <li v-for="(item,index) in preShowImages" :class="[{border:item.src == null},{background:item.src != null}]"  @click="choicePhoto($event,index)">
                        <template name="test" v-if="item.src != null">
                            <div class="photo-container">
                                <img :src="item.src" ref="photos-container" alt="">
                                <div class="upload-progress" v-if="(!item.isUploadSuc)&&item.isBeginUpload">
                                    <span class="line"></span>
                                    <span class="active-line" :ref="'active-line' + index"></span>
                                </div>
                                <transition name="fade">
                                    <div class="upload-complete" v-if="item.isUploadSuc">
                                        <i class="complete-icon"></i>
                                    </div>
                                </transition>
                            </div>
                            <div class="delete-photo" v-if="item.isShowDelete" @click.stop="deletePhoto($event,index)"></div>
                        </template>
                    </li>
                </ul>
                <p v-if="preShowImages.length > 0" class="upload-photo-tip">如果看手面相或者风水，请上传小于5M的图片</p>
                <!--<div v-if="preShowImages.length > 0" class="upload-photo-btn" :class="{disable:isDisableUploadPhoto}" @click="uploadPhoto">-->
                <!--上传照片-->
                <!--</div>-->
                <ul class="ag-btn-grounp">
                    <li class="btn-sub" @click="subPress">提交</li>
                </ul>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div class="photo-pop" @click.stop="photoPop.isShow = !photoPop.isShow" v-show="photoPop.isShow" @touchmove.stop="">
                <div class="photo-pop-box">
                    <img :src="photoPop.imgSrc">
                </div>
            </div>
        </transition>
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
    import { commonFn } from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    import { ajaxHandle } from '../../common/js/myAjaxHandle';
    import myAlertTip from '../../common/components/modelBox.vue';
    import ComFooter from '../../common/components/footer.vue';
    import Avatar from '../../common/components/avatarCompontent.vue'
    import AudioControl from '../../common/components/audioControlCompontent.vue'
    import ImageShow from '../../common/components/imageShow.vue';
    import Evaluate from '../../common/components/evaluateCompontent.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
	import myAjax from '../../common/js/request';
	export default {
        name: 'appPage',
        components: {
            myAlertTip,
            ComFooter,
            Avatar,
            AudioControl,
            ImageShow,
            Evaluate,
            LoadingModel
        },
        data() {
            return {
                // 追问内容
                pressContent:"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
                // 表单上传图片数据
                // photos:[{"file":null},{"file":null},{"file":null}],
                // 表单图片数据预览
                preShowImages:[
                    {
                        "src":null,
                        isBeginUpload:false,
                        isUploadSuc:false,
                        isShowDelete:true,
                        progress:0
                    },
                    {
                        "src":null,
                        isBeginUpload:false,
                        isUploadSuc:false,
                        isShowDelete:true,
                        progress:0
                    },
                    {
                        "src":null,
                        isBeginUpload:false,
                        isUploadSuc:false,
                        isShowDelete:true,
                        progress:0
                    }
                ],
                // 当前点击的上传图片对应的下标
                uploadPhotoIndex:0,
                // 上传图片的放大
                photoPop:{
                    isShow:false,
                    imgSrc:null,
                },
                // 禁用页面上传图片
                isDisableUploadBtn:false,
                // 禁用提交按钮
                isDisableSubBtn:false,
                // 提问接口拼接上传图片
                image_ids:[],
                res_ids:[]
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
            // 单个图片选项被点击
            choicePhoto:function(event,index){
                // 判断具体的选项中有无图片进行处理
                this.uploadPhotoIndex = index;
                if( this.preShowImages[index].src == null ){
                    this.$refs["photos"].click();
                }else{
                    this.photoPop.isShow = true;
                    this.photoPop.imgSrc = this.preShowImages[index].src;
                    // 放大图片查看
                }
            },
            // 删除对应的图片
            deletePhoto:function(event,index){
                this.preShowImages[index].src = null;
                // 上传图片组中也删除对应的图片
                this.preShowImages[index].isUploadSuc = false;
                this.preShowImages[index].isBeginUpload = false;
                this.preShowImages[index].isShowDelete = true;
                this.image_ids[index] = "";
                // 异步请求删除接口
                this.deletePhotoAjax(this.res_ids[index]);
            },
            // 删除图片接口
            async deletePhotoAjax(res_id){
                let data = {
                        res_id:res_id
                    }
                await myAjax.get(apiPath.delFile,data)
                        .then(res=>{
                            console.log("删除成功");
                        })
                        .catch( e => { this.layer(e) } );
            },
            // 上传图片到本地
            choosePhoto:function(event){
                var that = this;
                var target = event.currentTarget;
                var file = target.files[0];
                // 对应选择的图片的下标
                var idx = this.uploadPhotoIndex;
                // 判断图片的类型大小
                var imgType = /\.jpg|\.png|\.jpeg/i;
                if( !imgType.test(file.name) ){
                    this.layer("只支持图片上传，请选择正确的图片格式");
                    return;
                }else if((file.size/1024000)>5){
                    this.layer("图片大小不能超过5M，请压缩后上传");
                    return;
                }
                // 利用fileReader 预览图片
                if( typeof FileReader == "underfined" ){
                    this.layer("您的浏览器不支持图片预览功能，请换浏览器重试");
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(){
                        that.preShowImages[idx].src = reader.result;
                        // 上传图片进度条展示
                        that.preShowImages[idx].isBeginUpload = true;
                        that.ajaxUploadApi(target.files[0],idx);
                        // input清空，防止两次请求同一个时不能选中
                        target.value = '';
                    }
                }
            },

            // 上传图片的ajax请求
            async ajaxUploadApi(fileData,index){
                let form = new FormData();
                form.append("Filedata",fileData);
                await myAjax.post( apiPath.upload ,form,{
					'headers':{
						'mimeType':'multipart/form-data'
					},
					progress:function(event){
						let precent = event.loaded/event.total * 100 + "%";
						that.$refs["active-line" + index][0].style.width = precent;
					}
				} ).then( res => {
					this.preShowImages[index].isUploadSuc = true;
					this.image_ids[index] = res.image_id;
					this.res_ids[index] = res.res_id;
				} ).catch( e => {
					this.preShowImages[index].isUploadSuc = false;
					this.preShowImages[index].isBeginUpload = false;
					this.preShowImages[index].isShowDelete = true;
				    this.layer( e )
				} );
//
            },
            // 链接获取参数
            getParams:function(){
                var search = location.href.split("?")[1];
                var isFlag = search && search.indexOf('&',0);
                if(isFlag === -1){
                    var res = {};
                    var parts = search.split("=");
                    res[parts[0]] = parts[1];
                    return res;
                }
                var params = search.split("&");
                return params.reduce(function(res,items){
                    var parts = items.split("=");
                    res[parts[0]] = parts[1] + "";
                    return res;
                },{});
            },
            // 提交追问内容
            async subPress(){
                // 获得链接的参数
                var answer_uid = this.getParams()["answer_uid"];
                var pressId = this.getParams()["pressId"];
                var photoNum = this.getParams()["photoNum"];
                var that = this;
				let data = {
					'answer_uid':answer_uid,
					'image_ids':this.image_ids.join(","),
					'pressid':pressId,
					'question':this.pressContent,
				}
                if(!this.isDisableSubBtn){
                    if(this.pressContent.length == 0){
                        this.layer("请输入追问内容");
                        return;
                    }
					this.showLoading("提交中...");
					this.isDisableSubBtn = true;
                    await myAjax.post( apiPath.askPress,data )
						.then( res => {
							this.isDisableSubBtn = false;
							this.layer("追问成功");
							location.href = "/home/ask/askAgain?ask_id=" + pressId;
						} ).catch( e => this.layer( e ) );
					this.hideLoading();
                }else{
                    return;
                }
            },
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.protocol + '//' + location.hostname  + '/home/index/index',
                });
            },
            // 关闭弹窗
            closeBox:function(){
                history.go(-1);
            }
    },
    mounted() {
        var photoNum = +(this.getParams()["photoNum"] || 0);
        // this.photos.length = photoNum;
        this.preShowImages = this.preShowImages.slice( 0,photoNum );
        // 动态添加统计代码
        addStatisticsCode();
        this.share();
    }
    }
</script>
