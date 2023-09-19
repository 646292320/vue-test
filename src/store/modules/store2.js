// store2.js

const store2 = {
  namespaced: true,
  state: {
    store2name: '我是store2',
    store2number: 0
  },
  getters: {
    store2GetMsg(state) {
      // 获取修饰后的name，第一个参数state为必要参数，必须写在形参上
      return `hello${state.store2name}`
    }
  },
  mutations: {
    // 增加nutations属性
    store2setNumber(state, val = 3) {
      // 增加一个mutations的方法，方法的作用是让num从0变成5，state是必须默认参数
      state.store2number += val
    }
  },
  actions: {
    // 增加actions属性
    store2setNum(ctx, val) {
      console.log('ctx: ', ctx)
      console.log('1: ', ctx.getters.store2GetMsg)
      console.log('2: ', ctx.state.store2name)
      // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
      new Promise(resolve => {
        // 我们模拟一个异步操作，1秒后修改number为888
        setTimeout(() => {
          resolve(val)
        }, 500)
      }).then((data) => {
        console.log('data: ', data)
        ctx.commit('store2setNumber', data)
      })
    }
  }
}

export default store2
