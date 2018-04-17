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
        prop="date"
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
        prop="address"
        label="投放目的"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="日预算(元)"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="今日消耗(元)"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="总消耗(元)"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="曝光量"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="点击量"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="点击率"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
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
  export default {
    name:'Plan',
    data(){
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
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