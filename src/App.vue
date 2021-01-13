<template>
  <div id="app">
<<<<<<< HEAD
    <div class="left">
      <Shouye />
    </div>
    <div class="right">
        <!-- <TopNav /> -->
      <router-view />
    </div>
=======
    <router-view/>
>>>>>>> 9c776eae452240d05cf94920a1cb4c90d6cbc78e
  </div>
</template>
<script>
import Shouye from "@/components/Shouye";
import TopNav from "@/components/TopNav";
export default {
  components: {
    Shouye,
    TopNav,
  },
};
</script>
<style lang="scss">
#app {
  float: left;
  display: flex;
  flex-wrap: nowrap;
}
/* .navtop {
  position: fixed;
  top: 0;
} */

.left {
  /* width: 20%; */
  position: fixed;
  top: 0;
  left: 0;
}
.right {
  /* width: 100%; */
  float: left;
  /* position: absolute;
  top: 0;
  left: 230px; */
  margin-left: 230px;
  margin-top:45px;
  
}
</style>
