webpackJsonp([7],{10:function(t,e){},11:function(t,e){},114:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[t.isShowResult?[n("section",{staticClass:"result"},[n("div",{staticClass:"r-title"},[t._v("\n\t\t\t\t\t长按结果卡片分享给朋友\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"r-img"},[n("img",{attrs:{src:t.result.img_url}})])])]:[n("header",{staticClass:"header"},[n("div",{staticClass:"test-title"},[t._v("\n\t\t\t\t\t"+t._s(t.testContent.title)+"\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"test-peoples"},[t._m(0),t._v(" "),n("span",[t._v("\n\t\t\t\t\t\t"+t._s(t.testContent.test_num)+"人在测\n                                           ")])])]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.isBeginTest?n("section",{staticClass:"question"},[n("div",{staticClass:"q-list"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.currentIndex)+"/"+t._s(t.total)+"：")]),t._v(" "),n("span",[t._v(t._s(t.currentQuestion.desc))])]),t._v(" "),t.currentQuestion.img_url?n("div",{staticClass:"img"},[n("img",{attrs:{src:t.currentQuestion.img_url}})]):t._e(),t._v(" "),n("ul",{staticClass:"answers"},t._l(t.currentQuestion.option,function(e){return n("li",{staticClass:"answers-item",on:{click:function(n){n.stopPropagation(),t.choiceAnswer(t.currentQuestion.id,e)}}},[t._v(t._s(e.desc))])}))])]):n("section",{staticClass:"main-desc"},[n("div",{staticClass:"test-img"},[n("img",{attrs:{src:t.testContent.img_url}})]),t._v(" "),n("div",{staticClass:"test-desc"},[t._v("\n\t\t\t\t\t\t"+t._s(t.testContent.desc)+"\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"begin-test",on:{click:function(e){e.stopPropagation(),t.beginTest(e)}}},[t._v("\n\t\t\t\t\t\t点击开始测试\n\t\t\t\t\t")])])])],t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?n("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?n("LoadingModel",[n("span",[t._v(t._s(t.loading.text))])]):t._e()],1)],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"test-start"},[i("img",{attrs:{src:n(32)}}),t._v(" "),i("img",{attrs:{src:n(32)}}),t._v(" "),i("img",{attrs:{src:n(32)}}),t._v(" "),i("img",{attrs:{src:n(32)}}),t._v(" "),i("img",{attrs:{src:n(32)}})])}]}},125:function(t,e){},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},16:function(t,e,n){"use strict";function i(){var t=arguments,e=document.createDocumentFragment();0==t.length?a()(r).forEach(function(t){e.appendChild(r[t]())}):[].forEach.call(t,function(t){e.appendChild(r[t]())}),document.body.appendChild(e)}e.a=i;var s=n(25),a=n.n(s),r={BaiDu:function(){var t=document.createElement("script");return t.type="text/javascript",t.textContent='var _hmt = _hmt || [];\n\t\t\t(function() {\n\t\t\t  var hm = document.createElement("script");\n\t\t\t  hm.src = "https://hm.baidu.com/hm.js?b909c3145cd6e6bd0ac8d118b0e5166b";\n\t\t\t  var s = document.getElementsByTagName("script")[0]; \n\t\t\t  s.parentNode.insertBefore(hm, s);\n\t\t\t})(); ',t}}},17:function(t,e,n){"use strict";var i={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"夜猫足球",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"夜猫足球",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};console.log("conf",e),WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var n=!1;return function(){var i=this,s=arguments;n||(n=!0,setTimeout(function(){t.apply(i,s),n=!1},e))}},debounce:function(t,e){var n;return function(){var i=this,s=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,s)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})},formateMonth:function(t){var e=parseInt(t/12,10),n=t%12;return e>0&&0==n?e+"年":e>0?e+"年"+n+"个月":n+"个月"},formateMoney:function(t){return t?(t+"").replace(/^(\d+)\.0+$/,"$1"):""}};!function(){var t=i.getParams().channel;t&&localStorage.setItem("channel",t)}(),e.a=i},18:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return o});var i={isShow:!1,text:"",time:1500},s={isShow:!1,text:"加载中"},a=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},r=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},o=function(){this.loading.isShow=!1}},181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),s=n.n(i),a=n(12),r=n.n(a),o=n(17),c=n(3),u=n(16),l=n(20),d=n(19),f=n(7),p=n.n(f),m=n(6),h=n.n(m),g=n(18);e.default={name:"appPage",components:{myAlertTip:p.a,LoadingModel:h.a},data:function(){return{channel:o.a.getParams().channel||localStorage.getItem("channel")||"",testId:o.a.getParams().id||1,tip:g.a,loading:g.b,isBeginTest:!1,questions:[],testContent:{},currentQuestion:{},userAnswers:[],total:1,currentIndex:1,isShowResult:!1,result:{},preLoadImages:[]}},computed:{},methods:{layer:function(t,e){g.c.bind(this,t,e)()},showLoading:function(t){g.d.bind(this,t)()},hideLoading:function(){g.e.bind(this)()},navChange:function(t){this.navType=t},share:function(){var t=this;return r()(s.a.mark(function e(){var i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(l.a)();case 2:i=e.sent,o.a.wxShare({wxConfig:i,link:location.href,title:"夜猫足球--"+t.testContent.title,desc:t.testContent.desc,imgUrl:t.testContent.img_url});case 4:case"end":return e.stop()}},e,t)}))()},choiceAnswer:function(t,e){var n=this;this.currentIndex>=this.total?(this.showLoading("获取结果中"),d.a.get(c.a.getRandAnswer,{test_id:this.testId}).then(function(t){console.log(t),n.result=t,n.isShowResult=!0}).catch(function(t){return n.layer(t)}),this.hideLoading()):(this.userAnswers.push(e),this.currentQuestion=this.questions[this.currentIndex],this.currentIndex+=1)},beginTest:function(){this.isBeginTest=!0},getIsTest:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.layer("您已测试过该项目,可将结果分享给朋友"),t.isShowResult=!0;case 2:case"end":return e.stop()}},e,t)}))()},getTest:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.showLoading(),e.next=3,d.a.get(c.a.getTest,{id:t.testId}).then(function(e){t.testContent=e});case 3:t.hideLoading();case 4:case"end":return e.stop()}},e,t)}))()},getTestAsk:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(c.a.getTestAsk,{test_id:t.testId}).then(function(e){t.questions=e,t.currentQuestion=t.questions[0],t.currentIndex=1,t.total=t.questions.length,e.length&&(e.forEach(function(e){t.preLoadImages.push(e.img_url)}),t.preLoader())});case 2:case"end":return e.stop()}},e,t)}))()},preLoader:function(){this.preLoadImages.forEach(function(t){(new Image).src=t})}},created:function(){this.getTest(),this.getTestAsk()},mounted:function(){this.share(),n.i(u.a)()}}},19:function(t,e,n){"use strict";var i=n(24),s=n.n(i),a=n(4),r=n.n(a),o=n(1),c=encodeURIComponent(location.origin+"/login.html"),u=function(){try{localStorage.setItem("prev-link",location.href)}catch(t){console.error(t)}location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx85ba94e795ed698e&redirect_uri="+c+"&response_type=code&scope=snsapi_userinfo#wechat_redirect"},l=function(t,e,n){var i=t.body;1==i.code?e(i.data):1e3==i.code?(n(i.msg+",即将跳转登录"),u()):n(i.msg)},d={get:function(t,e){return new r.a(function(n,i){o.a.http.get(t,{params:e}).then(function(t){return l(t,n,i)}).catch(function(t){return i("请求参数失败")})})},post:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(i,a){o.a.http.post(t,e,s()(n,{emulateJSON:!0})).then(function(t){return l(t,i,a)}).catch(function(t){return a("请求参数失败")})})}};e.a=d},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(5),a=n(95),r=n.n(a),o=n(2);n.n(o);i.a.use(s.a),i.a.config.debug=!1,i.a.config.devtools=!1;new i.a({template:"<Index/>",components:{Index:r.a}}).$mount("#app")},2:function(t,e){!function(t,e){function n(){var e=a.getBoundingClientRect().width;e/c>540&&(e=540*c);var n=e/10;a.style.fontSize=n+"px",l.rem=t.rem=n}var i,s=t.document,a=s.documentElement,r=s.querySelector('meta[name="viewport"]'),o=s.querySelector('meta[name="flexible"]'),c=0,u=0,l=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(u=parseFloat(d[1]),c=parseInt(1/u))}else if(o){var f=o.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(c=parseFloat(p[1]),u=parseFloat((1/c).toFixed(2))),m&&(c=parseFloat(m[1]),u=parseFloat((1/c).toFixed(2)))}}if(!c&&!u){var h=t.navigator.userAgent,g=(h.match(/android/gi),!!h.match(/iphone/gi)),v=g&&!!h.match(/OS 9_3/),_=t.devicePixelRatio;c=g&&!v?_>=3&&(!c||c>=3)?3:_>=2&&(!c||c>=2)?2:1:1,u=1/c}if(a.setAttribute("data-dpr",c),!r)if(r=s.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var x=s.createElement("div");x.appendChild(r),s.write(x.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*c+"px":s.addEventListener("DOMContentLoaded",function(){s.body.style.fontSize=12*c+"px"},!1),n(),l.dpr=t.dpr=c,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},20:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(13),s=n.n(i),a=n(12),r=n.n(a),o=n(4),c=n.n(o),u=n(1),l=this,d=function(){var t=location.href;return new c.a(function(e,n){u.a.http.post("/common/jssdk",{url:t},{emulateJSON:!0}).then(function(t){var i=t.body;"1"==i.code?e(i.data):n("获取参数失败。code:"+i.code)},function(t){n("请求js参数失败")})})},f=function(){var t=r()(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,t.next=4,d();case 4:return n=t.sent,n.debug=e,n.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","previewImage"],t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(1),console.warn(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,l,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},26:function(t,e){},3:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i="http://www.ym8800.com",s={bannerList:i+"/index/banner",classList:i+"/index/class",classInfo:i+"/class/info",classTry:i+"/class/try",classChapter:i+"/class/chapter",classPay:i+"/class/buyClass",userClass:i+"/my_class_list/list",userChapter:i+"/my_class/info",userArticle:i+"/article/info",getPerson:i+"/me/info",classPercent:i+"/my_class/learn_percent",getTest:i+"/test/get",getTestAsk:i+"/test/get_ask",getRandAnswer:i+"/test/get_answer",login:i+"/common/login",recommend:i+"/recommend/index"}},32:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADeUlEQVRoQ+2ZwXISQRCGu2fJSauMTyC5qWCFPEGgFs/BJzDerLCW5AnEJ3APS8qb+AQmZ0HIE4RUsaU38QkkZXJjt62h2NRClt0emA2hKrlwSO/M/03PdPf0IKz5H665frgHWLUHU/NAtlPbfOiNvgFCkYBs12wcpgGbGkC+ZXWk+JDoj33TqeuGSAUg/90qgoDOjNhh33QerwVArlU9RsS9WbEE/hvXPGrqhNDugaedt9mMn/kdJZKABq7Z2LrTALlWtYmIr+eJ9Ahe/Sw7x7ogtHogbvWvBRN0+2WndCcBklb/WrQPpf5Lp6sDQpsHxnHfH/3liCKir265sc+xTbLRBpBvWzLGf0iaMPj/SIy2fpU+D7j28+y0AExWX0aeTa4gXV7QAqC6+hPI4aXIbA1K9pALHWW3FMCLH+92iUiWCwuVCETUIwF1H73zRbcTC0CGR0HGtiAsAEGBgLKIWFhm5SK/JegSUg8JByiw9w+N8yQP3QAYx3Ivs0dIBSTMzhRk2jUzBhwCQU+Cyd8rY+MkDDUFkOscFNAXsghjH0aGAK0mcttdGRulAGIKYMHDqFUga7BQIpz2QLtaQ8BPrEFWaETC33FLRz0pYQpAxvMH/qiLANsr1Bc79Wz+iIxC7JrmlikJ6NA1G3Z42rlhNNc+2EdCGxAf3bLOm9MRXRBSLeoyFJsHZFQCH48R8MnKIKR4g4rBnp/VkZjIJnWOvIDs3jYEAZx7YlSJy9KJAIHoFYTY00uRqShn4rhVftayKgZQM+1zoVKpsj0QgI0PN4gvaW0nIjpxy40Kd3xlgDk9H+58iXaqrRdlgLQ9AABKHTxlgOdtyxYA7xOXckEDlf1/o5TgzJlvW7KbkGZIPe2bTrinGitL2QP5tkUc0GVs+qbD1sU2lIIm94WzZcRxvlXpWKgBpBxCr+EUGl9KAGkf4JB32JFICSDXqp5xL/ME9AeA6uiLAQgoAlGNm8FVkpkSAOsAE10Aon0pMna4jpHNAsMz6nGd68AD8t7rlhs7nPPCBuBkYBnDPcOrx1WPExA76gEkLJgbidgAufj78ikJvzavZo9aycmCyIZYZE4J33vjPMEGiPKA3Oc+YW2ZBws5Lglqzl6atAOM80D7YB8AgzaifDqdup9y9uw8m2BsJNiUZ4j7osn2wDLi0vz2HiDN1eWMvfYe+A+f74BAxJC+ygAAAABJRU5ErkJggg=="},6:function(t,e,n){function i(t){n(10)}var s=n(0)(n(14),n(8),i,null,null);t.exports=s.exports},7:function(t,e,n){function i(t){n(11)}var s=n(0)(n(15),n(9),i,"data-v-b43c2270",null);t.exports=s.exports},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),n("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"load-effect"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},9:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},95:function(t,e,n){function i(t){n(125)}var s=n(0)(n(181),n(114),i,null,null);t.exports=s.exports}},[190]);