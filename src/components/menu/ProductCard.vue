<template>
  <div class="w-60 rounded-xl overflow-hidden shadow hover:shadow-lg transition">
    <img :src="product.image" class="w-full h-40 object-cover" />
    <div class="p-3">
      <h3 class="text-lg font-bold">{{ product.title }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ product.price }} تومان</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['product'])
</script>
