webpackJsonp([3],{101:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("section",{staticClass:"banner"},[t.isHasVideo?t._e():n("img",{attrs:{src:i(7)}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isHasVideo,expression:"isHasVideo"}],staticClass:"video-container"},[n("video",{staticClass:"view-cover",attrs:{autoplay:"autoplay",controls:"",id:"my-video","x5-video-player-type":"h5","webkit-playsinline":"",playsinline:""}})])]),t._v(" "),n("section",{staticClass:"class-intro"},[n("div",{staticClass:"class-progress"},[n("h1",{staticClass:"class-name"},[t._v("爆款文案训练营")]),t._v(" "),n("div",{staticClass:"progress"},[n("span",{staticClass:"progress-bar"},[n("i",{style:"width:"+t.totalProgress+"%;"})]),t._v("已学"+t._s(t.totalProgress)+"%\n\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"class-zixun",on:{click:function(e){e.stopPropagation(),t.isShowQrodePop=!0}}},[t._v("\n                课程咨询\n            ")])]),t._v(" "),n("section",{staticClass:"class-list "},[n("ul",{staticClass:"class-list-container"},t._l(t.classList,function(e,i){return n("li",{staticClass:"class-item"},[n("h1",{staticClass:"c-fl-title m-title",on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.slideToggle(e)}}},[n("i",{staticClass:"title-icon"}),t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t"),n("span",{staticClass:"desc"},[t._v(t._s(e.desc))]),t._v(" "),n("i",{staticClass:"arrow",class:{active:!e.slide}})]),t._v(" "),e.slide?t._e():n("ul",{staticClass:"class-free-list"},[t._l(e.childList,function(e){return[1==e.type?n("VideoItem",{attrs:{item:e},nativeOn:{click:function(i){i.stopPropagation(),t.playVideo(e)}}}):t._e(),t._v(" "),2==e.type?n("ArticleItem",{attrs:{item:e},nativeOn:{click:function(i){i.stopPropagation(),t.gotoArticle(e.id)}}}):t._e()]})],2)])}))]),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.tip.isShow?n("myAlertTip",{attrs:{text:t.tip.text,time:t.tip.time},on:{"close-tip":function(e){t.tip.isShow=!t.tip.isShow}}}):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.loading.isShow?n("LoadingModel",[n("span",[t._v(t._s(t.loading.text))])]):t._e()],1),t._v(" "),n("transition",{attrs:{name:"fade",mode:"in-out"}},[t.isShowQrodePop?n("QrodePop",{on:{closeQrodePop:function(e){t.isShowQrodePop=!t.isShowQrodePop}}}):t._e()],1)],1)},staticRenderFns:[]}},109:function(t,e){},11:function(t,e,i){function n(t){i(15)}var s=i(0)(i(19),i(13),n,null,null);t.exports=s.exports},12:function(t,e,i){function n(t){i(16)}var s=i(0)(i(20),i(14),n,"data-v-b43c2270",null);t.exports=s.exports},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-pop",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[i("div",{staticClass:"loading-box"},[t._m(0),t._v(" "),i("div",{staticClass:"loading-tip"},[t._t("default",[t._v("\n              加载中...\n           ")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"load-effect"},[i("span"),t._v(" "),i("span"),t._v(" "),i("span"),t._v(" "),i("span"),t._v(" "),i("span"),t._v(" "),i("span"),t._v(" "),i("span"),t._v(" "),i("span")])}]}},14:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"model-text"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},15:function(t,e){},16:function(t,e){},164:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),s=i.n(n),o=i(8),a=i.n(o),r=i(157),c=i.n(r),l=i(22),d=(i(3),i(21),i(25)),u=(i(24),i(12)),p=i.n(u),f=i(11),m=i.n(f),h=i(23),v=i(7),g=i.n(v),y=i(41),x=i.n(y),b=i(38),w=i.n(b),C=i(28),_=i.n(C);e.default={name:"appPage",components:{myAlertTip:p.a,LoadingModel:m.a,QrodePop:x.a,ArticleItem:w.a,VideoItem:_.a},data:function(){return{channel:l.a.getParams().channel||"",tip:h.a,loading:h.b,type:l.a.getParams().type||1,postImgSrc:g.a,isHasVideo:!1,navType:2,classId:l.a.getParams().id||1,isShowQrodePop:!1,video:null,currentVideoSrc:"",classList:[{id:1,title:"足球系列",desc:"专业的足球竞技教学视频",slide:!1,childList:[{id:1,type:1,title:"足球系列1",desc:"一些描述的内容",imgSrc:i(2),src:"http://v3.mukewang.com/shizhan/583d5988b3fee311398b457c/H.mp4",playing:!1,time:200},{id:2,type:1,title:"足球系列2",desc:"一些描述的内容",imgSrc:i(4),src:"http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4",playing:!1,time:200},{id:3,type:2,title:"足球系列3",desc:"一些描述的内容",imgSrc:i(4),playing:!1,time:200}]},{title:"篮球系列",desc:"专业的篮球竞技",slide:!0,childList:[{id:4,type:1,title:"足球系列1",desc:"一些描述的内容",imgSrc:i(2),src:"http://v3.mukewang.com/shizhan/583d5988b3fee311398b457c/H.mp4",playing:!1,time:200},{id:5,type:1,title:"足球系列2",desc:"一些描述的内容",imgSrc:i(4),src:"http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4",playing:!1,time:200},{id:6,type:2,title:"足球系列3",desc:"一些描述的内容",imgSrc:i(4),playing:!1,time:200}]},{title:"排球系列",desc:"专治情感类疑难杂症",slide:!0,childList:[{id:7,type:1,title:"足球系列1",desc:"一些描述的内容",imgSrc:i(2),src:"http://v3.mukewang.com/shizhan/583d5988b3fee311398b457c/H.mp4",playing:!1,time:200},{id:8,type:1,title:"足球系列2",desc:"一些描述的内容",imgSrc:i(4),src:"http://v3.mukewang.com/shizhan/598d4dbfe420e54c688b46a2/H.mp4",playing:!1,time:200},{id:9,type:2,title:"足球系列3",desc:"一些描述的内容",imgSrc:i(4),playing:!1,time:200}]}],currentVideoId:null,videoTotalTime:0,totalProgress:0}},computed:{},methods:{layer:function(t,e){h.c.bind(this,t,e)()},showLoading:function(t){h.d.bind(this,t)()},hideLoading:function(){h.e.bind(this)()},progressControl:function(){var t=this;if(this.currentVideoId){var e=this.video.currentTime,i=this.video.duration,n=parseInt(e/i*100,10);console.log(e,this.currentVideoId,i,n);var s=localStorage.getItem("classProgress"),o=[];if(s)try{o=JSON.parse(s);var a=o[this.classId];a?a.some(function(e){return e.id==t.currentVideoId})?a.forEach(function(i){i.id==t.currentVideoId&&i.time<e&&(i.time=e)}):a.push({id:this.currentVideoId,time:e}):o[this.classId]={id:this.currentVideoId,time:e},localStorage.setItem("classProgress",c()(o))}catch(t){}else{var r={};r[this.classId]=[{id:this.currentVideoId,time:e}],localStorage.setItem("classProgress",c()(r))}}},playVideo:function(t){this.progressControl(),this.isHasVideo=!0,console.log(t),this.currentVideoId=t.id,this.classList.forEach(function(t){t.childList.forEach(function(t){1==t.type&&(t.playing=!1)})}),t.playing=!0,this.video.src=t.src,this.video.click(),this.video.play()},share:function(){var t=this;return a()(s.a.mark(function e(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.i(d.a)();case 2:n=t.sent,l.a.wxShare({wxConfig:n,link:location.href});case 4:case"end":return t.stop()}},e,t)}))()},pay:function(){var t=this;return a()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l.a.wxPay({wxPayConf:res.jsApiParameters,successCb:t.wxPaySuc.bind(t,res.out_trade_no),failCb:t.wxPayFail.bind(t,"支付失败，请重试"),cancelCb:t.layer.bind(t,"支付失败，请重试")});case 1:case"end":return e.stop()}},e,t)}))()},gotoArticle:function(t){location.href="./article.html?id="+t},slideToggle:function(t){t.slide=!t.slide},getTotalTime:function(){var t=this,e=0;this.classList.forEach(function(i){t.classList.forEach(function(t){t.childList.forEach(function(t){1==t.type&&(e+=t.time)})})}),this.videoTotalTime=e},getProgress:function(){var t=0;try{var e=JSON.parse(localStorage.getItem("classProgress"))[this.classId];e.length?e.forEach(function(e){t+=e.time}):t=0}catch(e){t=0}this.totalProgress=parseInt(t/this.videoTotalTime*100,10)}},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.video=document.getElementById("my-video"),t.video.addEventListener("pause",function(){t.progressControl()}),t.video.addEventListener("ended",function(){t.progressControl(),t.classList.forEach(function(t){t.childList.forEach(function(t){1==t.type&&(t.playing=!1)})})}),t.getTotalTime(),t.getProgress()})}}},170:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),s=i(10),o=i(93),a=i.n(o),r=i(5);i.n(r);n.a.use(s.a),n.a.config.debug=!1,n.a.config.devtools=!1;new n.a({template:"<Index/>",components:{Index:a.a}}).$mount("#app")},19:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading"}},2:function(t,e,i){t.exports=i.p+"static/img/demo1.d3abc2e.jpg"},20:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"myAlertTip",props:["text","time","isShow"],data:function(){return{}},mounted:function(){this.$nextTick(function(){var t=this;setTimeout(function(){t.$emit("close-tip")},this.time)})}}},21:function(t,e,i){"use strict";var n=i(36);i.n(n)},22:function(t,e,i){"use strict";var n={getParams:function(){var t=location.href.split("?")[1];return t?t.split("&").reduce(function(t,e){var i=e.split("=");return t[i[0]]=i[1]+"",t},{}):{}},wxShare:function(t){wx.config(t.wxConfig),wx.ready(function(){wx.onMenuShareTimeline({title:t.title||"课程咨询平台",link:t.link||location.href,imgUrl:t.imgUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}}),wx.onMenuShareAppMessage({title:t.title||"课程咨询平台",desc:t.desc||"已为100万+用户提供服务，快来听课吧！",link:t.link||location.href,imgUrl:t.imgUrl||"",type:t.type||"",dataUrl:t.dataUrl||"",success:t.success||function(){},cancel:t.cancel||function(){}})})},wxPay:function(t){var e=function(){var e=JSON.parse(t.wxPayConf)||{};WeixinJSBridge.invoke("getBrandWCPayRequest",e,function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t.successCb&&t.successCb():"get_brand_wcpay_request:fail"==e.err_msg?"function"==typeof t.failCb&&t.failCb():"function"==typeof t.cancelCb&&t.cancelCb()})};"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&document.attachEvent("onWeixinJSBridgeReady",e):e()},throttle:function(t,e){var i=!1;return function(){var n=this,s=arguments;i||(i=!0,setTimeout(function(){t.apply(n,s),i=!1},e))}},debounce:function(t,e){var i;return function(){var n=this,s=arguments;clearTimeout(i),i=setTimeout(function(){t.apply(n,s)},e)}},isIphone:function(){var t=navigator.userAgent;return["iPhone","iPad","iPod"].some(function(e){return new RegExp(e,"i").test(t)})}};e.a=n},23:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return a}),i.d(e,"e",function(){return r});var n={isShow:!1,text:"",time:1500},s={isShow:!1,text:"加载中"},o=function(t,e){this.tip.isShow=!0,this.tip.time=e||1e3,this.tip.text=t},a=function(t){var e=this;console.log(this),this.loading.isShow=!0,this.loading.text=t||"加载中...",setTimeout(function(){e.loading.isShow&&(e.loading.isShow=!1)},2e4)},r=function(){this.loading.isShow=!1}},24:function(t,e,i){"use strict";var n=i(35),s=i.n(n),o=i(6),a=i.n(o),r=i(1),c=i(3),l=function(){try{localStorage.setItem("prev-link",location.href)}catch(t){console.error(t)}location.href=c.b},d=function(t,e,i){var n=t.body;1==n.code?e(n.data):100==n.code?(i(n.msg+",即将跳转登录"),l()):i(n.msg)},u={get:function(t,e){return new a.a(function(i,n){r.a.http.get(t,{params:e}).then(function(t){return d(t,i,n)}).catch(function(t){return n("请求参数失败")})})},post:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(n,o){r.a.http.post(t,e,s()(i,{emulateJSON:!0})).then(function(t){return d(t,n,o)}).catch(function(t){return o("请求参数失败")})})}};e.a=u},25:function(t,e,i){"use strict";i.d(e,"a",function(){return p});var n=i(9),s=i.n(n),o=i(8),a=i.n(o),r=i(6),c=i.n(r),l=i(1),d=this,u=function(){var t=encodeURIComponent(location.href.split("#")[0]);return new c.a(function(e,i){l.a.http.get("/home/apiEntry/api/jssdk",{params:{url:t}}).then(function(t){var n=t.body;"1"==n.code?e(n.data):i("获取参数失败。code:"+n.code)},function(t){i("请求js参数失败")})})},p=function(){var t=a()(s.a.mark(function t(){var e,i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,t.next=4,u();case 4:return i=t.sent,i.debug=e,i.jsApiList=["onMenuShareTimeline","onMenuShareAppMessage","previewImage"],t.abrupt("return",i);case 10:return t.prev=10,t.t0=t.catch(1),console.warn(t.t0),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,d,[[1,10]])}));return function(){return t.apply(this,arguments)}}()},27:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQ0ZDQzZFNUM1RTkxMUU3QTlFREJCNjQxMkJBOEZBMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQ0ZDQzZFNkM1RTkxMUU3QTlFREJCNjQxMkJBOEZBMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFDRkNDNkUzQzVFOTExRTdBOUVEQkI2NDEyQkE4RkEwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFDRkNDNkU0QzVFOTExRTdBOUVEQkI2NDEyQkE4RkEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+chhVhQAABuJJREFUeNrcW01S21gQ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"},28:function(t,e,i){function n(t){i(30)}var s=i(0)(i(32),i(29),n,null,null);t.exports=s.exports},29:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"c-fl-children-item"},[n("div",{staticClass:"c-info-img"},[t.item.playing?n("div",{staticClass:"playing"},[t._v("正在播放")]):n("div",{staticClass:"model-box"},[n("img",{attrs:{src:i(27)}})]),t._v(" "),n("img",{attrs:{src:i(2)}})]),t._v(" "),n("div",{staticClass:"c-info-content"},[n("h1",{staticClass:"m-title"},[t._v(t._s(t.item.title))]),t._v(" "),n("p",{staticClass:"m-desc"},[t._v("\n\t\t\t"+t._s(t.item.desc)+"\n\t\t")]),t._v(" "),t.item.progress?n("div",{staticClass:"progress"},[n("span",{staticClass:"progress-bar"},[n("i",{style:"width:"+t.item.progress+"%;"})]),t._v(" 已学习"+t._s(t.item.progress)+"%\n\t\t")]):n("p",{staticClass:"time"},[t._v("8:30")])])])},staticRenderFns:[]}},3:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o});var n={appid:location.origin.includes("test")?"wx716e2b98e8a3409d":"wxea2b42aebf4f7468",redirect_url:encodeURIComponent(location.origin+"/home/login/login.html")},s={banner:"/home/index/banner",indexAsks:"/home/index/index",isBindPhone:"/home/apiEntry/api/isBindPhone",sendCode:"/home/apiEntry/api/sendCode",verify:"/home/apiEntry/api/verify"},o={wxAuthPath:"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n.appid+"&redirect_uri="+n.redirect_url+"&response_type=code&scope=SCOPE&state=STATE#wechat_redirect"}},30:function(t,e){},32:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"com-footer",props:["item"],data:function(){return{}},methods:{}}},37:function(t,e){},38:function(t,e,i){function n(t){i(49)}var s=i(0)(i(54),i(45),n,null,null);t.exports=s.exports},4:function(t,e,i){t.exports=i.p+"static/img/demo2.3d6064e.jpg"},41:function(t,e,i){function n(t){i(48)}var s=i(0)(i(57),i(44),n,"data-v-7b385148",null);t.exports=s.exports},44:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-box",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"model-container"},[t._m(0),t._v(" "),n("img",{attrs:{src:i(2)}}),t._v(" "),n("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.closeQrode(e)}}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",[t._v("长按图片选择"),i("br"),t._v("“识别二维码”咨询客服")])}]}},45:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"c-fl-children-item"},[t._m(0),t._v(" "),i("div",{staticClass:"c-info-content"},[i("h1",{staticClass:"m-title"},[t._v(t._s(t.item.title))]),t._v(" "),i("p",{staticClass:"m-desc"},[t._v("\n\t\t\t"+t._s(t.item.desc)+"\n\t\t")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-info-img"},[n("div",{staticClass:"playing"},[t._v("阅读课程")]),t._v(" "),n("img",{attrs:{src:i(2)}})])}]}},48:function(t,e){},49:function(t,e){},5:function(t,e){!function(t,e){function i(){var e=o.getBoundingClientRect().width;e/c>540&&(e=540*c);var i=e/10;o.style.fontSize=i+"px",d.rem=t.rem=i}var n,s=t.document,o=s.documentElement,a=s.querySelector('meta[name="viewport"]'),r=s.querySelector('meta[name="flexible"]'),c=0,l=0,d=e.flexible||(e.flexible={});if(a){console.warn("将根据已有的meta标签来设置缩放比例");var u=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(l=parseFloat(u[1]),c=parseInt(1/l))}else if(r){var p=r.getAttribute("content");if(p){var f=p.match(/initial\-dpr=([\d\.]+)/),m=p.match(/maximum\-dpr=([\d\.]+)/);f&&(c=parseFloat(f[1]),l=parseFloat((1/c).toFixed(2))),m&&(c=parseFloat(m[1]),l=parseFloat((1/c).toFixed(2)))}}if(!c&&!l){var h=t.navigator.userAgent,v=(h.match(/android/gi),!!h.match(/iphone/gi)),g=v&&!!h.match(/OS 9_3/),y=t.devicePixelRatio;c=v&&!g?y>=3&&(!c||c>=3)?3:y>=2&&(!c||c>=2)?2:1:1,l=1/c}if(o.setAttribute("data-dpr",c),!a)if(a=s.createElement("meta"),a.setAttribute("name","viewport"),a.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(a);else{var x=s.createElement("div");x.appendChild(a),s.write(x.innerHTML)}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(i,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(i,300))},!1),"complete"===s.readyState?s.body.style.fontSize=12*c+"px":s.addEventListener("DOMContentLoaded",function(){s.body.style.fontSize=12*c+"px"},!1),i(),d.dpr=t.dpr=c,d.refreshRem=i,d.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},d.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},54:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"com-footer",props:["item"],data:function(){return{}},methods:{}}},57:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"qrode-pop",props:["closeQrodePop"],data:function(){return{}},methods:{closeQrode:function(){this.$emit("closeQrodePop")}},mounted:function(){}}},7:function(t,e,i){t.exports=i.p+"static/img/scbfm.baa1eee.jpg"},93:function(t,e,i){function n(t){i(109)}var s=i(0)(i(164),i(101),n,null,null);t.exports=s.exports}},[170]);