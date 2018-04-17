<template>
  <div class='home'>
    <el-row class='home-top'>
      <el-col :span='12'><p class='p1'>整体情况</p></el-col>
      <el-col :span='12' class='sp'>
        <span>近7天</span>
        <span>近30天</span>
        <span class='sp1'>
            <el-date-picker
              v-model="startTime"
              type="month"
              value-format="yyyy/MM"
              placeholder="选择月">
            </el-date-picker>
            <el-date-picker
              v-model="endTime"
              type="month"
              value-format="yyyy/MM"
              placeholder="选择月">
            </el-date-picker>
          
        </span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="6" @click.native='test'><div  class="grid-content bg-purple">1</div></el-col>
        <el-col :span="6" @click.native='text'><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
    <el-row class="down-list">
      <el-col :span="12">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <el-row style="width: 100%;height:300px;">
        <div class="cans" ref='cansTab' style="width: 100%;height:300px;"></div>    
    </el-row>
  </div>
</template>
<script>
import Echarts,{init} from 'echarts'
import $http from '../../untils/request.js'
import axios from 'axios'
import  {dsp_report} from './../../untils/request.js'
import NavRouter from '@/components/NavRouter'
  export default {
    name:'Home',
     data() {
      return {
        startTime:'2017/09',
        endTime:'2018/04',
        axiosList:null,
        value: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      };
    },
    watch:{
      startTime(n,o){
        console.log(n)
      },
      endTime(n,o){
        console.log(o)
        this.getAllMontns(this.startTime,this.endTime);
        dsp_report({datas:this.getAllMontns(this.startTime,this.endTime)})
        .then(res=>{
          console.log(res.data)
          let cansTab = init(this.$refs.cansTab)
          let option = {
          xAxis: {
              type: 'category',
              data: this.getAllMontns(this.startTime,this.endTime)
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: res.data,
              type: 'line'
          }]
        };
        // console.log(cansTab)
        cansTab.setOption(option)
      })
      }
    },
    methods:{
      test(){
        $http.post('/dsp-report/index')
        .then(res=>{
          console.log(res)
        })
      },
      updateFn(instance){
         cansTab.setOption({
           xAxis: {
              data: this.axiosList
           }
         })
      },
      getAllMontns(start,end){
        let [startYear,startMonth]= start.split('/');
        let [endYear,endMonth] = end.split('/')
        let resArr=[]
        while(startYear <= endYear){
          //先判断年份
          if( startYear < endYear ){
            //年份不相等
            if(startMonth <= 12){
              resArr.push(`${startYear}/${startMonth++}`)
            }else{
              startYear++;
              startMonth=1
            } 
          }else{
            if(startMonth <= endMonth){
              resArr.push(`${startYear}/${startMonth++}`)
            }else{
              startYear++
            }
          }
        }
        this.axiosList=resArr
        return resArr
      }
    },
    created(){
    },
    mounted(){
        dsp_report({datas:this.getAllMontns(this.startTime,this.endTime)})
        .then(res=>{
          let cansTab = init(this.$refs.cansTab)
          let option = {
            xAxis: {
                type: 'category',
                data: this.getAllMontns(this.startTime,this.endTime)
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: res.data,
                type: 'line'
            }]
          };
          cansTab.setOption(option)
      })
        
     
      
    }
  }
</script>

<style scoped>
.home{
  width:100%;
  height:500px;
}
.home-top{
  width:100%;
  height:40px;
  background:pink;
  line-height:40px;
}
.sp{
  display:flex;
  justify-content: space-between;
}
.sp1{
  display:flex;
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