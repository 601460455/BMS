<template>
  <div class="global">
    <h3>竞品信息管理</h3>
    <hr style="height: 1px; border: none; border-top: 1px solid #ccc" />
    <!-- 选项框 -->
    <el-select class="select" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!-- 搜索 -->
    <el-input
      class="input"
      placeholder="输入商品名称/订单号/租户名称"
      v-model="input"
    >
      <el-button slot="append">搜索</el-button>
    </el-input>

    <!-- 列表 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="订单号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="所属市场" width="180">
      </el-table-column>
      <el-table-column prop="address" label="摊位编号" width="150">
      </el-table-column>
      <el-table-column prop="rent" label="租金" width="180"> </el-table-column>
      <el-table-column prop="term" label="租期" width="220"> </el-table-column>
      <el-table-column prop="user" label="当前租户" width="100">
      </el-table-column>
      <el-table-column prop="state" label="状态" width="100"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">合同</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      class="pag"
    >
    </el-pagination>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Select,
  Option,
  Input,
  Button,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Form,
  FormItem,
  InputNumber,
  RadioGroup,
  Radio,
} from "element-ui";
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(InputNumber);
Vue.use(RadioGroup);
Vue.use(Radio);
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "已支付",
        },
        {
          value: "选项3",
          label: "未支付",
        },
      ],
      value: "",
      input: "",
      num: 1,
      tableData: [
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
        {
          date: "蔬菜区001单元",
          name: "福州市鳌峰市场",
          address: "sc001",
          rent: "￥500",
          term: "2020-06-01至2020-06-30",
          user: "符号",
          state: "已支付",
        },
      ],
      dialogFormVisible: false,

      ruleForm: {
        name: "",
        member: "",
        phone: "",
        delivery: false,
        type: [],
        state: "",
        site: "",
      },
      methods: {
        handleChange(value) {
          console.log(value);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert("submit!");
            } else {
              console.log("error submit!!");
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },

        toggleSelection(rows) {
          if (rows) {
            rows.forEach((row) => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        // 设置删除
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
      },

      formLabelWidth: "120px",
    };
  },
};
</script>

<style>
.select {
  width: 144px;
  height: 40px;
  float: left;
  margin-top: 15px;
}
.input {
  margin-top: 15px;
  width: 268px;
  height: 40px;
  float: left;
}
.pag {
  text-align: center;
  margin-top: 30px;
}
.global {
  margin-left: 30px;
}
.xinzeng {
  width: 106px;
  height: 40px;
  background-color: #1abc9c;
  float: right;
  margin-right: 150px;
  color: #fff;
  border: none;
  margin-top: 15px;
}
.zj {
  width: 230px;
}
</style>