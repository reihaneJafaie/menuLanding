<template>
  <!-- <form  > -->
  <section class="main rounded-2xl p-4 mx-5 text-sm filterDoctor" v-if="GetProvinces && gitCities && getSpecialities "> 
    <article class="flex w-full gap-x-3">
      <span class="w-[50%] flex flex-col mb-3">
        <label class="mt-4 mb-2" for="browser">استان ...</label>
        <Multiselect
          class="Multiselect px-2"
          v-model="provinceValue"
          placeholder=" "
          :searchable="true"
          :create-option="true"
          :options="GetProvinces"
        />
      </span>
      <span class="w-[50%] flex flex-col mb-3">
        <label class="mt-4 mb-2" for="browser">شهر ...</label>
        <Multiselect
          class="Multiselect px-2"
          v-model="CityValue"
          placeholder=" "
          
          :searchable="true"
          :create-option="true"
          :options="gitCities"
        />
      </span>
    </article>
    <span class="flex flex-col">
      <label class="mt-4 mb-2" for="browser" >پزشک ...</label>

      <input
      placeholder="نام پزشک را وارد کنید ..."
        type="text"
        class="inputDoctor p-2 rounded-md "
        v-model="NameValue"
      />
    </span>
    <span class="flex flex-col mb-3">
      <label class="mt-4 mb-2" for="browser">تخصص ...</label>
      <Multiselect
        class="Multiselect px-2"
        v-model="ExpertiseValue"
        placeholder=" "
        :searchable="true"
        :create-option="true"
        :options="getSpecialities"
      />
    </span>
    
    <div class="flex items-start gap-7 mt-5">
      <div class="font-bold">جنسیت</div>
      <div class="flex gap-2">
        <input
          class="genderCheck"
          type="radio"
          name="sex"
          value="female"
          v-model="sex"
          id="women"
        />
        <label for="women">خانم</label>
      </div>
      <div class="flex gap-2">
        <input
          class="genderCheck"
          type="radio"
          name="sex"
          value="male"
          v-model="sex"
          id="man"
        />
        <label for="women">آقا</label>
      </div>
    </div>
    <div class="w-full mt-8 mb-3">
      <button @click="FilterDoc" class="btnFitsmart w-full">جستجو</button>
    </div>
  </section>
  <section v-else  >
    <DynamicSkeleton :height="'400px'" :width="'90%'" :borderRadius="'10px'" />
  </section>
  <!-- </form> -->
</template>
<script setup>
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;
import { useListDoctor } from "@/stores/listDoctor.js";
import { computed, onMounted, watch } from "vue";
import Multiselect from "@vueform/multiselect";
import { ref } from "vue";
import {useRoute , useRouter} from "vue-router";



//request for city
import { useCity } from "@/stores/city.js";
const StoreCity = useCity();
let gitCities = computed(() => {
  return StoreCity.getCity;
});

//requst Specialities for filter
import { useSpecialities } from "@/stores/specialities.js";
const storeSpecialities = useSpecialities();
let getSpecialities = computed(() => {
  return storeSpecialities.getSpecialitiesVar;
});
onMounted(() => {
  storeSpecialities.getSpecialitiesFromServer();
});

//requst Provinces for filter
import { useProvinces } from "@/stores/provinces.js";
const Storeuseprovinces = useProvinces();
let GetProvinces = computed(() => {
  return Storeuseprovinces.getProvinces;
});
onMounted(() => {
  Storeuseprovinces.getProvincesFromServer();
});

//تعریف متغیر ها برای گرفتن اطلاعات فیلتر
let CityValue = ref("");
let provinceValue = ref("");
let ExpertiseValue = ref("");
let NameValue = ref("");
let sex = ref("");
const store = useListDoctor();

watch(provinceValue, (newValue) => {
  if (newValue !== "") {
    StoreCity.getCityFromServer(newValue);
  }
});

// //after click on btnSearch save information in Object
// function FilterDoc() {
//   let ObjFilter = {
//     name: NameValue.value,
//     province_id: provinceValue.value,
//     city_id: CityValue.value,
//     speciality_id: ExpertiseValue.value,
//     gender: sex.value,
//   };
//   store.getDoctorListFromServer(ObjFilter);
// }

let router = useRouter();
function FilterDoc(){
  router.push({name:'ListDoctor',query:{
    name: NameValue.value,
    province_id: provinceValue.value,
    city_id: CityValue.value,
    speciality_id: ExpertiseValue.value,
    gender: sex.value,
}})
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
/* .filterDoctor .multiselect {
  border: 1px solid #114db471;
}

.multiselect .is-active {
  border: 2px solid blue;
}

.multiselect {
  @apply text-[11px];
} */

.main {
  background-color: #e5f0f9;
  border: 1px solid #114db471;
}

.inputDoctor{
  border: none;
}
.inputDoctor:focus{
  outline: 1px solid rgb(147 197 253 );
}
</style>
