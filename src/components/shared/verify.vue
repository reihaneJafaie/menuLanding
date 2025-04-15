


<template>
  <section>
    <article class="py-16">
      <form @submit.prevent="verify" action="" class="formShadow relative w-[85%] xl:w-[40%] mx-auto my-16 p-12 text-center">
        <h4 class="text-blue-800 font-bold text-xl mb-6">ثبت نام پزشکان</h4>
        <h6 class="text-center text-sm my-8">کد تایید ارسال شده به شماره تلفن همراه خود را وارد کنید.</h6>
        <div dir="ltr" class="verify">
          <v-otp-input
            ref="otpInput"
            input-classes="otp-input"
            :conditionalClass="['one', 'two', 'three', 'four']"
           
            :num-inputs="4"
            v-model="valOpt"
            :should-auto-focus="true"
            :should-focus-order="true"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
            :placeholder="['', '', '', '']"
          />
        </div>
        <div class="flex justify-end">
          <button class="btnFitsmart my-5 w-[25%]">ثبت نام پزشک</button>
        </div>
      </form>
    </article>
  </section>
</template>

<style>
.otp-input-container{
  display: flex;
    justify-content: space-between;
    gap: 12px;
}
.otp-input {
  border: 1px solid #ccc;
    height: 66px !important;
    /* width: -moz-fit-content; */
    width: 100%;
    border-radius: 5px;
    font-size: 3rem;
    text-align: center;
    padding: 5px;
    
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import VOtpInput from "vue3-otp-input";
import { useverify } from "@/stores/verify.js";

const emit = defineEmits("verifyEmit");
const valOpt = ref<string[]>(['', '', '', '']); // Initialize with empty strings for each OTP input
const store = useverify();
const formdata = new FormData();
const valueInput = ''

const props = defineProps({
  mobile: {
    type: String,
    default: "09112223344",
  },
});

// Function to handle completion of OTP input
const handleOnComplete = (value) => {
  console.log("OTP completed: ", value);
 verify(value)
};


const verify = async (val) => {
  formdata.append("mobile", props.mobile);
  formdata.append("code", val);
  
  let res = await store.getVerifyFromServer(formdata);
  if (res) {
    emit("verifyEmit", {
      code: val,
      verifyEmitDisplay: false,
      RegisterEmit: true,
    });
  }
};
</script>
