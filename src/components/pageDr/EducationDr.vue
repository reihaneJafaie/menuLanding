<template>
    <section class=" my-6 px-3 relative weblog ">
      <div v-if="Education &&  Education.honors" v-html="Education.honors" class=" v-htmlStyle">
       
      </div>
    </section>
  </template>
  <script setup>
const props = defineProps({
  Education :Object
})
</script>

  
