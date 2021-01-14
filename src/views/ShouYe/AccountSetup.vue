<template>
  <div class="gen1">
    <h5>账户设置</h5>
    <hr />
    <el-form
      ref="adminForm"
      class="container"
      :model="adminForm"
      :rules="rules"
      label-width="100px"
      style="width:500px"
    >
      <el-form-item style="margin-top:30px" label="用户头像" prop="adminImg">
        <template>
          <el-row style="margin-left:150px" class="demo-avatar demo-basic">
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div class="block">
                  <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
              </div>
            </el-col>
          </el-row>
        </template>
      </el-form-item>
      <el-form-item label="用户名" prop="adminName">
        <el-input
          placeholder="admin"
          v-model="adminForm.adminName"
          :disabled="true"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="adminEmail">
        <el-input
          placeholder="admin@manage.com"
          v-model="adminForm.adminEmail"
          :disabled="true"
        >
        </el-input>
      </el-form-item>
      <!-- <el-form-item label="旧密码" prop="oldPassWord" :disabled="true">
        <el-input
          v-model="adminForm.oldPassWord"
          type="password"
          placeholder="旧密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassWord">
        <el-input
          v-model="adminForm.newPassWord"
          type="password"
          placeholder="新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="OkpassWord">
        <el-input
          v-model="adminForm.OkpassWord"
          type="password"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button>取消</el-button>
        <el-button
          type="primary"
          style="background-color:#22AB82" 
          @click="submitForm2"
          >保存修改</el-button
        >
      </el-form-item> -->
    <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="adminForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="adminForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>

    <el-button @click="resetForm('adminForm')">取消</el-button>
     <el-button type="primary" @click="submitForm2('adminForm')" style="background-color:#22AB82" >保存修改</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Form,
  FormItem,
  Button,
  Input,
  Row,
  Col,
  Avatar,
  Message,
} from "element-ui";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Avatar);
Vue.use(Message);
export default {
  name: "Login",
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.adminForm.checkPass !== '') {
            this.$refs.adminForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.adminForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
       
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sizeList: ["medium"],
      isLoading: false,
      input: "",
      adminForm: {
        adminName: "",
        // passWord: "",
        adminEmail:"",
        // oldPassWord:"",
        // newPassWord:"",
        // OkpassWord:"",
          pass: '',
          checkPass: '',
      },
      rules: {
        // adminName: [
        //   { required: true, message: "请输入管理员账号", trigger: "blur" },
        //   { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        // ],
        // oldPassWord: [
        //   { required: true, message: "请输入管理员密码", trigger: "blur" },
        //   { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        // ],
        // newPassWord: [
        //   { required: true, message: "请输入管理员密码", trigger: "blur" },
        //   { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        // ],
        // OkpassWord: [
        //   { required: true, message: "请输入管理员密码", trigger: "blur" },
        //   { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        // ],
        pass: [
            {required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' }
          ],
      },
    };
  },
  methods: {

 submitForm2(adminForm) {
        this.$refs.adminForm.validate((valid) => {
          if (valid) {
            Message.success('成功保存修改')
          } else {
           Message.error('密码不一致');
            return false;
          }
        });
      },
      resetForm(adminForm) {
        this.$refs.adminForm.resetFields();
      }
    }
};
</script>

<style lang="scss" scoped>
.gen1 {
  float: left;
  width: 1100px;
  margin-top: 20px;
  margin-left: 50px;
  hr {
    width: 100%;
  }
}
</style>
