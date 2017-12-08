import Vue from 'vue'

let getWXFromAjax = () => {
    let url = encodeURIComponent(location.href.split('#')[0])

    return new Promise((resolve, reject) => {
        Vue.http.get('/common/jssdk', {params: {url: url}}).then((data) => {
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
