<template>

  <section v-if="gitCities && getSpecialities" 
    class="displaynone bg-white xl:w-[110%] w-[90%] mx-auto py-3 border rounded-xl mt-10 shadow-2xl"
  >
    <div class="xl:flex text-xs justify-between items-center gap-x-3 px-2">
      <div
        class="flex flex-col w-full px-2 border-b-[1px] xl:border-b-[0px] xl:border-l-[1px] border-l-[0px] border-gray-300"
      >
        <label class="pb-2 text-color-theme font-bold text-sm " for="browser">
          نام پزشک ...</label
        >
        <input
        type="text"
        class="p-2 rounded-md  pl-1 nameDoc"
        v-model="doctor"
        id="Doctor"
          placeholder="دکتر ... "
      />
      </div>
      <div
        class="flex flex-col w-full px-2 border-b-[1px] xl:border-b-[0px] xl:border-l-[1px] border-l-[0px] border-gray-300"
      >
        <label class="py-2 text-color-theme font-bold text-sm" for="browser"
          >شهر ...</label
        >
        <Multiselect
          class="pl-1 Multiselect city"
          v-model="city"
          placeholder="انتخاب کنید ...."
          :searchable="true"
          :create-option="true"
          :options="gitCities"
        />
      </div>
      <div
        class="flex flex-col w-full px-2 border-b-[0px] xl:border-b-[0px] xl:border-l-[1px] border-l-[0px] border-gray-300"
      >
        <label class="py-2 text-color-theme font-bold text-sm" for="browser">
          تخصص ...</label
        >
        <Multiselect
          class="pl-1 Multiselect"
          v-model="specialities"
          placeholder=" انتخاب کنید ..."
          :searchable="true"
          :create-option="true"
          :options="getSpecialities"
        />
      </div>
      <button
        @click="searchDoctor"
        class="shadow-2xl xl:mt-0 mt-5 xl:w-auto w-full h-[40px] px-10 py-2 rounded-2xl text-center text-sm text-white font-normal bg-gradient-to-t from-blue-950 via-blue-800 to-blue-600"
      >
        جستجو
      </button>
    </div>
  </section>
  <section v-else  >
    <DynamicSkeleton :height="'100px'" :width="'100%'" :borderRadius="'10px'" />
  </section>
  
</template>
<script setup>
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;
import Multiselect from "@vueform/multiselect";
let value = null;
import { computed, onMounted } from "vue";
import { ref } from "vue";
import {useRoute , useRouter} from "vue-router";
import { useCity } from "@/stores/city.js";
import { useSpecialities } from "@/stores/specialities.js";
let city = ref("");
let doctor = ref("");
let specialities = ref("");
let route = useRoute();
let router = useRouter();

//request for city
const StoreCity = useCity();
let gitCities = computed(() => {
  return StoreCity.getCity;
});
//requst Specialities for filter
const storeSpecialities = useSpecialities();
let getSpecialities = computed(() => {
  return storeSpecialities.getSpecialitiesVar;
});

function searchDoctor(){
  router.push({name:'ListDoctor',query:{
  name : doctor.value,
  province_id:"",
  city_id :  city.value ,
  speciality_id : specialities.value,
  gender:"",
}
})
}

onMounted(() => {
  StoreCity.getCityFromServer();
  storeSpecialities.getSpecialitiesFromServer();
});



</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>

.displaynone{
   display: none;
}

#Doctor::placeholder {
  color: rgb(30 58 138);
  font-weight: 300;
  font-size: 12px;
}
.multiselect .is-active {
  border: 2px solid blue;
}

.multiselect {
  @apply text-[11px];
}
.Multiselect input {
  padding: 0px;
}

.nameDoc:focus{
  outline:1px solid #69b6fff5; ;
}

.Multiselect .multiselect-caret {
  width: 15px;
  height: 15px;
  background-color: var(--ms-caret-color, #010f88);
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 var(--ms-px, 0.875rem) 0 0;
  -webkit-mask-image: url("../mainBanner/../../../assets/images/Banner/down.svg");
  mask-image: url("../mainBanner/../../../assets/images/Banner/down.svg");
  pointer-events: none;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.3s;
  z-index: 10;
}

.city .multiselect-caret {
  width: 20px;
  height: 20px;
  background-color: var(--ms-caret-color, #010f88);
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 var(--ms-px, 0.875rem) 0 0;
  -webkit-mask-image: url("../mainBanner/../../../assets/images/Banner/city.svg");
  mask-image: url("../mainBanner/../../../assets/images/Banner/city.svg");
  pointer-events: none;
  position: relative;
  transform: rotate(0deg);
  transition: transform 0.3s;
  z-index: 10;
}
</style>






