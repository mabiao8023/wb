webpackJsonp([7],{10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),n("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"load-effect"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},105:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("section",{staticClass:"banner"},[n("img",{attrs:{src:t.article.img_url}})]),t._v(" "),n("section",{staticClass:"class-intro boxShadow"},[n("div",{staticClass:"class-name"},[t._v("\n                "+t._s(t.article.title)+"\n            ")])]),t._v(" "),n("section",{staticClass:"c-xq"},[n("p",{staticClass:"c-desc"},[t._v("\n\t\t\t\t"+t._s(t.article.content)+"\n            ")])]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?n("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?n("LoadingModel",[n("span",[t._v(t._s(t.loading.text))])]):t._e()],1)],1)},staticRenderFns:[]}},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},114:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},16:function(t,e,n){"use strict";function i(){var t=arguments,e=document.createDocumentFragment();0==t.length?r()(o).forEach(function(t){e.appendChild(o[t]())}):[].forEach.call(t,function(t){e.appendChild(o[t]())}),document.body.appendChild(e)}e.a=i;var a=n(30),r=n.n(a),o={BaiDu:function(){var t=document.createElement("script");return t.type="text/javascript",t.textContent=" ",t}}},168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),a=n.n(i),r=n(5),o=n.n(r),s=n(17),c=n(3),u=(n(16),n(20)),l=n(19),d=n(9),f=n.n(d),p=n(8),m=n.n(p),h=n(18);e.default={name:"appPage",components:{myAlertTip:f.a,LoadingModel:m.a},data:function(){return{channel:s.a.getParams().channel||"",articleId:s.a.getParams().id||"",tip:h.a,loading:h.b,article:{id:1,title:"你说的内饰额f",img_url:"https://mabiao8023.github.io/wb/src/image/scbfm.jpg",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et natus nemo, cumque eligendi libero hic expedita repellat, laborum vero quae mollitia, necessitatibus odio quis reprehenderit fugiat itaque dolorem. Voluptatem, nam?"}}},computed:{},methods:{showQrodePop:function(){this.isShowQrodePop=!0},layer:function(t,e){h.c.bind(this,t,e)()},showLoading:function(t){h.d.bind(this,t)()},hideLoading:function(){h.e.bind(this)()},share:function(){var t=this;return o()(a.a.mark(function e(){var i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(u.a)();case 2:i=t.sent,s.a.wxShare({wxConfig:i,link:location.href});case 4:case"end":return t.stop()}},e,t)}))()},getArticle:function(){var t=this;return o()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading("获取文章中"),e.next=3,l.a.get(c.a.userArticle,{resource_id:t.articleId}).then(function(e){t.article=e});case 3:t.hideLoading();case 4:case"end":return e.stop()}},e,t)}))()}},created:function(){this.getArticle()},mounted:function(){}}},17:function(t,e,n){"use strict";var i={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"课程咨询平台",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"课程咨询平台",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var n=!1;return function(){var i=this,a=arguments;n||(n=!0,setTimeout(function(){t.apply(i,a),n=!1},e))}},debounce:function(t,e){var n;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,a)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})}};!function(){var t=i.getParams().channel;t&&localStorage.setItem("channel",t)}(),e.a=i},175:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),a=n(7),r=n(88),o=n.n(r),s=n(2);n.n(s);i.a.use(a.a),i.a.config.debug=!1,i.a.config.devtools=!1;new i.a({template:"<Me/>",components:{Me:o.a}}).$mount("#app")},18:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s});var i={isShow:!1,text:"",time:1500},a={isShow:!1,text:"加载中"},r=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},o=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},s=function(){this.loading.isShow=!1}},19:function(t,e,n){"use strict";var i=n(29),a=n.n(i),r=n(4),o=n.n(r),s=n(1),c=function(t,e,n){var i=t.body;1==i.code?e(i.data):1e3==i.code?(n(i.msg+",即将跳转登录"),location.href=i.url):n(i.msg)},u={get:function(t,e){return new o.a(function(n,i){s.a.http.get(t,{params:e}).then(function(t){return c(t,n,i)}).catch(function(t){return i("请求参数失败")})})},post:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new o.a(function(i,r){s.a.http.post(t,e,a()(n,{emulateJSON:!0})).then(function(t){return c(t,i,r)}).catch(function(t){return r("请求参数失败")})})}};e.a=u},2:function(t,e){!function(t,e){function n(){var e=r.getBoundingClientRect().width;e/c>540&&(e=540*c);var n=e/10;r.style.fontSize=n+"px",l.rem=t.rem=n}var i,a=t.document,r=a.documentElement,o=a.querySelector('meta[name="viewport"]'),s=a.querySelector('meta[name="flexible"]'),c=0,u=0,l=e.flexible||(e.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var d=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(u=parseFloat(d[1]),c=parseInt(1/u))}else if(s){var f=s.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(c=parseFloat(p[1]),u=parseFloat((1/c).toFixed(2))),m&&(c=parseFloat(m[1]),u=parseFloat((1/c).toFixed(2)))}}if(!c&&!u){var h=t.navigator.userAgent,v=(h.match(/android/gi),!!h.match(/iphone/gi)),g=v&&!!h.match(/OS 9_3/),x=t.devicePixelRatio;c=v&&!g?x>=3&&(!c||c>=3)?3:x>=2&&(!c||c>=2)?2:1:1,u=1/c}if(r.setAttribute("data-dpr",c),!o)if(o=a.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),r.firstElementChild)r.firstElementChild.appendChild(o);else{var w=a.createElement("div");w.appendChild(o),a.write(w.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*c+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*c+"px"},!1),n(),l.dpr=t.dpr=c,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},20:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(6),a=n.n(i),r=n(5),o=n.n(r),s=n(4),c=n.n(s),u=n(1),l=this,d=function(){var t=encodeURIComponent(location.href.split("#")[0]);return new c.a(function(e,n){u.a.http.get("/home/apiEntry/api/jssdk",{params:{url:t}}).then(function(t){var i=t.body;"1"==i.code?e(i.data):n("获取参数失败。code:"+i.code)},function(t){n("请求js参数失败")})})},f=function(){var t=o()(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,t.next=4,d();case 4:return n=t.sent,n.debug=e,n.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","previewImage"],t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(1),console.warn(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,l,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},3:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i="http://www.ym8800.com",a={bannerList:i+"/index/banner",classList:i+"/index/class",classInfo:i+"/class/info",classTry:i+"/class/try",classChapter:i+"/class/chapter",classPay:i+"/order/buyClass",userClass:i+"/my_class_list/list",userChapter:i+"/my_class/info",userArticle:i+"/article/info",getPerson:i+"/me/info",classPercent:i+"/my_class/learn_percent",getTest:i+"/test/get",getTestAsk:i+"/test/get_ask",getRandAnswer:i+"/test/get_answer"}},32:function(t,e){},8:function(t,e,n){function i(t){n(12)}var a=n(0)(n(14),n(10),i,null,null);t.exports=a.exports},88:function(t,e,n){function i(t){n(114)}var a=n(0)(n(168),n(105),i,null,null);t.exports=a.exports},9:function(t,e,n){function i(t){n(13)}var a=n(0)(n(15),n(11),i,"data-v-b43c2270",null);t.exports=a.exports}},[175]);