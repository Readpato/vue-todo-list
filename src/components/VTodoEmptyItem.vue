<script>
export default {
  name: "VTodoEmptyItem",
};
</script>

<template>
  <ul class="w-11/12 mx-auto space-y-2 flex flex-col">
    <div
      class="flex justify-between space-x-1 bg-bubbleColor p-3 rounded-2xl h-auto"
    >
      <p class="text-textColor italic p-2 w-full text-center">
        No tasks for now!
      </p>
    </div>
  </ul>
</template>
