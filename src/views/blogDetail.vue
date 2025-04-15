<template>

  <section class="containerFitsmart"  v-if="getDblog ">
    <Titles  :title="getDblog.title" :subtitle="' وبلاگ ها'" :routrPath1="'/weblogs'" :routrPath2="'/blog-detail'"  :titlePage2="getDblog.title" />

    <section class="flex flex-col  xl:grid xl:grid-cols-3  gap-10 my-16">
      <Aside class="aside "></Aside>
      <section class=" blog">
        <h5 class="text-gray-600">{{ getDblog.category.name }}</h5>
        <h2 class="text-black text-2xl font-bold my-4">
         {{getDblog.title}}
        </h2>
        <div class="flex md:text-sm text-[12px] my-6 text-gray-600 mx-auto">
          <div class="flex items-center px-3 border-l-2 border-gray-600">
            <span class="mx-1">نظرات</span><span>{{ getDblog.comments_count }}</span>
            <massege class="mr-1" />
          </div>
          <div class="flex items-center px-3">
            <span class="mx-1">تاریخ</span><span>1236</span>
            <date class="mr-1" />
          </div>
        </div>
        <section class="">
          <figure class="w-full">
            <img
              class="w-full"
              :src="getDblog.image.url"
              alt=""
            />
          </figure>
          <p class="my-4 leading-8">
            <div v-html="getDblog.body" class="bodyWeblog"></div>
          </p>
        </section>
        <div v-html="d"></div>
      </section>
      <CommentDrReading class="col-span-2" :commentsPost="getDblog.comments" ></CommentDrReading>
      <CommentForm :idPost="getDblog.id " class="form"></CommentForm>
    </section>
  </section>
  <section v-else class="containerFitsmart">
    <div class=" mx-auto flex flex-col justify-center items-center gap-3">
      <DynamicSkeleton :height="'40px'" :width="'40%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'45%'" :borderRadius="'10px'" />
    </div>
    <div class="flex flex-col gap-3 mt-5">
      <DynamicSkeleton :height="'20x'" :width="'100px'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'40px'" :width="'50%'" :borderRadius="'10px'" />
      <div class="flex gap-4">
        <DynamicSkeleton :height="'40px'" :width="'40px'" :borderRadius="'10px'" />
        <DynamicSkeleton :height="'40px'" :width="'40px'" :borderRadius="'10px'" />
      </div>
      <DynamicSkeleton :height="'400px'" :width="'100%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'100%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'100%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'100%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'100%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'100%'" :borderRadius="'10px'" />
      <DynamicSkeleton :height="'20px'" :width="'100%'" :borderRadius="'10px'" />
    </div>
  </section>
</template>
<style>
.aside {
  box-shadow: 0px 3.328917980194092px 27px 0px #b8b8b833;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}
.blog {
  grid-column-start: 2;
  grid-column-end: 4;

}

.form {
  grid-column-start: 2;
  grid-column-end: 4;

}

.bodyWeblog * {
  font-family: IRANSansX !important;
  font-weight: 400 !important;
  @apply !text-sm mt-3 leading-8  ;
}

@media screen and (max-width: 1028px) {


  .blog {
    order: 1;
  }

  .form {
    order: 3;
    margin-top: 30px;
  }

  .aside {
    order: 2;
  }
}
</style>
<script setup>
// import weblogCardSlider from "@/components/Home/weblogHome/weblogCardSlider.vue";
import Aside from "@/components/shared/Aside.vue";
import Titles from "@/components/shared/titles.vue";
import massege from "@/components/icon/massege.vue";
import date from "@/components/icon/date.vue";
import CommentDrReading from "@/components/Weblog/CommentDrReading.vue"
import CommentForm from "@/components/Weblog/CommentForm.vue";
import {useDetailWeblog} from "@/stores/detailWeblog.js"
import { computed , onMounted } from "vue";
import { useRoute } from "vue-router";
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;

let route = useRoute()
let store = useDetailWeblog()
let getDblog = computed(() =>{
  return store.getDetailWeblog
})
onMounted(() =>{
  if(route.params.id){
    store.getDetailWeblogFromServer(route.params.id)
  }
 
})
// console.log(getDblog)

</script>
