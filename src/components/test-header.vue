<template>
    <div class="header">
        <router-link to="/" class="backIndex"> 《首页 </router-link>
        <p>Vue导航</p>
    </div>
</template>
<script>
export default {
  name: 'test-header'
}
</script>
<style lang="scss" scoped>
.header {
    position: fixed;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    background-color: #279d40;
    z-index: 999;
}
p{
    margin: 0;
}
</style>