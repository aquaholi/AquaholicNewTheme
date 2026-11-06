<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <ProgressScroll />
        <Portfolio />
      </main>
      <Footer />
    </div>
  </div>
</template>


<script setup>
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import { onMounted } from 'vue';
import Navbar from '@/components/dark/creative-agency/Navbar.vue';
import Header from '@/components/dark/portfolio-standard/corporate-header.vue';
import Portfolio from '@/components/dark/portfolio-gallery/corporate-design-portfolio.vue';
import Footer from '@/components/dark/blog-details/Footer';
import HeaderImage from '@/components/dark/showcase-carousel/Header';
import TitleParagraph from '@/components/dark/services-custom/TitlePara.vue'
import Title from '@/components/dark/services-custom/Title.vue'


useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
  // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
});
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
