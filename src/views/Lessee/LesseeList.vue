<template>
  <div>
    <h3>租户管理</h3>
    <hr style="height:1px;border-top:1px solid #ccc;" />
    <!-- style="color:#00ff00;font-weight:normal;" -->
    <!-- 这是租户列表 -->
    <div>
      <!-- 选择框 -->
      <div style="width:144px;higth:40px; float:left;margin-top: 15px">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 搜索框 -->
      <div
        style="margin-top: 15px; width:268px;hitgh:40px; float:left;"
        id="search"
        float="right"
      >
        <el-input placeholder="输入租户名称" v-model="input1">
          <el-button slot="append" style="color:#1ABC9C;">搜索</el-button>
        </el-input>
      </div>

      <!-- 新增用户 -->
      <!-- <button class="xinzeng">+新增用户</button> -->

      <el-button class="xinzeng" type="text" @click="dialogFormVisible = true"
        >+新增用户</el-button
      >

      <el-dialog
        title="租户添加"
        :visible.sync="dialogFormVisible"
        style="background-co"
      >
        
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="租户名称" prop="name">
            <el-input v-model="ruleForm.name" style="width:400px"></el-input>
          </el-form-item>
          <el-form-item label="关联会员" prop="member">
            <el-select v-model="ruleForm.member" placeholder="请选择活动区域">
              <el-option label="一级用户" value="yiji"></el-option>
              <el-option label="二级用户" value="erji"></el-option>
              <el-option label="三级用户" value="sanji"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="租赁状态" prop="state">
            <el-radio-group v-model="ruleForm.state">
              <el-radio label="开启"></el-radio>
              <el-radio label="关闭"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="ruleForm.phone" style="width:400px"></el-input>
          </el-form-item>
          <el-form-item
            label="联系地址"
            prop="site"
            style="width:600px;hight:90px"
          >
            <el-input type="textarea" v-model="ruleForm.site"></el-input>
          </el-form-item>
          <!-- <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item> -->
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >保存</el-button
          >
        </div>
      </el-dialog>
      <!-- 导出 -->
      <button class="daochu">导出</button>
    </div>

    <!-- 用户列表 -->

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column label="用户ID" width="190">
        <template slot-scope="scope">{{ scope.row.userid }}</template>
      </el-table-column>
      <el-table-column prop="state" label="租赁状态" width="190">
      </el-table-column>
      <el-table-column label="注册时间" width="190">
        <template slot-scope="scope">{{ scope.row.signdate }}</template>
      </el-table-column>
      <el-table-column prop="name" label="用户名称" width="190">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" show-overflow-tooltip>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="60"
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
  Button,
  Input,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Form,
  FormItem,
  Col,
  DatePicker,
  TimePicker,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
} from "element-ui";
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Switch);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(RadioGroup);
Vue.use(Radio);

export default {
  data() {
    return {
      ruleForm: {
        name: "",
        member: "",
        phone: "",
        delivery: false,
        type: [],
        state: "",
        site: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入租户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        member: [{ required: true, message: "选择会员", trigger: "change" }],
        phone: [
          { required: true, message: "请输入租户手机号码", trigger: "blur" },
        ],

        // type: [
        //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        // ],
        state: [
          { required: true, message: "请选择租户状态", trigger: "change" },
        ],
        site: [{ required: true, message: "请填写联系地址", trigger: "blur" }],
      },

      dialogFormVisible: false,

      // form: {
      //   name: '',
      //   region: '',
      //   date1: '',
      //   date2: '',
      //   delivery: false,
      //   type: [],
      //   resource: '',
      //   desc: ''
      // },
      formLabelWidth: "120px",

      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "租赁中",
        },
        {
          value: "选项3",
          label: "未租赁",
        },
      ],
      value: "",
      input1: "",

      tableData: [
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "马云",
          phone: "18515963203",
          state: "租赁中",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
        {
          userid: "9527",
          name: "麻花藤",
          phone: "18515963203",
          state: "未租赁",
          signdate: "2016-12-30",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
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
};
</script>

<style>
h3 {
  font-weight: 700;
  margin-left: 50px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
#search {
  width: 300px;
}
.daochu {
  width: 56px;
  height: 40px;
  background-color: #1abc9c;
  float: right;
  margin: 0 12px;
  color: #fff;
  border: none;
  margin-top: 15px;
}
.xinzeng {
  width: 106px;
  height: 40px;
  background-color: #1abc9c;
  float: right;
  color: #fff;
  border: none;
  margin-top: 15px;
}
.pag {
  text-align: center;
}
</style>
