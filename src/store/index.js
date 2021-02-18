import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.list.push(item);
    },
    UPDATE_ITEM(state, item) {
      state.list = state.list.map(current =>
        current.id === item.id ? item : current
      );
    },
    DELETE_ITEM(state, id) {
      state.list = state.list.filter(item => item.id !== id);
    }
  },
  actions: {},
  getters: {
    GET_LIST: s => s.list
  },
  modules: {}
});
