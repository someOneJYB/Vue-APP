<template>
  <div id="test">
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
    name: 'test',
    components: { CommonFooter,
      CommonHeader  }
  }
</script>

<style>

</style>
