<template>
    <div>
        <h2>自定义指令</h2>
        <input type="text" v-focus="{h:36,w:210}" />
        <el-divider></el-divider>
        <div><el-button type="success" v-debounce="debounceClick">防抖</el-button></div>
        <div v-color="'red'">全局指令指定颜色1</div>
        <div v-color="'blue'">全局指令指定颜色2</div>
        <el-divider></el-divider>
        <h2>计算属性</h2>
        <p>计算属性第一种----姓名：<span v-color="'red'">{{ fullName }}</span></p>
        <h4> 计算属性第二种区别计算属性默认只有 getter，不过在需要时你也可以提供一个setter</h4>
        <p>计算属性第二种----姓名：{{ fullName2 }}</p>
        <el-button type="primary" @click="changeFullName2">改变fullName2得值</el-button>
        <el-divider></el-divider>
        <h2>侦听器</h2>
        <p>第一种侦听器写法绑定的值msg：{{ msg }}</p>
        <el-button type="primary" @click="msg = '向阳而生'">改变msg得值</el-button>
        <p>第二种侦听器写法绑定的值msg2：{{ msg2 }}</p>
        <el-button type="primary" @click="msg2 = '为万世开太平'">改变msg2得值</el-button>
        <p>第二种侦听器写法深度监听</p>
        <p>obj:{{ obj }}</p>
        <el-button type="success" @click="obj = { name: '李四', age: 20 }">改变obj得值</el-button>
        <el-button type="success" @click="obj.age++">改变wobj对象age得值</el-button>
        <p>当改变obj对象age得值，如果deep为fasle，无法</p>
    </div>
</template>
<script>
export default {
    name: 'day-3page',
    data(){
        return{
            firstName: '谢',
            lastName: '灵运',
            firstName2: '李',
            lastName2: '四',
            msg: '一路朝阳',
            msg2: '为往圣继绝学',
            obj: { name: '张三', age: 20 }
        }
    },
    watch:{
        msg(newVal, oldVal) {
            console.log('第一种watch写法监听到了')
            console.log(newVal, oldVal)
        },
        msg2:{
            immediate: true, // 进入页面监听，刷新， console控制台打印第二种watch写法监听到了
            deep: true, // 深度监听
            handler(newVal, oldVal) {
                console.log('第二种watch写法监听到了')
                console.log(newVal, oldVal)//进入页面时newVal 是没有的
            }
        },
        obj:{
            immediate: true,
            deep: false, //false 值改变 但无法监听到属性值的改变
            handler(newVal, oldVal) {
                console.log('第二种侦听器写法深度监听到了')
                console.log(newVal, oldVal)
            }
        }
    },
    computed:{
        fullName() {
            return this.firstName + ' ' + this.lastName
        },
        fullName2:{
            // getter
            get: function() {
                return this.firstName2 + ' ' + this.lastName2
            },
            // setter
            set: function(newValue) {
                const names = newValue.split(' ')
                this.firstName2 = names[0]
                console.log(names)
                this.lastName2 = names[names.length - 1]
            }
        }
    },
    directives: {
    // 属性名：指令的名称
    // 属性值：指令配置对象
    focus: {
            //el dom元素
            inserted(el, binding) {
                console.log('binding: ', binding)
                // binding 指令的信息对象
                // 其中有一个 value 就是指令的值
                el.style.width = binding.value.w + 'px'
                el.style.height = binding.value.h + 'px'
                el.focus()
            }
        }
    },
    methods: {
        debounceClick() {
            console.log('只触发一次')
        },
        changeFullName2() {
            this.fullName2 = '张 三'
            // 第一种写法不会生效它只有 getter
            // this.fullName = '张 三'
        }
    }
}
</script>
<style lang="scss" scoped>

</style>