<template>
       <!-- Menu Items -->
    <div>
      <div
        v-for="(cat, index) in categories"
        :key="index"
        :ref="el => (categoryRefs[cat] = el)"
        class="mb-6"
      >
        <h2 class="text-xl font-semibold mb-3">{{ cat }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            v-for="item in filteredMenuItems(cat)"
            :key="item.id"
            class="bg-white rounded-xl shadow p-4 flex flex-col"
          >
            <img :src="item.image" alt="" class="object-cover rounded-lg mb-3" />
            <h3 class="text-lg font-bold mb-1">{{ item.name }}</h3>
            <p class="text-gray-500 text-sm flex-grow">{{ item.description }}</p>
            <div class="mt-2 text-green-600 font-semibold text-base">
              {{ item.price.toLocaleString() }} تومان
            </div>

            <!-- Count Controls -->
            <div class="mt-3 flex items-center justify-between">
              <button
                v-if="cart[item.id]"
                @click="decreaseCount(item)"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
              >-</button>

              <span v-if="cart[item.id]" class="mx-3 font-bold">{{ cart[item.id] }}</span>

              <button
                v-if="cart[item.id]"
                @click="increaseCount(item)"
                class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full"
              >+</button>

              <button
                v-else
                @click="addToCart(item)"
                class="w-full bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-full text-sm"
              >
                اضافه به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script setup>
import { reactive, ref, computed, nextTick } from 'vue'

const props = defineProps({
    categories : Array ,
    menuItems:Array
})
// افزودن به سبد خرید
const addToCart = item => {
  cart[item.id] = 1
}

// افزایش تعداد یک آیتم
const increaseCount = item => {
  if (cart[item.id]) {
    cart[item.id]++
  }
}

// کاهش تعداد یک آیتم
const decreaseCount = item => {
  if (cart[item.id]) {
    cart[item.id]--
    if (cart[item.id] === 0) {
      delete cart[item.id]
    }
  }
}

// فیلتر کردن آیتم‌ها بر اساس دسته‌بندی
const filteredMenuItems = category => {
  return menuItems.filter(item => item.category === category)
}
</script>

