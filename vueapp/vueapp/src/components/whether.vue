<template>
  <div>
    <common-header bg="rgb(221, 100, 0)">
      <h1 slot="title">whether</h1>

    </common-header>
   <div class="show">
     <div  @click="one=!one">{{chooseOne}}<span>&lt</span></div>
    <div @click="two=!two">{{item}} <span>&lt</span></div>
  <button class="search">查询天气</button>
   </div>
    <ul class="head"  v-show="cacheone" >
      <li v-for="item  in   cityHead" @click="choose(item)">
        {{item}}
      </li>
    </ul>
    <!--<ul class="sub"  v-show="two=!two">
      <li v-for="it  in   sub"   @click="choose2(it)">
        {{it}}
      </li>
    </ul>-->
  </div>
</template>

<script>
  import axios from 'axios'

  import CommonHeader from '../components/movie/header'
  export default {
      data(){
         return {
           cityHead:[],
           sub:[],

           cache:[],
           one:false,
           two:false,
           chooseOne:"",
           all:[],
           item:''
         }
      },
methods:{
  choose(it){
      this.chooseOne=it;
      this.one=false;

      this.all.forEach(el=>{
          if(el.head==it){
              this.sub=el.sub;
          }
      });
      this.two=false;
  },
  choose2(it){

    this.item=it;

    this.two=false;

  }
},
    components: {
      CommonHeader

    },
    mounted(){
          axios.get('/static/data/city.json').then(res=>{
              console.log(res.data.info);
              this.all=res.data.info;

            this.all.forEach(el=>{
                this.cityHead.push(el.head);
              });

          })
         /* axios.get('https://bird.ioliu.cn/v1/?url='+"http://www.sojson.com/open/api/weather/json.shtml?city=阜新").then(res=>{
              console.log(res);
          })*/
    }
  }
</script>

<style scoped>
  .search{
    border-radius: 5px;
    background:deepskyblue;
    border:1px solid black;
    color:white;
  }
  .show{
    margin-top: 1rem;
    height: 1rem;
    display: flex;
    background: deepskyblue;
    text-align: center;
    line-height: 1rem;
    color:white;
    font-size: 0.3rem;
  }
  .show div span{
    float:right;
    margin-right: 0.3rem;
    transform: rotate(90deg);
  }
  .show div{
    flex:1;
    border-right: 1px solid #ccc;
  }
.head{
  width: 100%;
}
.sub{
  width: 100%;
}
  li{
    background: #ccc;
    list-style: none;
    line-height: 1rem;
    height: 1rem;
    text-align: center;
    color:white;
    width: 100%;
    border-top:1px solid whitesmoke;
  }
</style>
