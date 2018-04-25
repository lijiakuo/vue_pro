<template>
  <div>
      <appLayout>
        <h1 slot="header">这里是一个页面的标题</h1>
        <p>主要内容的一个段落</p>
        <p>另一个主要段落</p>
        <p slot="footer">底部的信息内容</p>
      </appLayout>
  </div>
</template>

<script>
import appLayout from '@/components/appLayout'
  export default {
    name:'Hq',
    components:{
      appLayout
    }
  }
</script>

<style scoped>

</style>