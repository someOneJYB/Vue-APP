<template>
  <div id="app">

    <h3>计数器3: {{count}}</h3>
    <h1>计数器2: {{count1}}</h1>
    <h3>计数器: {{$store.state.count}}</h3>
    <button @click="goFore">向前</button>
    <button @click="goNext">向后</button>
    <button @click="gohome">回主页</button>
    <button @click="$store.commit('add', 10)">加法可以写调用的方法和参数</button>
    <!--<button @click="reduce">减法</button>-->
    <img src="./assets/logo.png">
    <router-link to="/test">测试</router-link>
    <router-link to="/">首页</router-link>
    <router-link to="/t/byj/22">direct</router-link>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
//  import error from './components/error'
  import store from '@/vuex/store'
  import {mapState , mapMutations,mapActions,mapGetters} from 'vuex'

//  引用store到组件里面才能使用这样才能当做属性用$store.commit('add', 10)在template使用
  export default {
    name: 'app',
    store,
    computed: {computed: {
      ...mapState(['count']),
      ...mapGetters(['count1'])
    },
//      利用扩展运算符都变成对象的属性
//    computed:mapState({count5:state=>state.count}),
//    computed:{
//        count2 ()
//       {
//        return	this.$store.state.count ;
//        },
//      count3:
//    },

    methods:{
      ...mapMutations(['add', 'reduce']),
      ...mapActions(['addAction', 'reduceAction']),
      goFore() {
          this.$router.go(-1);
      },
      goNext() {
        this.$router.go(1);
      },
      gohome() {
          console.log("所有属性想store引入以后再模板中使用要用$store引用里面的方法属性，因为在模板中引用就是相当于在vue中访问用vm.$data来访问用$属性访问")
        console.log("store是"+this.$store.commit);
//        function boundCommit (type, payload, options) {
//        return commit.call(store, type, payload, options)
//      }
          this.$router.push('/');
      }
    },

//  定义了这个钩子函数也可以在index.js里面配置也可以在.vue文件里面定义钩子函数参数都是一样的都是to，from，next
    beforeRouteEnter: (to, from, next) => {
      console.log('准备进入') ;

      next() ;
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('准备离开') ;
      next() ;
    }
}}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  overflow:0;
  transition: opacity 0.5s;
}
</style>
