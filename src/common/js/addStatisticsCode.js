/**
 * Created by mbiao on 2017/9/6.
 * 动态增加统计代码，提高页面访问速度
 * */
let statisticsCode = {
    'BaiDu':function(){
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.textContent = ` `; // 放统计代码
        return script;
    },
    /* 有更多的统计代码继续添加 */
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
