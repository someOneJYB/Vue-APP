<template>
  <div id="page">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <!--这句话是为了显示其他组件的-->
  </div>
</template>

<script>
  import CommonFooter from '../components/movie/footer'
  import CommonHeader from '../components/movie/header'
  export default {
    name: 'app',
    components: { CommonFooter,
      CommonHeader  },
    created:function(){
        console.log("这是扩展实例")
        console.log(this);
    }

  }
</script>

<style>

</style>
