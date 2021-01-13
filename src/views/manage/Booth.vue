<template>
  <div>
    <h2 class="topic">摊位管理</h2>
    <div class="div"></div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="摊位名称"> </el-table-column>
      <el-table-column prop="bazaar" label="所属市场"></el-table-column>
      <el-table-column prop="grade" label="摊位编号"></el-table-column>
      <el-table-column prop="rental" label="租金"></el-table-column>
      <el-table-column prop="tenancy" label="租期"></el-table-column>
      <el-table-column prop="tenement" label="当前租户"></el-table-column>
      <el-table-column prop="expirationTime" label="到期事件"></el-table-column>
      <el-table-column
        prop="tag"
        label="状态"
        width="100"
        :filters="[
          { text: '使用中', value: '使用中' },
          { text: '未使用', value: '未使用' },
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
          <el-button size="mini">管理</el-button>
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
import { Tag, Button, pagination } from "element-ui";
Vue.use(Tag);
Vue.use(Button);
Vue.use(pagination);
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false
    };
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    getData() {
      this.$http
        .get(
          "https://www.fastmock.site/mock/5e1d0c1b6ebbac6cc3f49b946ac5d01c/_stration/booth"
        )
        .then((ret) => {
          // this.tableData = ret.slice(0, 8);
          this.tableData = ret;
        });
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    skip() {
      this.$router.push("/Rentaldetails");
    },
    handleDelete(index) {
      this.index = index;
      this.dialogVisible = true;
    },
    del() {
      this.tableData.splice(this.index, 1);
      this.dialogVisible = false;
    },
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
.el-table td {
  max-width: 10px !important;
}
</style>