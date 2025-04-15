
<template>
    <tabs class="panels-wrapper-class my-10 w-full" >
        <tab  name="درباره پزشک"  >
          <AboutDr  :AboutDr="tabDr" />
        </tab>
        <tab name="آدرس و دسترسی">
          <AddressDr :AddressDr="tabDr"/>
        </tab>
        <tab name="افتخارات و تحصیلات">
          <EducationDr :Education="tabDr"  />
        </tab>
        <tab  name="نظرات">
          <CommentDr :comments="tabDr" />
        </tab>
        <tab name="مقالات">
          <Paper :posts="tabDr.posts" />
        </tab>
    </tabs>
</template>
<script setup>
import AddressDr from './AddressDr.vue';
import AboutDr from './aboutDr.vue';
import CommentDr from './CommentDr.vue';
import EducationDr from './EducationDr.vue';
import Paper from './Paper.vue';
import {Tabs, Tab} from 'vue3-tabs-component';


const props = defineProps({
  tabDr : Object
})

// console.log(props.tabDr.comments)

</script>
<style>
.tabs-component-tabs{
background-color: white;
border-radius: 5px;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
box-shadow: 0px 0px 25px 0px #114EB430;
}
.tabs-component-tab{
  border-left:1px solid #ebebeb ;

}

.tabs-component-tab-a{
  display: block;
  text-align: center;
    width: 100%;
  height: 100%;
  padding: 22px 0;
}

.tabs-component-tab-a.is-active{
border-bottom: 2px solid #2EA952;
border-radius: 3px;
background-color:#2ea9532f ;
}

@media screen and (max-width: 1280px) {
  .tabs-component-tabs{
background-color: white;
border-radius: 5px;
display: flex;
flex-direction: column;

}
}
</style>