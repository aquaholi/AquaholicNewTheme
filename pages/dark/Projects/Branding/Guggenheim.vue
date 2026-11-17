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
        <!-- <Challenge /> -->
        <Wroks />
        <!-- <Solution /> -->
        <!-- <Next /> -->
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Challenge from '@/components/dark/Projects/Branding/Guggenheim/Challenge';
import Footer from '@/components/dark/blog-details/Footer';
import Header from '@/components/dark/Projects/Branding/Guggenheim/Header';
import Lines from '@/components/dark/common/Lines';
import Next from '@/components/dark/Projects/Branding/Guggenheim/Next';
import Navbar from '@/components/dark/creative-agency/Navbar.vue';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import Solution from '@/components/dark/Projects/Branding/Guggenheim/Solution';
import Wroks from '@/components/dark/Projects/Branding/Guggenheim/Wroks';
import LoadingScreen from '@/components/dark/common/loader';

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
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
