<template>
  <header class="border shadow-lg mb-5 p-3" dir="rtl">
    <div class="containerFitsmart flex justify-between items-center">
      <!-- لوگو و منو -->
      <div class="flex gap-2 items-center">
        <router-link to="/">
          <logo />
        </router-link>
        <ul class="hidden md:flex gap-4">
          <li>
            <router-link class="hover:text-green-900" to="/"
              >نوشیدنی ها</router-link
            >
          </li>
          <li>
            <router-link class="hover:text-green-900" to="/"
              >خوشمزه ها</router-link
            >
          </li>
          <li>
            <router-link class="hover:text-green-900" to="/"
              >کیک ها</router-link
            >
          </li>
          <li>
            <router-link class="hover:text-green-900" to="/"
              >تماس با ما</router-link
            >
          </li>
        </ul>
      </div>

      <!-- دکمه‌ها -->
      <div class="flex gap-1 items-center">
        <div class="flex gap-1 items-center">
  <router-link
    class="p-2 md:border md:border-green-900 rounded-full md:px-6 md:py-2 md:text-green-900 hover:text-white hover:bg-green-900 text-xs flex items-center gap-1"
    to="/"
  >
    <login />
    <p class="hidden md:inline">ورود/ ثبت نام</p>
  </router-link>

  <router-link
    class="p-2 bg-green-900 text-white rounded-full md:px-6 py-2 text-xs flex items-center gap-1"
    to="/"
  >
    <cart />
    <p class="hidden md:inline">سبد خرید</p>
  </router-link>
</div>


        <!-- دکمه منو موبایل -->
        <button @click="toggleMenu" class="md:hidden text-green-900 transition">
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- لایه بلور -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
      @click="closeMenu"
    ></div>

    <!-- منوی موبایل -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg p-6 pt-10 flex flex-col gap-4 z-50"
      >
        <!-- دکمه بستن -->
        <button @click="closeMenu" class="absolute top-4 left-4 text-green-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- لینک‌های منو -->
        <router-link class="hover:text-green-900" to="/"
          >نوشیدنی ها</router-link
        >
        <router-link class="hover:text-green-900" to="/">خوشمزه ها</router-link>
        <router-link class="hover:text-green-900" to="/">کیک ها</router-link>
        <router-link class="hover:text-green-900" to="/"
          >تماس با ما</router-link
        >
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import logo from "@/components/shared/Logo.vue";
import cart from "@/components/icon/cart.vue";
import login from "@/components/icon/login.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// جلوگیری از اسکرول وقتی منو بازه
watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});
</script>

<style scoped>
/* انیمیشن اسلاید */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
