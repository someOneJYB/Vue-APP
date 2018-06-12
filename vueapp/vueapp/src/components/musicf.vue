<!--<template>-->
<!--<div>-->
<!--<common-header>-->
<!--<h1 slot="title">Music</h1>-->
<!--</common-header>-->
<!--<router-view></router-view>-->
<!--&lt;!&ndash;<common-footer></common-footer>&ndash;&gt;-->
<!--&lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;-->
<!--&lt;!&ndash;<router-view/>&ndash;&gt;-->
<!--&lt;!&ndash;这句话是为了显示其他组件的&ndash;&gt;-->
<!--&lt;!&ndash;虽然不引入header和footer也会显示因为他们都是page的孩子但是就无法改变header里面的title标题所以就得写&ndash;&gt;-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import CommonFooter from '../components/movie/footer'-->
<!--import CommonHeader from '../components/movie/header'-->
<!--export default {-->
<!--components: { CommonFooter,-->
<!--CommonHeader  }-->
<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
<template>
  <div>

    <common-header bg="rgb(0, 255, 136)">
      <h1 slot="title">Music</h1>
      <!--利用slot给header组件里传递标签，改变html结构-->
    </common-header>
<router-view></router-view>

</div>

</template>

<script>

  /*import是es6和require是node符合com默默JS规范，二者都是引入
   * v-for里循环固定数字*/
  import CommonHeader from '../components/movie/header'
  //  import CommonHeader from '../components/movie/footer'
  import  Axios from 'axios'

  export default {
    data(){
      return{
        imgList:[],
        imgName:[]
      }

    },
    methods:{
      goDetail(){
        console.log(1)
        this.$router.push('/page/music/mDetail')}
    },
    components:{
      CommonHeader,
      props:["bg"]
    },
    mounted(){
      Axios.get("/static/data/musiclist.json").then((res)=>{

        this.imgList=res.data.albums;
        console.log("zhuanji")
        for(let i=0;i<this.imgList.length;i++){
          this.imgName.push('/'+this.imgList[i].bg)
        }
        console.log(this.imgList);
        console.log("zhuanji1")
      }).catch((res)=>{

      })
    }


  }
</script>

<style scoped>

  .Music-img{
    margin:1rem 0 ;
    overflow:hidden;
  }
  li{
    float:left;
    width: 50%;
  }
  li img{
    width: 100%;
  }
</style>
