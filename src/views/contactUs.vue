<template>
  <section>
    <Teleport to="body" v-if="!getSetting">
      <Loader />
    </Teleport>
  </section>
  <section v-if="getSetting && getSetting.about" class="">
    <Titles :title="'تماس با ما'" subtitle="تماس با ما" />

    <section class="flex flex-col xl:flex-row mt-20 w-[80%] mx-auto z-20">
      <article>
        <h4 class="text-3xl text-blue-800 font-bold">
          ما همیشه مشتاق شنیدن از شما هستیم!
        </h4>
        <ul class="">
          <li class="mt-5">
            <h4 class="text-blue-800 text-xl mb-3">آدرس :</h4>
            <p class="text-base">{{ getSetting.contact.address }}</p>
          </li>
          <li class="mt-5">
            <h4 class="text-blue-800 text-xl mb-3">تلفن تماس :</h4>
            <p class="text-base">{{ getSetting.contact.phone_call }}</p>
          </li>
          <li class="mt-5">
            <h4 class="text-blue-800 text-xl mb-3">پست الکترونیک :</h4>
            <email class="text-base">{{ getSetting.contact.email }}</email>
          </li>
        </ul>
      </article>
      <article class="w-full xl:w-[50%] flex justify-end relative mt-32">
        <Patternabout class="pattern1" />
        <Patternabout2 class="pattern" />
        <form
          id="contactUs"
          @submit.prevent="sendFormBlog()"
          action=""
          class="py-12 px-4 bg-white w-full xl:w-[65%]"
        >
          <h5 class="text-blue-800 text-2xl mb-3 font-bold">در تماس باشید</h5>
          <h6 class="text-base">
            برای رزرو جلسه مشاوره مشاور این فرم را پر کنید.
          </h6>
          <div class="my-5">
            <input
              name="name"
              v-model="nameRef"
              type="text"
              placeholder="اسم شما"
              class="w-full p-2 mb-2 border-b"
            />
            <input
              name="phone_number"
              v-model="numberRef"
              type="text"
              placeholder="شماره تماس خود را وارد کنید"
              class="w-full p-2 mb-2 border-b"
            />
            <input
              name="subject"
              v-model="subjectRef"
              type="text"
              placeholder="موضوع"
              class="w-full p-2 mb-2 border-b"
            />
            <textarea
              v-model="messageRef"
              name="message"
              cols="10"
              placeholder="پیغام تو"
              class="w-full p-2 mb-2 border-b"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btnFitsmart float-end px-10 py-[5px] rounded-lg text-white"
          >
            ارسال
          </button>
        </form>
      </article>
    </section>
    <section class="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11377.363904457461!2d54.463951690168706!3d36.85050056856544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f833641bf98c4e7%3A0x66ad9fc735010b89!2z2YXYsdmD2LIg2KLZhdmI2LLYtCDZgdmG2Yog2Ygg2K3YsdmB2Ycg2KfZiiDYrtmI2KfZh9ix2KfZhiDar9ix2q_Yp9mG!5e0!3m2!1sfa!2sde!4v1709124984990!5m2!1sfa!2sde"
        class="w-full map"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </section>
</template>
<script setup>
import Patternabout from "@/components/icon/patternabout.vue";
import Patternabout2 from "@/components/icon/patternabout2.vue";
import Titles from "@/components/shared/titles.vue";
import { useSetting } from "@/stores/setting.js";
import { computed, onMounted } from "vue";
import { ref } from "vue";
import { useContact } from "@/stores/contactUs.js";
import Swal from "sweetalert2";
import Loader from "@/components/shared/Loader.vue";
let storeFrom = useContact();
const store = useSetting();
let getSetting = computed(() => {
  return store.geterSettingFooter;
});
let nameRef = ref("");
let numberRef = ref("");
let subjectRef = ref("");
let messageRef = ref("");
// let showErrorName = ref(false);
// let showErrorBody = ref(false);

function sendFormBlog() {
  if (!nameRef.value) {
    Swal.fire({
      icon: "error",
      text: "کاربر گرامی لطفا نام و نام خانوادگی خود را وارد کنید",
    });
    // showErrorName.value = true;
    return;
  }
  if (!numberRef.value) {
    Swal.fire({
      icon: "error",
      text: "کاربر گرامی لطفا شماره تماس خود را وارد کنید",
    });
    // showErrorName.value = false;
    // showErrorBody.value = true;
  }
  if (!subjectRef.value) {
    Swal.fire({
      icon: "error",
      text: "کاربر گرامی لطفا موضوع مدنظر خود را وارد کنید",
    });
  }
  if (!messageRef.value) {
    Swal.fire({
      icon: "error",
      text: "کاربر گرامی لطفا پیغام مدنظر خود را وارد کنید",
    });
  }
  let fd = new FormData(document.forms["contactUs"]);
  // console.log(fd);
  storeFrom
    .getContactFromServer(fd)
    .then((res) => {
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
        });
        // خالی کردن مقادیر ورودی‌ها
        nameRef.value = "";
        numberRef = "";
        subjectRef = "";
        messageRef = "";
      } else {
        Swal.fire({
          icon: "error",
          text: res.data.message,
        });
      }
    })
    .catch((e) => {
      console.error("There was an error!", e);
      Swal.fire({
        icon: "error",
        text: "خطایی رخ داد، لطفا دوباره تلاش کنید",
      });
    });
}

onMounted(() => {
  store.getSettingFromServer();
});
</script>
<style scoped>
form {
  box-shadow: 0px 4px 44px 0px #7d8da738;
  position: relative;
  z-index: 10;
}

.pattern {
  position: absolute;
  top: -15%;
  left: -15%;
  z-index: -1;
}
.pattern1 {
  position: absolute;
  top: -20%;
  left: -5%;
  z-index: -1;
}
.map {
  transform: translateY(-50px);
}
</style>
