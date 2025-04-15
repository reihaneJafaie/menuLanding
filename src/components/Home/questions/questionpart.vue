<template>
  <section class="mt-10 gap-y-4 flex flex-col" v-if="dataFaq ">
    <details open>
      <summary class="p-5 sm:text-base text-sm">
        {{ dataFaq[0].question }}
      </summary>
      <article>
        <pre
          class="my-5 px-5 pb-5  sm:text-sm text-xs leading-5"
        ><code class=" text-wrap">
          {{ dataFaq[0].answer }}
      </code>
    </pre>
      </article>
    </details>

    <details v-for="item in dataFaq.slice(1,dataFaq.length)">
      <summary class="p-5 sm:text-base text-sm">
        {{ item.question }}
      </summary>
      <article>
        <pre
          class="my-5 px-5 pb-5 sm:text-sm text-xs leading-5"
        ><code class=" text-wrap">
          {{ item.answer }}
        </code></pre>
      </article>
    </details>

  </section>
  <section v-else class="mt-10 flex flex-col" >
    <DynamicSkeleton class="mt-2 " v-for="item in 5" :height="'80px'" :width="'100%'" :borderRadius="'10px'" />
  </section>
  
</template>
<script setup>
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;

const props = defineProps({

  dataFaq :Array
})
</script>

<style>
summary {
  list-style: none;
  display: flex; /* also removes the list marker */
  align-items: center;
  padding: 10px;
  transition: 0.2s ease-in-out;
}

summary::after {
  content: "";
  width: 18px;
  height: 10px;
  background: url("../../../assets/images/Home/Vector22.svg") no-repeat;
  /* background: url('../../../assets/images/Home/Vector23.svg') no-repeat; */
  background-size: contain;
  margin-left: 0.75em;
  transition: 0.2s;
  width: 5%;
}

summary::-webkit-details-marker {
  display: none;
}

summary {
  background-color: #ffffff;
  box-shadow: 3px 4px 9px -2px #a8a8a8bf;
  color: var(--color-theme-light);
  border-radius: 5px;
}

details[open] summary {
  background-color: var(--color-theme-light);
  color: #fff;
  transform: rotate(1);
}
details[open] summary::after {
  background: url("../../../assets/images/Home/Vector23.svg") no-repeat;
  background-size: contain;
  width: 5%;
}

details {
  background: #ffffff;
  box-shadow: 2px 5px 67px -25px rgba(0, 0, 0, 0.185);
  border-radius: 5px;
  color: var(--color-theme-light);
}

@keyframes rotate {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(1);
  }
}

@media screen and (max-width: 640px) {
  details[open] summary::after {
  background: url("../../../assets/images/Home/Vector23.svg") no-repeat;
  background-size: contain;
  width: 10%;
}

summary::after {
  content: "";
  width: 18px;
  height: 10px;
  background: url("../../../assets/images/Home/Vector22.svg") no-repeat;
  /* background: url('../../../assets/images/Home/Vector23.svg') no-repeat; */
  background-size: contain;
  margin-left: 0.75em;
  transition: 0.2s;
  width: 10%;
}
}
</style>
