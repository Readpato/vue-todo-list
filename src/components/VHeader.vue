<script>
export default {
  name: "VHeader",
  props: {
    title: String,
  },
};
</script>

<template>
  <nav>
    <h2 class="text-zinc-100 text-left font-medium text-2xl p-2 rounded-t ml-3">
      {{ title }}
    </h2>
  </nav>
</template>
