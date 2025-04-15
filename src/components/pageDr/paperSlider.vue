<template>
  <section v-if="postDetail">
    <figure class="bg-white shadow-xl " dir="rtl">
      <img v-if="postDetail && postDetail.image  && postDetail.image.url" :src="postDetail.image.url" />
      <figcaption class="p-2 w-full ">
        <div  class="text-xs text-end my-1" v-if="postDetail.created_at" > {{ new Date(postDetail.created_at).toLocaleDateString("fa-IR") }}</div>
        <h3 v-if="postDetail.title" class="text-sm font-bold line-clamp-2 mb-2">
         {{ postDetail.title }}
        </h3>
        <div v-if="postDetail.body" v-html="postDetail.body" class="!text-sm mt-3  !text-blue-900 line-clamp-4 ">
        </div>
      </figcaption>
    </figure>
  </section>
 
</template>


<script setup>
  const props = defineProps({
    postDetail: Object ,
  });

  console.log(props.postDetail)

</script>
