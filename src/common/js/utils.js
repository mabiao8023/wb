import Vue from 'vue'

let getWXFromAjax = () => {
    let url = location.href;

    return new Promise((resolve, reject) => {
        Vue.http.post('/common/jssdk', {url: url},{emulateJSON:true}).then((data) => {
            let res = data.body;
            if(res.code == '1'){
                resolve(res.data)
            }else{
                // console.log(`获取参数失败。code:${res.code}`)
                reject(`获取参数失败。code:${res.code}`)
            }
        }, (resp) => {
            // console.log(`请求js参数失败`)
            reject(`请求js参数失败`)
        });
    })
}

export let getWXParams = async () => {
    let debug = false;
    try{
        let config = await getWXFromAjax();
        config.debug = debug;
        config.jsApiList = [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'previewImage'
        ]
        return config;
    }catch(e){
        console.warn(e)
        return {}
    }
}
