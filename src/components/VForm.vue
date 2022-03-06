<script>
import { PencilIcon } from "@heroicons/vue/outline";

export default {
  name: "VForm",
  components: { PencilIcon },
};
</script>

<template>
  <form class="p-2 flex flex-col space-y-1">
    <label for="new-task" class="font-medium">New task:</label>
    <div class="wrapper flex">
      <input
        id="new-task"
        type="text"
        class="p-1 w-4/5 border-rose-300 border rounded focus:outline-red-400 placeholder:italic placeholder:text-slate-400"
        placeholder="Write here"
      />
      <PencilIcon class="w-6 h-auto ml-2" />
    </div>
  </form>
</template>
