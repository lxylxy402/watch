<template>
  <div class='table'>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入姓名/电话/表名" clearable @clear='handleSearch' v-model="value" style='margin-left: 10px;width:80%;max-width: 450px;' @keyup.enter.native="handleSearch">
      </el-input>
      <el-button type='primary' style='margin-left: 10px;' @click='handleSearch'>查找</el-button>
    </div>
    <el-table :data="tableData">
      <el-table-column
        prop="nums"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="info"
        label="款式"
        >
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
      >
      </el-table-column>
      <el-table-column
        prop="num"
        label="下单数量"
        width="80"  
      >
      </el-table-column>
      <el-table-column
        prop="pay"
        width="90"
        label="需支付金额">
      </el-table-column>
      <el-table-column
        prop="orderDate"
        label="下单时间">
      </el-table-column>
      <el-table-column
        prop="msg"
        label="备注">
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        @current-change = 'handleChangeSize'
        @prev-click = 'handleSizeSub'
        @next-click= 'handleSizeAdd'
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getOrder } from '../servers/send.js'
export default {
  data () {
    return {
      tableData: [],
      serarchParams: {
        pc: 1,
        ps: 10,
        keyword: ''
      },
      value: '',
      total:0
    }
  },
  methods:{
    async getOrederList () {
      let ret = await getOrder(this.serarchParams)
      console.log('ret')
      console.log(ret)
      ret.list.map((v, i) => {
        v.nums = i + (this.serarchParams.pc - 1) * this.serarchParams.ps + 1
      })
      this.tableData = ret.list
      this.total = ret.tr
    },
    handleChangeSize (e) {
      this.serarchParams.pc = e
      console.log('页码改变了啊')
      this.getOrederList()
    },
    handleSizeSub (e) {
      this.serarchParams.pc = e
      this.getOrederList()
    },
    handleSizeAdd (e) {
      this.serarchParams.pc = e
      this.getOrederList()
    },
    handleSearch () {
      this.serarchParams.keyword = this.value
      this.serarchParams.pc = 1
      this.getOrederList()
    }
  },
  mounted () {
    console.log(document.getElementsByClassName('PCwidth'))
    document.getElementsByClassName('PCwidth')[0].style.width = '100%'
    this.getOrederList()
  },
  destroyed () {
    document.getElementsByClassName('PCwidth')[0].style.width = '640px'
  }
}
</script>
