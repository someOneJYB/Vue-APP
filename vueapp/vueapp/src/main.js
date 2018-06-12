// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import touch from 'vue-touch'
import APlayer from 'aplayer'
import './assets/css/reset.css'
import './assets/js/rem.js'
import Axios from 'axios'
Vue.use(touch,{name:"vu-touch"});
//use第二个参数取别名，就是因为vue-touch不能直接用

/*在这个里面入口文件里导入的文件都是公共组件可以在其他.vue文件里面直接使用，就不用再.vue中引入了，*/
/*因为这是一个入口文件里面导入了Vue-router组件就可以使用里面的对象，因为单组件的代码都会打包到这个文件里面，所以才能保证能够使用可以使用引入的Vue-router中的对象和属性这就是公共组件只要import进来和new实例里面无关*/
Vue.config.productionTip = false;
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
//请求我们需要的数据利用了服务器代理
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,


  template: '<App/>',
  components: { App },
  data:{
    ok:"true"
  },
  // store,
  created:function(){
    console.log('这是Vue根实例')
    console.log(this);
    console.log("vue的option");
    console.log(Vue.$options);
  }
})

//看network里面都是.js文件。因为.vue文件转化成了.js文件因为整体只有一个Vue对象#APP,而且入口文件里面就可以放我们所有东西都共用的东西，一个大的vue对象会对应生成一个store对象一个router对象，但是之前的.vue文件并不会生成一个vue对象。只有一个vue对象Vue-cli里面可以使用Vue的v-命令语句，./代表当前路径，../上一目录。./是node里面的。既然main里面放的是所有组件都可以通用的那为什么我的$store就不可以{{count}}明明已经在main里面配置了。可是不好使
/*
eslint-disable no-new
*/
/*单文件组件是Vue的构造器的对象但是拥有和实例一样的属性和方法*/


