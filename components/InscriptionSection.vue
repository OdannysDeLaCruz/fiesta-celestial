<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: 'white'
  },
  backgroundText: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  imageCentral: {
    type: String,
    default: ''
  },
  imageCentralPosition: {
    type: String,
    default: ''
  },
  inscriptionLink: {
    type: String,
    default: ''
  },
  inscriptionButtonBg: {
    type: String,
    default: 'white'
  },
  inscriptionButtonColor: {
    type: String,
    default: '#000000'
  },
  requisitos: {
    type: String,
    default: ''
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

const dialog = ref();

// "Show the dialog" button opens the dialog modally
const openModal = () => {
  dialog.value.showModal();
  // document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  // document.body.style.overflow = 'scroll'
  dialog.value.close();

}

</script>
<template>
  <section class="w-full flex justify-center items-center p-10">
    <div class="relative">
      <div 
        class="max-w-screen-xl m-auto grid grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 rounded-lg overflow-hidden relative"
      >
        <!-- Texto -->
        <div class="text-section p-5 md:p-16" :class="[reverse ? 'lg:row-start-1 lg:col-start-2 lg:col-end-3' : 'lg:row-start-1 lg:col-start-1 lg:col-end-2']">
          <h1 
            :class="[
              textColor === 'white' ? 'text-white' : 'text-black',
              'font-semibold',
              'text-xl md:text-3xl',
              'mb-4 md:mb-10'
            ]">{{ title }}</h1>
          <p :class="[
            textColor === 'white' ? 'text-white' : 'text-black',
            'font-light',
            'text-sm md:text-base'
          ]" v-html="text"></p>
    
          <div class="flex gap-2 lg:gap-10 mt-10 flex-wrap">
            <button class="inscription-button text-nowrap flex justify-center border rounded-full px-12 py-4">
              <a :href="inscriptionLink" class="text-sm font-medium">Inscríbete aquí</a>
            </button>
            <button 
              class="flex justify-center text-nowrap bg-none border rounded-full px-12 py-4" 
              :class="[textColor === 'white' ? 'text-white border-white' : 'text-black border-black']"
              @click="openModal"
            >
              <a href="#" class="text-sm font-medium">Requisitos</a>
            </button>
          </div>
        </div>
        <!-- Imagen principal -->
        <div :class="[reverse ? 'lg:row-start-1 lg:col-start-1 lg:col-end-2' : 'lg:row-start-1 lg:col-start-2 lg:col-end-3']">
          <img class="w-full h-full object-cover" :src="`/images/inscripciones/${image}`" :alt="title">
        </div>
      </div>

      <!-- Imagen central -->
      <img v-if="imageCentral" class="image-central hidden lg:block" :class="imageCentralPosition" :src="`/images/inscripciones/${imageCentral}`" :alt="imageCentral">
    </div>
  </section>

  <dialog class="p-5 w-full max-w-4xl bg-transparent" v-if="requisitos" ref="dialog">
    <section class="pt-4 px-10 pb-10 rounded-lg bg-white">
      <header class="">
        <button @click="closeModal()" class="ml-auto bg-gray-100 size-11 flex justify-center items-center rounded-full -top-5 right-0" autofocus><img src="~/assets/icons/close.svg" alt="cerrar"></button>
      </header>
      <p v-html="requisitos"></p>
    </section>
  </dialog>

</template>
<style lang="scss" scoped>
.text-section {
  background-color: v-bind(backgroundText);
}
.inscription-button {
  background-color: v-bind(inscriptionButtonBg);
  a {
    color: v-bind(inscriptionButtonColor);
  }
}

.image-central {
  width: 200px;
  position: absolute;
  left: calc(50% - 100px);
}

// Modal
dialog::backdrop {
  background: #202120;
  opacity: 0.7;
}
</style>