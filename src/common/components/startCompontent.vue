<template>
    <ul class="star-commend fr">
        <li class="icon" :class="{active:rank>=1}"></li>
        <li class="icon" :class="{active:rank>=2}"></li>
        <li class="icon" :class="{active:rank>=3}"></li>
        <li class="icon" :class="{active:rank>=4}"></li>
        <li class="icon" :class="{active:rank>=5}"></li>
    </ul>
</template>
<script>
export default {
    name: 'start-show',
    props: ['rank'],
    data() {
        return {}
    },
    mounted(){
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .star-commend {
        font-size: 0;
        margin: 0 auto;
        padding: 0.22rem 0;
    }
    .star-commend li.icon {
        display: inline-block;
        padding:0;
        width: 0.475rem;
        height: 0.475rem;
        margin-right: 0.156rem;
        background: url("../../image/star2.png") no-repeat center;
        background-size: 100% 100%;
    }
    .star-commend li.icon.active{
        background:url("../../image/star1.png") no-repeat center;
        background-size:100% 100%;
    }
    .star-commend  li:last-child{
        margin-right:0;
    }
</style>