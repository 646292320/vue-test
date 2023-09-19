<template>
    <div class="page8">
        <h1>第八天</h1>
        <ul>
            <li v-for="item in brandsList" :key="item.id">
                <p>name:{{ item.name }}</p>
                <p>ctime:{{item.ctime | dateFormat}}</p>
                <el-input v-model="item.name" placeholder="请输入品牌"></el-input>
                <el-button
                type="primary"
                size="small"
                @click="updatebrand(item.id, item.name)"
                >修改品牌</el-button
                >
                <el-button type="primary" size="small" @click="deletebrand(item.id)"
                >删除品牌</el-button
                >
            </li>
        </ul>
        <el-divider></el-divider>
        <p>get请求第一种：{{ brandone }}</p>
        <p>get请求第二种：{{ brandone1 }}</p>
        <el-divider></el-divider>
        <h2>post请求</h2>

        <el-input v-model="brandName" placeholder="请输入品牌"></el-input>
        <el-button type="primary" @click="addbrand"
        >添加品牌</el-button
        >
        <el-divider></el-divider>
        <h2>生命周期</h2>
        <p ref="p1">初始化页面</p>
        <h2>定时器</h2>
        <p>{{ num }}</p>
        <el-button type="primary" @click="run">启动定时器</el-button>
    </div>
</template>
<script>
export default {
    name: 'day-8page',
    data(){
        return{
            brandsList: [],
            brandone: [],
            brandone1: [],
            brandName: '',
            num:1,
            timer: null
        }
    },
    methods:{
        async getbrandsList() {
            const data = await this.$req('/brands', 'get')
            console.log('data: ', data)
            this.brandsList = data
        },
        async updatebrand(id, name){
            let ctime = Date.now()
            const data = await this.$req(`/brands/${id}`,'put',{name,ctime})
            console.log('数据更新',data)
            this.getbrandsList()
            this.$message({
                message: `恭喜你${name}数据更新成功！`,
                type: 'success'
            })
        },
        async deletebrand(id){
            const data = await this.$req(`/brands/${id}`,'delete',{id})
            console.log('删除数据',data)
            this.getbrandsList()
            this.$message({
                message: `恭喜你删除数据成功！`,
                type: 'success'
            })
        },
        async getbrandone() {
            const data = await this.$req('/brands', 'get', { id: 1 })
            console.log('第一种get请求ID: ', data)
            this.brandone = data
        },
        async getbrandone1() {
            const data = await this.$req('/brands/1', 'get')
            console.log('第二种get请求ID: ', data)
            this.brandone1 = data
        },
        async addbrand(){
            let postData = {}
            if(this.brandName !== ''){
                const brandName = this.brandName
                postData = {
                    name: brandName,
                    ctime: Date.now()
                }
            }
            const data = await this.$req('/brands', 'post', postData)
            console.log('添加数据',data)
            this.$message({
                message: '恭喜你，添加成功！',
                type: 'success'
            })
            this.getbrandsList()
        },
        run(){
            this.timer = setInterval(() => {
                // 需要做的事情
                this.num++
                console.log('this.num: ', this.num)
            }, 1000)
        },
        clear(){
            clearInterval(this.timer)
            this.timer = null
        }
    },
    mounted() {
        // 获取dom结构需要在mounted里面
        console.log('mounted:',this.$refs.p1.innerHTML)
    },
    created() {
        //console.log('created:',this.$refs.p1.innerHTML)  获取不到   实例已经被初始化，但是还没有挂载至 $el上
        this.getbrandsList()
        this.getbrandone()
        this.getbrandone1()
    },
    beforeDestroy() {
        // 防止进入其他页面定时器还要运行
        this.clear()
    }
}
</script>
<style lang="scss" scoped>
    .page8{
        padding: 50px;
    }
    ul{
        padding: 0;
    }
    ul li{
        list-style: none;
    }
</style>