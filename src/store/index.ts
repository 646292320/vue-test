import Vue from 'vue'
import Vuex from 'vuex'
import store2 from '@/store/modules/store2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 定义一个name，以供全局使用
    name: '小陈',
    userName: '小明',
    // 定义一个number，以供全局使用
    number: 0,
    // 定义一个list，以供全局使用
    list: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王二' }
    ]
  },
  getters: {
      getMessage(state) {
          // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
          return `hello${state.name}`
      }
  },
  mutations: {
      setNumber(state, {number = 1}) {
        console.log()
          // 增加一个mutations的方法，方法的作用是让num从0变成5，state是必须默认参数
          state.number += number
          //state.number += number
      }
  },
  actions: {
      setNum(ctx, val) {
          console.log('ctx: ', ctx)
          console.log('1: ', ctx.getters.getMessage)
          console.log('2: ', ctx.state.name)
          // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
          new Promise(resolve => {
            // 我们模拟一个异步操作，1秒后修改number为888
            setTimeout(() => {
              resolve(val)
            }, 500)
          }).then((data) => {
            console.log('data: ', data)
            ctx.commit('setNumber', {number:data})
          })
      }
  },
  modules: {
    store2,
  }
})
