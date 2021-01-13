<template>
  <div>
    <div class="nav">
      <div class="zuo">
        <p>欢迎</p>
        <p>上一次登录</p>
      </div>
      <div class="you">
        <span>意见反馈</span>
        <span @click="exit">退出</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      exit(){
          this.$store.state.isLogin = false
          this.$router.push('/')
      }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.nav {
  width: 1300px;
  height: 40px;
  background: white;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #ccc;
  .zuo {
    float: left;
    p {
      font-size: 12px;
      color: #666;
      line-height: 5px;
    }
  }
  .you {
    font-size: 12px;
    color: #666;
    line-height: 5px;
    margin-left: 1000px;
    line-height: 40px;
    span {
      margin-right: 10px;
    }
  }
}
</style>
