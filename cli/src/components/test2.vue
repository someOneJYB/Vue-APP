<template>
  <h1>{{$route.params.name}}+{{$route.params.age}}</h1>
</template>
<script>
  export default {
    name: 'test2',
    data () {
      return {
        msg: '这是一个组件test2'
      }
    }
  }
</script>
<style scoped>
  h1{
    background-color:blue;
  }
</style>
