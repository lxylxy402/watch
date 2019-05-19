<template>
  <div class="secbgcolor" style='background:#856D35' ref='home' id='home'>
    <div class="third" id='sec' style='background:white'>
    <div class="head">{{data.goods.gName}}</div>
    <div style='height:30px;background:white'></div>
    <img :src="firdrimg" alt class="imgCl">
    <div style='background:#E5E5E5;color:#F7762E;padding:4px 10px;text-align:center'>
        <span>{{data.goods.gName}}</span>
    </div>
    <div style='background-color:#44361C'>
         <el-row class='row_border' style='padding:20px 20px'>
           <el-col :span=24>
              <table style='width:100%'>
                 <tr>
                     <td>
                         <span  style='color:yellow;font-size:3rem;'>￥2680
                        </span>
                    </td>
                       <td>
                         <span class='block fontw col_line'>原价</span>
                        <span class='block fontg col_line' > ￥{{data.goods.gPrice}}</span>
                    </td>
                       <td>
                        <span class='block fontw col_line'>折扣</span>
                        <span class='block fontg col_line'>0.2</span>
                    </td>
                      <td>
                        <span class='block fontw col_line'>节省</span>
                        <span class='block fontg col_line'>￥{{data.goods.gPay}}</span>
                    </td>
                 </tr>
             </table>
           </el-col>
   </el-row>
   <el-row  class='row_border' style='padding:20px 20px'>
        <el-col :span='24' >
           <span  style='color:#9A7C48;font-size:1.3rem;'>
               已有1586人已购买</span>
       </el-col>
   </el-row>
   <el-row style='padding:20px 20px'>
       <el-col :span='24' >
                <a @click.prevent="buyclick(1)" style='' class='dev_button'>
                <span>立即购买</span>
            </a>  
       </el-col>
   </el-row>
    </div>
  <el-row>
      <el-col :span='24' style='background:#EEE9E6;height:30px'>
          <span style='color:#6C594D;line-height:30px;font-weight:600'>▼抢购描述</span>
      </el-col>
  </el-row>
    <!-- <el-row >
        <el-col :span='24' >
            <span style="font-size:0.9rem;margin:4px 0px;color:#474747">剩余时间：</span>
           <div  class='timeBox' style='display:inline-block'>
          <span>{{time.hour}}小时</span>
          <span>{{time.minute < 10 ? 0 : ''}}{{time.minute}}分钟</span>
          <span>{{time.second < 10 ? 0 : ''}}{{time.second}}.{{ num }}秒</span>
        </div>
        </el-col>
    </el-row> -->
    <!-- <el-row>
        <el-col :span=24 style="padding:20px 3%">
            <a href="#submit" style='' class='dev_button'>
                <i class='el-icon-sold-out' style='color:white;padding-right:5px'></i>
                <span>立即购买</span>
            </a>
        </el-col>
    </el-row> -->
       <!-- <el-row ref='fixhead' class='hd' width='100%' :class="{'fixed-td':bol}">
        <el-col :span=6  >
                   <a href="#detail">商品介绍</a>
        </el-col>
        <el-col :span=6>
                   <a href="#submit">服务承诺</a>
        </el-col>  
        <el-col :span=6>    
                   <a href="#pinjia">热门评价</a>
        </el-col>  
        <el-col :span=6>
                   <a href="#pinjia">联盟商家</a>
             
        </el-col>
    </el-row> -->
    <el-row id='detail'>
        <el-col :span=24>
    <img v-for='(item,index) of showimge'  :key="'img'+index"  :src="item" alt class="imgCl" >
        </el-col>
    </el-row>
           <img src="@/assets/detail/2-8.png" alt="" class="imgCl" >
            <Submit id='buy'  :gName='data.goods.gName' :gPay='data.goods.gPay'></Submit>
           <evaluate></evaluate>
    <el-row>
    <el-col :span='24' style='text-align:center;margin:10px auto'>
        <img  src="@/assets/detail/foot.png" alt="">    
    </el-col>
    </el-row>
    <el-row>
        <el-col :span='24' style='text-align:center;margin:10px auto'>
            <span>瑞士名表旗舰店</span>
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
import evaluate from '@/components/evaluate.vue'
export default {
  components:{Submit,evaluate},
  data() {
    return {
      url: require("../assets/picture/b1.jpg"),
      arr: [],
      firdrimg:'',
      bol:false,
      showimge:[],
      mesg:[{name:'限时抢购',value:'750元'},
      {name:'市场价格',value:'7500元'},
     ],
     detailarr:[
         [{name:'品牌：',value:'劳力士',index:'a1'},{name:'系列:',value:'日志型系列',index:'a2'},
         {name:'款式:',value:'男表',index:'a3'},{name:'记性:',value:'自动机械',index:'a4'}],
          [{name:'表壳:',value:'黄金及904L精钢',index:'b1'},{name:'表盘尺寸：',value:'36mm,41mm',index:'b2'},
         {name:'表冠：',value:'普通',index:'b3'},{name:'表底：',value:'不透底',index:'b4'}],
          [{name:'表镜：',value:'蓝宝石水晶玻璃',index:'c1'},{name:'表盘：',value:'香槟色',index:'c2'},
         {name:'表带：',value:'间金',index:'c3'},{name:'表带颜色：',value:'金色 银色',index:'c4'}],
          [{name:'防水：',value:'50米',index:'d1'},{name:'包装：',value:'精美原装包装盒',index:'d2'},
         {name:'功能：',value:'日期显示 大三针',index:'d3'},{name:'表扣：',value:'折叠扣',index:'d4'}],
     ],
      shopList: [
        { url: require('../assets/detail/2-1.jpg'), title: '浪琴longines-名匠系类L2.518.5.77.7 男士机械表', price:'1078' },
        { url: require('../assets/detail/2-2.jpg'), title: '浪琴longines-瑰丽系列 L4.821.2.11.2 男士机械表', price:'788' },
        { url: require('../assets/detail/2-3.jpg'), title: '浪琴longines-名匠系列 L2.673.4.78.6 男士机械表', price:'1058' },
        { url: require('../assets/detail/2-4.jpg'), title: '浪琴时尚腕表 L2.629.4.78.3', price:'790' },
         { url: require('../assets/detail/2-5.jpg'), title: '浪琴longines-名匠系类L2.518.5.77.7 男士机械表', price:'1078' },
        { url: require('../assets/detail/2-6.jpg'), title: '浪琴longines-瑰丽系列 L4.821.2.11.2 男士机械表', price:'788' },
        { url: require('../assets/detail/2-7.jpg'), title: '浪琴longines-名匠系列 L2.673.4.78.6 男士机械表', price:'1058' },
        { url: require('../assets/detail/2-8.png'), title: '浪琴时尚腕表 L2.629.4.78.3', price:'790' },
    
    
      ],
      sever:[  
          { url: require('../assets/detail/1-21.jpg'), title: '浪琴时尚腕表 L2.629.4.78.3', price:'790' },
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
      handleScroll () {
       this.bol=window.scrollY>window.outerHeight+150;

      },
      getlist(){
          this.showimge=this.data.images.slice(0,this.data.images.length);
          this.firdrimg=this.showimge[0];
          this.showimge.splice(0,1);
          
      },
      getcss(){
       document.getElementById('app').classList.remove('PCwidth');
       document.getElementById('sec').classList.add('PCwidth');
      },
      livecss(){
          document.getElementById('app').classList.add('PCwidth');
      },
       buyclick(type){
          switch(type){
              case 1:
              document.querySelector("#buy").scrollIntoView(true);
              break;
          }
      },
  },
  destroyed(){
    this.livecss();
  },
  mounted() {
    this.getUrl();
    this.getcss();
    this.getlist();

  }
};
</script>
<style lang="less">
.third {
    a:hover{
    color:red;
    text-decoration: underline
}
.block{
    display: block;
    text-align: center;
}
.fontw{
    color:white;
    font-size: 0.8rem;
}
.fontg{
    color:#766536;
    font-size: 0.6rem;
}
.row_border{
    border-bottom: 1px solid #524524;
}
.col_line{
    line-height: 1.7rem;
}
  .head {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: white;
    background: black;
    height: 50px;
    line-height: 50px;
  }
  .bodyPad {
  padding:0 10px;
}

.imgCl {
  width: 100%;
}
.dev_button{
    display:block;
    height:2rem;
    line-height:2rem;
    width:98%;
    background-color:#FF5600;
    color:white;
    text-align:center;
    text-decoration:none;
    border-radius: 5px;

    
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

.fixed-td{
width:100%;
    position: fixed;
    top: 0;
    z-index:99
}

    
}


</style>
