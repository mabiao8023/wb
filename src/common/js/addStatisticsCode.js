/**
 * Created by mbiao on 2017/9/6.
 * 动态增加统计代码，提高页面访问速度
 * */
let statisticsCode = {
    'BaiDu':function(){
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.textContent = `var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "//hm.baidu.com/hm.js?dc801fc307005a1295aa609d944512b7";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`;
        return script;
    },
    'GrowIo':function(){
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.textContent = `var _vds = _vds || [];
                window._vds = _vds;
                (function(){
                    _vds.push(['setAccountId', '946576f88a67f880']);
                    (function() {
                        var vds = document.createElement('script');
                        vds.type='text/javascript';
                        vds.async = true;
                        vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(vds, s);
                    })();
                })();`;
        return script;
    },
    'GrowIoWxPlugin':function(){
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.growingio.com/sdk/wx/vds-wx-plugin.js';
        return script;
    }
}

export function addStatisticsCode(){
    // 默认全部添加
    let args = arguments;
    let fragment = document.createDocumentFragment();
    if( args.length == 0 ){
        Object.keys(statisticsCode).forEach(val => {
            fragment.appendChild(statisticsCode[val]());
        })
    }else{
        [].forEach.call(args,val => {
            fragment.appendChild(statisticsCode[val]());
        })
    }
    document.body.appendChild(fragment);
}
