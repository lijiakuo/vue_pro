<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <NavRouter></NavRouter>
      </el-aside>
      <el-container>
        <el-header>{{username}}</el-header>
        <el-main style='position:relative'>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NavRouter from '@/components/NavRouter'
import Mark from '@/components/Mark'
import {mapState} from 'vuex'
import arr from '../server/content.js'
export default {
  name: 'App',
  computed:{
    ...mapState(['username']),
    simFn(){
      console.log(1)
    }
  },
  mounted(){
    console.log(arr)
  },
  components:{
    NavRouter,
    Mark
  }
}
</script>
<style>
  #app{
    width:100%;
    height:100%;
    display: flex;
  }
   .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
   background:#022050 ;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .el-main{
  padding:0
}
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

 
    .el-message-box__headerbtn{
    display:none;
  }
  /* .el-message-box__content{
    display: none
  } */
</style>
