<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <ProjectDetail
          :key="routePath"
          :project="project"
          :projects="relatedProjects"
          :all-projects-link="allProjectsLink"
        />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import portfolioProjects from '@/data/portfolios/corproate-design.json';
import socialMediaProjectData from '@/data/portfolios/social-media.json';
import brandingProjectData from '@/data/portfolios/branding.json';
import type { PortfolioProject } from '@/data/portfolios/types';
import Footer from '@/components/dark/blog-details/Footer';
import Lines from '@/components/dark/common/Lines';
import ProgressScroll from '@/components/dark/common/ProgressScroll';
import Cursor from '@/components/dark/common/cusor';
import LoadingScreen from '@/components/dark/common/loader';
import Navbar from '@/components/dark/creative-agency/Navbar.vue';
import ProjectDetail from '@/components/dark/Projects/ProjectDetail.vue';

const route = useRoute();
const corporateProjects: PortfolioProject[] = portfolioProjects;
const socialMediaProjects: PortfolioProject[] = socialMediaProjectData;
const brandingProjects: PortfolioProject[] = brandingProjectData;
const projects = [...corporateProjects, ...socialMediaProjects, ...brandingProjects];
const routePath = computed(() => `/dark/Projects/${(Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug]).join('/')}`.toLowerCase());
const project = computed(() => {
  const foundProject = projects.find((item) => item.link.toLowerCase() === routePath.value);
  if (!foundProject) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' });
  }
  return foundProject;
});
const isSocialMediaProject = computed(() =>
  socialMediaProjects.some((item) => item.link.toLowerCase() === routePath.value),
);
const isBrandingProject = computed(() =>
  brandingProjects.some((item) => item.link.toLowerCase() === routePath.value),
);
const relatedProjects = computed(() => {
  if (isSocialMediaProject.value) return socialMediaProjects;
  if (isBrandingProject.value) return brandingProjects;
  return corporateProjects;
});
const allProjectsLink = computed(() => {
  if (isSocialMediaProject.value) return '/dark/ser-social-media';
  if (isBrandingProject.value) return '/dark/ser-branding';
  return '/dark/ser-corporate-design';
});

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
