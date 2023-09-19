<template>
  <div class="main"><slot></slot></div>
</template>

<script>
export default {
  name: 'com-main'
}
</script>

<style lang="scss" scoped>
.main {
    padding: 100px 0;
    min-height: calc(100vh - 200px);
    width: 100%;
    overflow-x: hidden;
    margin: 0 auto;
    background-color: #f5f5f5;
}
</style>