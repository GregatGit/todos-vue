<template>
  <div>
    <h2>List To Be Done</h2>
    <ul>
      <li 
        v-for="(todo, index) in todos"
        :key="index"
      >{{todo.name}}</li>
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

</style>