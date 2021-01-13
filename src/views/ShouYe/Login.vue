<template>
  <el-form ref="adminForm" class="container" :model="adminForm" :rules="rules">
    <h3>市场管理后台系统</h3>
    <div class="ipt">
      <div class="item">
      <el-form-item prop="adminName">
        <el-input v-model="adminForm.adminName" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          v-model="adminForm.passWord"
          type="password"
          placeholder="密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          :loading="isLoading"
          type="primary"
          @click="submitForm"
          :plain="true"
          >登录</el-button
        >
      </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script>
import Vue from "vue";
import { Form, FormItem, Button, Input } from "element-ui";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      adminForm: {
        adminName: "",
        passWord: "",
      },
      rules: {
        adminName: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
        passWord: [
          { required: true, message: "请输入管理员密码", trigger: "blur" },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.adminForm.validate((valid) => {
        // console.log(valid) 布尔值，空信息false
        if (valid) {
          // 有值验证成功，发送ajax
          // 避免多次提交 :loading
          this.$store.dispatch('setlogin2',true)
        } else {
          // 没值验证失败
          console.log('请输入完整的信息');
        }
          this.isLoading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.container {
  border: 1px solid #eaeaea;
  width: 457px;
  height: 396px;
  margin: 90px auto;

  h3 {
    width: 457px;
    height: 163px;
    color: white;
    line-height: 159px;
    text-align: center;
    background: rgba(107, 203, 202, 1);
  }
  .ipt {
    width: 457px;
    height: 233px;
    position: relative;
    background: rgba(233, 233, 233, 1);
    .item{
      text-align: center;
      width: 300px;
      position: absolute;
      left: 73px;
      top:10px;
      .el-form-item {
      padding: 12px 0;
      }
      .el-button--primary{
        width: 300px;
        height: 40px;
        color: #FFF;
        background-color: rgba(26, 188, 156, 1);
        border-color:rgba(26, 188, 156, 1);

      }
    }
  
  }
}
</style>
