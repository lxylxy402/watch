<template>
  <div>
    <Brandhead :shopName='shopName'></Brandhead>
    <Brand></Brand>
    <div style='padding: 3px 10px;'>
      <Product :hotText='hotText' :shopList='shopList1' :ishot='true'></Product>
      <Product :hotText='hotText1' :shopList='shopList2' :ishot='true'></Product>
      <Product :hotText='hotText2' :shopList='shopList3' :ishot='true'></Product>
    </div>
  </div>
</template>
<script>
import Brandhead from './head.vue'
import Brand from '@/components/brand.vue'
import Product from '@/components/product.vue'
// import { apiAddress } from '../servers/api.js'
import { getList } from '../servers/send.js'
export default {
  data () {
    return {
      ss : 1,
      hotText: '爆款男表',
      hotText1: '爆款女表',
      hotText2: '情侣对表',
      shopList1: [],
      shopList2: [],
      shopList3: [],
      shopName: '官方特约经销-瑞士名表官方旗舰店'
    }
  },
  methods: {
    async getList () {
      let data = await getList()
      data.map((v) => {
        if (v.gGrade == 2) {
          this.shopList1.push(v)
        } else if (v.gGrade == 3) {
          this.shopList2.push(v)
        } else if (v.gGrade == 4) {
          this.shopList3.push(v)
        }
      })
      console.log()
    },
  },
  mounted () {
    this.getList()
    // this.onLoad()
  },
  components: {
    Brandhead,
    Brand,
    Product
  }
}
</script>
<style>
.imgwidth {
  width: 100%;
  margin-top: 8px;
}
</style>
