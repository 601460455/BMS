<template>
<<<<<<< HEAD
  <div style="width:1100px">
=======
  <div>
>>>>>>> 9c776eae452240d05cf94920a1cb4c90d6cbc78e
    <h2 class="topic">出租明细</h2>
    <div class="div"></div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="leaseTime" label="出租时间"> </el-table-column>
      <el-table-column prop="rent" label="租金"></el-table-column>
      <el-table-column prop="tenancy" label="租期"></el-table-column>
      <el-table-column prop="lessee" label="当前租户"></el-table-column>
      <el-table-column prop="expirationTime" label="到期时间"></el-table-column>
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
            :type="scope.row.tag === '使用中' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>

    </el-table>
    <!-- 分页器 -->
  </div>
</template>

<script>
import Vue from "vue";
import { Tag, Button, Pagination, Dialog} from "element-ui";
Vue.use(Tag);
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Dialog);
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      index: 0,
    };
  },
  methods: {
    filterTag(value, row) {
      return row.tag === value;
    },
    getData() {
      this.$http
        .get(
          "https://www.fastmock.site/mock/5e1d0c1b6ebbac6cc3f49b946ac5d01c/_stration/Rentaldetails"
        )
        .then((ret) => {
          this.tableData = ret;
        });
    },
    handleDelete(index) {
      this.index = index;
      this.dialogVisible = true;
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
</style>