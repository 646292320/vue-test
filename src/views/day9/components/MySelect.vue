<template>
  <div>
    <select :value="subject" @change="$emit('change', $event.target.value)">
      <option value="1">前端</option>
      <option value="2">java</option>
      <option value="3">UI</option>
    </select>
    <p>这是封装的select组件</p>
  </div>
</template>

<script>
// https://blog.csdn.net/qq252750818/article/details/125547353
export default {
  name: 'MySelect',
  model: {
    prop: 'subject',
    event: 'change' // 代表自定义的事件名称
  },
  props: {
    subject: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
