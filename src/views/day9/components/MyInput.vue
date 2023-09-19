<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
