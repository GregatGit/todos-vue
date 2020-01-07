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
    },
    ADD_TODO(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    addTodo({ commit }, payload){
      const newTodos = [...this.state.todos]
      newTodos.push({name: payload, done: false})
      commit('ADD_TODO', newTodos)
      // this.todos.push({name: todo, done: false})
      //this.todos[index].done = !this.todos[index].done
    },
    deleteTodo({ commit }, payload){
      const newTodos = [...this.state.todos]
      newTodos.splice(payload, 1)
      commit('DELETE_TODO', newTodos)
    }
  },
})