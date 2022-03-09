<script>
import VForm from "./VForm.vue";
import VTodoList from "./VTodoList.vue";

export default {
  name: "VMain",
  components: { VForm, VTodoList },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addNewTask(task) {
      this.tasks.push({ text: task, id: Date.now() });
    },
  },
};
</script>

<template>
  <div class="space-y-3">
    <VForm @create-new-task="addNewTask" />
    <h3 class="text-zinc-400 text-center font-medium w-11/12 mx-auto">
      Today tasks
    </h3>
    <VTodoList v-for="task in tasks" :text="task.text" :key="task.id" />
  </div>
</template>
