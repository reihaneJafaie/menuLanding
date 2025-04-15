<template>
  <section class="w-full">
    <h2 class="text-xl font-bold my-6">نظرات و تجربه های کاربران</h2>
    
    <div
     v-if="commentsPost && commentsPost.length"
      v-for="item in commentsPost"
      class="flex items-center gap-x-3 mb-5 bg-white shadow-lg p-4 border border-blue-200 my-14"
    >
      <figure class="hidden xl:block  w-[10%] rounded-full">
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
          {{ item.body }}
        </p>
      </div>
    </div>

    <div v-else>
      <p class=" text-color-theme text-xl font-bold p-4">هنوز هیچ نظری ثبت نشده است .</p>
    </div>
   
  </section>
</template>
<script setup>


const props = defineProps({
  commentsPost:Array,
})
// console.log(props.commentPost)
</script>
