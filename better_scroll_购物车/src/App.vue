<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from '@/views/Footer'
import FooterChild from '@/views/Footer/FooterChild'
export default {
  name: 'App',
  data(){
    return {
      listDatas:null
    }
  },
  components:{
    Footer,
    FooterChild
  }
}
</script>

<style lang='less'>
  #app{
    display:flex;
    flex-direction: column;
  }
  
</style>
