<template>
  <section>
    <div class="w-full flex flex-col items-center">
    </div>
    <TitleHome :titleSection="'ویژگی های فیت اسمارت'" :subtitleSection="'ما تا رسیدن به سبک زندگی سالم و پر انرژی همراه شما هستیم .'" />
    <section class="flex xl:flex-row xl:items-center flex-col mt-16 w-full relative">
      <figure class="xl:w-3/6   mx-auto  ">
        <img class=" w-[90%] z-20" src="../../assets/images/Home/Fitness stats-amico.svg" alt="" />
        <img class="absolute xl:block hidden bottom-[-18%] -z-10 right-[-5%]" src="../../assets/images/Home/Ellipse519.svg" alt="">
      </figure>
      <ul class="xl:w-3/6  xl:mt-0  mt-7 ">
        <li 
          class="bg-gradient py-3 px-5 rounded-full mb-5 flex items-center gap-x-3"
        >
          <figure>
            <img src="../../assets/images/property/image 23.png" alt="">
          </figure>
          <div >
            <h3 class="font-bold xl:text-lg text-sm">فیت به فیت</h3>
            <p class="xl:text-base text-xs">
              فیت اصطلاحی مختص ماست و ما در هر فیت همراه شما هستیم.
            </p>
          </div>
        </li>
        <li 
          class="bg-gradient py-3 px-5 rounded-full mb-5 flex items-center gap-x-3"
        >
          <figure>
            <img src="../../assets/images/property/image 22.png" alt="">
          </figure>
          <div >
            <h3 class="font-bold xl:text-lg text-sm">سرعت عملکرد بالا  </h3>
           <p class="xl:text-base text-xs">
            خیلی سریع میاییم بالا و خیلی سریع میریم جلو .
            </p>
          </div>
        </li>
        <li 
          class="bg-gradient py-3 px-5 rounded-full mb-5 flex items-center gap-x-3"
        >
          <figure>
            <img src="../../assets/images/property/image 21.png" alt="">
          </figure>
          <div >
            <h3 class="font-bold xl:text-lg text-sm">سفره خانواده ، سفره تندرستی  </h3>
            <p class="xl:text-base text-xs">
              ما با همراهی شما سفره خانواده را به سفره تندرستی تبدیل می کنیم .
            </p>
          </div>
        </li>
        <li 
          class="bg-gradient py-3 px-5 rounded-full mb-5 flex items-center gap-x-3"
        >
          <figure>
            <img src="../../assets/images/property/image 20.png" alt="">
          </figure>
          <div >
            <h3 class="font-bold xl:text-lg text-sm">هزینه مناسب  </h3>
            <p class="xl:text-base text-xs">
              شما خدمات فیت اسمارت را با قیمتی بسیار مناسب تر از روش سنتی  تهیه می کنید.
            </p>
          </div>
        </li>
        <li 
          class="bg-gradient py-3 px-5 rounded-full mb-5 flex items-center gap-x-3"
        >
          <figure>
            <img src="../../assets/images/property/image 19.png" alt="">
          </figure>
          <div >
            <h3 class="font-bold xl:text-lg text-sm">آموزش  </h3>
            <p class="xl:text-base text-xs">
              ما با آموزشهای بروز (تغذیه ، ورزشی ، روانشناسی )همراه شما خواهیم بود.
            </p>
          </div>
        </li>
        <li 
          class="bg-gradient py-3 px-5 rounded-full mb-5 flex items-center gap-x-3"
        >
          <figure>
            <img src="../../assets/images/property/image 18.png" alt="">
          </figure>
          <div >
            <h3 class="font-bold xl:text-lg text-sm">پرسش و پاسخ آنلاین  </h3>
            <p class="xl:text-base text-xs">
              سوالاهای خودتون و بپرسید و جواب رو در صفحه شخصی خودتون دریافت کنید.
            </p>
          </div>
        </li>
        
      </ul>

    </section>
  </section>
</template>
<script setup>

import TitleHome from "@/components/shared/TitleHome.vue"

</script>
<style scoped>
.bg-gradient {
   background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(244,251,246,0.07889281200761555) 32%, rgba(207,236,216,0.5858956131280637) 82%, rgba(46,169,82,0.49906087923450626) 100%);
}
</style>
