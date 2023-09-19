<template>
    <div>
        <h1>type:{{ type }}</h1>
        <div class="main-default">
            <!-- 可写默认值当index.vue中默认插槽没值展示 -->
            <slot :num3="num3">可写默认值</slot>
        </div>
        <slot name="name1" :num1="num1"></slot>
        <slot name="name2" :num2="num2"></slot>
    </div>
</template>
<script>
export default {
    name:'slot-main',
    data() {
        return {
            num1: 'slotmain-1',
            num2: 'slotmain-2',
            num3: 'slotmain-3'
        }
    },
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="" scoped>
    
</style>