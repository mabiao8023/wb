
const aipCommonPath = '/home/apiEntry/api/';

// const wxConfig = {
// 	appid:location.origin.includes('test') ? 'wx716e2b98e8a3409d' : 'wxea2b42aebf4f7468',
// 	redirect_url:encodeURIComponent(`${location.origin}/home/login/login.html`)
// }

let apiPath = {
    bannerList:`/banner/list`, // banner图
    classList:`/class/list`, // 首页问题列表/class/info
    classInfo:`/class/info`, // 课程特色页面
    classTry:`/class/try`, // 课程试听列表
    classChapter:`/class/chapter`, // 课程章节
}

// let pagePath = {
// 	// 微信授权地址
// 	wxAuthPath:`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxConfig.appid}&redirect_uri=${wxConfig.redirect_url}&response_type=code&scope=SCOPE&state=STATE#wechat_redirect`
// }

export { apiPath  }
