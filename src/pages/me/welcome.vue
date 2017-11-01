<style lang="less" rel="stylesheet/less">
    @import "../../common/style/config.less";
    @import "../../common/style/reset.less";
    .page-container {
        padding:30px;
		background:#fff;
		.content {
			width: 100%;
			vertical-align: middle;
			line-height: .5rem;
		}
		p {
			line-height: .6rem;
			margin: .3rem 0;
			color: #999;
			font-size: .44rem;
			text-align: justify;
			strong{
				color:#333;
				font-size:30px;
			}
		}

    }
</style>
<template>
    <div class="page-container">
		<div class="content">
			<p><strong>如果您拥有：</strong></p>
			<p>渊博的易学、心理、星座等知识，请填写下面的入驻申请表，工作人员会和您尽快取得联系；
      			<br/>
				<br/>
				<a href="https://jinshuju.net/f/MNLPhx" style="text-align:center;text-decoration: underline;color:#f85f48">点击填写申请表</a>
				<br/>
				灵机期待您的加入！</p>
		</div>
        <ComFooter current="3"></ComFooter>
    </div>
</template>
<script>
    import {commonFn} from '../../common/js/common.js';
    import {apiPath} from '../../common/js/config.js';
    import { getWXParams } from '../../common/js/utils.js';
    import ComFooter from '../../common/components/footer.vue';
    import { addStatisticsCode } from '../../common/js/addStatisticsCode';
    export default {
        name: 'appPage',
        components: {
            ComFooter
        },
        data() {
            return {
            }
        },
        methods: {
            // 微信分享
            async share() {
                // 分享接口获得分享的内容
                let wxParams = await getWXParams();
                commonFn.wxShare({
                    wxConfig:wxParams,
                    link:`${location.origin}/home/index/index?${channelStr}`,
                });
            },
        },
        mounted(){
            this.share();
            addStatisticsCode();
        }
    }
</script>
