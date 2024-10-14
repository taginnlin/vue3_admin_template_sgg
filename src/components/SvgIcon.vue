<template>
  <svg :style="{ width, height }">
    <use :href="prefix + name" :fill="fill"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  fill: String,
  width: {
    type: String,
    default: '30px',
  },
  height: {
    type: String,
    default: '30px',
  },
})
</script>

<style scoped></style>
