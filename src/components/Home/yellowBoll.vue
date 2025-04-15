<template>
    <section>
        

        <figure class="relative w-full h-full">
            <img :class="{daleyfast : props.daley == 2 , daleylow : props.daley == 1 ,  daleylower : props.daley == 3 ,   daleyfaster : props.daley == 4 , triangle : props.NumClass == 2 , triangle2 : props.NumClass == 1 ,  triangle3 : props.NumClass == 3 ,   triangle4 : props.NumClass == 4}" class=" w-fit"
                src="../../assets/images/Banner/yellowBoll.svg" alt="">
        </figure>
    </section>
</template>
<script setup>
const props = defineProps({
    daley: Number,
    NumClass : Number,
    default: 1
})
</script>
<style scoped>
.daleyfast {
    animation-delay: 1s;
}

.daleyfaster {
    animation-delay: 0s;
}
.daleylow{
    animation-delay: 2s;
}
.daleylower{
    animation-delay: 3s;
}

</style>