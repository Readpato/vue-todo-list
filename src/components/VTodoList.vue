<script>
import VForm from "./VForm.vue";
import VHeader from "./VHeader.vue";
import VTodoItem from "./VTodoItem.vue";
import VTodoEmptyItem from "./VTodoEmptyItem.vue";
export default {
  name: "VTaskList",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    createNewTask(newTask) {
      this.tasks.push({ task: newTask });
      console.log(this.tasks);
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
  },
  computed: {
    activeTasks() {
      return this.tasks.length > 0 ? true : false;
    },
  },
  components: { VForm, VHeader, VTodoItem, VTodoEmptyItem },
};
</script>

<template>
  <VForm @emit-new-task="createNewTask" />
  <VHeader title="Today tasks" />
  <ul class="w-11/12 mx-auto space-y-2 flex flex-col" v-if="activeTasks">
    <VTodoItem
      @emit-delete-task="deleteTask"
      v-for="(task, index) in this.tasks"
      :task="task.task"
      :key="index"
      :id="index"
    />
  </ul>
  <VTodoEmptyItem v-else />
</template>
