<template>
  <div>
    <h3>
      Add Task
      <font-awesome-icon icon="plus-square" size="lg" />
    </h3>
    <form @click.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Task (3 to 25 chars):</label>
        <input
        class="form-control"
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
        <button class="btn" type="submit">
          <font-awesome-icon icon="plus-square" size="lg" />
        </button>
      </div>
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
    FontAwesomeIcon,
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
