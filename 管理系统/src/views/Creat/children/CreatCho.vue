<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="12">
          <div  class="grid-content bg-purple">
            <h2>已有计划</h2>
            <p>选择已有计划,直接创建广告</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <h2>新建计划</h2>
            <p>新建推广目标,计划设置</p>
          </div>
        </el-col>
        
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'CreatCho'
  }
</script>

<style scoped>
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
  text-align:center;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>