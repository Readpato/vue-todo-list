<script>
import { XIcon } from "@heroicons/vue/outline";
export default {
  name: "VTaskList",
  components: { XIcon },
};
</script>

<template>
  <ul class="task-list w-11/12 mx-auto space-y-2 flex flex-col">
    <div
      class="flex justify-between space-x-1 bg-bubbleColor p-3 rounded-2xl h-auto"
    >
      <input
        class="self-center accent-inputColor flex-shrink-0 h-5 w-5"
        type="checkbox"
        name="task-done"
        id="task-checkbox"
      />
      <p class="text-white italic p-2">Study Tailwind</p>
      <XIcon
        class="w-6 max-h-6 self-center text-white flex-shrink-0 hover:text-white hover:bg-inputColor hover:rounded-full hover:cursor-pointer hover:ring-white hover:ring-1"
      />
    </div>
  </ul>
</template>
