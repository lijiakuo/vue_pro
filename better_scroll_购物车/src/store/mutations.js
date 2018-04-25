let mutations = {
  saveNavList(state,payload){
    state.navList = payload.arr;
    state.dataList = payload.datas;
  },
  saveChangeList(state,payload){
     state.dataList = payload
     let arr = state.dataList;
     let jjj=0;
    //  console.log(1)
     arr.forEach((val,index)=>{
       val.foodList.forEach((item,idx)=>{
          jjj+=item.count*item.price
       })
     })
     state.allToail=jjj
  }

}
export default mutations