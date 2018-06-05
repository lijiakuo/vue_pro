<template>
  <div class="CreatCy">
    <h1>广告创意</h1>
    <div class="tt">
      <h2>落地页</h2>
      着落页地址: <input type="text"><a style="color:#000000; margin-left:.05rem">预览</a>
    </div>
    <div class="tt">
      <h1>上传创意</h1>
      <liItem @edit="addFn" :arrList="arrList">
        <div class='upDown' v-for='(item,index) in arrList' :slot='item.name' :key='index'>
         <UpDown></UpDown>
        </div>
      </liItem>
    </div>
    <div class="tt">
      <span style='background:#E8E8E8;cursor: pointer'>提交</span>
    </div>
  </div>
  
</template>

<script>
  import Mark from '@/components/Mark'
  import kk from '@/components/kk'
  import UpDown from '@/components/UpDown'
  import liItem from '@/components/liItem'
  export default {
    name:'CreatCy',
    data(){
      return {
         imageUrl: '',
         arrList:[{
          label:'创意1',
          name:'tab-1'
         }],
         len:1
      }
    },
    methods:{
      open5() {
        let that=this;
        this.$confirm(<kk></kk>, '选择模板', {
          dangerouslyUseHTMLString: true,
          confirmButtonText:'多图',
          cancelButtonText:'单图',
          callback(action){
            console.log(action=='cancel');
            console.log(that.$store);
            that.$store.commit('getShow',action=='cancel'?'simple':'mtui');
          }
        }).then(()=>{

        }).catch(()=>{

        })
      },
       handleAvatarSuccess(res, file) {
         console.log(res)
        //  this.imageUrl= 'http://localhost:9000/'+res.data.value
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      addFn(text){
      console.log(text);
        // let len=1;
        this.arrList.push({
          label:"创意"+(++this.len),
          name:'tab'+'-'+this.len
        })
      }
    },
    components:{
      kk,
      liItem,
      UpDown
    }
  }
</script>

<style scoped>
  .CreatCy{
    padding-left:.1rem; 
  }
  h1{
    font-size: .2rem;
    font-weight: bold;
    margin-top: .2rem;
 
  }
  .tt{
    margin-top: .2rem;
    line-height: 2
  }
  .tt span{
    padding:.1rem .1rem
  }
  .el-message-box__headerbtn{
    display:none;
  }
  .el-message-box__close el-icon-close{
    display:none;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>