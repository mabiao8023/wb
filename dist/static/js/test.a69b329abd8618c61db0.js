webpackJsonp([5],{10:function(t,e,n){function i(t){n(14)}var s=n(0)(n(16),n(12),i,null,null);t.exports=s.exports},100:function(t,e,n){t.exports=n.p+"static/img/demo3.ffad042.png"},103:function(t,e,n){t.exports=n.p+"static/img/result.4457507.jpg"},104:function(t,e,n){t.exports=n.p+"static/img/test-banner.55aaf46.jpg"},11:function(t,e,n){function i(t){n(15)}var s=n(0)(n(17),n(13),i,"data-v-b43c2270",null);t.exports=s.exports},113:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[t.isShowResult?[t._m(1)]:[t._m(0),t._v(" "),i("transition",{attrs:{name:"fade",mode:"in-out"}},[t.isBeginTest?i("section",{staticClass:"question"},[i("div",{staticClass:"q-list"},[i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.currentIndex)+"/"+t._s(t.total)+"：")]),t._v(" "),i("span",[t._v(t._s(t.currentQuestion.title))])]),t._v(" "),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.currentQuestion.img}})]),t._v(" "),i("ul",{staticClass:"answers"},t._l(t.currentQuestion.answers,function(e){return i("li",{staticClass:"answers-item",on:{click:function(n){n.stopPropagation(),t.choiceAnswer(t.currentQuestion.id,e)}}},[t._v(t._s(e))])}))])]):i("section",{staticClass:"main-desc"},[i("div",{staticClass:"test-img"},[i("img",{attrs:{src:n(104)}})]),t._v(" "),i("div",{staticClass:"test-desc"},[t._v("\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n\t\t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\t\t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n\t\t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t")]),t._v(" "),i("div",{staticClass:"begin-test",on:{click:function(e){e.stopPropagation(),t.beginTest(e)}}},[t._v("\n\t\t\t\t\t\t点击开始测试\n\t\t\t\t\t")])])])],t._v(" "),i("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?i("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),i("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?i("LoadingModel",[i("span",[t._v(t._s(t.loading.text))])]):t._e()],1)],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("div",{staticClass:"test-title"},[t._v("\n\t\t\t\t\t你的左右脑分别有几岁？\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"test-peoples"},[i("span",{staticClass:"test-start"},[i("img",{attrs:{src:n(43)}}),t._v(" "),i("img",{attrs:{src:n(43)}}),t._v(" "),i("img",{attrs:{src:n(43)}}),t._v(" "),i("img",{attrs:{src:n(43)}}),t._v(" "),i("img",{attrs:{src:n(43)}})]),t._v(" "),i("span",[t._v("\n\t\t\t\t\t\t2390万人在测\n\t\t\t\t\t")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"result"},[i("div",{staticClass:"r-title"},[t._v("\n\t\t\t\t\t长按结果卡片分享给朋友\n\t\t\t\t")]),t._v(" "),i("div",{staticClass:"r-img"},[i("img",{attrs:{src:n(103)}})])])}]}},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),n("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"load-effect"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},122:function(t,e){},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},14:function(t,e){},15:function(t,e){},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},173:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),s=n.n(i),a=n(7),r=n.n(a),o=n(19),c=(n(5),n(18)),u=n(22),l=n(40),d=n.n(l),f=(n(21),n(11)),p=n.n(f),m=n(10),v=n.n(m),h=n(20),g=n(28),x=n.n(g),_=n(2),A=n.n(_),C=n(3),w=n.n(C),b=n(100),y=n.n(b);e.default={name:"appPage",components:{InfiniteLoading:d.a,myAlertTip:p.a,LoadingModel:v.a,ComFooter:x.a},data:function(){return{channel:o.a.getParams().channel||"",tip:h.a,loading:h.b,isBeginTest:!1,questions:[{id:1,title:"这个男人的眼fadsf条直线上吗？",img:A.a,answers:["是","不是","oo"]},{id:2,title:"这个男人的眼asdfsd一条直线上吗？",img:w.a,answers:["是","不是"]},{id:3,title:"这个adsfasd眼睛在一条直线上吗？",img:y.a,answers:["是","嘿嘿","不是"]},{id:4,title:"asdfadsf人的眼睛在一条直线上吗？",img:w.a,answers:["是","不是","哈哈哈"]},{id:5,title:"这个男人sadfasdfasd一条直线上吗？",img:A.a,answers:["对","不对","对不起"]}],currentQuestion:{},userAnswers:[],total:1,currentIndex:1,isShowResult:!1}},computed:{},methods:{layer:function(t,e){h.c.bind(this,t,e)()},showLoading:function(t){h.d.bind(this,t)()},hideLoading:function(){h.e.bind(this)()},navChange:function(t){this.navType=t},share:function(){var t=this;return r()(s.a.mark(function e(){var i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(u.a)();case 2:i=t.sent,o.a.wxShare({wxConfig:i,link:location.href});case 4:case"end":return t.stop()}},e,t)}))()},choiceAnswer:function(t,e){var n=this;this.currentIndex>=this.total?(this.showLoading("获取结果中"),setTimeout(function(){n.hideLoading(),n.isShowResult=!0},500)):(this.userAnswers.push(e),this.currentQuestion=this.questions[this.currentIndex],this.currentIndex+=1)},beginTest:function(){this.isBeginTest=!0},getIsTest:function(){this.layer("您已测试过该项目,可将结果分享给朋友"),this.isShowResult=!0}},created:function(){},mounted:function(){this.currentQuestion=this.questions[0],this.currentIndex=1,this.total=this.questions.length,this.share(),n.i(c.a)()}}},18:function(t,e,n){"use strict";function i(){var t=arguments,e=document.createDocumentFragment();0==t.length?a()(r).forEach(function(t){e.appendChild(r[t]())}):[].forEach.call(t,function(t){e.appendChild(r[t]())}),document.body.appendChild(e)}e.a=i;var s=n(36),a=n.n(s),r={BaiDu:function(){var t=document.createElement("script");return t.type="text/javascript",t.textContent=" ",t}}},180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(9),a=n(95),r=n.n(a),o=n(4);n.n(o);i.a.use(s.a),i.a.config.debug=!1,i.a.config.devtools=!1;new i.a({template:"<Index/>",components:{Index:r.a}}).$mount("#app")},19:function(t,e,n){"use strict";var i={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"课程咨询平台",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"课程咨询平台",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var n=!1;return function(){var i=this,s=arguments;n||(n=!0,setTimeout(function(){t.apply(i,s),n=!1},e))}},debounce:function(t,e){var n;return function(){var i=this,s=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,s)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})}};!function(){var t=i.getParams().channel;t&&localStorage.setItem("channel",t)}(),e.a=i},2:function(t,e,n){t.exports=n.p+"static/img/demo1.d3abc2e.jpg"},20:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return o});var i={isShow:!1,text:"",time:1500},s={isShow:!1,text:"加载中"},a=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},r=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},o=function(){this.loading.isShow=!1}},21:function(t,e,n){"use strict";var i=n(35),s=n.n(i),a=n(6),r=n.n(a),o=n(1),c=function(t,e,n){var i=t.body;1==i.code?e(i.data):100==i.code?(n(i.msg+",即将跳转登录"),location.href=i.loginUrl):n(i.msg)},u={get:function(t,e){return new r.a(function(n,i){o.a.http.get(t,{params:e}).then(function(t){return c(t,n,i)}).catch(function(t){return i("请求参数失败")})})},post:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(i,a){o.a.http.post(t,e,s()(n,{emulateJSON:!0})).then(function(t){return c(t,i,a)}).catch(function(t){return a("请求参数失败")})})}};e.a=u},22:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n(8),s=n.n(i),a=n(7),r=n.n(a),o=n(6),c=n.n(o),u=n(1),l=this,d=function(){var t=encodeURIComponent(location.href.split("#")[0]);return new c.a(function(e,n){u.a.http.get("/home/apiEntry/api/jssdk",{params:{url:t}}).then(function(t){var i=t.body;"1"==i.code?e(i.data):n("获取参数失败。code:"+i.code)},function(t){n("请求js参数失败")})})},f=function(){var t=r()(s.a.mark(function t(){var e,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,t.next=4,d();case 4:return n=t.sent,n.debug=e,n.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","previewImage"],t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(1),console.warn(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,l,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},28:function(t,e,n){function i(t){n(32)}var s=n(0)(n(37),n(30),i,null,null);t.exports=s.exports},3:function(t,e,n){t.exports=n.p+"static/img/demo2.3d6064e.jpg"},30:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("ul",{staticClass:"footer-container"},[n("li",{staticClass:"classList",class:{active:1==t.current}},[t._m(0)]),t._v(" "),n("li",{staticClass:"myClass",class:{active:2==t.current}},[t._m(1)]),t._v(" "),n("li",{staticClass:"me",class:{active:3==t.current}},[t._m(2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"./classList.html"}},[n("i",{staticClass:"class-list-icon"}),t._v("\n\t\t\t\t课程\n\t\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"./meClassList.html"}},[n("i",{staticClass:"class-icon"}),t._v("\n\t\t\t\t学习\n\t\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"./me.html"}},[n("i",{staticClass:"me-icon"}),t._v("\n\t\t\t\t我的\n\t\t\t")])}]}},32:function(t,e){},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(5);e.default={name:"com-footer",props:["current"],data:function(){return{}}}},39:function(t,e){},4:function(t,e){!function(t,e){function n(){var e=a.getBoundingClientRect().width;e/c>540&&(e=540*c);var n=e/10;a.style.fontSize=n+"px",l.rem=t.rem=n}var i,s=t.document,a=s.documentElement,r=s.querySelector('meta[name="viewport"]'),o=s.querySelector('meta[name="flexible"]'),c=0,u=0,l=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var d=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(u=parseFloat(d[1]),c=parseInt(1/u))}else if(o){var f=o.getAttribute("content");if(f){var p=f.match(/initial\-dpr=([\d\.]+)/),m=f.match(/maximum\-dpr=([\d\.]+)/);p&&(c=parseFloat(p[1]),u=parseFloat((1/c).toFixed(2))),m&&(c=parseFloat(m[1]),u=parseFloat((1/c).toFixed(2)))}}if(!c&&!u){var v=t.navigator.userAgent,h=(v.match(/android/gi),!!v.match(/iphone/gi)),g=h&&!!v.match(/OS 9_3/),x=t.devicePixelRatio;c=h&&!g?x>=3&&(!c||c>=3)?3:x>=2&&(!c||c>=2)?2:1:1,u=1/c}if(a.setAttribute("data-dpr",c),!r)if(r=s.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var _=s.createElement("div");_.appendChild(r),s.write(_.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*c+"px":s.addEventListener("DOMContentLoaded",function(){s.body.style.fontSize=12*c+"px"},!1),n(),l.dpr=t.dpr=c,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},43:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADeUlEQVRoQ+2ZwXISQRCGu2fJSauMTyC5qWCFPEGgFs/BJzDerLCW5AnEJ3APS8qb+AQmZ0HIE4RUsaU38QkkZXJjt62h2NRClt0emA2hKrlwSO/M/03PdPf0IKz5H665frgHWLUHU/NAtlPbfOiNvgFCkYBs12wcpgGbGkC+ZXWk+JDoj33TqeuGSAUg/90qgoDOjNhh33QerwVArlU9RsS9WbEE/hvXPGrqhNDugaedt9mMn/kdJZKABq7Z2LrTALlWtYmIr+eJ9Ahe/Sw7x7ogtHogbvWvBRN0+2WndCcBklb/WrQPpf5Lp6sDQpsHxnHfH/3liCKir265sc+xTbLRBpBvWzLGf0iaMPj/SIy2fpU+D7j28+y0AExWX0aeTa4gXV7QAqC6+hPI4aXIbA1K9pALHWW3FMCLH+92iUiWCwuVCETUIwF1H73zRbcTC0CGR0HGtiAsAEGBgLKIWFhm5SK/JegSUg8JByiw9w+N8yQP3QAYx3Ivs0dIBSTMzhRk2jUzBhwCQU+Cyd8rY+MkDDUFkOscFNAXsghjH0aGAK0mcttdGRulAGIKYMHDqFUga7BQIpz2QLtaQ8BPrEFWaETC33FLRz0pYQpAxvMH/qiLANsr1Bc79Wz+iIxC7JrmlikJ6NA1G3Z42rlhNNc+2EdCGxAf3bLOm9MRXRBSLeoyFJsHZFQCH48R8MnKIKR4g4rBnp/VkZjIJnWOvIDs3jYEAZx7YlSJy9KJAIHoFYTY00uRqShn4rhVftayKgZQM+1zoVKpsj0QgI0PN4gvaW0nIjpxy40Kd3xlgDk9H+58iXaqrRdlgLQ9AABKHTxlgOdtyxYA7xOXckEDlf1/o5TgzJlvW7KbkGZIPe2bTrinGitL2QP5tkUc0GVs+qbD1sU2lIIm94WzZcRxvlXpWKgBpBxCr+EUGl9KAGkf4JB32JFICSDXqp5xL/ME9AeA6uiLAQgoAlGNm8FVkpkSAOsAE10Aon0pMna4jpHNAsMz6nGd68AD8t7rlhs7nPPCBuBkYBnDPcOrx1WPExA76gEkLJgbidgAufj78ikJvzavZo9aycmCyIZYZE4J33vjPMEGiPKA3Oc+YW2ZBws5Lglqzl6atAOM80D7YB8AgzaifDqdup9y9uw8m2BsJNiUZ4j7osn2wDLi0vz2HiDN1eWMvfYe+A+f74BAxJC+ygAAAABJRU5ErkJggg=="},5:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={banner:"/home/index/banner",indexAsks:"/home/index/index",isBindPhone:"/home/apiEntry/api/isBindPhone",sendCode:"/home/apiEntry/api/sendCode",verify:"/home/apiEntry/api/verify"}},95:function(t,e,n){function i(t){n(122)}var s=n(0)(n(173),n(113),i,null,null);t.exports=s.exports}},[180]);