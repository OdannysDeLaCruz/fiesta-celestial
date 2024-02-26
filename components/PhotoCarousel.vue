<script lang="ts" setup>
import { register } from 'swiper/element/bundle';

register()

</script>
<template>
    <div class="photo-carousel">
        <swiper-container
            :centered-slides="false"
            :pagination="false"
            :autoplay="true"
            :loop="true"
			:breakpoints="{
				300: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				578: {
					slidesPerView: 5.5,
					spaceBetween: 20
				}
			}"
			
        >
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/2.webp" placeholder loading="lazy" sizes="200px md:300px" alt="1" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/3.webp" placeholder loading="lazy" sizes="200px md:300px" alt="2" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/4.webp" placeholder loading="lazy" sizes="200px md:300px" alt="3" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/6.webp" placeholder loading="lazy" sizes="200px md:300px" alt="4" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/8.webp" placeholder loading="lazy" sizes="200px md:300px" alt="5" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/9.webp" placeholder loading="lazy" sizes="200px md:300px" alt="6" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/10.webp" placeholder loading="lazy" sizes="200px md:300px" alt="7" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/11.webp" placeholder loading="lazy" sizes="200px md:300px" alt="8" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/12.webp" placeholder loading="lazy" sizes="200px md:300px" alt="9" fetchpriority="low" />
            </swiper-slide>
            <swiper-slide lazy="true">
                <NuxtImg src="/images/carousel-infinito/14.webp" placeholder loading="lazy" sizes="200px md:300px" alt="10"  fetchpriority="low" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>
<style lang="scss" scoped>
.photo-carousel {
    margin-bottom: 100px;
    swiper-slide {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

	@media (min-width: 578px) {
		swiper-slide {
			border-radius: 15px;
		}
	}
}
</style>