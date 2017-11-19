<style lang="less" rel="stylesheet/less">
    @import "../../common/style/reset.less";
    @import "../../common/style/public.less";

    .page-container{
        min-height:100%;
        padding-bottom:.5rem;
        max-width:10rem;
        margin:0 auto;
        background:#fff;
        font-size:26px;
		.class-intro{
			padding:20px;
			color:#333;
			font-size:30px;
		}
		.c-xq{
			padding:20px;
			.c-h1{
				color:#333;
				font-size:32px;
				padding:20px;
				text-align: center;
			}
			.c-desc{
				font-size:28px;
				color:#666;
				text-indent: 2em;
				text-align: justify;
				line-height:1.5;
			}
		}
    }
</style>
<template>
    <div class="page-container" >
        <!-- 视频和图片展示区域 -->
        <section class="banner">
            <img :src="article.img_url">
        </section>
        <section class="class-intro boxShadow">
            <div class="class-name">
                {{article.title}}
            </div>
        </section>
        <section class="c-xq">
			<!-- <h1 class="c-h1">
				6个维度256个知识点
            </h1>
			<p class="c-desc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et natus nemo, cumque eligendi libero hic expedita repellat, laborum vero quae mollitia, necessitatibus odio quis reprehenderit fugiat itaque dolorem. Voluptatem, nam?
            </p> -->
			<p class="c-desc">
				{{article.content}}
            </p>
			
        </section>
		<!-- <transition name="fade" mode="in-out">
			<QrodePop v-if="isShowQrodePop"
					  @closeQrodePop="isShowQrodePop = !isShowQrodePop"></QrodePop>
		</transition> -->
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
    import  commonFn  from '../../common/js/common.js';
    import { apiPath } from '../../common/js/config.js';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    import { getWXParams } from '../../common/js/utils.js';
    // import InfiniteLoading from 'vue-infinite-loading';
    // import ImageShow from '../../common/components/imageShow.vue';
    import myAjax from '../../common/js/request';
    import myAlertTip from '../../common/components/modelBox.vue';
    import LoadingModel from '../../common/components/loadingModel.vue';
    import { layerConfig,loadingConfig,layer,showLoading,hideLoading } from '../../common/js/layerAndLoadingHandle';
    // import postImg from '../../image/scbfm.jpg';
	// import ClassItem from '../../common/components/videoItem';
    // import QrodePop from '../../common/components/qrodePop.vue';
	export default {
        name: 'appPage',
        
        components: {
            // ImageShow,
            myAlertTip,
            LoadingModel,
			// ClassItem,
			// QrodePop
        },
        data() {
            return {
                // 渠道
                channel: commonFn.getParams()["channel"]||"",
                articleId: commonFn.getParams()["id"]||"",
                // 提示处理
                tip: layerConfig,
                loading: loadingConfig,
				// isShowQrodePop:false, //是否显示二维码弹窗
                article:{
                    id:1,
                    title:'你说的内饰额f',
                    img_url:'https://mabiao8023.github.io/wb/src/image/scbfm.jpg',
                    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et natus nemo, cumque eligendi libero hic expedita repellat, laborum vero quae mollitia, necessitatibus odio quis reprehenderit fugiat itaque dolorem. Voluptatem, nam?'
                }
            }
        },
        computed:{
		},
        methods: {
			showQrodePop(){
				this.isShowQrodePop = true;
			},
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
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:location.href
                });
            },
            async getArticle(){
                this.showLoading('获取文章中')
                await myAjax.get(apiPath.getArticle,{id:this.articleId})
                    .then( res => {
                        this.article = res;
                    } )
                this.hideLoading();
            }
    },
    created(){
        // this.getArticle();
       // this.share();
    },
    mounted() {

    }
    }
</script>
