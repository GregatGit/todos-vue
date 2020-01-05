<template>
  <div id="app">
    <Header />
    <todo-list :todos="todos" />
  </div>
</template>

<script>
import Header from './components/Header'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  data: function() {
    return {
      todos: [
        { name: 'walk dog', done: false },
        { name: 'build app', done: false },
      ],
    }
  },
  components: {
    Header,
    TodoList
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
