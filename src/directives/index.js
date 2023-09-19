// 定义全局指令，这个directives也可以抽离成单文件
const directives = {
  color: {
    inserted(el, binding) {
      //console.log(' binding1111: ', binding)
      el.style.color = binding.value
    }
  },
  debounce: {
    inserted(el, binding) {
      let timer
      el.addEventListener('click', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          binding.value()
        }, 1000)
      })
    }
  }

}
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
    // app是Vue实例。 e.g:  app = createApp()
    /*    Vue.directive('color', {
      inserted (el, binding) {
        console.log(' binding1111: ', binding)
        el.style.color = binding.value
      }
    }) */
  }
}
