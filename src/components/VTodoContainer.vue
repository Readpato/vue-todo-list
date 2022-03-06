<script>
import VHeader from "./VHeader.vue";
import VMain from "./VMain.vue";

export default {
  name: "VTodoContainer",
  components: { VHeader, VMain },
};
</script>

<template>
  <div
    class="w-11/12 max-w-md h-72 mx-auto mt-8 rounded-2xl shadow-2xl bg-cardColor"
  >
    <VHeader title="My todo list!" />
    <VMain />
  </div>
</template>
