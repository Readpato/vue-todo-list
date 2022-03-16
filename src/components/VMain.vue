<script>
import VTodoList from "./VTodoList.vue";

export default {
  name: "VMain",
  components: { VTodoList },
  data() {
    return {};
  },
};
</script>

<template>
  <main class="space-y-3">
    <VTodoList />
  </main>
</template>
