
const aipCommonPath = '/home/apiEntry/api/';
const searchPath = 'http://ydapi.linghit.com/search/';

const wxConfig = {
	appid:location.origin.includes('test') ? 'wx716e2b98e8a3409d' : 'wxea2b42aebf4f7468',
	redirect_url:encodeURIComponent(`${location.origin}/home/login/login.html`)
}
let apiPath = {
    banner:`/home/index/banner`, // banner图
    indexAsks:`/home/index/index`, // 首页问题列表
	isBindPhone: aipCommonPath + 'isBindPhone',   // 绑定手机
	sendCode: aipCommonPath + 'sendCode',  // 发送验证码
	verify: aipCommonPath + 'verify',  // 验证手机号码
	sendCoupon: aipCommonPath + 'sendCoupon',  // 领取优惠券
	prizeList: aipCommonPath + 'prizeList',  // 获取已经领取的优惠券列表
	getChatList: aipCommonPath + 'consultantList',//获取聊天信息列表
	getNoticeNums: aipCommonPath + 'notice',//获取聊天信息条数
	getPersonal: aipCommonPath + 'personalCenter',//获取聊天信息条数
	getCouponNums: aipCommonPath + 'couponNum',//获取聊天信息条数
	getQrcode: aipCommonPath + 'qrcode',//获取聊天信息条数
    getConsultantStatus:aipCommonPath + 'consultantStatus',//获取服务状态及评价内容
    consultantEvaluate:'/home/Evaluate/consultantEvaluate',//服务内容评价
	getIsReadlyFocus:aipCommonPath + 'subscribe', // 获取用户是否已经关注公众号
	//  老师回答页面获取回答问题信息
    askInfo:aipCommonPath + 'askInfo',   // 获取主问题的内容
    pressInfo:aipCommonPath + 'pressInfo',   // 获取追问问题的内容
    historyAsk:aipCommonPath + 'historyAsk',   //追问回答历史API
	answer:'/home/ajax/answer',  //上传主问题的答案
	answerPress:'/home/ajax/pressAnswer', // 上传追问问题的答案
	// 搜索接口
	search:searchPath + 'index',   // 获取主问题的内容
	hotSearch:searchPath + 'hot_keyword',   // 获取主问题的内容
	searchResult:searchPath + 'result',   // 获取主问题的内容

	// 偷听页面接口
	touting:'/home/ajax/touting',  // 获取用户是否已经支付过该偷听问题
	toutingPaySuc:'/home/wxpay/paysuccess', // 偷听支付成功后的处理
    randAsk:aipCommonPath + 'randAsk', // 随机一个问题
    getAsk:aipCommonPath + 'getAsk', // 获取问题
	asks:'/home/me/asks', // 获取已问问题列表
	toutingAsks:'/home/me/touting', // 获取已偷听问题列表

	getEvaluate:'/home/Evaluate/getEvaluate',// 获取评论信息
	delFile:'/home/ask/delFile',// 删除图片
	addEvaluate:'/home/Evaluate/addEvaluate', //提交评价接口
	recommend:'/home/ask/recommend',// 老师推荐接口
	getAskAgain:aipCommonPath + 'askAgain',// 获取用户详情问题
    evaluateList:'/home/Evaluate/evaluateList',  // 老师评价列表
    answered:'/home/user/answered',   // 老师已回答问题列表
    myService:'/home/order/serviceOrderList',  // 购买的服务的列表
    couponUseful: '/home/Coupon/useful', // 优惠券可以使用信息列表
    couponExpired:'/home/Coupon/expired',// 已过期的优惠券列表
    feedback:'/home/me/feedback',  // 用户反馈接口

	getAnswerInfo:'', // 获取老师的信息
	// modifyAnswerInfo:'/home/me/modify', // 修改老师资料信息
	rewardGetAnswerInfo:'/home/reward/getAnswerInfo', // 打赏页面获得老师详情
    getUserAskReward:'/home/reward/getUserAskReward', //  打赏页面获得问题回答金额


	// 支付相关接口
	qrcodePay:'/home/apiEntry/api/qrcodePay', // 支付失败后的二维码突破
    rewardOrder:'/home/order/rewardOrder', // 打赏页面支付
    paySuccess:'/home/wxpay/paysuccess', // 支付成功
    rewardSuccess:'/home/reward/rewardSuccess', //打赏成功
    askOrder:'/home/apiEntry/api/askOrder', //普通问题下单接口
    consultantOrder:'/home/apiEntry/api/consultantOrder', // 图文咨询下单接口
	// 高价服务信息列表
	highPriceService:'/home/user/highPriceService',

	getMyInfo:'/home/apiEntry/api/myInfo', // 获得个人信息
    editMyself:'/home/apiEntry/api/editMyself', // 修改保存个人信息
	// 上传图片接口
	uploadPhoto:'/home/ask/upload', // 上传图片
    uploadVideo:'/home/ask/uploadVideo', // 上传聊天录音接口

	// 打赏用户列表
    getUserRewardList:`/home/reward/getUserRewardList`,  // 用户打赏列表
    getAnswerRewardList:`/home/reward/getAnswerRewardList`, // 老师打赏页面
    getAnswerRankRewardList:`/home/ApiEntry/api/answer_rank`, // 老师打赏总榜

	// 答主首页添加用户信息
    addUserMess:`/home/apiEntry/api/addUserMess`, // 添加用户信息
    getUserMessList:`/home/apiEntry/api/getUserMessList`, // 获得用户信息列表

	// 答主首页一单多问随机老师
    randomAnswer:`/home/apiEntry/api/randomAnswer`, //获取老师接口
    askMoreOrder:`/home/apiEntry/api/askMore`, // 一单多问下单

	// 高价服务的老师列表
    highServiceAnswer:`/home/ajax/highServiceAnswer`,
    //获取优惠券信息
    readText:'/home/apiEntry/api/readText',
    //获取等级列表
    answerRank:'/home/ApiEntry/api/answer_rank',
    //新手弹框次数
    newNums:'/home/apiEntry/api/static',
	// 图片上传接口
	upload:'/home/ask/upload',

	// 老师回答问题列表
	answerMessage:'/home/answer/message', // 老师问题的条数
	noAnswerList:'/home/answer/noAnswerList', // 老师未回答条数
	answeredList:'/home/answer/anweredList',// 老师已经回答的问题
	overAnswerList:'/home/answer/overAnswerList',// 老师已过期列表

	logStep:'/home/ajax/logStep', // 记录新手引导步骤
	highService:'/home/ajax/highService', // 首页高价服务列表

	income:'/home/apiEntry/api/income', // 收入
	disburse:'/home/apiEntry/api/disburse', // 支出
	settle:'/home/apiEntry/api/settle', // 结算
	answerInfo:'/home/user/answerInfo',// 老师的介绍
	delUserMessList:'/home/apiEntry/api/delUserMessList', //删除用户
	userfollow:'/home/ajax/userfollow', //用户关注老师接口
	askPress:'/home/ajax/press',// 用户追问问题
	isPopBoot:'/home/ajax/isPopBoot', //是否弹新手引导
}

let pagePath = {
	// 微信授权地址
	wxAuthPath:`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.appid}&redirect_uri=${wxConfig.redirect_url}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
}
export { apiPath ,pagePath }
