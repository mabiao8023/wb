/**
 * Created by mbiao on 2017/8/23.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import UserIndex from '../../pages/index/index.vue';
// import FastClick from 'fastclick';

// 使用vue-resource处理ajax
Vue.use(VueResource);

Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.config.devtools = process.env.NODE_ENV !== 'production';

// 开始应用
let vue = new Vue({
    template: '<UserIndex/>',
    components: { UserIndex }
}).$mount('#app');

// 绑定fastclick
// FastClick.attach(document.body);