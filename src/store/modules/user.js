const user = {
  state: {
    user: {},
    isLogin: false
  },
  actions: {
    // 登录
    login ({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
    },
    // 退出登录
    logOut ({commit}) {
      commit('removeUserInfo')
    }
  },
  mutations: {
    // 保存用户信息
    setUserInfo: (state, userInfo) => {
      state.user = userInfo
      state.isLogin = true
      localStorage.setItem('zmUserInfo', JSON.stringify(userInfo))
      localStorage.setItem('zmLogin', true)
    },
    // 删除登录用户信息
    removeUserInfo: (state) => {
      state.user = null
      state.isLogin = false
      localStorage.removeItem('zmUserInfo')
      localStorage.removeItem('zmLogin')
    }
  }
}

export default user
