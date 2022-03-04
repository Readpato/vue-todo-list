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
    <h2 class="text-white text-center text-2xl p-2 bg-red-500 rounded-t">
      {{ title }}
    </h2>
  </nav>
</template>
