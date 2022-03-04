<script>
import VHeader from "./VHeader.vue";
import VMain from "./VMain.vue";

export default {
  name: "VTodoContainer",
  components: { VHeader, VMain },
};
</script>

<template>
  <div class="w-4/5 md:w-1/2 h-auto mx-auto mt-10 rounded shadow-xl">
    <VHeader title="Todo List App" />
    <VMain />
  </div>
</template>
