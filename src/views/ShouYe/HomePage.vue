<template>
  <div>
    <div class="shuju">
      <h5>数据概况</h5>
      <div class="tit">
        <span>未租用</span>
        <span>已租用</span>
        <span>全部摊位</span>
        <span>客户总数</span>
        <span>本月新增</span>
        <span>今天增加</span>
        <span>昨天增加</span>
        <span>今日收款</span>
        <span>昨天收款</span>
        <span>即将到期</span>
      </div>
      <div class="st">
        <span>100</span>
        <span>500</span>
        <span>1000</span>
        <span>5000</span>
        <span>500</span>
        <span>100</span>
        <span>800 </span>
        <span>￥21100</span>
        <span>￥1100</span>
        <span>10</span>
      </div>
    </div>
    <div class="ruku">
      <h5>快捷入库</h5>
      <div class="manage">
        <div>
          <i class="iconfont icon-guanli"></i>
          <p>摊位管理</p>
        </div>
        <div>
          <i class="iconfont icon-guanli"></i>
          <p>租赁管理</p>
        </div>
        <div>
          <i class="iconfont icon-guanli"></i>
          <p>客户管理</p>
        </div>
        <div>
          <i class="iconfont icon-guanli"></i>
          <p>报表管理</p>
        </div>
        <div>
          <i class="iconfont icon-guanli"></i>
          <p>权限管理</p>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <div class="shouzu">
        <h5 style="text-align: left;">近7日收租情况</h5>
        <ve-line :data="chartData"></ve-line>
      </div>
      <div class="kehu">
        <h5 style="text-align: left;">近7日客户情况</h5>
        <ve-line :data="chartData2"></ve-line>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/font/iconfont.css";
export default {
  data: function() {
    return {
      chartData: {
        columns: ["日期", "收租"],
        rows: [
          { 日期: "20201101", 收租: 51000 },
          { 日期: "20201102", 收租: 72000 },
          { 日期: "20201103", 收租: 92340 },
          { 日期: "20201104", 收租: 131115 },
          { 日期: "20201105", 收租: 150000 },
          { 日期: "20201106", 收租: 120000 },
          { 日期: "20201107", 收租: 90000 },
          { 日期: "20201108", 收租: 70000 },
        ],
      },
      chartData2: {
        columns: ["日期", "住户"],
        rows: [
          { 日期: "20201101", 住户: 50 },
          { 日期: "20201102", 住户: 65 },
          { 日期: "20201103", 住户: 92 },
          { 日期: "20201104", 住户: 125 },
          { 日期: "20201105", 住户: 145 },
          { 日期: "20201106", 住户: 130 },
          { 日期: "20201107", 住户: 96 },
          { 日期: "20201108", 住户: 98 },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.shuju,
.ruku {
  width: 1100px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 242, 242);
  border-radius: 5px;
  box-shadow: rgba(204, 204, 204, 0.35) 5px 5px 10px;
  margin-bottom: 10px;
}
h5 {
  margin-left: 10px;
}
.tit {
  height: 16px;
  color: rgb(215, 215, 215);
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  margin-bottom: 10px;
}
.st {
  display: flex;
  justify-content: space-around;
  font-family: "Arial Normal", Arial;
  font-weight: 400;
  font-style: normal;
  font-size: 34px;
  color: rgb(26, 188, 156);
}
.shouzu {
  width: 540px;
  height: 458px;
  float: left;
  margin-right: 10px;
  /* padding-bottom: 50px; */
  box-shadow: rgba(204, 204, 204, 0.35) 5px 5px 10px;
}
.kehu {
  width: 540px;
  height: 458px;
  float: left;
  /* padding-bottom: 50px; */
  box-shadow: rgba(204, 204, 204, 0.35) 5px 5px 10px;
}
.manage {
  display: flex;
  justify-content: space-around;
  div {
    width: 48px;
    height: 48px;
    .icon-guanli {
      display: inline-block;
      font-size: 48px;
      color: #8a8a8a;
      text-align: center;
    }
    p {
      font-size: 12px;
      color: #666666;
      text-align: center;
    }
  }
}
</style>
