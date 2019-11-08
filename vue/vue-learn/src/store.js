import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0
};

const mutations = {
  increse(state) {
    state.count++;
  },
  decrese(state) {
    state.count--;
  }
};

const actions = {
  increse({ commit }) {
    commit('increse');
  },
  decrese({ commit }) {
    commit('decrese');
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
