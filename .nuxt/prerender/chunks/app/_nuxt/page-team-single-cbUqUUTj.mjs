import { p as publicAssetsURL } from '../../renderer.mjs';
import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps, onUnmounted } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'file://C:/xampp/htdocs/AQSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$5 } from './Footer-Bov6VySB.mjs';
import { _ as _sfc_main$3, a as _sfc_main$1$1, b as _sfc_main$2$1, L as Lines } from './loader-CCDLJnCr.mjs';
import { _ as _sfc_main$4 } from './Navbar-BtwYJRqD.mjs';
import { i as isInView } from './isInView-VXyFXDVH.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/h3/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/devalue/index.js';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/destr/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/scule/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/klona/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/defu/dist/defu.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/memory.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/xampp/htdocs/AQSite/node_modules/pathe/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/@unhead/shared/dist/index.mjs';
import '../server.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/xampp/htdocs/AQSite/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + publicAssetsURL("light/assets/imgs/team/t5.jpg");
const _sfc_main$2 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-single" }, _attrs))}><div class="container-fluid"><div class="row xlg-marg"><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><div class="col-lg-6 valign"><div class="cont"><h1>David Miller</h1><h6 class="text-u ls1 opacity-8">Project manager &amp; ART director</h6><div class="text main-bg"><p class="main-text"> Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark. </p><div class="row md-marg mt-40"><div class="col-sm-6"><p> Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark. </p></div><div class="col-sm-6"><p> Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark. </p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/team-single/Team.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
        }
      });
    }
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleShowProgressValues);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "skills section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5"><div class="skil-progs md-mb80"><h3>Professionals <span class="fw-300">Skills</span></h3><p class="fz-13 mt-15"> Similique sunin culpa qui officia deserunt mollitia animi est laborum ets dolorum fuga. Et harum quidem rerum facilis esty expedita distinctioam nobis est eligendi optio cumquey. </p><div class="skill-item mt-50"><h6 class="fz-16 mb-10">Product Design</h6><div class="skill-progress"><div class="progres" data-value="82%"></div></div></div><div class="skill-item mt-30"><h6 class="fz-16 mb-10">Brand Management</h6><div class="skill-progress"><div class="progres" data-value="94%"></div></div></div><div class="skill-item mt-30"><h6 class="fz-16 mb-10">Growth Analysis</h6><div class="skill-progress"><div class="progres" data-value="89%"></div></div></div></div></div><div class="col-lg-5 offset-lg-1"><div class="resume-exp"><h3>Educational <span class="fw-300">Experience</span></h3><p class="fz-13 mt-15"> Completely evisculates alone expertise through revolutionary strategic are theme areas fashion impactful paradigm for process centric relation whiteboard seamless capital with methods. </p><div class="box-items row mt-50"><div class="col-md-6 item"><span class="num"> 1 <small>st</small></span><div class="text-center"><h6 class="fz-16">Business Expert</h6><span class="opacity-7">2023 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 2 <small>st</small></span><div class="text-center"><h6 class="fz-16">Finance Manager</h6><span class="opacity-7">2020 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 3 <small>st</small></span><div class="text-center"><h6 class="fz-16">Senior Designer</h6><span class="opacity-7">2018 - Present(Themes)</span></div></div><div class="col-md-6 item"><span class="num"> 4 <small>st</small></span><div class="text-center"><h6 class="fz-16">Junior Architect</h6><span class="opacity-7">2016 - Present(Themes)</span></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/light/team-single/Skills.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "page-team-single",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/light/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/light/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/light/assets/css/style.css" }
      ]
      // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1$1), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2$1), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$5), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-team-single.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-team-single-cbUqUUTj.mjs.map
