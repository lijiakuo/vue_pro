<template>
  <div>
    <h1>我是子组件的标题</h1>
    <slot>只有在没有要分发的内容时才会显示</slot>
  </div>
</template>

<script>
  export default {
    name:'myComponent'
  }
</script>

<style scoped>

</style>