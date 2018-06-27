/**
 * Created by mbiao on 2017/11/23.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import Index from '../../pages/tuijian/tuijian.vue';
import '../../common/js/flexible.min.js';

// 使用vue-resource处理ajax
Vue.use(VueResource);

Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.config.devtools = process.env.NODE_ENV !== 'production';

// 开始应用
let vue = new Vue({
    template: '<Index/>',
    components: { Index }
}).$mount('#app');
