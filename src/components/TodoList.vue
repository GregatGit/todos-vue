<template>
  <div>
    <h2>List To Be Done</h2>
    <ul class="list-group">
      <li 
        v-for="(todo, index) in todos"
        :key="index"
        :id="index"
        class="list-group-item d-flex justify-content-between align-items-center"
        :class="{myStyle: todo.done}"
        @click="checkClick"
      >{{todo.name}}
      <font-awesome-icon 
        icon="trash"
        name="trash"
        :id="index"
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
    },
    methods: {
      checkClick: function(event){
        let index = parseInt(event.target.id)
        if (event.target.classList.value){
          this.$store.dispatch('completedTodo', index)
        } else {
          let deleteIndex = parseInt(event.explicitOriginalTarget.farthestViewportElement.id)
          this.$store.dispatch('deleteTodo', deleteIndex)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.myStyle {
  text-decoration: line-through;
  background-color: rgb(68, 146, 211);
}
</style>