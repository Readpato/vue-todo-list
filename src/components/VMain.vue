<script>
import VForm from "./VForm.vue";
import VTodoList from "./VTodoList.vue";

export default {
  name: "VMain",
  components: { VForm, VTodoList },
};
</script>

<template>
  <div class="space-y-3">
    <VForm />
    <h3 class="text-zinc-400 text-center font-medium w-11/12 mx-auto">
      Today tasks
    </h3>
    <VTodoList />
  </div>
</template>
