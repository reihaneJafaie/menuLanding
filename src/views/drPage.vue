<template>
     <Titles 
     v-if="  getinformationDr && getinformationDr.first_name  && getinformationDr.last_name" :title="getinformationDr.first_name + ' '+getinformationDr.last_name" :subtitle="' لیست پزشکان '" :routrPath1="'/list-doctor'" :routrPath2="`${getinformationDr.id}`"  :titlePage2="getinformationDr.first_name + ' ' + getinformationDr.last_name" />
     <div v-else class="w-full flex flex-col justify-center items-center">
      <DynamicSkeleton class="my-2" :height="'40px'" :width="'20%'" :borderRadius="'10px'" />
      <DynamicSkeleton class="my-2" :height="'20px'" :width="'30%'" :borderRadius="'10px'" />
     </div>
    <section class="containerFitsmart mt-14">
        <drDetail v-if="getinformationDr"  :informationDr="getinformationDr" />
        <div v-else class="bg-white shadowBox p-5 rounded-xl flex flex-col xl:flex-row mt-8 xl:mt-16">
          <div class="w-full xl:w-[20%]">
            <DynamicSkeleton :height="'100%'" :width="'90%'" :borderRadius="'10px'" />
          </div>
         <div class="flex  flex-col justify-center w-full xl:w-[80%] px-0 xl:px-5 ">
          <div class=" flex justify-between border-b-2 py-5 items-center">
            <DynamicSkeleton :height="'40px'" :width="'30%'" :borderRadius="'10px'" />
            <div class="flex gap-x-1 xl:gap-x-3">
              <DynamicSkeleton :height="'50px'" :width="'50px'" :borderRadius="'10px'" />
              <DynamicSkeleton :height="'50px'" :width="'50px'" :borderRadius="'10px'" />
            </div>

          </div>
          <div class="flex flex-col gap-x-4   xl:flex-row xl:justify-between  pt-4">
            <div class="w-[75%]">
              <DynamicSkeleton class="mb-3" :height="'20px'" :width="'30%'" :borderRadius="'10px'" />
              <DynamicSkeleton class="mb-3" :height="'20px'" :width="'30%'" :borderRadius="'10px'" />

              <DynamicSkeleton class="mb-3" :height="'20px'" :width="'90%'" :borderRadius="'10px'" />
              <DynamicSkeleton class="mb-3" :height="'20px'" :width="'90%'" :borderRadius="'10px'" />
              <DynamicSkeleton class="mb-3" :height="'20px'" :width="'90%'" :borderRadius="'10px'" />
              
              
            </div>
            <div class="w-full xl:w-[25%] mt-5 xl:mt-0  flex flex-col justify-center items-center">
              <DynamicSkeleton class="my-5" :height="'30px'" :width="'90%'" :borderRadius="'10px'" />
              <DynamicSkeleton class="mb-5" :height="'30px'" :width="'90%'" :borderRadius="'10px'" />
              <DynamicSkeleton class="mb-5" :height="'30px'" :width="'90%'" :borderRadius="'10px'" />
             
            </div>
            
          </div>
         </div>
        </div>
        <detailsDrTab v-if="getinformationDr " :tabDr="getinformationDr" />
        <div v-else>
          <DynamicSkeleton class="mt-12" :height="'70px'" :width="'100%'" :borderRadius="'10px'" />
          <DynamicSkeleton class="mt-5" :height="'250px'" :width="'100%'" :borderRadius="'10px'" />
        </div>
    </section>
</template>
<script setup>
import drDetail from "@/components/pageDr/drDetail.vue"
import Titles from "@/components/shared/titles.vue";
import detailsDrTab from "@/components/pageDr/detailsDrTab.vue";
import DynamicSkeleton from "@/components/shared/DynamicSkeleton.vue" ;


import {usedetailDoctor} from "@/stores/pageDr.js"
import { computed , onMounted } from "vue";
import { useRoute } from "vue-router";
let route = useRoute()
let store = usedetailDoctor()
let getinformationDr = computed(() =>{
  return store.getDetailDoctor
})
onMounted(() =>{
  if(route.params.id){
    store.getDetailDoctorFromServer(route.params.id)
  }
 
})
// console.log(getinformationDr.value)



</script>
<style scoped>




</style>
