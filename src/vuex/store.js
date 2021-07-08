import VUE from 'vue'
import VUEX from 'vuex'

VUE.use(VUEX)

const state = {
  isPractice: false, //练习模式标志
  flag: false, //菜单栏左右滑动标志
  userInfo: null,
  // 一个item为一个导航, content中为子导航
  teacherMenu: [
    {
      index: '1',
      title: '考试管理',
      icon: 'icon-kechengbiao',
      content: [
        {
          item1: '功能介绍', path: '/examDescription'
        },
        {
          item2: '考试查询', path: '/selectExam'
        },
        {
          item3: '添加考试',
          path: '/addExam'
        }
      ],
    },
    {
      index: '2',
      title: '题库管理',
      icon: 'icon-tiku',
      content: [
        {
          item1: '功能介绍', path: '/answerDescription'
        },
        {
          item2: '所有题库', path: '/selectAnswer'
        },
        {
          item3: '增加题库',
          path: '/addAnswer'
        },
        {
          path: '/addAnswerChildren'
        }
      ],
    },
  ],

  adminMenu: [
    {
      index: '1',
      title: '学生管理',
      icon: 'icon-role',
      content: [{item1: '学生管理', path: '/studentManage'}, {item2: '添加学生', path: '/addStudent'}],
    },
    {
      index: '2',
      title: '教师管理',
      icon: 'icon-Userselect',
      content: [{item1: '教师管理', path: '/teacherManage'}, {item2: '添加教师', path: '/addTeacher'}],
    },
  ],
}
const mutations = {
  practice(state, status) {
    state.isPractice = status
  },
  toggle(state) {
    state.flag = !state.flag
  },
  changeUserInfo(state, info) {
    state.userInfo = info
  }
}
const getters = {}
const actions = {
  getUserInfo(context, info) {
    context.commit('changeUserInfo', info)
  },
  getPractice(context, status) {
    context.commit('practice', status)
  }
}
export default new VUEX.Store({
  state,
  mutations,
  getters,
  actions,
  // store
})
