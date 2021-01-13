<template>
  <div>
     <div class="heade1">
            <div>管理员管理</div>
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
      label="账号名称"
      width="120">
      <template slot-scope="scope">
            <span>{{ scope.row.accout }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="姓名"
      width="120">
      <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="手机号"
      width="140">
      <template slot-scope="scope">
            <span>{{ scope.row.mobile }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="所属部门"
      width="100">
      <template slot-scope="scope">
            <span>{{ scope.row.ment }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="添加时间"
      width="200">
      <template slot-scope="scope">

        <span style="margin-left: 10px">{{ scope.row.addTime }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="最后登陆时间"
      width="200">
      <template slot-scope="scope">
            <span>{{ scope.row.time }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="状态"
      width="130">
      <template slot-scope="scope">
            <span>{{ scope.row.state }}</span>
      </template>
    </el-table-column>

    
    <el-table-column label="操作">
      <template slot-scope="scope" >
         <el-button
          size="mini"
          @click="handleAdd(scope.$index, scope.row)" >管理</el-button>
          <el-dialog title="管理员添加" :visible.sync="dialogFormVisible">
          <el-form :model="form">
           <el-form-item label="管理员名称" :label-width="formLabelWidth">
           <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="管理员姓名" :label-width="formLabelWidth">
           <el-input v-model="form.describe" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
           <el-input v-model="form.mobile" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="权限角色" :label-width="formLabelWidth">
           <el-input v-model="form.accout" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属部门" :label-width="formLabelWidth">
           <el-input v-model="form.ment" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="登陆密码" :label-width="formLabelWidth">
           <el-input v-model="form.password" autocomplete="off"></el-input>
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

            <el-pagination
                background
                :page-size="num1"
                layout="prev, pager, next"
                :total="14"
                :current-page = "num"
                @next-click="changeAdd(index)"
                @current-change="changeNum(num)"
                @size-click="change(index)"
                style="text-align:center; margin-top:30px; margin-bottom:30px">
            </el-pagination>
  </div>
</template>

<script>
import Vue from 'vue'
import {Table, TableColumn,Input,Button, Popover,Tag,Dialog,Form,Select,Option,FormItem, Pagination} from 'element-ui'
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
Vue.use(Pagination)
export default {
    data() {
        return {
          tableData: [],
          tdata:[],
          input2:'',
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogVisible : false,
          form: {
          name: '',
          delete:1,
          state:1,
          describe:'',
          time:'',
          addTime:'2020-02-26 20:47:44'
          },
          num:1,
          num1:8,
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
      },
      change(index){
        if(this.num > 1){
          this.num--
        }
        this.tableData=[]
        let n = (this.num -1) * this.num1 
        for(let i = n; i< n + 8; i++){
          if(this.tdata[i]){
            this.tableData.push(this.tdata[i])
            }
        }
      },
      changeAdd(index){
        if(this.num < 3 ){
          this.num++
        }
        this.tableData=[]
        let n = (this.num -1) * this.num1 
        for(let i = n; i< n + 8; i++){
          if(this.tdata[i]){
            this.tableData.push(this.tdata[i])
            }
        }
      },
      changeNum(index){
        console.log(index)
      }
    },


    created(){
      this.$http
      .get('https://www.fastmock.site/mock/3dd33af66b86aaac51b02d0ff90da8cc/station/admin')
      .then((ret) => {
        this.tdata = ret
        let n = (this.num -1) * this.num1
        for(let i = n; i< n + 8; i++){
          this.tableData.push(ret[i])
        }
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