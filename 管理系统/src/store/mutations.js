let mutations={
  saveToken(state,payload){
    state.token = payload
  },
  saveUser(state,payload){
    state.username=payload;
  },
  saveDatas(state,payload){
    state.dataList=payload;
  },
  getShow(state,payload){
    state.onShow=payload
  }
}
export default mutations