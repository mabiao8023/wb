webpackJsonp([1],[,,,,,,,,,function(t,e,n){t.exports=n.p+"static/img/demo2.3d6064e.jpg"},,,,,,,,,,,,,,,,,,,function(t,e,n){t.exports=n.p+"static/img/demo1.d3abc2e.jpg"},function(t,e,n){t.exports=n.p+"static/img/scbfm.baa1eee.jpg"},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var i={appid:location.origin.includes("test")?"wx716e2b98e8a3409d":"wxea2b42aebf4f7468",redirect_url:encodeURIComponent(location.origin+"/home/login/login.html")},a={banner:"/home/index/banner",indexAsks:"/home/index/index",isBindPhone:"/home/apiEntry/api/isBindPhone",sendCode:"/home/apiEntry/api/sendCode",verify:"/home/apiEntry/api/verify"},s={wxAuthPath:"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+i.appid+"&redirect_uri="+i.redirect_url+"&response_type=code&scope=SCOPE&state=STATE#wechat_redirect"}},,function(t,e,n){function i(t){n(70)}var a=n(10)(n(118),n(65),i,null,null);t.exports=a.exports},function(t,e){!function(t,e){function n(){var e=s.getBoundingClientRect().width;e/c>540&&(e=540*c);var n=e/10;s.style.fontSize=n+"px",l.rem=t.rem=n}var i,a=t.document,s=a.documentElement,r=a.querySelector('meta[name="viewport"]'),o=a.querySelector('meta[name="flexible"]'),c=0,u=0,l=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var p=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(u=parseFloat(p[1]),c=parseInt(1/u))}else if(o){var d=o.getAttribute("content");if(d){var f=d.match(/initial\-dpr=([\d\.]+)/),m=d.match(/maximum\-dpr=([\d\.]+)/);f&&(c=parseFloat(f[1]),u=parseFloat((1/c).toFixed(2))),m&&(c=parseFloat(m[1]),u=parseFloat((1/c).toFixed(2)))}}if(!c&&!u){var v=t.navigator.userAgent,h=(v.match(/android/gi),!!v.match(/iphone/gi)),g=h&&!!v.match(/OS 9_3/),_=t.devicePixelRatio;c=h&&!g?_>=3&&(!c||c>=3)?3:_>=2&&(!c||c>=2)?2:1:1,u=1/c}if(s.setAttribute("data-dpr",c),!r)if(r=a.createElement("meta"),r.setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+u+", maximum-scale="+u+", minimum-scale="+u+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(r);else{var x=a.createElement("div");x.appendChild(r),a.write(x.innerHTML)}t.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*c+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*c+"px"},!1),n(),l.dpr=t.dpr=c,l.refreshRem=n,l.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},l.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},,,,function(t,e,n){t.exports=n.p+"static/img/class8-01.1763c80.jpg"},function(t,e,n){t.exports=n.p+"static/img/class8-02.e644e31.jpg"},function(t,e,n){t.exports=n.p+"static/img/class8-03.6db1a26.jpg"},function(t,e,n){t.exports=n.p+"static/img/class8-04.56c4965.jpg"},function(t,e,n){t.exports=n.p+"static/img/class8-05.7d0053e.jpg"},,function(t,e,n){function i(t){n(69)}var a=n(10)(n(115),n(64),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(68)}var a=n(10)(n(116),n(63),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(71)}var a=n(10)(n(117),n(66),i,"data-v-b43c2270",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[n("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),n("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"load-effect"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.image_info.length>0?n("ul",{staticClass:"ask-photo-show"},t._l(t.image_info,function(e,i){return n("li",{on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.showImage(i)}}},[n("img",{attrs:{src:e.thumb_url}})])})):t._e()},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[i("nav",{staticClass:"class-nav"},[i("div",{staticClass:"nav-list",class:{active:1==t.navType},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.navChange(1)}}},[i("span",[t._v("课程特色")])]),t._v(" "),i("div",{staticClass:"nav-list",class:{active:2==t.navType},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.navChange(2)}}},[i("span",[t._v("课程试听")])])]),t._v(" "),i("section",{staticClass:"banner"},[t.isHasVideo?i("video",{staticClass:"video-js vjs-16-9 vjs-big-play-centered",attrs:{id:"my-video","webkit-playsinline":"true",playsinline:"true",controls:"",poster:t.postImgSrc,preload:""}},[i("source",{attrs:{src:"http://v3.mukewang.com/shizhan/59f8498ae420e5be578b459b/H.mp4",type:"video/mp4"}}),t._v(" "),t._m(0)]):i("img",{attrs:{src:n(29)}})]),t._v(" "),t._m(1),t._v(" "),i("section",{directives:[{name:"show",rawName:"v-show",value:1==t.navType,expression:"navType == 1"}],staticClass:"c-xq"},[i("img",{attrs:{src:n(54)}}),t._v(" "),i("img",{attrs:{src:n(55)}}),t._v(" "),i("img",{attrs:{src:n(56)}}),t._v(" "),i("img",{attrs:{src:n(57)}}),t._v(" "),i("img",{attrs:{src:n(58)}})]),t._v(" "),i("section",{directives:[{name:"show",rawName:"v-show",value:2==t.navType,expression:"navType == 2"}],staticClass:"class-list"},[i("ul",{staticClass:"class-list-container"},t._l(t.classList,function(e,n){return i("li",{staticClass:"class-item"},[i("h1",{staticClass:"c-fl-title"},[t._v(t._s(e.title)+" "),i("span")]),t._v(" "),i("ul",{staticClass:"c-fl-children-list"},t._l(e,function(e,n){return i("li",{staticClass:"c-fl-children-item"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t")])}))])}))]),t._v(" "),t._m(2),t._v(" "),i("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?i("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),i("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?i("LoadingModel",[i("span",[t._v(t._s(t.loading.text))])]):t._e()],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"vjs-no-js"},[t._v("\n              To view this video please enable JavaScript, and consider upgrading to a web browser that\n              "),n("a",{attrs:{href:"http://videojs.com/html5-video-support/",target:"_blank"}},[t._v("supports HTML5 video")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"class-intro"},[n("div",{staticClass:"class-name"},[t._v("\n                公众号速成班\n            ")]),t._v(" "),n("div",{staticClass:"class-money"},[n("span",{staticClass:"c-r-money"},[t._v("￥599")]),t._v(" "),n("span",{staticClass:"c-o-money"},[t._v("￥1099")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pay-footer"},[n("div",{staticClass:"pay-footer-content"},[n("div",{staticClass:"pay-nums"},[t._v("12682已卖")]),t._v(" "),n("div",{staticClass:"pay-btn"},[t._v("购买课程(￥299.00/年)")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ImageShow",props:["image_info"],methods:{showImage:function(t){var e="",n=[];this.image_info.forEach(function(i,a){t==a&&(e=i.image_url),n.push(i.image_url)},this),wx.previewImage({current:e,urls:n})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(46),a=n.n(i),s=n(45),r=n.n(s),o=n(120),c=n(47),u=(n(119),n(123)),l=n(72),p=n.n(l),d=n(60),f=n.n(d),m=n(122),v=n(62),h=n.n(v),g=n(61),_=n.n(g),x=n(121),w=n(29),b=n.n(w);e.default={name:"appPage",components:{InfiniteLoading:p.a,ImageShow:f.a,myAlertTip:h.a,LoadingModel:_.a},data:function(){return{channel:o.a.getParams().channel||"",tip:x.a,loading:x.b,postImgSrc:b.a,isHasVideo:!0,navType:1,classList:[{title:"情感类",desc:"专治情感类疑难杂症",childList:[{title:"列表1",desc:"一些描述的内容",imgSrc:n(28)},{title:"列表2",desc:"一些描述的内容",imgSrc:n(9)},{title:"列表3",desc:"一些描述的内容",imgSrc:n(9)}]},{title:"情感类",desc:"专治情感类疑难杂症",childList:[{title:"列表1",desc:"一些描述的内容",imgSrc:n(28)},{title:"列表2",desc:"一些描述的内容",imgSrc:n(9)},{title:"列表3",desc:"一些描述的内容",imgSrc:n(9)}]}]}},computed:{},methods:{layer:function(t,e){x.c.bind(this,t,e)()},showLoading:function(t){x.d.bind(this,t)()},hideLoading:function(){x.e.bind(this)()},navChange:function(t){this.navType=t},getBanner:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(c.a.banner).then(function(e){return t.banner=e.banner_list}).catch(function(t){});case 2:case"end":return e.stop()}},e,t)}))()},share:function(){var t=this;return r()(a.a.mark(function e(){var i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.i(u.a)();case 2:i=t.sent,o.a.wxShare({wxConfig:i,link:location.href});case 4:case"end":return t.stop()}},e,t)}))()},pay:function(){var t=this;return r()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.a.wxPay({wxPayConf:res.jsApiParameters,successCb:t.wxPaySuc.bind(t,res.out_trade_no),failCb:t.wxPayFail.bind(t,"支付失败，请重试"),cancelCb:t.layer.bind(t,"支付失败，请重试")});case 1:case"end":return e.stop()}},e,t)}))()}},created:function(){},mounted:function(){this.$nextTick(function(){videojs("my-video",{width:"100%",aspectRation:"4:3",techOrder:["html5"]},function(){})})}}},function(t,e,n){"use strict";var i=n(114);n.n(i)},function(t,e,n){"use strict";var i={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var n=e.split("=");return t[n[0]]=n[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"课程咨询平台",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"课程咨询平台",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var n=!1;return function(){var i=this,a=arguments;n||(n=!0,setTimeout(function(){t.apply(i,a),n=!1},e))}},debounce:function(t,e){var n;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){t.apply(i,a)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})}};e.a=i},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return o});var i={isShow:!1,text:"",time:1500},a={isShow:!1,text:"加载中"},s=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},r=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},o=function(){this.loading.isShow=!1}},function(t,e,n){"use strict";var i=n(113),a=n.n(i),s=n(27),r=n.n(s),o=n(17),c=n(47),u=function(){try{localStorage.setItem("prev-link",location.href)}catch(t){console.error(t)}location.href=c.b},l=function(t,e,n){var i=t.body;1==i.code?e(i.data):100==i.code?(n(i.msg+",即将跳转登录"),u()):n(i.msg)},p={get:function(t,e){return new r.a(function(n,i){o.a.http.get(t,{params:e}).then(function(t){return l(t,n,i)}).catch(function(t){return i("请求参数失败")})})},post:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new r.a(function(i,s){o.a.http.post(t,e,a()(n,{emulateJSON:!0})).then(function(t){return l(t,i,s)}).catch(function(t){return s("请求参数失败")})})}};e.a=p},function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n(46),a=n.n(i),s=n(45),r=n.n(s),o=n(27),c=n.n(o),u=n(17),l=this,p=function(){var t=encodeURIComponent(location.href.split("#")[0]);return new c.a(function(e,n){u.a.http.get("/home/apiEntry/api/jssdk",{params:{url:t}}).then(function(t){var i=t.body;"1"==i.code?e(i.data):n("获取参数失败。code:"+i.code)},function(t){n("请求js参数失败")})})},d=function(){var t=r()(a.a.mark(function t(){var e,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,t.next=4,p();case 4:return n=t.sent,n.debug=e,n.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","previewImage"],t.abrupt("return",n);case 10:return t.prev=10,t.t0=t.catch(1),console.warn(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,l,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(17),a=n(48),s=n(49),r=n.n(s),o=n(50);n.n(o);i.a.use(a.a),i.a.config.debug=!1,i.a.config.devtools=!1;new i.a({template:"<Index/>",components:{Index:r.a}}).$mount("#app")},function(t,e){}],[124]);