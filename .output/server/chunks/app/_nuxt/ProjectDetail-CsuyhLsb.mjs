import { useSSRContext, defineComponent, computed, mergeProps, ref, onUnmounted } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Next",
  __ssrInlineRender: true,
  props: {
    project: {},
    projects: {}
  },
  setup(__props) {
    const props = __props;
    const currentIndex = computed(
      () => Math.max(props.projects.findIndex((item) => item.link === props.project.link), 0)
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
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.projects.length > 1) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "next-project sub-bg" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-md-6 rest"><div class="text-left box bg-img" style="${ssrRenderStyle({ backgroundImage: `url('${previousProject.value.img}')` })}"><div class="cont d-flex align-items-center"><span class="mr-30 fz-30 ti-arrow-left"></span><div><h6 class="sub-title fz-16 mb-5">Prev Project</h6><a${ssrRenderAttr("href", previousProject.value.link)} class="fz-40 fw-600 stroke">${ssrInterpolate(previousProject.value.title)} `);
        if (previousProject.value.projectTitle !== previousProject.value.title) {
          _push(`<span> \u2014 ${ssrInterpolate(previousProject.value.projectTitle)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a></div></div></div></div><div class="col-md-6 rest"><div class="text-right d-flex box bg-img" style="${ssrRenderStyle({ backgroundImage: `url('${nextProject.value.img}')` })}"><div class="ml-auto"><div class="cont d-flex align-items-center"><div><h6 class="sub-title fz-16 mb-5">Next Project</h6><a${ssrRenderAttr("href", nextProject.value.link)} class="fz-40 fw-600 stroke">${ssrInterpolate(nextProject.value.title)} `);
        if (nextProject.value.projectTitle !== nextProject.value.title) {
          _push(`<span> \u2014 ${ssrInterpolate(nextProject.value.projectTitle)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a></div><span class="ml-30 fz-30 ti-arrow-right"></span></div></div></div></div></div></div><div><a href="/dark/ser-corporate-design" class="all-works-butn text-center"><span class="ti-view-grid fz-24 mb-10"></span><span class="d-block fz-12 text-u ls1">all Projects</span></a></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Projects/Branding/Guggenheim/Next.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Wroks",
  __ssrInlineRender: true,
  props: {
    images: {},
    projectTitle: {}
  },
  setup(__props) {
    const viewport = ref();
    const track = ref();
    let galleryTween;
    let resizeTimer;
    const initializeGallery = () => {
      var _a;
      (_a = galleryTween == null ? void 0 : galleryTween.scrollTrigger) == null ? void 0 : _a.kill();
      galleryTween == null ? void 0 : galleryTween.kill();
      galleryTween = void 0;
      const galleryTrack = track.value;
      const galleryViewport = viewport.value;
      if (!galleryTrack || !galleryViewport || (void 0).innerWidth <= 991) {
        return;
      }
      const distance = galleryTrack.scrollWidth - galleryViewport.clientWidth;
      if (distance <= 0) {
        return;
      }
      galleryTween = gsap.to(galleryTrack, {
        x: () => -(galleryTrack.scrollWidth - galleryViewport.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: galleryViewport,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          end: () => `+=${Math.max(0, galleryTrack.scrollWidth - galleryViewport.clientWidth)}`
        }
      });
      ScrollTrigger.refresh();
    };
    const handleResize = () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(initializeGallery, 150);
    };
    onUnmounted(() => {
      var _a;
      (void 0).removeEventListener("resize", handleResize);
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      (_a = galleryTween == null ? void 0 : galleryTween.scrollTrigger) == null ? void 0 : _a.kill();
      galleryTween == null ? void 0 : galleryTween.kill();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "viewport",
        ref: viewport,
        class: "works project-gallery-viewport thecontainer ontop"
      }, _attrs))} data-v-dfe8fdd7><div class="project-gallery-track" data-v-dfe8fdd7><!--[-->`);
      ssrRenderList(_ctx.images, (image, index) => {
        _push(`<div class="panel project-gallery-panel" data-v-dfe8fdd7><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `${_ctx.projectTitle} ${index + 1}`)} class="project-gallery-image" data-v-dfe8fdd7></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Projects/Branding/Guggenheim/Wroks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Wroks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dfe8fdd7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectDetail",
  __ssrInlineRender: true,
  props: {
    project: {},
    projects: {}
  },
  setup(__props) {
    const props = __props;
    const galleryImages = computed(
      () => props.project.images.length ? props.project.images : [props.project.img]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="header-project1"><div class="container pt-100"><div class="row align-items-end"><div class="col-lg-8 md-mb50"><h1 class="fz-100">${ssrInterpolate(_ctx.project.title)}<br> ${ssrInterpolate(_ctx.project.projectTitle)}</h1></div><div class="col-lg-4"><div class="info"><div class="item mb-30"><span class="opacity-8 mb-5">Category :</span><h6>${ssrInterpolate(_ctx.project.subTitle)}</h6></div></div></div></div></div></header>`);
      _push(ssrRenderComponent(Wroks, {
        images: galleryImages.value,
        "project-title": _ctx.project.title
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        project: _ctx.project,
        projects: _ctx.projects
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/Projects/ProjectDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProjectDetail-CsuyhLsb.mjs.map
