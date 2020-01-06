<template>
  <div>
    <h3>Add Task</h3>
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
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add-todo',
  data() {
    return {
      todo: '',
    }
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

<style lang="scss" scoped></style>
