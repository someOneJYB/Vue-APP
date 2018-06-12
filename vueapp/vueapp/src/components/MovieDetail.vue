<template>
<div class="detail">

  <!--<h1>{{$route.params.id}}</h1>-->


      <img :src="movieDetail.img" alt="" class="movie-img">
<div class="info">
  <h3>{{movieDetail.nm}}</h3>
  <h4>导演：{{movieDetail.dir}}</h4>
  <h5>类型：{{movieDetail.cat}}<br>评分{{movieDetail.sc}}分</h5>
  <h6>简介：{{movieDetail.dra}}</h6>
</div>


</div>
</template>

<script>
import Axios from 'axios'
  export default {
    name: 'app',
    data(){
        return{
          movieDetail:{}
        }
    },
    mounted(){
      Axios.get("/static/data/moviedetail.json").then((res)=>{
        console.log("res");
          console.log(res.data.data.MovieDetailModel);
        this.movieDetail=res.data.data.MovieDetailModel;
      })
    }
  }
</script>

<style scoped>
  .detail{
    margin:1rem 0;
    display: flex;}

  .movie-img{
    flex: 1;
  }
  .info{
    flex: 2;
  }
  .info h3,h4,h5{
    text-align: center;
  }
  img{
    width: 100%;
    margin:0.2rem;
  }
</style>
