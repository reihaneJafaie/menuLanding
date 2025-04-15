<template>
  <section v-if="getListDoc "
    class="bg-white w-full p-5 rounded-xl my-5 shadow-xl grid-cols-1 grid-rows-3 gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-1"
    v-for="item in getListDoc.data"
  >
    <router-link
      v-if="item && item.image && item.image.url"
      :to="`page-dr/${item.id}`"
    >
      <figure class="flex items-center">
        <img class="rounded-xl w-full" :src="item.image.url" alt="" />
      </figure>
    </router-link>
    <router-link :to="`page-dr/${item.id}`" v-else>
      <figure class="flex items-center">
        <img
        class="rounded-xl"
          src="../../assets/images/fitsmart/DefaultImgDoctor.jpg"
          alt=""
        />
      </figure>
    </router-link>
    <div class="lg:col-span-2 h-fit">
      <router-link :to="`page-dr/${item.id}`">
        <h3 class="text-blue-950 font-bold lg:text-lg text-xl mt-5 lg:mt-0">
          {{ item.first_name + " " + item.last_name }}
        </h3>
      </router-link>

      <p class="text-blue-950 text-sm mt-2">{{ item.speciality.title }}</p>
      <div class="flex gap-x-1 mt-3 items-center" v-if="item.rate">
        <Starfull v-for="FullStar in item.rate" />
        <Starempty v-for="emptyStar in 5 - item.rate" />
        <p class="text-xs mr-1">({{ item.rates_count }})</p>
      </div>
      <div
        class="text-sm mt-3 leading-8 text-blue-900 line-clamp-3 v-htmlStyle"
        v-if="item && item.about"
        v-html="item.about"
      ></div>
    </div>
    <div class="lg:col-start-4 lg:border-r-2">
      <ul>
        <li>
          <Location />
          <p>{{ item.city.name + " , " + item.city.province.name }}</p>
          <!-- {{ item.image.url }} -->
        </li>
        <li v-if="item && item.work_experience">
          <medal />
          <p>{{ item.work_experience }} سال سابقه</p>
        </li>
        <li v-if="item && item.telephone">
          <call />
          <p dir="ltr">{{ item.telephone }}</p>
        </li>
        <li>
          <heart />
          <p>{{item.likers_count }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section v-else
   class="bg-white w-full p-5 rounded-xl my-5 shadow-xl grid-cols-1 grid-rows-3 gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-1"
    v-for="item in getListDoc.data" >
   
      <DynamicSkeleton :height="'150px'" :width="'90%'" :borderRadius="'10px'" />
      <div class="lg:col-span-2 h-fit">
        <DynamicSkeleton class="mb-3" :height="'30px'" :width="'50%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mb-3" :height="'20px'" :width="'60%'" :borderRadius="'10px'" />

        <DynamicSkeleton class="mb-3 mt-5" :height="'10px'" :width="'100%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mb-3" :height="'10px'" :width="'100%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mb-3" :height="'10px'" :width="'100%'" :borderRadius="'10px'" />
      </div>
      <div class="lg:col-start-4 lg:border-r-2">
        <DynamicSkeleton class="mx-2 mb-2" :height="'30px'" :width="'100%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mx-2 mb-2" :height="'30px'" :width="'100%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mx-2 mb-2" :height="'30px'" :width="'100%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mx-2 mb-2" :height="'30px'" :width="'100%'" :borderRadius="'10px'" />

      </div>
  </section>
  <div class="pagination dir-ltr" v-if="getListDoc">
    <paginateComponent
      v-if="getListDoc.last_page != 1"
      :lastPage="getListDoc.last_page"
      :currentPage="getListDoc.current_page"
    ></paginateComponent>
  </div>
</template>
<script setup>
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;
import Starempty from "../icon/starempty.vue";
import Starfull from "../icon/starfull.vue";
import Location from "@/components/icon/location.vue";
import medal from "@/components/icon/medal.vue";
import call from "@/components/icon/call.vue";
import heart from "@/components/icon/heart.vue";

import Paginate from "vuejs-paginate-next";
import paginateComponent from "@/components/pagination/index.vue";

const props = defineProps({
  getListDoc: Array,
});
</script>
<style scoped>
ul li {
  @apply text-blue-900 lg:text-sm text-[12px] lg:px-4 w-[100%]  flex gap-x-2 items-center;
}
ul {
  @apply lg:flex lg:flex-col lg:justify-between lg:items-center h-full  lg:mt-0 mt-6  grid grid-cols-2 grid-rows-2 gap-4;
}
</style>
<style>
.v-htmlStyle * {
  font-family: IRANSansX !important;
  font-weight: 400 !important;
  font-size: 16px;
  @apply  mt-3 leading-8 !text-blue-900;
}
</style>
