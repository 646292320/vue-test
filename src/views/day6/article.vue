<template>
    <div>
        <h1>第六天</h1>
        <p>这是文章页面</p>
        <p>文章ID:{{ $route.params.id }}</p>
        <p>文章ID来自计算属性:{{ pageId }}</p>
        <el-button type="primary" size="small" @click="jumpBack"
        >点击事件返回上一页</el-button
        >
        <el-button type="primary" size="small" @click="jumpother"
        >进入另一篇文章</el-button
        >
        <p>{{ value }}</p>
    </div>
</template>
<script>
export default {
    name: 'day-6page',
    data(){
        return{
            value: '',
        }
    },
    computed: {
        pageId() {
            return this.$route.params.id
        }
    },
    watch: {
        // 对路由变化作出响应,当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用,
        $route(to, from) {
            console.log('watch-from: ', from)
            console.log('watch-to: ', to)
        if (to.params.id === '3333') {
            this.value = 1
        } else {
            this.value = ''
        }
        }
    },
    mounted() {
        //
        console.log(
            'mounted:可以在这里面请求数据,但是例如从 /user/foo 导航到 /user/bar这种情况不会触发,就要watch里面请求'
        )
    },
    methods: {
        jumpBack() {
            this.$router.go(-1)
        },
        jumpother() {
            this.$router.push('/day6/3333')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>