<template>
  <div class="table" >
    <el-row style='margin:5px 0'>
        <el-col :span="24">
            <span style='font-size:1.1rem;'>基本参数：</span>
        </el-col>
    </el-row>
     <el-row  >
        <el-col :span="24" >
            <table width='100%' style='background-color:#E5E5E5;'>
                <tr   v-for="(item,index) of detailarr" :key="'q'+index" >
                    <td style="border-bottom:1px solid white;padding:3px 1px"  v-for="(itemson,indexson) of item" :key=itemson.index
                    :style='{borderRight:indexson===3?"0px solid white":"1px solid white"}'>
                
                         <span style='font-size:0.5rem;color:#474747'>{{itemson.name}}</span>
                        <span ><a @click.prevent='clicktable' class='detail_a' >{{itemson.value}}</a></span>
                    </td>
                </tr>
            </table>
        </el-col>
    </el-row>
           
  </div>
</template>

<script>
import { mapState } from "vuex";
import Submit from '@/components/submit.vue'
export default {
 props: ['detailarr','jumpid'],
  components:{Submit},
  data() {
      return{
    
    };
  },
 
  computed: {
    ...mapState({
      time: state => state.time,
      num: state => state.num
    })
  },
  methods: {
   
    clicktable(){
        this.$emit('clickjump',this.jumpid)
    }
    
  },
  mounted() {

  }
};
</script>
<style lang="less">
.table {
    a:hover{
    color:red;
    text-decoration: underline
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
.dev_button{
    display:inline-block;
    width:100%;
    background-color:#00365F;
    color:#66c2ff;
    text-align:center;
    text-decoration:none;
    padding:5px 5px
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
