<template>
    <section class="main rounded-[20px] p-3 text-nowrap flex items-center  w-ful lg:text-base text-xs gap-x-0 xl:gap-x-12">
        <h3 class="font-bold ">ترتیب نمایش :</h3>
        <ul class="flex flex-wrap">
            <li @click="SortDoctor(' ')" :class="{active : $route.query.sort == ' ' }" >پیش فرض</li>
            <li @click="SortDoctor('most_rated')" :class="{active : $route.query.sort == 'most_rated' }" >بیشترین امتیاز</li>
            <li @click="SortDoctor('most_visited')" :class="{active : $route.query.sort == 'most_visited' }" >بیشترین بازدید</li>
        </ul>
    </section>
</template>
<style scoped >
.main{
    background-color: #E5F0F9;
    border: 1px solid #114db471;
}
ul li{
    padding: 8px 20px;
    border-radius: 30px ;
    cursor: pointer;
}
.active{
    background-color: #9AD3FF;
    color: #114EB4;
    
}

@media screen and (max-width: 768px) {
    ul li{
    padding: 8px 3px;
    border-radius: 30px ;
    cursor: pointer;
}
}
</style>
<script setup>
import {useRoute , useRouter} from "vue-router";
let router = useRouter();
let route = useRoute()

function SortDoctor(fo){
  router.push({name:'ListDoctor',query:{
    name:  route.query.name,
    province_id : route.query.province_id,
    city_id :route.query.city_id ,
    speciality_id : route.query.speciality_id,
    gender : route.query.gender,
    sort :fo ,
}})
}
</script>