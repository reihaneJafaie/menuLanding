<template>
  <section class="w-full">
    <h2
      v-if="titleSection "
      class="text-color-theme text-center lg:leading-10 text-wrap font-bold md:text-3xl text-xl"
    >
      {{ titleSection }}
    </h2>
    <h2
      v-else
      class="text-color-theme text-center lg:leading-10 text-wrap font-bold md:text-3xl text-xl"
    >
      <DynamicSkeleton
        :height="'50px'"
        :width="'100%'"
        :borderRadius="'10px'"
      />
    </h2>

    <h6 v-if="subtitleSection "
      class="text-color-graylight my-4 font-medium md:text-base text-sm text-center flex justify-center"
    >
      {{ subtitleSection }}
    </h6>
    <h6
    v-else
      class="text-color-graylight my-4 font-medium md:text-base text-sm text-center flex justify-center"
    >
    <DynamicSkeleton
        :height="'30px'"
        :width="'100%'"
        :borderRadius="'10px'"
      />
    </h6>
  </section>
</template>
<script setup>
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue";

const props = defineProps({
  titleSection: String,
  subtitleSection: String,
});
</script>
