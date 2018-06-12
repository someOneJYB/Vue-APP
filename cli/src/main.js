// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
//因为require了router所以就可知道会把里面的.vue文件打包这些require的文件都成为了main.js的依赖都会打包在我们的main.js文件里然后配置的loader就会plugin就会把各种文件拆分开来打包在里面。
Vue.config.productionTip = true

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
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
      },
  template: '<App/>',
  components: { App },
  //这就是.vue引入组件的方式组件想要先import组件文件名然后template: '<App/>',
  // components: { App },就可以用<App><App/>写到template里面就可以了
  methods: {
    show () {
      console.log({App});
      /*这是输出内容{…}
       App: Object { name: "app", _compiled: true, __file: "src\\App.vue", … }
       __proto__: {…}
       __defineGetter__: function __defineGetter__()
       __defineSetter__: function __defineSetter__()
       __lookupGetter__: function __lookupGetter__()
       __lookupSetter__: function __lookupSetter__()
       constructor: function Object()
       hasOwnProperty: function hasOwnProperty()
       isPrototypeOf: function isPrototypeOf()
       propertyIsEnumerable: function propertyIsEnumerable()
       toLocaleString: function toLocaleString()
       toSource: function toSource()
       toString: function toString()
       unwatch: function unwatch()
       valueOf: function valueOf()
       watch: function watch()*/
      // 所以直接输出APP也不可以就是一个文件名所以要知道他的对相应
      // 因为router是一个文件里面可以用的是里面的route对象放在了Vue里面
      // for(let p in this)
      //   console.log(p+"值是"+this[p])
      // console.log("组件的值是："+this.components)
      // console.log("router的值是："+this.$route)
      for (let w in this.$route) {
        console.log(w + "route的对象是：" + this.$route[w])
      }
    }
  }
 })
vm.show();
