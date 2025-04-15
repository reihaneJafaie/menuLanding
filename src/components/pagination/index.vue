<template>
  <paginate
    :page-count="lastPage"
    :page-range="3"
    :initial-page="currentPage"
    :click-handler="clickCallback"
    :prev-text="'قبلی'"
    :next-text="'بعدی'"
    :container-class="'pagination-list-book'"
    :hide-prev-next="true"
    :disabled-class="disabled"
  >
  </paginate>
</template>
<script>
import Paginate from "vuejs-paginate-next";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { useBookListStore } from "../../stores/bookList.js"
export default {
  // register the component
  components: { Paginate },
  data() {
    return {};
  },
  methods: {
    // clickCallback (pageNum){
    // console.log(pageNum)
    // }
  },
  props: {
    lastPage: Number,
    currentPage: Number,
  },
  setup(props) {
    let url = ref({});
    let route = useRoute();
    let router = useRouter();
    // let storeBookList = useBookListStore()
    let pageNUmber = ref(null);
    let nowPage = ref(1);
    function clickCallback(pageNum) {
      console.log(pageNum);
      for (const key in route.query) {
        // url.value.push(urlQuery[key]=route.query[key]);
        url.value[key] = route.query[key];
      }
      nowPage.value = Number(pageNUmber.value);
      url.value["page"] = pageNum;
      router.push({ name: route.name, query: url.value });
    }
    return { clickCallback };
  },
};
</script>
<style >

.pagination-list-book {
  margin-top: 50px !important;
  display:flex !important;
  justify-content: center !important;
}

.pagination-list-book .page-item .page-link {
  padding: 8px 12px !important;
  box-shadow: 1px 6px 23px 6px rgba(0, 0, 0, 0.055) !important;
  border-radius: 4px !important;
  background-color: #ffffff !important;
  color: var(--color-theme) !important;
  transition: background-color 0.3s ease, color 0.3s ease !important;
}

.pagination-list-book .page-item .page-link:hover {
  background-color: #c3e1ff !important;
}

.pagination-list-book .page-item .page-link.active {
 
  color: #fff !important;
  border-color: #007bff;
}

.pagination-list-book .page-item.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}


@media (min-width: 1024px) {
  .pagination-list-book  {
    margin-top: 0px;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center;
  }
}
</style>
