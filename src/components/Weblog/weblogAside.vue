<template>
  <section class="py-4 ">
    <router-link :to="`/blog-detail/${lastBlogDetail.id}`">
      <figure class="flex gap-x-3 ">
      <img
        class="w-[30%] rounded-lg shadow-md"
        :src="lastBlogDetail.image.url"
        alt=""
      />
      <figcaption class="text-[12px] flex flex-col justify-around">
        <h3 class="text-black  font-bold  mb-4">
          {{ lastBlogDetail.title }}
          </h3>
        <div class="flex items-center gap-x-1 ">
            <date class="mr-1" />
            {{ new Date(lastBlogDetail.created_at).toLocaleDateString("fa-IR") }}
          
        </div>
      </figcaption>
    </figure>
    </router-link>
    
  </section>
</template>
<script setup>
import date from "@/components/icon/date.vue";

const props = defineProps({
  lastBlogDetail: Object,
});
// console.log(lastBlogDetail)
</script>