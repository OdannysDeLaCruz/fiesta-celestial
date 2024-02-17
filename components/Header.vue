<script lang="ts" setup>
const isOpen = ref(false)
const toggleNav = (status: boolean) => isOpen.value = status
</script>
<template>
    <header class="header flex items-center justify-center h-24">
        <section class="h-full flex items-center justify-between w-full max-w-screen-xl p-3">
            <nav class="w-full flex items-center justify-between" aria-label="Global">
                <a href="#" class="flex lg:hidden text-white text-sm font-normal">Inicio</a>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#" class="text-white text-sm font-normal">Inicio</a>
                    <a href="#" class="text-white text-sm font-normal">Nosotros</a>
                    <a href="#" class="text-white text-sm font-normal">Inscripciones</a>
                    <a href="#" class="text-white text-sm font-normal">Haz parte</a>
                </div>
                <button class="hidden lg:flex lg: lg:justify-end border ml-auto rounded-full px-10 py-2">
                    <a href="#" class="text-white text-sm font-normal">Contacto</a>
                </button>
                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="toggleNav(true)">
                        <span class="sr-only">Abri menú</span>
                        <svg class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" style="stroke: white;" />
                        </svg>
                    </button>
                </div>
            </nav>
    
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div v-show="isOpen" class="lg:hidden" role="dialog" aria-modal="true">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <div class="fixed inset-0 z-10"></div>
                <div class="h-full fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <button type="button" class="ml-auto -m-2.5 rounded-md p-2.5 text-gray-700" @click="toggleNav(false)">
                            <span class="sr-only">Cerrar</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Menu content -->
                    <div class="h-full mt-6 flow-root">
                        <div class="h-full -my-6 divide-y divide-gray-500/10">
                            <div class="h-full space-y-2 py-6">
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Inicio</a>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Nosotros</a>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Inscripciones</a>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Haz parte</a>
                                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-red-600 hover:bg-gray-50">Contacto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</header>

</template>
<style lang="scss" scoped>
.header {
    background: var(--color-red);
}
</style>