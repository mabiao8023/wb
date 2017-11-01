/**
 * Created by mbiao on 2017/9/16.
 */
/*
* 处理ajax非成功的方法
* @params { Object | res }  请求的返回的响应信息 res.code -> 状态码  res.msg -> 提示语
* */
export function ajaxHandle( res ){
    // 判断this的指向
    if( this === window || this == undefined ){
        return console.error('this未绑定到当前实例，请检查函数调用方式');
    }
    if( res.code == 100){
        this.layer( res.msg );
        // 调登录处理程序，并返回到当前页面
		
    }else{
        this.layer( res.msg );
    }
}
