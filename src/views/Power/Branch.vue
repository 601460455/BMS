<template>
  <div>
     <div class="heade1">
            <div>部门管理</div>
     </div>

    <div style="margin: 15px 1100px 20px 10px;">
      <el-input placeholder="请输入内容" v-model="input2">
           <template slot="append" @click="button">搜索</template>
      </el-input>
    </div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="部门名称"
      width="180">
      <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="职能描述"
      width="280">
      <template slot-scope="scope">
            <span>{{ scope.row.describe }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="状态"
      width="180">
      <template slot-scope="scope">
            <span>{{ scope.row.state }}</span>
      </template>
    </el-table-column>

    
    <el-table-column label="操作">
      <template slot-scope="scope" >
         <el-button
          size="mini"
          @click="handleAdd(scope.$index, scope.row)" >管理</el-button>
          <el-dialog title="添加部门" :visible.sync="dialogFormVisible">
          <el-form :model="form">
           <el-form-item label="部门名称" :label-width="formLabelWidth">
           <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="职能描述" :label-width="formLabelWidth">
           <el-input v-model="form.describe" autocomplete="off"></el-input>
          </el-form-item>
           </el-form>
          <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add" style="background-color:#5bc9b1">确 定</el-button>
          </div>
          </el-dialog>

        <el-button
          size="mini"
          :key='scope.row.id'
          @click="handleDelete(scope.$index, scope.row)" style="margin-left:10px">删除</el-button>
          <el-dialog
            title="删除确认"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
            <span>确认删除此条信息吗?删除成功后无法恢复！</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="del" style="background-color:#5bc9b1" :key='scope.$index'>确 定</el-button>
            </span>
            </el-dialog>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import {Table, TableColumn,Input,Button, Popover,Tag,Dialog,Form,Select,Option,FormItem} from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Popover)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(Select)
Vue.use(Option)
Vue.use(FormItem)
export default {
    data() {
        return {
          tableData: [],
          input2:'',
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogVisible : false,
          form: {
          name: '',
          delete:1,
          state:1,
          describe:'',
          time:''
          },
         formLabelWidth: '120px',
         index:-1,
        }
    },
    methods:{
      button(){
      },
      
      handleDelete(index, row) {
        this.dialogVisible = true
        this.index = index
      },
      del(){
        this.dialogVisible = false
        if(this.index != -1){
          this.tableData.splice(this.index, 1)
          this.index = -1
        }
      },
      handleClose(done) {
        this.dialogVisible = false
      },
      handleAdd(index, row) {
        this.dialogFormVisible = true
      },
      add(){
        this.dialogFormVisible = false
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        this.form.time= yy+'-0'+mm+'-'+dd+' '+hh+':'+mf+':'+ss
        this.tableData.push(this.form)
      }
    },
    created(){
      this.$http
      .get('https://www.fastmock.site/mock/3dd33af66b86aaac51b02d0ff90da8cc/station/branch')
      .then((ret) => {
        this.tableData = ret
        console.log(ret)
      })
    },
}
</script>

<style lang='scss' scope>
 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
 .heade1{
        height: 40px;
        font-size: 20px;
        margin: 20px 10px 0 10px;
        border-bottom: 1px solid rgb(204, 204, 204);
    }
    .heade1 div{
      border-bottom:3px solid #23ab84 ;
      width: 100px;
      height: 39px;
    }
 
 
</style>