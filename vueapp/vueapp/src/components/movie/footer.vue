<template>
  <ul class="footer">
    <li><router-link to="/page/content">电影</router-link></li>
    <li><router-link to="/page/musicf">音乐</router-link></li>
    <li><router-link to="/page/pic">图片</router-link></li>
    <li><router-link to="/page/book">读书</router-link></li>
  </ul>

</template>

<script>
  /*父组件里面引用了header和footer但是我以为子组件渲染到父组件里面就可以，可是子组件居然要引入我也是够了*/
  /*redirect在index.js里面配置了一个路径redirect以后就会发现点击routerlink以后不可以direct了*/
  export default {
    name: 'header',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    width: 100%;
    background-color:deepskyblue;
    position:fixed ;
    bottom:0;
    height:1rem;
    line-height: 1rem;
    display: flex;
  }
  .footer li{
    flex-grow: 1;
    color:white;
    text-align: center;
  }

</style>
