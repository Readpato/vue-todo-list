<script>
import VForm from "./VForm.vue";
import VHeader from "./VHeader.vue";
import VTodoItem from "./VTodoItem.vue";
export default {
  data() {
    return {};
  },
  name: "VTaskList",
  components: { VForm, VHeader, VTodoItem },
};
</script>

<template>
  <VForm />
  <VHeader title="Today tasks" />
  <ul class="task-list w-11/12 mx-auto space-y-2 flex flex-col">
    <VTodoItem />
  </ul>
</template>
