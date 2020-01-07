import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { name: 'cook dinner', done: false },
      { name: 'pat cat', done: false },
    ],
  },
  mutations: {
    DELETE_TODO(state, payload){
      state.todos = payload
    }
  },
  actions: {
    deleteTodo({ commit }, payload){
      const newTodos = [...this.state.todos]
      newTodos.splice(payload, 1)
      //this.state.todos = newTodos
      commit('DELETE_TODO', newTodos)
    }
  },
})