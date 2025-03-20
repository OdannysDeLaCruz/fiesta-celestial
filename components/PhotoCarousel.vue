<script lang="ts" setup>
import { register } from 'swiper/element/bundle';

register()

</script>
<template>
	<div class="photo-carousel">
		<div class="w-full overflow-hidden relative py-10">
			<div class="flex w-[200%] animate-scroll">
				<!-- Imágenes repetidas para el efecto infinito -->
				<div class="flex w-1/2 justify-around gap-4">
					<NuxtImg src="/images/carousel-infinito/2.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/3.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/4.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/6.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/8.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/9.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/10.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/11.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/12.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/14.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/2.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/3.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/4.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/6.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/8.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/9.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/10.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/11.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/12.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
					<NuxtImg src="/images/carousel-infinito/14.webp"
						class="w-[150px] md:w-[230px] object-cover rounded-lg" />
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@keyframes scroll {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-50%);
	}
}

.animate-scroll {
	animation: scroll 25s linear infinite;
}
</style>