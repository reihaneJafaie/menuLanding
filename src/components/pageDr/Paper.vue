<template>
  <section v-if="posts && posts.length" class="my-6 px-3 relative weblog grid grid-cols-3 ">

    <weblogCardSlider v-for="item in posts" :theme="2" :blogDetail="item" />
  </section>
  <section v-else>
    <h2 class="text-color-theme text-xl font-bold p-4">
      این دکتر هنوز مقاله ای ثبت نکرده است !
    </h2>
  </section>
</template>

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

<script>
import titles from "@/components/shared/titles.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavLeft from "@/components/icon/navLeft.vue";
import { ref } from "vue";
import NavRight from "@/components/icon/navRight.vue";
import paperSlider from "@/components/pageDr/paperSlider.vue";
import weblogCardSlider from "@/components/Home/weblogHome/weblogCardSlider.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    titles,
    NavLeft,
    NavRight,
    paperSlider,
    weblogCardSlider,
  },
  props: {
    posts: {
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
}
</style>
