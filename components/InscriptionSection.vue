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
  inscriptionDoc: {
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
  },
  sectionId: {
	type: String,
	default: ''
  }
})

</script>
<template>
  <section class="w-full flex justify-center items-center p-5 lg:p-10" :id="sectionId">
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
            <button class="inscription-button text-nowrap flex justify-center border rounded-full px-5 lg:px-12 py-2 lg:py-4">
              <a :href="inscriptionLink" target="_blank" class="text-sm lg:text-md font-medium">Inscríbete aquí</a>
            </button>
            <button 
              class="flex justify-center text-nowrap bg-none border rounded-full px-3 lg:px-12 py-2 lg:py-4" 
              :class="[textColor === 'white' ? 'text-white border-white' : 'text-black border-black']"
            >
              <span href="#" class="text-sm lg:text-md font-medium">
				<NuxtLink :to="`/files/requisitos/${inscriptionDoc}`" external download>Requisitos</NuxtLink></span>
            </button>
          </div>
        </div>
        <!-- Imagen principal -->
        <div :class="[reverse ? 'lg:row-start-1 lg:col-start-1 lg:col-end-2' : 'lg:row-start-1 lg:col-start-2 lg:col-end-3']">
          <img class="w-full h-full object-cover" :src="`/images/inscripciones/${image}`" :alt="title" width="640px" />
        </div>
      </div>

      <!-- Imagen central -->
      <img v-if="imageCentral" class="image-central hidden lg:block" :class="imageCentralPosition" :src="`/images/inscripciones/${imageCentral}`" :alt="imageCentral" sizes="200px" />
    </div>
  </section>
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