<template>
  <article

  v-if="blogDetail && theme"
    :class="{
      card1: props.theme == 1,
    }"
    class="mb-3 card"
  >
    <router-link v-if="blogDetail.id"  :to="`/blog-detail/${blogDetail.id}`">
      <figure
        :class="{
          figuretheme1: props.theme == 1,
          figuretheme2: props.theme == 2,
        }"
        class="w-full relative"
      >
        <div class="w-full absolute bg-img h-full"></div>
        <img class="w-full imgcard h-full" :src="blogDetail.image.url" alt="" />
      </figure>
    </router-link>

    <div
      dir="rtl"
      :class="{
        cartcaption1: props.theme == 1,
        cartcaption2: props.theme == 2,
      }"
      class="cartcaption1 p-4 mx-auto shadow-xl"
    >
      <div class="relative">
        <!-- <p v-if="blogDetail.category.name" class="text-gray-400 text-xs mb-2">{{ blogDetail.category.name }}</p> -->
        <router-link v-if="blogDetail.id" :to="`/blog-detail/${blogDetail.id}`">
          <h3 v-if="blogDetail.title" class="w-[80%] h-[48px] font-bold changeTextColor line-clamp-2 leading-6 md:text-xm text-sm">
            {{ blogDetail.title }}
          </h3>
        </router-link>
        <div
          class="flex md:text-sm text-[12px] justify-center my-6 text-gray-600 mx-auto"
        >
          <div class="flex items-center px-3 border-l-2 border-gray-600">
            <span class="mx-1">نظرات</span
            ><span v-if="blogDetail" >{{ blogDetail.comments_count}}</span>
            <massege class="mr-1" />
          </div>
          <div class="flex items-center px-3">
            <span v-if="blogDetail.created_at">
              {{ new Date(blogDetail.created_at).toLocaleDateString("fa-IR") }}

            </span>
            <date class="mr-1" />
          </div>
        </div>
        <p v-if="blogDetail.summary" class="text-gray-500 mb-3 line-clamp-2 h-20 md:text-sm text-[12px]">
          {{ blogDetail.summary }}
        </p>
        <router-link v-if="blogDetail.id"  :to="`/blog-detail/${blogDetail.id}`"
          class="block xl:hidden md:text-sm font-bold text-[12px] flex items-center gap-x-1 changeTextColor"
        >
          بیشتر بخوانید
          <ArrowLeftDark class="iconMore" />
        </router-link>

        <router-link v-if="blogDetail.id" :to="`/blog-detail/${blogDetail.id}`">
          <div
            class="bg-blue-900 circle absolute flex justify-center text-white p-3 top-[-15%] left-[0%] rounded-full w-[47px] h-[47px]"
          >
            <ArrowLeft />
          </div>
        </router-link>
      </div>
    </div>
  </article>
</template>
<style scoped>
/* Theme 1 */
.card1 {
  @apply mb-40;
}
.card:hover .imgcard {
  transform: scale(1.1);
  transition: 0.25s;
  overflow: hidden;
}
.cartcaption1 {
  position: absolute;
  z-index: 2;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  width: 90%;
  border-radius: 16px;
}
.imgcard{
  object-fit: cover;
}

.figuretheme1 {
  aspect-ratio: 362 / 347;
  @apply overflow-hidden relative rounded-xl my-8;
}
.circle {
  display: none;
}

.card:hover .circle {
  display: flex;
  transition: all;
}

.card:hover .changeTextColor {
  color:var(--color-theme);
  transition: 0.25s;
}

/* Theme 2 */

.cartcaption2 {
  position: unset;
  bottom: unset;
  left: unset;
  transform: unset;
  z-index: unset;
  width: 100%;
  /* @apply rounded-b-xl w-full bg-white; */
}

.figuretheme2 {
  aspect-ratio: 301 / 178;
  @apply overflow-hidden relative rounded-t-xl  my-0;
}
</style>
<style>
.card:hover .iconMore path {
  stroke: var(--color-theme);
  transition: 0.25s;
}
</style>
<script setup>
import massege from "@/components/icon/massege.vue";
import date from "@/components/icon/date.vue";
import ArrowLeft from "@/components/icon/arrowLeft.vue";
import ArrowLeftDark from "@/components/icon/arrowLeftDark.vue";




const props = defineProps({
  theme: {
    type: Number,
    default: 2,
  },
  blogDetail: Object,
});

</script>
