<template>
    <div>
        <h2>孙子组件</h2>
        <p>msg2:{{ msg2 }}</p>
        <p>$attrs:--- msg2:{{ $attrs.msg3 }}</p>
        <el-button type="warning" @click="getParentFun">调用祖级组件方法</el-button>
        <el-divider></el-divider>
        <p>inject:{{ provide1 }}</p>
        <p>inject:{{ provide2 }}</p>
        <el-button type="primary" @click="postChild3">向child3发数据</el-button>
    </div>
</template>
<script>
export default {
    name: 'child2-page',
    props:{
        msg2:{
            type:String,
            default: ''
        }
    },
    inject: ['provide1', 'provide2'],
    inheritAttrs: false,
    data(){
        return{
            sex: '1'
        }
    },
    methods:{
        getParentFun(){
            // this.$listeners.parentFun('我是孙子组件数据')
            this.$emit('parentFun', '我是孙子组件数据')
        },
        postChild3(){
            this.$EventBus.$emit('msg', '123456789')
        }
    }
}
</script>