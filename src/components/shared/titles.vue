<template>
  <section>
    <h2
      class="text-color-theme text-center lg:leading-10 text-wrap font-bold md:text-3xl text-xl"
    >
      {{ title }}
    </h2>
    <h6
      class="text-color-graylight my-4 font-medium md:text-base text-sm text-center flex justify-center"
    >
      <RouterLink to="/"> خانه > &nbsp; </RouterLink>
      <RouterLink :to="routrPath1"> {{ subtitle }}</RouterLink>
      <template v-if="routrPath2 && titlePage2">
        <p>
          <span> &nbsp; >  &nbsp;</span>
          <RouterLink :to="routrPath2"> {{ titlePage2 }}</RouterLink>
        </p>
      </template>
    </h6>
  </section>
</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  routrPath1: {
    type: String,
    default: "",
  },
  routrPath2: {
    type: String,
    default: "",
  },
  titlePage2: String,
});
</script>
