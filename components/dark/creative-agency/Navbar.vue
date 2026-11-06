<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container">
      <a class="logo custom-logo"  href="/">
        <img src="/dark/assets/imgs/logo.svg" alt="logo" />
      </a>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              <span class="rolling-text">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dark/page-about">
              <span class="rolling-text">About</span>
            </a>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/dark/page-services2"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Services</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/dark/ser-corporate-design">Corporate Design</a>
              <a class="dropdown-item" href="/dark/ser-branding">Branding</a>
              <a class="dropdown-item" href="/dark/ser-content-creation">Content Creation</a>
              <a class="dropdown-item" href="/dark/ser-product-packaging">Product Packaging</a>
              <a class="dropdown-item" href="/dark/ser-annual-reports">Annual Reports</a>
              <a class="dropdown-item" href="/dark/ser-social-media">Social Media</a>
              <a class="dropdown-item" href="/dark/ser-web-design">Web Design</a>
            </div>
          </li>
          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/dark/industries/main-industries"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Industries</span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/dark/industries/indus-Healthcare-page">Healthcare</a>
              <a class="dropdown-item" href="/dark/industries/indus-BanksNFinancialInstitute-page">Banks & Financial Institutions</a>
              <a class="dropdown-item" href="/dark/industries/indus-HospitalityNFnB-page">Hospitality & F&B</a>
              <a class="dropdown-item" href="/dark/industries/indus-agriculturalNfnb-page">Agriculture & FMCG</a>
              <a class="dropdown-item" href="/dark/industries/indus-RealEstate-page">Real Estate</a>
              <a class="dropdown-item" href="/dark/industries/indus-TravelNLeisureNDestination-page">Travel, Leisure & Destination</a>
              <a class="dropdown-item" href="/dark/industries/indus-IndustrialNEngineering-page">Industrial & Engineering</a>
              <a class="dropdown-item" href="/dark/industries/indus-HealthNFitness-page">Health & Fitness</a>
              <a class="dropdown-item" href="/dark/industries/indus-ConglomeratesNHoldingGroups-page">Conglomerates & Holding Groups</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0">
              <span class="rolling-text">Retainers</span>
            </a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="#0">
              <span class="rolling-text">Portfolio</span>
            </a>
          </li>

           <li class="nav-item">
            <a class="nav-link" href="/dark/page-contact">
              <span class="rolling-text">Contact</span>
            </a>
          </li>
        </ul>
        
      </div>

      <!-- <div class="search-form">
        <div class="form-group">
          <input type="text" name="search" placeholder="Search" />
          <button>
            <span class="pe-7s-search"></span>
          </button>
        </div>
        <div class="search-icon">
          <span class="pe-7s-search open-search"></span>
          <span class="pe-7s-close close-search"></span>
        </div>
      </div> -->
      <div class="topnav">
        <div @click="toggleMenu" class="menu-icon cursor-pointer">
          <span class="icon ti-align-right"></span>
        </div>
      </div>
    </div>
  </nav>

  <div :class="`hamenu ${isOpen && 'open'}`">
    <div class="logo icon-img-100">
      <!-- <img src="/dark/assets/imgs/logo-light.png" alt="" /> -->
    </div>
    <div @click="closeMenu" class="close-menu cursor-pointer ti-close"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li>
                <div class="o-hidden">
                  <a href="#0" class="link">
                    <span class="fill-text" data-text="Home"> Home </span>
                  </a>
                </div>
              </li>
              <li>
                <div class="o-hidden">
                  <a href="/pages/dark/page-about" class="link">
                    <span class="fill-text" data-text="About"> About </span>
                  </a>
                </div>
              </li>

              
              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Services"> Services </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a href="#0" class="sub-link">Corporate Design</a>
                    </li>
                    <li>
                      <a href="/dark/ser-branding" class="sub-link">Branding</a>
                    </li>
                    <li>
                      <a href="/dark/ser-content-creation"" class="sub-link">Content Creation</a>
                    </li>
                    <li>
                      <a href="/dark/ser-product-packaging" class="sub-link">Product Packaging</a>
                    </li>
                    <li>
                      <a href="/dark/ser-annual-reports" class="sub-link">Annual Reports</a>
                    </li>
                    <li>
                      <a href="/dark/ser-social-media" class="sub-link">Social Media</a>
                    </li>
                    <li>
                      <a href="/dark/ser-web-design" class="sub-link">Web Design</a>
                    </li>
                  </ul>
                </div>
              </li>



              <li
                @click="toggleSubMenu"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
              >
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu">
                    <span class="fill-text" data-text="Industries"> Industries </span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <a href="/dark/industries/indus-Healthcare-page" class="sub-link">Healthcare</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-BanksNFinancialInstitute-page" class="sub-link">Banks & Financial Institutions</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-HospitalityNFnB-page" class="sub-link">Hospitality & F&B</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-agriculturalNfnb-page" class="sub-link">Agriculture & FMCG</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-RealEstate-page" class="sub-link">Real Estate</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-TravelNLeisureNDestination-page" class="sub-link">Travel, Leisure & Destination</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-IndustrialNEngineering-page" class="sub-link">Industrial & Engineering</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-HealthNFitness-page" class="sub-link">Health & Fitness</a>
                    </li>
                    <li>
                      <a href="/dark/industries/indus-ConglomeratesNHoldingGroups-page" class="sub-link">Conglomerates & Holding Groups</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="o-hidden">
                  <a href="#0" class="link">
                    <span class="fill-text" data-text="Retainers"> Retainers </span>
                  </a>
                </div>
              </li>

          
              <li>
                <div class="o-hidden">
                  <a href="#0" class="link">
                    <span class="fill-text" data-text="Portfolio"> Portfolio </span>
                  </a>
                </div>
              </li>
    <li>
                <div class="o-hidden">
                  <a href="/dark/page-contact" class="link">
                    <span class="fill-text" data-text="Contact"> Contact </span>
                  </a>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cont-info">
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Address</h6>
              <h5>
                Sheikha Jameela Tower - Office M03 - Abu Dhabi - UAE
              </h5>
            </div>
            <div class="item mb-50">
              <h6 class="sub-title mb-15 opacity-7">Social Media</h6>
              <ul class="rest social-text">
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Facebook</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Twitter</span>
                  </a>
                </li>
                <li class="mb-10">
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" class="hover-this">
                    <span class="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="item mb-40">
              <h6 class="sub-title mb-15 opacity-7">Contact Us</h6>
              <h5>
                <a href="#0">hello@aqcreative.ae</a>
              </h5>
              <h5 class="underline mt-10">
                <a href="tel:+971505705820">+971 50 570 5820</a>
                <a href="tel:+97125590980"> +971 2 559 0980</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar .navbar-nav .nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href === '#0') {
      link.classList.remove('active');
      return;
    }

    const normalizedHref = new URL(href, window.location.origin).pathname;
    if (normalizedHref === currentPath || (normalizedHref === '/' && currentPath === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
}

function toggleSearch() {
  let form = document.querySelector('.navbar .search-form');
  let closeBtn = document.querySelector('.search-form .close-search');

  form.classList.toggle('open');
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setActiveNavLink();
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isOpen = ref(false);
function toggleMenu() {
  const hamenu = document.querySelector('.hamenu');
  isOpen.value = !isOpen.value;
  setTimeout(() => {
    isOpen.value == false
      ? (hamenu.style.left = '-100%')
      : (hamenu.style.left = '0');
  }, 300);
}

function closeMenu() {
  const hamenu = document.querySelector('.hamenu');

  isOpen.value = false;
  setTimeout(() => {
    hamenu.style.left = '-100%';
  }, 300);
}

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach((item) => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document
    .querySelectorAll('ul.main-menu li')
    .forEach((item) => item.classList.remove('hoverd'));
}
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open') && SubMenu2 == null) {
      document.querySelectorAll('.sub-menu').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.remove('sub-open');
      subMenu.style.maxHeight = '0';
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      if (SubMenu2 == null) {
        document.querySelectorAll('.sub-menu').forEach((item) => {
          item.classList.remove('sub-open');
          item.style.maxHeight = '0';
          item.previousElementSibling.children[0].classList.remove('dopen');
        });

        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      } else {
        subMenu.classList.add('sub-open');
        subMenu.style.maxHeight = '450px';
        subMenu.previousElementSibling.children[0].classList.add('dopen');
      }
    }
  }
}
function toggleSubMenu2(event) {
  const SubMenu2 = event.currentTarget.querySelector('.sub-menu2');
  if (SubMenu2) {
    if (SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.remove('sub-open');
      SubMenu2.style.maxHeight = '0';
      SubMenu2.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!SubMenu2.classList.contains('sub-open')) {
      event.currentTarget.querySelectorAll('.sub-menu2').forEach((item) => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      SubMenu2.classList.add('sub-open');
      SubMenu2.style.maxHeight = '450px';
      SubMenu2.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}
</script>
