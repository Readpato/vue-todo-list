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
    <h2 class="text-white text-center text-2xl p-2">{{ title }}</h2>
  </nav>
</template>
