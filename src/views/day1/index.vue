<template>
    <div>
        <h1>第一天</h1>
        <h2>{{ msg }}</h2>
        <input type="text" v-model="msg" />
        <div>
            <p>姓名：{{ user.name }}</p>
        </div>
        <el-divider background-color="#999"></el-divider>
        <h1>methods方法</h1>
        <p>场景1：</p>
        <!-- 这是element-ui组件不用管，文档https://element.eleme.cn/#/zh-CN/component/button -->
        <el-button type="primary" size="small" @click="handClick">点击事件</el-button>
        <p>场景2：</p>
        <p>num1和num2的和：{{ getAdd() }}</p>
        <p>num1和num2的和用参数传值计算：{{ getSum(num1, num2) }}</p>
        <el-divider></el-divider>
        <h2>v-text和v-html</h2>
        <div>
            <p>v-text：<span v-text="textStr"></span></p>
            <p>v-html：<span v-html="htmlStr"></span></p>
        </div>
        <p><b>区别：</b>后者会解析html标签</p>
        <el-divider></el-divider>
        <h2>v-show和v-if</h2>
        <div v-show="isShow">我是v-Show</div>
        <div v-if="isShow">我是v-If</div>
        <el-button type="success" @click="switchShow">切换isShow状态</el-button>
        <p><b>区别：</b>后者是决定渲不渲染，前者始终是渲染的，只是控制CSS : display</p>
        <el-divider></el-divider>
        <h2>dom元素属性写法</h2>
        <div :title="title">我是一个DIV</div>
        <el-button type="primary" @click="switcTitle">切换title值</el-button>
        <el-divider></el-divider>
        <h2>v-for的用法</h2>
        <ul>
            <li v-for="item in userList" :key="item.id">
                <span :style="{'margin-right':15+'px','color':'red'}">姓名：{{item.name}}</span>
                <span>年龄：{{item.age}}</span>
            </li>
        </ul>
        <!--  v-for="(item,i) in list" -->
        <div v-for="(item, index) in userList" :key="item.id">
            名字：{{ item.name }} 年龄：{{ item.age }} 索引{{ index }}
        </div>
        <!--  v-for="(v,k,i) in obj" -->
        <div v-for="(value, key, index) in userInfo" :key="key">
            键：{{ key }} 值：{{ value  }} 索引：{{ index }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'day-onepage',
    data(){
        return{
            msg:'初试Vue',
            user:{
                name:"核污染"
            },
            num1:99,
            num2:33,
            textStr:"<i>我是v-text</i>",
            htmlStr:"<em>我是v-html</em>",
            isShow: true,
            title:"我是一个div",
            userList: [
                { id: 1, name: '张三', age: 33 },
                { id: 2, name: '法外狂徒', age: 28 }
            ],
            userInfo:{
                name:"太平洋",
                info:"核污染"
            }
        }
    },
    methods: {
        handClick(){
            this.user.name = this.user.name === '核污染' ? '太平洋' : '核污染'
        },
        getAdd(){
            return this.num1 + this.num2
        },
        getSum(n1,n2){
            return n1 + n2
        },
        switchShow(){
            return this.isShow = !this.isShow
        },
        switcTitle(){
            return this.title = "我还是一个div"
        }
    },
}
</script>
<style lang="scss">
.el-divider {
    background-color: #666;
}
ul{
    padding: 0;
}
ul li{
    list-style: none;
}
</style>