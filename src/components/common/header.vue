<!-- 顶部信息栏 -->
<template>
  <header id="topbar">
    <el-row>
      <!-- 左边上角标题和图标 -->
      <el-col :span="4" class="topbar-left">
        <i class="iconfont icon-kaoshi"></i>
        <span class="title" @click="index()">Paper Repository</span>
      </el-col>
      <el-col :span="20" class="topbar-right">
        <!-- 导航收缩按钮 -->
        <i class="el-icon-menu" @click="toggle()"></i>
        <!-- 右上角用户信息 -->
        <div class="user">
          <span class="userName">{{user.userName}}</span>
          <img src="@/assets/img/userimg.png" class="user-img" ref="img" @click="showSetting()" />
          <transition name="fade">
            <div class="out" ref="out" v-show="login_flag">
              <ul>
                <li><a href="javascript:;">设置</a></li>
                <li class="exit" @click="exit()"><a href="javascript:;">退出登录</a></li>
              </ul>
            </div>
          </transition>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      login_flag: false,
      user: { //用户信息
        userName: null,
        userId: null
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: mapState(["flag","menu"]),
  methods: {
    //显示、隐藏退出按钮
    showSetting() {
      this.login_flag = !this.login_flag
    },
    //左侧栏放大缩小
    ...mapMutations(["toggle"]),
    getUserInfo() { //获取用户信息
      let userName = this.$cookies.get("cname")
      let userId = this.$cookies.get("cid")
      this.user.userName = userName
      this.user.userId = userId
    },
    index() {
      this.$router.push({path: '/index'})
    },
    exit() {
      let role = this.$cookies.get("role")
      this.$router.push({path:"/"}) //跳转到登录页面
      this.$cookies.remove("cname") //清除cookie
      this.$cookies.remove("cid")
      this.$cookies.remove("role")
      if(role == 0) {
        this.menu.pop()
      }
    }
  },
  store
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.userName{
  margin-top: 22px;
}

#topbar {
  position: relative;
  /*z-index: 10;*/
  background-color: #FFFFFF;
  height: 65px;
  /*line-height: 80px;*/
  color: #726f70;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5);
}
#topbar .topbar-left {
  margin-top: 0px;
  display: flex;
  justify-content: center;
  /*background: rgba(0, 0, 0, 0.05);*/
  overflow: hidden;
}
.topbar-left .icon-kaoshi {
  margin-top: 8px;
  font-size: 50px;
  font-weight: bold;
  color: #2f6c9f;
}
.topbar-left .title {
  font-size: 20px;
  cursor: pointer;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: bold;
  color: #2f6c9f;
}
.topbar-right {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
}
.topbar-right .user-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 2px;
  cursor: pointer;
  position: center;
}
.topbar-right .el-icon-menu {
  font-size: 30px;
  margin-left: 10px;
  margin-top: 19px;
  color: #2f6c9f;
}
.topbar-right .user {
  position: relative;
  /*margin-top: 22px;*/
  margin-right: 40px;
  display: flex;
}
.user .out {
  font-size: 14px;
  position: absolute;
  top: 60px;
  right: 0px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 12px;
}
.user .out ul {
  list-style: none;
}
.user .out ul > li {
  height: 26px;
  line-height: 26px;
}
.out a {
  text-decoration: none;
  color: #000;
}
.out .exit {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid #ccc;
}
</style>
