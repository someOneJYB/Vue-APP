<template>
  <div>
    <button @click="goFore">向前</button>
    <button @click="goNext">向后</button>
    <button @click="gohome">回主页</button>

<h1>hhhhhhhhhhhhhhhhhhhhhhhhh</h1>
  <router-link to='/test/test1/18'>测试1</router-link>
  <router-link :to="{name:'test2',params:{name:'jiaoge',age:12}}">测试2</router-link>
    <router-view/>
  </div>
</template>
<script>
  export default {

    data () {
      return {
        msg: '这是一个组件'
      }
    }, methods:{
      goFore() {
        console.log( this.$router);
        console.log("this.$router有这个属性"+"$el" +"+"+"<div id=app>");
          console.log("向前")
        this.$router.go(-1);
      },
      goNext() {
          console.log( this.$router);
        console.log("向后，this.$router是全局的是Vue-router")
        this.$router.go(1);
      },
      gohome() {
        console.log("回到主页了")
        this.$router.push('/');
      }
    }
  }
</script>
<style scoped>
h1{
  background-color:red;
}
</style>
