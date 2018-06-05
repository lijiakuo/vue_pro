<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="计划ID"
        width="120">
         <!-- <template slot-scope="scope">{{ scope.row.date }}</template>  -->
      </el-table-column>
      <el-table-column
        prop="name"
        label="计划名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="tar"
        label="投放目的"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="day"
        label="日预算(元)"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="jday"
        label="今日消耗(元)"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="zday"
        label="总消耗(元)"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="bg"
        label="曝光量"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="dj"
        label="点击量"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="djl"
        label="点击率"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="zt"
        label="状态"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div>
       <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
       </el-pagination>
    </div>
  </div>
</template>

<script>
import NavRouter from '@/components/NavRouter'
import {dsp_plan} from './../../untils/request.js'
  export default {
    name:'Plan',
    data(){
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData3: null,
        multipleSelection: []
      }
    },
    mounted(){
      console.log(dsp_plan);
      dsp_plan({name:'ljk'}).then(res=>{
        console.log(1)
        this.tableData3 = res;
        console.log(res);
      })
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>