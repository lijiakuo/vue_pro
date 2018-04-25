<template>
  <div @click='goDetail'>
    <img :src="url" alt="">
    {{name}}
  </div>
</template>

<script>
  export default {
    name:'List',
    props:{
      url:{
        type:String
      },
      name:{
        type:String
      },
      idx:{
        type:[Number,String]
      }
    },
    data(){
      return {
        datas:null
      }
    },
    methods:{
      goDetail(){
        this.$router.push({name:'Detail',params:{id:this.idx}})
      }
    }
  }
</script>

<style scoped>

</style>