<template>
  <div>
    <h2>سبد خرید</h2>
    <ul>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.name }} - {{ item.price }} تومان
        <button @click="removeFromCart(item)">حذف</button>
      </li>
    </ul>
    <p v-if="!cart.items.length">سبد خرید خالی است.</p>
    <p v-else>تعداد آیتم‌ها: {{ cart.cartCount }}</p>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

function removeFromCart(item) {
  cart.removeFromCart(item)
}
</script>
