<script lang="ts" setup>

</script>
<template>
    <!-- Banner principal -->
	<section class="relative w-full h-screen overflow-hidden bg-[url('/images/haz-parte.jpg')] bg-cover bg-center">
		<!-- Backdrop -->
		<div class='absolute top-0 left-0 w-full h-full flex items-end justify-center bg-gradient-to-b from-black/10 to-black/95'>
			<div class="max-w-2xl flex flex-col items-center justify-center mb-48 md:mb-32">
				<h1 class="text-bold text-sm sm:text-lg tracking-[6px] font-semibold uppercase mb-5 text-center text-white">somos fiesta celestial</h1>
				<p class="text-center text-3xl md:text-5xl text-yellow-200">
					¡Haz parte de<br>
					<strong>nuestro equipo!</strong>
				</p>

				<div class='flex flex-col sm:items-center sm:flex-row justify-center sm:gap-5 mt-10'>
					<a href="#" class="bg-white text-principal font-semibold text-sm px-10 py-3 rounded-full mt-5">Servicio</a>
					<a href="#" class="bg-white text-principal font-semibold text-sm px-10 py-3 rounded-full mt-5">Donación</a>
				</div>
			</div>
		</div>
	</section>

	<section class='py-20 bg-gray-100 my-10'>
		<div class="max-w-2xl m-auto">
			<p class="text-center">
				Cada inversión es una puerta abierta a nuevas posibilidades. Únete a nosotros y ayúdanos a que esta
				fiesta sea la más grande haciendo el nombre de Dios famoso. <br>
				<strong>¡Aprovecha hoy mismo esta oportunidad única!</strong>
			</p>
		</div>
	</section>

	<section class='relative w-full bg-[url("/images/haz-parte-2.jpg")] h-[400px] bg-cover bg-center py-20'>
		<div class='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-black/10 to-black/70'>
			<p class="text-center text-2xl sm:text-4xl font-semibold text-white text-shadow">
				¡Invierte y haz parte de <br> esta familia!
			</p>
		</div>
	</section>
</template>