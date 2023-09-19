<template>
  <div class="page">
    <!-- 头部 -->
    <test-header></test-header>
    <test-main><router-view /></test-main>
    <!-- 尾部 -->
    <test-footer></test-footer>
  </div>
</template>

<script>
export default {
  name: 'layout-page'
}
</script>

<style lang="scss" scoped>
</style>
