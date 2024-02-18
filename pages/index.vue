<script lang="ts" setup>
</script>
<template>
	<MainCarousel />
	<section class="la-fiesta-mas-bonita-section mt-5 flex items-center justify-between w-full max-w-screen-xl p-3 m-auto">
		<div class="video__home">
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/XGdvOkO1xAU"
				title="Fiesta Celestial - La Fiesta Más Bonita" frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen></iframe>
		</div>
		<div class="card relative border p-14 rounded-xl border-black">
			<img class="absolute -top-8 right-10" src="~/assets/icons/estrella-verde.svg" alt="">
			<h1 class="text-2xl font-bold mb-9">La fiesta más bonita</h1>
			<p class="text-base">Fiesta celestial es un evento cristiano de música gospel, en el genero vallenato que se ha
				extendido en el mundo y se desarrolla en Valledupar. <br> <br>Es organizado por la iglesia cejes central...
			</p>

			<button class="flex justify-center border ml-auto rounded-full px-10 py-2 bg-red-500 w-full mt-20">
				<a href="#" class="text-white text-sm font-normal">Conoce más</a>
			</button>
		</div>
	</section>

	<!-- Carrusel de fotos infinita -->
	<PhotoCarousel />

	<!-- Mensaje "El único evento de vallenato cristiano en el mundo" -->

	<section class="unique-event-section mt-5 flex items-center justify-center w-full max-h-80 py-24 m-auto bg-red-200">
		<div class="flex justify-center items-center">
			<h2 class="w-full text-center text-4xl text-white">El único evento de <br> <strong>vallenato
					cristiano</strong><br> en el mundo</h2>
		</div>
	</section>

	<!-- Cuenta regresiva -->
	<CountDown />

	<!-- Carrusel de imágenes de instagram -->


	<!-- Suscripción a YouTube -->

	<section class="subcripcion-youtube flex items-center justify-center w-full m-auto bg-white">
		<div class="subcripcion-youtube__wraper max-w-screen-xl m-auto">
			<div class="subcripcion-youtube__text">
				<p class="text-white">Disfruta de toda esta experiencia en vivo solo por YouTube ¡Suscríbete!</p>

				<button class="lg:flex lg:justify-end rounded-full px-10 py-3 mt-5">
					<a href="#" class="text-white text-sm font-normal text-nowrap">Empezar ahora</a>
				</button>
			</div>
			<div>
				<img src="/images/carousel/1.png"
					alt="Disfruta de toda esta experiencia en vivo solo por YouTube ¡Suscríbete!">
			</div>
		</div>
	</section>

	<!-- Formulario de contacto -->
	<ContactFormSection />
</template>
<style lang="scss" scoped>
.la-fiesta-mas-bonita-section {
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 60px;
	margin: 100px auto;

	.video__home {
		border-radius: 10px;
		overflow: hidden;
		width: 100%;
		height: 451px;
		max-width: 780px;
		max-height: 451px;
	}

	.card {
		height: 451px;
		max-width: 398px;
	}

	@media (min-width: 768px) {
		justify-content: space-between;
		flex-direction: row;
	}
}

.unique-event-section {
	background-image: url('/images/background-1.png');
	background-repeat: no-repeat;
	background-size: cover;
}

.subcripcion-youtube {
	width: 100%;
	padding: 16px;

	.subcripcion-youtube__wraper {
		border-radius: 10px;
		overflow: hidden;
		margin: 100px 0;
		display: flex;
		flex-direction: column;
		background-color: var(--color-green);

		.subcripcion-youtube__text {
			padding: 30px;
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;

			p {
				font-size: 30px;
				font-weight: 500;
				line-height: 30.75px;
			}

			button {
				background-color: var(--color-red);
			}
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}


		@media (min-width: 900px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);

			.subcripcion-youtube__text {
				padding: 70px 100px;
			}
		}
	}
}</style>