const mixin = {
    data() {
      return {
        type: 'sucess',
        message: 'hello',
        foo: 'Vue'
      }
    },
    computed: {
      name() {
        return this.message + this.foo
      }
    },
    methods: {
      mixinfun() {
        console.log('我是mixin方法')
      }
    }
  }
  export default mixin