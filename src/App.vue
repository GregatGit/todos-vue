<template>
  <div id="app" class="container">
    <Header />
    <todo-list :todos="todos" />
    <add-todo @addNewTodo="addNewTodo" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Footer from './components/Footer'

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
    }
  },
  components: {
    Header,
    TodoList,
    AddTodo,
    Footer
  },
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: linear-gradient(to right, rgb(5, 95, 212), #33AEFF);
}
</style>
