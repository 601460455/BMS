<template>
  <div class="gen">
    <el-row>
      <el-col style="width:220px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"      
          router
        >
          <h5>后台管理系统</h5>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/homepage">系统首页</el-menu-item>
              <el-menu-item index="/accountsetup">账户设置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">基础管理</span>      
          </el-menu-item> -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>摊位管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Manage">市场管理</el-menu-item>
              <el-menu-item index="/Booth">摊位管理</el-menu-item>
              <el-menu-item index="/Rentaldetails">出租明细历史</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>租赁管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">订单管理</el-menu-item>
              <el-menu-item index="3-2">竞拍订单</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">租户列表</el-menu-item>
              <el-menu-item index="4-2">微信会员列表</el-menu-item>
              <el-menu-item index="4-2">租户等级</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
             <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/branch">部门管理</el-menu-item>
              <el-menu-item index="/admin">管理员管理</el-menu-item>
              <el-menu-item index="/branch">操作日志</el-menu-item>
              <el-menu-item index="/operation">角色管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Menu, Submenu, MenuItemGroup, MenuItem } from "element-ui";

Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
body,html{
  width: 100%;
  height: 100%;
}
.gen{
  float: left;
  margin-right: 10px;
}
h5 {
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
.gen,
.el-row,
.el-col-5,
.el-menu {
  height: 900px;
}
.el-menu-item .is_active {
  background-color: rgba(1, 226, 164, 1);
}
</style>
