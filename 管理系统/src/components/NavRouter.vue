<template>
  <div class='nav-link' style="background:#022050 ">
    <el-menu 
      :default-openeds="['1', '3']"
      router
      >
      <el-menu-item index="/creat">新建广告</el-menu-item>
      <el-menu-item index="/home">首页概览</el-menu-item>
      <el-submenu index='1'>
        <template slot="title" style='color:#fff' index='/gg'><i class="el-icon-menu"></i>广告管理</template>
        <el-menu-item-group>
          <el-menu-item index="/plan">广告计划</el-menu-item>
          <el-menu-item index="2-2">广告单元</el-menu-item>
          <el-menu-item index="2-2">广告创意</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/sj">数据中心</el-menu-item>
      <el-menu-item index="/seting">工具箱</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'NavRouter',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
 .nav-link{
   background:#081A6C;
 }
 .el-submenu__title {
   color:#fff;
 }
.el-submenu{
   color:#fff;
 }
 
</style>