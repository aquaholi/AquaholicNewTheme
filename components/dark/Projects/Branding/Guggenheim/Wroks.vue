<template>
  <div ref="viewport" class="works project-gallery-viewport thecontainer ontop">
    <div ref="track" class="project-gallery-track">
      <div v-for="(image, index) in images" :key="image" class="panel project-gallery-panel">
        <img :src="image" :alt="`${projectTitle} ${index + 1}`" class="project-gallery-image" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

defineProps<{
  images: string[];
  projectTitle: string;
}>();

const viewport = ref<HTMLElement>();
const track = ref<HTMLElement>();
let galleryTween: { kill: () => void; scrollTrigger?: { kill: () => void } } | undefined;
let resizeTimer: ReturnType<typeof setTimeout> | undefined;

const initializeGallery = () => {
  galleryTween?.scrollTrigger?.kill();
  galleryTween?.kill();
  galleryTween = undefined;

  const galleryTrack = track.value;
  const galleryViewport = viewport.value;
  if (!galleryTrack || !galleryViewport || window.innerWidth <= 991) {
    return;
  }

  const distance = galleryTrack.scrollWidth - galleryViewport.clientWidth;
  if (distance <= 0) {
    return;
  }

  galleryTween = gsap.to(galleryTrack, {
    x: () => -(galleryTrack.scrollWidth - galleryViewport.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: galleryViewport,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      end: () => `+=${Math.max(0, galleryTrack.scrollWidth - galleryViewport.clientWidth)}`,
    },
  });
  ScrollTrigger.refresh();
};

const handleResize = () => {
  if (resizeTimer) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(initializeGallery, 150);
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  initializeGallery();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (resizeTimer) {
    clearTimeout(resizeTimer);
  }
  galleryTween?.scrollTrigger?.kill();
  galleryTween?.kill();
});
</script>

<style scoped>
.project-gallery-viewport.works.thecontainer {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  padding: 0;
  overflow: hidden;
}

.project-gallery-track {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
}

.project-gallery-track > .project-gallery-panel {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #1a1a1a;
}

.project-gallery-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  object-position: center;
}

@media (max-width: 991px) {
  .project-gallery-viewport.works.thecontainer {
    width: 100%;
    height: auto;
    min-height: 0;
    padding: 40px 0;
    overflow: visible;
  }

  .project-gallery-track {
    display: block;
    width: 100%;
  }

  .project-gallery-track > .project-gallery-panel {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0 !important;
  }

  .project-gallery-image {
    width: 100%;
    height: auto;
    max-width: none;
    max-height: none;
    object-fit: contain;
  }
}
</style>
