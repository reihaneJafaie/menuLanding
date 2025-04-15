<template>
  <section class="h-full relative">
    <!-- main img -->
    <figure class="">
      <img
        class="w-[80%] mx-auto"
        src="../../../assets/images/Banner/logo.png"
        alt=""
      />
    </figure>
    <!-- comment -->
    <!-- <div
      data-aos="fade-up"
      data-aos-delay="400"
      class="xl:w-[36%] w-[43%] border-2 font-light md:text-sm text-[10px] md:leading-6 py-6 px-3 rounded-[22px] border-white backdrop-blur-md shadow-2xl absolute bottom-4 md:left-16 left-2"
    >
      <p class="text-center">
        با سلام و احترام
        <br />
        بسیار خوشحال شدم که چنین نرم افزار زیبا و کاربردی را دانلود و نصب کردم .
        بسیار از ظاهر زیبای آن لذت بردم . خدا قوت
      </p>
      <div class="flex gap-x-2 mt-1 items-center justify-center">
        <figure>
          <img src="../../../assets/images/test/user.svg" alt="" />
        </figure>
        <p class="flex flex-col mt-3">
          <span class="font-semibold md:text-sm text-[10px]">پریا محسنی</span>
          <span class="font-light md:text-sm text-[10px]"
            >مدیریت باشگاه پرواز</span
          >
        </p>
      </div>
    </div> -->
    <!-- fake show-of -->
    <!-- <div
      class="md:w-50 w-25 border-2 md:py-2 py-0 md:px-3 px-2 rounded-3xl border-white bg-sky-50 shadow-2xl -z-10 absolute xl:top-[9%] top-[10%] xl:right-[-2%] right-[5%]"
    >
      <div class="flex flex-col items-center py-2">
        <span class="md:text-sm text-[10px]">50 +</span>
        <span class="my-1 md:text-sm text-[10px]">پزشک متخصص</span>
        <div class="flex relative  h-[42px]">
          <figure
            :class="`imgBox  imgBox${i}`"
            class="absolute md:w-[42px] md:h-[42px] w-[30px] h-[30px]"
            v-for="i in 3"
          >
            <img
              class="rounded-full border-2 w-full h-full border-white"
              src="../../../assets/images/test/imgdoctor.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div> -->
    <!-- + -->
    <!-- <figure class="absolute  rounded-full p-5 bg-pink top-[0%] left-[75%]">
      <img
        class="imgplus"
        src="../../../assets/images/Banner/plus.svg"
        alt=""
      />
    </figure> -->
  </section>
</template>
<script setup>
import AOS from "aos";
AOS.init();
</script>
<style scoped>
.imgBox1 {
  position: absolute;
  left: -50px;
  z-index: 100;
}

.imgBox2 {
  position: absolute;
  right: -25px;
  z-index: 1000;
}
.imgBox3 {
  position: absolute;
  left: 17px;
  z-index: 10000;
}

.imgplus {
  display: block;
  animation-duration: 1s;
  animation-iteration-count: 1;
}

.imgplus:hover {
  animation: zoom-in-zoom-out 3s ease 1;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.3, 1.3);
  }
  100% {
    transform: scale(1, 1);
  }
}

@media screen and (max-width: 768px) {
  .imgBox1 {
    position: absolute;
    left: -40px;
    z-index: 100;
  }

  .imgBox2 {
    position: absolute;
    right: -15px;
    z-index: 1000;
  }
  .imgBox3 {
    position: absolute;
    right: -40px;
    z-index: 10000;
  }
}
</style>
