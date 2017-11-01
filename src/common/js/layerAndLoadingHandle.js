/**
 * Created by lenovo on 2017/9/29.
 */

// this 表示的是当前组件的实例

let layerConfig = {
    isShow: false,
    text: "",
    time: 1500
}
let loadingConfig = {
    isShow:false,
    text:'加载中'
}
// layer显示弹窗处理函数
let layer = function(text,time){
    this.tip.isShow = true;
    this.tip.time = time || 1000;
    this.tip.text = text;
}
// loading显示弹窗
let  showLoading = function(text){
    console.log(this);
    this.loading.isShow = true;
    this.loading.text = text || "加载中...";
    // 最多10s后关闭动画
    setTimeout(()=>{
        this.loading.isShow && (this.loading.isShow = false);
    },20000)
}

let hideLoading = function(){
    this.loading.isShow = false;
}

export { layerConfig,loadingConfig,layer,showLoading,hideLoading }


