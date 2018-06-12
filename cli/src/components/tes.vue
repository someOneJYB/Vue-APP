<template>
  <div>
    <h1>redirect:{{$route.params.name}}</h1>
    <h1>关于传的值就是在固定的URL页面，只要URL改变传的值就没有了，所以父路由跳转到子路由，父页面动态传递的值就会不见了因为URL改变了</h1>
    <router-link to="/aa">首页</router-link>
  <router-view/>
  </div>

</template>
<script>
  export default {
    name: 'tes',
    data () {
      return {
        msg: '这是一个组件test2'
      }
    }
  }
</script>
<style scoped>
  h1{
    background-color:green;
  }
</style>
