<template>
    <section>
    <Teleport to="body" v-if="!getListDoc">
      <Loader />
    </Teleport>
  </section>
  <section class="flex flex-col gap-5">
    <Titles
      :title="'لیست پزشکان'"
      :subtitle="'لیست پزشکان '"
      :routrPath1="'/list-doctor'"
    />

    <section class="containerFitsmart flex lg:flex-row flex-col my-16">
      <section class="lg:w-[30%] w-full lg:mt-0 mt-10">
        <filterDoctor />
      </section>
      <section class="lg:w-[70%] w-full lg:mt-0 mt-10">
        <viewOrder />
        <!-- {{ getListDoc }} -->
        <doctorCard v-if=" getListDoc && getListDoc.data && getListDoc.data.length " :getListDoc="getListDoc" />
        <NoDoctorFound v-else />
      </section>
    </section>
  </section>
</template>
<script setup>
import Titles from "@/components/shared/titles.vue";
import viewOrder from "@/components/ListDoctor/viewOrder.vue";
import doctorCard from "@/components/ListDoctor/doctorCard.vue";
import filterDoctor from "@/components/ListDoctor/filterDoctor.vue";
import { useListDoctor } from "@/stores/listDoctor.js";
import { computed, onMounted, watch } from "vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import NoDoctorFound from '@/components/ListDoctor/NoDoctorFound.vue'
import Loader from "@/components/shared/Loader.vue";
let noDoctorFounds = ref(false);

import Swal from "sweetalert2";
let route = useRoute();
let router = useRouter();
const store = useListDoctor();
let getListDoc = computed(() => {
  return store.getDoctors;
});
// let getCard =[];  

let ObjFilter = {};
function getListDr() {
  ObjFilter = {};
  //////////////////////
  if (route.query.name) {
    ObjFilter.name = route.query.name;
  }
  if (route.query.province_id) {
    ObjFilter.province_id = route.query.province_id;
  }
  if (route.query.city_id) {
    ObjFilter.city_id = route.query.city_id;
  }
  if (route.query.speciality_id) {
    ObjFilter.speciality_id = route.query.speciality_id;
  }
  if (route.query.gender) {
    ObjFilter.gender = route.query.gender;
  }
  if (route.query.sort) {
    ObjFilter.sort = route.query.sort;
  }
  if (route.query.page) {
    ObjFilter.page = route.query.page;
  }
  ///////////////////////
  store.getDoctorListFromServer(ObjFilter);
  // if(getListDoc.value.length <=0){
  //   noDoctorFounds = true
  // }else{
  //   noDoctorFounds = false
  // }
}
// if (getListDoc.length <= 0) {
//   Swal.fire({
//   position: "top-end",
//   icon: "error",
//   title: "متاسفانه دکتری با چنین مشخصاتی ثبت نشده است !",
//   showConfirmButton: false,
//   timer: 1500
// });

// }else{
//   getCard = get
// }

watch(route, (to) => {
  getListDr();
});

onMounted(() => {
  store.getDoctorListFromServer(route.query);
});
</script>
