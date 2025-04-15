<template>
  <section class="w-[100%] bg-white menuMbile">
    <div class="border-b">
      <div class="flex items-center justify-between p-10">
        <span @click="closeMenu" class="rounded-full gg p-4 xsign">
          <X />
        </span>
        <router-link @click="closeMenu" to="/">
          <logo />
         </router-link>
      </div>
    </div>
    <ul class="flex flex-col gap-y-4 mt-10 p-10">
      <li
        v-for="item in menu"
        class="last:border-b-0 border-b"
      >
      <div class="flex justify-between text-base font-bold text-gray-700  pb-4">
        <router-link @click="closeMenu"  :to="item.route">{{ item.title }}</router-link>
        <plus v-if="item.child && item.child.length" @click="toggleMenuRes()" />
      </div>
        
        <ul
          v-if="item.child && item.child.length "
          :class="{'CloseSubMenu' : !visibelSubMenu , 'OpenSubMenu' : visibelSubMenu}"
        >
          <li v-for="child in item.child">
            <RouterLink to="/" class="block py-2 px-10">{{
              child.title
            }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script setup>
import logo from "@/components/shared/Logo.vue";
import X from "@/components/icon/x.vue";
import plus from "../icon/plus.vue";
import { ref } from "vue";
let menu = [
{
    id: 1,
    title: "صفحه اصلی",
    route: '/'
  },
  {
    id: 2,
    title: "پزشکان",
    route: '/list-doctor'
    // child: [
    //   {
    //     title: "پوست",
    //   },
    //   {
    //     title: "آلرژی",
    //   },
    //   {
    //     title: "تغذیه",
    //   },
    // ],
  },
  {
    id: 3,
    title: "مقالات",
    route: '/weblogs'
  },
  {
    id: 4,
    title: "سوالات متداول",
    route: '/faq'
  },
  {
    id: 5,
    title: "درباره ما",
    route: '/about'
  },
  {
    id: 6,
    title: "تماس با ما",
    route: '/contact-us'
  },
];


const emit = defineEmits("activity");

let ShowMenu = ref(true);

function closeMenu(){
  ShowMenu.value = false;
  emit("activity" , ShowMenu.value)
}

let visibleSubMenu = ref(false);
function toggleMenuRes(){
  visibleSubMenu.value = !visibleSubMenu.value;
}

</script>
<style scoped>
.xsign {
  box-shadow: 0px 2.1940596103668213px 17.795455932617188px 0px #b8b8b833;
  background-color: #fff;
  cursor: pointer;
}
.xsign:hover {
  box-shadow: 0px 2.1940596103668213px 17.795455932617188px 0px #b8b8b833;
  background-color: #e9ecf1;
}
.menuMbile {
  position: fixed;
  top: 0%;
  height: 100vh;
  z-index: 1000;
  overflow-y: scroll;
  transition: all 0.5s;
}
.open.menuMbile {
  left: 0%;
}
.close.menuMbile {
  left: -100%;
}
.CloseSubMenu{
  display: none;
  transform: translateY(0);
}
.OpenSubMenu{
  display: block;
  transform: translateY(1);
}
</style>
