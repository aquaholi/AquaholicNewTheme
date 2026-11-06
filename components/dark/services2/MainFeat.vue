<template>
  <section
    class="main-feat section-padding bg-img"
    data-background="/dark/assets/imgs/header/bg-4.png"
    data-overlay-dark="9"
  >
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row justify-content-between">
          <div class="col-lg-6 md-mb50">
            <h6 class="sub-title main-color mb-15">Our Process</h6>
            <h2 class="fw-600 fz-70">
               <span class="fw-300">How We Actually</span> Deliver
            </h2>
          </div>
          <div class="col-lg-5 d-flex align-items-end">
            <div class="text full-width pb-40 bord-thin-bottom">
              <p>
               We follow a structured yet flexible approach designed to keep your brand moving forward with clarity and consistency. From understanding your requirements to delivering high-quality creative at speed, every step is built to ensure efficiency, alignment, and impact. Our process is simple, transparent, and optimized for scale—so you always know what to expect, and we consistently deliver beyond it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-6">
          <div class="img md-mb50">
            <img src="/dark/assets/imgs/intro/2.jpg" alt="" class="radius-15" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row">
            <div class="col-md-6">
              <div class="item mb-50">
                <h5 class="mb-15">From Brief to Impact</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">Brief → Clarity session </li>
                  <li class="mb-10">Strategy → Content planning </li>
                  <li class="mb-10">Execution → High-volume production</li>
                  <li class="mb-10">Delivery → Fast turnaround </li>
                  <li class="mb-10">Optimization → Continuous refinement</li>
                </ul>
              </div>
              <div class="item sm-mb50">
                <h5 class="mb-15">Speed & Scale</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">24–48 hr turnaround </li>
                  <li class="mb-10">1000+ assets annually</li>
                  <li class="mb-10">Multi-platform delivery</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="item mb-50">
                <h5 class="mb-15">A Week in Aquaholic</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">Monday: Planning </li>
                  <li class="mb-10">Tuesday - Thursday: Production </li>
                  <li class="mb-10">Friday: Delivery & revisions </li>
                </ul>
              </div>
              <br/>
              <br/>
              <br/>
              <br/> 
              <br/>
              <div class="item">
                <h5 class="mb-15">In a typical month, we deliver</h5>
                <ul class="rest dot-list">
                  <li class="mb-10">100+ social media posts</li>
                  <li class="mb-10">35+ campaigns</li>
                  <li class="mb-10">80+ presentations </li>
                 <li class="mb-10">Ongoing design support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>
