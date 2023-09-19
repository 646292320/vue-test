<template>
    <div>
        <h2>第11天</h2>
        <component :is="assembly" />
        <div>
            <el-button type="primary" @click="changeAssembly(1)">son1</el-button>
            <el-button type="primary" @click="changeAssembly(2)">son2</el-button>
            <el-button type="primary" @click="changeAssembly(3)">son3</el-button>
        </div>
        <el-divider></el-divider>
        <!-- appear默认初始化的时候就有动画 -->
        <!-- appear相当于写了hello-enter-active的class -->
        <transition name="hello" appear>
            <h1 v-show="initshow">你好啊</h1>
        </transition>
        <el-button type="success" @click="initshow = !initshow">点击切换</el-button>
        <el-divider></el-divider>
        <!-- animate.css案例1 -->
        <transition name="slide-fade">
            <div class="box" v-show="isShow">box</div>
        </transition>
        <el-button type="warning" @click="isShow = !isShow">切换</el-button>
        <el-divider></el-divider>
        <!-- animate.css案例2 -->
        <transition
        name="fade"
        appear
        :duration="{ enter: 1500, leave: 1500 }"
        enter-active-class="animate__animated animate__swing"
        leave-active-class="animate__animated animate__backOutLeft"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        >
        <h1 v-if="isShow2" class="home-title">欢迎来到 Vue</h1>
        </transition>
        <el-button type="primary" @click="isShow2 = !isShow2">动画</el-button>
        <el-divider></el-divider>
        <input type="text" v-model.number="num" />
        <p>{{ agentNum }}</p>
        <ul>
            <transition-group move-class="move">
                <li @click="change" v-for="item in items" :key="item">{{ item }}</li>
            </transition-group>
        </ul>
    </div>
</template>
<script>
import gsap from "gsap"
import _ from "lodash"
export default {
    name: 'day11-page',
    data(){
        return{
            assembly: 'ComSon1',
            initshow: true,
            isShow: true,
            isShow2: true,
            newVal: '',
            items: ['张三', '李四', '王五'],
            num: '',
            agentNum: 0
        }
    },
    components: {
        ComSon1: () => import('./components/ComSon1'),
        ComSon2: () => import('./components/ComSon2'),
        ComSon3: () => import('./components/ComSon3')
    },
    methods:{
        changeAssembly(val){
            if (val === 1) {
                this.assembly = 'ComSon1'
            } else if (val === 2) {
                this.assembly = 'ComSon2'
            } else if (val === 3) {
                this.assembly = 'ComSon3'
            }
        },
        beforeEnter(el) {
            // 动画/过渡准备进入前触发
            console.log('beforeEnter:', el)
        },
        enter(el) {
            // 元素进入 enter-active触发
            console.log('enter:', el)

            // done() //执行done的时候entert-active过渡结束
        },
        afterEnter(el) {
            // 进入过渡/动画结束后
            console.log('afterEnter:', el)
        },
        enterCancelled(el) {
            // 进入动画过程中可以去掉进入动画
            console.log('enterCancelled:', el)
        },
        change() {
            this.items = _.shuffle(this.items)
        },
    },
    watch: {
        num(newVal) {
            gsap.to(this.$data, { duration: 0.5, agentNum: newVal })
            // gsap.to(targets, vars)
            // 产生从初始位置（或状态）到目标位置（或状态）的动画
            // targets： 产生动画的对象
            // vars： 目标状态参数https://blog.csdn.net/qq_37209594/article/details/124124721
        }
    },
    // computed: {
    //     animatedNum() {
    //         return this.agentNum
    //     }
    // },
}
</script>
<style lang="scss" scoped>
    // 进入时的动画
.hello-enter-active {
  animation: donghua 1s;
}
// 离开时的动画
.hello-leave-active {
  animation: donghua 1s reverse;
}
//动画 动画名叫'donghua'
@keyframes donghua {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
.slide-fade-enter-active {
  animation: bounce 0.5s;
}
.slide-fade-leave-active {
  animation: backOutDown 0.5s;
}
ul {
    padding: 0;
  list-style: none;
  cursor: pointer;
}
.move {
  transition: 0.5s;
}
</style>