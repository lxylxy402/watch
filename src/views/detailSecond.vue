<template>
<div >
  <div class="sec" ref='home' id='sec'>
    <div style='position:fixed;z-index:999;width:100%;top:0;max-width:640px' v-show='bol'>
        <el-row  class='hd' style='display: flex;top:0;'>
            <el-col :span=6  >
                    <a @click.prevent="buyclick(1)">商品介绍</a>
            </el-col>
            <el-col :span=6>
                    <a @click.prevent="buyclick(2)">服务承诺</a>
            </el-col>  
            <el-col :span=6>    
                    <a @click.prevent="buyclick(3)">热门评价</a>
            </el-col>  
            <el-col :span=6>
                    <a @click.prevent="buyclick(4)">立即购买</a>
                
            </el-col>
        </el-row>
    </div>
     
    <div class="head">{{data.goods.gName}}</div>
    
    <img :src="headimg" alt class="imgCl">
    <div style='background:#E5E5E5;color:#F7762E;padding:4px 10px;text-align:center'>
        <span>{{data.goods.gName}}</span>
    </div>
    <el-row  style="margin:7px 3px">
        <el-col :span='24' >
            <span style="color:#979797;font-size:0.9rem;margin:4px 0px">限时抢购:</span>
            <span :style="{color:'red',paddingLeft:10+'px',fontSize:1+'rem',}">{{data.goods.gPay}}</span>

        </el-col>
        <el-col :span='24'>
           <span style="color:#979797;font-size:0.9rem;margin:4px 0px">市场价格:</span>
            <span :style="{color:'#66667F',paddingLeft:10+'px',fontSize:1+'rem',textDecoration:'line-through'}">{{data.goods.gPrice}}</span>
        </el-col>
    </el-row>

    <el-row >
        <el-col :span='24' >
            <span style="font-size:0.9rem;margin:4px 0px;color:#474747">剩余时间：</span>
           <div  class='timeBox' style='display:inline-block'>
          <span>{{time.hour}}小时</span>
          <span>{{time.minute < 10 ? 0 : ''}}{{time.minute}}分钟</span>
          <span>{{time.second < 10 ? 0 : ''}}{{time.second}}.{{ num }}秒</span>
        </div>
        </el-col>
    </el-row>
    <div @click.prevent='buyclick(4)' class='canBay'>
        <i class='el-icon-sold-out' style='color:white;padding-right:5px'></i>
        <span>立即购买</span>
    </div>
    <div id='fixhead'>
        <el-row ref='fixhead' class='hd PCwidth' width='100%'>
            <el-col :span=6  >
                    <a @click.prevent='buyclick(1)'>商品介绍</a>
            </el-col>
            <el-col :span=6>
                    <a @click.prevent='buyclick(2)'>服务承诺</a>
            </el-col>  
            <el-col :span=6>    
                    <a @click.prevent='buyclick(3)'>热门评价</a>
            </el-col>  
            <el-col :span=6>
                    <a @click.prevent='buyclick(4)'>立即购买</a>
                
            </el-col>
        </el-row>
    </div>
    
      
    <el-row style='margin:5px 0' id='shopmesg' >
        <el-col :span="24">
            <span style='font-size:1.1rem;' v-if='detailtable.lenght===0' >基本参数：</span>
        </el-col>
    </el-row>
     <el-row  type="flex">
        <el-col :span="24" >
            <table width='100%' style='background-color:#E5E5E5;'>
                <tr   v-for="(item,index) of detailtable" :key="'q'+index" >
                    <td style="border-bottom:1px solid white;padding:3px 1px;text-align:left"  v-for="(itemson,indexson) of item" :key=itemson.index
                    :style='{borderRight:indexson===3?"0px solid white":"1px solid white"}'>
                
                         <span style='font-size:0.5rem;color:#474747'>{{itemson.name}}:</span>
                        <span ><a href="#" class='detail_a' >{{itemson.value}}</a></span>
                    </td>
                </tr>
            </table>

        </el-col>
    </el-row>
    <el-row id='detail'>
        <el-col :span=24>
    <img v-for='(item,index) of bodyimg' :key="'img'+index"  :src="item" alt class="imgCl" >
        </el-col>
    </el-row>
    <Submit id='buy' :gName='data.goods.gName' :gPay='data.goods.gPay'></Submit>
    <el-row >
        <el-col :span=24>
        <img src="@/assets/detail/1-21.jpg" alt="" id='serve' class="imgCl" >
        </el-col>
        <el-col :span=24 id='promise'>
        
            <img v-for='(item,index) of sever' :key="'img-sev'+index"  :src="item.url" alt class="imgCl" >
        </el-col>
    </el-row>
          
