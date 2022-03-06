<script>
import { PencilIcon } from "@heroicons/vue/outline";

export default {
  name: "VForm",
  components: { PencilIcon },
};
</script>

<template>
  <form
    class="p-3 flex flex-col space-y-1 bg-bubbleColor rounded-xl w-11/12 mx-auto shadow-xl"
  >
    <div class="wrapper flex justify-evenly flex-col space-y-2">
      <label for="new-task" class="font-medium text-white">New task:</label>
      <div class="flex justify-between">
        <input
          id="new-task"
          type="text"
          class="p-1 w-4/5 mr-1 border rounded bg-bubbleColor text-white placeholder:italic placeholder:text-slate-400"
          placeholder="Write here"
        />
        <PencilIcon class="w-6 h-auto mr-4 text-white" />
      </div>
    </div>
  </form>
</template>
