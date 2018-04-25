import Vue from 'vue'
let actions = {
  getNavList({commit},payload){
    const {$http} = payload;
    $http.get('/api/proList')
      .then(res=>{
        console.log(res.data)
        let arr = [];
        for(let i=0;i<res.data.length;i++){
          arr.push(res.data[i].item)
        }
        // console.log(arr)
        commit('saveNavList',{arr:arr,datas:res.data});
      })
  },
  getChangeList({commit,state},payload){
    // console.log(payload)
    let {index,item,str}= payload;
    let arr=state.dataList;
    if(str=='add'){
      for(let i=0;i<arr.length;i++){
       if(arr[i].item==item){
         let arrs=arr[i].foodList
         for(let j=0;j<arrs.length;j++){
           if(j==index){
             arrs[j].count++
             arrs[j].on=true
           }
         }
       }
      }
    }
    else{
      for(let i=0;i<arr.length;i++){
       if(arr[i].item==item){
         let arrs=arr[i].foodList
         for(let j=0;j<arrs.length;j++){
           if(j==index){
             arrs[j].count--
             if(arrs[j].count<=0){
              arrs[j].count=0;
              arrs[j].on=false
             }
           }
         }
       }
      }
    }
    commit('saveChangeList',arr);

  } 
}
export default actions 