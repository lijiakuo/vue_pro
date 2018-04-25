<template>
  <div class='detail'>
    <div class='tab'>
      <router-link tag='span' :to='{name:"Sp"}'><small>商品</small></router-link>
      <router-link tag='span' :to='{name:"Pj"}'><small>评价</small> </router-link>
      <router-link tag='span' :to='{name:"Dp"}'><small>店铺</small></router-link>
    </div>
    <router-view></router-view>
    
  </div>
</template>
<script>
import Tail from '@/components/Tail'
  export default {
    name:'Detail',
    data(){
      return {
        flag:false
      }
    },
    methods:{
      toggleFn(e){
        console.log(e)
      }
    },
    components:{
      Tail
    }
  }
</script>

<style lang='less'>
  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:37px;
    border-bottom:2px solid #ccc;
    span{
      flex:1;
      text-align:center;
    }
  } 
  .router-link-active  small{
    display:inline-block;
    border-bottom:2px solid red;
  }
  .detail{
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
  }
  .detail-footer{
    display:flex;
    width:100%;
    height:40px;
    background:#ccc;
    align-items: center; 
    span{
      flex:1;
      text-align:center;
    }
   
  }
   
</style>