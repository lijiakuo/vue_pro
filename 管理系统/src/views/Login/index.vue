<template>
  <div class='form-wrap'>
    <el-row type="flex" justify="center">
      <el-col :span='6'>
        <el-form :model="formData" ref="loginBox">
          <el-form-item label="用户名" prop="user" :rules="userRules">
            <el-input v-model="formData.user"> 
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd" :rules="passRules">
            <el-input v-model="formData.pwd"> 
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-on:click.native="loginFn">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import  {login} from './../../untils/request.js'
  export default {
    data() {
      return {
        formData:{
          user:'123',
          pwd:''
        },
        userRules:[{
          required:true,
          message:"用户名不可省略"
        },{
          type:"email",
          message:"请输入正确格式的email"
        }],
        passRules:[{
          required:true,
          message:"密码不能为空"
        }]
      };
    },
    methods: {
      loginFn(){
        console.log(this.$router.push)
        this.$refs.loginBox.validate((isValid,options)=>{
          if(isValid){
            this.$store.dispatch('getToken',{
              data:this.formData,
              notify:this.$notify,
              router:this.$router
            })
          }else{
            this.$notify({
              title:'错误',
              message:'请填写正确的用户名或密码',
              type:'warning'

            })
          }
        })
       
      }
    }
  }
</script>

<style scoped>
.form-wrap{
  background:#f1f1f1;
}
</style> 