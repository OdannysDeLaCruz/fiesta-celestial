<script lang="ts" setup>
import { register } from 'swiper/element/bundle';

register()

</script>
<template>
    <div class="main-carousel">
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
                <img src="/images/carousel/1.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="/images/carousel/2.png" alt="">
            </swiper-slide>
        </swiper-container>
    </div>
</template>
<style lang="scss" scoped>
.main-carousel {
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