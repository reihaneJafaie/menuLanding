<template>
  <section
    v-if="getListDoc"
    class="flex lg:flex-row flex-col-reverse mt-14 gap-x-6 items-center listOfDoctor mb-14"
  >
    <section class="lg:w-[65%] w-full relative">
      <swiper
        navigation
        dir="ltr"
        class="lg:w-[90%] w-full swiperBox pb-30"
        :pagination="{ clickable: true }"
        :navigation="true"
        :space-between="22"
        :loop="true"
        @swiper="onSwiper"
        :modules="modules"
        :breakpoints="{
          1500: {
            slidesPerView: 3.3,
          },
          1300: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 2.5,
          },
          1100: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3.3,
          },
          800: {
            slidesPerView: 2.5,
          },
          500: {
            slidesPerView: 2.5,
          },
          150: {
            slidesPerView: 1.5,
          },
        }"
      >
        <swiper-slide v-for="item in getListDoc" v-if="getListDoc">
          <router-link :to="`/page-dr/${item.id} `">
            <figure
              class="p-0 w-full relative rounded-xl md:ml-2 xl:my-8 mt-0 mb-8"
            >
              <img
                v-if="item.image && item.image.url"
                class="w-full h-full imgDoc rounded-xl"
                :src="item.image.url"
                alt=""
              />
              <img
                v-else
                class="w-full h-full imgDoc rounded-xl"
                src="../../assets/images/fitsmart/DefaultImgDoctor.jpg"
                alt=""
              />
              <figcaption class="figcaption">
                <div
                  class="text-center bottom-0 absolute text-white backdrop-blur-md my-4 w-full p-1"
                >
                  <h3 class="font-bold text-base xl:text-xl mb-1">
                    دکتر {{ item.first_name }} {{ item.last_name }}
                  </h3>
                  <h6 class="text-xs xl:text-sm">
                    {{ item.speciality.title }}
                  </h6>
                </div>
              </figcaption>
            </figure>
          </router-link>
        </swiper-slide>
        <swiper-slide v-else v-for="item in 5">
          <DynamicSkeleton
            :height="'300px'"
            :width="'100%'"
            :borderRadius="'10px'"
          />
        </swiper-slide>
      </swiper>
      <nav-left
        @click="swiperPrevSlide"
        class="navigationSwiper hidden xl:block"
      />
    </section>
    <div class="lg:w-[30%] w-full h-max flex flex-col items-center">
      <TitleHome
        :titleSection="'پزشکان متخصص فیت اسمارت در کنار شما'"
        :subtitleSection="'لیست پزشکان که مارا در فیت اسمارت همراه میکنند .'"
      />
      <router-link to="/list-doctor" class="">
        <button class="btnFitsmart">مشاهده همه پزشکان</button>
      </router-link>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NavLeft from "../icon/navLeft.vue";
import { ref } from "vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TitleHome from "../shared/TitleHome.vue";
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    TitleHome,
    NavLeft,
    DynamicSkeleton,
  },
  props: {
    getListDoc: {
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

<style scoped>
.navigationSwiper {
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  left: 0%;
  cursor: pointer;
}
figure {
  box-shadow: 0px 5px 10px 0px #00000033;
}

.swiperBox {
  padding-left: 4%;
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
.imgDoc {
  aspect-ratio: 2/3;
}
</style>
<style>
.listOfDoctor .swiper-button-next::after {
  content: " ";
  display: none !important;
}
.listOfDoctor .swiper-button-prev,
.listOfDoctor .swiper-button-next {
  display: none;
}

.listOfDoctor .swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, 25px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
  /* display: none; */
}

.listOfDoctor .swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  display: none;
}

.swiper {
  padding: 40px 0;
}

@media screen and (max-width: 1280px) {
  .listOfDoctor .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    display: block;
  }
}
</style>
