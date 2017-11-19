/**
 * Created by mabiao on 2017/11/14.
 */


let commonFn = {
        /**
         * 获得当前页面链接中的查询参数
         * @param {null} 无需输入参数
         * @return {object} 查询参数组成的key-vaule组合对象
         * */
        getParams:function(){
            var search = location.href.split("?")[1];
            if(!search){
                return {};
            }
            var params = search.split("&");
            return params.reduce(function(res,items){
                var parts = items.split("=");
                res[parts[0]] = parts[1] + "";
                return res;
            },{});
        },
        /**
         * 设置分享卡片样式
         * @param { Object | wxShareConfigObj } 微信配置信息为页面的分享配置信息
         * @params
         * {
         *  wxConfig  微信配置信息
         *  title     分享的标题
         *  desc      分享的描述
         *  link      分享的链接
         *  imgUrl   分享的图片链接
         *  type     分享的类型
         *  dataUrl  分享类型的url
         *  success  分享成功回调
         *  cancel   分享取消回调
         * }
         * @return undefined
         * */
        wxShare:function( wxShareConfigObj ){
            wx.config(wxShareConfigObj.wxConfig);
            wx.ready(function () {
                // 分享给朋友圈
                wx.onMenuShareTimeline({
                    title: wxShareConfigObj.title || "课程咨询平台" , // 分享标题
                    link: wxShareConfigObj.link || location.href, // 分享链接
                    imgUrl: wxShareConfigObj.imgUrl || "", // 分享图标
                    success: wxShareConfigObj.success || function () {},
                    cancel: wxShareConfigObj.cancel || function () {}
                });
                // 分享到朋友
                wx.onMenuShareAppMessage({
                    title: wxShareConfigObj.title || "课程咨询平台",
                    desc: wxShareConfigObj.desc || "已为100万+用户提供服务，快来听课吧！", // 分享描述
                    link: wxShareConfigObj.link || location.href, // 分享链接
                    imgUrl: wxShareConfigObj.imgUrl || "", // 分享图标
                    type: wxShareConfigObj.type || '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: wxShareConfigObj.dataUrl ||'', // 如果type是music或video，则要提供数据链接，默认为空
                    success: wxShareConfigObj.success || function () {},
                    cancel: wxShareConfigObj.cancel || function () {}
                });
            });
        },
        /**
         *  调起微信支付
         *  @params {object | payobj}  支付时所需要的参数传递
         *  {
         *      wxPayConf 微信配置参数
         *      successCb 微信支付成功后的回调
         *      failCb 微信支付失败后的回调
         *  }
         *  @return undefinded
         *      commonFn.wxPay({
         *                   wxPayConf:that.wxConfig.jsApiParameters,
         *                  successCb:that.wxPaySuc.bind(that,that.wxConfig.out_trade_no),
         *                 failCb:that.wxPayFail.bind(that),
         *                cancelCb:that.layer.bind(that,'支付失败，请重试')
         *     });
         *
         * */
        wxPay:function(payObj){
            // 调起微信支付函数
            var jsApiCall = function(){
                var conf = JSON.parse(payObj.wxPayConf) || {};
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest',
                    conf,
                    function ( res ) {
                        //支付成功
                        if (res.err_msg == 'get_brand_wcpay_request:ok') {
                           typeof payObj.successCb === 'function' && payObj.successCb();
                        } else if(res.err_msg == 'get_brand_wcpay_request:fail'){
                            typeof payObj.failCb === 'function' && payObj.failCb();
                        }else{
                           typeof payObj.cancelCb === 'function' && payObj.cancelCb();
                        }
                    }
                );
            }
            // 判断微信调起支付
            if ( typeof WeixinJSBridge == "undefined" ) {
                if (document.addEventListener) {
                    //添加监听事件，兼容写法，ms需要用attacheEvent
                    document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
                } else if (document.attachEvent) {
                    document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
                }
            } else {
                jsApiCall();
            }
        },
        // 节流阀函数
        throttle:function(fn,delay) {
            var wait = false;
            return function(){
                var that = this,args=arguments;
                if(!wait){
                    wait = true;
                    setTimeout(function () {
                        fn.apply(that,args);
                        wait = false;
                    },delay);
                }
            }
        },
        /**
         * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
         * @param idle   {number}    空闲时间，单位毫秒
         * @param action {function}  请求关联函数，实际应用需要调用的函数
         * @return {function}    返回客户调用函数
         */
        debounce:function(fn,idle){
            var last;
            return function(){
                var that = this,args = arguments;
                clearTimeout(last);
                last = setTimeout(function(){
                    fn.apply(that,args);
                },idle);
            }
        },
		isIphone:function(){
			let ua = navigator.userAgent,
				Agents = ["iPhone", "iPad", "iPod"];
			return Agents.some(function(v){
				return new RegExp(v,'i').test(ua);
			})
		}
    };

;(() => {
    // 保存channel参数到本地
    let channel = commonFn.getParams()['channel'];
    channel && localStorage.setItem('channel',channel);
})();

export default commonFn
