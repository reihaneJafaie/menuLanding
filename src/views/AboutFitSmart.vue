<template>
    <section>
    <Teleport to="body" v-if="!getSetting">
      <Loader />
    </Teleport>
  </section>
  <section v-if="getSetting && getSetting.about" class="w-[80%] mx-auto my-14">

    <Titles :title="'درباره ما'" subtitle="درباره ما" />
    <div v-html="getSetting.about.body" class="text-xs md:text-base leading-6 md:leading-8 md:mt-10 mt-5 ">
    </div>
  </section>
</template>

<style scoped>
figure img {
    aspect-ratio: 3 / 1;
}
</style>
<script setup>
import { useSetting } from "@/stores/setting.js";
import { computed, onMounted } from "vue";
import Titles from "@/components/shared/titles.vue";
import Loader from "@/components/shared/Loader.vue";
const store = useSetting();
let getSetting = computed(() => {
  return store.geterSettingFooter;
});
onMounted(() => {
  store.getSettingFromServer();
});
// console.log(getSetting)



</script>


<!-- اینجا میتونید اطلاعات درباره ما اضافه کنید . از ادیتور که استفاده کنید میتونید از تاتیل ها لیست ها و... استایل های مختلف استفاده کنید فقط سعی کنید از کپی پیست استفاده نکنید تا فونت عوض نشود . -->