<template>
  <div class='home'>
    <div class='main'>
      <List 
      v-for="(item,index) in list"  
      :key='index' 
      :name='item.name' 
      :url='item.pic'
      :idx='item.id'></List>
    </div>
    <Footer>
       <router-link
          v-for='(item,index) in listDatas' 
          :to='item.to'
          :key='index'
          tag='span'
        >{{item.text}}</router-link>
    </Footer>
  </div>
</template>

<script>
import myComponent from '@/components/myComponent'
import List from '@/views/Home/List/List.vue'
import Footer from '@/views/Footer'
  export default {
    name:'Home',
    data(){
      return {
        list:null,
        listDatas:null
      }
    },
    mounted(){
      this.$http('/api/list')
      .then(res=>{
        console.log(res.data)
        this.list=res.data
      })
      this.$http('/api/routeLink')
      .then(res=>{
        this.listDatas = res.data
        // console.log(res.data);
      })
    },
    directives:{
      focus:{
        //指令定义
        inserted:function(el){
          el.focus()
        }
      }
    },
    components:{
      myComponent,
      List,
      Footer
    }
  }
</script>

<style lang='less'>
  .home{
    width: 100%;
    height: 100%;
    background: #ccc;
    display:flex;
    flex-direction:column;
  }
  .main{
    display:flex;
    flex-direction:column;
    flex:1;
    overflow-y:scroll;
  }
  .footer{
    width:100%;
    height:.4rem;
    text-align:center;
  }
</style>