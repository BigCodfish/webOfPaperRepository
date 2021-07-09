<!-- 用户登录界面 -->
<template>
  <div id="login">
    <div class="bg"></div>

    <!-- 标题部分 -->
    <el-row>
      <el-col :span="10" :offset="1">
        <div class="top">
          <i class="iconfont el-icon-notebook-2"></i>
          <span class="title">Paper Repository</span>
        </div>
      </el-col>
    </el-row>

    <!-- 登录面板 -->
    <el-row class="main-container">
      <el-col :span="6" :offset="9">
        <p class="loginTitle">登录</p>
        <el-form :label-position="labelPosition" :model="formLabelAlign">
          <el-form-item>
            <el-input v-model.number="formLabelAlign.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formLabelAlign.password" placeholder="请输入密码" type='password' show-password></el-input>
          </el-form-item>
          <div class="submit">
            <el-button type="primary" class="row-login" @click="login()">登录</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>

    <el-row >
      <el-col>
        <span class="tip">面向学生,老师的试题库管理系统</span>
        <p></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  store,
  name: "login",
  data() {
    return {
      role: 2,
      labelPosition: 'left',
      formLabelAlign: {
        username: '20154084',
        password: '123456'
      }
    }
  },
  methods: {
    //用户登录请求后台处理
    login() {
      console.log("登录操作执行-------");
      this.$axios({
        url: `/api/login`,
        method: 'post',
        data: {
          ...this.formLabelAlign
        }
      }).then(res=>{
        let resData = res.data.data
        if(resData != null) {
          switch(resData.role) {
            case "0":  //管理员
              this.$cookies.set("cname", resData.adminName)
              this.$cookies.set("cid", resData.adminId)
              this.$cookies.set("role", 0)
              this.$router.push({path: '/admin' }) //跳转到首页
              break
            case "1": //教师
              this.$cookies.set("cname", resData.teacherName)
              this.$cookies.set("cid", resData.teacherId)
              this.$cookies.set("role", 1)
              this.$router.push({path: '/teacher' }) //跳转到教师用户
              break
            case "2": //学生
              this.$cookies.set("cname", resData.studentName)
              this.$cookies.set("cid", resData.studentId)
              this.$router.push({path: '/student'})
              break
          }
        }
        if(resData == null) { //错误提示
          this.$message({
            showClose: true,
            type: 'error',
            message: '用户名或者密码错误'
          })
        }
      })
    },
    clickTag(key) {
      this.role = key
    }
  },
  computed: mapState(["userInfo"]),
  mounted() {

  }
}
</script>

<style lang="scss" scoped>

a:link {
  color:#ff962a;
  text-decoration:none;
}
#login {
  font-size: 14px;
  color: #000;
  background-color: #fff;
}

.tip{
  font-size: 28px;
  color: #FFFFFF;
  margin-left: 80px;
  margin-bottom: 10px;
}

#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: url('../../assets/img/bg.png')center top / cover no-repeat;
}
#login .main-container {
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#login .top {
  margin-top: 50px;
  font-weight: bold;
  font-size: 30px;

  display: flex;
  justify-content: left;
}
#login .top .el-icon-notebook-2 {
  color: #FFFFFF;
  margin-top: 5px;
  font-size: 45px;
}
#login .top .title {
  margin-top: 8px;
  color: #eeeeee;
  margin-left: 5px;
}

.loginTitle {
  justify-content: left;
  font-weight: bold;
  font-size: 30px;
  margin: 10px 0px;
}

.submit .row-login {
  width: 100%;
  margin: 40px 0px 10px 0px;
  padding: 15px 20px;

}
.bottom .submit {
  display: flex;
  justify-content: center;
}

.bottom .options {
  margin-bottom: 40px;
  color: #ff962a;
  display: flex;
  justify-content: space-between;
}
.bottom .options > a {
  color: #ff962a;
}
.bottom .options .register span:nth-child(1) {
  color: #8C8C8C;
}
</style>
