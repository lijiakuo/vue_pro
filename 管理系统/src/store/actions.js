import {login} from '../untils/request'
let actions = {
  getToken({commit},{data,notify,router}){
    // console.log(payload) 
    console.log(data)
    login(data)
        .then(res=>{
          if(res.success==1){
            console.log(res);
            commit('saveToken',res.token)
            commit('saveUser',res.user.name)
            localStorage.setItem('token',res.token)
            localStorage.setItem('username',res.user.name)
            notify({
              title:'成功',
              message:'登陆成功,成功跳转',
              type:'success'
            })
            router.push('/home')
          }else{
            notify({
              title:'错误',
              message:'请填写正确的用户名或密码',
              type:'error'
            })
          }
        })
    commit('saveToken')
  },
  getDataList({commit},payload){
    commit('saveDatas',payload)
  }
} 
export default actions