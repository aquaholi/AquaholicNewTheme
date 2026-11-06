<template>
  <section class="work-stand section-padding sub-bg">
    <!-- <div class="container pb-50">
      <div class="row justify-content-between">
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-15">
              <h6 class="sub-title main-color">Services</h6>
              <h2 class="d-slideup wow">
                <span class="sideup-text">
                  <span class="up-text">Corporate Design</span>
                </span>
              </h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text">
                  <p>
                    We deliver high-volume, strategy-led creative without compromising quality, speed, or consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->


    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-50 text-center">
          <div class="filter">
            <span class="text">Filter By :</span>
            <span data-filter="*" class="active"> Show All </span>
            <span data-filter=".Silal">Silal</span>
            <span data-filter=".Agthia">Agthia</span>
           
            <span data-filter=".ADNHC">ADNHC </span>
            <span data-filter=".PureLab">PureLab</span>
            <span data-filter=".Bnoon">Bnoon </span>
            
            <span data-filter=".Ceva">Ceva</span>
            <span data-filter=".Hitachi">Hitachi</span>
             <span data-filter=".CompassSingapore">Compass Singapore</span>
             <span data-filter=".AlDhafraEnergy">Al Dhafra Energy </span>
          </div>
        </div>
      </div>
      <div class="gallery row stand-marg">
        <div
          v-for="(item, i) in data"
          :key="i"
          :class="['col-lg-4', 'col-md-6', 'items', item.subTitle]">
          <div class="item mt-40">
            <div class="img">
              <img :src="item.img" alt="" />
            </div>
            <div class="cont mt-20">
              <h5 class="fz-22">
                <a :href="item.link">{{ item.title }}</a>
              </h5>
              <p>
                <a href="/dark/portfolio-standard">
                  {{ item.subTitle.split(' ')[0] }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/data/portfolios/corproate-design.json';
import initIsotope from '@/common/initIsotope';
onMounted(() => {
  initIsotope('gallery');
});
</script>
