<template>
  <header class="header-project1">
    <div class="container pt-100">
      <div class="row align-items-end">
        <div class="col-lg-8 md-mb50">
          <h1 class="fz-100">
            {{ project.title }}<br />
            {{ project.projectTitle }}
          </h1>
        </div>
        <div class="col-lg-4">
          <div class="info">
            <div class="item mb-30">
              <span class="opacity-8 mb-5">Category :</span>
              <h6>{{ project.subTitle }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-img mt-100" :style="{ backgroundImage: `url('${project.img}')` }"></div> -->
  </header>
  <Wroks :images="galleryImages" :project-title="project.title" />
  <Next :project="project" :projects="projects" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PortfolioProject } from '@/data/portfolios/types';
import Next from '@/components/dark/Projects/Branding/Guggenheim/Next.vue';
import Wroks from '@/components/dark/Projects/Branding/Guggenheim/Wroks.vue';

const props = defineProps<{
  project: PortfolioProject;
  projects: PortfolioProject[];
}>();

const galleryImages = computed(() =>
  props.project.images.length ? props.project.images : [props.project.img],
);
</script>
