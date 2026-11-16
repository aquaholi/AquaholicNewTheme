<template>
  <section class="clients-carso pt-80 sub-bg" style="padding-bottom:40px;">
    <div class="container">
      <div class="sec-bottom clients-heading">
        <div class="sub-bg d-flex align-items-center">
          <h6 class="fz-14 fw-400">
            More than <span class="fw-600">200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>

      <div
        v-for="(group, g) in groups"
        :key="`group-${g}`"
        class="swiper5"
      >
        <Swiper
          :id="`content-carousel-container-unq-clients-${g + 1}`"
          class="swiper-container"
          v-bind="swiperOptions"
        >
          <SwiperSlide v-for="(item, i) in group" :key="`g${g}-${i}`">
            <div class="item">
              <div class="img icon-img-100">
                <img :src="item" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';

import data from '@/data/clients';

// Remove duplicate logos, then split into 3 groups with no overlap
const unique = [...new Set(data)];
const size = Math.ceil(unique.length / 3);
const groups = [
  unique.slice(0, size),
  unique.slice(size, size * 2),
  unique.slice(size * 2),
];

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  speed: 500,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    500: { loop: true, slidesPerView: 2, spaceBetween: 15, centeredSlides: false },
    700: { loop: true, slidesPerView: 3, spaceBetween: 15, centeredSlides: false },
    1000: { loop: true, slidesPerView: 5, spaceBetween: 15, centeredSlides: true },
  },
};
</script>

<style scoped>
/* Heading sits closer to the logos */
.clients-carso .clients-heading {
  margin-bottom: 20px;
}

.swiper5 {
  margin-bottom: 15px;
}

.clients-carso .item {
  margin: 0 7.5px;
  height: 100%;
}

/* Center the logo both ways, with breathing room above and below */
.clients-carso .item .img {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  padding: 20px 0;
}

/* Slight size bump (~8%), barely noticeable */
.clients-carso .item .img img {
  max-width: 100%;
  object-fit: contain;
  transform: scale(1.08);
}
</style>