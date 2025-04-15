<template>
  <section>
    <section 
      class="flex flex-col-reverse  xl:grid xl:grid-cols-2 xl:grid-rows-1 gap-4  w-full py-8 relative"
    >
      <div class=" relative xl:row-start-1  ">
        <h4 class="text-color-gray text-lg mb-4">سوالات متداول</h4>
        <h1 class="text-color-theme  md:text-3xl text-2xl font-bold">
          بیشتر از 10 سال تجربه در زمینه تغذیه و سلامتی خانواده
        </h1>
        <questionpart v-if="getFaqs" :dataFaq="getFaqs"  class="w-full" />
        <patterncycle
          class="absolute bottom-[-10%] -z-20 right-[-10%] xl:block hidden"
        />
      </div>
      <questionsImgs class=" h-fit " />
    </section>
  </section>
</template>
<script setup>
import patterncycle from "@/components/icon/patterncycle.vue";
import questionpart from "@/components/Home/questions/questionpart.vue";
import questionsImgs from "@/components/Home/questions/questionsImgs.vue";
import {useFaqStore} from "@/stores/faqpage.js"
import { computed , onMounted } from "vue";

const faqs = defineProps({
  getFaqs : Array
})


</script>
