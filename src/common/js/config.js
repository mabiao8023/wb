
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
}

let pagePath = {
	// 微信授权地址
	wxAuthPath:`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.appid}&redirect_uri=${wxConfig.redirect_url}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
}

export { apiPath ,pagePath }
