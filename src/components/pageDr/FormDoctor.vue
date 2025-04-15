<template>
  <section class="mt-16">
    <h3 class="text-blue-800 my-3 text-xl font-bold">نظرات خودرا ارسال کنید</h3>
    <h6 class="text-gray-600">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
    </h6>
    <form
      @submit.prevent="sendFormDoctor"
      id="comment"
      action=""
      class="w-full"
    >
      <div class="w-full justify-between flex mt-8 xl:mt-6">
        <div class="flex flex-col w-[50%] mt-15">
          <label
            for="nameForCommentblog"
            class="text-base font-bold text-color-theme px-3"
          >
            نام و نام خانوادگی :</label
          >
          <input
            v-model="nameRef"
            id="nameForCommentblog"
            name="name"
            :class="{ showError: !name && showErrorName }"
            class="shadowform border-1 rounded-md  ml-2 p-4 bg-white mb-6 mt-2 w-full"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
        </div>

        <div class="flex flex-col w-[50%]">
          <label class="text-base font-bold text-color-theme px-3" for="email">
            ایمیل :<span class="text-gray-500 text-sm font-light px-2"
              >اختیاری*</span
            >
          </label>
          <input
            v-model="emailRef"
            name="email"
            id="email"
            class="shadowform border-1 rounded-md mr-2 p-4 bg-white mb-6 mt-2"
            type="email"
            placeholder=" ایمیل "
          />
        </div>
      </div>
      <textarea
       placeholder="نظر خود را وارد کنید...."
        v-model="bodyRef"
        :class="{ 'showError ': !comment && showErrorBody }"
        class="shadowform w-full p-3 leading-8 rounded-md"
        name="comment"
        id=""
        cols="30"
        rows="6"
      ></textarea>
      <input type="submit" class="btnFitsmart mt-4 float-end" value="ارسال" />
    </form>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { useFormDoctor } from "@/stores/formDoctor.js";
let store = useFormDoctor();
let nameRef = ref("");
let emailRef = ref("");
let bodyRef = ref("");
let showErrorName = ref(false);
let showErrorBody = ref(false);
let props = defineProps({
  idDoc: String,
});

function sendFormDoctor() {
  if (!nameRef.value) {
    Swal.fire({
      icon: "error",
      text: "کاربر گرامی لطفا نام و نام خانوادگی خود را وارد کنید",
    });
    showErrorName.value = true;
    return;
  }
  if (!bodyRef.value) {
    Swal.fire({
      icon: "error",
      text: "کاربر گرامی لطفا نظر خود را بنویسید",
    });
    showErrorName.value = false;
    showErrorBody.value = true;
  }
  let fd = new FormData(document.forms["comment"]);
  console.log(fd);
  store
    .getFormDoctorFromServer(fd, props.idDoc)
    .then((res) => {
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        // خالی کردن مقادیر ورودی‌ها
        nameRef.value = "";
        emailRef.value = "";
        bodyRef.value = "";
      } else {
        Swal.fire({
          icon: "error",
          text: res.data.message,
        });
      }
    })
    .catch((error) => {
      console.error("There was an error!", error);
      Swal.fire({
        icon: "error",
        text: "خطایی رخ داد، لطفا دوباره تلاش کنید",
      });
    });
}
</script>
<style scoped>
.shadowform {
  box-shadow: 0px 4px 44px 0px #7d8da738;
}
.showError {
  border: 1px solid red;
}
</style>
