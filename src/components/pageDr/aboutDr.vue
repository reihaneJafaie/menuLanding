<template>
    <section v-if="AboutDr" class="my-6">
        <h3 class="my-4 text-2xl" v-if="AboutDr && AboutDr.first_name && AboutDr.last_name">
            <strong class="font-bold  ">
                درباره 
            </strong>
            {{ AboutDr.first_name + ' ' + AboutDr.last_name }}
        </h3>
        <div v-html="AboutDr.about" class="leading-9 v-htmlStyle text-2xl">
           

        </div>
        <ul class="mt-12">
            <h3 class="font-bold text-2xl mb-4">حیطه کاری</h3>
            <li  class="pb-3 text-base font-bold">
                {{ AboutDr.speciality.title}}
</li>
        </ul>
    </section>
</template>
<script setup>
const props = defineProps({
    AboutDr:Object,
})
</script>