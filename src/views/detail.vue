<template>
  <div style='width:100%;margin:auto'>
    <detailSec :data='data' v-if='show==2'></detailSec>
    <detailThir :data='data' v-if='show==3'></detailThir>
    <detailFour :data='data' v-if='show==4'></detailFour>
  </div>
</template>
<script>
import detailOne from './detailOne.vue'
import detailSec from './detailSecond.vue'
import detailThir from './detailThird.vue'
import detailFour from './detailFour.vue'
import detailTable from './detailtable.vue'
import { getDetail } from '../servers/send.js'
export default {
  components: {
    detailOne,
    detailSec,
    detailThir,
    detailFour
  },
  data(){
    return{
      show:1,
      data:{}
    }
  },
  methods: {
    async getDetail () {
      let gId = this.$route.query.gId
      let ret = await getDetail(gId);
      this.data=ret;
      this.show=ret.goods.gType;
      this.show=(ret.goods.gName.includes('浪琴') ||ret.goods.gName.includes('劳力士'))?2:this.show;
      console.log(this.show)
    }
  },
  created () {
    this.getDetail()
  }
}
</script>