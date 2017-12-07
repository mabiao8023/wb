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
			  hm.src = "https://hm.baidu.com/hm.js?b909c3145cd6e6bd0ac8d118b0e5166b";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})(); `; // 放统计代码
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
        });
    }else{
        [].forEach.call(args,val => {
            fragment.appendChild(statisticsCode[val]());
        });
    }
    document.body.appendChild(fragment);
}
