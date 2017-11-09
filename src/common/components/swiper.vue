<template>
    <div class="swiper" ref="swiper"
         :class="[direction, {dragging: dragging}]"
         @touchstart="_onTouchStart"
         @mousedown="_onTouchStart"
         @wheel="_onWheel">
        <div class="swiper-wrap" ref="swiper-wrap" @transitionend="_onTransitionEnd"
             :style="pos">
            <slot></slot>
        </div>
        <div class="swiper-pagination" v-show="paginationVisible">
                    <span class="swiper-pagination-bullet" v-for="(slide,index) in slideEls" :class="{active: index+1===currentPage}"
                          @click="paginationClickable && setPage(index+1)"></span>
        </div>
    </div>
</template>

<script>
    let VERTICAL = 'vertical';
    let HORIZONTAL = 'horizontal';
export default {
    name: 'swiper',
    props: {
        direction: {
            type: String,
            default: VERTICAL,
            validator: function(value) { return [VERTICAL, HORIZONTAL].indexOf(value) > -1 }
        },
        mousewheelControl: {
            type: Boolean,
            default: true
        },
        performanceMode: {
            type: Boolean,
            default: false
        },
        paginationVisible: {
            type: Boolean,
            default: false
        },
        paginationClickable: {
            type: Boolean,
            default: false
        },
        loop: {
            type: Boolean,
            default: false
        },
        speed: {
            type: Number,
            default: 500
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        autoplaytime:{
            type: Number,
            default:1000
        }
    },
    data:function(){
        return {
            currentPage: 1,
            lastPage: 1,
            translateX: 0,
            translateY: 0,
            startTranslate: 0,
            delta: 0,
            dragging: false,
            startPos: null,
            transitioning: false,
            slideEls: [],
            translateOffset: 0,
            transitionDuration: 0,
            timer:null,
            timeOutTimer:null
        }
    },
    computed:{
        pos : function(){
            return {
                "transform":"translate3d("+this.translateX + "px, "+ this.translateY + "px, 0)",
                "transition-duration":this.transitionDuration + "ms"
            }
        }
    },
    mounted:function(){
        var timer = setInterval(function(){
            if(this.$refs["swiper-wrap"].children.length > 1){
                clearInterval(timer);
                timer = null;
                this._onTouchMove = this._onTouchMove.bind(this);
                this._onTouchEnd = this._onTouchEnd.bind(this);
                this.slideEls = [].map.call(this.$refs["swiper-wrap"].children, function(el){ return el });
                if (this.loop) {
                    this.$nextTick(function () {
                        this._createLoop();
                        this.setPage(this.currentPage, true);
                    });
                } else {
                    this.setPage(this.currentPage);
                }
                this.autoplay && this._autoPlay();
            }
        }.bind(this),200);
    },
    methods: {
        _autoPlay:function(){
            this.timer = setInterval(function(){
                this.next();
            }.bind(this),this.autoplaytime);
        },
        next:function(){
            var page = this.currentPage;
            if (page < this.slideEls.length || this.loop) {
                this.setPage(page + 1);
            } else {
                this._revert();
            }
        },
        prev:function(){
            var page = this.currentPage;
            if (page > 1 || this.loop) {
                this.setPage(page - 1);
            } else {
                this._revert();
            }
        },
        setPage:function(page, noAnimation) {
            var self = this;
            this.lastPage = this.currentPage;
            if (page === 0) {
                this.currentPage = this.slideEls.length;
            } else if (page === this.slideEls.length + 1) {
                this.currentPage = 1;
            } else {
                this.currentPage = page;
            }
            if (this.loop) {
                if (this.delta === 0) {
                    this._setTranslate(self._getTranslateOfPage(this.lastPage));
                }
                setTimeout(function () {
                    self._setTranslate(self._getTranslateOfPage(page));
                    if (noAnimation) return;
                    self._onTransitionStart();
                }, 0);
            } else {
                this._setTranslate(this._getTranslateOfPage(page));
                if (noAnimation) return;
                this._onTransitionStart();
            }
        },
        isHorizontal:function() {
            return this.direction === HORIZONTAL;
        },
        isVertical:function() {
            return this.direction === VERTICAL;
        },
        _onTouchStart:function(e) {
            this.startPos = this._getTouchPos(e);
            this.delta = 0;
            this.startTranslate = this._getTranslateOfPage(this.currentPage);
            this.startTime = new Date().getTime();
            this.dragging = true;
            this.transitionDuration = 0;
            // 清除轮播定时器
            clearInterval(this.timer);
            this.timer = null;
            var swiper = this.$refs["swiper"];
            swiper.addEventListener('touchmove', this._onTouchMove, false);
            swiper.addEventListener('touchend', this._onTouchEnd, false);
            swiper.addEventListener('mousemove', this._onTouchMove, false);
            swiper.addEventListener('mouseup', this._onTouchEnd, false);
        },
        _onTouchMove:function(e) {
            this.delta = this._getTouchPos(e) - this.startPos;
            if (!this.performanceMode) {
                this._setTranslate(this.startTranslate + this.delta);
                this.$emit('slider-move', this._getTranslate());
            }
            // 阻止默认行为
            if (this.isVertical() || this.isHorizontal() && Math.abs(this.delta) > 0) {
                e.preventDefault();
            }
        },
        _onTouchEnd:function(e) {
            if(this.timeOutTimer === null && this.autoplay){
                this.timeOutTimer = setTimeout(function(){
                    this._autoPlay();
                    clearTimeout(this.timeOutTimer);
                    this.timeOutTimer = null;
                }.bind(this),2000);
            }
            this.dragging = false;
            this.transitionDuration = this.speed;
            var isQuickAction = new Date().getTime() - this.startTime < 1000;
            if (this.delta < -100 || (isQuickAction && this.delta < -15)) {
                this.next();
            } else if (this.delta > 100 || (isQuickAction && this.delta > 15)) {
                this.prev();
            } else {
                this._revert();
            }
            var swiper = this.$refs["swiper"];
            swiper.removeEventListener('touchmove', this._onTouchMove);
            swiper.removeEventListener('touchend', this._onTouchEnd);
            swiper.removeEventListener('mousemove', this._onTouchMove);
            swiper.removeEventListener('mouseup', this._onTouchEnd);
        },
        _onWheel:function(e) {
            if (this.mousewheelControl) {
                // TODO Support apple magic mouse and trackpad.
                if (!this.transitioning) {
                    if (e.deltaY > 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                }
                if (this._isPageChanged()) e.preventDefault();
            }
        },
        _revert:function() {
            this.setPage(this.currentPage);
        },
        _getTouchPos:function(e) {
            var key = this.isHorizontal() ? 'pageX' : 'pageY';
            return e.changedTouches ? e.changedTouches[0][key] : e[key];
        },
        _onTransitionStart:function() {
            this.transitioning = true;
            this.transitionDuration = this.speed;
            if (this._isPageChanged()) {
                this.$emit('slide-change-start', this.currentPage);
            } else {
                this.$emit('slide-revert-start', this.currentPage);
            }
        },
        _onTransitionEnd:function() {
            this.transitioning = false;
            this.transitionDuration = 0;
            this.delta = 0;
            if (this._isPageChanged()) {
                this.$emit('slide-change-end', this.currentPage);
            } else {
                this.$emit('slide-revert-end', this.currentPage);
            }
        },
        _isPageChanged:function() {
            return this.lastPage !== this.currentPage;
        },
        _setTranslate:function(value) {
            var translateName = this.isHorizontal() ? 'translateX' : 'translateY';
            this[translateName] = value;
        },
        _getTranslate:function(){
            var translateName = this.isHorizontal() ? 'translateX' : 'translateY';
            return this[translateName];
        },
        _getTranslateOfPage:function(page) {
            if (page === 0) return 0;
            var propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight';
            return -[].reduce.call(this.slideEls, function (total, el, i) {
                    return i > page - 2 ? total : total + el[propName];
                }, 0) + this.translateOffset;
        },
        _createLoop:function() {
            var propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight';
            var swiperWrapEl = this.$refs["swiper-wrap"];
            var duplicateFirstChild = swiperWrapEl.firstElementChild.cloneNode(true);
            var duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true);
            swiperWrapEl.insertBefore(duplicateLastChild, swiperWrapEl.firstElementChild);
            swiperWrapEl.appendChild(duplicateFirstChild);
            this.translateOffset = -duplicateLastChild[propName];
        }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .swiper {
        position: relative;
        overflow: hidden;

        .swiper-wrap {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            transition: all 0ms ease;

            > div {
                overflow: hidden;
                flex-shrink: 0;
                width: 100%;
                height: 100%;
            }
        }

        &.horizontal .swiper-wrap {
            flex-direction: row;
        }
        &.vertical .swiper-wrap {
            flex-direction: column;
        }

        .swiper-pagination {
            position: absolute;
            .swiper-pagination-bullet {
                width:18px;
                height: 18px;
                border-radius: 50%;
                background-color: #fff;
                opacity: .5;
                transition: all .5s ease;
            }

            .swiper-pagination-bullet.active {
                background: #007aff;
                opacity: 1;
            }
        }

        &.vertical .swiper-pagination {
            right: 10px;
            top: 50%;
            transform: translate3d(0, -50%, 0);

            .swiper-pagination-bullet {
                display: block;
                margin: 12px 0;
            }
        }

        &.horizontal .swiper-pagination {
            bottom: 10px;
            width: 100%;
            text-align: center;

            .swiper-pagination-bullet {
                display: inline-block;
                margin: 0 3px;
            }
        }
    }
</style>
