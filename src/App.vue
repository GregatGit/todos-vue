<template>
  <div id="app">
    <Header />
    <todo-list 
      :todos="todos"
      @deleteTodo="deleteTodo"
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
  // data: function() {
  //   return {
  //     todos: [
  //       { name: 'walk dog', done: false },
  //       { name: 'build app', done: false },
  //     ],
  //   }
  // },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    addNewTodo: function(todo){
      //if (todo === '' || todo == null) return
      
      const check = nameFree(todo, this.todos)
      if (!check) return

      this.todos.push({name: todo, done: false})
    },
    deleteTodo: function(index){
      this.$store.dispatch('deleteTodo', index)
    },
    completeTodo: function(index){
      this.todos[index].done = !this.todos[index].done
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
