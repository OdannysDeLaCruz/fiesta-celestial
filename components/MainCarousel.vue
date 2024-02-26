<script lang="ts" setup>
import { register } from 'swiper/element/bundle';

register()

</script>
<template>
    <div class="main-carousel ">
        <swiper-container
            :slides-per-view="1"
            :centered-slides="true"
            :pagination="{
                hideOnClick: true
            }"
            :autoplay="true"
            :loop="true"
        >
            <swiper-slide>
				<NuxtImg src="/images/carousel/1.webp" placeholder sizes="400px md:700px lg:1200px" alt="Carousel 1" />
            </swiper-slide>
            <swiper-slide>
				<NuxtImg src="/images/carousel/2.webp" placeholder sizes="400px md:700px lg:1200px" alt="Carousel 2" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>
<style lang="scss" scoped>
.main-carousel {
	height: 150px;

	@media (min-width: 400px) {
		height: 200px;
	}

	@media (min-width: 576px) {
		height: 300px;
	}
	
	@media (min-width: 768px) {
		height: 400px;
	}

	@media (min-width: 992px) {
		height: 90vh;
	}

	swiper-container {
		width: 100%;
        height: 100%;
	}

    swiper-slide {
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>