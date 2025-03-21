<template>
	<section class="relative w-full p-5 py-7 lg:py-20">
		<div
			class="max-w-screen-xl m-auto bg-white flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-28 lg:px-24 py-7 rounded-xl">
			<div class="relative bg-principal p-5 lg:p-16 pt-20 rounded-xl">
				<div class='
					w-[100px]
					h-[100px]
					absolute
					right-10
					-top-10
					'>
					<div class='
						bg-[url("/images/circulo.png")]
						w-[100px]
						h-[100px]
						absolute
						top-0
						z-0
						bg-no-repeat
					'></div>
					<div class='
						bg-[url("/images/flor-cayena.png")]
						bg-contain
						w-[100px]
						h-[100px]
						absolute
						top-5
						right-4
						z-1
						bg-no-repeat
					'></div>
				</div>

				<h1 class="font-bold text-3xl lg:text-4xl text-white mb-5">La fiesta más bonita, Fiesta Celestial</h1>

				<ul class="flex flex-col gap-5">
					<li class="flex gap-8">
						<img class="w-5 h-5 mt-4" src="~/assets/icons/calendar.svg" alt="">
						<div>
							<strong class="text-bold text-base text-white">Horario:</strong>
							<p class="text-sm text-white">
								Lunes - viernes: <br> 8:00 am - 12:00 pm, 2:00 pm - 6:00 pm <br>
							</p>
						</div>
					</li>
					<li class="flex gap-8">
						<img class="w-4 h-4 mt-4" src="~/assets/icons/phone.svg" alt="">
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