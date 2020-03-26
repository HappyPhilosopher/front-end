export default {
  namespaced: true,
  state: {
    isLoggedIn: true,
    viewCount: 0
  },
  mutations: {
    addViewCount: state => state.viewCount++,
    addRootCount: (state, n) => (state.viewCount += n)
  },
  actions: {
    addViewCount({ commit, state }) {
      state.isLoggedIn && commit('addViewCount');
    },
    addRootCount({ commit, state, rootState }) {
      state.isLoggedIn && commit('addRootCount', rootState.count);
    }
  }
};
