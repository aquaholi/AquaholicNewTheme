<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <ProjectDetail :project="project" :projects="projects" />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import portfolioProjects from '@/data/portfolios/corproate-design.json';
import type { PortfolioProject } from '@/data/portfolios/types';
import Footer from '@/components/dark/blog-details/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar.vue';
import ProjectDetail from '@/components/dark/Projects/ProjectDetail.vue';

const projects: PortfolioProject[] = portfolioProjects;
const project = projects.find((item) => item.link === '/dark/Projects/Branding/Guggenheim');
if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

useHead({
  link: [
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
  ],
});

onBeforeMount(() => {
  ScrollSmoother.get()?.kill();
});
</script>
