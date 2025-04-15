<template>
  <div class="box">
    <span id="loader" class="loader"> </span>
  </div>
</template>
<style scoped>
.box{

  display:flex;
  justify-content:center;
  align-items: center;
  height: 100dvh;
  width: 100%;
  position: fixed;
  top:0;
  z-index:1000;
}
.loader {
  width: 52px;
  height: 52px;
  border: 5px solid #496ef3;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-bottom-color: #2EA952;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
