<template>
    <div class='module'>
      <div class='module-sim' @click='simFn'>单图</div>
      <div class='module-muti'>多图</div>
    </div>
</template>

<script>
  export default {
    name:'kk',
    methods:{
      simFn(){
        console.log(0)
      }
    }
  }
</script>

<style scoped>
.module{
    display:flex;
    justify-content: space-between;
  }
  .module div{
    width:48%;
    height:100%;
    background: pink;
    text-align: center;
    
  }
  
</style>