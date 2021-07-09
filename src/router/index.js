import Vue from 'vue'
import Router from 'vue-router'
import admin from "../views/admin";
import addStudent from "../components/admin/addStudent";
import teacherManage from "../components/admin/teacherManage";
import studentManage from "../components/admin/studentManage";
import addTeacher from "../components/admin/addTeacher";
import login from "../components/common/login";
import teacher from "../views/teacher";
import selectExam from "../components/teacher/selectExam";
import addExam from "../components/teacher/addExam";
import answerDescription from "../components/teacher/answerDescription";
import examDescription from "../components/teacher/examDescription";
import selectAnswer from "../components/teacher/selectAnswer";
import addAnswer from "../components/teacher/addAnswer";
import addAnswerChildren from "../components/teacher/addAnswerChildren";
import student from "../views/student";
import myExam from "../components/student/myExam";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/admin',
      component: admin,
      children: [
        {
          path: '/studentManage',
          component: studentManage
        },
        {
          path: '/addStudent',
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
      path: '/teacher',
      component: teacher,
      children: [
        /*{
          path: '/', //首页默认路由
          component: hello
        },*/
        /*{
          path: '/scorePart',
          component: scorePart,
        },*/
        {
          path: '/examDescription',
          component: examDescription,
        },
        {
          path: '/selectExam',
          component: selectExam
        },
        {
          path: '/addExam',
          component: addExam
        },
        {
          path: '/answerDescription',
          component: answerDescription
        },
        {
          path: '/selectAnswer',
          component: selectAnswer
        },
        {
          path: '/addAnswer',
          component: addAnswer
        },
        {
          path: '/addAnswerChildren',
          component: addAnswerChildren
        },
      ]
    },
    {
      path: '/student',
      component: student,
      children: [
        {
          path: "/",
          component: myExam,
        },
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
