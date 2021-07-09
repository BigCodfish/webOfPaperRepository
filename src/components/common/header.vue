<template>
  <header id="topbar">
    <el-row>
      <el-col :span="4" class="topbar-left">
        <i class="iconfont el-icon-notebook-2"></i>
        <span class="title">管理界面</span>
      </el-col>

      <el-col :span="20" class="topbar-right">
        <i class="el-icon-s-fold" @click="toggle()"></i>

        <div class="user">
          <span class="userName">{{ user.userName }}</span>
          <img src="@/assets/img/userimg.png" class="user-img" ref="img" @click="showSetting()" alt="avatar"/>
          <transition name="fade">
            <div class="out" ref="out" v-show="login_flag" id="fade">
              <span class="exit" @click="exit()">退出</span>
            </div>
          </transition>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      login_flag: false,
      user: {
        userName: '',
        userId: '',
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: mapState(["flag"]),
  methods: {
    showSetting() {
      this.login_flag = !this.login_flag
    },
    ...mapMutations(["toggle"]),
    getUserInfo() { //获取用户信息
      let userName = this.$cookies.get("cname")
      let userId = this.$cookies.get("cid")
      this.user.userName = userName
      this.user.userId = userId
    },
    exit() {
      let role = this.$cookies.get("role")
      this.$router.push({path: "/"}) //跳转到登录页面
      this.$cookies.remove("cname") //清除cookie
      this.$cookies.remove("cid")
      this.$cookies.remove("role")
      /*if (role == 0) {
        this.menu.pop()
      }*/
    }
  },
  store
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.userName {
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

.topbar-left .el-icon-notebook-2 {
  margin-top: 12px;
  font-size: 40px;
  font-weight: bold;
  color: #2f6c9f;
}

.topbar-left .title {
  font-size: 24px;
  cursor: pointer;
  justify-content: center;
  margin-top: 15px;
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

.topbar-right .el-icon-s-fold {
  font-size: 30px;
  margin-left: 0px;
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

#fade{
  z-index: 999;
}
</style>
