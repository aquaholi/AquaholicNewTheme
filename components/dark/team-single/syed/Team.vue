<template>
  <section class="team-single">
    <div class="container-fluid">
      <div class="row xlg-marg">
        <div class="col-lg-6">
          <div class="img">
            <img
              src="/dark/assets/imgs/team/Syed_Team_Detail.jpeg"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="cont">
            <h1>Syed Muzaffer</h1>
            <h6 class="text-u ls1 opacity-8">Senior Graphic Designer</h6>
            <div class="text main-bg">
              <p class="main-text">
                Pink salmon cherry salmon combtail gourami frigate mackerel
                snake mackerel upside-down catfish finback cat shark. Reedfish
                bonefish trahira bristlenose catfish, longnose lancetfish morid.
                Wahoo mora deep sea smelt cat shark.
              </p>
              <div class="row md-marg mt-40">
                <div class="col-sm-6">
                  <p>
                    Pink salmon cherry salmon combtail gourami frigate mackerel
                    snake mackerel upside-down catfish finback cat shark.
                    Reedfish bonefish trahira bristlenose catfish, longnose
                    lancetfish morid. Wahoo mora deep sea smelt cat shark.
                  </p>
                </div>
                <div class="col-sm-6">
                  <p>
                    Pink salmon cherry salmon combtail gourami frigate mackerel
                    snake mackerel upside-down catfish finback cat shark.
                    Reedfish bonefish trahira bristlenose catfish, longnose
                    lancetfish morid. Wahoo mora deep sea smelt cat shark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  // Wait for DOM to be fully painted
  await nextTick()
  
  // Reinitialize GSAP ScrollTrigger and ScrollSmoother effects
  if (window.gsap && window.ScrollTrigger) {
    // Refresh ScrollTrigger to detect new elements with data-speed
    window.ScrollTrigger.refresh()
    
    // If ScrollSmoother exists, refresh it for effects to work
    if (window.ScrollSmoother) {
      const smoother = window.ScrollSmoother.get()
      if (smoother) {
        smoother.refresh()
      }
    }
  }
  
  // Fallback: Reinitialize WOW.js animations if present
  if (window.WOW) {
    new window.WOW({
      animateClass: 'animated',
      offset: 100,
    }).init()
  }
})
</script>
