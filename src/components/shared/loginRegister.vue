<template>
  <article class="">
    <form
      @submit.prevent="getNumber"
      class="formShadow relative w-full xl:w-[40%] mx-auto my-16 p-12 text-center"
    >
      <h4 class="text-blue-800 font-bold text-xl mb-6">ثبت نام پزشکان</h4>
      <h6 class="text-center text-sm mb-8">
        برای استفاده از تمام امکانات فیت اسمارت لازم است وارد شوید، برای ورود
        شماره موبایل خود را وارد کنید.
      </h6>
      <div class="flex my-5">
        <input
          ref="inputPhone"
          dir="ltr"
          class="w-full border p-2 rounded-md mx-1"
          type="text"
          v-model="numberDoctor"
          placeholder="0912*********"
        />
      </div>
      <input
        
        :disabled="isSubmitting"
        :class="{'btnFitsmart' : !isSubmitting  , 'disabled-style' : isSubmitting}"
        class="my-5"
        type="submit"
        value="ثبت نام پزشکان"
      />
      <Patternabout2 class="pattern2" />
      <Patternabout class="pattern" />
    </form>
  </article>
</template>
<script setup>
import Patternabout from "@/components/icon/patternabout.vue";
import Patternabout2 from "@/components/icon/patternabout2.vue";
import { ref } from "vue";
import { useregisterLogin } from "@/stores/register_login.js";
import { computed, onMounted, watch } from "vue";
import Swal from "sweetalert2";
const emit = defineEmits();
let isSubmitting = ref(false)
// ذخیره سازی شماره تلفن
let numberDoctor = ref("");

// ساخت یک شی برای فرستادن به api
const formdata = new FormData();

const store = useregisterLogin();

async function getNumber() {
  formdata.append("mobile", numberDoctor.value);
  isSubmitting.value = true;
  let res = await store.getRegisterLoginFromServer(formdata);

  if (res) {
    emit("loginRegisterEmit", {
      mobileDoc: numberDoctor.value,
      verifyDisplayTrue: true,
      loginRegesterDisplayFalse: false,
    });
  }
  isSubmitting.value = false;
}
let inputPhone = ref(null)
onMounted(()=>{
  inputPhone.value.focus()
})
</script>

<style scoped>
.pattern {
  position: absolute;
  bottom: -10%;
  left: -15%;
  z-index: -1;
}

.pattern2 {
  position: absolute;
  bottom: -20%;
  left: -20%;
  z-index: -1;
}
.disabled-style{
  @apply shadow-2xl  w-full h-[40px] px-5 py-2 rounded-2xl text-center text-sm text-white font-normal bg-gradient-to-t from-blue-700 via-blue-500 to-blue-400
}
@media screen and (max-width: 1024px) {
  .pattern {
    position: absolute;
    bottom: -10%;
    left: -10%;
    z-index: -1;
  }

  .pattern2 {
    position: absolute;
    bottom: -20%;
    left: -10%;
    z-index: -1;
  }
}
</style>
