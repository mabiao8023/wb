webpackJsonp([8],{10:function(t,e){},104:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?n("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?n("LoadingModel",[n("span",[t._v(t._s(t.loading.text))])]):t._e()],1)],1)},staticRenderFns:[]}},11:function(t,e){},114:function(t,e){},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},16:function(t,e,n){"use strict";function i(){var t=arguments,e=document.createDocumentFragment();0==t.length?o()(r).forEach(function(t){e.appendChild(r[t]())}):[].forEach.call(t,function(t){e.appendChild(r[t]())}),document.body.appendChild(e)}e.a=i;var a=n(25),o=n.n(a),r={BaiDu:function(){var t=document.createElement("script");return t.type="text/javascript",t.textContent='var _hmt = _hmt || [];\n\t\t\t(function() {\n\t\t\t  var hm = document.createElement("script");\n\t\t\t  hm.src = "https://hm.baidu.com/hm.js?b909c3145cd6e6bd0ac8d118b0e5166b";\n\t\t\t  var s = document.getElementsByTagName("script")[0]; \n\t\t\t  s.parentNode.insertBefore(hm, s);\n\t\t\t})(); ',t}}},17:function(t,e,n){"use strict";var i={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"夜猫足球",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"夜猫足球",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};console.log("conf",e),WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var n=!1;return function(){var i=this,a=arguments;n||(n=!0,setTimeout(function(){t.apply(i,a),n=!1},e))}},debounce:function(t,e){var n;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,a)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})},formateMonth:function(t){var e=parseInt(t/12,10),n=t%12;return e>0&&0==n?e+"年":e>0?e+"年"+n+"个月":n+"个月"},formateMoney:function(t){return t?(t+"").replace(/^(\d+)\.0+$/,"$1"):""}};!function(){var t=i.getParams().channel;t&&localStorage.setItem("channel",t)}(),e.a=i},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),a=n.n(i),o=n(12),r=n.n(o),c=n(17),s=n(3),u=(n(16),n(19)),l=n(7),d=n.n(l),f=n(6),p=n.n(f),m=n(18);e.default={name:"appPage",components:{myAlertTip:d.a,LoadingModel:p.a},data:function(){return{channel:c.a.getParams().channel||localStorage.getItem("channel")||"",code:c.a.getParams().code,tip:m.a,loading:m.b,state:c.a.getParams().state||""}},methods:{layer:function(t,e){m.c.bind(this,t,e)()},showLoading:function(t){m.d.bind(this,t)()},hideLoading:function(){m.e.bind(this)()},login:function(){var t=this;return r()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.code){e.next=3;break}return t.layer("code为空不能登录"),e.abrupt("return");case 3:return n={state:t.state,channel:t.channel,code:t.code},t.showLoading("登录中..."),e.next=7,u.a.get(s.a.login,n).then(function(t){var e=localStorage.getItem("prev-link"),n={prev_link:e};window.history&&history.replaceState&&history.replaceState(n,"",e),location.href=e}).catch(function(e){t.layer(e)});case 7:case"end":return e.stop()}},e,t)}))()}},created:function(){this.login()}}},179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(5),o=n(91),r=n.n(o),c=n(2);n.n(c);i.a.use(a.a),i.a.config.debug=!1,i.a.config.devtools=!1;new i.a({template:"<Login/>",components:{Login:r.a}}).$mount("#app")},18:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return c});var i={isShow:!1,text:"",time:1500},a={isShow:!1,text:"加载中"},o=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},r=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},c=function(){this.loading.isShow=!1}},19:function(t,e,n){"use strict";var i=n(24),a=n.n(i),o=n(4),r=n.n(o),c=n(1),s=encodeURIComponent(location.origin+"/login.html"),u=function(){try{localStorage.setItem("prev-link",location.href)}catch(t){console.error(t)}location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx85ba94e795ed698e&redirect_uri="+s+"&response_type=code&scope=snsapi_userinfo#wechat_redirect"},l=function(t,e,n){var i=t.body;1==i.code?e(i.data):1e3==i.code?(n(i.msg+",即将跳转登录"),u()):n(i.msg)},d={get:function(t,e){return new r.a(function(n,i){c.a.http.get(t,{params:e}).then(function(t){return l(t,n,i)}).catch(function(t){return i("请求参数失败")})})},post:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(i,o){c.a.http.post(t,e,a()(n,{emulateJSON:!0})).then(function(t){return l(t,i,o)}).catch(function(t){return o("请求参数失败")})})}};e.a=d},2:function(t,e){!function(t,e){function n(){var e=o.getBoundingClientRect().width;e/s>540&&(e=540*s);var n=e/10;o.style.fontSize=n+"px",l.rem=t.rem=n}var i,a=t.document,o=a.documentElement,r=a.querySelector('meta[name="viewport"]'),c=a.querySelector('meta[name="flexible"]'),s=0,u=0,l=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(u=parseFloat(d[1]),s=parseInt(1/u))}else if(c){var f=c.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(s=parseFloat(p[1]),u=parseFloat((1/s).toFixed(2))),m&&(s=parseFloat(m[1]),u=parseFloat((1/s).toFixed(2)))}}if(!s&&!u){var h=t.navigator.userAgent,v=(h.match(/android/gi),!!h.match(/iphone/gi)),g=v&&!!h.match(/OS 9_3/),x=t.devicePixelRatio;s=v&&!g?x>=3&&(!s||s>=3)?3:x>=2&&(!s||s>=2)?2:1:1,u=1/s}if(o.setAttribute("data-dpr",s),!r)if(r=a.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(r);else{var _=a.createElement("div");_.appendChild(r),a.write(_.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*s+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*s+"px"},!1),n(),l.dpr=t.dpr=s,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},26:function(t,e){},3:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i="http://www.ym8800.com",a={bannerList:i+"/index/banner",classList:i+"/index/class",classInfo:i+"/class/info",classTry:i+"/class/try",classChapter:i+"/class/chapter",classPay:i+"/class/buyClass",userClass:i+"/my_class_list/list",userChapter:i+"/my_class/info",userArticle:i+"/article/info",getPerson:i+"/me/info",classPercent:i+"/my_class/learn_percent",getTest:i+"/test/get",getTestAsk:i+"/test/get_ask",getRandAnswer:i+"/test/get_answer",login:i+"/common/login"}},6:function(t,e,n){function i(t){n(10)}var a=n(0)(n(14),n(8),i,null,null);t.exports=a.exports},7:function(t,e,n){function i(t){n(11)}var a=n(0)(n(15),n(9),i,"data-v-b43c2270",null);t.exports=a.exports},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),n("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"load-effect"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},91:function(t,e,n){function i(t){n(114)}var a=n(0)(n(171),n(104),i,null,null);t.exports=a.exports}},[179]);