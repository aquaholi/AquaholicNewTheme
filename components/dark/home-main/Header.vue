<template>
  <header
    class="header main-header bg-img"
    data-background="/dark/assets/imgs/header/bg1.jpg"
    data-overlay-dark="8"
  >
    <div class="container pt-100">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <div class="text mb-100">
            <h4>
              We deliver high-volume, strategy-led creative solutions for enterprises requiring consistent, fast, and impactful designs.
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ontop">
      <div class="container">
        <div class="lg-text">
          <div class="d-flex">
            <h6>FOR SCALABLE</h6>
            <h6 class="ml-auto">CREATIVE PARTNER</h6>
          </div>
          <h1>BRAND GROWTH</h1>
        </div>
      </div>
      <div class="img">
        <!-- <img src="/dark/assets/imgs/header/2.jpg" alt="" /> -->
             <video autoplay muted loop playsinline style="width:100%">
      <source src="https://winter-mud-4232.shahrozsaqib3.workers.dev/" type="video/mp4">
      Your browser does not support the video tag.
    </video>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
