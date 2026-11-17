<template>
  <section class="work-minimal section-padding sub-bg">
    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-50">
      
          <div class="filter text-center">
            <span class="text"><b>Filter By :</b></span>
            <span data-filter="*" class="active"> Show All </span>
            <span v-for="category in categories" :key="category" :data-filter="`.${categoryClass(category)}`">
              {{ category }}
            </span>
          </div>
          
        </div>
      </div>
      <div class="gallery row stand-marg">
        <div
          v-for="(item, i) in projects"
          :key="i"
          :class="['col-lg-4', 'col-md-6', 'items', categoryClass(item.subTitle)]"
        >
          <div class="item mt-40">
            <div class="img">
              <img :src="item.img" alt="" />
              <div class="cont d-flex align-items-center">
                <div>
                  <h5 class="fz-22">
                    <a :href="item.link">{{ item.title }}</a>
                  </h5>
                  <p>
                    <a :href="item.link">{{ item.subTitle }}</a>
                  </p>
                </div>
                <div class="ml-auto">
                  <a :href="item.link" class="ti-arrow-top-right"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

 
<script setup lang="ts">
import data from '@/data/portfolios/corproate-design.json';
import type { PortfolioProject } from '@/data/portfolios/types';
import initIsotope from '@/common/initIsotope';

const projects: PortfolioProject[] = data;
const categoryClass = (value: string) => value.replace(/[^a-zA-Z0-9_-]/g, '');
const categories = [...new Set(projects.map((item) => item.subTitle))].sort();

onMounted(() => {
  initIsotope('gallery');
});
</script>
