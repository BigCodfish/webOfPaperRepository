import Vue from 'vue'
import Router from 'vue-router'
import admin from "../views/admin";
import addStudent from "../components/admin/addStudent";
import teacherManage from "../components/admin/teacherManage";
import studentManage from "../components/admin/studentManage";
import addTeacher from "../components/admin/addTeacher";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login', //登录界面
      component: () => import('@/components/common/login')
    },
    {
      path: '/admin',  //管理员主页
      component: admin,
      children: [
        {
          path: '/studentManage', //学生管理界面
          component: studentManage
        },
        {
          path: '/addStudent', //添加学生
          component: addStudent
        },
        {
          path: '/teacherManage',
          component: teacherManage
        },
        {
          path: '/addTeacher',
          component: addTeacher
        }
      ]
    },
    {
      path: '/teacher', //教师主页
      component: () => import('@/views/teacher'),
      children: [
        {
          path: '/', //首页默认路由
          component: () => import('@/components/common/hello')
        },
        {
          path: '/scorePart',
          component: () => import('@/components/charts/scorePart')
        },
        // {
        //   path: '/allStudentsGrade', //所有学生成绩统计
        //   component: () => import('@/components/teacher/allStudentsGrade')
        // },
        {
          path: '/examDescription', //考试管理功能描述
          component: () => import('@/components/teacher/examDescription')
        },
        {
          path: '/selectExam', //查询所有考试
          component: () => import('@/components/teacher/selectExam')
        },
        {
          path: '/addExam', //添加考试
          component: () => import('@/components/teacher/addExam')
        },
        {
          path: '/answerDescription', //题库管理功能介绍
          component: () => import('@/components/teacher/answerDescription')
        },
        {
          path: '/selectAnswer', //查询所有题库
          component: () => import('@/components/teacher/selectAnswer')
        },
        {
          path: '/addAnswer', //增加题库主界面
          component: () => import('@/components/teacher/addAnswer')
        },
        {
          path: '/addAnswerChildren', //点击试卷跳转到添加题库页面
          component: () => import('@/components/teacher/addAnswerChildren')
        },
      ]
    },
    {
      path: '/student',
      component: () => import('@/views/student'),
      children: [
        {path: "/", component: () => import('@/components/student/myExam')},
        {path: '/startExam', component: () => import('@/components/student/startExam')},
        {path: '/manager', component: () => import('@/components/student/manager')},
        {path: '/examMsg', component: () => import('@/components/student/examMsg')},
        // {path: '/message', component: () => import('@/components/student/message')},
        {path: '/studentScore', component: () => import("@/components/student/answerScore")},
        {path: '/scoreTable', component: () => import("@/components/student/scoreTable")}
      ]
    },
    {path: '/answer', component: () => import('@/components/student/answer')}
  ]
})
