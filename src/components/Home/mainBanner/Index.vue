<template>
  <article class="relative">
    <section class="xl:flex items-center mt-4 gap-x-16">
      <section class="xl:w-3/6">
        <section class="flex flex-col items-center">
          <h1 class="text-color-theme font-bold xl:text-[50px] text-3xl">
            NAJINO
          </h1>
          <h1
            class="text-color-gray font-bold xl:mt-5 mt-2 xl:text-[35px] text-3xl"
          >
            ناجینو
          </h1>
          <p
            class="text-color-gray xl:text-lg text-sm text-center xl:mt-5 mt-3 w-[85%]"
          >
            ناجینو یک شرکت طراحی وب‌سایت است که به شما کمک می‌کند تا کسب‌وکارتان را آنلاین کنید. ما در زمینه سئو و طراحی تجربه کاربری (UI/UX) تخصص داریم و هدفمان این است که وب‌سایت شما جذاب و کاربرپسند باشد. با ناجینو، به راحتی می‌توانید وارد دنیای دیجیتال شوید!

          </p>
          <router-link to="/signin-dr" class="block lg:hidden btnFitsmart">
             ثبت نام / ورود
          </router-link>
        </section>
      </section>

      <section class="w-[3/6] xl:mt-0 mt-8 xl:block">
        <ImgBanner />
      </section>
    </section>
    <section class="xl:w-3/6 w-full xl:absolute xl:bottom-14">
      <FilterBanner />
    </section>
  </article>
</template>
<script setup>
import FilterBanner from "@/components/Home/mainBanner/FilterBanner.vue";
import ImgBanner from "@/components/Home/mainBanner/ImgBanner.vue";
</script>
