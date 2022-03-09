<script>
export default {
  name: "VHeader",
  props: {
    title: String,
  },
};
</script>

<template>
  <nav class="w-11/12 mx-auto mb-1">
    <h2 class="text-zinc-100 text-center font-medium text-2xl p-2">
      {{ title }}
    </h2>
  </nav>
</template>
