<template>
	<footer class="container-full bg-tertiary w-full p-5 lg:p-16">
		<div class="container max-w-screen-xl m-auto flex align-center lg:justify-between flex-col lg:flex-row gap-16">
			<div class='flex align-center justify-center lg:justify-start w-full lg:w-2/5'>
				<img src="/images/logotipo.png" alt="Fiesta Celestial" width="240px" />
			</div>
			<div class='flex align-center justify-center w-full lg:w-3/5 lg:align-right flex-col'>
				<div class='flex flex-row align-center justify-center lg:justify-end flex-wrap gap-5 mb-10 md:mb-5'>
					<input
						class='rounded-full bg-transparent text-white border border-white p-2 pl-5 placeholder:text-white text-sm w-[250px] lg:w-[600px]'
						placeholder='Subscribe y entérate de todo' type="text" name="" id="" value="">
					<button class='rounded-full bg-white font-bold color-principal w-[100px] p-2'
						type="submit">Enviar</button>
				</div>

				<ul class="flex flex-col lg:flex-row gap-5 lg:gap-16 text-white mb-5">
					<li>
						<NuxtLink to="/">Inicio</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/nosotros">Nosotros</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/inscripciones">Inscripciones</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/haz-parte" class='text-nowrap'>Haz parte</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/#contacto">Contacto</NuxtLink>
					</li>
				</ul>
				<p class="text-center text-white lg:text-left mt-5">© Fiesta celestial - Reservados todos los derechos
				</p>
			</div>
		</div>
	</footer>
</template>