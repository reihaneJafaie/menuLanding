<template>
  <div class="flex gap-3 overflow-x-auto">
    <CategoryItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @click="selectCategory(category)"
    />
  </div>
</template>

<script setup>
import CategoryItem from './CategoryItem.vue'

defineProps(['categories'])
const emit = defineEmits(['select'])
const selectCategory = (category) => emit('select', category)
</script>
