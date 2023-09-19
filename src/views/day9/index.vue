<template>
    <div>
        <h1>第九天</h1>
        <Child  @parentFun="parentFun"
                :msg1="msg1"
                :msg2="msg2"
                :msg3="msg3"
                class="parent"
                type="success"
                ref="child"></Child>
        <el-divider></el-divider>
        <Child3></Child3>
        <el-divider></el-divider>
        <MyInput v-model="msg4"></MyInput>
        <el-divider></el-divider>
        <MySelect v-model="subject"></MySelect>
        <el-divider></el-divider>
        <MySync :num1.sync="num1" :num2.sync="num2"></MySync>
    </div>
</template>
<script>
import Child from './components/Child.vue'
import Child3 from './components/Child3.vue'
import MyInput from './components/MyInput'
import MySelect from './components/MySelect'
import MySync from './components/MySync'
export default {
    name: 'day9-page',
    components:{
        Child,
        Child3,
        MyInput,
        MySelect,
        MySync
    },
    data(){
        return{
            msg1: '子组件msg1',
            msg2: '子组件msg2',
            msg3: '子组件msg3',
            parentmsg: '父组件msg数据',
            msg4: '123',
            subject: '1',
            num1: '1',
            num2: '2'
        }
    },
    provide() {
        return {
            provide1: 'provide1数据',
            provide2: 'provide2数据'
        }
    },
    methods:{
        parentFun(val){
            console.log('父组件方法被动用，获得子组件'+val)
        }
    },
}
</script>
<style lang="scss" scoped>

</style>