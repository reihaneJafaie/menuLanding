<template>
  <section>
    <article class="py-16">
      <form
        @submit.prevent="registerDoctor"
        action=""
        class="formShadow relative w-[85%] xl:w-[50%] mx-auto my-16 p-12 text-center"
      >
        <h4 class="text-blue-800 font-bold text-xl mb-6">ثبت نام پزشکان</h4>
        <h6 class="text-center text-sm my-8">
          صرفا در صورتی که پزشک یا درمانگر هستید و کد نظام پزشکی دارید فرم زیر
          را برای ثبت نام در سایت پر کنید. همکاران ما در اولین زمان ممکن برای
          تکمیل اطلاعات و نمایش آن بر روی سامانه با شما تماس می گیرند.
        </h6>
        <div class="flex flex-col gap-y-4 my-5">
          <div class="w-full flex items-center gap-x-2">
            <label
              for="MedicalSystemCode"
              class="text-nowrap w-[16%] text-start"
              >کد نظام پزشکی</label
            >
            <input
            autofocus
              v-model="MedicalLicenseNumber"
              type="text"
              class="border p-2 rounded-md mx-1 w-full"
              placeholder="کد نظام پزشکی خود را وارد کنید . "
            />
          </div>
          <div class="w-full flex items-center gap-x-2">
            <label
              for="MedicalSystemCode"
              class="text-nowrap w-[16%] text-start"
              >نام
            </label>
            <input
              v-model="FirtNameDoctor"
              type="text"
              class="border p-2 rounded-md mx-1 w-full"
              placeholder="نام خود را وارد کنید "
            />
          </div>
          <div class="w-full flex items-center gap-x-2">
            <label
              for="MedicalSystemCode"
              class="text-nowrap w-[15%] text-start"
              >نام خانوادگی
            </label>
            <input
              v-model="LastNameDoctor"
              type="text"
              class="border p-2 rounded-md mx-1 w-full"
              placeholder="نام خانوداگی خود را وارد کنید"
            />
          </div>
          <div class="w-full flex items-center gap-x-2">
            <label
              for="MedicalSystemCode"
              class="text-nowrap w-[15%] text-start"
              >رمز عبور
            </label>
            <input
              :class="{ 'showError ': showError }"
              v-model="password"
              type="password"
              class="border p-2 rounded-md mx-1 w-full"
              placeholder="******** "
            />
          </div>
          <div class="w-full flex items-center gap-x-2">
            <label
              for="MedicalSystemCode"
              class="text-nowrap w-[15%] text-start"
              >تکرار رمز عبور
            </label>
            <input
              :class="{ 'showError ': showError }"
              v-model="passwordConfrim"
              type="password"
              class="border p-2 rounded-md mx-1 w-full"
              placeholder="******** "
            />
          </div>
        </div>
        <div class="flex justify-end">
          <input type="submit" value="ارسال" class="btnFitsmart my-5 w-[25%]" />
        </div>

        <Patternabout2 class="pattern2" />
        <Patternabout class="pattern" />

        <Patternabout2 class="pattern3" />
        <Patternabout class="pattern4" />
      </form>
    </article>
  </section>
</template>
<script setup>
import Patternabout from "@/components/icon/patternabout.vue";
import Patternabout2 from "@/components/icon/patternabout2.vue";
import { ref } from "vue";
import { useRegister } from "@/stores/register.js";
import router from "@/router";
import Swal from "sweetalert2"
const props = defineProps(
  { mobile: String, default: "09112223344" },
  { verifyNum: String, default: "1234" }
);

const store = useRegister();
const formdata = new FormData();
let MedicalLicenseNumber = ref("");
let FirtNameDoctor = ref("");
let LastNameDoctor = ref("");
let password = ref("");
let passwordConfrim = ref("");
let showError = ref(false);
async function registerDoctor() {
  if (password.value === passwordConfrim.value) {
    formdata.append("first_name", FirtNameDoctor.value);
    formdata.append("last_name", LastNameDoctor.value);
    formdata.append("password", password.value);
    formdata.append("password_confirmation", passwordConfrim.value);
    formdata.append("mobile", props.mobile);
    formdata.append("code", props.verifyNum);
    formdata.append("medical_code", MedicalLicenseNumber.value);
    await store.getRegisterFromServer(formdata, router);
  } else {
    showError.value = true;
    Swal.fire({
          icon: "error",
          text: "رمز عبور و تکرار رمز عبور یکسان نیست ",
        });
  }
}
</script>
<style scoped>
.showError {
  border: 1px solid red;
}
.pattern {
  position: absolute;
  bottom: -10%;
  left: -13%;
  z-index: -1;
}

.pattern2 {
  position: absolute;
  bottom: -15%;
  left: -15%;
  z-index: -1;
}

.pattern4 {
  position: absolute;
  top: -10%;
  right: -13%;
  z-index: -1;
}

.pattern3 {
  position: absolute;
  top: -15%;
  right: -15%;
  z-index: -1;
}
label {
  @apply text-sm font-bold;
}

input {
  width: 80%;
}

@media screen and (max-width: 1024px) {
  .pattern {
    position: absolute;
    bottom: -10%;
    left: -5%;
    z-index: -1;
  }

  .pattern2 {
    position: absolute;
    bottom: -15%;
    left: -5%;
    z-index: -1;
  }

  .pattern4 {
    position: absolute;
    top: -10%;
    right: -13%;
    z-index: -1;
  }

  .pattern3 {
    position: absolute;
    top: -15%;
    right: -15%;
    z-index: -1;
  }
}
</style>
