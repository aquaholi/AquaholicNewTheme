<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <ProjectDetail :key="routePath" :project="project" :projects="projects" />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import portfolioProjects from '@/data/portfolios/corproate-design.json';
import type { PortfolioProject } from '@/data/portfolios/types';
import Footer from '@/components/dark/blog-details/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar.vue';
import ProjectDetail from '@/components/dark/Projects/ProjectDetail.vue';

const route = useRoute();
const projects: PortfolioProject[] = portfolioProjects;
const routePath = computed(() => `/dark/Projects/${(Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]).join('/')}`.toLowerCase());
const project = computed(() => {
  const foundProject = projects.find((item) => item.link.toLowerCase() === routePath.value);
  if (!foundProject) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' });
  }
  return foundProject;
});

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
