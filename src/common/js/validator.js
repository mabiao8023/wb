/**
 * Created by mbiao on 2017/8/2.
 * 公用的表单验证插件
 */

// 验证规则
let strategies = {
    isNonEmpty(value,errMsg){  // 不为空
        if( value === '' ){
            return errMsg || '输入不能为空';
        }
    },
    minLength(value,length,errMsg){ // 最小长度
        if( value.length < length ){
            return errMsg;
        }
    },
    maxLength(value,length,errMsg){ // 最大长度
        if(value.length > length){
            return errMsg;
        }
    },
    minValue(value,minValue,errMsg){ // 最大长度
        if( +value < minValue){
            return errMsg;
        }
    },
    maxValue(value,maxValue,errMsg){ // 最大长度
        if( +value > maxValue){
            return errMsg;
        }
    },
    isChinese( value,errMsg ){  // 是否是中文
        if( !(/^[\u4e00-\u9fa5]+$/.test(value)) ){
            return errMsg || '请输入中文';
        }
    },
    isMobile(value,errMsg){  //是否是11位的手机号码
        if(!/^\d{11}$/.test(value)){
            return errMsg || '请输入正确的手机号码';
        }
    },
    isEmoji(value,errMsg){   // 是否包含有表情
        var ranges = [
            '\ud83c[\udf00-\udfff]',
            '\ud83d[\udc00-\ude4f]',
            '\ud83d[\ude80-\udeff]'
        ];
        if( new RegExp(ranges.join('|'),'g').test(value) ){
            return errMsg || '输入内容中包含特殊符号';
        }
    },
    isEmail(value,errMsg){
        if( !/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/.test(value) ){
            return errMsg || '请输入正确的邮箱';
        }
    }
}

// 实现验证类

export default class Validator {
    constructor(){
        this.cache = [];
    }
    add( domValue,rules ){
        let self = this;
        for( let i = 0, rule; rule = rules[i++]; ){
            let strategyAry = rule.strategy.split(':');
            let errorMsg = rule.errorMsg;
            self.cache.push(function(){
                let strategy = strategyAry.shift();
                strategyAry.unshift(domValue);
                strategyAry.push(errorMsg);
                return strategies[strategy].apply(null,strategyAry);
            })
        }
    }

    start(){
        for( let i = 0,valiatorFunc;valiatorFunc = this.cache[i++];){
            let errorMsg = valiatorFunc();
            if( errorMsg ){
                return errorMsg
            }
        }
    }
}

//  用法实例

// var form = document.getElementById('form1');
// var validataFunc = function(){
//     var validtor = new Validator();
//     validtor.add(form.userName,[{
//         strategy:'isNonEmpty',
//         errorMsg:'用户名不为空'
//     },{
//         strategy:'minLength:6',
//         errorMsg:'用户名长度不小于6位'
//     }
//     ]);
//     var errorMsg = validtor.start();
//     return errorMsg;
// }

