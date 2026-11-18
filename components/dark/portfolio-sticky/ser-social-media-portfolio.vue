<template>
  <section class="work-sticky section-padding pt-60 sub-bg">
    <div class="container">
      <div v-for="(project, index) in projects" :key="project.link" class="row align-items-center">
        <div
          :class="[
            'col-lg-8',
            'items',
            index % 2 === 1 ? 'order-lg-2' : '',
          ]"
        >
          <div class="img">
            <a :href="project.link">
              <img :src="project.img" :alt="`${project.title} social media designs`" />
            </a>
          </div>
        </div>
        <div
          :class="[
            'col-lg-4',
            'items',
            index % 2 === 1 ? 'order-lg-1' : '',
          ]"
        >
          <div class="cont">
            <div class="sticky-item">
              <h6 class="sub-title opacity-7 mb-10">{{ project.subTitle }}</h6>
              <h5 class="mb-15">{{ project.title }}</h5>
              <a :href="project.link" class="rmore mt-30">
                <span class="sub-title">View Designs</span>
                <img
                  src="/dark/assets/imgs/arrow-right.png"
                  alt=""
                  class="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import projectsData from '@/data/portfolios/social-media.json';
import type { PortfolioProject } from '@/data/portfolios/types';

const projects: PortfolioProject[] = projectsData;
</script>
