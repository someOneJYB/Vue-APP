<template>
  <div>
    <common-header bg="rgb(221, 225, 0)">
      <h1 slot="title">whether</h1>

    </common-header>
    <div class="show">
      <div   @click="heading">{{item}}<span>&lt</span></div>
      <div  @click="son">{{item2}} <span>&lt</span></div>
      <button class="search" @click="seeWhether">查询天气</button>
    </div>
    <ul class="head"  v-show="one" >
      <li v-for="(item,index)  in   cityHead"    @click="choose(item,index)">
        {{item}}
      </li>
    </ul>
    <ul class="sub"  v-show="two">
      <li v-for="it  in  sub"   @click="choose2(it)">
        {{it}}
      </li>
    </ul>
    <div class="now">
      <span>city:{{item2}}</span>
      <span class="du">温度：{{wdata.wendu}}°C</span>
      <h1>空气质量:{{wdata.quality}}</h1>
      <span>pm2.5:{{wdata.pm25}}|湿度：{{wdata.shidu}}</span>
    </div>
    <div class="temp" id="chart"></div>
  </div>
</template>

<script>
  import axios from 'axios'
import echarts from 'echarts'
  import CommonHeader from '../components/movie/header'
  export default {
    data(){
      return {
        option :{
          title: {
            text: '最近五天天气',
            subtext: '',
            textStyle:{
                fontSize:10
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {width:100,
            data:['最高气温','最低气温'],

          },

          toolbox: {
              width:100,
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: []
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          series: [
            {
              name:'最高气温',
              type:'line',
              data:[],

              markPoint: {
                symbolSize:25,
                label:{
                  normal:{
                    fontSize:0.1
                  }
                },
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'},

                ],

              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }},

            {
              name:'最低气温',
              type:'line',
              data:[],

              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {

                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }
                  ]
                ]
              }
            }
          ]
        },

        cityHead:[],
        sub:[],
        Headflag:0,
        date:[],
        high:[],
        low:[],
        one:false,
        two:false,

        warm:[],
        all:[],
        index:0,
        item:'',
        item2:'',
        wdata:0
      }
    },

    methods: {
seeWhether(){
  axios.get('https://bird.ioliu.cn/v1/?url='+"http://www.sojson.com/open/api/weather/json.shtml?city="+this.item2).then(res=>{
    console.log(this.item2+"获取这个城市数据");
    console.log(res);
    this.wdata=res.data.data;
   this.warm=res.data.data.forecast.forEach(el=> {
     this.date.push(el.date.substring(0,3));


     console.log(el.date);
     this.high.push(parseInt(el.high.substring(3)));
     this.low.push(parseInt(el.low.substring(3)));
   });


this.option.xAxis.data=this.date;
    this.option.xAxis.data=this.date;
    this.option.series[0].data=this.high;
    let myChart = echarts.init(document.getElementById('chart'));
    this.option.series[1].data=this.low;
    myChart.setOption(this.option);
  })
  },
      son(){
        if (this.Headflag === 1) {
          this.two=true;
          this.sub = this.all[this.index].sub;

        }
      },
      heading(){
        this.Headflag = 0;
//        表示没有选择
        this.one = true;
        this.two=false;
//        显示城市下拉
        this.item2="";
//        现实的城市为空
      },
//进行选择城市时候第二个菜单不显示
      choose(el, index){
        this.index = index;
        this.two = false;
        this.item = el;
        this.Headflag = 1;
        this.one = !this.one;
      },

      choose2(it){
        console.log("index2" + this.index)
        if (this.Headflag == 1) {

          this.item2 = it;
          this.sub = this.all[this.index].sub;
          console.log("index2" + this.index)
          this.two = !this.two;
          this.Headflag=0;
        }

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
//      window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

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
  .temp{
    margin-bottom: 1rem;
    width: 100%;
    height: 5rem;

    margin-top:0.3rem;
  }
  h1{
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
  .now{
    height: 5rem;
    background-image:url("../assets/2.jpeg");
    background-size:contain;
    background-repeat: no-repeat;
  }
  .now span{
    color:white;
    font-size:0.5rem;
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
  .du{
    float:right;
    font-size:0.5rem;
    margin-top: 0.5rem;
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
