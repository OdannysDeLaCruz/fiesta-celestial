<script lang="ts" setup>
import { register } from 'swiper/element/bundle';

register()

</script>
<template>
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
</template>
<style lang="scss" scoped>
swiper-slide {
    height: 709px;
    overflow: hidden;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;

}
</style>