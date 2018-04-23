<template>
  <div>
    <ul class='list'>
      <li 
        v-for="(item,index) in arrList"
        :class="index==selected?'active':''"
        @click='changeIdx(index)'
        >{{item.label}}</li>
      <li @click="addItem" style="color:#2873FF;cursor: pointer">
        +添加创意
      </li>
    </ul>
    <div class='conItem'>
      <slot :name='selectedCon'></slot>
    </div>
  </div>
</template>

<script>
// <el-button  style="color:#2873FF;cursor: pointer" type="text" @click="open5">
//           +添加创意
//         </el-button>
  import kk from '@/components/kk'
  export default {
    name:'liItem',
    data(){
      return {
        selected:0,
        selectedCon:'tab-1'
      }
    },
    props:{
      arrList:Array
    },
    methods:{
      changeIdx(index){
        this.selected=index;
        this.selectedCon = this.arrList[index].name
        console.log(this.selectedCon)
      },
      open5() {
        let that=this;
        this.$confirm(<kk></kk>, '选择模板', {
          dangerouslyUseHTMLString: true,
          confirmButtonText:'多图',
          cancelButtonText:'单图',
          callback(action){
            console.log(action=='cancel');
            console.log(that.$store);
            that.$store.commit('getShow',action=='cancel'?'simple':'mtui');
          }
        }).then(()=>{

        }).catch(()=>{

        })
      },
      addItem(){
        console.log(this.selectedCon)
        this.$emit('edit',this.selectedCon)
       console.log(this.$slots) 
      }
    },
    mounted(){
      console.log(this.arrList);
    },
    components:{
      kk
    }
  }
</script>

<style scoped='less'>
.list{
  display:flex; 
}
.active{
  border-bottom:2px solid blue
}


</style>