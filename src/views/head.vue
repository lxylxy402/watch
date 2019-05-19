<template>
  <div class="home">
    <div class="head">{{shopName}}</div>
    <img src="@/assets/homes/langq.jpg" alt class="imgCl" v-if='!faBrand'>
    <img :src="faBrand" alt class="imgCl" v-else>
    <!-- <img :src="arr[0]" alt> -->
    <div class='bodyPad'>
      <div style='padding:10px 0;border-bottom: 1px solid #D7D7D7;'>
        <span>剩余时间：</span>
        <div class='timeBox' style='display:inline-block'>
          <span>{{time.hour}}小时</span>
          <span>{{time.minute < 10 ? 0 : ''}}{{time.minute}}分钟</span>
          <span>{{time.second < 10 ? 0 : ''}}{{time.second}}.{{ num }}秒</span>
        </div>
        <el-row style='margin-top: 18px;'>
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
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      url: require("../assets/picture/b1.jpg"),
      arr: [],
      can: false
    };
  },
  props: ['shopName', 'faBrand'],
  computed: {
    ...mapState({
      time: state => state.time,
      num: state => state.num
    })
  },
  methods: {
    getUrl() {
      this.arr[0] = require("../assets/picture/b1.jpg");
    }
  },
  components: {},
  mounted() {
    this.getUrl();
  }
};
</script>
<style lang="less">
.home {
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
.timeBox {
  span {
    font-size: 18px;
    text-align: center;
    width: 65px;
    line-height: 30px;
    background: #000;
    color: #fff;
    margin-right: 5px;
    display: inline-block;
    padding: 1px 5px;
    border-radius: 6px;
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
}

</style>
