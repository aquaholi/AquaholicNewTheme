import { u as useHead } from './_plugin-vue_export-helper-Bp6Oo5Q3.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Footer-DCoFxQu0.mjs';
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from './loader-rPQn2KgB.mjs';
import { N as Navbar } from './Navbar-CUpl-oSg.mjs';
import { _ as _imports_0 } from './1-B1Q864LO.mjs';
import { _ as _imports_1, a as _imports_2 } from './3-Bn4yLYcT.mjs';
import { _ as _imports_3, a as _imports_4 } from './5-Dh0eIOr1.mjs';
import { _ as _imports_0$1 } from './2-_rZ-GbIF.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './logo-ojOhGMds.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$4 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "header page-header-cerv bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/2.jpg",
        "data-overlay-dark": "4"
      }, _attrs))}><div class="container pt-100 ontop"><div class="text-center"><h1 class="fz-100">Our Services.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/services2/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-tab crev section-padding" }, _attrs))}><div class="container"><div class="sec-head mb-80"><h6 class="sub-title main-color mb-25">Our Expertise</h6><div class="bord pt-25 bord-thin-top d-flex align-items-center"><h2 class="fw-600 text-u ls1"> What We <span class="fw-200">Do Best</span></h2></div></div><div class="row"><div class="col-lg-5 d-flex align-items-center justify-content-center"><div class="glry-img"><div id="tab-1" class="bg-img tab-img current" data-background="/dark/assets/imgs/works/1/1.jpg"></div><div id="tab-2" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/2.jpg"></div><div id="tab-3" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-4" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/4.jpg"></div><div id="tab-5" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div><div id="tab-6" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/3.jpg"></div><div id="tab-7" class="bg-img tab-img" data-background="/dark/assets/imgs/works/1/5.jpg"></div></div></div><div class="col-lg-6 offset-lg-1 content"><div class="cluom mb-30 current" data-tab="tab-1"><div class="info"><h6 class="sub-title opacity-7">Strategic Visual Systems</h6><h4>Corporate Design</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-corporate-design"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-2"><div class="info"><h6 class="sub-title opacity-7">Distinct Brand Identity</h6><h4>Branding</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-branding"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-3"><div class="info"><h6 class="sub-title opacity-7">Scalable Content Production</h6><h4>Content Creation</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-content-creation"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-4"><div class="info"><h6 class="sub-title opacity-7">Shelf Impact Design</h6><h4>Product Packaging</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-product-packaging"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom mb-30" data-tab="tab-5"><div class="info"><h6 class="sub-title opacity-7">Clear Data Storytelling</h6><h4>Annual Reports</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-annual-reports"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-6"><div class="info mb-30"><h6 class="sub-title opacity-7">Engaging Social Content</h6><h4>Social Media</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-social-media"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div><div class="cluom" data-tab="tab-7"><div class="info"><h6 class="sub-title opacity-7">User-Centric Experiences</h6><h4>Web Design</h4></div><div class="img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="more text-u ls1 fz-12"><a href="/dark/ser-web-design"> View Details <i class="ml-15 ti-arrow-top-right"></i></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/services2/Services.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MainFeat",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "main-feat section-padding bg-img",
        "data-background": "/dark/assets/imgs/header/bg-4.png",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row justify-content-between"><div class="col-lg-6 md-mb50"><h6 class="sub-title main-color mb-15">Our Process</h6><h2 class="fw-600 fz-70"><span class="fw-300">How We Actually</span> Deliver </h2></div><div class="col-lg-5 d-flex align-items-end"><div class="text full-width pb-40 bord-thin-bottom"><p> We follow a structured yet flexible approach designed to keep your brand moving forward with clarity and consistency. From understanding your requirements to delivering high-quality creative at speed, every step is built to ensure efficiency, alignment, and impact. Our process is simple, transparent, and optimized for scale\u2014so you always know what to expect, and we consistently deliver beyond it. </p></div></div></div></div><div class="row justify-content-between"><div class="col-lg-6"><div class="img md-mb50"><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="radius-15"></div></div><div class="col-lg-5"><div class="row"><div class="col-md-6"><div class="item mb-50"><h5 class="mb-15">From Brief to Impact</h5><ul class="rest dot-list"><li class="mb-10">Brief \u2192 Clarity session </li><li class="mb-10">Strategy \u2192 Content planning </li><li class="mb-10">Execution \u2192 High-volume production</li><li class="mb-10">Delivery \u2192 Fast turnaround </li><li class="mb-10">Optimization \u2192 Continuous refinement</li></ul></div><div class="item sm-mb50"><h5 class="mb-15">Speed &amp; Scale</h5><ul class="rest dot-list"><li class="mb-10">24\u201348 hr turnaround </li><li class="mb-10">1000+ assets annually</li><li class="mb-10">Multi-platform delivery</li></ul></div></div><div class="col-md-6"><div class="item mb-50"><h5 class="mb-15">A Week in Aquaholic</h5><ul class="rest dot-list"><li class="mb-10">Monday: Planning </li><li class="mb-10">Tuesday - Thursday: Production </li><li class="mb-10">Friday: Delivery &amp; revisions </li></ul></div><br><br><br><br><br><div class="item"><h5 class="mb-15">In a typical month, we deliver</h5><ul class="rest dot-list"><li class="mb-10">100+ social media posts</li><li class="mb-10">35+ campaigns</li><li class="mb-10">80+ presentations </li><li class="mb-10">Ongoing design support</li></ul></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/services2/MainFeat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "page-services2",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/dark/assets/css/plugins.css" },
        { rel: "stylesheet", href: "/dark/assets/css/satoshi.css" },
        { rel: "stylesheet", href: "/dark/assets/css/style.css" }
      ]
      // script: [{ src: '/dark/assets/js/smoother-script.js', defer: true }],
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(LoadingScreen), null, null, _parent));
      _push(ssrRenderComponent(unref(Cursor), null, null, _parent));
      _push(ssrRenderComponent(unref(ProgressScroll), null, null, _parent));
      _push(ssrRenderComponent(unref(Lines), null, null, _parent));
      _push(`<div id="smooth-wrapper">`);
      _push(ssrRenderComponent(unref(Navbar), null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/page-services2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page-services2-Dkoy4V0S.mjs.map
