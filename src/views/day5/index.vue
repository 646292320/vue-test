<template>
    <div>
        <h1>第五天</h1>
        <h2>插槽</h2>
        <slot-main :type="type">
            <template #default="{ num3 }">
                <div>
                    <p>slotmain---传进来的值：{{ num3 }}</p>
                    <el-divider></el-divider>
                    <p>mixin混入:{{ message }}--{{ foo }}--{{ name }}</p>
                    <el-divider></el-divider>
                </div>
            </template>
            <template v-slot:name1="{ num1 }"
                ><p>name1插槽---传进来的值：{{ num1 }}</p>
                <el-divider></el-divider>
                </template
            >
            <template #name2="{ num2 }"
                ><p>name2插槽---传进来的值：{{ num2 }}</p></template
            >
        </slot-main>
    </div>
</template>
<script>
import SlotMain from './components/slot-main'
import mixin from './mixin'
export default {
    name:'page-day5',
    components:{
        SlotMain
    },
    mixins: [mixin],
}
</script>
<style lang="scss" scoped>

</style>