import { u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, defineComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from "./loader-rPQn2KgB.js";
import { N as Navbar } from "./Navbar-CUpl-oSg.js";
import { d as data } from "./corproate-design-Ds2MCMAN.js";
import { _ as _sfc_main$3 } from "./Footer-DCoFxQu0.js";
import "./Header-jM8KL62R.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "./logo-ojOhGMds.js";
import "swiper/vue";
import "swiper";
const _sfc_main$2 = {
  __name: "corporate-header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header page-header bg-img section-padding",
        "data-background": "/dark/assets/imgs/header/bg1.jpg",
        "data-overlay-dark": "9"
      }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Corporate Design.</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div><p class="pt-50" style="${ssrRenderStyle({ "padding-left": "15%", "padding-right": "15%" })}"> We create professional corporate design solutions that establish a consistent brand identity, strengthen visual communication, and ensure a cohesive presence across all business touchpoints.</p></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-standard/corporate-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = _sfc_main$2;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "corporate-design-portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = data;
    const categoryClass = (value) => value.replace(/[^a-zA-Z0-9_-]/g, "");
    const categories = [...new Set(projects.map((item) => item.subTitle))].sort();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-minimal section-padding sub-bg" }, _attrs))}><div class="container-xxl"><div class="row"><div class="filtering col-12 mb-50"><div class="filter text-center"><span class="text"><b>Filter By :</b></span><span data-filter="*" class="active"> Show All </span><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<span${ssrRenderAttr("data-filter", `.${categoryClass(category)}`)}>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="gallery row stand-marg"><!--[-->`);
      ssrRenderList(unref(projects), (item, i) => {
        _push(`<div class="${ssrRenderClass(["col-lg-4", "col-md-6", "items", categoryClass(item.subTitle)])}"><div class="item mt-40"><div class="img"><img${ssrRenderAttr("src", item.img)} alt=""><div class="cont d-flex align-items-center"><div><h5 class="fz-22"><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.title)}</a></h5><p><a${ssrRenderAttr("href", item.link)}>${ssrInterpolate(item.subTitle)}</a></p></div><div class="ml-auto"><a${ssrRenderAttr("href", item.link)} class="ti-arrow-top-right"></a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-gallery/corporate-design-portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ser-corporate-design",
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
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(unref(ProgressScroll), null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/ser-corporate-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ser-corporate-design-BnGrseeU.js.map
