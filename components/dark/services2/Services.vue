<template>
  <section class="portfolio-tab crev section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Expertise</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            What We <span class="fw-200">Do Best</span>
          </h2>
        </div>
      </div>
      <div class="row">


        <div class="col-lg-5 d-flex align-items-center justify-content-center">
          <div class="glry-img">
            <div
              id="tab-1"
              class="bg-img tab-img current"
              data-background="/dark/assets/imgs/works/1/1.jpg"
            ></div>
            <div
              id="tab-2"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/works/1/2.jpg"
            ></div>
            <div
              id="tab-3"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/works/1/3.jpg"
            ></div>
            <div
              id="tab-4"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/works/1/4.jpg"
            ></div>
            <div
              id="tab-5"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/works/1/5.jpg"
            ></div>
            <div
              id="tab-6"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/works/1/3.jpg"
            ></div>
            <div
              id="tab-7"
              class="bg-img tab-img"
              data-background="/dark/assets/imgs/works/1/5.jpg"
            ></div>
          </div>
        </div>

        <div class="col-lg-6 offset-lg-1 content">
          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30 current"
            data-tab="tab-1"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Strategic Visual Systems</h6>
              <h4>Corporate Design</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/1.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>

          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-2"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Distinct Brand Identity</h6>
              <h4>Branding</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/2.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>

          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-3"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Scalable Content Production</h6>
              <h4>Content Creation</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/3.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>

          <div
            @mouseenter="handleMouseEnter"
            class="cluom mb-30"
            data-tab="tab-4"
          >
            <div class="info">
              <h6 class="sub-title opacity-7">Shelf Impact Design</h6>
              <h4>Product Packaging</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/4.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>

          <div @mouseenter="handleMouseEnter" class="cluom mb-30" data-tab="tab-5">
            <div class="info">
              <h6 class="sub-title opacity-7">Clear Data Storytelling</h6>
              <h4>Annual Reports</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/5.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>




          <div @mouseenter="handleMouseEnter" class="cluom" data-tab="tab-6">
            <div class="info mb-30">
              <h6 class="sub-title opacity-7">Engaging Social Content</h6>
              <h4>Social Media</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/5.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>

          <div @mouseenter="handleMouseEnter" class="cluom" data-tab="tab-7">
            <div class="info">
              <h6 class="sub-title opacity-7">User-Centric Experiences</h6>
              <h4>Web Design</h4>
            </div>
            <div class="img">
              <img src="/dark/assets/imgs/works/1/5.jpg" alt="" />
            </div>
            <div class="more text-u ls1 fz-12">
              <a href="/dark/page-services-details">
                View Details <i class="ml-15 ti-arrow-top-right"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});

function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.links-text li').forEach((el) => {
    el.classList.remove('current');
    // el.classList.add('no-active');
  });
  event.currentTarget.classList.add('current');
  // event.currentTarget.classList.remove('no-active');

  document
    .querySelectorAll('.glry-img .tab-img')
    .forEach((el) => el.classList.remove('current'));
  document.querySelector('#' + tab_id).classList.add('current');

  if (event.currentTarget.classList.contains('current')) return false;
}

function handleMouseLeave() {
  document
    .querySelectorAll('.glry-img .tab-img')
    .forEach((el) => el.classList.remove('current'));
}
</script>
