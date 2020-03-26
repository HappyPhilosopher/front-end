import Vue from 'vue';
import Vuex from 'vuex';
import login from './login';

Vue.use(Vuex);

const getData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
};

const getListItem = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 4, done: true });
    }, 1000);
  });
};

// const tip = () => {
//   window.console.log('done');
// };

export default new Vuex.Store({
  state: {
    count: 2,
    list: [
      {
        id: 1,
        done: true
      },
      {
        id: 2,
        done: true
      },
      {
        id: 3,
        done: false
      }
    ]
  },
  getters: {
    listCount: state => state.list.length,
    // 创建一个方法访问数据
    findById: state => id => state.list.find(item => item.id === id)
  },
  mutations: {
    add(state, payload) {
      state.count += payload;
    },
    addListItem(state, payload) {
      // state.list = [...state.list, payload.item];
      state.list.push(payload);
    }
  },
  actions: {
    async add({ commit }) {
      const data = await getData();
      window.console.log(data);
      commit('add', window.parseInt(data));
    },

    async addListItem({ dispatch, commit }) {
      // 等待add完成
      await dispatch('add');
      // return new Promise(resolve => {
      //   commit('addListItem', await getListItem());
      //   resolve(tip);
      // })
      window.console.log(await getListItem());
      commit('addListItem', await getListItem());
    }
  },
  modules: {
    login
  }
});
