<template>
  <section>
    <h2 class="text-xl font-bold my-6">نظرات و تجربه های کاربران</h2>
    
    <div
      v-if="comments.comments.length>0"
      v-for="item in comments.comments"
      class="flex items-center gap-x-6 mb-5 bg-white shadow-lg p-4 border border-blue-200 "
    >
      <figure class="hidden xl:block  w-[5%] rounded-full">
        <img
          class="w-full rounded-full shadow"
          src="../../assets/images/fitsmart/DefaultImgDoctorComment.jpg"
          alt=""
        />
      </figure>
      <div class="text-gray-600">
        <div class="flex items-center justify-between">
          <figure class="block xl:hidden  w-[60px] rounded-full">
            <img
              class="w-full rounded-full"
              src="../../assets/images/test/doctor.png"
              alt=""
            />
          </figure>
          <div class="flex flex-col xl:flex-row xl:items-center  gap-x-5">
            <h5 class="text-sm xl:text-lg font-bold xl:font-thin">{{ item.name }} </h5>
          </div>
          <div class="text-sm xl:text-base mx-2 my-4">
            <time datetime=" ">{{ new Date(item.created_at).toLocaleDateString("fa-IR") }}</time>
          </div>
        </div>

        <p>
          {{ item.comment }}
        </p>
      </div>
    </div>

    <div v-else>
      <p class=" text-color-theme text-xl font-bold p-4">هنوز هیچ نظری ثبت نشده است .</p>
    </div>
    <FormDoctor :idDoc="comments.id" class="w-full mx-auto xl:w-[50%] mt-10 " />
  </section>
</template>
<script setup>
import Starempty from "../icon/starempty.vue";
import Starfull from "../icon/starfull.vue";
import FormDoctor from "../pageDr/FormDoctor.vue";

const props = defineProps({
  comments:Object,
})
// alert(props.comments.id)
</script>
