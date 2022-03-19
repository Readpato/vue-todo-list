<script>
import { XIcon } from "@heroicons/vue/outline";

export default {
  name: "VTodoItem",
  components: { XIcon },
  emits: ["emitDeleteTask"],
  data() {
    return {
      isCompleted: false,
    };
  },
  methods: {
    emitDeleteTask() {
      this.$emit("emitDeleteTask", this.id);
    },
  },
  props: {
    task: String,
    id: Number,
  },
};
</script>

<template>
  <div
    :id="id"
    class="flex justify-between space-x-1 bg-bubbleColor p-3 rounded-2xl h-auto shadow-2xl"
  >
    <input
      @click="isCompleted = !isCompleted"
      class="self-center accent-inputColor flex-shrink-0 h-5 w-5"
      type="checkbox"
      name="task-done"
      id="task-checkbox"
    />
    <li
      :class="{
        'line-through': isCompleted,
        'decoration-inputColor': isCompleted,
        'decoration-2': isCompleted,
      }"
      class="text-white p-2"
    >
      {{ task }}
    </li>
    <XIcon
      @click="emitDeleteTask"
      class="w-6 max-h-6 self-center text-white flex-shrink-0 hover:text-white hover:bg-inputColor hover:rounded-full hover:cursor-pointer hover:ring-white hover:ring-1 hover:rotate-90 transition-all duration-500"
    />
  </div>
</template>
