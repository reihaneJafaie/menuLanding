<template>
  <section v-if="AddressDr" class=" flex flex-col xl:flex-row w-full gap-x-6 my-6">
    <div v-if="AddressDr.map" v-html="AddressDr.map" class="w-full xl:w-[50%] ">
     
    </div>
    <section class="w-full xl:w-[50%] ">
      <div>
        <h3 class="text-xl font-bold text-gray-600 my-6">آدرس مطب دکتر</h3>
        <div >
          <div class="flex gap-x-2 mb-6">
            <Location />
            <p >
                <span class="ml-2"> آدرس :</span>
              {{AddressDr.address }}
              </p>
          </div>
          <div class="flex gap-x-2 mb-6">
            <call />
           <div class="flex gap-x-2" >
            <span> شماره تماس :</span>
            <p dir="ltr"> {{ AddressDr.telephone }}</p>
           </div>
          </div>
        </div>
      </div>
      <!-- <div>
        <h3 class="text-xl font-bold text-gray-600 mb-6 mt-12">آدرس محل خدمت دکتر</h3>
        <div >
          <div class="flex gap-x-2 mb-6">
            <Location />
            <p >
                <span class="ml-2"> آدرس :</span>
                گلستان گرگان ویلاشهر ویلای 14 مجتمع گیتی
            </p>
          </div>
          <div class="flex gap-x-2 mb-6">
            <call />
           <div class="flex gap-x-2" >
            <span> شماره تماس :</span>
            <p dir="ltr">017 6578264</p>
           </div>
          </div>
        </div>
      </div> -->
    </section>
  </section>
</template>
<script setup>
import Location from "@/components/icon/location.vue";
import call from "@/components/icon/call.vue";

const props = defineProps({
  AddressDr:Object
})

</script>
