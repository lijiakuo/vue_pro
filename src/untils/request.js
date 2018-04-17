import axios from 'axios'
import Vue from 'vue'
//创建一个新的实例
let instance = axios.create({
  headers:{
    "plantform":"PC"
  },
  baseURL:'http://localhost:9000'
})
// 添加请求拦截器
instance.interceptors.request.use((config)=>{
  console.log(config);
  config.headers.token = localStorage.getItem('token') || ""
  return config
},(err)=>{
  return Promise.reject(err)
})
//响应拦截
instance.interceptors.response.use((response)=>{
  if(response.status==200){
    return response.data
  }else{
    return Promise.reject({
      status:response,
      msg:response.status
    })
  }
})
Object.defineProperty(Vue.prototype,'$http',{
  value:instance
})
export default instance
export function login(info){
  return new Promise((resolve,reject)=>{
    instance.post('/api/login',info).then(res=>{
      resolve(res)
    })
  })
}
export function dsp_report(info){
  return new Promise((resolve,reject)=>{
    instance.post('/dsp-report/index',info).then(res=>{
      resolve(res)
    })
  })
}