<template>
  <div class='sp-con'>
    <div class='left-wrapper' ref='scroller'>
      <ul class='left-content'>
        <li 
          v-for='(item,index) in $store.state.navList'
          :class="activeIndex==index?'active':''"
          @click='toggleClass(index)'
          >{{item}}</li>
      </ul>
    </div>
    <div  class='right-wrapper' ref='scrollers'>
      <div class='right-content'>
        <div v-for='(item,index) in $store.state.dataList' :key="index" class='lists'>
          <h1>{{item.item}}</h1>
           <Dl  
            v-for= "(items,idx) in item.foodList" 
            :key="idx"
            :pic="items.pic"
            :text="items.text"
            :con="items.con"
            :price="items.price"
            :count="items.count"
            :item="item.item"
            :idx="idx"
            :on="items.on"
            >
          </Dl>
        </div>
      </div>
    </div>
    <Tail></Tail>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Dl from '@/components/Dl.vue'
import Tail from '@/components/Tail'
  export default {
    name:'Sp',
    data(){
      return {
        proList:null,
        activeIndex:0,
        scroll:null,
        scrolls:null
      }
    },
    methods:{
      toggleClass(index){
        this.activeIndex = index;
        let {scroller,scrollers}=this.$refs;
        let listsArr = document.getElementsByClassName('lists');
        let lis = document.querySelector('.left-content');
        this.scrolls.scrollToElement(listsArr[index], 500,0,0)
      },
      
    },
    mounted(){
      this.$store.dispatch('getNavList',{$http:this.$http})
      let {scroller,scrollers}=this.$refs;
      this.scroll=new BScroll(scroller, {
        scrollY: true,
        click: true,
      })
      this.scrolls=new BScroll(scrollers, {
        scrollY: true,
        click: true,
        probeType: 3,
        scrollbar: {
          fade: false
        }
      })
      setTimeout(() => {
        console.log(this.$refs)
        let {scroller,scrollers}=this.$refs;
        console.log(scrollers)
        let listsArr = document.getElementsByClassName('lists');
        let listsHeight = [0];
        let heights = 0;
        for (let i = 0; i < listsArr.length; i++) {
          heights += listsArr[i].offsetHeight
          listsHeight.push(heights)
        }
        this.scrolls.refresh()
        this.scrolls.on('scroll', (pos) => {
          const y = pos.y;
          for (let j = 0; j < listsHeight.length - 1; j++) {
            let height1 = listsHeight[j];
            let height2 = listsHeight[j + 1];
            if (-y >= height1 && -y < height2) {
                this.activeIndex=j
            }
          }
        })
      }, 0)   
    },
    components:{
      Dl,
      Tail
    }
  }
</script>

<style lang='less'>
  .sp-con{
    width: 100%;
    height: 100%;
    display: flex;
    flex:1;
    position:relative;
    overflow-y:scroll;
    overflow: hidden;
    padding-bottom:40px;
 
  }
.left-wrapper {
    width: 30%;
    height: 100%;
    overflow: hidden;
}

.left-wrapper li {
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    background: #f1f1f1;
}

.right-wrapper {
    flex: 1;
    height: 100%;
    position:relative;
    overflow: hidden;
}
.sp{
  text-align:right;
  button{
    width:14px;
    height:14px;
    line-height:14px;
    border-radius:50%;
    border:none;
    background:bule;
  }
}
.right-wrapper dl {
    width: 100%;
    height: .8rem;
    position: relative;
    padding-left: .7rem;
}

.right-wrapper dl dt {
    position: absolute;
    top: 0;
    left: 0;
}
.right-wrapper dd{

  line-height:1.5
}
.right-wrapper dd h2{
  width:100%;
  padding-right:20px;
  display:flex;
  span{
    flex:1;
  }
}
.left-content {
     flex: 1; 
     overflow-y: scroll; 
}

.left-wrapper li.on {
    color: red;
    background: #fff;
    border-left: 2px solid red;
}

.left-wrapper li.active{
  background:#fff;
  color:red
}

</style>