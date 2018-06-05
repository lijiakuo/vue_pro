<template>
  <div class='creat'>
    <div class='creat-nav'>
      <el-menu 
      router 
       :default-openeds="['1','2','3']"
      >
      <el-submenu index='1'>
        <template slot="title" >建立广告计划</template>
        <el-menu-item-group>
          <el-menu-item index="/creat/index">选择计划</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title" >广告单元</template>
        <el-menu-item-group>
          <el-menu-item index="/creat/2-1">基本信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index='3'>
        <template slot="title" >广告创意</template>
        <el-menu-item-group>
          <el-menu-item index="/creat/indexs">源始页</el-menu-item>
          <el-menu-item index="/creat/indexc">上传创意</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </div>
    <div class='creat-content'><router-view/></div>
  </div>
</template>

<script>
  export default {
    name:'Creat',
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
  .creat{
    display:flex;
    width:100%;
    height:500px;
    background:pink;
  }
  .el-menu{
  }
  .el-menu-item{
  }
  .creat-nav{
    width:145px;
    height:100%;
    background:#ccc;
  }
  .creat-nav h1{
    width:100%;
    height:40px;
    text-align:center;
    line-height:40px;
  }
  .el-submenu .el-menu-item{
    min-width:144px;
  }
  .creat-content{
    flex:1;
    background:#fff;
  }
  .el-row {
    margin-bottom: 20px;
}

.down-list{
  width: 100%;
  height: 40px;
  background: #f1f1f1;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>