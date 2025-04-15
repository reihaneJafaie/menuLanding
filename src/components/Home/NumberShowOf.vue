<!-- <template>
  <section
    ref="elementToWatch"
    id="ele"
    class="bgchoose bg-sky-50 sm:w-full w-[90%] mx-auto border-2 text-blue-900 border-white shadow-2xl rounded-3xl my-10 px-12 py-5 sm:flex justify-around grid grid-cols-2 grid-rows-2 gap-4"
  >
    <div class="text-center" dir="ltr">
      <p class="font-bold text-base mb-4 p-2 text-nowrap">پزشک ثبت شده</p>
      <div class="text-[35px]">
        {{ currentCount }}
      </div>
    </div>

    <div class="text-center" dir="ltr">
      <p class="font-bold text-base mb-4 p-2 text-nowrap">پزشک فعال</p>
      <div class="text-[35px]">
        {{ currentCount }}
      </div>
    </div>

    <div class="text-center" dir="ltr">
      <p class="font-bold text-base mb-4 p-2 text-nowrap">سال تجربه کاری</p>
      <div class="text-[35px]">
        {{ currentCount }}
      </div>
    </div>

    <div class="text-center text-nowrap" dir="ltr">
      <p class="font-bold text-base mb-4 p-2">کابران فعال</p>
      <div class="text-[35px]">
        {{ currentCount }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useSetting } from "@/stores/setting.js";

// متغیر شمارنده
const currentCount = ref(0);

// متغیر برای زمان شروع انیمیشن
let startTime = null;

// تابع انیمیشن شمارنده
const animateCount = (timestamp) => {
  // اگر زمان شروع انیمیشن تنظیم نشده باشد، آن را تنظیم کنید
  if (!startTime) {
    startTime = timestamp;
  }

  // زمان گذشته از شروع انیمیشن
  const elapsedTime = timestamp - startTime;

  // محاسبه مقدار شمارنده بر اساس زمان گذشته
  currentCount.value = Math.min(Math.round((elapsedTime / 2000) * 200), 200);

  // اگر هنوز به حداکثر مقدار نرسیده‌ایم، ادامه دهید
  if (currentCount.value < 200) {
    requestAnimationFrame(animateCount);
  }
};

// تابع برای بررسی ورود به دیدگاه
const handleIntersect = (entries) => {
  for (const entry of entries) {
    // اگر کامپوننت وارد دیدگاه شود
    if (entry.isIntersecting) {
      // شروع انیمیشن شمارنده
      requestAnimationFrame(animateCount);
    }
  }
};

// متغیر ref برای ذخیره المانی که قرار است رصد شود
const elementToWatch = ref(null);

// ایجاد Observer برای رصد دیدگاه
const observer = new IntersectionObserver(handleIntersect);
onMounted(() => {
  // افزودن عنصری که قرار است رصد شود
  observer.observe(elementToWatch.value);
  store.getSettingFromServer();
});

const store = useSetting();
let getSetting = computed(() => {
  return store.geterSettingFooter;
});

console.log(getSetting);

// active_doctor: "453";
// active_users: "659";
// registered_physician: "563";
// years_experience: "20";



// میخوام بجای یک عدد ثابت 200 برای هر 4 اینپوت 4 عدد متفاوتی که از api بزارم
//getSetting.general.active_doctor
//getSetting.general.active_users
//getSetting.general.active_doctor
//getSetting.general.active_doctor
</script> -->


<template>
  <section
    ref="elementToWatch"
    id="ele"
    class="bgchoose  sm:w-full  mx-auto border-2 text-stone-50 border-fuchsia shadow-4xl rounded-3xl my-10 px-12 py-5 xl:flex  grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-3"
  >
    <div class="text-center  w-full" dir="ltr">
      <p class="font-bold text-base mb-2 py-2 text-nowrap">پروژه ها</p>
      <div class="text-[35px] font-bold ">
        {{ currentRegisteredPhysician }}
      </div>
    </div>

    <div class="text-center w-full" dir="ltr">
      <p class="font-bold text-base mb-2 py-2 text-nowrap">سئو</p>
      <div class="text-[35px] font-bold">
        {{ currentActiveDoctor }}
      </div>
    </div>

    <div class="text-center w-full" dir="ltr">
      <p class="font-bold text-base mb-2 py-2 text-nowrap">سال تجربه کاری</p>
      <div class="text-[35px] font-bold">
        {{ currentYearsExperience }}
      </div>
    </div>

    <div class="text-center w-full" dir="ltr">
      <p class="font-bold text-base mb-2 py-2 text-nowrap">کابران فعال</p>
      <div class="text-[35px] font-bold">
        {{ currentActiveUsers }}
      </div>
    </div>
  </section>
</template>
<style scoped>
.bgchoose{
   background-color: #3E065F;
}
</style>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useSetting } from "@/stores/setting.js";

// متغیر شمارنده‌ها
const currentRegisteredPhysician = ref(0);
const currentActiveDoctor = ref(0);
const currentYearsExperience = ref(0);
const currentActiveUsers = ref(0);

// متغیر برای زمان شروع انیمیشن
let startTime = null;

// تابع انیمیشن شمارنده
const animateCount = (targetRef, targetValue) => (timestamp) => {
  // اگر زمان شروع انیمیشن تنظیم نشده باشد، آن را تنظیم کنید
  if (!startTime) {
    startTime = timestamp;
  }

  // زمان گذشته از شروع انیمیشن
  const elapsedTime = timestamp - startTime;

  // محاسبه مقدار شمارنده بر اساس زمان گذشته
  targetRef.value = Math.min(Math.round((elapsedTime / 2000) * targetValue), targetValue);

  // اگر هنوز به حداکثر مقدار نرسیده‌ایم، ادامه دهید
  if (targetRef.value < targetValue) {
    requestAnimationFrame(animateCount(targetRef, targetValue));
  }
};

// تابع برای بررسی ورود به دیدگاه
const handleIntersect = (entries) => {
  for (const entry of entries) {
    // اگر کامپوننت وارد دیدگاه شود
    if (entry.isIntersecting) {
      // شروع انیمیشن شمارنده
      requestAnimationFrame(animateCount(currentRegisteredPhysician, registeredPhysician.value));
      requestAnimationFrame(animateCount(currentActiveDoctor, activeDoctor.value));
      requestAnimationFrame(animateCount(currentYearsExperience, yearsExperience.value));
      requestAnimationFrame(animateCount(currentActiveUsers, activeUsers.value));
    }
  }
};

// متغیر ref برای ذخیره المانی که قرار است رصد شود
const elementToWatch = ref(null);

// ایجاد Observer برای رصد دیدگاه
const observer = new IntersectionObserver(handleIntersect);

const store = useSetting();
const getSetting = computed(() => {
  return store.geterSettingFooter;
});

const registeredPhysician = ref(0);
const activeDoctor = ref(0);
const yearsExperience = ref(0);
const activeUsers = ref(0);

onMounted(async () => {
  // افزودن عنصری که قرار است رصد شود
  observer.observe(elementToWatch.value);

  await store.getSettingFromServer();
  const settings = getSetting.value.general;

  // تنظیم مقادیر
  registeredPhysician.value = parseInt(settings.registered_physician, 10) || 0;
  activeDoctor.value = parseInt(settings.active_doctor, 10) || 0;
  yearsExperience.value = parseInt(settings.years_experience, 10) || 0;
  activeUsers.value = parseInt(settings.active_users, 10) || 0;
});
</script>


