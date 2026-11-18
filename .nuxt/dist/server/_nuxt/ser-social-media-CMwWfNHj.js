import { _ as _export_sfc, u as useHead } from "./_plugin-vue_export-helper-Bp6Oo5Q3.js";
import { mergeProps, useSSRContext, defineComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { L as LoadingScreen, C as Cursor, P as ProgressScroll, a as Lines } from "./loader-rPQn2KgB.js";
import { N as Navbar } from "./Navbar-CUpl-oSg.js";
import { _ as _imports_0 } from "./arrow-right-D5_iop0t.js";
import { p as projectsData } from "./social-media-C1e6XRmU.js";
import { _ as _sfc_main$3 } from "./Footer-DCoFxQu0.js";
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
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header section-padding" }, _attrs))}><div class="container pt-100"><div class="text-center"><h1>Social Media</h1><div class="mt-15"><a href="/dark/home-main">Home</a><span class="padding-rl-20">|</span><span class="main-color">Services</span></div><p class="pt-50" style="${ssrRenderStyle({ "padding-left": "15%", "padding-right": "15%" })}"> We deliver strategic social media marketing solutions that increase brand visibility, reach target audiences, and drive engagement through targeted campaigns and data-driven strategies. </p></div></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-sticky/ser-socail-media-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ser-social-media-portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = projectsData;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "work-sticky section-padding pt-60 sub-bg" }, _attrs))}><div class="container"><!--[-->`);
      ssrRenderList(unref(projects), (project, index) => {
        _push(`<div class="row align-items-center"><div class="${ssrRenderClass([
          "col-lg-8",
          "items",
          index % 2 === 1 ? "order-lg-2" : ""
        ])}"><div class="img"><a${ssrRenderAttr("href", project.link)}><img${ssrRenderAttr("src", project.img)}${ssrRenderAttr("alt", `${project.title} social media designs`)}></a></div></div><div class="${ssrRenderClass([
          "col-lg-4",
          "items",
          index % 2 === 1 ? "order-lg-1" : ""
        ])}"><div class="cont"><div class="sticky-item"><h6 class="sub-title opacity-7 mb-10">${ssrInterpolate(project.subTitle)}</h6><h5 class="mb-15">${ssrInterpolate(project.title)}</h5><a${ssrRenderAttr("href", project.link)} class="rmore mt-30"><span class="sub-title">View Designs</span><img${ssrRenderAttr("src", _imports_0)} alt="" class="icon-img-20 ml-5"></a></div></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dark/portfolio-sticky/ser-social-media-portfolio.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ser-social-media",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/ser-social-media.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ser-social-media-CMwWfNHj.js.map
