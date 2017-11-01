<template>
    <div class="model-box" @touchmove.prevent="">
        <div class="model-text">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'myAlertTip',
    props: ['text', 'time', 'isShow'],
    data() {
        return {}
    },
    mounted(){
        this.$nextTick(
            function() {
                setTimeout(() => {
                    this.$emit('close-tip')
                }, this.time)
            }
        )
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.model-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: rgba(0,0,0,0);
    .model-text {
        position: absolute;
        font-size: 0.43rem;
        top: 50%;
        left: 50%;
        max-width: 80%;
        color: #fff;
        line-height:1.5;
        text-align: center;
        background-color: rgba(0,0,0,.8);
        transform: translate(-50%,-50%);
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
    }
}
</style>