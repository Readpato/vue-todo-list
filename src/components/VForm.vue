<script>
import { PencilIcon } from "@heroicons/vue/outline";

export default {
  name: "VForm",
  components: { PencilIcon },
};
</script>

<template>
  <form
    @submit.prevent=""
    class="p-3 flex flex-col space-y-1 bg-bubbleColor rounded-xl w-11/12 mx-auto shadow-xl"
  >
    <div class="wrapper flex justify-evenly flex-col space-y-2">
      <label for="new-task" class="font-normal text-white">Create new</label>
      <div class="flex justify-between">
        <input
          id="new-task"
          type="text"
          class="p-1 w-11/12 mr-1 outline outline-white outline-1 rounded bg-bubbleColor text-white placeholder:italic placeholder:text-textColor focus:outline-none focus:ring-2 focus:ring-inputColor"
          placeholder="Write here"
        />
        <PencilIcon class="w-6 ml-2 h-auto text-white" />
      </div>
    </div>
  </form>
</template>
