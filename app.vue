<template>
  <div class="home-cta-wrapper">
    <a href="tel:+971505705820" class="home-cta-button phone" aria-label="Call us">
      <span class="icon"><i class="fas fa-phone-alt"></i></span>
    </a>
    <a
      href="https://wa.me/971505705820"
      target="_blank"
      rel="noopener noreferrer"
      class="home-cta-button whatsapp"
      aria-label="WhatsApp"
    >
      <span class="icon"><i class="fab fa-whatsapp"></i></span>
    </a>
  </div>
  <NuxtPage />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const CTA_SCROLL_OFFSET = 150;
const toggleHomeCTA = () => {
  const cta = document.querySelector('.home-cta-wrapper');
  if (!cta) return;

  if (window.pageYOffset > CTA_SCROLL_OFFSET) {
    cta.classList.add('active-cta');
  } else {
    cta.classList.remove('active-cta');
  }
};

onMounted(() => {
  window.addEventListener('scroll', toggleHomeCTA);
  toggleHomeCTA();
});

onUnmounted(() => {
  window.removeEventListener('scroll', toggleHomeCTA);
});
</script>
