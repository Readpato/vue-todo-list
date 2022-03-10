<script>
import { PlusIcon } from "@heroicons/vue/outline";

export default {
  name: "VForm",
  components: { PlusIcon },
  emits: ["createNewTask"],
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    emitNewTask() {
      this.$emit("createNewTask", this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<template>
  <form
    @submit.prevent=""
    class="p-3 flex flex-col space-y-1 bg-bubbleColor rounded-xl w-11/12 mx-auto shadow-xl"
  >
    <div class="wrapper flex justify-evenly flex-col space-y-1">
      <label for="new-task" class="font-normal text-white"
        >Create new task</label
      >
      <div class="flex justify-between">
        <input
          @keyup.enter="emitNewTask"
          v-model="newTask"
          id="new-task"
          type="text"
          class="p-2 w-11/12 mr-1 outline outline-white outline-1 rounded bg-bubbleColor text-white placeholder:italic placeholder:text-textColor focus:outline-none focus:ring-2 focus:ring-inputColor"
          placeholder="Write here"
        />
        <PlusIcon
          @click="emitNewTask"
          class="w-6 max-h-6 self-center ml-2 h-auto text-white hover:text-white hover:bg-inputColor hover:rounded-full hover:cursor-pointer hover:ring-white hover:ring-1"
        />
      </div>
    </div>
  </form>
</template>
