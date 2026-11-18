<template>
  <section v-if="projects.length > 1" class="next-project sub-bg">
    <div class="container-fluid rest">
      <div class="row">
        <div class="col-md-6 rest">
          <div
            class="text-left box bg-img"
            :style="{ backgroundImage: `url('${previousProject.img}')` }"
          >
            <div class="cont d-flex align-items-center">
              <span class="mr-30 fz-30 ti-arrow-left"></span>
              <div>
                <h6 class="sub-title fz-16 mb-5">Prev Project</h6>
                <a :href="previousProject.link" class="fz-40 fw-600 stroke">
                  {{ previousProject.title }}
                  <span v-if="previousProject.projectTitle !== previousProject.title">
                    — {{ previousProject.projectTitle }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 rest">
          <div
            class="text-right d-flex box bg-img"
            :style="{ backgroundImage: `url('${nextProject.img}')` }"
          >
            <div class="ml-auto">
              <div class="cont d-flex align-items-center">
                <div>
                  <h6 class="sub-title fz-16 mb-5">Next Project</h6>
                  <a :href="nextProject.link" class="fz-40 fw-600 stroke">
                    {{ nextProject.title }}
                    <span v-if="nextProject.projectTitle !== nextProject.title">
                      — {{ nextProject.projectTitle }}
                    </span>
                  </a>
                </div>
                <span class="ml-30 fz-30 ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a :href="allProjectsLink" class="all-works-butn text-center">
        <span class="ti-view-grid fz-24 mb-10"></span>
        <span class="d-block fz-12 text-u ls1">all Projects</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PortfolioProject } from '@/data/portfolios/types';

const props = withDefaults(defineProps<{
  project: PortfolioProject;
  projects: PortfolioProject[];
  allProjectsLink?: string;
}>(), {
  allProjectsLink: '/dark/ser-corporate-design',
});

const currentIndex = computed(() =>
  Math.max(props.projects.findIndex((item) => item.link === props.project.link), 0),
);
const previousProject = computed(() => {
  if (!props.projects.length) {
    return props.project;
  }
  return props.projects[(currentIndex.value - 1 + props.projects.length) % props.projects.length];
});
const nextProject = computed(() => {
  if (!props.projects.length) {
    return props.project;
  }
  return props.projects[(currentIndex.value + 1) % props.projects.length];
});
</script>
