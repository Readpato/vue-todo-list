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
    class="w-11/12 max-w-md pb-5 h-auto mx-auto mt-8 rounded-2xl shadow-2xl bg-cardColor"
  >
    <VHeader title="My todo" />
    <VMain />
  </div>
</template>
