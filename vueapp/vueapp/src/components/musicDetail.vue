<template>

<div class="main" >
  <a-player v-if="show" ref="player" :autoplay="true" :music="songs" ></a-player>
</div>

</template>

<script>
  import axios from 'axios'
import aplayer from "vue-aplayer"
  import APlayer from 'aplayer'
  /*let player=new APlayer()*/
  export default {
data(){
return{
 first:1,
  songs: [],


show:false
}
},

    components: {
      //别忘了引入组件
      'a-player': aplayer
    },
    mounted(){
    axios.get('/static/data/musicdata.json').then(res=>{

      console.log("接受值");
      console.log(res.data.musicData)
      res.data.musicData.forEach(el=>{
          this.songs.push({
            title:el.title,
            author:el.author,
            url:el.src,
             pic:el.musicImgSrc

          });
          this.show=true;
      })
    });
   /* console.log("player")
    console.log(this.$refs.player.control.event.pause);
    this.first=this.$refs.player.control.event;*/

    },
   /* mounted() {
      console.log(this.$refs+"we")
    console.log(this.$refs)
    },*/
    beforeRouteLeave: (to, from, next) => {

   /*this.first.pause();*/

    next();}
  }
</script>

<style scoped>
.main{
  margin:2rem 0;
  /*子路由是一定会在父元素中渲染的只要父元素设置了router-view*/
}
</style>
