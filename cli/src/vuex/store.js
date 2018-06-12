/**
 * Created by jiaoge on 2017/11/19.这个文件中必须是store.js这样就可以把我们需要的状态管理的组件共用数据在很多页面里面使用的数据Vue里面组件文件名首字母大写
 */
// vuex这是一个自己建立的文件夹，里面的store.js也是命名规定的，必须要这样写里面是一些多个组件间的共享数据，里面有
import Vue from 'vue'
import Vuex from 'vuex'
// 以上两个步骤是从node——module里面导入这两个文件
Vue.use(Vuex)
// 使用vuex自定义vue全局组件use使用(解释vue.use()的原理)
// 我们在前面学习到是用别人的组件：Vue.use(VueRouter)、Vue.use(Mint)等等。
//state对象相当于data里面有我们的数据属性
const state = {
  count: 1
}
// state是Vuex的数据对象类似于data
// 这是一个属性是用来放一些函数的
const mutations = {
  add (state, num=9) {
    state.count += num ;
  },
  reduce (state) {
    state.count--;
  }
}

//相当于computed计算属性
const getters = {
  count1 (state) {
    return state.count += 100 ;
  }
}
// 这个action也是一个函数但是里面的函数最终是提交给上面的mutation来处理
const actions = {
  addAction ({commit}, num=9) {
    console.log("commit"+commit);

    console.log(context);
    commit('add', num) ;
  },
  reduceAction ({commit}) {
    commit('reduce') ;
  }
}

// 最后实在应用这些属性放到vuex对象中并且暴露给外面,外面import store.js就可以组件里面使用vuex的暴露给外面的方法
export default new Vuex.Store({
  state,
  //ES6方法相当于state:{count:1}
  mutations,
  getters,
  actions
});
// vuex里面的东西是所有组件都公用的，这样不存在每个组件都要写一遍

