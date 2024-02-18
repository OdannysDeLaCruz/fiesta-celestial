<script lang="ts" setup>
const { data } = await useAsyncData('requisitos-inscripciones', () => queryContent('/requisito-inscripciones').find())

console.log(data.value)
</script>
<template>
	<section class="banner-principal w-full">
		<img class="w-full" src="/images/banner-inscripciones.png" alt="">
	</section>

	<section class="w-full flex m-auto p-5 lg:p-20">
		<div class="max-w-screen-xl m-auto">
			<div
				class="w-full grid grid-rows-1 grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center lg:grid lg:grid-cols-5 lg:gap-5">
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<h2 class="text-black text-sm md:text-base text-bold text-center">Concurso <br> Canción Inédita</h2>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<h2 class="text-black text-sm md:text-base text-bold text-center">Concurso <br> Agrupaciones</h2>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<h2 class="text-black text-sm md:text-base text-bold text-center">Concurso <br> Verseadores</h2>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<h2 class="text-black text-sm md:text-base text-bold text-center">Concurso <br> Agrupaciones <br>
						infantiles</h2>
				</div>
				<div class="rounded-lg bg-gray-100 py-3 px-10 flex items-center justify-center">
					<h2 class="text-black text-sm md:text-base text-bold text-center">Talleres</h2>
				</div>
			</div>
		</div>
	</section>

	<InscriptionSection title="Canción Inédita"
		text="En estos encuentros aglutinamos de todos los estilos y vertientes de la música del folclor autóctona de nuestra región, convirtiéndose en la principal vitrina o institución de comercialización y difusión de la música Góspel Vallenata"
		background-text="#789744" image="cancion-inedita.png" image-central="lengua.png" image-central-position="bottom-0"
		inscription-link="" :requisitos="data && data[0].inedita.data || ''" />

	<InscriptionSection title="Agrupaciones"
		text="Se realiza el concurso de Agrupaciones Profesionales para quienes ya han puesto su música en el acetato y Aficionadas para que participen quienes aún no han grabado. <br/> <br/> Incentivamos el talento musical y creamos una plataforma para para que las agrupaciones cristianas se muestren, ayudando al fortalecimiento de nuestras raíces musicales."
		background-text="#F74509" image="agrupaciones.png" inscription-link="" :reverse="true"
		:requisitos="data && data[0].agrupaciones.data || ''" />

	<InscriptionSection title="Verseadores"
		text="Con participantes de toda Colombia cada año más músicos se han ido <strong class='font-semibold'>preparando para realizar presentaciones</strong> de calidad dignas de la excelencia que exige el talento que les regaló Dios. <br /> <br />El talento del repentismo, el sentido del humor musical y el pique sano hacen de <strong class='font-semibold'>los verseadores</strong> una de las competencias más esperadas cada año en Fiesta Celestial."
		background-text="#F2E7CE" image="verseadores.png" image-central="cayena.png" image-central-position="-bottom-7"
		inscription-link="" inscription-button-bg="#F74509" inscription-button-color="#FFFFFF" text-color="black"
		:requisitos="data && data[0].verseadores.data || ''" />

	<InscriptionSection title="Agrupación Infantil"
		text="Esta dirigido a niños y niñas que no superen los <strong class='font-semibold'>14 años</strong>. <br /> <br />Las agrupaciones estarán <strong class='font-semibold'>conformadas por un acordeonero, un cajero y un guacharaquero</strong>, así también se permiten todos los instrumentos musicales adicionales, a los anteriormente descritos que la agrupación considere necesaria para su mejor ejecución."
		background-text="#789744" image="agrupacion-infantil.png" inscription-link="" :reverse="true"
		:requisitos="data && data[0].agrupaciones_infantiles.data || ''" />
</template>
<style lang="scss" scoped></style>