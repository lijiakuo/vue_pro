<template>
  <div class='tabs'>
    <ul class='tab-list'>
      <li 
        v-for="(item,index) in tabArr" 
        :class="{active:index == num}"
        @click="toggleTab(index,item)">{{item.name}}</li>
    </ul>
    <div class="tabCon">
        <Zj1 :is="currentTab"></Zj1>
    </div>
  </div>
</template>

<script>
  import Pj from  '@/components/Pj.vue'
  import Zj0 from '@/components/Zj0.vue'
  import Zj1 from '@/components/Zj1.vue'
  import Zj2 from '@/components/Zj2.vue'
  export default {
    name:'Tab',
    data(){
      return {
        currentTab:'Zj0',
        num:0,
        tabArr:[
          {
            name:"标题0",
            component:"zj0",
          },
          {
            name:"标题1",
            component:"zj1",
          },
          {
            name:"标题2",
            component:"zj2",
          }
        ]
      }
    },
    methods: {
      toggleTab: function(index,item) {
        console.log(item)
        this.num = index
        this.currentTab = item.component; // tab 为当前触发标签页的组件名
      }
    },
    components:{
      Zj1,
      Zj2,
      Zj0
    }
  }
</script>

<style lang='less'>
  .tab-list{
    display:flex;
    height:40px;
    line-height:40px;
  }
  .tab-list li {
    flex:1;
    text-align: center;
  }
  .active{
    background: pink;
  }
 
</style>