<template>
    <div>
        <h1>第二天</h1>
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>品牌名称</th>
                    <th>创建时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="brand in brandList" :key="brand.id">
                    <td>{{ brand.id }}</td>
                    <td>{{ brand.brandName }}</td>
                    <td>{{ brand.createTime }}</td>
                    <td>
                        <a href="#" @click.prevent="delBrand(brand.id)">删除</a>
                    </td>
                </tr>
                <!-- 条件渲染使用v-if  显示的条件：数组没有长度 -->
                <tr v-if="brandList.length === 0">
                    <td colspan="4" style="text-align: center">暂无数据</td>
                </tr>
            </tbody>
        </table>
        <el-divider></el-divider>
        <h2>class语法</h2>
        <h4>class第一种写法：</h4>
        <div :class="{ active: isActive, font30: isBig }">class第一种写法</div>
        <h4>class第二种对象写法：</h4>
        <div :class="classObject">class第二种对象写法</div>
        <h4>class第三种数组写法：</h4>
        <div :class="[active, font30]">class第三种数组写法1</div>
        <div :class="[isActive2 ? active : '', font30]">class第三种数组写法2</div>
        <h4>class第四种数组对象混合写法：</h4>
        <div :class="[{ active: isActive2 }, font30]">
            class第四种数组对象混合写法
        </div>
        <el-divider></el-divider>
        <h2>style语法</h2>
        <h4>
            style第一种写法：font-Size要写成fontSize,不是连写的都改成驼峰模式或者加引号
        </h4>
        <div :style="{ color: activeColor, fontSize: fontSize }">
            style第一种写法
        </div>
        <h4>style第二种对象写法，定义在data</h4>
        <div :style="styleObj">style第二种对象写法</div>
        <h4>style第三种数组写法，定义在data</h4>
        <div :style="[style1, style2]">style第三种数组写法</div>
        <h4>style第四种数组对象混合写法：</h4>
        <div :style="[isActive3 ? style1 : '', style2]">
        style第四种数组对象混合写法
        </div>
        <el-divider></el-divider>
        <h2>v-model语法糖</h2>
        <input type="text" :value="value" @input="value = $event.target.value" />
        <input :style="{'marginLeft':20+'px'}" type="text" v-model="value" />
        <el-divider></el-divider>
        <h2>表单绑定</h2>
        <!-- 输入框 -->
        <input type="text" v-model="str" />
        <hr />
        <!-- 下拉框 subject选中的数据 -->
        <select v-model="subject">
        <!-- :value和value -->
        <!-- 第一种 -->
            <!-- <option :value="1">前端</option>
            <option :value="2">java</option>
            <option :value="3">UI</option> -->
            <!-- 第二种和第一种区别value是绑定的字符串，第一种是数字 -->
            <!--    <option value="1">前端</option>
            <option value="2">java</option>
            <option value="3">UI</option> -->
        <!-- 第三种绑定变量 -->
            <option :value="selectOptions.one">前端</option>
            <option :value="selectOptions.two">java</option>
            <option :value="selectOptions.three">UI</option>
        </select>
        <hr />
        <!-- 复选框 -->
        <!-- 1. 单个复选框  表示布尔类型的值  true 选中 false 不选中 -->
        <input type="checkbox" v-model="isChecked" />
        <hr />
        <!-- 2. 多个复选框跟下拉框绑定值类似也可以绑定变量，自行尝试  selectArr选中的数据-->
        <input type="checkbox" value="basketball" v-model="selectArr" /> 篮球
        <input type="checkbox" value="football" v-model="selectArr" /> 足球
        <input type="checkbox" value="volleyball" v-model="selectArr" /> 排球
        <hr />
        <!-- 单选框 默认gender 选中-->
        <input type="radio" value="男" v-model="gender" /> 男
        <input type="radio" value="女" v-model="gender" /> 女
        <!-- 文本域 -->
        <hr />
        <textarea v-model="text"></textarea>
        <el-divider></el-divider>
        <h2>
            v-cloak
        </h2>
        <p>
            在使用{{}}展示或更新页面数据时：当网速比较慢时，会出现一个不好的过度现象
        </p>
        <h2 v-cloak>v-cloak:{{ msg }}</h2>
        <p>或者用v-text</p>
        <h2>
            v-text:
        <span v-text="msg"></span>
        </h2>
        <el-divider></el-divider>
        <h2>v-once,只渲染一次，通常展示初始值</h2>
        <div v-once>初始值：{{ count }}</div>
        <div>累加值：{{ count }}</div>
        <el-button type="primary" @click="count++">加一</el-button>
        <el-divider></el-divider>
        <h2>过滤器--跟方法类似，方便在模板里面处理变量，比如变量是时间戳，变成日期展示</h2>
        <p>过滤器1：{{ message | capitalize }}</p>
        <p>过滤器2：{{ message | capitalize("!") }}</p>
        <el-divider></el-divider>
        <h2>vue获取原生dom</h2>
        <div ref="container">我是一个divdom元素</div>
        <el-button :style="{'margin':20+'px'}" type="success" @click="getHtml">获取container的html</el-button>
    </div>
</template>
<script>
export default {
    name: 'day-2page',
    data(){
        return{
            brandList: [
                // { id: 1, brandName: '宝马', createTime: '2020-06-01 12:12:12' },
                // { id: 2, brandName: '奔驰', createTime: '2021-06-01 12:12:12' },
                // { id: 3, brandName: '保时捷', createTime: '2020-06-01 12:12:12' },
                // { id: 4, brandName: '阿仕顿马丁', createTime: '2025-06-01 12:12:12' }
            ],
            isActive: true,
            isBig: true,
            classObject: {
                current: true,
                font16: true
            },
            active: 'active',
            font30: 'font30',
            isActive2: false,
            isActive3: true,
            activeColor: 'blue',
            fontSize: '18px',
            styleObj:{
                color: 'orange', fontSize: '20px' , // 或者{ color: 'orange', 'font-size': '20px' }
            },
            style1: { color: 'pink' },
            style2: {
                fontSize: '24px'
            },
            value: 111,
            str: "请输入",
            selectOptions: {
                one: 'one',
                two: 'two',
                three: 'three' 
            },
            subject: 'one',
            isChecked: true,
            selectArr: ['basketball'],
            gender: '女',
            text: '文本框',
            msg: 'v-cloak测试',
            count: 10,
            message: 'abDS'
        }
    },
    methods:{
        delBrand(id){
            // 1. 根据ID找到索引
            const index = this.brandList.findIndex((item) => item.id === id)
            // 2. 根据索引删除数据
            this.brandList.splice(index, 1)
        },
        getHtml(){
            console.log(this.$refs.container)
        }
    },
    filters: {
    capitalize(value, txt = '') {
        if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1) + txt
        }
    },
}
</script>
<style lang="scss" scoped>
    table{
        width: 500px;
        margin: 0 auto;
    }
    .active{
        color: red;
    }
    .font30{
        font-size: 30px;
    }
    .current{
        color: green;
    }
    .font16{
        font-size: 16px;
    }
    [v-cloak]{
        display: none;
    }
</style>