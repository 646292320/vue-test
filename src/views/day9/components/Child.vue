<template>
    <div>
        <h2>儿子组件</h2>
        <p>msg1:{{ msg1 }}</p>
        <!-- <p>msg2:{{ msg2 }}</p> -->
        <button @click="getParentFun">调用父组件方法</button>
        <p>接收父组件数据：{{ $parent.parentmsg }}</p>
        <el-divider></el-divider>
        <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
    </div>
</template>
<script>
import Child2 from './Child2.vue'
export default {
    name: 'child-page',
    components: {
        Child2,
    },
    props: {
        msg1: {
            type: String,
            default: ''
        },
        // msg2: {
        //     type: String,
        //     default: ''
        // }
    },
    data(){
        return{

        }
    },
    methods:{
        getParentFun(){
            this.$listeners.parentFun('我是儿子组件数据')
            //this.$emit('parentFun', '我是儿子组件数据')
        }
    },
    created() {
        // 获取父组件中所有绑定属性  被使用的就不会获取到
        console.log(this.$attrs) // {msg2: '子组件msg2', msg3: '子组件msg3', type: 'success'}
        // 获取父组件中所有绑定方法
        console.log(this.$listeners) // {parentFun:f}
    },
    mounted() {
        // $parent: 子组件获取父组件Vue实例，可以获取父组件的属性方法等
        // $children: 父组件获取子组件Vue实例，是一个数组，是直接儿子的集合，但并不保证子组件的顺序
        console.log('parent.msg1:', this.$parent.msg1)
        console.log('children:', this.$children) // [Child实例]
    }
}
</script>