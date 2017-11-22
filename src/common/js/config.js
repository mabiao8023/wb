
const aipCommonPath = '/home/apiEntry/api/';
const Host = `//120.78.193.207`;
// const wxConfig = {
// 	appid:location.origin.includes('test') ? 'wx716e2b98e8a3409d' : 'wxea2b42aebf4f7468',
// 	redirect_url:encodeURIComponent(`${location.origin}/home/login/login.html`)
// }

let apiPath = {
    bannerList:`${Host}/banner/list`, // banner图
    classList:`${Host}/class/list`, // 首页问题列表/class/info
    classInfo:`${Host}/class/info`, // 课程特色页面
    classTry:`${Host}/class/try`, // 课程试听列表
    classChapter:`${Host}/class/chapter`, // 课程章节
	classPay:`${Host}/order/buyClass`,// 购买课程
	userClass:`${Host}/user/class`, //已购买的接口
	userChapter:`${Host}/user/chapter`,
}

// let pagePath = {
// 	// 微信授权地址
// 	wxAuthPath:`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.appid}&redirect_uri=${wxConfig.redirect_url}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
// }

export { apiPath }
