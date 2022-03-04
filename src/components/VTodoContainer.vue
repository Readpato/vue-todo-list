<script>
import VHeader from "./VHeader.vue";
export default {
  name: "VTodoContainer",
  components: { VHeader },
};
</script>

<template>
  <div class="w-4/5 md:w-1/2 h-auto mx-auto bg-red-500 mt-10 rounded shadow-xl">
    <VHeader title="Todo List App" />
  </div>
</template>
