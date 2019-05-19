<template>
  <div>
    <div class='brand'>
      <div style='padding: 7px 4px;font-size: 18px;'>
        热门品牌
        <span style='color: #333;ont-weight: 500;'>HotBrand</span>
      </div>
      <el-row>
        <el-col :span='6'  v-for='(item, index) in brandList' :key='index'>
          <div class='body'  @click='handleGobrand(item)'>
            <img :src="item.url" alt="">
            <div>{{item.name}}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <img src="@/assets/homes/sy01.jpg" alt="" class='imgwidth'>
    <img src="@/assets/homes/sy02.jpg" alt="" class='imgwidth'>
  </div>
</template>
<script>
export default {
  data () {
    return {
      brandList: [
        {url: require('../assets/homes/b1.jpg'), id: 1, name: '浪琴', shop:'瑞士名表旗舰店'},
        {url: require('../assets/homes/b3.jpg'), id: 2, name:'劳力士', shop:'官方旗舰店/ROLEX劳力士'},
        {url: require('../assets/homes/b4.jpg'), id: 3, name: '欧米茄', shop:'官方旗舰店/OMEGA欧米茄'},
        {url: require('../assets/homes/b7.jpg'), id: 4, name: '百达翡丽', shop:'瑞士名表旗舰店'},
        {url: require('../assets/homes/b8.jpg'), id: 5, name: '蒂陀', shop:'官方旗舰店/帝舵/TUDOR/'},
        {url: require('../assets/homes/b16.jpg'), id: 6, name: '天梭', shop:'官方旗舰店/天梭/TISSOT/'},
        {url: require('../assets/homes/26.jpg'), id: 7, name: '居家', shop:'官方旗舰店/积家'},
        {url: require('../assets/homes/27.jpg'), id: 8, name: '沛纳海', shop:'官方旗舰店/沛纳海'},
        {url: require('../assets/homes/b2.jpg'), id: 9, name: '万国', shop:'官方旗舰店/IW万国'},
        {url: require('../assets/homes/b5.jpg'), id: 10, name: '卡地亚', shop:'官方旗舰店/Cartier/卡地亚'},
        {url: require('../assets/homes/b6.jpg'), id: 11, name: '江诗丹顿', shop:'官方旗舰店/Vacheron Constantin/江诗丹顿'},
        {url: require('../assets/homes/xiangnaier.jpg'), id: 12, name: '香奈儿', shop: '官方旗舰店/香奈儿/Chanel/'},
        {url: require('../assets/homes/meidu.jpg'), id: 13, name: '美度', shop:'官方旗舰店/美杜'},
        {url: require('../assets/homes/bojue.jpg'), id: 14, name: '伯爵', shop:'官方旗舰店/伯爵'},
        {url: require('../assets/homes/aipi.jpg'), id: 15, name: '爱披', shop:'官方旗舰店/天梭/TISSOT/'},
        {url: require('../assets/homes/amn.jpg'), id: 16, name: '阿尼玛', shop:'官方旗舰店/阿玛尼'},
      ]
    }
  },
  methods: {
    handleGobrand (item) {
      this.$router.push({path:'/brand', query:{shop:item.shop, id:item.id}})
    }
  }
}
</script>
<style lang='less'>
.brand {
  padding: 3px 10px;
  .body {
    margin: 2px;
    border-radius: 5px;
    border: 1px solid #CCC;
    text-align: center;
    color: #666;
    font-size: 16px;
    img {
      width: 100%
    }
  }
}
</style>

