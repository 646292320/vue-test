<template>
    <div>
        <h1>第四天</h1>
        <page-header></page-header>
        <test-global 
        :value="value"
        :name="name"
        :published="isPublished"
        :commentItem="commentItem"
        :author="author"
        @getValue="getValue"
        ></test-global>
        <p>子组件传过来的值：{{val}}</p>
        <page-footer></page-footer>
    </div>
</template>
<script>

import PageHeader from './components/page-header'
import PageFooter from './components/page-footer'
export default {
    name: 'day-4page',
    components: {
        PageHeader,
        PageFooter
    },
    data(){
        return{
            value: 1,
            name: '小书童',
            isPublished: false,
            commentItem: ['电脑', '电话', '电冰箱'],
            author: { '小陈': 1 },
            val: 0
        }
    },
    methods:{
        getValue(val) {
            console.log(val)
            this.val = val
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>