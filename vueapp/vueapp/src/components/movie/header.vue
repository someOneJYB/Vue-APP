<template>
  <div class="header" :style="{background:bg}">
    <!--v-bind用于绑定变量存在的就是用于:class="{}"变量的判断形势-->
    <button @click="home">首页</button>
   <slot name="title" ><h1>Movie</h1></slot>
    <div class="whether"><router-link to="/page/whether" >天气</router-link>
  </div> </div>
</template>

<script>
  export default {
    name: 'header',
  methods:{
        home(){
            this.$router.push('/');
        }
  },

    props:["bg"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .header{
   width: 100%;
   background-color:deepskyblue;
   position:fixed ;
   top:0;
   height:1rem;
   line-height: 1rem;
 }

 button{
   height: .5rem;
   width: 1rem;
   border-radius:10px;
   background-color:deepskyblue;
   outline: none;
 }
  .header p{
    color:white
  }
  .whether{
    float:right;
    margin-right: 0.5rem;
  }
 .header h1{
   color:white;
    position:absolute;
    left:50%;
    top:50%;

    transform:translate(-50%,-50%);
  }

</style>
