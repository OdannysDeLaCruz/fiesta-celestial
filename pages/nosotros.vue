<script lang="ts" setup>
useHead({
	title: 'Nosotros',
	meta: [
		{ name: 'description', content: 'Fiesta Celestial es un espacio que fomenta la <strong>adoración y alabanza a Dios con el género musical Vallenato Gospel; Un certamen cultural que promueve el talento con el desarrollo de <strong>concursos de agrupaciones, canción inédita y verseadores profesional y aficionada' }
	]
})
</script>
<template>
	<!-- Banner principal -->
	<section class="banner-principal w-full bg-[url('/images/banner-nosotros.png')] bg-cover bg-center bg-no-repeat h-[300px] md:h-screen">
		<div class="w-full h-full bg-black bg-opacity-10 flex items-center justify-center backdrop-blur-sm">
			<h1 class="text-white text-2xl sm:text-6xl text-center mb-64">
				<span> ¡La fiesta más bonita</span> <br><strong>Fiesta Celestial!</strong>
			</h1>
			<div class='absolute bottom-0 left-0 w-full h-20 md:h-40 bg-gradient-to-b from-transparent to-orange-200'></div>
		</div>
	</section>
	<section class="bg-orange-200 p-20">
		<div class="max-w-2xl m-auto">
			<h1 class="font-bold text-lg mb-5 text-center">Sobre nosotros</h1>
			<p class="text-center text-sm">Fiesta Celestial es un espacio que fomenta la <strong>adoración y alabanza a
					Dios</strong> con el género musical <strong>Vallenato Gospel</strong>; Un certamen cultural que
				promueve
				el talento con el desarrollo de <strong>concursos de agrupaciones, canción inédita y verseadores
					profesional
					y aficionada</strong>.</p> <br>

			<p class="text-center text-sm">Busca principalmente defender, fomentar, cultivar, divulgar y promocionar la
				música Vallenata Cristiana, la cual durante 27 años se ha convertido en la plataforma más importante de
				este
				género.</p>

			<div class="flex items-center justify-center mt-8 w-full">
				<img src="~/assets/icons/estrella-nosotros.svg" alt="">
			</div>
		</div>
	</section>
	<!-- Mensaje del pastor -->
	<section class="w-full flex m-auto p-5 lg:p-20">
		<div class="max-w-screen-xl m-auto grid grid-cols-1 grid-row-2 md:grid md:grid-cols-2 gap-10">
			<!-- Perfil del pastor -->
			<div class="flex flex-col lg:flex-row items-center gap-10">
				<NuxtImg class="w-40" src="/images/foto-pastor.webp" alt="Pastor Angel Florez" sizes="200px" />
				<span class="flex flex-col items-center lg:items-start">
					<h3 class="text-xl text-bold"><strong>Pastor Angel Florez León</strong></h3>
					<h6 class="text-base text-normal">Fundador</h6>
				</span>
			</div>

			<!-- Mensaje del pastor -->
			<div>
				<p>El <strong>Pastor Angel Florez</strong> Nació el 13 de diciembre de 1947, en Aguachica Cesar, estudió
					en
					el Colegio Nacional Loperena donde se hizo bachiller, luego fue a la ciudad de Tunja en donde se
					graduó
					como Ingeniero Agrónomo. <br> <br> Se casó con el gran amor de su vida la Pastora Damaris Oñate,
					ayuda
					idónea, una mujer de Dios con quien formó un hermoso hogar.</p>
			</div>
		</div>
	</section>

	<!-- Nuestra misión -->
	<section class="w-full flex m-auto px-5 py-20 lg:p-20">
		<div class="max-w-screen-xl m-auto">
			<h2 class="text-bold text-3xl text-center mb-10"><strong>¿Cual es nuestra misión?</strong></h2>
			<div class="flex flex-col lg:grid lg:grid-cols-3  gap-5">
				<div class="bg-gray-100 p-12 rounded-lg">
					<h4 class="text-bold text-xl">Exalta el nombre de Dios con la música Vallenata Gospel</h4>
					<ul>
						<li class="text-sm">Ciudad de Valledupar</li>
					</ul>
				</div>
				<div class="bg-gray-100 p-12 rounded-lg">
					<h4 class="text-bold text-xl">Empoderar a los cantantes de música Vallenata</h4>
					<ul>
						<li class="text-sm">Personas de distintas ciudades</li>
					</ul>
				</div>
				<div class="bg-gray-100 p-12 rounded-lg">
					<h4 class="text-bold text-xl">Propuesta diferente de evangelización por medio del vallenato</h4>
					<ul>
						<li class="text-sm">Todo el mundo</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="w-full flex m-auto p-5 lg:p-20">
		<div class="max-w-screen-xl m-auto rounded-lg overflow-hidden w-full h-96">
			<iframe loading="lazy" width="100%" height="100%" src="https://www.youtube.com/embed/6eL76z_Mxj4"
				title="Fiesta Celestial 2024 - Volviendo a la Esencia - Trailer Oficial" frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen></iframe>
		</div>
	</section>

	<!-- Horario -->
	<HorarioSection />

	<!-- Lugar -->
	<div class="w-full flex m-auto p-5 lg:p-20">
		<div class="w-full max-w-screen-xl m-auto">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2758560393286!2d-73.25164285032189!3d10.478906465216001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9b5ae80e1d9%3A0x499cc40e903aa597!2sCentro%20Evangelistico%20Jesus%20es%20El%20Se%C3%B1or!5e0!3m2!1ses!2sco!4v1742489359596!5m2!1ses!2sco"
				width="100%" height="400" style="border:0;" :allowfullscreen="true" loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</div>
</template>