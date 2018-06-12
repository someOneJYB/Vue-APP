<template>
  <div id="book">
    <common-header bg="rgb(0, 255, 136) ">
      <h1 slot="title">BOOK</h1>
    </common-header>
    <swipe class="my-swipe">
      <swipe-item class="slide1"><img src="" alt=""></swipe-item>
      <swipe-item class="slide2"><img src="" alt=""></swipe-item>
      <swipe-item class="slide3"><img src="" alt=""></swipe-item>
      <swipe-item class="slide4"><img src="" alt=""></swipe-item>
      <swipe-item class="slide5"><img src="" alt=""></swipe-item>
    </swipe>
  </div>
</template>

<script>
  /*Vue里面的dom切换动画必须得是transition只能用一个组件，volicity.js
  * 淡入淡出要显示的图片z-index在最上面，然后在opacity变成1
  * cubic是一个CSS函数
  * 在路由
  * 标签放到transition里面并且定义
  * transition-group可以对多个元素动画起作用
  * tag就是动画要渲染的标签默认span,在transition里面必须要写key对应循环的自身，用元素特有的在transition-group里面
  * 有name属性.name-enter{}进入之前
  * .name-to{}到这时候
  * 这两个属性是未进入初始状态
  * .name-enter-active{}显示的时候用transition这样就会在进来的时候显示动画
  * .name-leave-to{}
  * 这两个是进入和离开
  * 进入了页面是css的钩子函数
  * 利用velcoty.js
  * 做动画的组用transition-group 例如代替ul,就设置tag="ul" 还有一个属性让css不起作用:css=false则不使用，在组件动画转化的时候会有js方法用过度钩子函数配合volcity.js来使用动画。和css方法实现就是.name-active{}
  *require是node符合commonJS规范
  * 还有一个require([],function(){})是AMD规范
  * seaJS是CMD规范
  * 异步加载规范
  * ES6中使用import和export
  *
  *
  * enter钩子函数leave钩子函数里面想要切换css动画必须调用done()
  * 利用了swipe组件来实现了图片的轮播，下载并且引用，居然用了require的模式来引入*/
 import 'vue-swipe/dist/vue-swipe.css'
  import { Swipe, SwipeItem } from 'vue-swipe';



  import CommonHeader from '../components/movie/header'
  export default {

    components: {
      CommonHeader,
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }
  }
</script>

<style scoped>
  .my-swipe {
    margin:3rem 0;
   width: 100%;
    height: 6rem;
    color: #fff;
    font-size: 30rem;
    text-align: center;
  }

  .slide1 {
    background-image: url('https://img3.doubanio.com/lpic/s24468373.jpg');
   background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide2 {
    background-image: url('https://img3.doubanio.com/lpic/s6989253.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .slide3 {
    background-image: url('https://img3.doubanio.com/lpic/s27102925.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .slide4 {
    background-image: url('https://img3.doubanio.com/lpic/s1727290.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .slide5 {
    background-image: url('https://img3.doubanio.com/lpic/s1070222.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
