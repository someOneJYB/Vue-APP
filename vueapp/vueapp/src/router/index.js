import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/page'
import Pic from '@/components/Pic'
import Big from '@/components/big'
import Music from '@/components/Music'
import Test from '@/components/test'
import Book from '@/components/Book'
import Con from '@/components/content'
import Mf from '@/components/musicf'
import Mdetail from '@/components/musicDetail'
import movieDetail from '@/components/MovieDetail'
import whether from '@/components/whether1'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [


    {
      path: '/',

      component: HelloWorld,
      redirect: '/page/content'

    //  不用router-view现实的组件不需要配置在index里面，想用router跳转才使用index里面配置，但是我们不配置也可以通过import使用的组件在.vue里面得components里面配置，
    },
    {
      path: '/test',

      component: Test,
      redirect: '/test'

      //  不用router-view现实的组件不需要配置在index里面，想用router跳转才使用index里面配置，但是我们不配置也可以通过import使用的组件在.vue里面得components里面配置，
    },
    {
      path: '/page',

      component: page,
      children:
        [
          {
            path: 'whether',

            component:whether
          },
          {
           path: 'musicf',

        component: Mf,
        redirect:'/page/musicf/music',
        children:[{
            path: 'mDetail',

           component: Mdetail
           },{
          path: 'music',

          component:  Music
        }
        ],

      },
        {
      path: 'content',

      component: Con
       },{
        path: 'book',

        component: Book
      },{
        path: 'pic',

        component: Pic
      },{
          path: 'big/:index',

          component: Big
        },{
          path: 'movieDetail/:id',

          component: movieDetail
        }
      ]
    },
      // {
      //   path: '/page/content',
      //
      //   component: Con
      // }



  ]
})
