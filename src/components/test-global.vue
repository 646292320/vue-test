<template>
  <div>
    <h4>我是--全局组件</h4>
    <p>传进来的值value：{{ value }}</p>
    <p>传进来的值name：{{ name }}</p>
    <p>传进来的值published：{{ published }}</p>
    <p>传进来的值commentItem：{{ commentItem }}</p>
    <p>传进来的值author：{{ author }}</p>

    <div>
      <el-button type="success" @click="handEmit"
        >向父元素传值</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'test-global',
  props: {
    value: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    published: {
      type: Boolean,
      default: true
    },
    commentItem: {
      type: Array,
      default: () => []
    },
    author: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    // 不要用this.value++，这样相当于直接修改this.value，不允许，传进来的值不能直接修改
    handEmit() {
      this.$emit('getValue', this.value + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
