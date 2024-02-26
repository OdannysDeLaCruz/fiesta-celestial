<template>
  <section id="contacto" class="contact-form w-full p-5 py-7 lg:py-20 bg-gray-100">
    <div class="contact-form__wrapper max-w-screen-xl m-auto bg-white flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-28 p-5 lg:px-24 py-7 lg:py-20 rounded-xl">
      <div class="contact-form__map"> 
        <div class="flex justify-center items-center lg:justify-between items-center flex-col lg:flex-row  mb-8">
          <h4 class="text-bold text-3xl">Contacto</h4>
          <div>
            <strong class="text-sm">Linea de atención:</strong><br>
            <span>5742964 - 5712334</span>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden">
          <NuxtImg class="w-full" src="/images/map.webp" alt="Dirección | Calle 13A #9-26 Barrio Cañahuate" sizes="600px" />
        </div>
        <div class="flex flex-col mt-8">
          <span><strong>Dirección:</strong>  Calle 13A #9-26 Barrio Cañahuate</span>
          <span><strong>Whatsapp:</strong> +57 314 596 9425</span>
          <span><strong>Correo:</strong> fiestacelestial@cejes.com</span>
        </div>
      </div>
      <div class="contact-form__form">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>