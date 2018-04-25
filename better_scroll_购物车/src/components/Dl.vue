<template>
  <div>
     <dl>
        <dt>
          <img :src="pic" alt="" />
        </dt>
        <dd>
          <h1>{{text}}</h1>
          <h3>{{con}}</h3>
          <h2>
            <span>￥{{price}}</span>
            <span class='sp'>
              <button v-show='on' @click="changeFn(idx,item,count,'del')">-</button>
              <b v-show='on'>{{count}}</b>
              <button @click="changeFn(idx,item,count,'add')">+</button>
            </span>
          </h2>
        </dd>
      </dl>
  </div>
</template>
<script>
  export default {
    name:'Dl',
    props:{
      pic:String,
      text:String,
      con:String,
      price:Number,
      count:Number,
      item:String,
      idx:Number,
      on:Boolean
    },
    methods:{
      changeFn(index,item,count,str){
        console.log(str)
        this.$store.dispatch('getChangeList',{index:index,item:item,str:str})
      }
    }
  }
</script>

<style scoped>

</style>