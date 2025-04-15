<template>
  <section class="flex mt-8 w-[50%]  lg:mx-auto relative  justify-center py-16">
    <article class=" z-20  mx-auto ">
      <figure class="flex mb-2 gap-x-4">
        <img
          class="rounded-tl-[40%] rounded-br-[40%] mt-4"
          src="@/assets/images/Home/image60.png"
          alt=""
        />
        <img
          class="rounded-t-full rounded-bl-full mb-4"
          src="@/assets/images/Home/image62.png"
          alt=""
        />
      </figure>
      <figure class="flex gap-x-4">
        <img
          class="rounded-b-full rounded-tr-full mt-3"
          src="@/assets/images/Home/image61.png"
          alt=""
        />
        <img
          class="rounded-tl-[40%] rounded-br-[40%]"
          src="@/assets/images/Home/image59.png"
          alt=""
        />
      </figure>
    </article>
    <!-- <patternsquare class="z-10 absolute top-[-20%] xl:left-[17%]  " /> -->
    <patternabout class="lg:block hidden  z-10 absolute bottom-[-6%] left-[2%]" />
    <patternabout2 class="lg:block hidden  z-10 absolute bottom-[-10%] left-[-5%]" />
    
  </section>
</template>
<script setup>
import patternsquare from '@/components/icon/patternsquare.vue'
import patternabout from '@/components/icon/patternabout.vue'
import patternabout2 from '@/components/icon/patternabout2.vue'

</script>

