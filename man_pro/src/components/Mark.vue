<template>
  <div class='mark' v-show='$store.state.show' >
    <div class='mark-con'>
      <h1>选择模板</h1>
      <div class='mains'>
        <div class='sim' @click='toRouterFn'>
          单图
        </div>
        <div class='muti'>
          多图
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Mark',
    data(){
      return {
        show:false
      }
    },
    methods:{
      toRouterFn(){
        this.$router.push('/creat/indexc')
        this.$store.state.show=false
      }
    }
  }
</script>

<style scoped>
  .mark{
    width:100%;
    height:100%;
    background:rgba(0,0,0,.5);
    position:absolute;
    z-index: 100;
  }
  .mark-con{
    display: flex;
    flex-direction: column;
    width: 439px;
    height: 282px;
    position: absolute;
    left: 0;
    right:0;
    bottom: 0;
    top:0;
    margin: auto;
    background: #fff;
    padding: .1rem;
  }
  .mark-con h1{
    width: 100%;
    height: .4rem;
    background: #ccc;
    line-height: .4rem;
  }
  .mains{
    flex: 1;
    background: pink;
    padding: .1rem;
    display: flex;
    justify-content: space-between
  }
  .mains div {
    width: 48%;
    height: 100%;
    background: #eee;
  }
</style>