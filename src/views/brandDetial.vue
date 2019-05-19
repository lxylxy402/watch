<template>
  <div>
    <Brandhead :shopName='shopName' :faBrand='faBrand'></Brandhead>
    <div style='padding: 3px 10px;' v-if='downLoad'>
      <Product :hotText='hotText1' :shopList='shopList1' v-if='shopList1.length'></Product>
      <img src="@/assets/homes/lq1.jpg" alt="" style='width:100%' v-if='bid==1'>
      <Product :hotText='hotText2' :shopList='shopList2' v-if='shopList2.length'></Product>
      <img src="@/assets/homes/lq2.jpg" alt="" style='width:100%' v-if='bid==1'>
      <Product :hotText='hotText3' :shopList='shopList3' v-if='shopList3.length'></Product>
      <Product :hotText='hotText4' :shopList='shopList4' v-if='shopList4.length'></Product>
      <img src="@/assets/homes/lq3.jpg" alt="" style='width:100%' v-if='bid==1'>
      <Product :hotText='hotText0' :shopList='shopList0' v-if='shopList0.length'></Product>
    </div>
  </div>
</template>
<script>
import Brandhead from './head.vue'
import Product from '@/components/product.vue'
import { getBrand } from '../servers/send.js'
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      downLoad : false,
      hotText0: '',
      hotText1: '爆款推荐',
      hotText2: '精选男表',
      hotText3: '精选女表',
      hotText4: '情侣表',
      shopList0: [],
      shopList1: [],
      shopList2: [],
      shopList3: [],
      shopList4: [],
      shopName: '',
      bid: '',
      faBrand: ''
    }
  },
  components: {
    Brandhead,
    Product
  },
  methods:{
    async getBrand () {
      let bid = this.$route.query.id
      let ret = await getBrand(bid)
      this.faBrand = ret.promotion.pPic
      this.downLoad = ret.goods.length
      console.log(ret)
      ret.goods.map(v =>{
        switch (+v.gGrade) {
          case 0:
            this.shopList0.push(v)
            break
          case 1:
            this.shopList1.push(v)
            break
          case 2:
            this.shopList2.push(v)
            break
          case 3:
            this.shopList3.push(v)
            break
          case 4:
           this.shopList4.push(v)
            break
          default:
            break
        }
      })
    }
  },
  created () {
    this.shopName = this.$route.query.shop
    this.bid = this.$route.query.id
  },
  mounted () {
    this.getBrand()
    // console.log(this.$route.query.shop)
  }
}
</script>
<style>
.imgwidth {
  width: 100%;
  margin-top: 8px;
}
</style>
