<script lang="ts" setup>
useHead({
	title: 'Inscripciones',
	meta: [
		{ name: 'description', content: 'Inscripciones Fiesta Celestial, la fiesta mas bonita que se hace en Valledupar - Cesar.' }
	]
})

// const { data } = await useAsyncData('requisitos-inscripciones', () => queryContent('/requisito-inscripciones').find())

</script>
<template>
	<section class="banner-principal w-full">
		<NuxtImg class="w-full" src="/images/inscripciones/banner-inscripciones.webp" alt="Inscripciones" sizes="720px" />
	</section>

	<section class="w-full flex m-auto p-5 lg:p-20">
		<div class="max-w-screen-xl m-auto">
			<div
				class="w-full grid grid-rows-1 grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center lg:grid-rows-1 lg:grid lg:grid-cols-4 lg:gap-5 place-content-stretch h-38">
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<NuxtLink to="#inedita">
						<h2 class="text-black text-sm md:text-base text-bold text-center"><strong>Concurso <br> Canción Inédita</strong></h2>
					</NuxtLink>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<NuxtLink to="#agrupaciones">
						<h2 class="text-black text-sm md:text-base text-bold text-center"><strong>Concurso <br> Agrupaciones</strong></h2>
					</NuxtLink>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<NuxtLink to="#verseadores">
						<h2 class="text-black text-sm md:text-base text-bold text-center"><strong>Concurso <br> Verseadores</strong></h2>
					</NuxtLink>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<NuxtLink to="#agrupaciones_infantiles">
						<h2 class="text-black text-sm md:text-base text-bold text-center"><strong>Concurso <br> Agrupaciones <br> infantiles</strong></h2>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>

	<InscriptionSection 
		title="Canción Inédita"
		text="En estos encuentros aglutinamos de todos los estilos y vertientes de la música del folclor autóctona de nuestra región, convirtiéndose en la principal vitrina o institución de comercialización y difusión de la música Góspel Vallenata"
		background-text="#789744" 
		image="cancion-inedita.webp" 
		image-central="lengua.webp" 
		image-central-position="bottom-0"
		inscription-link="https://forms.gle/MiAMXpyWbRrYjhGi8"
		inscription-doc="cancion-inedita.pdf"
		section-id="inedita"
	/>

	<InscriptionSection 
		title="Agrupaciones"
		text="Se realiza el concurso de Agrupaciones Profesionales para quienes ya han puesto su música en el acetato y Aficionadas para que participen quienes aún no han grabado. <br/> <br/> Incentivamos el talento musical y creamos una plataforma para para que las agrupaciones cristianas se muestren, ayudando al fortalecimiento de nuestras raíces musicales."
		background-text="#F74509" 
		image="agrupaciones.webp" 
		inscription-link="https://forms.gle/3JoxSTML4nb7J9wo8" 
		inscription-doc="agrupaciones-profesional.pdf"
		:reverse="true"
		section-id="agrupaciones" 
	/>

	<InscriptionSection 
		title="Verseadores"
		text="Con participantes de toda Colombia cada año más músicos se han ido <strong class='font-semibold'>preparando para realizar presentaciones</strong> de calidad dignas de la excelencia que exige el talento que les regaló Dios. <br /> <br />El talento del repentismo, el sentido del humor musical y el pique sano hacen de <strong class='font-semibold'>los verseadores</strong> una de las competencias más esperadas cada año en Fiesta Celestial."
		background-text="#F2E7CE" 
		image="verseadores.webp" 
		image-central="cayena.webp" 
		image-central-position="-bottom-7"
		inscription-link="https://forms.gle/dtu6mendR39MWoSd6" 
		inscription-doc="verseadores.pdf"
		inscription-button-bg="#F74509" 
		inscription-button-color="#FFFFFF" 
		text-color="black"
		section-id="verseadores" 
	/>

	<InscriptionSection 
		title="Agrupación Infantil"
		text="Esta dirigido a niños y niñas que no superen los <strong class='font-semibold'>14 años</strong>. <br /> <br />Las agrupaciones estarán <strong class='font-semibold'>conformadas por un acordeonero, un cajero y un guacharaquero</strong>, así también se permiten todos los instrumentos musicales adicionales, a los anteriormente descritos que la agrupación considere necesaria para su mejor ejecución."
		background-text="#789744" 
		image="agrupacion-infantil.webp" 
		inscription-link="https://forms.gle/WghXZxXTyCbmi4nFA" 
		inscription-doc="agrupaciones-infantiles.pdf"
		:reverse="true"
		section-id="agrupaciones_infantiles" 
	/>
</template>
<style lang="scss" scoped></style>