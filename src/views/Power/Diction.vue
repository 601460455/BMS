
<template>
<div style="margin: 15px 1100px 20px 10px; ">
  <div class="bigBox">
    <el-checkbox  v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="(item,index) in checkList" :label="index" :key="index">{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import {CheckboxGroup, Checkbox} from 'element-ui'
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
  export default {
    data () {
      return {
        checkedCities: [],
        checkList: ["订单管理","订单查看","订单创建","订单导出","点单导出","点单导出","订单管理","点单查看","订单创建","订单导出","订单导出","订单导出","订单管理","订单查看","订单创建","订单导出","订单导出","订单导出","订单导出","订单导出"],
        checked:'',
        checkAll: false,
      }
    },
    created(){
      console.log(this.checkList.length)
    },
     methods: {
      handleCheckAllChange(val) {
        this.checkAll = !this.checkAll
        if(this.checkAll){
          this.checkedCities = this.checkList
        } else{
          this.checkedCities = []
        }
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.checkList.length;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .bigBox{
    display: flex;
    flex-wrap: nowrap;
    width: 80%;
    margin-top: 400px;
    text-align: center;
    margin: 0 auto;
  }
</style>