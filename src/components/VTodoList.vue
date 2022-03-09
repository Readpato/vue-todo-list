<script>
import VTaskItem from "./VTaskItem.vue";
export default {
  name: "VTaskList",
  components: { VTaskItem },
};
</script>

<template>
  <ul class="task-list w-11/12 mx-auto space-y-2 flex flex-col">
    <VTaskItem />
  </ul>
</template>
