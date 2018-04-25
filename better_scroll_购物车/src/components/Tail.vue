<template>
  <div class='detail-footer'>
    <span>￥{{$store.state.allToail}}</span>
    <span>￥100起送</span>
  </div>
</template>

<script>
  export default {
    name:'Tail',
    mounted(){
      
    }
  }
</script>

<style scoped>
.detail-footer{
  width:100%;
  height:40px;
  position:absolute;
  bottom:0;
  left:0;
  background:rgba(0,0,0,.8);
  color:#fff;
}
</style>