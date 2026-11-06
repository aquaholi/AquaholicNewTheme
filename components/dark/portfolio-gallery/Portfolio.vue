<template>
  <section class="work-minimal section-padding sub-bg">
    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-50 text-center">
          <div class="filter" >
            <span class="text">Filter By :</span>
            <span data-filter="*" class="active"> Show All </span>
            <span data-filter=".CorporateStationery">Corporate Stationery</span>
            <span data-filter=".Flyers">Flyers</span>
            <span data-filter=".Presentations&PitchDecks">Presentations & Pitch Decks</span>
            <span data-filter=".MarketingCampaigns">Marketing Campaigns</span>
            <span data-filter=".PrintAds">Print Ads</span>
            <span data-filter=".OOH">OOH (Billboard, Signage)</span>
            <span data-filter=".EmailersNewsletters">Emailers / Newsletters</span>
            <span data-filter=".EnvironmentalGraphics">Environmental Graphics</span>
            <span data-filter=".EventsBranding">Events Branding</span>
          </div>
        </div>
      </div>
      <div class="gallery row stand-marg">
        <div
          v-for="(item, i) in data"
          :key="i"
          :class="['col-lg-4', 'col-md-6', 'items', item.subTitle]"
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
                    <a :href="item.link">{{ item.subTitle.split(' ')[0] }}</a>
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
<script setup>
import data from '@/data/portfolios/workstand.json';
import initIsotope from '@/common/initIsotope';
onMounted(() => {
  initIsotope('gallery');
});
</script>
