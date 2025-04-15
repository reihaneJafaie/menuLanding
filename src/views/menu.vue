<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">منوی رستوران</h1>
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h11.4M7 13H5.4m0 0L4 5h16" />
        </svg>
        <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {{ cartCount }}
        </span>
      </div>
    </div>

    <!-- Scrollable Categories -->
    <div class="overflow-x-auto whitespace-nowrap mb-6">
      <button
        v-for="(cat, index) in categories"
        :key="index"
        class="inline-block px-4 py-2 mx-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100"
        @click="scrollToCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

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
  </div>
</template>
<script setup>
import { reactive, ref, computed, nextTick } from 'vue'

const categories = ['پیش‌غذا', 'غذای اصلی', 'دسر', 'نوشیدنی']
const categoryRefs = reactive({})

const menuItems = reactive([
  // پیش‌غذا
  {
    id: 1,
    name: 'سوپ جو',
    description: 'سوپ سنتی با سبزیجات تازه',
    image: '../../src/assets/images/menu/1 (1).webp',
    category: 'پیش‌غذا',
    price: 45000
  },
  {
    id: 2,
    name: 'نون سیر',
    description: 'خمیر پیتزای ایتالیایی، سیر، کره، جعفری',
    image: '../../src/assets/images/menu/1 (2).webp',
    category: 'پیش‌غذا',
    price: 48000
  },
  {
    id: 3,
    name: 'سیب‌زمینی تنوری',
    description: 'سیب‌زمینی با پنیر و سس مخصوص',
    image: '../../src/assets/images/menu/1 (3).webp',
    category: 'پیش‌غذا',
    price: 55000
  },
  {
    id: 4,
    name: 'سالاد فصل',
    description: 'سالاد تازه با سس مخصوص',
    image: '../../src/assets/images/menu/1 (4).webp',
    category: 'پیش‌غذا',
    price: 35000
  },
  {
    id: 5,
    name: 'حمص با نان پیتا',
    description: 'حمص خانگی با روغن زیتون',
    image: '../../src/assets/images/menu/1 (5).webp',
    category: 'پیش‌غذا',
    price: 39000
  },
  {
    id: 6,
    name: 'قارچ سوخاری',
    description: 'قارچ سرخ شده با پودر سوخاری',
    image: '../../src/assets/images/menu/1 (6).webp',
    category: 'پیش‌غذا',
    price: 52000
  },

  // غذای اصلی
  {
    id: 7,
    name: 'چلو کباب',
    description: 'چلو کباب کوبیده با برنج ایرانی',
    image: '../../src/assets/images/menu/1 (7).webp',
    category: 'غذای اصلی',
    price: 180000
  },
  {
    id: 8,
    name: 'زرشک‌پلو با مرغ',
    description: 'مرغ زعفرانی با برنج ایرانی و زرشک',
    image: '../../src/assets/images/menu/1 (8).webp',
    category: 'غذای اصلی',
    price: 160000
  },
  {
    id: 9,
    name: 'قورمه‌سبزی',
    description: 'خورشت سنتی با گوشت گوسفندی',
    image: '../../src/assets/images/menu/1 (9).webp',
    category: 'غذای اصلی',
    price: 150000
  },
  {
    id: 10,
    name: 'قرمه‌قیمه',
    description: 'خورشت قیمه با سیب‌زمینی خلالی',
    image: '../../src/assets/images/menu/1 (10).webp',
    category: 'غذای اصلی',
    price: 145000
  },
  {
    id: 11,
    name: 'ماکارونی گوشت',
    description: 'ماکارونی با گوشت چرخ‌کرده و پنیر',
    image: '../../src/assets/images/menu/1 (11).webp',
    category: 'غذای اصلی',
    price: 125000
  },
  {
    id: 12,
    name: 'چلو ماهی',
    description: 'فیله ماهی با برنج ایرانی و سبزیجات',
    image: '../../src/assets/images/menu/1 (12).webp',
    category: 'غذای اصلی',
    price: 195000
  },

  // دسر
  {
    id: 13,
    name: 'بستنی سنتی',
    description: 'بستنی زعفرانی با خلال پسته',
    image: '../../src/assets/images/menu/1 (13).webp',
    category: 'دسر',
    price: 60000
  },
  {
    id: 14,
    name: 'شیر برنج',
    description: 'شیر برنج سنتی با دارچین',
    image: '../../src/assets/images/menu/1 (14).webp',
    category: 'دسر',
    price: 42000
  },
  {
    id: 15,
    name: 'ژله میوه‌ای',
    description: 'ژله با تکه‌های میوه',
    image: '../../src/assets/images/menu/1 (15).webp',
    category: 'دسر',
    price: 30000
  },
  {
    id: 16,
    name: 'کرم کارامل',
    description: 'دسر نرم با طعم کارامل',
    image: '../../src/assets/images/menu/1 (16).webp',
    category: 'دسر',
    price: 45000
  },
  {
    id: 17,
    name: 'پاناکوتا',
    description: 'پاناکوتای وانیلی با سس توت‌فرنگی',
    image: '../../src/assets/images/menu/1 (17).webp',
    category: 'دسر',
    price: 50000
  },
  {
    id: 18,
    name: 'کیک شکلاتی',
    description: 'کیک شکلاتی نرم و گرم با مغز فندق',
    image: '../../src/assets/images/menu/1 (18).webp',
    category: 'دسر',
    price: 58000
  },

  // نوشیدنی
  {
    id: 19,
    name: 'دلستر لیمو',
    description: 'نوشیدنی خنک با طعم لیمو',
    image: '../../src/assets/images/menu/1 (19).webp',
    category: 'نوشیدنی',
    price: 25000
  },
  {
    id: 20,
    name: 'موهیتو',
    description: 'موهیتوی تازه با نعنا و لیمو',
    image: '../../src/assets/images/menu/1 (20).webp',
    category: 'نوشیدنی',
    price: 40000
  },
  {
    id: 21,
    name: 'آب پرتقال طبیعی',
    description: 'آب پرتقال تازه و طبیعی',
    image: '../../src/assets/images/menu/1 (20).webp',
    category: 'نوشیدنی',
    price: 30000
  },
  {
    id: 22,
    name: 'شیک شکلات',
    description: 'شیک غلیظ شکلات با خامه',
    image: '../../src/assets/images/menu/1 (21).webp',
    category: 'نوشیدنی',
    price: 45000
  },
  {
    id: 23,
    name: 'آب معدنی',
    description: 'آب معدنی خنک',
    image: '../../src/assets/images/menu/1 (22).webp',
    category: 'نوشیدنی',
    price: 8000
  },
  {
    id: 24,
    name: 'چای سبز',
    description: 'چای سبز ایرانی با لیمو',
    image: '../../src/assets/images/menu/1 (23).webp',
    category: 'نوشیدنی',
    price: 15000
  }
])

const filteredMenuItems = cat => menuItems.filter(item => item.category === cat)

const cart = reactive({})

const cartCount = computed(() => Object.values(cart).reduce((sum, count) => sum + count, 0))

const addToCart = item => {
  cart[item.id] = 1
}

const increaseCount = item => {
  if (cart[item.id]) cart[item.id]++
}

const decreaseCount = item => {
  if (cart[item.id] > 1) {
    cart[item.id]--
  } else {
    delete cart[item.id]
  }
}

const scrollToCategory = cat => {
  nextTick(() => {
    const el = categoryRefs[cat]
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}
</script>



<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
