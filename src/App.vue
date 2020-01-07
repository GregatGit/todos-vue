<template>
  <div id="app">
    <Header />
    <todo-list 
      :todos="todos"
      @completeTodo="completeTodo"
    />
    <add-todo @addNewTodo="addNewTodo" />
  </div>
</template>

<script>
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import { nameFree } from './helpers'
import { mapState } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    addNewTodo: function(todo){
      const check = nameFree(todo, this.todos)
      if (!check) return
      this.$store.dispatch('addTodo', todo)
    },
    completeTodo: function(index){
      this.$store.dispatch('completedTodo', index)
    }
  },
  components: {
    Header,
    TodoList,
    AddTodo
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
