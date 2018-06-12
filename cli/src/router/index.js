import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Test1 from '@/components/test1'
import Test2 from '@/components/test2'
import Tes from '@/components/tes'
import Alas  from  '@/components/alas'
import Error  from  '@/components/error'
//  import文件vue就是从node_module里面引入进来的
// @代表SRC在此处先声明导入的组件然后配置组建的路由路径,路由的配置在router下的index.js*/

Vue.use(Router)
//router对象在这里
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,
      //钩子函数组件的跳转与否next函数
      beforeEnter: (to, from, next) => {
        console.log("to"+to);
        console.log("from"+from);
        next(true);//false设置为false就不会发生跳转了
      },
      children: [{
        path: 'test2',
        name:'test2',
        component: Test2
      },

        {
        path: 'test1/:age',

        component: Test1
        }
      ]
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    },
    {path: '/tes/:name/:age',
      name: 'tes',
      component: Tes,
      children: [{
        path: '/alas',
        name:'alas',
        component: Alas,
        alias:'/aa'
      //即便是作为一个子路由只要有了别名在直接在link时候写别名就行不用再写父路径/子别名这是请求不到的
      }
    ]},
    {
      path: '/t/:name/:age',
      redirect: '/tes/:name/:age'
    //  redirect里面一定要写真实的路径，然后再router-link里面访问/t传参数就可以到达tes但是URL就是tes了。redirect的意思就是弄了一个假的URL显示这就会显示即使是routerlink是"/tes"但是跳转的地方显示得是/t这就是重定向的功劳一个虚假的URL名
    },{
      path: '*',
      //*表示匹配不存在的
      name: 'error',
      component: Error
    //  component对应得是导入的组件最关键
    }
  ]

      // component: HelloWorld这个就是我们需要引入的组件
      //  涉及到了子路由就是children:[{path:,
      // component:同时导入的组件要在上面import}]
      //  利用{{$route.name}}可以取得当前组件的名字放]
})
// component: HelloWorld这个就是我们需要引入的组件
//  涉及到了子路由就是children:[{path:,
// component:同时导入的组件要在上面import}]利用{{$route.name}}可以取得当前组件的名字放在
