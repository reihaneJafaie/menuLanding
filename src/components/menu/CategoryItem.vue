<template>
  <button
    class="px-4 py-2 rounded-full border hover:bg-gray-100 transition"
    @click="$emit('click')"
  >
    {{ category.name }}
  </button>
</template>

<script setup>
defineProps(['category'])
</script>
