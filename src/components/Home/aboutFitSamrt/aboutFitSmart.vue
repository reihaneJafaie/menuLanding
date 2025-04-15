<template>
  <section class="flex xl:flex-row flex-col  my-40 relative">
    <figure class="xl:w-3/6 w-full relative flex xl:justify-start  justify-center  " >
      <img class="absolute md:w-auto w-[20%]  top-[-10%] xl:right-[-8%] right-[-3%]" src="../../../assets/images/Home/forAboutfitsmart.png" alt="">
      <img class="rounded-2xl shadow-2xl" src="../../../assets/images/test/image43.jpg" alt="" />
    </figure>
    <section class="xl:w-3/6 xl:mt-0 mt-4  xl:mr-5 mr-0">
      <h6 class="text-color-graylight mt-2"> درباره ناجینو </h6>
      <h2 class="md:text-3xl text-xl font-medium  mt-3 xl:leading-[50px] leading-9">
        <strong class="font-black px-1"> ناجینو   </strong>
          ک شرکت نوآور در زمینه   
        <span class="text-color-themeLight font-extrabold px-1">  طراحی وب‌سایت و سئو</span>
          است که هدفش ارتقاء کسب‌وکارها در دنیای دیجیتال است. ما به شما کمک می‌کنیم تا حضور آنلاین خود را به بهترین شکل ممکن شکل دهید.
      </h2>
      <h4 class="mt-7 font-bold md:text-2xl text-lg">چرا  ناجینو ؟</h4>
      <ul class="mt-6 font-bold md:text-base text-sm  ">
        <li class="my-4 flex items-center">  طراحی منحصر به فرد </li>
        <li class="my-4 flex items-center">افزایش دیده‌شدن  </li>
        <li class="my-4 flex items-center"> پشتیبانی مستمر </li>
        <li class="my-4 flex items-center"> حل مسأله با کارایی </li>
      </ul>
    </section>
    <patternabout class="absolute xl:bottom-[-6%] bottom-[-15%] left-[2%] xl:w-auto w-3/6" />
    <patternabout2 class="absolute xl:bottom-[-10%] bottom-[-15%] left-[-5%] xl:w-auto w-3/6" />
  </section>
</template>
<style scoped>
ul li::before {
  content: "";
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url('../../../assets/images/Home/tik.png');
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
  margin-left: 5px;
}
</style>
<script setup>
import patternabout from '@/components/icon/patternabout.vue'
import patternabout2 from '@/components/icon/patternabout2.vue'

</script>
