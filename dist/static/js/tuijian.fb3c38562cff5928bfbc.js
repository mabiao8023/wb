webpackJsonp([6],{10:function(t,e){},101:function(t,e,n){t.exports=n.p+"static/img/logo.1ad449c.png"},102:function(t,e,n){t.exports=n.p+"static/img/qrode.9ec44b5.png"},103:function(t,e,n){t.exports=n.p+"static/img/tips.b0c944b.png"},107:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.content.title?n("div",{staticClass:"page-container"},[n("header",{staticClass:"header"},[t._v("\n\t\t\t\t"+t._s(t.content.title)+"\n\t    ")]),t._v(" "),t.content.theme?n("section",{staticClass:"main"},[n("div",{staticClass:"m-title"},[t._v("\n\t\t\t\t\t"+t._s(t.content.theme)+"\n\t\t\t\t")]),t._v(" "),t.content.is_paid?[n("div",{staticClass:"m-imgs"},[n("img",{attrs:{src:"http://img3.imgtn.bdimg.com/it/u=3877292258,3288902359&fm=214&gp=0.jpg",alt:""},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.previewImg()}}})]),t._v(" "),n("div",{staticClass:"m-title"},[t._v("\n\t\t\t\t\t\t详细分析\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"m-desc"},[t._v("\n\t\t\t\t\t\t"+t._s(t.content.info)+"\n\t\t\t\t\t")]),t._v(" "),t._m(0),t._v(" "),t._m(1)]:[n("div",{staticClass:"m-desc simple-desc"},[t._v("\n\t\t\t\t\t\t简要分析："+t._s(t.content.desc)+"\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"submit",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.gotoPay(e)}}},[t._v("\n\t\t\t\t\t\t"+t._s(t.content.price)+"元解锁精准分析\n\t\t\t\t\t")])]],2):n("section",{staticClass:"no-exist"},[t._v("\n\t\t\t\t推荐内容不存在\n\t\t")]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?n("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?n("LoadingModel",[n("span",[t._v(t._s(t.loading.text))])]):t._e()],1)],1):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"footer-item left"},[i("img",{attrs:{src:n(101),alt:""}})]),t._v(" "),i("div",{staticClass:"footer-item right"},[i("img",{attrs:{src:n(102),alt:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip"},[i("img",{attrs:{src:n(103),alt:""}})])}]}},11:function(t,e){},118:function(t,e){},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},16:function(t,e,n){"use strict";function i(){var t=arguments,e=document.createDocumentFragment();0==t.length?o()(r).forEach(function(t){e.appendChild(r[t]())}):[].forEach.call(t,function(t){e.appendChild(r[t]())}),document.body.appendChild(e)}e.a=i;var a=n(25),o=n.n(a),r={BaiDu:function(){var t=document.createElement("script");return t.type="text/javascript",t.textContent='var _hmt = _hmt || [];\n\t\t\t(function() {\n\t\t\t  var hm = document.createElement("script");\n\t\t\t  hm.src = "https://hm.baidu.com/hm.js?b909c3145cd6e6bd0ac8d118b0e5166b";\n\t\t\t  var s = document.getElementsByTagName("script")[0]; \n\t\t\t  s.parentNode.insertBefore(hm, s);\n\t\t\t})(); ',t}}},17:function(t,e,n){"use strict";var i={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"夜猫足球",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"夜猫足球",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};console.log("conf",e),WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var n=!1;return function(){var i=this,a=arguments;n||(n=!0,setTimeout(function(){t.apply(i,a),n=!1},e))}},debounce:function(t,e){var n;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,a)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})},formateMonth:function(t){var e=parseInt(t/12,10),n=t%12;return e>0&&0==n?e+"年":e>0?e+"年"+n+"个月":n+"个月"},formateMoney:function(t){return t?(t+"").replace(/^(\d+)\.0+$/,"$1"):""}};!function(){var t=i.getParams().channel;t&&localStorage.setItem("channel",t)}(),e.a=i},18:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return c});var i={isShow:!1,text:"",time:1500},a={isShow:!1,text:"加载中"},o=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},r=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},c=function(){this.loading.isShow=!1}},182:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),a=n.n(i),o=n(12),r=n.n(o),c=n(17),s=n(3),u=n(16),l=n(20),d=n(19),f=n(7),p=n.n(f),m=n(6),h=n.n(m),v=n(18);e.default={name:"appPage",components:{myAlertTip:p.a,LoadingModel:h.a},data:function(){return{channel:c.a.getParams().channel||localStorage.getItem("channel")||"",id:c.a.getParams().id||1,tip:v.a,loading:v.b,content:{}}},computed:{},methods:{layer:function(t,e){v.c.bind(this,t,e)()},showLoading:function(t){v.d.bind(this,t)()},hideLoading:function(){v.e.bind(this)()},wxConfig:function(){var t=this;return r()(a.a.mark(function e(){var i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(l.a)();case 2:i=e.sent,c.a.wxShare({wxConfig:i,link:location.href,title:"夜猫足球--"+t.content.title,desc:t.content.desc,imgUrl:t.content.logo});case 4:case"end":return e.stop()}},e,t)}))()},previewImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"http://img3.imgtn.bdimg.com/it/u=3877292258,3288902359&fm=214&gp=0.jpg";wx.previewImage({current:t,urls:[t]})},getRecommend:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading(),e.next=3,d.a.get(s.a.recommend,{id:t.id}).then(function(e){t.content=e});case 3:t.hideLoading();case 4:case"end":return e.stop()}},e,t)}))()},gotoPay:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading("支付中"),e.next=3,d.a.post(s.a.classPay,{class_id:t.classId,channel:t.channel}).then(function(e){if(e.jsapiConfig){var n=e.jsapiConfig;c.a.wxPay({wxPayConf:n,successCb:t.wxPaySuc.bind(t,n),failCb:t.layer.bind(t,"支付失败，请重试"),cancelCb:t.layer.bind(t,"支付失败，请重试")})}}).catch(function(e){t.layer(e)});case 3:t.hideLoading();case 4:case"end":return e.stop()}},e,t)}))()},wxPaySuc:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.layer("支付成功"),window.reload();case 2:case"end":return e.stop()}},e,t)}))()}},created:function(){this.getRecommend()},mounted:function(){this.wxConfig(),n.i(u.a)()}}},19:function(t,e,n){"use strict";var i=n(24),a=n.n(i),o=n(4),r=n.n(o),c=n(1),s=encodeURIComponent(location.origin+"/login.html"),u=function(){try{localStorage.setItem("prev-link",location.href)}catch(t){console.error(t)}location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx85ba94e795ed698e&redirect_uri="+s+"&response_type=code&scope=snsapi_userinfo#wechat_redirect"},l=function(t,e,n){var i=t.body;1==i.code?e(i.data):1e3==i.code?(n(i.msg+",即将跳转登录"),u()):n(i.msg)},d={get:function(t,e){return new r.a(function(n,i){c.a.http.get(t,{params:e}).then(function(t){return l(t,n,i)}).catch(function(t){return i("请求参数失败")})})},post:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(i,o){c.a.http.post(t,e,a()(n,{emulateJSON:!0})).then(function(t){return l(t,i,o)}).catch(function(t){return o("请求参数失败")})})}};e.a=d},191:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(5),o=n(96),r=n.n(o),c=n(2);n.n(c);i.a.use(a.a),i.a.config.debug=!1,i.a.config.devtools=!1;new i.a({template:"<Index/>",components:{Index:r.a}}).$mount("#app")},2:function(t,e){!function(t,e){function n(){var e=o.getBoundingClientRect().width;e/s>540&&(e=540*s);var n=e/10;o.style.fontSize=n+"px",l.rem=t.rem=n}var i,a=t.document,o=a.documentElement,r=a.querySelector('meta[name="viewport"]'),c=a.querySelector('meta[name="flexible"]'),s=0,u=0,l=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(u=parseFloat(d[1]),s=parseInt(1/u))}else if(c){var f=c.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(s=parseFloat(p[1]),u=parseFloat((1/s).toFixed(2))),m&&(s=parseFloat(m[1]),u=parseFloat((1/s).toFixed(2)))}}if(!s&&!u){var h=t.navigator.userAgent,v=(h.match(/android/gi),!!h.match(/iphone/gi)),g=v&&!!h.match(/OS 9_3/),_=t.devicePixelRatio;s=v&&!g?_>=3&&(!s||s>=3)?3:_>=2&&(!s||s>=2)?2:1:1,u=1/s}if(o.setAttribute("data-dpr",s),!r)if(r=a.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(r);else{var x=a.createElement("div");x.appendChild(r),a.write(x.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*s+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*s+"px"},!1),n(),l.dpr=t.dpr=s,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},20:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(13),a=n.n(i),o=n(12),r=n.n(o),c=n(4),s=n.n(c),u=n(1),l=this,d=function(){var t=location.href;return new s.a(function(e,n){u.a.http.post("/common/jssdk",{url:t},{emulateJSON:!0}).then(function(t){var i=t.body;"1"==i.code?e(i.data):n("获取参数失败。code:"+i.code)},function(t){n("请求js参数失败")})})},f=function(){var t=r()(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,t.next=4,d();case 4:return n=t.sent,n.debug=e,n.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","previewImage"],t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(1),console.warn(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,l,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},26:function(t,e){},3:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i="http://www.ym8800.com",a={bannerList:i+"/index/banner",classList:i+"/index/class",classInfo:i+"/class/info",classTry:i+"/class/try",classChapter:i+"/class/chapter",classPay:i+"/class/buyClass",userClass:i+"/my_class_list/list",userChapter:i+"/my_class/info",userArticle:i+"/article/info",getPerson:i+"/me/info",classPercent:i+"/my_class/learn_percent",getTest:i+"/test/get",getTestAsk:i+"/test/get_ask",getRandAnswer:i+"/test/get_answer",login:i+"/common/login",recommend:i+"/recommend/index"}},6:function(t,e,n){function i(t){n(10)}var a=n(0)(n(14),n(8),i,null,null);t.exports=a.exports},7:function(t,e,n){function i(t){n(11)}var a=n(0)(n(15),n(9),i,"data-v-b43c2270",null);t.exports=a.exports},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),n("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"load-effect"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},96:function(t,e,n){function i(t){n(118)}var a=n(0)(n(182),n(107),i,null,null);t.exports=a.exports}},[191]);