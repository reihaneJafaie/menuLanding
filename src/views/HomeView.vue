<template>
  <section>
    <Teleport to="body" v-if="false">
      <Loader />
    </Teleport>
  </section>
  <section>
     <div class="mb-5">
        <figure class="w-full m-0">
        <img
          class=" object-cover"
          src="@/assets/images/banner.jpg"
          alt=""
        />
      </figure>
     </div>
    <div class="sectionMenu flex flex-col md:flex-row">
      <figure class="w-full md:w-1/2 m-0">
        <img
          class="w-full object-cover"
          src="@/assets/images/137-97315.webp"
          alt=""
        />
      </figure>
      <div
        class="md:p-0 p-5 text-center  w-full md:w-1/2 bg-theme text-white flex flex-col justify-center items-center gap-3 p-6 md:p-0"
      >
        <h2 class="text-3xl md:text-5xl font-bold text-center">
         نوشیدنی ها
        </h2>
        <h4 class="text-xl md:text-2xl font-bold text-center">
          روحتو تازه کن، جرعه به جرعه
        </h4>
        <router-link
          class="border py-2 px-4 rounded-full text-sm md:text-base"
          to="/"
        >
          مشاهده منو 
        </router-link>
      </div>
    </div>
    <div class="mt-5 sectionMenu  md:flex flex-row-reverse">
      <figure class="w-full md:w-1/2 m-0">
        <img class="" src="@/assets/images/pexels-janetrangdoan-769969.jpg" alt="" />
      </figure>
      <div
        class="md:p-0 p-5  text-center w-full md:w-1/2 bg-theme text-white flex flex-col justify-center items-center gap-3"
      >
        <h2 class="text-3xl md:text-5xl font-bold">پاستا </h2>
        <h4 class="text-xl md:text-2xl font-bold">هر رشته‌ای از پاستا، یک داستان خوشمزه</h4>
        <router-link class="border py-1 px-3 rounded-full" to="/">
         مشاهده منو 
        </router-link>
      </div>
    </div>
    <div class="mt-5 sectionMenu flex flex-col md:flex-row">
      <figure class="w-full md:w-1/2 m-0">
        <img class="" src="@/assets/images/pexels-dzeninalukac-1583884.jpg" alt="" />
      </figure>
      <div
        class="w-full md:w-1/2 md:p-0 p-5 text-center bg-theme text-white flex flex-col justify-center items-center gap-3"
      >
        <h2 class="text-3xl md:text-5xl font-bold">خوشمزه ها</h2>
        <h4 class="text-xl md:text-2xl font-bold">در دنیای خوشمزه‌ها، هر روز یک طعم جدید.</h4>
        <router-link class="border py-1 px-3 rounded-full" to="/">
          مشاهده منو 
        </router-link>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useHome } from "@/stores/Home.js";
import Loader from "@/components/shared/Loader.vue";

// let getHome1 = false;
// const store = useHome();
// let getHome = computed(() => {
//   return store.getHome;
// });
// onMounted(() => {
//   store.getHomeFromServer();
// });
</script>
<style scoped></style>
