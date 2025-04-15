<template>
  <section v-if="informationDr" class="bg-white shadowBox p-5 rounded-xl flex flex-col xl:flex-row mt-8 xl:mt-16">
    <figure v-if=" informationDr && informationDr.image &&  informationDr.image.url" class="w-full xl:w-[20%]">
      <img class="rounded-xl w-full" :src="informationDr.image.url" />
    </figure> 
    <figure v-else  class="w-full xl:w-[20%]">
      <img class="rounded-xl w-full " src="../../assets/images/fitsmart/DefaultImgDoctor.jpg" alt="">
    </figure>
    <div class="flex  flex-col justify-center w-full xl:w-[80%] px-0 xl:px-5 ">
      <div class=" flex justify-between border-b-2 py-5 items-center">
        <div>
          <h3 class=" text-base xl:text-xl font-bold  text-gray-700">
          دکتر 
          {{ informationDr.first_name }}
          {{ informationDr.last_name  }}  
          </h3>
          <h4 class=" block xl:hidden text-xs mt-2 text-gray-700  ">{{ informationDr.speciality.title}}  </h4>
        </div>
        
        
        <div class="flex gap-x-1 xl:gap-x-3">
          <span class="p-2 xl:p-4 shadowIcon rounded-lg cursor-pointer ">
            <shared @click="share" />
          </span>
          <span class="p-2 xl:p-4 shadowIcon rounded-lg cursor-pointer  ">
            <heart @click="likeDoctor"
             />
          </span>
        </div>
      </div>
      <div class="flex flex-col gap-x-4   xl:flex-row xl:justify-between  pt-4">
        <div class="w-[75%]">
          <h4 class="text-base hidden xl:block">{{ informationDr.speciality.title}}   </h4>
          <div class="flex gap-x-1 my-5 items-center">
            <Starfull v-for="FullStar in informationDr.rate" />
        <Starempty v-for="emptyStar in 5 - informationDr.rate" />
            <p class="text-xs mr-1">({{ informationDr.rates_count}})</p>
          </div>
          <div v-html="informationDr.about" class="v-htmlStyle text-sm text-gray-600 line-clamp-4">
        
          </div>
        </div>
        
        <div class="w-full xl:w-[25%] mt-5 xl:mt-0  ">
          <ul class="flex flex-col gap-y-4 justify-around  h-full text-sm xl:text-base">
            <li class="flex gap-x-2">
              <Location />
              <p>
                {{ informationDr.province.name }} 
                {{ informationDr.city.name }} 
                
              </p>
            </li>
            <li class="flex gap-x-2" v-if="informationDr && informationDr.work_experience">
              <medal />
              <p>
                {{informationDr.work_experience }}
                سال سابقه</p>
            </li>
            <li class="flex gap-x-2">
              <call />
              <p dir="ltr"> {{ informationDr.telephone }}</p>
            </li>
            <li class="flex gap-x-2">
              <heart />
              <p>{{ informationDr.likers_count}} لایک</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import shared from "@/components/icon/shared.vue";
import Starempty from "../icon/starempty.vue";
import Starfull from "../icon/starfull.vue";
import Location from "@/components/icon/location.vue";
import medal from "@/components/icon/medal.vue";
import call from "@/components/icon/call.vue";
import heart from "@/components/icon/heart.vue";
import Swal from "sweetalert2"

const props = defineProps({
  informationDr : Object
});
console.log(props.informationDr)

function share(){
  if(navigator.share){
    navigator.share({
      title: props.informationDr.speciality.title,
      text: 'این دکتر رو بهت پیشنهاد میکنم',
      url: 'https://' + window.location.host + '/page-dr/' + props.informationDr.id,
    })
  }
}

function likeDoctor(){
  Swal.fire({
  text: "برای  پسند کردن دکتر باید اول در سایت ثبت نام کنید ",
  icon: "warning"
});
}





</script>
<style scoped>
.shadowIcon{
  box-shadow: 0px 4px 13px 0px #77777740;

}
.shadowBox{
  box-shadow: 0px 0px 84px 0px #6182B966;

}


</style>
