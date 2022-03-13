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
  created() {
    this.getStoredTasks();
  },
  methods: {
    createNewTask(newTask) {
      let newKey = Date.now();
      let storedTasks = [];
      storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];
      storedTasks.push({ task: newTask, key: newKey });
      localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
      this.tasks = storedTasks;
    },
    deleteTask(taskIndex) {
      let storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
      this.tasks.splice(taskIndex, 1);
    },
    getStoredTasks() {
      console.log("I've been created");
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
      :key="task.key"
      :id="index"
    />
  </ul>
  <VTodoEmptyItem v-else />
</template>
