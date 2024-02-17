<script lang="ts" setup>
import { register } from 'swiper/element/bundle';

register()

</script>
<template>
    <div class="photo-carousel">
        <swiper-container
            :slides-per-view="5.5"
            :space-between="20"
            :centered-slides="false"
            :pagination="{
                hideOnClick: true
            }"
            :autoplay="true"
            :loop="true"
        >
            <swiper-slide>
                <img src="/images/carousel-infinito/2.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/3.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/4.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/6.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/8.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/9.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/10.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/11.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/12.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel-infinito/14.png" alt="">
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
        border-radius: 15px;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>