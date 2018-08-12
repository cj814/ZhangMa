const user = {
  state: {
    user: {},
    isLogin: false
  },
  actions: {
    login ({ commit }, userInfo) {
      commit('setUserInfo', userInfo)
    }
  },
  mutations: {
    setUserInfo: (state, userInfo) => {
      state.user = userInfo
      state.isLogin = true
      localStorage.setItem('zmUserInfo', JSON.stringify(userInfo))
      localStorage.setItem('zmLogin', true)
    }
  }
}

export default user
