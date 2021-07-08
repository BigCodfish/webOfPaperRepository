<template>
  <div id="index">

    <myHeader class="topbar"></myHeader>

    <section class="container">
      <div class="left_side">
        <!-- 左边框 -->
        <mainLeft></mainLeft>
      </div>

      <div class="main_wrapper">
        <!-- 显示主题框的标题部分 -->
        <navigator class="nav"></navigator>

        <!-- 路由部分 -->
        <router-view></router-view>
      </div>
    </section>

  </div>
</template>

<script>
import header from "../components/common/header";
import mainLeft from "../components/common/mainLeft";
import navigator from "../components/common/navigator";

export default {
  name: "admin",
  components: {
    header,
    mainLeft,
    navigator,
  },
  data() {
    return {
      username: '许如梦'
    }
  },
  methods: {}
}
</script>

<style scoped>
#index .nav {
  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.container {
  display: flex;
  background-color: #fff;
}

.main_wrapper {
  overflow: hidden;
  flex: 1;
  background-color: #fff;
}
</style>
