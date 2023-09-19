import axios from 'axios'
const service = axios.create({
    baseURL: 'http://localhost:3004/',
    timeout: 5000, // 请求超时时间
    headers: {
    'Content-Type': 'application/json;charset=UTF-8'
    }
})
service.interceptors.request.use(config => {
    // 拦截业务逻辑
    return config
  }, err => {
    return Promise.reject(err)
  })
  
  // res => res.data  取出data数据，将来调用接口的时候直接拿到的就是后台的数据
  service.interceptors.response.use(res => res.data, err => {
    return Promise.reject(err)
})
  
  // 请求工具函数
export default (url, method, submitData) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return service({
      url,
      method,
      // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
      // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
      // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
      // method参数：get,Get,GET  转换成小写再来判断
      // 在对象，['params']:submitData ===== params:submitData 这样理解
      [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
  