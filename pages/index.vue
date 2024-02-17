<script lang="ts" setup>
</script>
<template>
    <NuxtLayout name="default">
        <MainCarousel />
        <section class="mt-5 flex items-center justify-between w-full max-w-screen-xl p-3 m-auto">
            <div class="video__home">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XGdvOkO1xAU" title="Fiesta Celestial - La Fiesta Más Bonita" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="relative border p-14 w-96 rounded-xl border-black">
                <img class="absolute -top-8 right-10" src="~/assets/icons/estrella-verde.svg" alt="">
                <h1 class="text-2xl font-bold mb-9">La fiesta  más bonita</h1>
                <p class="text-base">Fiesta celestial es un evento cristiano de música gospel, en el genero vallenato que se ha extendido en el mundo y se desarrolla en Valledupar. <br> <br>Es organizado por la iglesia cejes central...</p>

                <button class="lg:flex lg: lg:justify-end border ml-auto rounded-full px-10 py-2 bg-red-500 w-full mt-20">
                    <a href="#" class="text-white text-sm font-normal">Conoce más</a>
                </button>
            </div>
        </section>

        <!-- Carrusel de fotos infinita -->

        <!-- Mensaje "El único evento de vallenato cristiano en el mundo" -->

        <section class="unique-event-section mt-5 flex items-center justify-center w-full max-h-80 py-24 m-auto bg-red-200">
            <div class="flex justify-center items-center">
                <h2 class="w-full text-center text-4xl text-white">El único evento de <br> <strong>vallenato cristiano</strong><br> en el mundo</h2>
            </div>
        </section>

        <!-- Cuenta regresiva -->
        <CountDown />

        <!-- Carrusel de imágenes de instagram -->

        <section class="mt-5 flex items-center justify-center w-full max-h-80 py-24 m-auto bg-red-200">

        </section>

        <!-- Suscripción a YouTube -->

    </NuxtLayout>
</template>
<style lang="scss" scoped>
.unique-event-section {
    background-image: url('/images/background-1.png');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>