<template>
  <section class="containerFitsmart pb-20">
    <Titles :title="'ثبت نام پزشکان'" :subtitle="' ثبت نام پزشکان'" />
    <loginRegister v-if="loginRegisterDisplay" @loginRegisterEmit="loginRegisterEmit"   />
    <verify v-if="verfiyDisplay"  :mobile="numberDoctor" @verifyEmit="codeVerify"  />
    <SigninDr v-if="signInDisplay"  :verifyNum="verifyNumber" :mobile="numberDoctor"  />

  </section>
</template>
<script setup>
import Titles from "@/components/shared/titles.vue";
import { ref } from "vue";
import { useregisterLogin } from "@/stores/register_login.js";
import verify from "@/components/shared/verify.vue"
import SigninDr from "@/components/shared/signinDr.vue";
import loginRegister from "@/components/shared/loginRegister.vue"

//برای مدیریت دیسپلی این 3 کامپونت
let loginRegisterDisplay =ref(true) ;
let verfiyDisplay = ref(false) ;
let signInDisplay = ref(false) ;
// ذخیره سازی شماره تلفن
let numberDoctor =ref("");
//فرستادن کد وریفای برای بخش ثبت نام 
let verifyNumber = ref("") ;



var newData ;
function loginRegisterEmit(m){
  newData = m;
  numberDoctor.value = newData.mobileDoc;
  verfiyDisplay.value = newData.verifyDisplayTrue;
  loginRegisterDisplay.value = newData.loginRegesterDisplayFalse;
}

// گرفتن کد از وریفای از طریق امیت
var newData2 ;
function codeVerify(verifyEmit){
  newData2 = verifyEmit;
  verifyNumber.value = newData2.code;
  verfiyDisplay.value = newData2.verifyEmitDisplay;
  signInDisplay.value = newData2.RegisterEmit
}

</script>



