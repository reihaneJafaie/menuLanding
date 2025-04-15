<template>
  <section class="my-14 px-3 relative weblog">
    <div class="h-max flex flex-col items-center">
      <TitleHome
        :titleSection="'اخرین مقالات فیت اسمارت'"
        :subtitleSection="'مقالات و تحقیقات پزشکان برتر فیت اسمارت اینجاست دیگه .'"
      />
    </div>
    <swiper
      dir="ltr"
      :autoplay="{
        delay: 1000,
      }"
      class="w-[95%] mx-auto"
      navigation
      :pagination="{ clickable: true }"
      :slidesPerView="3"
      :centeredSlides="true"
      :spaceBetween="30"
      :loop="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :breakpoints="{
        1500: {
          slidesPerView: 3,
        },
        1300: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2.5,
        },

        900: {
          slidesPerView: 2.5,
        },
        800: {
          slidesPerView: 2.3,
        },
        500: {
          slidesPerView: 1.5,
        },
        150: {
          slidesPerView: 1,
        },
      }"
    >
      <swiper-slide v-if="getBlogList " v-for="item in getBlogList " class="">
        <WeblogCardSlider :blogDetail="item" :theme="1" />
      </swiper-slide>
      <swiper-slide v-else v-for="item in 7" class="">
        <DynamicSkeleton
            :height="'350px'"
            :width="'90%'"
            :borderRadius="'10px'"
          />
      </swiper-slide>



    </swiper>
    <nav-left class="navigationleft" @click="swiperPrevSlide" />
    <nav-right class="navigationRight" @click="swiperNextSlide" />

  </section>
</template>

<script>
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavLeft from "@/components/icon/navLeft.vue";
import { ref } from "vue";
import NavRight from "@/components/icon/navRight.vue";
import WeblogCardSlider from "./weblogCardSlider.vue";
import TitleHome from "@/components/shared/TitleHome.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    TitleHome,
    NavLeft,
    NavRight,
    WeblogCardSlider,
    DynamicSkeleton,
  },
  props: {
    getBlogList: {
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
    };
    const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev();
    };

    return {
      onSwiper,
      swiperNextSlide,
      swiperPrevSlide,
      swiperInstance,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style>
.weblog .swiper-pagination {
  margin: -26px auto;
}
.weblog .swiper-button-prev {
  display: none !important;
}
.weblog .swiper-button-next {
  display: none !important;
}

.weblog .navigationleft {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 0px;
  cursor: pointer;
  z-index: 100;
}
.weblog .navigationRight {
  position: absolute;

  top: 50%;
  transform: translate(-50%);
  right: -3%;
  cursor: pointer;
  z-index: 100;
}

.weblog .swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  display: none;
}

@media screen and (max-width: 1280px) {
  .weblog .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    display: block;
  }
  .weblog .navigationleft {
    position: absolute;
    top: 96% !important ;
    transform: translate(-50%);
    left: 11% !important ;
    cursor: pointer;
    z-index: 100;
  }
  .weblog .navigationRight {
    position: absolute;
    top: 96% !important ;
    transform: translate(-50%);
    right: 0% !important ;
    cursor: pointer;
    z-index: 100;
  }
}
</style>
<style scoped>
figure {
  box-shadow: 0px 5px 10px 0px #00000033;
}

.swiperBox {
  padding-left: 5px;
}

.figcaption {
  /* background-color: blue; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 59.51%,
    rgba(0, 0, 0, 0.55) 100%
  );
}
</style>
