<template>
  <section>
    <Teleport to="body" v-if="!getBlogList">
      <Loader />
    </Teleport>
  </section>
  <section class="containerFitsmart">
    <Titles
      :title="'وبلاگ ها'"
      :subtitle="' وبلاگ ها'"
      :routrPath1="'/weblogs'"
    />
    <section
      class="flex flex-col xl:grid xl:grid-cols-3 xl:grid-rows-1 gap-4 my-16"
    >
      <Aside :getLastBlogList="getLastBlogList"></Aside>
      <section
        v-if="getBlogList"
        class="grid grid-cols-1 xl:grid xl:grid-cols-3 gap-4 col-span-2"
      >
        <weblogCardSlider
          v-if="getBlogList"
          :blogDetail="item"
          v-for="item in getBlogList.data"
          :key="item"
          :theme="2"
        />
        <section v-else v-for="item in 10">
          <DynamicSkeleton
            class="mx-5"
            :height="'370px'"
            :width="'90%'"
            :borderRadius="'10px'"
          />
        </section>
      </section>
      <div class="paginationWeblog p-4 w-full dir-ltr" v-if="getBlogList">
        <paginateComponent
          v-if="getBlogList.last_page != 1"
          :lastPage="getBlogList.last_page"
          :currentPage="getBlogList.current_page"
        ></paginateComponent>
      </div>
    </section>
  </section>
</template>

<script setup>
import Paginate from "vuejs-paginate-next";
import paginateComponent from "@/components/pagination/index.vue";
import weblogCardSlider from "@/components/Home/weblogHome/weblogCardSlider.vue";
import Aside from "@/components/shared/Aside.vue";
import Titles from "@/components/shared/titles.vue";
import { useBlogStore } from "@/stores/Postblog.js";
import { computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue";
import { uselatesBlogStore } from "@/stores/latestPosts.js";
import Loader from "@/components/shared/Loader.vue";
let route = useRoute();
let router = useRouter();

//posts
const store = useBlogStore();
let getBlogList = computed(() => {
  return store.getPosts;
});

//aside lastPosts

const storelatest = uselatesBlogStore();
let getLastBlogList = computed(() => {
  return storelatest.getlatesPosts;
});
onMounted(() => {
  storelatest.getlatesPostsFromServer();
  store.getPostsFromServer(route.query);
});

//filter
let ObjFilter = {};
function getListweblogs() {
  ObjFilter = {};
  if (route.query.category_id) {
    ObjFilter.category_id = route.query.category_id;
  }
  if (route.query.search) {
    ObjFilter.search = route.query.search;
  }
  if (route.query.page) {
    ObjFilter.page = route.query.page;
  }
  store.getPostsFromServer(ObjFilter);
}
watch(route, (to) => {
  getListweblogs();
});
</script>

<style>
.aside {
  box-shadow: 0px 3.328917980194092px 27px 0px #b8b8b833;
}

.paginationWeblog .pagination-list-book {
  gap: 12px;
}
</style>
