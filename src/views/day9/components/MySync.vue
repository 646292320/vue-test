<template>
  <div>
    <p>
      num1:<input
        type="text"
        :value="num1"
        @input="$emit('update:num1', $event.target.value)"
      />
    </p>
    <p>
      num2:<input
        type="text"
        :value="num2"
        @input="$emit('update:num2', $event.target.value)"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: 'my-sync',
  props: {
    num1: {
      type: String,
      default: ''
    },
    num2: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