<!--    
    <img  src="@/assets/detail/1-3.gif" alt class="imgCl" >
    <img  src="@/assets/detail/1-4.jpg" alt class="imgCl" >
    <img  src="@/assets/detail/1-5.jpg" alt class="imgCl" >
    <img  src="@/assets/detail/1-6.jpg" alt class="imgCl" >
    <img  src="@/assets/detail/1-7.jpg" alt class="imgCl" > -->
    <!-- <img :src="arr[0]" alt> -->
    <!-- <div class='bodyPad'> -->
      <!-- <div style='padding:10px 0;border-bottom: 1px solid #D7D7D7;'> -->
        <!-- <span>剩余时间：</span> -->
        <!-- <div class='timeBox' style='display:inline-block'>
          <span>{{time.hour}}小时</span>
          <span>{{time.minute < 10 ? 0 : ''}}{{time.minute}}分钟</span>
          <span>{{time.second < 10 ? 0 : ''}}{{time.second}}.{{ num }}秒</span>
        </div> -->
        <!-- <el-row style='margin-top: 18px;'>
          <el-col :span="4"><img src="@/assets/homes/guan.jpg" alt=""></el-col>
          <el-col :span="10">
            <img src="@/assets/homes/xinx.jpg" alt="" style='width:113px'> <span style='top: 2px;position: absolute;font-size: 13px'>4.9分</span>
            <div style='font-size: 13px'>瑞士名表旗舰店</div>
          </el-col>
          <el-col :span="6">
            <div class='guanfang'>
              <img src="@/assets/homes/zheng.jpg" style='width:12px;height:14px;position: relative;top: 3px;'>
              <span style='font-size: 14px'>官方直营</span>
            </div>
          </el-col>
        </el-row> -->
      <!-- </div> -->
    <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Submit from '@/components/submit.vue'
