<template>
  <div class="algo size-12 bg-tertiary-50 rounded-full flex items-center justify-center fixed z-10 bottom-10 right-10 p-4 shadow-lg shadow-pink-400/50 cursor-pointer" @click="toUp()">
    <img class="w-full h-full" src="~/assets/icons/chevron-up.svg" alt="Subir">
  </div>
</template>

<script lang="ts" setup>
const toUp = () => {
  window.scrollTo({
    top: document.body.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
}
</script>

<style>

</style>