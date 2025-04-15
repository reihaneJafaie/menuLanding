<template>
  
    <section class="w-[80%] mx-auto mt-20 mb-40">
        <h2
      class="text-blue-900 text-center lg:leading-10 text-wrap font-bold md:text-3xl text-xl"
    >
    سوالات متداول
    </h2>
    <h6 class="text-gray-400 my-4 font-medium md:text-base text-sm text-center">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ    </h6>

<questionpart :dataFaq="getFqa"  class="w-full" />


    </section>
</template>
<script setup>
import questionpart from "@/components/Home/questions/questionpart.vue";

import {useFaqStore} from "@/stores/faqpage.js"
import { computed , onMounted } from "vue";

const store = useFaqStore()
let getFqa = computed(() =>{
  return store.getFaq
})

onMounted(() =>{
  store.getFaqFromServer()
})

</script>