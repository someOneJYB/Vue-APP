<template>
<div class="bag">

  <ul class="movie-list">
  <li v-for="movie in movieInfo" :key="movie.id" class="movie" @click="showDetail(movie.id)">
    <div class="movie-img">
      <img :src="movie.img" alt="">
    </div>
    <div class="movie-info">
      <p class="movie-name">{{movie.nm}}</p>
      <p>{{movie.ver}}</p>
      <p>主演：{{movie.star}}</p>
      <p>{{movie.showInfo}}</p>
    </div>
  </li>
</ul>

  <img class="loading"   src="../assets/loading.gif" alt="" v-show="loadingShow">
<h1 id="bom" v-show="isBotm">到底啦！！！</h1>
</div>

</template>

<script>
  import  Axios from 'axios'
//  从package.json里面获取

  export default {
    name: 'app',
    data(){
      return {
        movieInfo:[],
        loadingShow:false,
        isBotm:false,
        cache:[]
      }
    },
    mounted(){
      this.getData();
        /*offset表示偏移量，而且dom事件的函数当然是写在mounted里面，普通函数还是要写在methods里面*/
//       let that=this;
//      Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=10").then(function (res) {
//         console.log("res是")
//        console.log(res.data.data);
////       this.loadingShow = false;
//       that.moveList = res.data.data.movies;
//});
//      Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=10")
//      Axios.get('/static/data/moviedata.json')
//        .then(res => {
////           console.log(res);
//          this.loadingShow = false;
//          let cache=res.data.data.movies;
////          模拟每十条数据而且滚动条到达底部就加载数据,那就要在一开始先展示十条数据然后再滚动条到达底部请求数据在原来的基础上添加10条
//
//         this.movieInfo = res.data.data.movies.slice(0,10);
//         console.log( this.movieInfo);
//
//        })
//        .catch(() => {});
      window.onscroll=()=>{
          console.log(this.$parent.ok);
        let wh=document.documentElement.clientHeight;
        let dH=document.documentElement.scrollHeight;
        let sh=document.documentElement.scrollTop;
        if(wh+sh==dH){
            this.loadingShow = true;
//            只要到底都要先加载条出现
            if(this.isBotm==false){
//             还可以加载数据，数据没有到底
              this.getData();

            }
            else{
              this.loadingShow = false;
            }
        }

     }},
    methods:{
                getData(){
               Axios.get('/static/data/moviedata.json').then(res => {




                        let cache=res.data.data.movies.slice(this.movieInfo.length,this.movieInfo.length+10);
                        if(cache.length<10){
                 this.isBotm=true;
                        }
                 this.loadingShow = false;
//              这个是数据获取成功则滚动条在获取后不存在
//          模拟每十条数据而且滚动条到达底部就加载数据,那就要在一开始先展示十条数据然后再滚动条到达底部请求数据在原来的基础上添加10条
// 如果获取的数据比10条小了就证明到底了
              this.movieInfo = res.data.data.movies.slice(0, this.movieInfo.length+10);
//              这个语句保证了每一次数组里面放的都是数据加10


                 });

        },
      showDetail(id){
                    console.log(this);
//                    有自己的vue对象，但是我还是不太懂内部构造，写完这个项目再说吧

this.$router.push('/page/movieDetail/'+id)
        }
    }


  }
</script>

  <style>
  .bag{
  margin:1rem 0 ;
/*position:absolute;*/
}
    .movie{
      display: flex;
    }
    .movie-img {
      flex:1;

      margin-right: 0.2rem;
    }
    .loading{
      width: 10%;
      text-align: center;
   margin-left: 45% ;
      /*发现一个问题给某个组件设置position：bsolute就会让这个页面导入的组件变透明，导入的组件优先级变低,不要轻易设置position对于整体包裹组件*/
    }
  .movie-img{
    flex:1
  }
    .movie-info{
      flex:2
    }
    #bom{
     text-align: center;
    }
</style>
