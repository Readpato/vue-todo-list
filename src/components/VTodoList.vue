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
    logTasks() {
      console.log(this.tasks);
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
  <VForm />
  <VHeader title="Today tasks" />
  <ul class="task-list w-11/12 mx-auto space-y-2 flex flex-col">
    <VTodoItem v-if="activeTasks" />
    <VTodoEmptyItem v-else />
  </ul>
</template>
