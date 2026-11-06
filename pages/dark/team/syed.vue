<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Team />
        <Skills />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/dark/home-main/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar';
import Team from '@/components/dark/team-single/syed/Team.vue';
import Skills from '@/components/dark/team-single/Skills';
import { onMounted, onUpdated } from 'vue';

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
});

const initScrollSmoother = () => {
  // Kill any existing ScrollSmoother instance
  if (window.ScrollSmoother) {
    const existing = window.ScrollSmoother.get();
    if (existing) {
      existing.kill();
    }
  }
  
  // Wait a tick for DOM to settle
  setTimeout(() => {
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      ScrollTrigger.normalizeScroll(true);
      
      // Clear any existing triggers before creating new smoother
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill(true);
      });
      
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
      
      // Force refresh to detect data-speed elements
      ScrollTrigger.refresh();
    }
  }, 200);
};

onMounted(() => {
  initScrollSmoother();
});

// Also try reinitializing when components update (in case there's a render cycle issue)
onUpdated(() => {
  // Debounce this to avoid too many reinits
  clearTimeout(window.scrollResizeTimeout);
  window.scrollResizeTimeout = setTimeout(() => {
    if (window.ScrollTrigger && window.ScrollSmoother) {
      window.ScrollTrigger.refresh();
    }
  }, 500);
});
</script>
