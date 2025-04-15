<template>
  <section class="bg-gradinet lg:h-auto  h-[680px] relative py-2 px-5 w-full mt-56 mb-32">
    <article class="lg:w-[80%] w-full   mx-auto flex  lg:flex-row flex-col justify-between">
      <div class="py-10 xl:w-3/6 w-full">
        <h1 class=" lg:text-xl text-lg font-[80] md:w-[80%] w-full  text-white leading-[60px]">
          نیاز به <strong class="font-bold">مشاوره</strong> دارید ؟ شماره تماس خود را وارد کنید تا به زودی با شما <strong class="font-bold">تماس</strong> بگیریم
        </h1>
        <form @submit.prevent="consultations" action="" class="mt-7 flex mx-auto  justify-center">
          <input
            type="text"
            class="rounded-full z-20 bg-input w-[80%] border-2 py-2 px-3 inputEmail"
            placeholder="شماره تماس خود را وارد کنید ..."
            v-model="number"
          />
          <input
            type="submit"
            class="rounded-full z-20 bg-orange-400 border-2 text-white py-2 px-7 rou mr-2"
            value="ارسال"
          />
        </form>
      </div>
      <figure class="xl:w-3/6 w-full bg-transparent ">
        <img
          class="men  z-20"
          src="../../assets/images/Home/Newsletter.svg"
          alt=""
        />
        <img
          class="absolute lg:bottom-[53%] bottom-[20%] z-10 left-[11%]"
          src="../../assets/images/Home/pattern.svg"
          alt=""
        />
        <img
          class="cycle z-10"
          src="../../assets/images/Home/Ellipse400.svg"
          alt=""
        />

        <img
          class="absolute bottom-[0%] z-10 left-[30%] lg:-[-20%] xl:block hidden  "
          src="../../assets/images/Home/line.svg"
          alt=""
        />
      </figure>
    </article>
  </section>
</template>
<script setup>
import {useConsultations} from '@/stores/consultations.js';
import router from "@/router";
import {ref} from 'vue'
const store = useConsultations();
const formdata = new FormData();
let number = ref("")


async function consultations(){
formdata.append("mobile" ,number.value );
await store.getConsultationsFromServer(formdata);

}


// async function verify() {
//   const numbersString = otpValue.value.join("");
//   // alert( props.mobile) // ???????????????
//   formdata.append("mobile", props.mobile);
//   formdata.append("code", numbersString);
//   let res = await store.getVerifyFromServer(formdata);
//   if (res) {
//     emit("verifyEmit", {
//       code: numbersString,
//       verifyEmitDisplay: false,
//       RegisterEmit: true,
//     });
//   }
// }

</script>
<style scoped>
.bg-gradinet {
  background: rgb(27, 54, 98);
  background: linear-gradient(
    90deg,
    rgba(27, 54, 98, 1) 0%,
    rgba(6, 83, 209, 1) 20%,
    rgba(6, 84, 211, 1) 80%,
    rgba(27, 54, 98, 1) 100%
  );
}
.bg-input {
  background-color: rgba(255, 255, 255, 0.658);
}
.bg-input::placeholder {
  color: white;
}
.men{
    position: absolute;
    left: 10%;
    bottom: 0%;
}
.cycle{
    position: absolute;
    left: 8%;
    bottom: 0%;
}

.inputEmail:focus{
  outline: none;
}
@media screen and (max-width: 1024px) {
    .men{
    position: absolute;
    left: 50%;
    transform: translateX(-50%); 
    }
    .cycle{
      position: absolute;
    left: 50%;
    transform: translateX(-50%); 
}

}
</style>
