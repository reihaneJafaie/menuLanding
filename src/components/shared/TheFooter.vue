<template>
  <footer v-if="getSetting && getSetting.footer" class="w-full">
    <section>
      <p class="containerFitsmart my-4 py-10 leading-8">
        کافه گالری کاریز، مکانی است برای ملحق شدن به دنیای طعم‌ها و هنر. در
        اینجا، ما با افتخار بهترین غذاها و نوشیدنی‌ها را از دل طبیعت و با عشق به
        شما ارائه می‌دهیم. هر گوشه از کافه‌ ما فضایی منحصر به فرد است که به
        همراه نام‌آوری هنرمندان محلی، تجربه‌ای بی‌نظیر از هنر و ذائقه را برای
        شما فراهم می‌آورد. ما تلاش می‌کنیم تا با استفاده از مواد تازه و باکیفیت،
        منویی خوشمزه و متنوع را برای ذائقه‌های مختلف آماده کنیم. از قهوه‌های
        خوش‌عطر گرفته تا دسرهای منحصر به فرد و غذاهای اصلی، هر کدام از آیتم‌های
        منوی ما نشان‌دهنده عشق و اهتمام ما به کیفیت و طعم است. در کافه گالری
        کاریز، علاوه بر لذت بردن از طعم‌ها، شما می‌توانید از نمایشگاه‌های هنری و
        رویدادهای فرهنگی ما نیز بهره‌مند شوید. هدف ما ایجاد فضایی صمیمی و
        الهام‌بخش برای دوستداران هنر و غذا است. اینجا جایی است که می‌توانید با
        دوستان و خانواده خود وقت بگذرانید و از لحظات خوب زندگی لذت ببرید. با ما
        همراه باشید و از لحظاتی فراموش‌نشدنی در کافه گالری کاریز لذت ببرید. برای
        اطلاعات بیشتر درباره رویدادهای آینده و منوی ما، به بخش‌های دیگر سایت
        مراجعه کنید.
      </p>
      <div class="containerFitsmart py-6 border-t-2 border-gray-700 px-4">
        <logo />
        <div class="md:flex justify-between">
          <div class="flex gap-2 mt-2">
            <strong class="font-bold"> آدرس : </strong>
            <p>گرگان ، گرگان پارس ، کنار پارک شطرنج</p>
          </div>
          <div class="flex md:gap-2 gap-3 justify-center md:py-0 py-4 ">
            <a href="#" class=" p-2 rounded-full bg-green-900 hover:text-green-900"> <instagram /></a>
            <a href="#" class=" p-2 rounded-full bg-green-900 hover:text-green-900"> <instagram /></a
            ><a href="#" class=" p-2 rounded-full bg-green-900 hover:text-green-900"> <instagram /></a
            ><a href="#" class=" p-2 rounded-full bg-green-900 hover:text-green-900"> <instagram /></a>
          </div>
        </div>

        <div class="flex gap-2 my-2">
          <strong class="font-bold"> ساعت کاری : </strong>
          <p>9 الی 24</p>
        </div>

        <div class="flex gap-2 my-2">
          <strong class="font-bold"> صبحانه : </strong>
          <p>جمعه ها تا ساعت 13:30</p>
        </div>

        <div class="flex flex-col md:flex-row justify-between my-4">
          <!-- بخش درباره ما -->
          <div class="mb-4 md:mb-0">
            <h3 class="text-lg font-semibold mb-3 text-green-900">درباره ما</h3>
            <ul>
              <li class="my-1">
                <a href="#" class="hover:text-green-900">تاریخچه</a>
              </li>
              <li class="my-1">
                <a href="#" class="hover:text-green-900">ماموریت ما</a>
              </li>
              <li class="my-1">
                <a href="#" class="hover:text-green-900">تیم ما</a>
              </li>
            </ul>
          </div>

          <!-- بخش خدمات ما -->
          <div class="mb-4 md:mb-0">
            <h3 class="text-lg font-semibold mb-3 text-green-900">خدمات ما</h3>
            <ul>
              <li class="my-1">
                <a href="#" class="hover:text-green-900">منوی غذا</a>
              </li>
              <li class="my-1">
                <a href="#" class="hover:text-green-900">منوی نوشیدنی</a>
              </li>
              <li class="my-1">
                <a href="#" class="hover:text-green-900"
                  >رویدادها و کارگاه‌ها</a
                >
              </li>
            </ul>
          </div>

          <!-- بخش غذاهای ویژه -->
          <div class="mb-4 md:mb-0">
            <h3 class="text-lg font-semibold mb-3 text-green-900">غذاهای ما</h3>
            <ul>
              <li class="my1">
                <a href="#" class="hover:text-green-900">برگر</a>
              </li>
              <li class="my1">
                <a href="#" class="hover:text-green-900">تاکو</a>
              </li>
              <li class="my1">
                <a href="#" class="hover:text-green-900">ماکتا</a>
              </li>
              <li class="my1">
                <a href="#" class="hover:text-green-900">پاستا</a>
              </li>
              <li class="my1">
                <a href="#" class="hover:text-green-900">دسرهای ویژه</a>
              </li>
            </ul>
          </div>

          <!-- بخش ارتباط با ما -->
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <div class="mb-4 md:mb-0">
              <h3 class="text-lg font-semibold mb-3">ارتباط با ما</h3>
              <ul>
                <li class="my-1">
                  <a href="#" class="hover:text-green-900">تماس با ما</a>
                </li>
                <li class="my-1">
                  <a href="#" class="hover:text-green-900"
                    >چگونه ما را پیدا کنید</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-sm w-full bg-gray-300 p-2">
        © 2025 کافه گالری کاریز. همه حقوق محفوظ است.
      </p>
    </section>
  </footer>
</template>
<script setup>
import logoWhite from "@/components/icon/logoWhite.vue";
import instagram from "@/components/icon/instagram.vue";
import { useSetting } from "@/stores/setting.js";
import { computed, onMounted } from "vue";
import logo from "@/components/shared/Logo.vue";

const store = useSetting();
let getSetting = computed(() => {
  return store.geterSettingFooter;
});
onMounted(() => {
  store.getSettingFromServer();
});

// console.log(getSetting)
</script>
<style scoped>
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 93%;
  height: 85%;
}
</style>
