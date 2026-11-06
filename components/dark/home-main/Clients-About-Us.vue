<template>
  <section class="clients-carso  pt-0 sub-bg" style="padding-bottom:30px;">
    <div class="container">
      <div class="sec-bottom mb-100">
        <div class="sub-bg d-flex align-items-center">
          <h6 class="fz-14 fw-400">
            More than <span class="fw-600">200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>

      <div class="swiper5" style="margin-bottom: 50px;">
        <Swiper
          id="content-carousel-container-unq-clients-1"
          class="swiper-container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in firstGroup" :key="`g1-${i}`">
            <div class="item">
              <div class="img icon-img-100">
                <img :src="item" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="swiper5" style="margin-bottom: 50px;">
        <Swiper
          id="content-carousel-container-unq-clients-2"
          class="swiper-container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in secondGroup" :key="`g2-${i}`">
            <div class="item">
              <div class="img icon-img-100">
                <img :src="item" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- <div class="swiper5">
        <Swiper
          id="content-carousel-container-unq-clients-3"
          class="swiper-container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in thirdGroup" :key="`g3-${i}`">
            <div class="item">
              <div class="img icon-img-100">
                <img :src="item" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> -->

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';

import data from '@/data/clients-about.json';

const firstGroup = data.slice(0, 4);
const secondGroup = data.slice(5,10);
const thirdGroup = data.slice(8,10);

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  speed: 500,
  loop: true,
    autoplay: {
    delay: 2000, // time between slides (ms)
    disableOnInteraction: false, // keep autoplay after user interaction
    pauseOnMouseEnter: true, // optional: pause on hover
  },

  breakpoints: {
    // when window width is >= 640px
    500: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 15,
      centeredSlides: false,
    }, // when window width is >= 768px
    700: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 15,
      centeredSlides: false,
    }, // when window width is >= 1200px
    1000: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 15,
      centeredSlides: true,
    },
  },
};
</script>

<style scoped>
.swiper5 {
  margin-bottom: 15px;
}

.clients-carso .item {
  margin: 0 7.5px;
}
</style>
