<template>
  <div id="index">

    <my-header class="topbar"></my-header>

    <section class="container">

      <div class="left_side">
        <main-left></main-left>
      </div>

      <div class="main_wrapper">
        <el-divider></el-divider>
        <router-view></router-view>
      </div>

    </section>

  </div>
</template>

<script>
import header from "../components/common/header";
import mainLeft from "../components/common/mainLeft";

export default {
  components: {
    myHeader: header,
    mainLeft,
  },
  data() {
    return {
      username: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
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

