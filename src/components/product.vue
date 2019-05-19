<template>
  <div class='product'>
    <div style='text-align:center'>
      <div class='text' v-if='hotText'>{{hotText}}</div>
      <div class='border' v-if='hotText'></div>
      <br>
      <el-row style='text-align:left' :gutter='5'>
        <el-col :span='12' v-for='(item, index) in shopList' :key='index'>
          <!-- <div class="list">
            <img src="@/assets/homes/01.jpg" alt="" class='listImg'>
            <span class="hot">爆款</span>
            <div class='border'></div>
            <div style='padding:4px;'>
              <div>浪琴longines-名匠系类L2.518.5.77.7 男士机械表</div>
              <br>
              <div class='bottom'>
                <div>
                  <span style='color:red'>￥1078.00元</span>
                  <span class='one'>&nbsp;&nbsp;&nbsp;一折</span> 
                  <br>
                  <span style='color: #ccc;font-size: 11px;' >原价：10790.00元</span>
                </div>
                <img src="@/assets/homes/shoppingCart.jpg" class="cart">
              </div>
            </div>
          </div> -->
           <div class="list" @click='handleToDetail(item)'>
            <img :src="item.gPic" alt="" class='listImg'/>
            <span class="hot">{{ishot ? '爆款' : '包邮'}}</span>
            <div class='border'></div>
            <div style='padding:4px;'>
              <div style='height: 32px;'>{{item.gName}}</div>
              <br/>
              <div class='bottom'>
                <div>
                  <span style='color:red'>￥{{item.gPay}}.00元</span>
                  <span class='one'>&nbsp;&nbsp;&nbsp;一折</span> 
                  <br/>
                  <span style='color: #ccc;font-size: 11px;' >原价：{{item.gPrice}}.00元</span>
                </div>
                <img src="@/assets/homes/shoppingCart.jpg" class="cart"/>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['hotText', 'shopList', 'ishot'],
  methods: {
    handleToDetail (item) {
      console.log(item)
      this.$router.push({path: '/detail', query: {gId: item.gId}})
    }
  }
}
</script>

<style lang='less'>
.product {
  padding: 5px;
  .border {
    border-bottom: 1px solid #CCC;
  }
  .text {
    text-align: center;
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 16px;
    height: 20px;
    background: #EFEFEF;
    position: relative;
    top: 11px;
  }
  .list {
    border: 1px solid #D7D7D7;
    position: relative;
    padding-bottom: 9px;
    line-height: 16px;
    font-size: 13px;
    color: #333;
    word-break: break-all;
    margin-bottom:4px;
  }
  .listImg {
    width: 100%
  }
  .bottom {
    justify-content: space-between;
    display: flex;
  }
  .cart {
    width: 31px;
    background-color: #00A5EA;
    height: 31px;
  }
  .one {
    font-size: 7px;
    -webkit-transform: scale(0.89);
    display: inline-block;
    background: url('../assets/homes/one.jpg') no-repeat;
    background-size: 41px 18px;
    width: 41px;
    height: 18px;
    color: #fff;
  }
  .hot {
    position: absolute;
    right: -3px;
    top: 5px;
    z-index: 1;
    width: 38px;
    height: 18px;
    line-height: 15px;
    text-align: center;
    color: #fff;
    background-position: 0 -111px;
    font-size: 12px;
    background-color: #00A5EA;
  }
}

</style>

