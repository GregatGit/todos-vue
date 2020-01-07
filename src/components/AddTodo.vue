<template>
  <div>
    <h3>Add Task <font-awesome-icon icon="plus-square" size="lg"/></h3>
    <form @click.prevent="handleSubmit">
      <label for="name">Task (3 to 25 chars):</label>
      <input
        v-model="todo"
        type="text"
        id="name"
        name="name"
        required
        minlength="3"
        maxlength="25"
        size="25"
        placeholder="new task"
      />
      <button type="submit"><font-awesome-icon icon="plus-square" size="lg" /></button>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'add-todo',
  data() {
    return {
      todo: '',
    }
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    handleSubmit: function() {
      let newTodo = this.todo.trim()
      this.todo = ''
      this.$emit('addNewTodo', newTodo)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
