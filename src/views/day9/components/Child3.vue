<template>
    <div>
        <h2>另一个儿子组件</h2>
        <p>
            兄弟组件通信可以通过一个事件中心EventBus实现，既新建一个Vue实例来进行事件的监听，触发和销毁。
        </p>
        <p>获取到的数据：{{ msg }}</p>
    </div>
</template>
<script>
export default {
    name: 'child3-page',
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        this.$EventBus.$on('msg', (data) => {
            this.msg = data
        })
    },
    beforeDestroy() {
        // 移除监听事件"msg"
        this.$EventBus.$off('msg')
    }
}
</script>