<template>
  <section
    class="xl:flex-row flex-col flex my-40 xl:my-36 items-center comment relative "
  >
    <div class="lg:w-[30%] w-full h-max flex flex-col items-center">
      <TitleHome
        :titleSection="'نظر کاربران درباره فیت اسمارت!'"
        :subtitleSection="'نظر کاربرانی که از خدمات فیت اسمارت بهره برده اند .'"
      />
    </div>
    <swiper
      :autoplay="{
        delay: 1000,
      }"
      :effect="'coverflow'"
      :centeredSlides="true"
      :centeredSlidesBounds="true"
      :grabCursor="true"
      navigation
      :pagination="{ clickable: true }"
      class="xl:w-[70%] w-full relative"
      :speed="1000"
      :spaceBetween="30"
      :loop="false"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :breakpoints="{
        320: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 2,
        },
        810: {
          slidesPerView: 3,
        },
      }"
      :coverflowEffect="{
        rotate: 0,
        stretch: 50,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }"
    >
      <swiper-slide v-for="item in getComment" dir="ltr">
        <div class="card bg-white h-[360px] relative rounded-xl p-4 xl:my-6  mb-8">
          <div class="card3 h-fit flex">
            <figure class="w-[27%] h-fit rounded-full">
              <img
                class="w-full rounded-full"
                src="../../../assets/images/fitsmart/Untitled-14.jpg"
                alt=""
              />

              <imgqutation class="absolute top-[17%] left-[25%]" />
            </figure>
            <figure class="">
              <patternabout class="w-[28%] absolute top-[-12%] right-3" />
              <patternabout2 class="w-[28%] absolute top-[-12%] right-3" />
            </figure>
          </div>
          <div class="mt-10">
            <p dir="rtl" class="text-sm text-color-gray">
              {{ item.comment }}
            </p>
            <div class="flex gap-x-1 justify-end mt-3 mb-2">
              <star v-for="i in 5" />
            </div>
            <div class="w-full flex flex-col items-end">
              <h3 class="text-sm font-bold">{{ item.name }} </h3>
              <!-- <p class="text-color-graylight text-xs mt-1">مدیر باشگاه رکورد</p> -->
            </div>
          </div>
        </div>
      </swiper-slide>


      <nav-left v-if="getComment.length" class="navigationleft" @click="swiperPrevSlide" />
      <nav-right v-if="getComment.length" class="navigationRight" @click="swiperNextSlide" />
    </swiper>
  </section>
</template>
<script>
import star from "@/components/icon/star.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TitleHome from "@/components/shared/TitleHome.vue";
import NavLeft from "@/components/icon/navLeft.vue";
import { ref } from "vue";
import NavRight from "@/components/icon/navRight.vue";
import Patternabout from "@/components/icon/patternabout.vue";
import Patternabout2 from "@/components/icon/patternabout2.vue";
import Imgqutation from "@/components/icon/imgqutation.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    TitleHome,
    NavLeft,
    NavRight,
    Patternabout,
    Patternabout2,
    Imgqutation,
  },
  props: {
    getComment: {
      type: Array,
    },
  },
  setup() {
    const swiperInstance = ref();

    function onSwiper(swiper) {
      swiperInstance.value = swiper;

    }
    const swiperNextSlide = () => {
      swiperInstance.value.slideNext();
      console.log(swiperInstance.value)
      
    };
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev();
  
      
    };
    return {
      onSwiper,

      swiperNextSlide,
      swiperPrevSlide,
      swiperInstance,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow],
    };
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 4.507740020751953px 23.665634155273438px 0px #00000011;
}
.swiper-slide-prev .card {
  opacity: 0.9;
}
.swiper-slide-next .card {
  opacity: 0.9;
}
.swiper-slide .card {
}
.swiper-pagination {
  position: absolute;
  bottom: 0px;
}
.swiper {
  padding: 40px 0;
}
</style>
<style>
.comment
  .swiper-slide:not(
    .swiper-slide-prev,
    .swiper-slide-next,
    .swiper-slide-active
  ) {
  opacity: 0;
}

.comment .swiper-button-prev {
  display: none !important;
}
.comment .swiper-button-next {
  display: none !important;
}
.comment .navigationleft {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 30px;
  cursor: pointer;
  z-index: 100;
}
.comment .navigationRight {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  right: 0px;
  cursor: pointer;
  z-index: 100;
}
.comment {
  width: 85%;
  margin: 0 auto;
}
@media screen and (max-width: 810px) {
  .comment .card {
    border: 1px solid #cccccc46;
  }

  .comment .navigationleft {
    position: absolute;
    top: 90%;
    cursor: pointer;
    z-index: 100;
  }
  .comment .navigationRight {
    position: absolute;
    top: 90%;
    cursor: pointer;
    z-index: 100;
  }
}
</style>