export default {

  components:{Submit},
  data() {
    return {
      url: require("../assets/picture/b1.jpg"),
      arr: [],
      detailtable:[],
      headimg:'',
      bodyimg:[],
      bol:false,
      sever:[  
         { url: require('../assets/detail/1-22.jpg'), title: '浪琴longines-名匠系类L2.518.5.77.7 男士机械表', price:'1078' },
        { url: require('../assets/detail/1-23.jpg'), title: '浪琴longines-瑰丽系列 L4.821.2.11.2 男士机械表', price:'788' },
        { url: require('../assets/detail/1-24.jpg'), title: '浪琴longines-名匠系列 L2.673.4.78.6 男士机械表', price:'1058' },]
    };
  },
  props: ['shopName','data'],
  computed: {
    ...mapState({
      time: state => state.time,
      num: state => state.num
    })
  },
  methods: {
    getUrl() {
      this.arr[0] = require("../assets/picture/b1.jpg");
    },
    getcss(){
       document.getElementById('app').classList.remove('PCwidth');
       document.getElementById('sec').classList.add('PCwidth');
       // document.getElementById('head').classList.add('PCwidth');
    },
    livecss(){
        document.getElementById('app').classList.add('PCwidth');
      },
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#fixhead').offsetTop
        scrollTop > offsetTop ? this.bol = true : this.bol = false
        console.log('this.bol')
        console.log(this.bol)
      },
       buyclick(type){
          switch(type){
              case 1:
              document.querySelector("#shopmesg").scrollIntoView(true);
              break;
              case 2:
              document.querySelector("#serve").scrollIntoView(true);
              break;
              case 3:
              document.querySelector("#promise").scrollIntoView(true);
              break;
                case 4:
              document.querySelector("#buy").scrollIntoView(true);
              break;
          }
      },
      getlist(){
        this.headimg=this.data.images[0];
         let detailtable1=[]; 
         detailtable1=this.data.detail?this.data.detail:[];
        //  detailtable1=[{name:'品牌：',value:'劳力士',index:'a1'},{name:'系列:',value:'日志型系列',index:'a2'},
        //  {name:'款式:',value:'男表',index:'a3'},{name:'记性:',value:'自动机械',index:'a4'},
        //  {name:'品牌：',value:'劳力士',index:'a1'},{name:'系列:',value:'日志型系列',index:'a2'},
        //  {name:'款式:',value:'男表',index:'a3'},{name:'记性:',value:'自动机械',index:'a4'},{name:'款式:',value:'男表',index:'a3'},{name:'记性:',value:'自动机械',index:'a4'}];
         let num=[];
          detailtable1.map((item,index)=>{
            num.push(item)
            let nindex=index+1;
            if(nindex%4===0){
              this.detailtable.push(num);
              num=[];
            }else if(nindex===detailtable1.length && num!==[]){
                this.detailtable.push(num);
            }
           
          });
         
     
         //console.log(this.detailtable)
        this.bodyimg=this.data.images.slice(1,this.data.images.length-1);
        //console.log(this.data)
      }
      
  },
 destroyed(){
    this.livecss()
    window.removeEventListener('scroll', this.handleScroll)
},
  
  mounted() {
    this.getUrl();
    this.getcss();
    this.getlist();
    this.$nextTick(function(){window.addEventListener('scroll', this.handleScroll)})
  }
};
</script>
<style lang="less">
.sec {
    a:hover{
    color:red;
    // text-decoration: underline
}
  .head {
    font-size: 15px;
    text-align: center;
    color: #fff;
    background: #00a5ea;
    height: 50px;
    line-height: 50px;
  }
  .bodyPad {
  padding:0 10px;
}

.imgCl {
  width: 100%;
}
.canBay{
    // display:inline-block;
    // width:100%;
    background-color:#00365F;
    color:#66c2ff;
    text-align:center;
    // text-decoration:none;
    padding:5px;
}
.timeBox {
  span {
    font-size: 18px;
    text-align: center;
    width: 65px;
    line-height: 30px;
    background: #E5E5E5;
    color: #002744;
    margin-right: 5px;
    display: inline-block;
    padding: 1px 5px;
    border-radius: 6px;
    font-weight: 600;
  }
}
.marTop {
  margin-top: 5px;
}
.guanfang {
    position: absolute;
    right: 0;
    top: 0;
    width: 82px;
    height: 23px;
    text-align: center;
    background: #00A5EA;
    -webkit-border-radius: 12px;
    border-radius: 12px;
    font-size: 0;
    color: #fff;
}
.detail_a{
    font-size:0.5rem;
    color:#66c2ff;
    text-decoration:none
}

 

.fixed-td{
width:100%;
    position: fixed;
    top: 0;
    z-index:99
}

    
}
.hd  a{
    color:#66c2ff;
    text-decoration: none;
 }
 .hd{
     border-bottom: 1px solid #00365F;
     padding:0px 0px;
    background: #FFF;
 }
 .hd .el-col{
     border:1px solid #ddd;
     text-align: center
 }
 .hd  a:hover{
    color:red;
    text-decoration: underline
}


</style>