<template>
  <h1>{{$route}}</h1>


</template>
<script>
  export default {
    name: 'test1',
    data () {
      return {
        msg: '这是一个组件test1'
      }
    }
  }
</script>
<style scoped>
  h1{
    background-color:red;
  }
</style>
