<template>
  <section class="w-full p-5 py-7 lg:py-20">
    <div class="max-w-screen-xl m-auto bg-white flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-28 lg:px-24 py-7 lg:py-20 rounded-xl">
      <div class="horario p-5 lg:p-10 rounded-xl"> 
        <h1 class="text-normal text-4xl lg:text-5xl text-white mb-5">La fiesta más bonita, Fiesta Celestial</h1>

        <ul class="flex flex-col gap-5">
          <li class="flex gap-8">
            <img src="~/assets/icons/calendar.svg" alt="">
            <div>
              <strong class="text-bold text-base text-white">Horario:</strong>
              <p class="text-sm text-white"> Lunes - viernes: 8:00 am - 12:00 pm, 2:00 pm - 6:00 pm <br>
                Sat: 8:00-12:00 and 1:00-4:00</p>
            </div>
          </li>
          <li class="flex gap-8">
            <img src="~/assets/icons/phone.svg" alt="">
            <div>
              <strong class="text-bold text-base text-white">Línea de atención:</strong>
              <p class="text-sm text-white">5742964 - 5712334</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.horario {
  background-color: var(--color-green);
}
</style>