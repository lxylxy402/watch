<template >
<div style='background:#856D35' >
  <div class="four" style='background:white'  id='four' >
    <div class="head">{{data.goods.gName}}</div>
    <img src="@/assets/detail/3-1.jpg" alt class="imgCl">
   <img :src="data.images[0]" alt class="imgCl">
    <div style='background-color:#44361C'>
         <el-row class='row_border' style='padding:20px 20px'>
             <el-col :span=24>
                   <table style='width:100%'>
                 <tr>
                     <td>
                         <span  style='color:yellow;font-size:3rem;'>￥{{data.goods.gPay}}
                        </span>
                    </td>
                       <td>
                         <span class='block fontw col_line'>机芯</span>
                        <span class='block fontg col_line' > 瑞士原装</span>
                    </td>
                       <td>
                        <span class='block fontw col_line'>原价</span>
                        <span class='block fontg col_line'>￥{{data.goods.gPrice}}</span>
                    </td>
                      <td>
                        <span class='block fontw col_line'>节省</span>
                        <span class='block fontg col_line'>￥{{data.goods.gPrice-data.goods.gPay}}</span>
                    </td>
                 </tr>
             </table>
             </el-col>
           
       <el-col :span='9'>
           
       </el-col>
         <el-col :span='5'>
          
       </el-col>
       <el-col :span='5'>
           
       </el-col>
     
       <el-col :span='5'>
         
       </el-col>
   </el-row>
   <el-row  class='row_border' style='padding:20px 20px'>
        <el-col :span='9' >
           <span  style='color:#FF5701;font-size:1rem;font-weight:600'>
               已有1586人已购买</span>
       </el-col>
        <el-col :span='9' >
           <span  style='color:#F8F801;font-size:1.1rem;font-weight:600'>
               手机专属优惠</span>
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
          <span style='color:#6C594D;line-height:30px;font-weight:600'>▼优惠活动</span>
      </el-col>
  </el-row>
  <div class='yhhd'>
        <el-row style='border-bottom:1px solid #DEDEDE;margin:0px 20px;padding:8px 0px'>
            <table>
                <tr>
                    <td >  
                        <div class='btn_jgj'>
                                    加购价
                            </div>
                        </td>
                        <td>
                            <span>加399元 <b style='color:red'>送价值780元香奈儿女表</b></span>
                        </td>
                </tr>
            </table>
        </el-row>
         <el-row style='border-bottom:1px solid #DEDEDE;margin:0px 20px;padding:8px 0px'>
            <table>
                <tr>
                    <td >  
                        <div class='btn_jgj' style='width:76px'>
                                    年中大促
                            </div>
                        </td>
                        <td>
                            <span>豪礼钜献，全场一折包邮！ <b style='color:black'>每位顾客限购两只手表!</b></span>
                        </td>
                </tr>
            </table>
         </el-row>
          <el-row style='border-bottom:1px solid #DEDEDE;margin:0px 20px;padding:8px 0px'>
            <table>
                <tr>
                    <td >  
                        <div class='btn_jgj' style='width:104px'>
                                    手机专属优惠
                            </div>
                        </td>
                        <td>
                            <span>该优惠活动仅限使用手机购买的用户 </span>
                        </td>
                </tr>
            </table>
         </el-row>
  </div>
 
  <el-row>
      <el-col :span='24' style='background:#EEE9E6;height:30px'>
          <span style='color:#6C594D;line-height:30px;font-weight:600'>▼抢购描述</span>
      </el-col>
      <el-col :span=24 class='detail'>
          <p>【百达翡丽/Patek Philippe】百达翡丽 Calatrava 系列男表</p>
          <p>【国产机芯】原价13,800元，活动价1,380元</p>
          <p>【瑞士原装机芯】原价26,800元，活动价2,680元</p>
          <p style='color:#64451D'>瑞士原装机芯款保证专柜正品，支持专柜验货，说明书、保修卡、专柜小票齐全，享受全球联保。先验货后付款，安全购物有保障。</p>
          <p class='detail_title'>世界顶级的奢侈品，为什么这么便宜？</p>
          <p> 我们都知道绝大多数名牌手表均采用第三方机芯厂商提供的机芯，我们集团从这些机芯厂商大批量采购原装瑞士机芯，
              由香港表行顶级老师傅装配起来，质量与耐用度与品牌成品手表是完全一样的。而我们成本相对低
              廉很多。同时我们直接面对客户，直接从广州、深圳分部发货，避免了商场专柜几十万高昂的铺
              租和运营费用，也避免了各个销售环节及国内代理商的代理费用（一般一个商品代理商佣金毛利率
              均在商场零售价的23%），并且商品也因为免海关关税（国内钟表奢侈品海关关税为商场零售价的48%）
              的原因大幅降低了商品销售成本。</p>
            <p class='detail_title'>国产机芯和瑞士机芯的区别？</p>
            <p>国产机芯为国内机芯厂商设计并生产，可以使用3-5年，通常国产石英机芯走时精准，而机械机芯精准度较差。
                 瑞士机芯做工精细，经久耐用，走时精准，一般瑞士机芯采购价在1500元以上 ，售价几百块的手表百分之百为国产机芯，
                部分不良商家宣称为瑞士机芯，请勿轻信。</p>
            <p class='detail_title'>精湛工艺，专注高品质20年！</p>
            <p> 本商城瑞士机芯款手表均为瑞士原装机芯，由香港顶级钟表师组装完成，出厂前都经过严格检查。瑞士原装机芯，精准走时；包金表链100%不褪色；防刮蓝宝石镜面，不怕划伤；奥地利真钻，奢华极致；
                904L精钢，耐磨防腐蚀；封闭式表背，30米防水。客户可带钟表师或到专柜验货！</p>

      </el-col>
  </el-row>
   <el-row style='padding:20px 20px'>
       <el-col :span='24' >
                <a @click.prevent='buyclick(1)' class='dev_button' style='height:4rem:line-height:4rem' >
                <span>电话咨询</span>
            </a>  
       </el-col>
   </el-row>
    <div class='yhhd'>
        <el-row>
             <el-col :span='24' style='background:#EEE9E6;height:30px;margin:10px 0px'>
                <span style='color:#6C594D;line-height:30px;font-weight:600'>▼香港正品，给您100%信心保证</span>
            </el-col>
        </el-row>
        <el-row style='border-bottom:1px solid #DEDEDE;margin:0px 20px;padding:8px 0px'>
            
            <el-col :span=24></el-col>
            <table>
                <tr>
                    <td >  
                        <div class='btn_jgj'>
                                    保证一
                            </div>
                        </td>
                        <td>
                            <span class='dev_detailspan'>香港专卖店 <b style='color:red'>机打发票</b>，
                            支持<b style='color:red'>全国联保</b>，支持专卖店验证</span>
                        </td>
                </tr>
            </table>
        </el-row>
         <el-row style='border-bottom:1px solid #DEDEDE;margin:0px 20px;padding:8px 0px'>
            <table>
                <tr>
                    <td >  
                        <div class='btn_jgj' >
                                    保证二
                            </div>
                        </td>
                        <td>
                            <span class='dev_detailspan'>签约顺丰，圆通，宅急送，邮政EMS，全场包邮， <b style='color:red'>开箱验货再付款!</b></span>
                        </td>
                </tr>
            </table>
         </el-row>
          <el-row style='border-bottom:1px solid #DEDEDE;margin:0px 20px;padding:8px 0px'>
            <table>
                <tr>
                    <td >  
                        <div class='btn_jgj' >
                                    保证三
                            </div>
                        </td>
                        <td>
                            <span class='dev_detailspan'>如果仍然不满意，没关系!7天包退，15天包换!我们说到做到!</span>
                        </td>
                </tr>
            </table>
         </el-row>
         <el-row style='margin:0px 20px;'>
             <el-col :span=24>
                 <p style='font-size:13px;margin-top:15px'>在下单到货品送达期间，您无需花费一分钱，并且能拥有一次难得的低价购顶级手表的机会。
                    可您如果犹豫了，迟疑了，后悔了想再来买了，很有可能已经断货了。</p>
             </el-col>
         </el-row>
  </div>
 <div class='buy'> 
    <el-row >
                <el-col :span='24' style='background:#EEE9E6;height:30px;'>
                    <span style='color:#6C594D;line-height:30px;font-weight:600'>▼购买流程</span>
                </el-col>
                <el-col>
                   <img src="@/assets/detail/3-3.jpg" alt class="imgCl">
                </el-col>
    </el-row>
 </div>
  <div class='jieshao'> 
    <el-row >
                <el-col :span='24' style='background:#EEE9E6;height:30px;'>
                    <span style='color:#6C594D;line-height:30px;font-weight:600'>▼产品介绍</span>
                </el-col>
                <el-col>
                   <img src="@/assets/detail/3-4.jpg" alt class="imgCl">
                </el-col>
                <el-col :span=24 style='background:#EEE9E6;height:30px;text-align:center'>
                    <span style='line-height:30px;font-weight:500'>{{data.goods.gName}}</span>
                </el-col>
                <el-col :span=24>
                    <p style='font-size:13px'> Calatrava Ref. 5119 是 Calatrava "巴黎钉纹"图案的最新版本，它是百达翡丽历来最著名的设计特色。 
                        于 20世纪80 年代中期面世的 Calatrava Ref. 3919 的表盘及带有独特钉纹雕刻图案表壳设计得以保留，并采用
                        了更大更具当代风格的尺寸，直径为 36 毫米（之前的 3919 直径为 33.50毫米）。</p>
                </el-col>
                <el-col :span=24>
                    <!-- <detailtable :detailarr='detailarr' jumpid='four' @clickjump='clickjump'></detailtable> -->
                     <table class='dev_table' style='width:98%'>
                        <tr v-for=' (item,index) in detailtable' :key="'t'+index" >
                            <td>{{item.name}}</td>
                            <td>{{item.value}}</td>
                        </tr>     
                    </table>   
                </el-col>
                <el-col :span=24> 
                     <img v-for='(item,index) of imageshow' :key="'img'+index"  :src="item" alt class="imgCl" >
                </el-col>
                <!-- <el-col :span=24 style='background:#EEE9E6;height:30px;text-align:center'>
                    <span style='line-height:30px;font-weight:500'>5296G男士自动机械表</span>
                </el-col>
                <el-col :span=24>
                    <p style='font-size:13px'> “没有人能够拥有百达翡丽，只是在为下一代保管而已。”这是百达翡丽风靡全球的广告语，至今无人超越。米白色的纯粹表盘，高档贵气的气场；精致的条形刻度和简约的大三针完美交织，互相映衬；小巧的日历显示窗。质感十足的精美表壳，搭载原装自动机械机芯的百达翡丽Patek Philippe-Calatrava系列 5296g-010 男士机械表，
                        没有奢华的装饰和繁复的设计，却以其独特的高贵气场和朴素设计照样把顶级的制表工艺和这朴素的奢华融合得恰到好处，令人一见倾心。</p>
                </el-col>
                <el-col :span=24>
                    <img src="@/assets/detail/3-10.jpg" class="imgCl">
                </el-col>
                <el-col :span=24>
                    <detailtable :detailarr='detailarrt' jumpid='four' @clickjump='clickjump'></detailtable>
                </el-col>
                <el-col :span=24> 
                     <img v-for='(item,index) of shopimg' :key="'img'+index"  :src="item.url" alt class="imgCl" >
                </el-col> -->
    </el-row>
 </div>
  <div class='seve'> 
    <el-row >
                <el-col :span='24' style='background:#EEE9E6;height:30px;'>
                    <span style='color:#6C594D;line-height:30px;font-weight:600'>▼客户服务</span>
                </el-col>
                <el-col>
                   <img src="@/assets/detail/3-15.jpg" alt class="imgCl">
                </el-col>
    </el-row>
  </div>
    <!-- <el-row id='detail'>
        <el-col :span=24>
    <img v-for='(item,index) of shopList' :key="'img'+index"  :src="item.url" alt class="imgCl" >
        </el-col>
    </el-row>
            -->
             <div class='ordermesg'> 
    <el-row >
                <el-col :span='24' style='background:#EEE9E6;height:30px;'>
                    <span style='color:#6C594D;line-height:30px;font-weight:600'>▼订单信息</span>
                </el-col>
                <el-col>
                   <Submit id='buy'></Submit>
                </el-col>
    </el-row>
  </div>
           
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
import detailtable from '@/views/detailtable.vue'
import Submit from '@/components/submit.vue'
import evaluate from '@/components/evaluate.vue'
export default {

  components:{Submit,evaluate,detailtable},
  data() {
    return {
    detailtype:null,
    detailtable:[],
      arr: [],
      bol:false,
      mesg:[{name:'限时抢购',value:'750元'},
      {name:'市场价格',value:'7500元'},
     ],
     imageshow:[],
     detailarr:[
         [{name:'编号：',value:'5119R 玫瑰金',index:'a1'},{name:'品牌:',value:'百达翡丽',index:'a2'},
         {name:'系列:',value:'Calatrave系列',index:'a3'},{name:'款式:',value:'手动机械，36毫米，男士',index:'a4'}],
          [{name:'材质:',value:'18k玫瑰金',index:'b1'},{name:'机芯型号：',value:'Cal.215 PS',index:'b2'},
         {name:'机芯直径：',value:'21.9毫米',index:'b3'},{name:'机芯厚度：',value:'2.55毫米',index:'b4'}],
          [{name:'表带材质：',value:'鳄鱼皮',index:'c1'},{name:'表扣类型：',value:'针扣',index:'c2'},
         {name:'表带：',value:'间金',index:'c3'},{name:'表带颜色：',value:'金色 银色',index:'c4'}],
          [{name:'防水深度：',value:'30米',index:'d1'},{name:'双十二团购价：',value:'￥2,680元',index:'d2'},
       ],
     ],
     detailarrt:[
          [{name:'编号：',value:'5119R 玫瑰金',index:'a11'},{name:'品牌:',value:'百达翡丽',index:'b12'},
         {name:'系列:',value:'Calatrave系列',index:'a13'},{name:'款式:',value:'手动机械，36毫米，男士',index:'a14'}],
          [{name:'材质:',value:'18k玫瑰金',index:'b11'},{name:'机芯型号：',value:'Cal.215 PS',index:'b22'},
         {name:'机芯直径：',value:'21.9毫米',index:'b13'},{name:'机芯厚度：',value:'2.55毫米',index:'b14'}],
          [{name:'表带材质：',value:'鳄鱼皮',index:'c11'},{name:'表扣类型：',value:'针扣',index:'c12'},
         {name:'表带：',value:'间金',index:'c13'},{name:'表带颜色：',value:'金色 银色',index:'c14'}],
          [{name:'防水深度：',value:'30米',index:'d11'},{name:'双十二团购价：',value:'￥2,899',index:'d12'},
       ],
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
          { url: require('../assets/detail/3-5.jpg'), title: '浪琴时尚腕表 L2.629.4.78.3', price:'790' },
         { url: require('../assets/detail/3-6.jpg'), title: '浪琴longines-名匠系类L2.518.5.77.7 男士机械表', price:'1078' },
        { url: require('../assets/detail/3-7.jpg'), title: '浪琴longines-瑰丽系列 L4.821.2.11.2 男士机械表', price:'788' },
        { url: require('../assets/detail/3-8.jpg'), title: '浪琴longines-名匠系列 L2.673.4.78.6 男士机械表', price:'1058' },
         { url: require('../assets/detail/3-9.jpg'), title: '浪琴longines-名匠系列 L2.673.4.78.6 男士机械表', price:'1058' },],
        shopimg:[  
            { url: require('../assets/detail/3-11.jpg'), title: '浪琴时尚腕表 L2.629.4.78.3', price:'790' },
         { url: require('../assets/detail/3-12.jpg'), title: '浪琴longines-名匠系类L2.518.5.77.7 男士机械表', price:'1078' },
        { url: require('../assets/detail/3-13.jpg'), title: '浪琴longines-瑰丽系列 L4.821.2.11.2 男士机械表', price:'788' },
        { url: require('../assets/detail/3-14.jpg'), title: '浪琴longines-名匠系列 L2.673.4.78.6 男士机械表', price:'1058' },
        ],
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
     
      },
      getlist(){
          console.log(this.data)
          this.detailtable=this.data.detail?this.data.detail:[];
          this.detailtype=this.data.flag;
          this.imageshow=this.data.images.slice(1,this.data.images.length-1);
          console.log(this.imageshow)
      },
        getcss(){
       document.getElementById('app').classList.remove('PCwidth');
       document.getElementById('four').classList.add('PCwidth');
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
      clickjump(val){
        document.querySelector("#four").scrollIntoView(true);
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
.four {
    a:hover{
    color:red;
    text-decoration: underline
}
.block{
    display: block;
    text-align: center;
}
.btn_jgj{
    width:62px;
    height:32px;
    background:yellow;
    color:white;
    font-weight:600;
    fongt-size:0.8rem;
    line-height:32px;
    text-align:center;
    margin-right:10px;
    border-radius: 5px
}
   .dev_table
        {
            border-collapse: collapse;
            margin: 3px auto;
            // text-align: center;
        }
        .dev_table td, table th
        {
            border: 1px solid #856D35;
            color: rgb(104, 96, 82);
            height: 30px;
        }
        .dev_table thead th
        {
            background-color: #CCE8EB;
            width: 100px;
        }
        .dev_table tr:nth-child(odd)
        {
            background: #f0ece5;
        }
        .dev_table tr:nth-child(even)
        {
            background: #F5FAFA;
        }
.dev_detailspan{
    font-size:0.6rem
}
.detail p{
    padding:0px 0px;
    margin:2px 8px;
    font-size: 14px
}
.detail  .detail_title{
    color: #E53333;
    font-size: 18px;
    margin-top:12px;
    font-weight:600
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
    
      padding-right:15px;
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
