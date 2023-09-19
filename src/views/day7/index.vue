<template>
    <div>
        <h1>第七天</h1>
        <h2>图片和图标引入</h2>
        <div>
            <h4>第一张方式：</h4>
            <img src="../../assets/img/logo.png" alt="" />
            <img src="@/assets/img/logo.png" alt="" />
            <!-- ../../相对路径，路径是写死的 -->
            <el-divider></el-divider>
            <h4>第二种</h4>
            <!-- 常用于在业务中要改变图片变量控制import logo from '@/assets/img/logo.png'-->
            <img class="img" :src="logo" />
            <el-button type="success" @click="handClick1"
                >点击事件改变第二种图片地址</el-button
            >
            <el-divider></el-divider>
            <h2>第三种</h2>
            <!-- require 直接写入或者变量接收-->
            <!-- <img :src="require('@/assets/img/logo.png')" /> -->
            <img class="img" :src="pic" />
            <el-button type="primary" @click="handClick2"
                >点击事件改变第三种图片地址</el-button
            >
            <el-divider></el-divider>
            <!-- 第四种方法封装,$utils全局挂载的方法 -->
            <img class="img" :src="$utils.getImg(pic2)" alt="" />
            <el-button type="warning" @click="handClick3"
                >点击事件改变第四种方法图片地址</el-button
            >
            <el-divider></el-divider>
            <!-- css背景图片 -->
            <h2>css背景图片</h2>
            <div class="bgimg"></div>
            <el-divider></el-divider>
            <h2>字体图标</h2>
            <p><i class="iconfont icon-youjiantou"></i></p>
            <p><i class="iconfont icon-xiajiantou"></i></p>
            <h2>svg图标</h2>
            <p>1.如图片方式引入，但是无法改变颜色</p>
            <img :src="tblogo" alt="" />
            <img :src="require('@/assets/img/tb.svg')" />
            <p>1.svg-icon全局组件用的svg-sprite-loader插件封装这种最好</p>
            <svg-icon icon-class="icon-tb" class="icon-tb" />
        </div>
    </div>
</template>
<script>
import logo from '@/assets/img/logo.png'
import pic from '@/assets/img/pic1.png'
import tblogo from '@/assets/img/tb.svg'
export default {
    name: 'day-7page',
    data(){
        return{
            logo,
            pic: require('@/assets/img/logo.png'),
            pic0: require('@/assets/img/logo.png'),
            pic1: require('@/assets/img/pic1.png'),
            pic2: 'logo.png',
            tblogo
        }
    },
    methods:{
        handClick1(){
            this.logo = this.logo === logo ? pic : logo
        },
        handClick2() {
            // 第三种
            this.pic = this.pic === this.pic0 ? this.pic1 : this.pic0
        },
        handClick3(){
            this.pic2 = this.pic2 === 'logo.png' ? 'pic1.png' : 'logo.png'
        },
    },
}
</script>
<style lang="scss" scoped>
    .img{
        display: block;
        margin: 0 auto;
    }
    .bgimg {
        width: 100px;
        height: 100px;
        background: url("@/assets/img/logo.png") left center/cover no-repeat;
    }
    .iconfont {
        color: red;
    }
    .icon-tb {
        color: rgb(194, 48, 22);
        font-size: 46px;
    }
</style>