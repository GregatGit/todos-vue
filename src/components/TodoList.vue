<template>
  <div>
    <h2>List To Be Done</h2>
    <ul>
      <li 
        v-for="(todo, index) in todos"
        :key="index"
        :class="{myStyle: todo.done}"
      >{{todo.name}}
      <button  @click="$store.dispatch('completedTodo', index)">DONE</button>
      <button @click="$store.dispatch('deleteTodo', index)" >DELETE</button>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'todo-list',
    props: ['todos']
  }
</script>
<style lang="scss" scoped>
.myStyle {
  text-decoration: line-through;
}
</style>