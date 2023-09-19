<template>
    <div>
        <h2>第10天</h2>
        <h4>获取vuex里面设置的变量</h4>
        <p>名字1：{{ name1 }}</p>
        <p>名字2：{{ $store.state.name }}</p>
        <p>名字3：{{ name }}</p>
        <p>number:{{ number }}</p>
        <el-divider></el-divider>
        <h2>获取vuex里面设置的getters,类似计算属性--修饰</h2>
        <p>getters1:{{ $store.getters.getMessage }}</p>
        <p>getters2:{{ getMessage }}</p>
        <el-divider></el-divider>
        <el-button type="primary" @click="handClick"
        >改变number得值</el-button
        >
        <el-button type="primary" @click="handClick2"
        >改变number得值传参</el-button
        >
        <el-button type="primary" @click="handClick3"
        >异步改变number得值传参</el-button
        >
        <el-divider></el-divider>
        <p>store2中的名字：{{ store2name }}</p>
        <p>store2中的getters：{{ store2GetMsg }}</p>
        <p>store2中的number:{{ store2number }}</p>
        <el-button type="primary" size="small" @click="handClick4"
        >改变store2number得值</el-button
        >
        <el-button type="primary" size="small" @click="handClick5"
        >改变number得值传参</el-button
        >
        <el-button type="primary" size="small" @click="handClick6"
        >异步改变number得值传参</el-button
        >
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'day10-page',
    computed:{
        name1() {
            return this.$store.state.userName    
        },
        // ...mapState({ aliasName: 'name', num: 'number' })
        ...mapState(['name','number']),
        ...mapGetters(['getMessage']),
        ...mapState('store2',['store2name','store2number']),
        ...mapGetters('store2',['store2GetMsg']),
    },
    methods:{
        ...mapMutations(['setNumber']),
        ...mapActions(['setNum']),
        ...mapMutations('store2', ['store2setNumber']),
        ...mapActions('store2', ['store2setNum']),
        handClick(){
            // this.$store.commit('setNumber')
            this.setNumber({})
        },
        handClick2(){
            // this.$store.commit('setNumber',99)
            this.setNumber({number:99})
        },
        handClick3(){
            // this.$store.dispatch('setNum', 6)
            this.setNum(7)
        },
        handClick4(){
            // this.$store.dispatch('setNum', 6)
            this.store2setNumber()
        },
        handClick5(){
            // this.$store.dispatch('setNum', 6)
            this.store2setNumber(7)
        },
        handClick6(){
            // this.$store.dispatch('setNum', 6)
            this.store2setNum(17)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>