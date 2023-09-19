<template>
  <div class="footer">Vue底部</div>
</template>

<script>
export default {
  name: 'test-footer'
}
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color:#000;
    color: #fff;
}
</style>