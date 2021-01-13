<template>
<<<<<<< HEAD
  <div style="width:1100px">
=======
  <div>
>>>>>>> 9c776eae452240d05cf94920a1cb4c90d6cbc78e
    <h2 class="topic">市场管理</h2>
    <div class="div"></div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="市场名称"> </el-table-column>
      <el-table-column prop="name" label="市场电话"></el-table-column>
      <el-table-column prop="address" label="市场管理员"></el-table-column>
      <el-table-column prop="site" label="市场地址"></el-table-column>
      <el-table-column prop="sort" label="排序"></el-table-column>
      <el-table-column
        prop="tag"
        label="状态"
        width="100"
        :filters="[
          { text: '开放', value: '开放中' },
          { text: '未开放', value: '未开放' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '开放' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >管理</el-button
          >
          <el-dialog title="市场添加" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="市场名称" :label-width="formLabelWidth">
                <el-input v-model="form.date" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="市场管理员" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="市场电话" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="市场地址" :label-width="formLabelWidth">
                <el-input v-model="form.site" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="排序" :label-width="formLabelWidth">
                <el-input v-model="form.sort" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="状态" :label-width="formLabelWidth">
                <el-select v-model="form.tag" placeholder="请选择状态">
                  <el-option label="开放中" value="开放中"></el-option>
                  <el-option label="未开放" value="未开放"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addition"
                >确 定</el-button
              >
            </div>
          </el-dialog>


          <el-button size="mini" @click="skip">摊位</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-dialog title="删除确认" :visible.sync="dialogVisible" width="30%">
            <span>确认删除此条信息吗? 删除成功后无法恢复!</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="del">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
  </div>
</template>

<script>
import Vue from "vue";
import { Tag, Button, Pagination, Dialog, Form, Option, Input, FormItem, Select } from "element-ui";
Vue.use(Tag);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(Option);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Select);
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      index: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      length: 0,
      form: {
        date: "",
        address: "",
        name: "",
        region: "",
        site: "",
        tag: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        sort: 0,
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    getData() {
      this.$http
        .get(
          "https://www.fastmock.site/mock/5e1d0c1b6ebbac6cc3f49b946ac5d01c/_stration/manage"
        )
        .then((ret) => {
          this.tableData = ret;
        });
    },
    handleDelete(index) {
      this.index = index;
      this.dialogVisible = true;
    },
    del() {
      this.tableData.splice(this.index, 1);
      this.dialogVisible = false;
    },
    skip() {
      this.$router.push("/Booth");
    },
    handleEdit(index, row) {
      // console.log(index, row);
      this.dialogFormVisible = true;
    },
    addition() {
      this.form.sort = this.tableData.length + 1
      
      this.tableData.push(this.form)
      this.form = {}
      
      this.dialogFormVisible = false
      console.log(this.form.sort)
    }
  },
  created() {
    this.getData();
  },
};
</script>


<style lang="scss" scoped>
.topic {
  padding-bottom: 10px;
  border-bottom: 1px solid #edf0f6;
  margin-bottom: 10px;
}
.div {
  width: 45px;
  height: 3px;
  background-color: #22ab82;
  margin-left: 25px;
  margin-top: -12px;
  border-radius: 2px;
}
</style>