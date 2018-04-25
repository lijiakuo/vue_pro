<template>
  <div class='footer'>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name:'Footer'
  }
</script>

<style scoped>
  .footer{
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc
  }
  .footer span{
    flex:1;
    
  }
</style>