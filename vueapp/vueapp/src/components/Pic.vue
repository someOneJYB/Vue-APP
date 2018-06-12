<template>
 <div>
   <common-header bg="rgb(0, 150, 0)">
   <h1 slot="title">PICTURE</h1>
 </common-header>
   <ul class="imgContainer">
     <li v-for="(img,index) in imgs" >
       <router-link  :to="'/page/big/'+index"><img :src="img.src" alt=""></router-link>
<!--动态传值双引号里面有单引号和字符串拼接-->
     </li>
   </ul>
  </div>
</template>

<script>
  import axios from 'axios'
//  import CommonFooter from '../components/movie/footer'
  import CommonHeader from '../components/movie/header'
  export default {
      data(){
          return{
              imgs:[]
          }
      },
    components: {
      CommonHeader

    },mounted(){
//axios返回一个promise对象
      axios.get('/static/data/photodata.json').then(res=>{
          console.log(res.data.photoData);
          this.imgs=res.data.photoData;
          this.$store.dispatch('storePic',this.imgs);
//          dispatch调用action里面的方法
      });
  }
  }
</script>

<style scoped>
  /*@import "";*/
.imgContainer{
  margin:1rem 0;
  overflow: hidden;
}
.imgContainer li{
  width: 50%;
  float:left;


}
.imgContainer li img{
  width: 100%;
}
</style>
