/*
*   处理页面中所有的用到的请求
* */
import Vue from 'vue'
// import { pagePath } from '../../common/js/config'
// 登录处理
// let loginHandle = () => {
//     try{
//         // 保存当前页面链接到本地
//         localStorage.setItem('prev-link',location.href)
//     }catch(e){
//         console.error(e)
//     }
//     // 跳转至微信授权登录
//     location.href = pagePath;
// }
// 公共的ajax处理函数
let ajaxResHandle =  ( data,resolve,reject ) => {
    let res = data.body;
    if( res.code == 1 ){
        resolve( res.data )
    }else if(res.code == 1000){
        // 跳转登录
        reject( `${res.msg},即将跳转登录`);
        location.href = res.url;
        // loginHandle()
    }else{
        reject( res.msg )
    }
}

let myAjax = {
    get( api,data ){
        return new Promise((resolve,reject) => {
            Vue.http.get( api , { params : data } )
                .then( data => ajaxResHandle(data,resolve,reject) )
                .catch( e => reject(`请求参数失败`) );
        } )
    },
   post( api,data,options = {} ){
       return new Promise( (resolve,reject) => {
           Vue.http.post( api , data ,Object.assign(options,{emulateJSON:true}))
               .then( data => ajaxResHandle(data,resolve,reject) )
               .catch( e => reject(`请求参数失败`) );
       } )
   }
}
export default myAjax
