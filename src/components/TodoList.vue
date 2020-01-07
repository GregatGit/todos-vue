<template>
  <div>
    <h2>List To Be Done</h2>
    <ul class="list-group">
      <li 
        v-for="(todo, index) in todos"
        :key="index"
        class="list-group-item"
        :class="{myStyle: todo.done}"
      >{{todo.name}}
      <font-awesome-icon
        icon="check-circle"
        @click="$store.dispatch('completedTodo', index)"
      />
      <font-awesome-icon 
        icon="trash"
        @click="$store.dispatch('deleteTodo', index)" 
      />
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    name: 'todo-list',
    props: ['todos'],
    components: {
      FontAwesomeIcon
    }
  }
</script>
<style lang="scss" scoped>
.myStyle {
  text-decoration: line-through;
}
</style>