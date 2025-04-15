<template>
  <section class="bg-white rounded-xl aside p-8">
    <section class="">
      <h3 class="text-black text-base font-bold mb-4">جست و جو</h3>
      <form @submit.prevent="search()" action="">
        <div class="flex gap-x-3 w-full">
          <input
            type="search"
            placeholder="جستجو"
            class="p-2 rounded-xl border w-full"
            v-model="searchBox"
          />
          <input type="submit" value="جستجو" class="btnFitsmart !w-[30%]" />
        </div>
      </form>
    </section>
    <section>
      <h3   class="text-black text-base font-bold my-6">آخرین وبلاگ ها</h3>
      
      <weblogAside
      v-if="getLastBlogList"
        v-for="item in getLastBlogList"
        :lastBlogDetail="item"
        class="border-b-2 last:border-b-0"
      />
      <div v-else v-for="item in 4 " class="flex gap-x-4">
        <DynamicSkeleton class="mb-3" :height="'100px'" :width="'30%'" :borderRadius="'10px'" />
        <DynamicSkeleton class="mb-3" :height="'100px'" :width="'70%'" :borderRadius="'10px'" />
      </div>
      
    </section>
    <section>
      <h3 class="text-black text-base font-bold my-6">دسته بندی ها</h3>
      <ul>
        <li v-if="getCetegoryBlog"
          class="flex w-full justify-between mb-3"
          v-for="item in getCetegoryBlog"
          :key="item"
        >
          <router-link :to="{ path: '/weblogs', query: { category_id: item.id } }">
            {{ item.name }}
          </router-link>
          <span> ({{ item.posts_count }}) </span>
        </li>
        <li v-else v-for="item in 5"> 
          <DynamicSkeleton class="my-5" :height="'30px'" :width="'100%'" :borderRadius="'10px'" />
        </li>
      </ul>
    </section>
  </section>
</template>
<script setup>
import weblogAside from "@/components/Weblog/weblogAside.vue";
import { useCategoryBlogStore } from "@/stores/categoryBlog.js";
import { computed, onMounted, watch } from "vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;

let route = useRoute();
let router = useRouter();

const props = defineProps({
  getLastBlogList: Array,
});

let searchBox = ref("");
function search() {
  router.push({
    name: "webloglist",
    query: {
      search: searchBox.value,
    },
  });
}

//get ctegory
const store = useCategoryBlogStore();
let getCetegoryBlog = computed(() => {
  return store.getCateGoryPosts;
});
onMounted(() => {
  store.getCategoryPostsFromServer();
});
</script>
