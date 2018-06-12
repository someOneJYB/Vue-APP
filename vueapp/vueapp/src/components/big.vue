<template>
  <vu-touch @swipeleft="left" @swiperight="right" @tap="go">
    <div >
    <common-header bg="rgb(0, 150, 0)">
      <h1 slot="title">MAIN</h1>
    </common-header>
    <div class="bg"    :style="style"></div>
  </div>
  </vu-touch>

</template>
<!--？发现style属性未定义使用this.index作为索引以后data里面return只会发生一次，所以计算属性会使得产生改变的新值，会监测到实时计算
因为Vue-touch不可以直接支持Vue2.0所以下载的时候用@next-->
<script>

  import CommonHeader from './movie/header'
  export default {
      data(){
          return{
              show:0,
            index:0,

          }
      },
    computed:{
        style(){
            return   {
            background:`#000 url(${this.$store.state.imglist[this.index].src}) no-repeat center/contain`
          }
        }
    },
    components: {
      CommonHeader

    },
    methods:{
        left(){
         this.index--;
         console.log(this.index)
         if(this.index==-1){
             this.index=0;
         }
        },right(){
        this.index++;
        console.log(this.index)
        if(this.index==this.$store.state.imglist.length){
          this.index=this.$store.state.imglist.length-1;
        }
      } ,go(){
            this.$router.push('/page/pic')
      }
    },
    mounted(){
          this.index=this.$route.params.index;
        console.log(this.$route.params.index);
        console.log(this.$store.state.imglist);
        this.show=`url(${this.$store.state.imglist[this.$route.params.index].src})`;
    console.log(this.show);
      }

  }
</script>

<style scoped>
/*style里面这样写是center/size*/
.bg{

  background-repeat:no-repeat;
position: absolute;
  left:0;
  top:1rem;
  right:0;
  bottom:0;
  background: #000;

}
</style>
