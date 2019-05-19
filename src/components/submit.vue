<template>
  <div class='submits'>
    <van-actionsheet
        v-model="show"
        :actions='actions'
    >
        <van-area :area-list="areaList" @confirm='selectChange' @cancel='onCancel'/>
    </van-actionsheet>
    <el-card>
        <div class='title'>
        <img src="@/assets/homes/shop.png" alt="">
        <div style='overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin-left: 10px;'>
            天梭 TISSOT 自动机械 HERITAGE系列 银色 机械男表
        </div>
        </div>
        <dir class='texts'>在线快速订购</dir>
        <div class='form'>
        <el-form label-position="top" label-width="80px" :model="form" ref='from' size="mini" :rules="rules" >
            <el-form-item label="选择产品" prop='info' class='inputC'>
            <el-input v-model="form.info" style='color:red' :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="订购数量" prop='num'>
            <el-input-number v-model="form.num" :precision="0"  :min="1"></el-input-number>
            </el-form-item>
            <el-form-item label="您的姓名" prop='name'>
            <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" prop='phone'>
            <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="当前城市" prop='city'>
                <el-input v-model="form.city" @focus='onFocus' :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop='addr'>
                <el-input v-model="form.addr"></el-input>
            </el-form-item>
            <el-form-item label="付款方式">
            <el-radio><img src="@/assets/homes/fka.gif" alt=""></el-radio>
            </el-form-item>
            <el-form-item label="客户留言">
            <el-input v-model="form.msg" type="textarea" @focus='getFocus' @blur='onBlur'></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" size='medium' @click='handleSubmit'>立即提交订单</el-button>
        </div>
    </el-card>
  </div>
</template>
<script>
import { orderAdd } from '../servers/send.js'
import cityList from './city.js'
export default {
  data () {
    return {
      form: {
        name: '',
        phone: '',
        addr: '',
        info: '天梭 TISSOT 自动机械 HERITAGE系列 银色 机械男表天梭 TISSOT 自动机械 HERITAGE系列 银色 机械男表',
        msg: '请尽快安排发货，送货之前手机联系，谢谢！',
        num: 1,
        pay: '',
        city: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入您的电话', trigger: 'blur' }
        ],
        addr: [
          { required: true, message: '请填写您的地址', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请选择您的地址', trigger: 'change' }
        ],
        info: [
          { required: true, message: '请填写产品信息', trigger: 'blur' }
        ],
      },
      address: '',
      selectedOptions: [],
      areaList: cityList,
      show: false,
      searchResult: [],
      actions: []
    }
  },
  props: ['gName', 'gPay'],
  methods: {
    getFocus () {
      if (this.form.msg == '请尽快安排发货，送货之前手机联系，谢谢！') {
        this.form.msg = ''
        console.log('获取焦点')
      }
    },
    onBlur () {
      if (!this.form.msg.length) {
        this.form.msg = '请尽快安排发货，送货之前手机联系，谢谢！'
        console.log('失去焦点')
      }
    },
    handleSubmit () {
        this.$refs.from.validate(async (valid) => {
            if (valid) {
                let params = {
                    ...this.form,
                    gId: this.$route.query.gId,
                    pay:  this.pay * this.form.num,
                    status: "",
                    addr: this.form.city + this.form.addr
                }
                let ret = await orderAdd(params)
                if (ret) {
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                        })
                }
            } else {
                console.log('error submit!!');
                return false;
            }
        })
    },
    onFocus () {
        this.show = true
    },
    selectChange (value) {
        console.log('value')
        console.log(value)
        let city = ''
        value.map(v => {
            console.log(v.name)
            city += v.name
        })
        console.log(city)
        this.$set(this.form, 'city', city)
        this.show = false
    },
    onCancel () {
        this.show = false
    }
  },
  mounted () {
    this.form.info = this.gName
    this.pay = this.gPay
  }
}
</script>
<style lang='less'>
.submits {
  text-align: -webkit-auto;
  background: #00a5ea;
  border-radius: 5px;
  padding: 8px;
  .form {
    background: #fff;
    padding: 5px;
  }
  .el-button{
    width: 100%
  }
  .inputC {
    .el-input__inner {
      color: red
    }
  }
  .el-radio__label {
    position: absolute;
    top: -2px;
  }
  .title {
    padding: .6rem;
    height: 2.4rem;
    color: #fff;
    background-color: #666;
    font-size: 1.5rem;
    display: flex;
  }
  .texts {
    padding: 0px 8px;
    color: rgb(252, 245, 245);
    font-weight: 600;
    font-size: 17px;
    text-align: left;
  }
}
  
</style>


